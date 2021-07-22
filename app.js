function setChoice() {
    let pokemon = document.getElementById("pokemon").value;
    Cookies.set("name", pokemon);
}

var inputCookie = document.getElementById("submitChoice");
inputCookie.addEventListener("click", setChoice);
