---
layout: single
title: "HTML & CSS : CSS로 넘어가기 전에"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-12/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## pre 태그

- `br 태그`, `&nbsp;` 등을 사용하지 않아도 자동으로 엔터 및 스페이스 적용

- `Tab` 같은 것도 다 적용되어 가독성이 떨어져 **권장하지 않음**

## iframe 태그

- 내부에 또 다른 사이트를 삽입할 때 사용

- 보안상 위험, 사용성 저하, 검색 최적화 제한, 브라우저에 무리 등의 사유로 **권장하지 않음**

```html
<iframe 
    width="600" height="300" 
    src="https://ehdgur5123.github.io/"
    title="끄적끄적" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

<iframe width="600" height="300" src="https://ehdgur5123.github.io/" title="끄적끄적" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 기타 알아둘만한 태그들

- `kbd 태그` : <kbd>Ctrl</kbd> + <kbd>C</kbd> 와 같이 키보드 입력을 나타낼 때 사용

- `dfn 태그` : <dfn>특정 맥락</dfn>에서 정의, 설명하고 있는 용어를 나타낼 때 사용

- `small 태그` : <small>이와 같이 텍스트를 작게</small> 표시하는데 사용

## span 태그와 div 태그

- 특별한 기능이 없는 칸을 차지하는 태그

- `<strong>`, `<em>`, `<a>` 등의 태그에서 기능을 빼면 `<span>` : `inline`

- `<h1~6>`, `<p>`, `<ul>` 등의 태그에서 기능을 빼면 `<div>` : `block`
