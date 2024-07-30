---
layout: single
title: "HTML & CSS : CSS 적용방법과 선택자"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-14/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## CSS 적용방법

### 인라인 스타일(inline style)

- HTML 태그마다 **style 속성**으로 CSS 코드를 넣어주는 방식

- HTML 코드와 CSS 코드가 분리되지 않아 **권장하지 않음**

### 내부 스타일 시트(internal style sheet)

- HTML의 head 태그 안에 style 태그를 두고 그 안에 CSS 코드를 작성하는 방식

### 링킹 스타일 시트(linking style sheet)

- 외부의 CSS 파일을 HTML 문서에 연결하는 것

- HTML 코드가 CSS 코드가 분리되기 때문에 가장 널리 사용되는 방식


### 실습

#### HTML

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .style-1{
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="./HTMLnCSS_CSS01.css">

</head>
<body>

    <h1 style="color: burlywood;">인라인 스타일</h1>

    <h2 class="style-1">내부 스타일 시트</h2>

    <h3 class="style-2">링킹 스타일 시트</h3>

</body>
</html><!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .style-1{
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="./HTMLnCSS_CSS01.css">

</head>
<body>

    <h1 style="color: burlywood;">인라인 스타일</h1>

    <h2 class="style-1">내부 스타일 시트</h2>

    <h3 class="style-2">링킹 스타일 시트</h3>

</body>
</html>
```

#### CSS

- HTMLnCSS_CSS01.css 파일

```css
.style-2{ color:olive }
```

#### 결과 

![image](../../assets/images/HTMLnCSS/HTMLnCSS-14-01.png)

## CSS 선택자

- 선택자들에는 적용되는 우선 순위가 있으며, 구체적일수록 우선순위가 높음

- 같은 선택자의 경우 뒤에 오는 것이 우선순위가 높음

1. 모든 요소 선택 : `*`

    - 모든 요소를 아래와 같이 변경

    ```css
    * {
        font-weight: bold;
        color: darkorange;
    }

2. 태그 선택자 : `태그명`

    - `<p> 태그`를 아래와 같이 변경 

    ```css
    p {
       color: aqua; 
    }

3. class 선택자 : `.클래스명`

    - 태그 선택자보다 우선순위가 높음

    - HTML 태그의 class가 blue(`class="blue"`)인 모든 요소를 아래와 같이 변경 

    ```css 
    .blue {
        color: tomato;
    }
    ```

4. id 선택자 : `#id명`

    - class 선택자보다 우선순위가 높음

    - HTML 태그의 id가 red(`id="red"`)인 모든 요소를 아래와 같이 변경 

    ```css
    #red {
        color: blueviolet;
    }
    ```

5. 복합(그룹) 선택자

    - 태그 선택자, class 선택자, id 선택자를 복합으로 그룹을 선택할 수 있음

    - 그룹을 상세히 지정할 수록 우선순위가 높음

    - p 태그의 class가 blue(`<p class="blue">`)인 요소 변경

    ```css
    p.blue {
        color :darkgrey;
    }
    ```

    - p 태그의 class가 blue와 dark(`<p class="blue dark">`)인 요소 변경

    ```css
    p.blue.dark {
        color: aliceblue;        
    }
    ```

    - p 태그의 class가 blue이고, id가 red(`<p class="blue" id="red">`)인 요소 변경

    ```css
    p.blue#red {
        color: crimson;     
    }
    ```

## 결합자

- HTML 예제

```html
<ul class="outer">
    <li>육류</li>
    <li class="fruit">과일
        <ul>
            <li>사과</li>
            <li>포도</li>
        </ul>
    </li>
    <li>야채</li>
    <li>소주</li>
</ul>
```

- 부모 태그의 class가 outer인 **모든** `li 태그` 변환

```css 
.outer li {
    color: red;
}
```

> 예제에서는 모든 요소가 red로 변환

- 부모 태그의 class가 outer인 **1촌** `li 태그` 변환 

```css 
.outer > li {
    color: red;
}
```

> 예제에서는 1촌인 "육류", "야채", "소주" 만 변환되어야 하지만, 상속되므로 모두 변환됨

- 부모 태그의 class가 outer인 **2촌** `li 태그` 변환 

```css 
.outer > li li {
    color: red;
}
```

> 예제에서는 2촌인 "사과", "포도" 만 변환

- class가 fruit인 태그의 **동생(뒤따르는)** `li 태그` 변환 

```css 
.fruit ~ li {
    color: red;
}
```

> 예제에서는 과일 태그를 뒤따르는 동생인 "야채", "소주" 만 변환

- class가 fruit인 태그의 **첫번째 동생** `li 태그` 변환 

```css 
.fruit + li {
    color: red;
}
```

> 예제에서는 과일 태그의 첫번째 동생인 "야채" 만 변환

## 가상 클래스

- HTML에는 실제로 class가 없지만, CSS에 적용되는 가상의 클래스

- HTML 예제

```html
<ul class="outer">
    <li>육류</li>
    <li class="fruit">과일
        <ul>
            <li>사과</li>
            <li>포도</li>
            <li>오렌지</li>
        </ul>
    </li>
    <li>야채</li>
    <li>소주</li>
</ul>
```

- `ul 태그`의 첫 번째 자식(**first-child**)과 마지막 자식(**last-chuld**)의 `li 태그` 변환

```css 
ul li:first-child, ul li:last-child {
    color: red;
}
```

> 예제에서는 "육류", "사과", "오렌지", "소주" 변환

- outer 클래스의 마지막 자식(**last-chuld**)이 아닌 모든 `li 태그` 변환

```css
.outer > li:not(:last-child) {
    color: red;
}
```

> 예제에서는 "소주"를 제외한 모든 요소 변환

- `ul 태그` 중 outer 클래스가 아닌 모든 `li 태그` 변환

```css
ul:not(.outer) li {
    color: red;
}
```

> 예제에서는 outer 클래스가 아닌 "사과", "포도", "오렌지" 변환

- `ul 태그`의 세 번째 자식인 `li 태그` 변환

```css
ul li:nth-child(3) {
    color: red;
}
```
 
> 예제에서는 "오렌지", "야채" 변환

- `nth-child()` 옵션 추가

```css 
/* 3n 번째의 자식들 변환(3,6,9,...) */
ul li:nth-child(3n) {
    color: red;
}

/* 3n+2 번째의 자식들 변환(5,8,11,...) */
ul li:nth-child(3n+2) {
    color: red;
}

/* 홀수 번째의 자식들 변환*/
ul li:nth-child(odd) {
    color: red;
}

/* 짝수 번째의 자식들 변환*/
ul li:nth-child(even) {
    color: red;
}
```

- **마우스오버 가상 클래스** : 조건에 맞는 요소를 마우스에 가져다 대면 변환

```css
li:hover {
    color: red;
}
```

> 예제에서는 모든 li 태그 요소들 변환(마우스 가져다 놓았을 때)
