import { JSDOM } from "jsdom";

export async function onRequest(context) {
  const jobs = [];
  const maxPages = 3; // Adjust based on how many pages you want to scrape

  for (let page = 1; page <= maxPages; page++) {
    try {
      const res = await fetch(`https://www.ajarn.com/jobs?page=${page}`);
      const html = await res.text();

      const dom = new JSDOM(html);
      const document = dom.window.document;

      // Adjust selectors to match Ajarn.com structure
      const jobElements = document.querySelectorAll(".job-listing");

      jobElements.forEach(jobEl => {
        const titleEl = jobEl.querySelector(".job-title a");
        const locationEl = jobEl.querySelector(".job-location");
        if (titleEl && locationEl) {
          jobs.push({
            title: titleEl.textContent.trim(),
            link: titleEl.href,
            location: locationEl.textContent.trim()
          });
        }
      });

    } catch (err) {
      console.error(`Failed to scrape page ${page}:`, err);
    }
  }

  return new Response(JSON.stringify(jobs), {
    headers: { "Content-Type": "application/json" },
  });
}
