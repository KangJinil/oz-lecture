const pw = `123`;
console.log(`pw length : ${pw.length}`);
if (pw.length < 4) {
    console.log(`최소4자리 입력하세요.`);
}

// String.includes()
const email = `test@naver.com`;
console.log(`emai.includes("@") : ${email.includes(`@`)}`);
if (email.includes(`@`)) {
    console.log(`이메일 형식 확인하세요`);
}

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
console.log(email[4]);
console.log(email.indexOf(`@`));
console.log(email.indexOf(`oisdhgiods`)); // -1

if (!email.indexOf(`@`) < 0) {
    console.log(`이메일 형식 확인하셔요`);
}

// String.trim()
const textarea = `        배부르다!            `;
console.log(textarea);
console.log(textarea.trim());
