// ==UserScript==
// @name         Saved Instagram Items to Hoarder Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Super simple script to retrieve links of saved Instagram items and download as Hoarder script. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.instagram.com/*/saved/*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @run-at       context-menu
// @require      https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/common.js
// @downloadURL  https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/saved-instagram-items-to-hoarder-script.user.js
// @updateURL    https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/saved-instagram-items-to-hoarder-script.user.js
// ==/UserScript==

(function () {
  "use strict";

  const file_name = "instagram-saved";
  var tags = ["Instagram Saved"];

  // tag or class names
  const saved_items_class_name =
    "x1lliihq x1n2onr6 xh8yej3 x4gyw5p x2pgyrj x56m6dy x1ntc13c xn45foy x9i3mqj";

  const filepath = get_dated_page_name(file_name, ".sh");

  var urls = retrieve_links(saved_items_class_name, "class");

  var script_text = get_hoarder_script(urls, tags);

  download_text(script_text, filepath);
})();
