---
layout: single
title: "HTML & CSS : 사용자로부터 입력 받기 1"
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

- `type 속성`에는 text, password, nember 등 다양한 종류가 있음

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
    <input id="id_1" name="id_1" type="text">
    <button type="submit">pick me</button>
    <button type="reset">reset</button>
    <button type="button">그냥 버튼</button>
</form>

<br>

```html
<form autocomplete="on">
    <label for="id_1">이름</label>
    <input id="id_1" name="id_1" type="text">
    <button type="submit">pick me</button>
    <button type="reset">reset</button>
    <button type="button">그냥 버튼</button>
</form>
```

## fieldset 태그와 legend 태그

|    태그    |                  설명                 |                   비고                  |
|:----------:|:-------------------------------------:|:---------------------------------------:|
| `<fieldset>` | 폼 태그 내 입력요소와 라벨들을 그룹화 | disabled 속성: 포함된 입력요소 비활성화 |
|  `<legend>`  |      필드셋 요소의 제목 또는 설명     |                                         |

<form autocomplete="on">
    <fieldset>
        <legend>아이브</legend>
        <label for="name_01">이름</label>
        <input id="name_01" name="name_01" type="text">
        <label for="age_01">나이</label>
        <input id="age_01" name="age_01" type="number">
    </fieldset>
    <fieldset>    
        <legend>에스파</legend>
        <label for="name_02">이름</label>
        <input id="name_02" name="name_02" type="text">
        <label for="age_02">나이</label>
        <input id="age_02" name="age_02" type="number">
    </fieldset>
    <button type="submit">submit</button>
    <button type="reset">reset</button>
</form>

<br>

```html
<form autocomplete="on">
    
    <fieldset>
        <legend>아이브</legend>
        <label for="name_01">이름</label>
        <input id="name_01" name="name_01" type="text">
        <label for="age_01">나이</label>
        <input id="age_01" name="age_01" type="number">
    </fieldset>

    <fieldset>    
        <legend>에스파</legend>
        <label for="name_02">이름</label>
        <input id="name_02" name="name_02" type="text">
        <label for="age_02">나이</label>
        <input id="age_02" name="age_02" type="number">
    </fieldset>

    <button type="submit">submit</button>
    <button type="reset">reset</button>

</form>
```