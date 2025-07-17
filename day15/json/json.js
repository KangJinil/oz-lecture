const jsonString = `{
    "name": "진일",
    "age": 44
}`;
// const jsonObj = JSON.parse(jsonString);
// console.log("jsonObj", jsonObj);

const jsonObj = {
    name: "진일",
    age: 22,
};

console.log("jsonObj name", jsonObj.name);
console.log("jsonObj age", jsonObj.age);

const { name, age } = jsonObj;
console.log(name);
console.log(age);

const stringify = JSON.stringify(jsonObj);
console.log("stringify", stringify);

const jsonStringArr = `[
    {
        "id": 1,
        "name": "진일"
    },
    {
        "id": 2,
        "name": "지니리"
    }
]`;

const users = JSON.parse(jsonStringArr);
console.log("users", users);
// const names = ["진일", "지니리"]

// for문 사용
const namesFor = [];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    namesFor.push(user.name);
}
console.log("namesFor", namesFor);

// Array.map() 사용
const namesMap = users.map((user) => {
    return user.name;
});
console.log("namesMap", namesMap);

// Array.map + spread 연산자
const namesMapSp = users.map(({ name }) => name);
console.log("namesMapSp", namesMapSp);

// JSON.stringify()
const namesMapJsonString = JSON.stringify(namesMap);
console.log("namesMapJsonString", namesMapJsonString);

const jsonString3 = `{
    "name": "진일",
    "age": 44
}`;
const jsonObj3 = JSON.parse(jsonString3);
console.log("jsonObj3", jsonObj3);
const jsonObj3String = JSON.stringify(jsonObj3);
console.log("jsonObj3String", jsonObj3String);
