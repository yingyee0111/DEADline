window.deadlines = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.deadlines[request.url] = request.data
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'display.html'})
})