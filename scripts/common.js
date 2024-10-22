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
