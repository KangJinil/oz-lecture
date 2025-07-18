// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) throw new Error("No post ID provided");

        const cacheKey = `post_${postId}`;
        const cachedData = localStorage.getItem(cacheKey);
        let post;

        if (cachedData) {
            const parsed = JSON.parse(cachedData);
            const cachedTime = parsed.timestamp;
            const now = Date.now();

            // 5분 = 5 * 60 * 1000 = 300000ms
            if (now - cachedTime < 300000) {
                post = parsed.data;
                console.log("Post loaded from localStorage");
            }
        }

        if (!post) {
            // 캐시가 없거나 오래된 경우 API 요청
            const response = await fetch(`${apiUrl}/posts/${postId}`);
            if (!response.ok) throw new Error("Failed to fetch post");

            post = await response.json();
            localStorage.setItem(
                cacheKey,
                JSON.stringify({
                    data: post,
                    timestamp: Date.now(),
                })
            );
            console.log("Post fetched from API");
        }

        renderPost(post);
    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML =
            "<p>Error loading post details</p>";
    }
}

// 포스트 렌더링 함수
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
