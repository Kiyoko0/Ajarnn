async function loadJobs() {
  try {
    const res = await fetch("/jobs");
    const jobs = await res.json();

    const jobsList = document.getElementById("jobs-list");
    jobsList.innerHTML = "";

    jobs.forEach(job => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${job.link}" target="_blank">${job.title}</a> - ${job.location}`;
      jobsList.appendChild(li);
    });

  } catch (err) {
    console.error(err);
    document.getElementById("jobs-list").innerHTML = "<li>Failed to load jobs.</li>";
  }
}

// Load jobs when page is ready
document.addEventListener("DOMContentLoaded", loadJobs);
