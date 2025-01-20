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

// 연결 연산자를 사용할 경우
console.log()
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
//console.log(hi());
```

### 예제2

화살표 함수에서 실행할 명령이 한 줄뿐이라면 중괄호(`{}`)를 생략할 수 있습니다. 그리고 한 줄 명령에 return문이 포함되어 있다면 return도 생략할 수 있습니다.

다음은 위 예제에서 중괄호와 return을 생략한 형태입니다.

```javascript
let hi = () => '안녕하세요';
//console.log(hi());
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

### 콜백 함수(Callback Function)

### 프로미스(Promise)

### async / await


