---
layout: single
title: "HTML & CSS : 다른 곳으로의 링크"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-08/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## a 태그

```html
<a href="연결할 주소" target="링크를 열 곳 옵션">
```

| target 속성값 |      설명     |                     비고                    |
|:-------------:|:-------------:|:-------------------------------------------:|
|   `_self`     |    현재 창    |                     기본                    |
|   `_blank`    |     새 창     | 텍스트나 내부 이미지의 alt 등으로 명시 필요 |
|  `_parent`    |  부모 프레임  |               `<iframe>` 사용시               |
|    `_top`     | 최상위 프레임 |               `<iframe>` 사용시               |

- 네이버를 새창에서 열기

```html
<a href="https://www.naver.com" target="_blank">
    네이버로 가기(새 창에서)
</a>
```

<a href="https://www.naver.com" target="_blank">네이버로 가기(새 창에서)</a>

### 이미지에 링크 넣기

```html
<a href="https://www.naver.com" target="_blank">
    <img 
    src="https://logoproject.naver.com/img/img_story_renewal.png"
    alt="네이버 이미지"
    >
</a>
```

[![네이버로 가기(새 창에서)](https://logoproject.naver.com/img/img_story_renewal.png)](https://www.naver.com)


### id 값을 사용한 요소로의 이동

- `href` 값에 `#(id값)`을 넣음

- 해당 링크 클릭 시, `id`값이 `target_900`인 곳으로 이동

    ```html
    <a href="#target_900">타깃으로 이동</a>
    ```

- `p#target_${id: taget_$}*1000`을 입력하고 `Tab`을 누르면, 아래와 같이 `$` 값에 1부터 1000까지 숫자가 입력된다 

    ```html
    <p id="target_1">id: taget_1</p>
    <p id="target_2">id: taget_2</p>
    <p id="target_3">id: taget_3</p>
    <p id="target_4">id: taget_4</p>
    <p id="target_5">id: taget_5</p>
    <p id="target_6">id: taget_6</p>
    ...
    <p id="target_1000">id: taget_1000</p>
    ```

### id 값을 사용한 다른 사이트의 요소로 이동

- a태그를 사용해서 타 사이트의 링크를 복사해서 아래와 같이 사용 가능

- 페이지 상단이 아닌 원하는 요소에 진입할 수 있음

```html
<a href="https://ehdgur5123.github.io/posts/HTMLnCSS-01/#vs-code-%EB%8B%A8%EC%B6%95%ED%82%A4" target="_blank">
    HTML & CSS : 소개(introduction)의 VS Code 단축키 보기 
</a>
```

<a href="https://ehdgur5123.github.io/posts/HTMLnCSS-01/#vs-code-%EB%8B%A8%EC%B6%95%ED%82%A4" target="_blank">
    HTML & CSS : 소개(introduction)의 VS Code 단축키 보기 
</a>

## address 태그

- 주소 및 연락처 정보를 포함

- 전화는 href 앞에 `tel`, 이메일은 `mailto`

- 컴퓨터가 해당 태그를 전화인지, 이메일인지 인식하기 위함으로, 스마트폰으로 번호를 누르면 전화로 연결됨
 
```html
웹사이트 주소 : <a href="https://ehdgur5123.github.io/" target="_blank">끄적끄적</a> <br>
오피스 : 서울특별시 도봉구 행복4길 44 <br>
전화 : <a href="tel:010-1234-5678">010-1234-5678</a> <br>
이메일 : <a href="mailto:ehdgur5123@naver.com">ehdgur5123@naver.com</a> <br>
```