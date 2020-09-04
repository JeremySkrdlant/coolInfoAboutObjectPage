let h1s = document.querySelectorAll("h1")
var name = ""
if (h1s.length > 0){
  name = h1s[0].innerHTML;
  let characterfontSize = (100 / name.length) * 2;
  h1s[0].style.fontSize = characterfontSize + "vw";
}
