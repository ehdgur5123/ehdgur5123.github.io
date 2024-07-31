---
layout: single
title: "HTML & CSS : 배경 꾸미기"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-21/
classes: custom-style
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 이미지를 배경에 사용하기

### background-image

- 형식 : `background-image: url(경로);`

### background-repeat

- 이미지의 사이즈가 블록요소 보다 작을경우 반복 여부 지정

- space와 round는 거의 사용하지 않음

```css
div{
    background-repeat: repeat;  /*반복(기본)*/
    background-repeat: no-repeat;  /*반복X*/
    background-repeat: repeat-x;  /*가로만 반복*/
    background-repeat: repeat-y;  /*세로만 반복*/
    background-repeat: space;  /*반복인대 공백이 있음*/
    background-repeat: round;  /*이미지 비율에 맞게 조정*/
}
```

### background-position

- 이미지의 위치를 조절

```css 
div{
    background-position: top left;  /*위에서 왼쪽 끝*/
    background-position: top;  /*위에서 중앙*/
    background-position: center;  /*정중앙(50% 50%)*/ 
    background-position: 20% 40%; /*좌에서 20% 위에서 40%*/
}
```

### background-size

- 이미지의 사이즈를 조절

- **contain**과 **cover** 자주 사용

```css 
div{
    background-size: auto;   /*기본사이즈*/
    background-size: 10%;   /*원래 사이즈의 10%*/
    background-size: 100px 150px;  /*너비 100px, 높이 150px*/ 
    background-size: 100px auto;  /*너비 100px에 맞게 높이는 자동변경*/ 
    background-size: contain;  /*이미지 비율을 유지하며 블록 요소에 맞게 조절*/
    background-size: cover;  /*블록요소에 맞게 이미지를 꽉 채움*/
}
```