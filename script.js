function displaySecretPosts(posts) {
    const secretPostsContainer = document.getElementById('secret-posts');
    if (secretPostsContainer) {
        secretPostsContainer.innerHTML = ''; // 既存の投稿をクリア

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerText = post.content; // 投稿の内容を設定
            secretPostsContainer.appendChild(postElement);
        });
    }
}

// 投稿を取得して表示する例
fetch('/api/secret-posts')
    .then(response => response.json())
    .then(data => {
        if (data && data.posts) {
            displaySecretPosts(data.posts);
        } else {
            console.error('No posts found in the response.');
        }
    })
    .catch(error => console.error('Error fetching secret posts:', error)); 