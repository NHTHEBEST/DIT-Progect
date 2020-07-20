function ReplaceContent(url, name) {// declar function

    var xhttp = new XMLHttpRequest();//start web request
    xhttp.onreadystatechange = function () { // when request complete
        if (this.readyState === 4 && this.status === 200) { // check if request is ok
            // Typical action to be performed when the document is ready:
            document.getElementById("main").innerHTML = xhttp.responseText; // replace content
            window.history.pushState(name, document.title, url); // change url

            if (last == null) { // update menubar
                last = document.getElementById(name);
            } else {
                last.classList.remove("active");
            }
            last = document.getElementById(name);
            last.classList.add("active");
        }
    };
    xhttp.open("GET", "/content/" + url, true); // peform request
    xhttp.send();

}
