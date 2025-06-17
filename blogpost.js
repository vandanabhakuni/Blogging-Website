// Get query parameter from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Render blog post content on the page
function renderBlogPost(blog) {
  if (!blog) {
    document.getElementById('post-title').textContent = "Blog post not found.";
    document.getElementById('post-author').textContent = "";
    document.getElementById('post-date-read').textContent = "";
    document.getElementById('post-content').innerHTML = "<p>Sorry, we could not find the blog you requested.</p>";
    return;
  }

  document.getElementById('post-title').textContent = blog.title;
  document.getElementById('post-author').textContent = blog.author;
  document.getElementById('post-date-read').textContent = `${blog.date} | ${blog.readTime} min read`;

  // Insert blog content as HTML
  document.getElementById('post-content').innerHTML = blog.content;
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const id = getQueryParam('id');
  if (!id) {
    renderBlogPost(null);
    return;
  }

  const blogId = parseInt(id, 10);
  const blog = blogs.find(b => b.id === blogId);
  renderBlogPost(blog);
});

function loadFeaturedArticles() {
    blogs.forEach((blog, index) => {
        const container = document.getElementById(`blog${index + 1}`);
        if (container) {
            container.innerHTML = `
        <div class="home-article-img">
          <img src="${blog.image}" alt="${blog.title}">
        </div>
        <div class="home-article-content font1 center">
          <a href="blogpost.html?id=${blog.id}">
            <h3>${blog.title}</h3>
          </a>
          <div>${blog.author}</div>
          <span>${blog.date} | ${blog.readTime} min read</span>
        </div>
      `;
        }
    });
}

document.addEventListener("DOMContentLoaded", loadFeaturedArticles);
