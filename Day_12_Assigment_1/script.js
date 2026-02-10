const eventForm = document.getElementById("eventForm");
const addBtn = document.getElementById("add-btn");
const eventContainer = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clear-btn");
const sampleBtn = document.getElementById("sample-btn");

let sampleEvents = [
  {
    name: "Birthday",
    date: "2026-02-26",
    category: "Social",
    description: "Happy Birthday!",
  },
  {
    name: "Freshers",
    date: "2026-02-28",
    category: "Social",
    description: "Freshers Party",
  },
];

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;
  const description = document.getElementById("eventDescription").value;

  if (name && date && description) {
    createEventCard(name, date, category, description);
    eventForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

function createEventCard(name, date, category, description) {
  const emptyMsg = document.querySelector(".empty-msg");
  if (emptyMsg) emptyMsg.remove();

  const card = document.createElement("div");
  card.className = "event-item";

  card.innerHTML = `
    <h3 style="margin-top:0;">${name}</h3>
    <small>${category}</small>
    <p><strong>Date:</strong> ${date}</p>
    <p>${description}</p>
  `;

  eventContainer.appendChild(card);
}

function showEmptyMessage() {
  eventContainer.innerHTML =
    '<p class="empty-msg">No events yet. Add your first event!</p>';
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;
  const description = document.getElementById("eventDescription").value;

  if (name && date && description) {
    createEventCard(name, date, category, description);
    eventForm.reset();
  } else {
    alert("Error: Incomplete data");
  }
});

clearBtn.addEventListener("click", () => {
  if (confirm("Clear all events?")) {
    showEmptyMessage();
  }
});

sampleBtn.addEventListener("click", () => {
  sampleEvents.forEach((ev) => {
    createEventCard(ev.name, ev.date, ev.category, ev.description);
  });
});
