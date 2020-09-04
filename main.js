let studentNameArea = document.getElementById("studentName");
let detailsArea = document.getElementById("details");

var name = findGetParameter("studentName");
var details = findGetParameter("details");

studentNameArea.innerHTML = name;
detailsArea.innerHTML = details
let characterfontSize = (100 / (name.length/1.5));
studentNameArea.style.fontSize = characterfontSize + "vw";




function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
