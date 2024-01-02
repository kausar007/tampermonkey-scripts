// ==UserScript==
// @name         Youtube Playlist to Logseq Markdown
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Super simple script to output links of Youtube playlist items to browser console. It uses Logseq markdown format.
// @author       kausar007
// @match        https://www.youtube.com/playlist*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';

    var video_lists = document.getElementsByTagName("ytd-playlist-video-list-renderer")
    var video_list = video_lists[0]
    var videos = video_list.getElementsByTagName("ytd-playlist-video-renderer")

    var output = ""

    for (var index=0; index < videos.length; index++){
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
