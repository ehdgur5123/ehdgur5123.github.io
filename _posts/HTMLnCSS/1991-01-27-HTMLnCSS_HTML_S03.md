---
layout: single
title: "HTML & CSS : 용도에 따른 태그 사용하기"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-27/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 시맨틱 태그(Semantic Tags)

- 기능적으로는 `div` 태그와 같지만, 페이지의 해당 요소가 갖는 의미와 역할을 부여하기 위함

- 시맨틱 태그의 장점

    1. 웹 접근성 개선
        
        - 스크린 리더로 페이지를 보는 사람들이 필요한 정보를 수월히 찾을 수 있음

    2. SEO (Search Engine Optimization)

        - 검색엔진이 페이지를 분석할 때 각 정보의 종류를 파악하는데 도움

    3. 유지보수와 가독성

        - 모든 구획들이 `div`들로 구성된 페이지보다 코드를 읽고 구조를 파악하기 쉬움

## 시맨틱 태그의 종류

### header

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/header)

- 페이지나 구획의 제목 역할을 하는 요소들을 두는데 사용

- 로고와 제목, 검색창 등이 들어감

### nav

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/nav)

- 링크들을 포함하는 태그

- 주로 페이지의 메뉴들이나 색인 등에 사용

### footer

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer)

- 페이지나 구획의 최하단에 보여지는 푸터에 사용

- 페이지의 주인 연락처 및 저작권 정보 등이 들어감

### main

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/main)

- 페이지의 주요 내용이 들어가는 곳

- **페이지에서 하나만 존재해야 함**

### aside

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/aside)

- 사이드바 등 주요 내용과 간접적으로 연관된 컨텐츠를 포함

### section

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/section)

- 페이지의 컨텐츠를 일정 단위의 구획으로 나누는데 사용

- 더 작은 단위의 컨테이너는 div를 사용

### article

[MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML/Element/article)

- 페이지 내에서 재사용될 수 있거나 페이지로부터 독립적인, 즉 다른 페이지에서도 사용될 수 있는 컨텐츠에 사용

- 기사나 블로그 포스트, 댓글 등에 사용
