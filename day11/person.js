const person1 = {
    name: `jinil`,
    age: 44,
};

const person2 = {
    name: `kangji`,
    age: 5,
};

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`안녕하세요. 저는 ${this.name} 입니다.`);
    };
}

const personA = new Person(`jinil`, 44);
const personB = new Person(`kangji`, 5);
