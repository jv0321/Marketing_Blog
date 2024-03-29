//logic to submit the form
// store the blog into localStorage

document.getElementById("submit-button").addEventListener("click", submitBlog)


function submitBlog() {
    var userName = document.getElementById("username").value;
    var blogTitle = document.getElementById("blogTitle").value;
    var blogContent = document.getElementById("blogContent").value;

    // Retrieve existing blog posts or initialize an empty array
    var existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Create a new blog post object
    var newPost = { userName, blogTitle, blogContent };

    // Add the new blog post to the existing array
    existingPosts.push(newPost);

    // Store the updated array back in localStorage
    localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

    // Redirect to the blog.html page
    window.location.href = "./blog.html";
}