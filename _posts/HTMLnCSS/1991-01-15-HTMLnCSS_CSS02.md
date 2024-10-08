---
layout: single
title: "HTML & CSS : 글자와 텍스트 스타일"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-15/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## CSS 기본 문법

```css
선택자 {
    속성1: 값;
    속성2: 값;
    /* ... */
}
```

## 폰트 스타일과 굵기

```css
p {
  /* normal, italic, oblique */
  font-style: normal;

  /* normal, bold, 100~900 */
  font-weight: normal;
}
```

### font-style

1. normal : 보통
2. italic : 기울임 서체
3. oblique : 글자 기울임

### font-weight

1. normal : 보통
2. bold : 글자 굵게
3. 100~900 : 글자의 굵은 정도(수치)

[굵기마다의 이름 매핑 보기(링크)](https://developer.mozilla.org/ko/docs/Web/CSS/font-weight#%EC%9D%BC%EB%B0%98%EC%A0%81%EC%9D%B8_%EA%B0%80%EC%A4%91%EC%B9%98_%EC%9D%B4%EB%A6%84_%EB%A7%A4%ED%95%91)

## 폰트 사이즈

```css
p {
  /* px, %. rem, pt */
  font-size: 14px;
}
```

### font-size

1. `px` : 절대값으로서 픽셀의 단위
2. `%` : 부모 요소와의 상대적 크기(100% = 1em), 자식들이 많으면 계속 중첩됨
3. `rem` : 최상단 html 태그 요소와의 크기(%) 차이, 중첩 적용 되지 않음
4. `pt` : 1인치(=72pt)로, 프린트할 컨텐츠에 사용

## 폰트 효과

```css
p {
    /* none, underline, line-through, overline */
    /* wavy, dotted, dashed, 색상, 사이즈*/
    text-decoration: wavy underline blue 5px;

    /* none, capitalize, lowercase, uppercase*/
    text-transform: capitalize;
}
```

### text-decoration

- 효과

1. none : 적용값 없음
2. underline : 밑줄
3. line-through : 취소선
4. overline : 윗줄

- 기능

1. wavy : 효과에 물결 기능 추가
2. dotted : 효과에 점선 기능 추가 
3. dashed : 효과에 대쉬 기능 추가
4. 색상 : 효과의 색상 지정(color, RGB 등)
5. 사이즈 : 효과의 사이즈 지정(px, em 등)

- <u>각 효과들은 중복 적용이 가능</u>

### text-transform

1. none : 적용값 없음
2. capitalize : 첫글자를 대문자로 변경
3. lowercase : 모두 소문자로 변경
4. uppercase : 모두 대문자로 변경

## 폰트 그림자 효과(text-shadow)

```css
p {
    /* 형식: x좌표(px), y좌표(px), 흐림(px)-선택, 색상 */
    text-shadow: 1px -1px 2px blue  
}
```

- `text-shadow: 1px 0 blue`

    > 좌표(1,0), 블루

- `text-shadow: 1px -1px 2px blue`

    > 좌표(1,-1), 흐림(2px), 블루

- `text-shadow: 1px -1px blue, 0 1px 1px red`

    > 그림자 중복[좌표(1,-1) 블루 / 좌표(0,1), 흐림(1px) 레드]



