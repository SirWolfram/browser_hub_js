var searchQ;
var Qoutput;
var genLink;
var browserSelect;

// when search bar is pressed
onEvent("searchIcon", "click", function( ) {
    // updates variables
    searchQ = getText("searchBar");
    browserSelect = getText("searchEngineSelect");
    
    
    window.open(generateUrl(browserSelect, urlFormat(searchQ)));
});

onEvent("searchEngineSelect", "change", function( ) {
    browserSelect = getText("searchEngineSelect");
    updateColor(browserSelect);
});

// replaces all the spaces between words with "+" for the url question
function urlFormat(inputTxt) {
  Qoutput = inputTxt.replace(" ","+");
    for (var i = 0; i < inputTxt.length; i++) {
        Qoutput = Qoutput.replace(" ","+");
      }  
    return Qoutput;
}
// updates the color of the text and icons based off of the current browser selected
function updateColor(browser) {
  if (browser == "Google") {
     setProperty("title", "text-color", "#4285F4");
     setProperty("searchIcon", "icon-color", "#4285F4");
     setProperty("selectText", "text-color", "#4285F4");
   } else if (browser == "Bing") {
     setProperty("title", "text-color", "#008373");
     setProperty("searchIcon", "icon-color", "#008373");
     setProperty("selectText", "text-color", "#008373");
   } else if (browser == "DuckDuckGo") {
     setProperty("title", "text-color", "#E37151");
     setProperty("searchIcon", "icon-color", "#E37151");
     setProperty("selectText", "text-color", "#E37151");
   } else if (browser == "Yahoo"){
      setProperty("title", "text-color", "#410093");
      setProperty("searchIcon", "icon-color", "#410093");
      setProperty("selectText", "text-color", "#410093");
   } else {
      setProperty("title", "text-color", "#000000");
      setProperty("searchIcon", "icon-color", "#000000");
      setProperty("selectText", "text-color", "#000000");
   }
}

//generates a url with the correct website and url
function generateUrl(browser, question) {
   if (browser == "Google") {
     genLink = "https://www.google.com/search?q=" + question;
   } else if (browser == "Bing") {
     genLink = "https://www.bing.com/search?q=" + question;
     setProperty("title", "text-color", "#008373");
   } else if (browser == "DuckDuckGo") {
     genLink = "https://www.duckduckgo.com/?q=" + question;
   } else if (browser == "Yahoo"){
     genLink = "https://search.yahoo.com/search?p=" + question;
   } else {
     console.log("choose a search engine");
   }
   return genLink;
}
