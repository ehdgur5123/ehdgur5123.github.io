---
layout: single
title: "HTML & CSS : 상단의 태그들"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-25/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
</html>
```

## DOCTYPE

- 문서가 형식과 버전으로 작성되었는지를 명시

- 선언 시, 최신형식으로 문서를 실행(미실행 시 옛날 브라우저로 실행)

## head 태그

**메타데이터**(기계가 읽을 정보)가 담기는 곳

  - 페이지의 제목
  - 파비콘(브라우저 탭의 아이콘)
  - 기타 메타 정보
  - CSS와 자바스크립트 등의 코드 및 링크

## title 태그

```html
<title>웹페이지의 제목</title>
```

  - 브라우저의 탭에 표시
  - 브라우저 즐겨찾기의 제목으로 표시
  - 검색엔진 검색결과의 제목으로 표시

## meta 태그와 속성들

### charset

```html
<meta charset="UTF-8">
```

  - **UTF-8** : 전세계 거의 모든 문자를 표현할 수 있는(유니코드) 형식

### IE 관련 호환정보

```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
```

  - 익스플로러에서 열람 시 어떤 모드로 실행할 것인지 지정


### 뷰포트 관련 정보

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

  - **viewport** : 화면에 보여지고 있는 영역

### Open Graph 정보

- Meta(구 페이스북)에서 만든 프로토콜

```html
<meta property="og:title" content="끄적끄적">
<meta property="og:description" content="나의 연습장">
<meta property="og:image" content="https://ehdgur5123.github.io/assets/images/logo.jpg">
```

### 파비콘

```html
<link rel="shortcut icon" href="../../../assets/images/logo.jpg" type="image/x-icon">
```

- 브라우저 탭의 아이콘

- 예전에는 `.ico` 확장자로만 사용했지만 오늘날에는 `.png`, `.gif`로도 사용 가능

