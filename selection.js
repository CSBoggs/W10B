var selectionText = document.getElementById("selectionText");
let pokemon = Cookies.get("name");
if (typeof pokemon !== 'undefined') {
    selectionText.append(pokemon);
} else {
    selectionText.append("please go back to make a selection or turn on cookies for this site");
}
    
var deleteCookie = document.getElementById("deleteCookie");
deleteCookie.addEventListener("click", function() {
    Cookies.remove("name");
});
