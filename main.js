let h1s = document.querySelectorAll("h1")
var name = ""
if (h1s.length > 0){
  var name = findGetParameter("studentName");
  h1s[0].innerHTML = name;

  let characterfontSize = (100 / name.length) * 2;
  h1s[0].style.fontSize = characterfontSize + "vw";
}


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
