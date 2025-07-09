let inputStr = prompt("점수를 입력하세요.");
let input = Number(inputStr);

const MAX_SCORE = 100; // 도전과제에서는 최종점수 100으로 제한
let score = input;
var grade;

// 입력 유효성 검사 (isNaN, ||, !, && 활용)
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
    score++; // 단항 산술: 1점 증가
    score *= 1.1; // 복합 대입: 10% 가산
    score += 5; // 5점 보너스

    // 100점 초과시 제한
    if (score > 100) score = 100;

    // 등급 결정
    if (score === 100) {
        grade = "A"; // 100점은 A로 처리, 메시지는 별도
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 합격/불합격 (삼항)
    let status = score >= 60 ? "Pass" : "Fail";

    // 메시지 (100점이면 특수 case)
    let message = "";
    switch (true) {
        case score === 100:
            message = "Perfect Score!";
            break;
        case grade === "A":
            message = "Excellent work!";
            break;
        case grade === "B":
            message = "Good job!";
            break;
        case grade === "C":
            message = "Satisfactory performance.";
            break;
        case grade === "D":
            message = "Needs improvement.";
            break;
        case grade === "F":
            message = "Please try harder!";
            break;
        default:
            message = "";
            break;
    }

    // 결과 출력
    console.log(`Final Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log(`Status: ${status}`);
    console.log(`Message: ${message}`);
}
