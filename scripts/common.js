/**
 * @param {string} name - name of the file. date will be appended.
 * @param {string} extension - file extension starting with dot. default is: .txt
 */
function get_dated_page_name(name, extension = ".txt") {
  // date formatting and page name
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;
  const filename = `${name}${formattedDate}${extension}`;
  return filename;
}

/**
 * @param {string} text - text content to download as file.
 * @param {string} filename - filename to use for downloaded file.
 */
function download_text(text, filename) {
  const blob = new Blob([text], { type: "text/plain" });
  const blob_url = URL.createObjectURL(blob);
  const blob_link = document.createElement("a");

  blob_link.href = blob_url;
  blob_link.download = filename;
  blob_link.click();
  URL.revokeObjectURL(blob_url);
}

/**
 * @param {string[]} urls - list of urls.
 * @param {string[]} tags - list of tags.
 */
function get_hoarder_script(urls, tags) {
  var text = `echo "Number of items: ${urls.length}"\n`;
  var url;
  for (var urls_index in urls) {
    url = urls[urls_index];
    text += `hoarder --api-key $API_KEY --server-addr $SERVER bookmarks add --link "${url}"`;
    for (var tag_index in tags) {
      text += ` --tag-name "${tags[tag_index]}"`;
    }
    text += `\necho ${urls_index + 1}\n`;
  }
  return text;
}

/**
 * @param {string} class name of the main div elements
 * @returns {string[]} urls - list of urls
 */
function retrieve_links_from_div(class_name) {
  var urls = [];

  // retrieve items
  var items = document.getElementsByClassName(class_name);

  // variable declaration
  var current_item, a, url;

  for (var index in items) {
    current_item = items[index];
    a = current_item.getElementsByTagName("a");
    url = `${a[0].href}`;
    urls.push(url);
  }
  return urls;
}
