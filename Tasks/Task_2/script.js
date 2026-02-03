const paraClasses = document.getElementsByClassName("important");
for (let elem of paraClasses) {
  elem.style.fontSize = "32px";
  elem.style.color = "red";
}
console.log(paraClasses.length);
