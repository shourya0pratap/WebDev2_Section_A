const section = document.getElementById("menu");
const items = section.getElementsByClassName("menu-item");
for (let item of items) {
    let text = item.textContent;
    text = text.toUpperCase();
    item.textContent = text;
    item.style.marginBottom = "50px";
}