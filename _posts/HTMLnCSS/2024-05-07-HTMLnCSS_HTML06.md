---
layout: single
title: "HTML & CSS : 표 사용하기"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-06/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

학습을 위한 표 CSS 추가

```html
<link rel="stylesheet" href="https://showcases.yalco.kr/html-css/01-06/table.css">
```

## 표 주요 태그

- table 태그가 부모 태그 

|    태그   |        설명        |   비고   |
|:---------:|:------------------:|:--------:|
|  `<table>`  |       테이블       |          |
| `<caption>` |  표 설명 또는 제목 | 선택사항 |
|    `<tr>`   |     테이블의 행    |          |
|    `<td>`   | 테이블의 데이터 셀 |          |

```html
<table>
    <caption>1에서 9까지의 숫자들</caption>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
    </tr>
</table>
```

[결과 보기](https://showcases.yalco.kr/html-css/01-06/01.html)

## 표의 헤더와 푸터

|   태그  |        설명        |               비고              |
|:-------:|:------------------:|:-------------------------------:|
| `<thead>` | 테이블의 헤더 부분 |       <tbody> 앞에 와야 함      |
| `<tbody>` |    테이블의 본문   |          본 내용을 담음         |
| `<tfoot>` | 테이블의 푸터 부분 |       <tbody> 뒤에 와야 함      |
|   `<th>`  |  열 또는 행의 헤더 | scope 속성으로 row, col 중 선택 |

## 표 병합 태그

|   속성  |   설명  | 비고 |
|:-------:|:-------:|:----:|
| `colspan` | 열 병합 |      |
| `rowspan` | 행 병합 |      |

## 표 기타 태그

|    태그    |            설명            |                      비고                     |
|:----------:|:--------------------------:|:---------------------------------------------:|
| `<colgroup>` | 표에 열을 묶어서 속성 부여 | <caption>보다 뒤, 그 외 요소보다 앞에 와야 함 |
|   `<col>`   |          열의 묶음         |            span 속성으로 열 수 지정           |

