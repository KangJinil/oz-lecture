console.log(`객체 실습`);

const person = {
    name: {
        firstName: `Gildong`,
        lastName: `Hong`,
    },
    age: 20,
    isAdult: true,
    getFullName: function (isKorean) {
        const fullName = isKorean
            ? `${this.name.lastName} ${this.name.firstName}`
            : `${this.name.firstName} ${this.name.lastName}`;
        return fullName;
    },
    printInfo: function () {
        console.log(`printInfo`);
        console.log(`name : ${this.name.firstName} ${this.name.lastName}`);
        console.log(`age : ${age}`);
        console.log(`isAdult : ${this.isAdult}`);
    },
};
console.log(person);

// person의 age, isAdult 조회
let age = person.age;
console.log(`age : ${age}`);
let isAdult = person.isAdult ? `성인` : `미성년자`;
console.log(`isAudlt : ${isAdult}`);

let age2 = person[`age`];
console.log(`age2 : ${age2}`);
let isAdult2 = person[`isAdult`] ? `성인` : `미성년자`;
console.log(`isAudlt2 : ${isAdult2}`);

let keys = [];
for (const key in person) {
    keys.push(key);
}
console.log(keys);
console.log(`keys[0] : ${keys[0]}`);
const keyFirstValue = person[keys[0]];
for (const key of keys) {
    console.log(`person[key] : ${person[key]}`);
}

// 객체 내의 함수 사용하기
person.printInfo();
const fullName = person.getFullName(true);
console.log(`fullName : ${fullName}`);

// 객체에 속성 추가
// 첫번째 console.log 에서는 like 속성이 없는것으로 생각할 수 있지만, 실제로는 like 속성이 있음
console.log(person);
person.like = `apple`;
person.koreaAge = 22;
person.likes = [`game`, `coding`, `baseball`];
person.showLikes = () => {
    console.log(person.likes[0]);
};

console.log(person);
console.log(person.showLikes());

// 속성 삭제
delete person.isAdult2;
console.log(person);
