// ==UserScript==
// @name         Saved Facebook Items to Logseq Markdown
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Super simple script to output links of saved Facebook items to browser console. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';
    const saved_item_class_name = "x1yztbdb";

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;

    const page_name = `Facebook/Saved/${formattedDate}`

    var saved_items;
    var current_item;
    var a_tag;

    saved_items = document.getElementsByClassName(saved_item_class_name);

    var output = "";
    console.log(`Page name: ${page_name}`);
    for (var counter = 0; counter < saved_items.length; counter++) {
        current_item = saved_items[counter];
        a_tag = current_item.getElementsByTagName('a');
        output += "- ";
        output += a_tag[0].href;
        output += "\n";
    }
    console.log(output);
})();
