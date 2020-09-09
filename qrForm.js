let studentData = document.getElementById("studentData")
let qrArea = document.getElementById("code");

studentData.addEventListener("input",()=>{
  let text = studentData.value
  let split = text.split("\t")
  qrArea.innerHTML = ""
  console.log(split)
  let urlString = "https://jeremy-tutorial-2020.s3.us-east-2.amazonaws.com/index.html"
  urlString += "?studentName=" + split[0] + ",%20" + split[1];
  urlString += "&details=" + split[2] + "%20" + split[3];
  new QRCode(qrArea, urlString);
})
