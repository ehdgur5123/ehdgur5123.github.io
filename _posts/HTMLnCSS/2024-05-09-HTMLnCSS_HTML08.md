---
layout: single
title: "HTML & CSS : 사용자로부터 입력 받기"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-09/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 주요 태그

|    태그    |                설명                |                               비고                              |
|:----------:|:----------------------------------:|:---------------------------------------------------------------:|
|  `<form>`  | 정보를 제출하기 위한 태그들을 포함 |          autocomplete 속성: 자동완성 여부 (기본: `on`)          |
|  `<input>` |          입력을 받는 요소          |                     type 속성을 통해 다양화                     |
|  `<label>` |        인풋 요소마다의 라벨        |    for 속성값을 인풋 요소의 id와 연결. 인풋의 클릭 영역 확장    |
| `<button>` |                버튼                | type 속성에 submit(제출), reset(초기화), button(기본 동작 없음) |

### form 태그

- 정보를 제출하기 위한 태그들의 메인 부모 태그

### input 태그와 label 태그

- 입력을 받기 위한 요소로 `id 속성`, `name 속성`, `type 속성` 등이 있음

- `name 속성`

    - name 속성은 HTML상으로는 의미를 갖지 않으며, 정보들을 서버로 보낼 때 사용

    - 서버에서 각 항목을 받을 때, 어떤 값인지 구분하기 위함

- `id 속성`

    - id 속성은 각 페이지마다 고유해야 함

    - `<label>` 태그의 `for` 속성과 `<input>` 태그의 `id` 속성을 일치시켜야 함

    ```html
    <label for="name_1">이름</label>
    <input id="name_1" name="name_1" type="text">
    ```

### button 태그

- 버튼 태그로 `type 속성`에 `submit`(제출), `reset`(초기화), `button`(기본 동작 없음) 등이 있음

<form autocomplete="on">
    <label for="id_1">이름</label>
    <input if="id_1" name="id_1" type="text">
    <button type="submit">pick me</button>
    <button type="reset">초기화</button>
    <button type="button">아직 기능없는 버튼</button>
</form>

<br>

```html
<form autocomplete="on">
    <label for="id_1">이름</label>
    <input if="id_1" name="id_1" type="text">
    <button type="submit">pick me</button>
    <button type="reset">초기화</button>
    <button type="button">아직 기능없는 버튼</button>
</form>
```