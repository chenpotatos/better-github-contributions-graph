chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'github.com', schemes: ['https'] },
            css: ['.js-yearly-contributions'],
          }),
        ],
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ])
  })
})

chrome.storage.local.set({
  isInject: false,
})

chrome.runtime.onMessage.addListener(function (message) {
  if (message === 'runInject') {
    chrome.storage.local.set(
      {
        isInject: true,
      },
      async function () {
        const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true })

        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          files: ['js/content_script.js'],
        })
      }
    )
  }
})
