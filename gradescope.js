var a = document.getElementsByTagName("tbody")[0].childNodes;

var className = document.getElementsByClassName("courseHeader--title")[0].textContent;

var assignments = [];
var i;
for (i = 0; i < a.length; i++) {
    var caption = a[i].childNodes[2].childNodes[0].childNodes;
    if (caption.length > 1){
        var tmp = [];
        var name = a[i].childNodes[0].childNodes[0].childNodes[0].textContent;
        tmp.push(name);
        var due = caption[2].childNodes[1].textContent;
        tmp.push(due);
        assignments.push(tmp);
    }
}

var data = [className, assignments];

chrome.runtime.sendMessage({
  url: window.location.href,
  data: data
})
