---
layout: single
title: "HTML & CSS : 사용자로부터 입력 받기 3"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-11/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## textarea 태그

- 긴 텍스트를 입력받기 위한 태그

| 속성 |        설명        |    비고   |
|:----:|:------------------:|:---------:|
| cols | 글자수 단위의 너비 | 기본값 20 |
| rows |   표시되는 줄 수   |           |

- `input`에서 기본값은 `value`에 입력하지만, `textarea`에서는 `컨텐츠`에 입력

- input과 마찬가지로 `placeholder`, `disables` 등 다양한 속성이 있으니 자세한 사항은 아래의 MDN 문서를 참조

- [textarea 속성보기(링크)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

## select, option 태그

- select는 option의 부모태그

<label for="lan">언어</label><br>
<select name="lan" id="lan">
    <option value="">-- 언어 선택 --</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JAVA">자바</option>
    <option value="C lan">C 언어</option>
</select>

<br>

```html
<label for="lan">언어</label><br>

<select name="lan" id="lan">
    <option value="">-- 언어 선택 --</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="JAVA">자바</option>
    <option value="C lan">C 언어</option>
</select>
```

- `option` 태그의 `selected` 속성 : 처음 기본값으로 선택되게 하는 속성

- `select` 태그의 `multiple` 속성 : 다중 선택 모드(Shift를 눌러야 다중 선택되므로 권장되지 않음)

### optgroup 태그

- `select`, `option` 태그에서 그룹을 지정해주는 방식

- `optgroup` 태그의 `label` 속성을 사용해서 그룹명을 지정

<br>

<select name="lan" id="lan">
    <optgroup label="컴퓨터 언어">
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JAVA">자바</option>
        <option value="C lan" selected >C 언어</option>
    </optgroup>
    <optgroup label="과일">
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="fruitS">과일소주</option>
    </optgroup>
</select>

<br>

```html
<select name="lan" id="lan">

    <optgroup label="컴퓨터 언어">
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JAVA">자바</option>
        <option value="C lan" selected >C 언어</option>
    </optgroup>

    <optgroup label="과일">
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="fruitS">과일소주</option>
    </optgroup>

</select>
```

## datalist 태그

- `input` 태그와 함께 사용되는 리스트 관련 태그

- 사용자가 직접 입력할 수 있지만, 권장되는 입력사항을 표시해주기 위해 사용

- `input`의 `list` 속성과 `datalist`의 `id` 속성이 일치되어야 연결이 가능

- `datalist`의 자식 태그로는 `option` 태그를 지정해주며, `option` 태그의 `value` 속성에 값을 입력

<label for="job">현재 직업</label><br>
    <input type="text" id="job" list="jobs">
    <datalist id="jobs">
        <option value="학생">
        <option value="디자이너">
        <option value="퍼블리셔">
        <option value="개발자">
    </datalist>

```html
<label for="job">현재 직업</label><br>

    <input type="text" id="job" list="jobs">
    <datalist id="jobs">
        <option value="학생">
        <option value="디자이너">
        <option value="퍼블리셔">
        <option value="개발자">
    </datalist>
```

## progress 태그

- 자바 스크립트와 함께 사용하여 동적으로 움직이는 값을 표현

- 현재는 자바 스크립트가 적용되어 있지 않아 멈춰 있음

<progress max="100" value="30" >30%</progress>

```html
<progress max="100" value="30" >30%</progress>
```

|  속성 |    설명   |         비고        |
|:-----:|:---------:|:-------------------:|
|  max  |   최대값  |       기본: 1       |
| value | 진행 수치 | 자바스크립트로 변경 |

## meter 태그

|    속성   |              설명             |            비고            |
|:---------:|:-----------------------------:|:--------------------------:|
|  min, max |        최소값과 최대값        |                            |
| low, high | 전체 범위를 3등분하는 두 수치 |                            |
|  optimum  |          이상적인 값          | 3개의 구간 중 한 곳에 위치 |
|   value   |            실제 값            |                            |

- low와 high로 3등분을 하여 칸을 구분 

- optimum이 위치한 이상적인 범위에 value 값이 있으면 초록, 1칸 떨어지면 노랑, 2칸 떨어지면 빨강

<br>

<meter min="0" max="100" low="33" high="67" optimum="20" value="10">10달러</meter>
<meter min="0" max="100" low="33" high="67" optimum="20" value="40">40달러</meter>
<meter min="0" max="100" low="33" high="67" optimum="20" value="80">80달러</meter>

<br>

```html
<meter
    min="0" max="100" low="33" high="67"
    optimum="20" value="10">
    10달러
</meter>

<meter
    min="0" max="100" low="33" high="67"
    optimum="20" value="40">
    40달러
</meter>

<meter
    min="0" max="100" low="33" high="67"
    optimum="20" value="80">
    80달러
</meter>
```
