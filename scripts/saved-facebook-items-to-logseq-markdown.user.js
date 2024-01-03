// ==UserScript==
// @name         Saved Facebook Items to Logseq Markdown
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Super simple script to output links of saved Facebook items to browser console. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @run-at       context-menu
// @downloadURL  https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/saved-facebook-items-to-logseq-markdown.user.js
// ==/UserScript==

(function () {
    'use strict';

    // tag or class names
    const saved_items_class_name = "x1yztbdb";

    // date formatting and page name
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
    const char_filter = /[\\`*_{}[\]()#+\-.!]/g;

    const page_name = `Facebook/Saved/${formattedDate}`;

    // variable declaration
    var current_item;
    var a;
    var output = "";

    // retrieve items
    var items = document.getElementsByClassName(saved_items_class_name);

    for (var index = 0; index < items.length; index++) {
        current_item = items[index];
        a = current_item.getElementsByTagName('a');
        output += "- ";
        output += a[1].text.replace(char_filter, '').substring(0, 80);
        output += "\n";
        output += a[1].href;
        output += "\n";
    }
    // output to console
    console.log(`Page name: ${page_name}`);
    console.log(output);
})();
