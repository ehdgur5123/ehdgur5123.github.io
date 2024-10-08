---
layout: single
title: "HTML & CSS : 표 사용하기"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-07/
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

[결과 보기(https://showcases.yalco.kr/html-css/01-06/01.html)](https://showcases.yalco.kr/html-css/01-06/01.html)

## 표의 헤더와 푸터

|   태그  |        설명        |               비고              |
|:-------:|:------------------:|:-------------------------------:|
| `<thead>` | 테이블의 헤더 부분 |       <tbody> 앞에 와야 함      |
| `<tbody>` |    테이블의 본문   |          본 내용을 담음         |
| `<tfoot>` | 테이블의 푸터 부분 |       <tbody> 뒤에 와야 함      |
|   `<th>`  |  열 또는 행의 헤더 | scope 속성으로 row, col 중 선택 |

```html
<table>
    <caption>웹개발 공부 기록</caption>

    <thead>
        <tr>
            <th scope="col">과목</th>
            <th scope="col">월</th>
            <th scope="col">화</th>
            <th scope="col">수</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th scope="row">HTML</th>
            <td>60분</td>
            <td>60분</td>
            <td>0분</td>
        </tr>
        <tr>
            <th scope="row">CSS</th>
            <td>0분</td>
            <td>30분</td>
            <td>60분</td>
        </tr>
        <tr>
            <th scope="row">JS</th>
            <td>0분</td>
            <td>0분</td>
            <td>60분</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th scope="row">총 시간</th>
            <td>60분</td>
            <td>90분</td>
            <td>120분</td>
        </tr>
    </tfoot>
</table>
```

[결과 보기(https://showcases.yalco.kr/html-css/01-06/02.html)](https://showcases.yalco.kr/html-css/01-06/02.html)

## 표 병합 속성

- td 태그의 속성

- 병합 해주면 병합될 칸은 작성할 필요 X

|   속성  |   설명  | 비고 |
|:-------:|:-------:|:----:|
| `colspan` | 열 병합 |      |
| `rowspan` | 행 병합 |      |

```html
<table>
    <tr>
        <td>1</td>
        <td colspan="2">2</td>
        <td>1</td>
    </tr>
    <tr>
        <td rowspan="3">3</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>1</td>
        <td rowspan="2" colspan="2">4</td>
    </tr>
    <tr>
        <td>1</td>
    </tr>

</table>    
```

[결과 보기(https://showcases.yalco.kr/html-css/01-06/03.html)](https://showcases.yalco.kr/html-css/01-06/03.html)

## 표 그룹 태그

|    태그    |            설명            |                      비고                     |
|:----------:|:--------------------------:|:---------------------------------------------:|
| `<colgroup>` | 표에 열을 묶어서 속성 부여 | <caption>보다 뒤, 그 외 요소보다 앞에 와야 함 |
|   `<col>`   |          열의 묶음         |            span 속성으로 열 수 지정           |

```html
<table>
    <colgroup>
        <col class="weekend">  <!--일-->
        <col span="5">  <!--월화수목금-->
        <col class="weekend">  <!--토-->
    </colgroup>

    <thead>
        <tr>
            <td scope="col">일</td>
            <td scope="col">월</td>
            <td scope="col">화</td>
            <td scope="col">수</td>
            <td scope="col">목</td>
            <td scope="col">금</td>
            <td scope="col">토</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
        </tr>
        <tr>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
        </tr>
        <tr>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
        </tr>
        <tr>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
            <td>_</td>
        </tr>
    </tbody>
</table>
```

- tbody에 `(tr>td*7{_})*4`를 입력하고 `Tab`을 누르면 모든 칸에 `_`가 입력된다

- 예제의 `weekend class`는 CSS로 weekend라는 class를 만든 것

[결과 보기(https://showcases.yalco.kr/html-css/01-06/04.html)](https://showcases.yalco.kr/html-css/01-06/04.html)