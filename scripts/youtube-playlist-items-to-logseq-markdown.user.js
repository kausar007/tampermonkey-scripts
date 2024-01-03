// ==UserScript==
// @name         Youtube Playlist Items to Logseq Markdown
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Super simple script to output links of Youtube playlist items to browser console. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.youtube.com/playlist*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}${month}${day}`;

    const page_name = `YouTube/Playlists/Watch Later/${formattedDate}`

    var video_lists = document.getElementsByTagName("ytd-playlist-video-list-renderer")
    var video_list = video_lists[0]
    var videos = video_list.getElementsByTagName("ytd-playlist-video-renderer")

    var output = ""
    console.log(`Page name: ${page_name}`);
    for (var index = 0; index < videos.length; index++) {
        var video = videos[index]
        var a = video.querySelector('#video-title')
        output += "- "
        output += a.title
        output += "\n"
        output += "{{video " + a.href + "}}"
        output += "\n"
    }
    console.log(output)
})();
