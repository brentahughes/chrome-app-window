chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("clicked yay");
    console.log(tab);
    chrome.windows.create({
        "url": tab.url,
        "type": "popup",
        "width": 600,
        "height": 700
    });
});