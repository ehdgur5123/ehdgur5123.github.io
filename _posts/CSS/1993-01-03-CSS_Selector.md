---
layout: single
title: "3) CSS 선택자"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/CSS-03/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

# 1. 기본 선택자

기본 선택자는 특정 HTML 요소 또는 요소 그룹을 선택하는 가장 단순한 형태의 선택자입니다.

## 요소 선택자(Element Selector)

- 특정 태그 이름을 가진 모든 요소를 선택합니다.

- 예시: `p { color: red; }` (모든 `<p>` 요소에 스타일 적용)

## 클래스 선택자(Class Selector)

- 특정 클래스를 가진 요소를 선택합니다. 클래스 이름 앞에 .을 붙여 사용합니다.

- 예시: `.my-class { font-size: 20px; }` (클래스가 my-class인 모든 요소에 스타일 적용)

## 아이디 선택자(ID Selector) 

- 특정 아이디를 가진 요소를 선택합니다. 아이디 이름 앞에 #을 붙여 사용합니다.

- 예시: `#my-id { background-color: blue; }` (id="my-id"인 요소에 스타일 적용)

# 2. 결합자(Combinators)

결합자는 두 개 이상의 선택자를 결합하여 특정 관계에 있는 요소들을 선택하는 데 사용됩니다.

## 자식 선택자(Child Selector, >)

- 지정된 요소의 직속 자식 요소만 선택합니다.

- 예시: `div > p { color: green; }` (모든 `<div>`의 직속 자식 `<p>` 요소에 스타일 적용)

## 후손 선택자(Descendant Selector, 공백)

- 지정된 요소의 모든 후손 요소를 선택합니다.

- 예시: `div p { color: green; }` (모든 `<div>`의 모든 후손 `<p>` 요소에 스타일 적용)

## 형제 결합자(Sibling Combinators)

### 인접 형제 선택자(Adjacent Sibling Selector, +)

- 특정 요소의 바로 다음에 있는 형제 요소를 선택합니다.

- 예시: `h1 + p { color: orange; }` (`<h1>` 요소 바로 뒤에 오는 `<p>` 요소에 스타일 적용)

### 일반 형제 선택자(General Sibling Selector, ~)

- 특정 요소의 모든 형제 요소를 선택합니다.

- 예시: `h1 ~ p { color: orange; }` (`<h1>` 요소 뒤에 있는 모든 형제 `<p>` 요소에 스타일 적용)

# 3. 그룹화 선택자(Grouping Selector)

- 여러 선택자에 같은 스타일을 적용할 때 선택자들을 쉼표로 구분하여 그룹화합니다.

- 예시: `h1, h2, h3 { font-family: Arial; }` (`<h1>`, `<h2>`, `<h3>` 요소에 동일한 스타일 적용)

# 4. 속성 선택자(Attribute Selector)

특정 속성을 가진 요소를 선택합니다.

## 기본 속성 선택자

- 특정 속성을 가진 요소를 선택합니다.

- 예시: `[type="text"] { border: 1px solid black; }` (type="text"인 요소에 스타일 적용)

## 부분 일치 속성 선택자

### [attr^="value"]

- 지정된 값으로 시작하는 속성을 가진 요소 선택

- 예시: `[href^="https"] { color: blue; }` (https로 시작하는 href 속성을 가진 요소에 스타일 적용)

### [attr$="value"]

- 지정된 값으로 끝나는 속성을 가진 요소 선택

- 예시: `[href$=".pdf"] { color: red; }` (.pdf로 끝나는 href 속성을 가진 요소에 스타일 적용)

### [attr*="value"]

- 지정된 값이 포함된 속성을 가진 요소 선택

- 예시: `[href*="example"] { color: green; }` (href 속성에 example이 포함된 요소에 스타일 적용)

# 5. 의사 클래스(Pseudo-classes)

의사 클래스는 요소의 특정 상태를 기반으로 선택할 수 있도록 도와줍니다.

## 동적 상태 의사 클래스

### :hover

- 요소에 마우스가 올려졌을 때 선택

- 예시: `a:hover { color: red; }` (마우스를 올렸을 때 링크의 색상을 변경)

### :focus 

- 요소가 포커스를 받을 때 선택

