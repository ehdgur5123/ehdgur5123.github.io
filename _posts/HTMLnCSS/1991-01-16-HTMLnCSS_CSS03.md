---
layout: single
title: "HTML & CSS : 문단과 목록 스타일"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-16/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 정렬과 간격

```css
p {
  /* left, center, right, justify */
  text-align: left;

  letter-spacing: 0;
  word-spacing: 0em;
  line-height: 1.5em;
  text-indent: 0.8em;
}
```

### text-align

1. left : 왼쪽 정렬
2. center : 중앙 정렬
3. right : 오른쪽 정렬
4. justify : 양쪽 정렬

### letter-spacing : 자간

- 단위는 사이즈 단위인 px, em(%), rem 등

- em(%) 사이즈 사용 권장

### word-spacing : 단어 간격

- 단위는 사이즈 단위인 px, em(%), rem 등

- em(%) 사이즈 사용 권장

### line-height : 줄 높이

- 단위는 사이즈 단위인 px, em(%), rem 등

- em(%) 사이즈 사용 권장

### text-indent : 들여쓰기

- 단위는 사이즈 단위인 px, em(%), rem 등

- em(%) 사이즈 사용 권장

- 첫 줄이 안쪽으로 들여쓰기 됨

- 음수를 넣어 내어쓰기할 수 잇음

## list-style

- `ul`과 `ol`의 스타일을 지정

- `ul`, `ol` 상관없이 기호, 서수, 원하는 문자, 이모지, 이미지 등 변경 가능

- `none` 값 사용 시, 아무것도 지정하지 않을 수 있음

- [다양한 list-style 보기(링크)](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style)

```css
ul {
    list-style: none;
    list-style: upper-alpha;
}

ol {
    list-style: "🔥 ";
    list-style: url(moz-extension://5922b278-8638-41f6-9e4b-40a3672708a1/favicon.ico);
}
```

### ordered 목록

- decimal, lower-alpha, upper-alpha, lower-roman, upper-roman, lower-greek 등

### unordered 목록

- circle, disc, square, "-" 등

- `" "`에 텍스트 입력 시, 텍스트를 목록으로 사용

### 기타 목록

- none : 아무것도 지정하지 않음

- 이모지 : [이모지를 사용할 수 있는 사이트](https://emojipedia.org/)

- `url(경로)` : 이미지 삽입
    