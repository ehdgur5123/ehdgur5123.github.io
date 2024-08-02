---
layout: single
title: "HTML & CSS : 모두가 이용할 수 있는 웹사이트"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-26/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 웹 접근성

- 장애가 있는 사용자가 접근 가능한 웹을 만들기 위한 전략, 기준, 자원

- **스크린 리더** : 컴퓨터의 텍스트를 읽어주는 소프트웨어

- 웹 접근성 관련 참고자료

    - [W3C 페이지(링크)](https://www.w3.org/WAI/fundamentals/accessibility-intro/ko)

    - [NULI(링크)](https://nuli.navercorp.com/)

    - [NULI 무료강좌(링크)](https://nuli.navercorp.com/education)

## 웹 접근성 중요 내용 소개

1. 이미지의 `alt` 속성에 설명을 넣을 것

    > 스크린 리더가 이미지를 설명할 수 있도록 작성

    ```html
    <img src="house-shape.png" alt="홈으로">
    ```

2. 설명할 필요가 없는 이미지에도 `alt` 속성에 공백을 넣을 것

    > `alt` 속성을 넣지 않으면 스크린 리더가 파일명(src 값)을 읽음 

    ```html
    <img src="shopping-cart.png" alt="">
    ```

3. 숨겨진 요소에 설명 넣기

    - 시각적으로 필요 없지만, 장애인들이 해당 화면을 이해할 수 있도록 스크린 리더가 설명할 수 있게 하는 기법

    - `sr-only` 기법 코드

        ```css
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
        }
        ```

    - `sr-only` 기법 코드를 CSS에 넣고, HTML에는 화면에는 안나오지만 설명이 필요한 부분에 `sr-only` 클래스를 사용

        ```html
        <img src="./sr-only.png" alt="">

        <p class="sr-only">
            노트북으로 뭔가 공부하고 있는 아이의 독백: 코딩을 배우면 아마 굶지는 않을거랬어.
        </p>

        <dl>
            <dt class="sr-only">분야</dt>
            <dd>프로그래밍</dd>
            <dt class="sr-only">종류</dt>
            <dd>스티커</dd>
            <dt class="sr-only">디자이너</dt>
            <dd>얄코</dd>
            <dt class="sr-only">제작년도</dt>
            <dd>2021</dd>
        </dl>
        ```

4. `aria-label` 속성으로 설명 넣기

    - 버튼 등에 설명을 넣어서 스크린 리더가 읽을 수 있도록 함

    ```html
    <button aria-label="이전 페이지로">◀</button>
    <button aria-label="1번째 페이지로 (현재 페이지)" class="current">1</button>
    <button aria-label="2번째 페이지로">2</button>
    ```

5. `aria-hidden` 속성과 `role` 속성

    - 스크린 리더가 읽을 필요가 없는 요소에는 `aria-hidden` 속성을 `true`로 작성

    - 특정 정보를 나타내는 이모지나 SVG 요소 등을 스크린 리더가 특정 텍스트로 읽도록 하려면 `role` 속성으로 이미지임을 명시하고 `aria-label` 속성에 값을 넣음

    ```html
    <div class="example">
        <span aria-hidden="true">😀</span> 반갑습니다!
    </div>

    <div class="example">
        I <span role="img" aria-label="love">❤️</span> CODING!
    </div>
    ```

6. `figure`와 `figcaption` 태그

    - `figure` 태그 안에 내용을 넣고 `figcaption` 태그에 설명을 작성

    ```html
    <figure>
        <img src="./sr-only.png" alt="">
        <figcaption class="sr-only">
            노트북으로 뭔가 공부하고 있는 아이의 독백: 코딩을 배우면 아마 굶지는 않을거랬어.
        </figcaption>
    </figure>
    ```
