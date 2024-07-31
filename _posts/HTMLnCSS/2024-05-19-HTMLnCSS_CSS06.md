---
layout: single
title: "HTML & CSS : 박스 모델 1"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-19/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 요소의 크기

- 인라인(inline)이 아닌 요소는 `width`와 `height`를 이용하여 크기를 조절할 수 있음

### width 와 height

- 단위

    - `px`, `em(%)`

    - `vw`, `vh` : 뷰포트(viewport) 너비와 높이의 1/100 단위

        > 뷰포트 : 내 윈도우 화면의 크기

    - `vmax`, `vmin` : 너비와 높이 중 큰 쪽과 작은 쪽의 1/100 단위

        - `20vmax`는 너비와 높이 중 큰 쪽의 20% 크기

        - `20vmin`은 너비와 높이 중 작은 쪽의 20% 크기

    - `calc( )` : `calc()`연산자를 통해 필요에 맞는 길이로 조절 가능

        - 형식 : calc(50% + 100px)

- Tip : `line-height 속성`을 `heigh 속성`과 똑같은 값을 입력하면 블록 요소 내 가운데 정렬하는 효과를 얻을 수 있음(한 줄일 경우)

```css
div{
    width: 20px;
    height: 30vh;
    line-height: calc(1em + 2vh);
}
```

### 최대/최소 너비/높이 속성

- `max-width` : 최대 너비 속성

- `max-height` : 최대 높이 속성

- `min-width` : 최소 너비 속성

- `min-height` : 최소 높이 속성

## 여백

### margin

- 바깥쪽 여백을 지정해주는 속성

- 단위는 `px`, `em(%)`, `vw`, `vh`, `vmax`, `vmin` 등 사용 가능

- 형식

    - `margin: 24px` : 위아래좌우 24px

    - `margin: 6vh 4vw` : 위아래 6vh / 좌우 4vw

    - `margin: 12px, 24px, 48px, 96px` : 위 12px / 우 24px / 아래 48px / 좌 96px (시계방향)

    - `margin: 12px, 24px, 48px` : 위 12px / 좌우 24px / 아래 48px

- margin에 auto 형식을 주면 양쪽여백을 동일하게 하여 블록 요소를 가운데 정렬 시킬 수 있음(현재는 **flex 방식**을 많이 사용)

    > inline-block 요소의 경우 부모 요소의 text-align을 center로 주면 됩니다.

```css
div {
    margin: auto; /*좌우 여백 동일하게*/
    margin: 48px auto; /*위아래 48px / 좌우 여백 동일*/
}

### padding 

- 안쪽 여백을 지정해주는 속성

- 단위 및 형식은 margin과 같음

### 기타

- margin과 padding에 개별 속성으로 크기를 지정해줄 수도 있음

```css
div {
    margin-top: 1px;
    margin-bottom: 1px;
    margin-left: 1px;
    margin-right: 1px;

    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    padding-right: 1px;
}
```



