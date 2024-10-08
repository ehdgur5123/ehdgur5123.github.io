---
layout: single
title: "HTML & CSS : 박스 모델 2"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-20/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 박스 테두리선

- `border 속성` : 요소에 테두리를 지정

- [border MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/CSS/border#%EA%B5%AC%EC%84%B1_%EC%86%8D%EC%84%B1)

```css
div {
    /*border: 선두께, 선종류, 색상*/
    border: 2px solid black;
    border: 1.5vmin dotted #00FF00;
}
```

- 선두께, 선종류, 색상을 따로따로 지정 가능

```css
div {
    border-width: 2px;
    border-style: inset;
    border-color: red yellow green blue; /*위(빨) 우(노) 아(초) 좌(파)*/
}
```

- `border-radius 속성` : 테두리를 둥글게 만듬(단위는 px, em(%) 등)

- `box-sizing 속성` : 값으로는 `content-box`, `border-box` 등이 있음

## overflow 속성

- 부모 요소보다 자식 요소가 클 경우 어떻게 처리할지를 지정

```css
div {
    /*auto, visible, hidden, scroll*/
    overflow: auto;
    overflow: hidden scroll; /*좌우(히든) 위아래(스크롤)*/

    /*각각 지정도 가능*/
    overflow-x: visible;
    overflow-y: scroll;
}
```

## box-shadow 속성

- 박스에 그림자 효과

- 형식

    1. inset 여부 : 안쪽 그림자
    2. offset-x
    3. offset-y
    4. blur-radius : 흐리게(선택)
    5. spread-radius : 그림자 크기(선택)
    6. color

```css
div{
    box-shadow: 4px 4px gray;  /*(2, 3, 6)*/
    box-shadow: 4px 4px 12px gray;  /*(2, 3, 4, 6)*/
    box-shadow: inset 4px 4px 12px gray;  /*(1, 2, 3, 4, 6)*/
    box-shadow: inset 4px 4px 12px 3px gray;  /*(1, 2, 3, 4, 5, 6)*/
}
```

[👉 Smooth Shadow 사이트 사용해보기](https://shadows.brumm.af/)