// 별 최대 개수는 상수(const)로 선언
const maxStars = 10;
// 사용자 입력을 받을 변수(let), 별 문자열은 var로 선언
let inputStr;
let input;
var stars;

// 별 출력 함수(함수 선언문, 기본값 사용)
function printStars(count = 1) {
    var starLine = "";
    for (let i = 0; i < count; i++) {
        starLine += "*";
    }
    console.log(`[입력: ${input}] ${starLine}`);
}

// 사용자에게 올바른 숫자가 입력될 때까지 반복
while (true) {
    inputStr = prompt(`Enter the number of stars (1-10):`);
    input = Number(inputStr);

    // 1 ~ 10 범위인지 체크
    if (!isNaN(input) && input >= 1 && input <= maxStars) {
        // 입력이 0 또는 음수일 경우 기본값 사용
        printStars(input > 0 ? input : 1);
        break; // 정상인 경우 루프 종료
    } else {
        // 유효하지 않은 입력: 메시지 출력 후 재입력
        console.log(
            `[입력: ${inputStr}] Invalid input! Enter a number between 1 and 10.`
        );
        continue; // 반복문의 다음 루프로 진행
    }
}
