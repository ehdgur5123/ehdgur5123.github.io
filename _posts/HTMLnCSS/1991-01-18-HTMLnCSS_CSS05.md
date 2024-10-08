---
layout: single
title: "HTML & CSS : 인라인 요소와 블록 요소"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-18/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 인라인(inline) 요소

- 일정한 틀 없이 페이지 흐름에 따라 자리를 차지  

- [인라인 요소 목록 보기(링크)](https://developer.mozilla.org/ko/docs/Glossary/Inline-level_content#%EC%9A%94%EC%86%8C_%EB%AA%A9%EB%A1%9D) 

- 모든 인라인 요소의 기본값은 `span`
  
## 블록(block) 요소

- 일정한 틀이 있는 상자와 같은 형태

- [블록 요소 목록 보기(링크)](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content#elements)

- 모든 블록 요소의 기본값은 `div`

## display 속성

- 각각의 요소(태그)들은 **인라인 요소** 또는 **블록 요소**로 기본값을 갔지만 `display 속성`으로 요소를 지정해줄 수 있음

```css
p {
    /*inline, block, inline-block 등*/
    /* p태그의 기본값은 block 임*/
    display: inline;
}
```

|                             |            inline            |          block          | inline-block |
|:---------------------------:|:----------------------------:|:-----------------------:|:------------:|
|          기본 너비          |          컨텐츠만큼          |     부모의 너비만큼     |  컨텐츠만큼  |
|      width, height 속성     |             무시             |           적용          |     적용     |
|        가로공간 차지        |             공유             |           독점          |     공유     |
| margin 속성 ( 바깥쪽 여백 ) |          가로만 적용         | 모두 적용 ( 상하 상쇄 ) |   모두 적용  |
|  padding 속성 ( 안쪽 여백 ) | 가로만 적용, 세로는 배경색만 |        모두 적용        |   모두 적용  |

```css
span {
  display: inline-block;
  background-color: red;
  margin: 10px;
}

div {
  display: block;
  color: blue;
  background-color: yellow;
  height: 50px;
  width: 10em;
  padding: 10px;
}
```

- [속성 테스트 해보기(링크)](https://www.yalco.kr/@html-css/2-5/)