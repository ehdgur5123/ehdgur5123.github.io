---
layout: single
title: "JavaScript 기초문법"
categories: NodeJS
tag: [NodeJS]
permalink : /posts/NodeJS-02/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "NodeJS"
---

<hr>

# 템플릿 리터럴

**템플릿 리터럴**은 문자열과 변수, 식을 섞어서 하나의 문자열을 만드는 표현 형식입니다.

백틱(\`)기호를 사용해 문자열을 묶고, 변수 부분만 `${}` 감싸주면 됩니다.

```javascript
let num1 = 10;
let num2 = 20;

console.log(`10 + 20 = ${num1+num2});
```

# 함수 사용하기

## 1. 기본형

함수를 사용하는 기본 방법은 함수를 선언하고 필요할 때 호출하는 것입니다.

```javascript
function 함수명 {...}
//또는
function 함수명(매개변수) {...}
```

## 2. 함수 표현식

기본형에서는 `함수명`을 붙였지만, 한 번만 실행하고 끝나는 함수라면 `함수명`을 생략할 수 있습니다.

```javascript
function(매개변수) {...}
```

함수를 식<sup>expression</sup>처럼 사용하므로 이렇게 작성한 함수를 *함수 표현식*이라고 합니다.

## 3. 즉시 실행 함수

함수 표현식으로 작성한 함수를 변수에 할당하지 않고, 함수를 선언하는 동시에 실행할 수 있습니다. 이런 함수를 *즉시 실행 함수*라고 합니다.

```javascript
( function(a,b) {...} (a값, b값) )
```

## 4. 화살표 함수

에크마스크립트 2015부터는 함수를 선언할 때 화살표(`=>`)를 사용할 수 있습니다. 이를 *화살표 함수* 또는 *애로우 펑션*이라고 합니다.

```javascript
() => {...}
//또는
(매개변수) => {...}
```

### 예제1

다음은 화살표 함수를 사용한 사용 예제입니다.

```javascript
let hi = () => { return '안녕하세요' };
console.log(hi());
```

### 예제2

화살표 함수에서 실행할 명령이 한 줄뿐이라면 중괄호(`{}`)를 생략할 수 있습니다. 그리고 한 줄 명령에 return문이 포함되어 있다면 return도 생략할 수 있습니다.

다음은 위 예제에서 중괄호와 return을 생략한 형태입니다.

```javascript
let hi = () => '안녕하세요';
console.log(hi());
```

### 예제3

다음은 두 수를 더하는 함수로 작성 방법만 다를 뿐, 모두 같은 값을 가집니다.

```javascript
//함수 표현식
let sum = function(a,b) {return a + b};

// 화살표 함수
let sum = (a,b) => {return a + b};

// 화살표 함수(중괄호 및 return 생략)
let sum = (a,b) => a + b;
```

# 자바스크립트 비동기 처리

*동기 방식*: 프로그램 코드를 작성한 순서대로 처리하는 방식

*비동기 방식*: 프로그램이 특정 작업을 수행하는 동안 다른 작업을 중단하지 않고 계속해서 실행할 수 있는 방식. 즉, 어떤 작업의 완료를 기다리지 않고 다른 작업을 처리할 수 있는 구조

자바스크립트는 기본적으로 비동기 방식이기 때문에, 시간이 걸리는 작업이 있을 경우 빠르게 처리할 수 있는 작업을 먼저 실행하게 됩니다.

**비동기 처리**는 시간이 걸리는 작업과 빠르게 처리할 수 있는 작업이 섞여 있을 때, 이들의 실행 순서와 결과를 원하는 대로 제어하는 프로그래밍 방식입니다.

## 1. 동기 방식과 비동기 방식

### 동기 방식 예시

```javascript
function displayA() { console.log("A"); }
function displayB() { console.log("B"); }
function displayC() { console.log("C"); }

displayA();
displayB();
displayC();

//출력값
// A
// B
// C
```

### 비동기 방식 예시

```javascript
function displayA() { console.log("A"); }
function displayB() { setTimeout( () => { console.log("B"); }, 2000 ); }
function displayC() { console.log("C"); }

displayA();
displayB();
displayC();

//출력값
// A
// C
// B
```

## 2. 비동기 처리의 종류

|방법         |버전   |기능   |
|:-----------:|:----|:---:|
|콜백 함수    |기존부터 사용   |함수 안에 또 다른 함수를 매개변수로 넘겨서 실행 순서를 제어. 콜백 함수가 많아지면 가독성이 떨어짐   |
|프로미스     |에크마스크립트 2015부터 도입   |프로미스 객체와 콜백 함수를 사용해서 실행 순서를 제어   |
|async/await |에크마스크립트 2017부터 도입   |async와 await 예약어를 사용해서 실행 순서를 제어   |

### A. 콜백 함수(Callback Function)

**콜백 함수**란 다른 함수의 매개변수로 사용하는 함수를 말합니다.

예를 들어, `A함수(B함수)`로 지정하면 `A함수`를 모두 실행한 후 `B함수`를 실행합니다.

#### 예제1

위의 [비동기 방식 예시](https://ehdgur5123.github.io/posts/NodeJS-02/#%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B0%A9%EC%8B%9D-%EC%98%88%EC%8B%9C)에서 사용된 `setTimeout()` 함수가 콜백 함수의 형태입니다.

```javascript
setTimeout( () => { console.log("B"); }, 2000 );
```

`setTimeout()` 함수 안에 `() => { console.log("B"); }` 함수가 들어간 형태로, 2초가 지나면 콘솔에 B를 출력하라는 의미입니다.

#### 예제2

다음은 위의 [비동기 방식 예시](https://ehdgur5123.github.io/posts/NodeJS-02/#%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B0%A9%EC%8B%9D-%EC%98%88%EC%8B%9C)를 콜백 함수를 통해 비동기 처리한 결과입니다.

```javascript
function displayA() { console.log("A"); }

function displayB(callback) { setTimeout( () => { console.log("B"); callback();}, 2000 );}

function displayC() { console.log("C"); }

displayA();
displayB(displayC);
```

### B. 프로미스(Promise)

프로미스(Promise)는 처리에 성공했을 때와 성공하지 않았을 때의 반환 결과를 미리 약속해 둔 것입니다.

다음은 프로미스(Promise)를 사용한 코드의 예시입니다.

```javascript
let likePizza = true;

const 피자 = new Promise((resolve, reject) => {
  if(likePizza)
    resolve('피자를 주문합니다.');
  else
    reject('피자를 주문하지 않습니다.');
});

피자
  .then(결과 => console.log(결과))
  .catch(에러 => console.log(에러))
  .finally(() => console.log('하기 싫다~'));
```

1. `new Promise`는 `resolve`와 `reject`라는 두 개의 콜백 함수가 있는 실행 함수를 인자로 받습니다.
2. resolve(value)는 작업이 성공했음을 나타내며, 결과값(value)을 전달합니다.(value = `피자를 주문합니다.`)
3. reject(reason)는 작업이 실패했음을 나타내며, 실패 이유(reason)를 전달합니다.(reason = `피자를 주문하지 않습니다.`)
4. **then** 메서드: resolve가 호출된 경우 실행되며, 성공한 결과값을 인자로 받습니다.
5. **catch** 메서드: reject가 호출된 경우 실행되며, 실패 이유를 인자로 받습니다.
6. **finally** 메서드: (선택 사항)성공 여부와 상관없이 항상 실행됩니다.

### C. async / await

함수를 선언할 때 함수 앞에 **async**를 붙여서 선언하면 그 함수 안에서는 **await**를 붙여서 비동기 처리를 할 수 있습니다.

<small>async은 asynchronous(비동기)의 줄임말, await는 '기다리다'라는 뜻</small>

```javascript
async function() {
  ...
  await 함수
}
```

다음은 async과 await를 사용한 코드의 예시입니다.

```javascript
async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");  // 서버에서 가져오기
  const users = await response.json();  // 가져온 결과를 users에 저장
  console.log(users);  // users 표시
}

init();
```

1. *init* 함수 안에서 비동기 처리를 할 것이므로 init 함수 선언 앞부분에 *async*를 붙입니다.
2. *fetch*는 네트워크를 통해서 서버의 자료를 가져오는 함수입니다. 서버에서 자료를 가져오려면 시간이 소요되므로, fetch 앞에 *await*를 붙여서 시간이 얼마나 걸리든 자료 가져오기가 끝난 후에 다음 코드로 넘어가게 합니다.
3. `response.json` 함수는 서버에서 가져온 프로미스 객체를 프로그램에서 사용할 수 있는 객체로 변환합니다. 이 과정도 시간이 소요되므로, 앞에 *await*를 붙입니다.
4. 변환된 객체 users를 터미널 창에 표시합니다.

# 자바스크립트 객체

## 1. 객체 만들기

자바스크립트에서 객체는 여러 자료 유형을 하나로 묶어 놓은 것을 말합니다.

객체는 중괄호(`{}`) 안에 모든 정보를 담는데 **키**<sup>key</sup>와 **값**<sup>value</sup>이 하나의 쌍을 이룹니다. 

'키:값' 형태의 쌍을 **프로퍼티**<sup>property</sup>라고 합니다.

```javascript
객체명 = {
  키: 값,
  키: 값,
  ...
}
```

다음은 자바스크립트에서 객체의 예시입니다.

```javascript
let gitBook = {
  title: "깃&깃허브 입문", // 문자열
  pubDate: "2019-12-06", // 문자열
  pages: 272, // 숫자
  finished: true // 논릿값
}
```

## 2. 객체의 값에 접근하기

객체에 있는 여러 개의 프로퍼티 중에서 원하는 프로퍼티값을 가져오려면 다음 형식을 사용합니다.

```javascript
객체명.키
```

```javascript
gitBook.title // gitBook 객체에서 title 키의 값 가져오기
```

