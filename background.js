chrome.webNavigation.onDOMContentLoaded.addListener(
    details => chrome.tabs.executeScript(details.tabId, { file: 'enable-dark-mode.js' }),
    {
        url: [
            { hostContains: 'web.whatsapp.com' }
        ]
    }
);
