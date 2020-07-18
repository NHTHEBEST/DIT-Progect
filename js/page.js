function ReplaceContent(url, name) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            //document.getElementsByName("demo").innerHTML = xhttp.responseText;
            document.getElementById("main").innerHTML = xhttp.responseText;
            window.history.pushState(name, document.title, url);

            if (last == null) {
                last = document.getElementById(name);
            } else {
                last.classList.remove("active");
            }
            last = document.getElementById(name);
            last.classList.add("active");
        }
    };
    xhttp.open("GET", "/content/" + url, true);
    xhttp.send();

}
