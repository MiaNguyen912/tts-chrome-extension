var menuItem = {
    "id": "Speak",
    "title": "Speak",
    "contexts": ["selection"]
};

// create the context menu item
chrome.contextMenus.create(menuItem);

// add a listener for when the context menu item is clicked
chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "Speak" && clickData.selectionText){     
       // text to speak   
       chrome.tts.speak(clickData.selectionText, 
        {
            'rate': 0.7
        });         
    }
});