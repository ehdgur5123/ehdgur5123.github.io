---
layout: single
title: "HTML & CSS : 요소들을 감추는 방법들"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-23/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## cursor 속성

- 요소에 마우스를 올려놓았을때, 마우스의 모양

1.  `auto` : 요소에 따라 자동변경
2. `default` : 기본 화살표 모양
3. `none` : 마우스가 사라짐
4. `pointer` : 클릭할 수 있는 요소에 손모양
5. `zoom-in` : 돋보기 모양
6. `not-allowed` : 클릭 금지 모양

- [다양한 커서 목록 보기(링크)](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

## 요소를 숨기는 세 가지 방법

### opacity 속성<sup>[속성보기](https://developer.mozilla.org/ko/docs/Web/CSS/opacity)</sup>

- 불투명도를 설정하는 속성

- `opacity 속성`을 0으로 하면 **모습 감춤**, **클릭 가능**, **자리 차지**

### visibility 속성<sup>[속성보기](https://developer.mozilla.org/ko/docs/Web/CSS/visibility)</sup>

- 문서의 레이아웃을 변경하지 않고 요소를 보이거나 숨김

- `visibility 속성`을 `hidden`으로 하면 **모습 감춤**, **클릭 불가능**, **자리 차지**

### display 속성

- `display 속성`을 `none`으로 하면 **모습 감춤**, **클릭 불가능**, **자리차지 X**


