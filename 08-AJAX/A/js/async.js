var http = new XMLHttpRequest();

http.open('GET', './js/data404.json');

http.onreadystatechange = function() {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        let var1 = JSON.parse(http.responseText);
        // let var1 = http.responseText;  <== Can't read the data if no JSON.parse
        alert(var1.name);
    } else {
        alert('error occurred' + http.status);
    }
}
// onreadystatechange should be before http.send()
http.send();