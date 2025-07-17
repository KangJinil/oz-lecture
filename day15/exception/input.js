const input = "not-anumber";
try {
    const number = Number(input); // NaN
    if (isNaN(number)) throw new Error("숫자를 입력하세요.");
    console.log("입력값: ", number);
} catch (error) {
    console.log("error", error);
    alert(error.message);
}
