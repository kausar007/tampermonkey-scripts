// ==UserScript==
// @name         Get Links of Saved Facebook Items
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Super simple script to output links of saved Facebook items to browser console. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @run-at       context-menu
// ==/UserScript==


(function() {
    'use strict';

    const SAVED_ITEM_CLASS_NAME = "x1yztbdb";

    var saved_items;
    var current_item;
    var a_tag;

    saved_items = document.getElementsByClassName(SAVED_ITEM_CLASS_NAME);

    for (var counter=0; counter < saved_items.length; counter++){
        current_item = saved_items[counter];
        a_tag = current_item.getElementsByTagName('a')
        console.log(a_tag[0].href)
    }
})();