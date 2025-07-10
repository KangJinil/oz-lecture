// === (1) 함수 표현식 : 역순 별 찍기 ===
const printReverseStars = function (count = 1) {
    for (let i = count; i > 0; i--) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }
};

// === (2) 화살표 함수 : 사각형 패턴 ===
const printSquare = (count = 1) => {
    for (let i = 0; i < count; i++) {
        let line = "";
        for (let j = 0; j < count; j++) {
            line += "*";
        }
        console.log(`i: ${i} : ${line}`);
    }
};

// === (3) for...in : 패턴 객체 순회 ===
const patterns = {
    pattern1: "*****",
    pattern2: "***",
    pattern3: "*",
};
console.log("\n[for...in으로 패턴 출력]");
for (let key in patterns) {
    console.log(patterns[key]);
}

// === (4) ...rest 연산자 함수 ===
function printMultipleStars(...counts) {
    for (let i = 0; i < counts.length; i++) {
        let starLine = "";
        for (let j = 0; j < counts[i]; j++) {
            starLine += "*";
        }
        console.log(`Stars for count ${counts[i]}: ${starLine}`);
    }
}

// === 실행 예시 ===
console.log("\n[역순 별 출력]");
printReverseStars(5);

console.log("\n[정사각형 패턴 출력]");
printSquare(5);

console.log("\n[여러 숫자 별 출력]");
printMultipleStars(2, 5, 3); // 필요시 원하는 숫자 입력
