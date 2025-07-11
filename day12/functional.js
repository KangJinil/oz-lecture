// map
let numbers = [1, 2, 3];

// numbers에 있는 모든 숫자 값을 2배로 하고싶다.
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     console.log(num);
//     newNumbers.push(num * 2);
//     console.log(newNumbers);
// }

// function double(num) {
//     return num * 2;
// }

// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     console.log(double(num));
// }
// numbers = newNumbers;
// console.log(numbers);

numbers = numbers.map((num) => {
    return num * 2;
});
console.log(numbers);

// filter
let numbersA = [1, 2, 3, 4, 5];
// 짝수인 값만 빼고싶어요
const filtered = numbersA.filter((x) => {
    return x % 2 === 0;
});
console.log(filtered);

// reduce
let numbersB = [1, 2, 3, 4];
// 배열에 있는 값의 총합
// let sum = 0;
// numbersB.forEach((num) => {
//     sum += num;
// });
// console.log(`sum : ${sum}`);

const sum = numbersB.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log(`sum : ${sum}`); // 10
