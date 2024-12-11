const fetchNews = async (page) => {
    console.log("Fetching news...");

    const url = 'https://newsapi.org/v2/everything?' +
                'q=water+conservation&' +
                'from=2024-12-02&' +
                'pageSize=21&' +
                'page=' + page + '&' +
                'sortBy=date&' +
                'apiKey=c2e162f743374f938ce405d510cb6a3d';

    try {
        const req = new Request(url);
        const response = await fetch(req);
        const data = await response.json();

        document.querySelector(".page-number").innerText = `Page: ${page}`;

        // Check if response contains articles
        if (data.articles && data.articles.length > 0) {
            let str = "";

            for (let item of data.articles) {
                // Check if the image is available
                if (item.urlToImage) {
                    str += `
                    <div class="news-card">
                        <a href="${item.url}" target="_blank">
                            <img src="${item.urlToImage}" alt="Image not available">
                        </a>
                        <a href="${item.url}" target="_blank">
                            <h2 class="news-title">${item.title}</h2>
                        </a>
                        <p class="news-summary">${item.description.slice(0,180) || "Description not available."}</p>
                        
                    </div>`;
                }
            }

            // Update the news grid with the new content
            document.querySelector(".news-grid").innerHTML = str;
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            alert("No more news available. Returning to the first page.");
            currentPage = 1;
            fetchNews(currentPage);
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        document.querySelector(".news-grid").innerHTML = `<p>Failed to fetch news. Please try again later.</p>`;
    }
};

// Button handlers
const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
let currentPage = 1; // Initialize current page

// Previous button event
preBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        fetchNews(currentPage); // Fetch news for the previous page
    }
});

// Next button event
nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentPage++;
    fetchNews(currentPage); // Fetch news for the next page
});

// Initial fetch
fetchNews(currentPage);