- 예시: `input:focus { outline: 2px solid blue; }` (포커스를 받은 `<input>` 요소에 스타일 적용)

### :active

- 요소가 클릭된 상태일 때 선택

- 예시: `button:active { background-color: yellow; }` (버튼이 클릭되었을 때 배경색 변경)

## 구조적 의사 클래스

### :first-child

- 부모의 첫 번째 자식 요소를 선택

- 예시: `p:first-child { font-weight: bold; }` (첫 번째 `<p>` 요소에 굵은 글꼴 적용)

### :last-child

- 부모의 마지막 자식 요소를 선택

- 예시: `p:last-child { font-weight: bold; }` (마지막 `<p>` 요소에 굵은 글꼴 적용)

### :nth-child(n)

- 부모의 자식 요소 중 n번째 요소를 선택

- 예시: `li:nth-child(2) { color: green; }` (두 번째 `<li>` 요소에 스타일 적용)

### :nth-of-type(n)

- 같은 태그를 가진 형제 요소 중 n번째 요소를 선택

- 예시: `p:nth-of-type(2) { color: blue; }` (두 번째 `<p>` 요소에 스타일 적용)

### :only-child

- 부모의 자식이 하나뿐인 요소를 선택

- 예시: `p:only-child { color: purple; }` (부모에게서 유일한 자식인 `<p>` 요소에 스타일 적용)

### :not(selector)

- 특정 선택자를 제외한 요소를 선택

- 예시: p:not(.highlight) { color: gray; } (클래스가 highlight가 아닌 `<p>` 요소에 스타일 적용)

# 6. 의사 요소(Pseudo-elements)

의사 요소는 요소의 특정 부분(첫 글자, 내용 전후 등)에 스타일을 적용할 수 있도록 도와줍니다.

## ::before

- 요소의 내용 이전에 가상 콘텐츠를 추가합니다.

- 예시: `p::before { content: "Note: "; font-weight: bold; }` (`<p>` 요소 앞에 "Note: "라는 텍스트 추가)

## ::after

- 요소의 내용 이후에 가상 콘텐츠를 추가합니다.

- 예시: `p::after { content: "."; }` (`<p>` 요소 뒤에 마침표 추가)

## ::first-letter

- 요소의 첫 번째 글자에 스타일을 적용합니다.

- 예시: `p::first-letter { font-size: 2em; color: red; }` (`<p>` 요소의 첫 글자를 크게 하고 색상 변경)

## ::first-line

- 요소의 첫 번째 줄에 스타일을 적용합니다.

- 예시: `p::first-line { font-weight: bold; }` (`<p>` 요소의 첫 번째 줄에 굵은 글꼴 적용)

# 7. CSS4에서 추가된 선택자

CSS4에서 새로 추가된 선택자는 더 정교한 스타일링을 가능하게 합니다.

## ::marker

- 리스트 항목의 마커(불릿 등)에 스타일을 적용합니다.

- 예시: `li::marker { color: red; }` (리스트 마커의 색상을 빨간색으로 변경)

## :nth-last-child(n)

- 부모의 자식 요소 중 끝에서부터 n번째 요소를 선택합니다.

- 예시: `li:nth-last-child(2) { color: red; }` (끝에서 두 번째 `<li>` 요소에 스타일 적용)

## :nth-last-of-type(n)

- 같은 태그를 가진 형제 요소 중 끝에서부터 n번째 요소를 선택합니다.

- 예시: `p:nth-last-of-type(1) { font-weight: bold; }` (같은 유형의 요소 중 마지막 `<p>` 요소에 스타일 적용)

## :is()

- 여러 선택자를 그룹화하여 적용할 수 있습니다.

- 예시: `:is(h1, h2, h3) { color: blue; }` (`<h1>`, `<h2>`, `<h3>` 요소에 스타일 적용)

## :where()

- `:is()`와 유사하지만, 우선순위가 0인 선택자를 제공합니다.

- 예시: `:where(nav a) { color: green; }` (우선순위를 변경하지 않고 nav a에 스타일 적용)

# 8. 부정 선택자

## :not(selector)

- 특정 선택자를 제외한 요소에 스타일을 적용합니다.

- 예시: `p:not(.class) { color: gray; }` (class가 없는 `<p>` 요소에 스타일 적용)
