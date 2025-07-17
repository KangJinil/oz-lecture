async function getPost(postNum) {
    try {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postNum}`
        );
        console.log(response);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("에러: ", error.message);
        alert("에러: " + error.message);
    }
}
getPost();
