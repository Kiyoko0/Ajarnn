const jobs = [
  { title: "Math Teacher", location: "Khon Kaen", salary: 12000 },
  { title: "Science Teacher", location: "Bangkok", salary: 15000 },
  { title: "English Teacher", location: "Chiang Mai", salary: 13000 },
  { title: "Computer Teacher", location: "Phuket", salary: 14000 },
  { title: "Physics Teacher", location: "Lopburi", salary: 13500 },
  { title: "Biology Teacher", location: "Chiang Rai", salary: 12500 }
];

const container = document.getElementById("jobs-container");
const searchInput = document.getElementById("search");

// Function to render jobs
function renderJobs(filteredJobs) {
  container.innerHTML = "";
  filteredJobs.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job-item");
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>Location: ${job.location}</p>
      <p>Salary: ${job.salary} THB</p>
    `;
    container.appendChild(div);
  });
}

// Initial render
renderJobs(jobs);

// Search functionality
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = jobs.filter(job => 
    job.title.toLowerCase().includes(term) || job.location.toLowerCase().includes(term)
  );
  renderJobs(filtered);
});
