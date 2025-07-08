// 변수 선언
var myAge = 44; // number
let myName = "강진일"; // string
const isStudent = false; // boolean

// 문자열 처리
console.log(
    "=== Profile Info ===" +
        "\n이름:\t" +
        myName +
        "\n나이:\t" +
        myAge +
        "\n학생:\t" +
        isStudent
);

// 배열 리터럴
let hobbies = ["reading", "coding", "traveling", "baseball"];
console.log("My hobbies: " + hobbies.join(", "));

// 객체 리터럴
const profile = {
    name: myName,
    age: myAge,
    isStudent: isStudent,
};

console.log(
    "Profile: " +
        profile.name +
        " 이는 " +
        profile.age +
        "살 이며, 학생여부는 " +
        profile.isStudent +
        " 입니다."
);

// typeof
console.log("Type of myAge:", typeof myAge); // number
console.log("Type of profile:", typeof profile); // object

// 도전과제 시작

// null과 undefined 구분
let myNull = null;
let myUndefined;
console.log("Type of myNull:", typeof myNull); // object
console.log("Type of myUndefined:", typeof myUndefined); // undefined
console.log("myNull === myUndefined:", myNull === myUndefined); // false

// 템플릿 문자열
console.log(
    `\n=== Template String Profile ===\n이름: ${myName}\n나이: ${myAge}\n학생 여부: ${isStudent}`
);

// 추가 데이터 처리
hobbies.push(null, undefined); // null, undefined 추가
console.log("Hobbies 배열:", hobbies);
console.log("0:", hobbies[0], typeof hobbies[0]);
console.log("1:", hobbies[1], typeof hobbies[1]);
console.log("2:", hobbies[2], typeof hobbies[2]);
console.log("3:", hobbies[3], typeof hobbies[3]);
console.log("4:", hobbies[4], typeof hobbies[4]);
console.log("5:", hobbies[5], typeof hobbies[5]);

// 객체에 새로운 속성 email 추가 및 null 값 체크
profile.email = null;
if (profile.email === null) {
    console.log("profile.email은 null입니다.");
} else {
    console.log("profile.email은 null이 아닙니다.");
}
