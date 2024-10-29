// ==UserScript==
// @name         Saved Facebook Items to Hoarder Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Super simple script to retrieve links of saved Facebook items and download as Hoarder script. Run from browser's right click menu.
// @author       kausar007
// @match        https://www.facebook.com/saved/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @run-at       context-menu
// @require      https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/common.js
// @downloadURL  https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/saved-facebook-items-to-hoarder-script.user.js
// @updateURL    https://github.com/kausar007/tampermonkey-scripts/raw/main/scripts/saved-facebook-items-to-hoarder-script.user.js
// ==/UserScript==

(function () {
  "use strict";

  const file_name = "facebook-saved";
  var tags = ["Facebook Saved"];

  // tag or class names
  const saved_items_class_name =
    "x78zum5 xdt5ytf x1iyjqo2 x1qughib x1d52u69 x1ok221b xeuugli";

  const filepath = get_dated_page_name(file_name, ".sh");

  var urls = retrieve_links(saved_items_class_name, "class");

  var script_text = get_hoarder_script(urls, tags);

  download_text(script_text, filepath);
})();
