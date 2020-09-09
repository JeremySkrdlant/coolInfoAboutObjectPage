let studentData = document.getElementById("studentData")
let qrArea = document.getElementById("code");

studentData.addEventListener("input",()=>{
  let text = studentData.value
  qrArea.innerHTML = ""
  if(text == "" ){
    return;
  }
  let split = text.split("\t")
  let urlString = "https://jeremy-tutorial-2020.s3.us-east-2.amazonaws.com/index.html"
  urlString += "?studentName=" + split[0] + ",%20" + split[1];
  urlString += "&details=" + split[2] + "%20" + split[3];
  new QRCode(qrArea,
  {
    text: urlString,
    width: 512,
    height: 512,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
})
