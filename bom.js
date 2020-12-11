const axios = require('axios');

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function downloadFileSync (url, filename = '') {
    const link = document.createElement('a')
    link.style = 'position: fixed; left -10000px;'
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    console.log(link)
    document.body.removeChild(link)
}

/**
 * 下载 URL 文件
 * @param {string} url 下载文件地址
 */
async function downloadFileAsync(url) {
  const filename = decodeURIComponent(url).split("filename=").pop() || "";
  const extension = filename.split(".").pop().toLowerCase();
  if (["jpg", "png", "jpeg"].indexOf(extension) > -1) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.style.height = 0;
    iframe.src = url;
    document.body.appendChild(iframe);
    setTimeout(() => {
      iframe.remove();
    }, 5 * 60 * 1000);
  } else {
    // 如果文件是图片，则通过 Blob 下载
    const link = document.createElement("a");
    link.style = "position: fixed; left -10000px;";
    link.href = await toDataUrl(url);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function toDataUrl(url) {
  return axios
    .get(url, { responseType: "blob" })
    .then((response) => {
      return response.data;
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
}

/**
 * 滚动到文档中的某个坐标
 * @param {*} x 
 * @param {*} y 
 */
function scrollWindow (x = 0, y = 0) {
  window.scrollTo(x, y);
}

module.exports = {
  getParameterByName,
  downloadFileSync,
  downloadFileAsync,
  toDataUrl,
  scrollWindow
};
