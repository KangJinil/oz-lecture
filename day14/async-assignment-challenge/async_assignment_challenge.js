// API 상수 선언
const API_URL = "https://jsonplaceholder.typicode.com/posts/";

// 에러메시지
let errorMessage = "";

// 화살표 함수, ...rest로 ID 처리
const fetchMultiplePosts = async (...ids) => {
    let results = {};
    for (const id of ids) {
        // 비동기 fetch, try/catch
        try {
            const response = await fetch(API_URL + id);
            if (!response.ok) throw new Error("데이터가 없습니다");
            const data = await response.json();
            results["post" + id] = data.title;
        } catch (e) {
            results["post" + id] = "에러: " + e.message;
        }
    }
    return results;
};

// 메인 로직
const runChallenge = function () {
    const input = document.getElementById("postIds").value;
    const output = document.getElementById("output");
    const fetchBtn = document.getElementById("fetchPosts");

    // 입력값 파싱
    let ids = input
        .split(",")
        .map((str) => Number(str.trim()))
        .filter((num) => !isNaN(num));

    ids = ids.filter((id) => id >= 1 && id <= 100); // 유효 ID만 필터(1~100)

    // 입력 유효성 검사
    if (ids.length === 0) {
        errorMessage = "유효한 ID(1-100)를 입력하세요!";
        output.innerHTML = errorMessage;
        output.classList.add("error");
        return;
    }

    // 버튼 비활성화, 출력 초기화, 에러 클래스 제거
    fetchBtn.disabled = true;
    output.innerHTML = "불러오는 중...";
    output.classList.remove("error");

    // 실제 데이터 가져오기
    (async () => {
        const results = await fetchMultiplePosts(...ids);

        let html = "";
        // 결과 객체 for...in loop
        for (let key in results) {
            html += `<div class="post">${key}: ${results[key]}</div>`;
        }
        output.innerHTML = html;
        fetchBtn.disabled = false;
    })();
};

// 버튼 이벤트 바인딩
document.getElementById("fetchPosts").addEventListener("click", runChallenge);
