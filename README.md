# Useful Tampermonkey Scripts

## How to install

Please look at the answer A102 on
[Tampermonkey's FAQs](https://www.tampermonkey.net/faq.php#Q102)

## Scripts

### Saved Facebook Items to Logseq Markdown

I had a lot of saved items on Facebook and wanted to back them up to my PKM tool
(Logseq) so I created a simple script to output all the links.

### Youtube Playlist Items to Logseq Markdown

When a youtube playlist is open. This script can be used with right click
context menu to output the titles and links to browser console. It uses video
embed format of Logseq

## Local Development

### Local webserver

Run the following command in scripts folder to serve scripts

```bash
python3 -m http.server
```

And then change the require to the following in the user scripts

```javascript
// @require      http://localhost:8000/common.js
```
