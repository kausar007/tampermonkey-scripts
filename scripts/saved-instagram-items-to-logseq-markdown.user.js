// ==UserScript==
// @name         Saved Instagram Items to Logseq Markdown
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Super simple script to retrieve links of saved Instagram items and download as Logseq markdown file. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @run-at       context-menu
// @downloadURL  https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/saved-instagram-items-to-logseq-markdown.user.js
// ==/UserScript==


(function() {
    'use strict';

    // tag or class names
    const saved_items_class_name = "_aabd _aa8k  _al3l";

    // date formatting and page name
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
    const char_filter = /[^a-zA-Z0-9 ]/g;

    const filename = `Instagram%2FSaved%2F${formattedDate}.md`;

    // variable declaration
    var text, current_item, a, img, thumbnail, title, url;

    // retrieve items
    var items = document.getElementsByClassName(saved_items_class_name);
    text = `- Number of items: ${items.length}\n`;

    text += "- | Thumbnail | Title | URL |\n";
    text += "|-----------|------ |------|\n";
    for (var index = 0; index < items.length; index++) {
        current_item = items[index];
        a = current_item.getElementsByTagName('a');
        img = current_item.getElementsByTagName('img');
        thumbnail = `![](${img[0].src}){:width 64}`
        title = `${img[0].alt.replace(char_filter, '').substring(0, 80)}`;
        url = `${a[0].href}`;
        text += `| ${thumbnail} | ${title} | ${url} |\n`
    }

    const blob = new Blob([text], { type: 'text/plain' });
    const blob_url = URL.createObjectURL(blob);
    const blob_link = document.createElement('a');

    blob_link.href = blob_url;
    blob_link.download = filename;
    blob_link.click();
    URL.revokeObjectURL(blob_url);
})();
