const addBtn = document.getElementById("add-btn");

let sampleEvent = [
  {
    eventName: "Birthday",
    eventDate: "2026-02-26",
    eventDescription: "Happy Birthday!",
    eventPriority: "Low",
  },
  {
    eventName: "Freshers",
    eventDate: "2026-02-28",
    eventDescription: "Freshers Party",
    eventPriority: "Low",
  },
];

// const textInput=document.giveElementById("myInput");
// textInput.addEventListener("change",(event)=>{
// const inputValue=event.target.value;
// console.log("Input value:",inputValue);
// or

//here event is targetting the entire element
//object node and event .target is the element which is being targetting the particular event.
//     event.preventDefault();
//     console.log("Input value:",textInput.value);
//     console.log(event.target.value);
// });

const form = document.getElementById("formInput");
const textInput = document.getElementById("myInput");
const courseInput = document.getElementById("course");
const output = document.getElementById("demo-box");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = textInput.value;
  const course = courseInput.value;
  console.log(name);

  output.innerText = name + " " + course;
});