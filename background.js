chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, {
        file: "main.js"
    }, function(result) {
        if (chrome.runtime.lastError) {
            console.log('ERROR: ' + chrome.runtime.lastError.message);
            return;
        }
    });

    if(true) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {
        "code": 'hatenaBlogAutoReloader.reload();'
    }, function(result) {
        if (chrome.runtime.lastError) {
            console.log('ERROR: ' + chrome.runtime.lastError.message);
            return;
        }
    });
});

//     //var click_event = $().createEvent("MouseEvents");
//     //click_event.initEvent("click", false, true);
//     //target_element.dispatchEvent(click_event);
//     //target_element.trigger("click");
