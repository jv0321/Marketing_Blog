
const mainContent = document.getElementById('post-output');


const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
blogPosts.forEach(post => {
    const postElement = document.createElement('tr');
    postElement.innerHTML = `
    <td><h2>${post.blogTitle}</h2></td>
     <td>Author: ${post.userName}</td>
     <td>${post.blogContent}</td>
    `;
    mainContent.appendChild(postElement);
});