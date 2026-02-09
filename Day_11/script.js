// function handleClick() {
//     const btn = document.getElementById("btn");
//     btn.textContent = "Clicked";
//     btn.style.color = "red";
// }

// function handleClick() {
//     const heading = document.querySelector("h1");
//     heading.style.color = "tomato";
//     heading.textContent = "New Heading";
// }

// function handleClick() {
//   const btn = document.getElementById("btn");
//   const span = document.createElement("span");
//   span.textContent = "Span";
//   const image = document.createElement("img");
//   image.src = "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/82bs_1-768x380-1.webp";
//   image.alt = "K.R. Mangalam University";
//   btn.after(span);
//   span.after(image);
// }

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const span = document.createElement("span");
  span.textContent = "Span";
  const image = document.createElement("img");
  image.src =
    "https://www.krmangalam.edu.in/wp-content/uploads/2024/02/82bs_1-768x380-1.webp";
  image.alt = "K.R. Mangalam University";
  btn.after(span);
  span.after(image);
});
