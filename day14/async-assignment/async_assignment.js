// 상수 선언
const MAX_TIME = 10;
const MIN_TIME = 1;

// 메시지 변수
let timerMessage = "";

// 타이머 핸들 (let)
let timerInterval = null;

// 타이머 시작 함수
function startTimer(seconds = 10) {
    const timerDisplay = document.getElementById("timerDisplay");
    const startButton = document.getElementById("startTimer");
    let timerCount = seconds;

    startButton.disabled = true; // 타이머 실행 중 버튼 비활성화
    timerDisplay.classList.remove("error"); // 에러 스타일 제거

    timerDisplay.textContent = `타이머: ${timerCount}초`; // 타이머 시작 메시지

    // setInterval로 1초마다 카운트다운
    timerInterval = setInterval(function () {
        timerCount--;
        if (timerCount > 0) {
            timerDisplay.textContent = `타이머: ${timerCount}초`;
        } else {
            clearInterval(timerInterval); // 타이머 종료
            timerDisplay.textContent = "타이머 종료!";
            startButton.disabled = false; // 버튼 재활성화
        }
    }, 1000);
}

// 버튼 클릭 이벤트 리스너
document.getElementById("startTimer").addEventListener("click", function () {
    const input = document.getElementById("timerInput").value;
    let seconds = Number(input);

    // 입력 유효성 검사
    if (
        isNaN(seconds) ||
        seconds < MIN_TIME ||
        seconds > MAX_TIME ||
        input.trim() === ""
    ) {
        timerMessage = "유효한 숫자(1-10)를 입력하세요!";
        const timerDisplay = document.getElementById("timerDisplay");
        timerDisplay.textContent = timerMessage;
        timerDisplay.classList.add("error"); // 에러 스타일 추가
        return;
    }

    // 타이머 시작
    startTimer(seconds);
});
