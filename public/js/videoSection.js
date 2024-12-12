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
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
    searchQuery
  )}&maxResults=${maxResults}&pageToken=${pageToken}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      videoContainer.innerHTML = ""; // Clear current videos

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
        // If no videos found, loop back to the first page
        currentPage = 1;
        nextPageToken = "";
        prevPageToken = "";
        loadVideos(); // Reload the first page
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
    // Loop back to the first page if no next page
    currentPage = 1;
    nextPageToken = "";
    prevPageToken = "";
    loadVideos();
  }
});

// Handle Previous Button Click
prevButton.addEventListener("click", () => {
  if (prevPageToken) {
    currentPage--;
    loadVideos(prevPageToken);
  } else {
    // Loop back to the last page if no previous page (not directly possible in YouTube API)
    alert("You're on the first page!");
  }
});

// Initial load
loadVideos();
