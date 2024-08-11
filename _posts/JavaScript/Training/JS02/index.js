// 문자열에 사용되는 연산자

let x = 1, y = 1; 
console.log(x == y);  // 값이 같으니 true
console.log(x != y);  // 값이 같으니 false

x = 1, y = '1';
console.log(x == y);  // 값이 같으니 true
console.log(x === y); // 값은 같으나, 자료형이 다르니 false
console.log(x !== y); // 값은 같으나, 자료형이 다르니 true

x = 1, y = 3;
console.log(x <= y);  // y 값이 크니, true
console.log(x < y);   // y 값이 크니, true
console.log(x >= y);  // y 값이 크니, false
console.log(x > y);   // y 값이 크니, false

console.log("안녕" === '안녕'); // 표기방식은 구분하지 않으므로 true

console.log('Hello' === 'hello'); // 대소문자가 다르므로 false

// A < B < C < ... < a < b < c < ... < 가 < 나 < 다 < ...
console.log("A" < "C");
console.log("C" < "a");
console.log("a" < "c");
console.log("c" < "가");
console.log("가" < "다");

console.log("apple" > "banana"); // 사전에서 a가 b보다 작아 false

// 문자열 연결 연산자

let str1 = "안녕";        
let str2 = "하세요";    

let str3 = str1 + str2;  // 더한 값을 str3에 넣음
console.log(str1);  // 출력 : 안녕
console.log(str2);  // 출력 : 하세요
console.log(str3);  // 출력 : 안녕하세요

str3 = str1 += str2;  // str1에 str2를 이어붙이고, str3에 넣음
console.log(str1);  // 출력 : 안녕하세요
console.log(str2);  // 출력 : 하세요
console.log(str3);  // 출력 : 안녕하세요




