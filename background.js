    chrome.tabs.onCreated.addListener(function(tab) {
        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
                if(tab.url.startsWith("https://yourcompanyname.zoom.us") && changeInfo.status =="complete") {
                    chrome.tabs.remove(tab.id);
                }
        });
    });
