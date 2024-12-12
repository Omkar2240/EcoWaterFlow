// Replace this with your API key
const apiKey = "AIzaSyCYsCf74Zsxs91Se8aQPZ7OaptHKZ2KpZo";

// Fetch videos related to "water conservation" and "water scarcity minimization"
const searchQuery = "water conservation, water scarcity minimization techniques";
const maxResults = 10; // Videos per page
let currentPage = 1; // Track the current page
let nextPageToken = ""; // To fetch the next page
let prevPageToken = ""; // To fetch the previous page

const videoContainer = document.getElementById("videoContainer");
const pageNumberSpan = document.getElementById("pageNumber");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Load videos for the current page
function loadVideos(pageToken = "") {
  // Show skeleton loader
  videoContainer.innerHTML = `
    <div class="skeleton-container">
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
      <div class="skeleton"><div class="skeleton-title"></div></div>
    </div>
  `;

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
    searchQuery
  )}&maxResults=${maxResults}&pageToken=${pageToken}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      videoContainer.innerHTML = ""; // Clear skeletons after data loads

      if (data.items && data.items.length > 0) {
        data.items.forEach((item) => {
          const videoId = item.id.videoId;
          const videoTitle = item.snippet.title;

          // Create a video card
          const videoDiv = document.createElement("div");
          videoDiv.classList.add("video-new");

          videoDiv.innerHTML = `
            <iframe class="iframe-video"
              src="https://www.youtube.com/embed/${videoId}"
              allowfullscreen
            ></iframe>
            <h4>${videoTitle}</h4>
          `;

          videoContainer.appendChild(videoDiv);
        });

        // Update pagination tokens and page number
        nextPageToken = data.nextPageToken || ""; // If no next page, reset
        prevPageToken = data.prevPageToken || ""; // If no previous page, reset
        pageNumberSpan.textContent = `Page ${currentPage}`;
      } else {
        videoContainer.innerHTML = "<p>No videos found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching videos:", error);
      videoContainer.innerHTML = `<p>Error loading videos. Please try again later.</p>`;
    });
}

// Handle Next Button Click
nextButton.addEventListener("click", () => {
  if (nextPageToken) {
    currentPage++;
    loadVideos(nextPageToken);
  } else {
    currentPage = 1;
    loadVideos();
  }
});

// Handle Previous Button Click
prevButton.addEventListener("click", () => {
  if (prevPageToken) {
    currentPage--;
    loadVideos(prevPageToken);
  } else {
    alert("You're on the first page!");
  }
});

// Initial load
loadVideos();
