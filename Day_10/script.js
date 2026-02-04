// Create Paragraph 
const para = document.createElement("p");
para.textContent = "This is a dynamically created paragraph";

// Append Child
const container = document.getElementById("container");
container.appendChild(para);

// Delete First Paragraph
const firstPara = document.querySelector("#container p");
firstPara.remove();

// Create Image
const image = document.createElement("img");
image.src =
  "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/82bs_1-768x380-1.webp";
image.alt = "K.R. Mangalam University";

// Append Image
const gallery = document.getElementById("gallery");
gallery.appendChild(image);

const clock = document.getElementById("digi-clock");
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let time = "am";
  if (hour > 12) {
    hour = hour - 12;
    time = "pm";
  }
  clock.textContent = `${hour}: ${min}: ${sec} ${time}`;
});
