---
layout: single
title: "HTML & CSS : 사용자로부터 입력 받기 2"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-10/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## input 태그

- `input 태그`에는 다양한 속성과 type이 있음

- [input 태그의 속성과 type 보기(MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

<br>

## 텍스트 관련 input 속성 

|     속성    |          설명          |          비고          |
|:-----------:|:---------------------:|:----------------------:|
| placeholder | 빈 칸에 보이는 안내문  |                         |
|  maxlength  |       최대 길이       |                         |
|  minlength  |       최소 길이       | 위반시 submit이 거부됨   |
|             |                      |                         |

### placeholder 속성

- 텍스트란 처음에 적혀있는 글귀

### maxlength 속성

- 텍스트란에 적을 수 있는 **글자 수** 제한

### minlength 속성

- 몇자 이상 입력하세요.

- 위반 시, submit(버튼)이 거부됨

### 실습

```html
<form>
    <label for="text_01">text</label><br>
    <input 
    id="text_01" name="text_01" type="text"
    placeholder="5자 이하" maxlength="5"
    >
    <br><br>

    <label for="pw_01">password</label><br>
    <input 
    type="password" id="pw_01" name="pw_01" 
    placeholder="4자 이상" minlength="4"
    >
    <br><br>

    <label for="search_01">search</label><br>
    <input type="search" id="search_01" name="search_01">
    <br><br>

    <label for="tel_01">tel</label><br>
    <input type="tel" id="tel_01" name="tel_01">
    <br><br>

    <button type="submit">submit</button>
</form>
```

<br>

<form>
    <label for="text_01">text</label><br>
    <input 
    id="text_01" name="text_01" type="text"
    placeholder="5자 이하" maxlength="5"
    >
    <br><br>
    <label for="pw_01">password</label><br>
    <input 
    type="password" id="pw_01" name="pw_01" 
    placeholder="4자 이상" minlength="4"
    >
    <br><br>
    <label for="search_01">search</label><br>
    <input type="search" id="search_01" name="search_01">
    <br><br>
    <label for="tel_01">tel</label><br>
    <input type="tel" id="tel_01" name="tel_01">
    <br><br>
    <button type="submit">submit</button>
</form>

<br>

## 숫자 관련 input 타입

- type : `number`, `date`, `range` 등

- 시간 및 날짜 관련 다른 타입들 : `datetime-local`, `month`, `time`, `week`


- 숫자 관련 input 속성

| 속성 |  설명  |            비고            |
|:----:|:------:|:--------------------------:|
|  min | 최소값 | date 등 타입마다 형식 다름 |
|  max | 최대값 | date 등 타입마다 형식 다름 |
| step |  간격  |                            |

<br>

<form action="#">
    <label for="num">number</label>
    <input type="number" id="num" min="0" max="10">
    <br><br><br>
    <label for="date">date</label>
    <input type="date" id="date">
    <br><br><br>
    <label for="range">range</label>
    <input type="range" id="range" min="0" max="100" step="20">
    <br><br><br>
</form>

```html
<form action="#">

    <label for="num">number</label>
    <input type="number" id="num" min="0" max="10">
    <br><br><br>

    <label for="date">date</label>
    <input type="date" id="date">
    <br><br><br>

    <label for="range">range</label>
    <input type="range" id="range" min="0" max="100" step="20">
    <br><br><br>

</form>
```

<br>

## 체크 관련 input 타입

- type : `checkbox`, `radio`  

|   속성  |               타입              |             설명             |
|:-------:|:-------------------------------:|:----------------------------:|
| checked |        체크박스 & 라디오        |          체크됨 여부         |
|   name  | 라디오 (다른 타입들에서도 사용) |   옵션들의 그룹으로 사용됨   |
|  value  | 라디오 (다른 타입들에서도 사용) | 각 옵션마다 실제로 넘겨질 값 |

<br>

- 체크 관련 타입은 `label`을 뒤쪽에 작성

- `checked` 속성은 초기에 체크되는 값

<br>

<form action="#">
    <input type="checkbox" id="check" checked>
    <label for="check">checkbox</label>
    <br><br>
    <input type="radio" name="fruit" id="fruit_apple" value="apple" checked>
    <label for="fruit_apple">사과</label>
    <input type="radio" name="fruit" id="fruit_orange" value="orange">
    <label for="fruit_orange">오렌지</label>
    <br>
    <input type="radio" name="vege" id="v_tomato" value="tomato">
    <label for="v_tomato">토마토</label>
    <input type="radio" name="vege" id="v_carvage" value="carvage" checked>
    <label for="v_carvage">양배추</label>
</form>

<br>

```html
<form action="#">
    
    <input type="checkbox" id="check" checked>
    <label for="check">checkbox</label>

    <br><br>

    <input type="radio" name="fruit" id="fruit_apple" value="apple" checked>
    <label for="fruit_apple">사과</label>

    <input type="radio" name="fruit" id="fruit_orange" value="orange">
    <label for="fruit_orange">오렌지</label>
    <br>

    <input type="radio" name="vege" id="v_tomato" value="tomato">
    <label for="v_tomato">토마토</label>

    <input type="radio" name="vege" id="v_carvage" value="carvage" checked>
    <label for="v_carvage">양배추</label>

</form>
```

<br>

## 기타 input 타입

- type : `file`, `hidden`, `email`


|   속성   |            설명            |      참조     |
|:--------:|:--------------------------:|:-------------:|
|  accept  | 받아들일 수 있는 파일 형식 | 👉 [작성 가이드](https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/file#%EA%B3%A0%EC%9C%A0_%ED%8C%8C%EC%9D%BC_%EC%9C%A0%ED%98%95_%EC%A7%80%EC%A0%95%EC%9E%90) |
| multiple | 여러 파일 업로드 가능 여부 |               |

- file 타입의 **accept 속성**의 파일 유형 지정자

    - `.jpg`, `.pdf`, `.doc` 등 확장자(대소문자 구분 X)

    - `audio/*`는 "모든 오디오 파일"을 의미

    - `video/*`는 "모든 비디오 파일"을 의미

    - `image/*`는 "모든 이미지 파일"을 
    
<br>

<form action="#">
    <label for="file01">file</label>
    <input
        type="file" name="file01" id="file01"
        accept="image/png, image/jpeg"
        multiple
    >
    <br><br>
    <label for="hidden01">hidden</label>
    <input type="hidden" name="hidden01" id="hidden01">
    <br><br>
    <label for="email01">email</label>
    <input type="email" name="email01" id="email01">
    <button type="submit">submit</button>
</form>

<br>

```html
<form action="#">

    <label for="file01">file</label>
    <input
        type="file" name="file01" id="file01"
        accept="image/png, image/jpeg"
        multiple
    >

    <br><br>

    <label for="hidden01">hidden</label>
    <input type="hidden" name="hidden01" id="hidden01">

    <br><br>

    <label for="email01">email</label>
    <input type="email" name="email01" id="email01">

    <button type="submit">submit</button>
</form>
```

<br>

## input 요소 공통(대부분) 속성