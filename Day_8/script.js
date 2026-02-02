const heading = document.getElementById("heading");
const button = document.getElementById("btn-heading");
const animDiv = document.getElementById("animDiv");

button.addEventListener("click", () => {
  animDiv.style.width = "200px";
  setTimeout(() => {
    animDiv.style.display = "none";
  }, 500);

  heading.innerHTML = "Changed";
  heading.style.color = "white";
  heading.style.backgroundColor = "dodgerblue";
});

/* 
document.getElementByClassName
document.querySelector()
document.querySelectorAll()
*/
