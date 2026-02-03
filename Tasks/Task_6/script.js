const section = document.getElementById("content");
const paras = section.querySelectorAll("p");
for (let para of paras) {
  para.style.color = "purple";
  para.style.lineHeight = "40px";
}
