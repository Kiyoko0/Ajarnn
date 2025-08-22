// jobs.js
const jobs = [
  { title: "Math Teacher", location: "Khon Kaen", salary: 12000 },
  { title: "Science Teacher", location: "Bangkok", salary: 15000 },
  { title: "English Teacher", location: "Chiang Mai", salary: 13000 },
  { title: "Computer Teacher", location: "Phuket", salary: 14000 },
  { title: "Physics Teacher", location: "Lopburi", salary: 13500 }
];

const container = document.getElementById("jobs-container");

jobs.forEach(job => {
  const div = document.createElement("div");
  div.classList.add("job-item");
  div.innerHTML = `
    <h3>${job.title}</h3>
    <p>Location: ${job.location}</p>
    <p>Salary: ${job.salary} THB</p>
  `;
  container.appendChild(div);
});
