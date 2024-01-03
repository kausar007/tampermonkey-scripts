// ==UserScript==
// @name         Youtube Playlist Items to Logseq Markdown
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Super simple script to output links of Youtube playlist items to browser console. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.youtube.com/playlist*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';

    // tag or class names
    const video_list_tag_name = "ytd-playlist-video-list-renderer";
    const video_tag_name = "ytd-playlist-video-renderer";

    // date formatting and page name
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;
    const char_filter = /[\\`*_{}[\]()#+\-.!]/g;

    const page_name = `YouTube/Playlists/Watch Later/${formattedDate}`;

    // variable declaration
    var current_item;
    var a;
    var output = "";

    // retrieve items
    var playlist_items = document.getElementsByTagName(video_list_tag_name);
    var playlist = playlist_items[0];
    var items = playlist.getElementsByTagName(video_tag_name);

    for (var index = 0; index < items.length; index++) {
        current_item = items[index];
        a = current_item.querySelector('#video-title');
        output += "- ";
        output += a.title.replace(char_filter, '');
        output += "\n";
        output += "{{video " + a.href + "}}";
        output += "\n";
    }
    // output to console
    console.log(`Page name: ${page_name}`);
    console.log(output);
})();
