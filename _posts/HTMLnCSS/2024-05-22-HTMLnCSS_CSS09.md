---
layout: single
title: "HTML & CSS : 포지셔닝"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-22/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## position 속성

- 요소들이 화면에 어떻게 배치될지를 지정

- 자식 요소에게 대물림되지 않음

### static 옵션

- 옵션 미지정 시의 기본값

- 페이지의 흐름을 따름

- top, bottom, left, right, z-index 속성의 영향을 받지 않음

### relative 옵션

- **원래 위치를 기준**으로 top~right 속성값이 적용

- 요소의 위치는 이동하지만 요소가 차지하는 공백의 위치는 유지

### absolute 옵션

- static이 아닌 **첫 부모 요소를 기준**으로 top~right 속성값이 적용 

- 페이지의 문서 흐름에서 벗어나, 자리를 차지하지 않음

- <mark>부모의 position이 static이면 자식의 기준이 되지 못함</mark>

### fixed 옵션

- **viewport를 기준**으로 위치를 지정

- 팝업과 같이 스크롤을 내려도 같이 따라다니는 효과

### sticky 옵션

- 요소가 스크롤로 이동할 수 있는 공간을 top~right 속성으로 제한

- 예를들면, top 20px 이면 화면 상단에서 20px 만큼 떨어져 스크롤을 따라 움직임

## z-index 속성

- static이 아닌 요소들간의 앞 뒤 배치를 지정

- `auto 옵션`은 0이며, 숫자가 높을수록 앞으로 배치됨

