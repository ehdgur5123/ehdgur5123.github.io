---
layout: single
title: "HTML & CSS : HTML 정리"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-13/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

HTML MDN 문서 : [HTML MDN 문서(링크)](https://developer.mozilla.org/ko/docs/Web/HTML)

## HTML 기본 태그

- `<h1> </h1>` : 제목 태그(1에서 6까지 존재)

- `<p> </p>` : 문단 태그

- `<br>` : 줄바꿈 태그

- `<hr>` : 가로줄 태그

## 중요 및 강조 태그

- `<strong> </strong>` : 중요한 내용임을 명시(굵음)

- `<em> </em>` : 강조할 내용임을 명시(기울임)

- `<sup> </sup>` : 위 첨자(지수, 서수)

- `<sub> </sub>` : 아래 첨자(각주, 변수, 화학식)

- `<u> </u>` : 철자 오류 표시(과거 밑줄 기능)

- `<s> </s>` : 더 이상 유효하지 않은 정보 표시(취소선)

## 인용문 관련 태그

- `<blockquote> </blockquote>` : 긴 인용문 작성 시

    - `cite 속성`으로 출처 표시 

    ```html
    <blockquote cite="www.naver.com"> 인용문 내용 작성 </blockquote>
    ```
- `<cite> </cite>` : 저작물의 출처 표기

- `<q> </q>` : 짧은 인용문 작성 시

    - `cite 속성`으로 출처 표시 

- `<mark> </mark>` : 인용문 중 하이라이트 or 사용자 행동과 연관된 곳 표시

- `<abbr> </abbr>` : 준말/머릿글자 표시

    - `title 속성` : 형태 표시(마우스로 가져다 대면 나옴)

    ```html
    <abbr title="HyperText Markup Language">HTML</abbr>
    ```

## 목록(list) 태그

- `<ul> </ul>` : 순서가 없는 목록

    - `<li> </li>` 태그를 자식 태그로 둠

    ```html
    <ul>
        <li>영어</li>
        <li>국어</li>
    </ul>
    ```

- `<ol> </ol>` : 순서가 있는 목록

    - `<li> </li>` 태그를 자식 태그로 둠

    - `type 속성` : 보여지는 목록. `[1, I, i, A, a]` 타입들이 있음

    - `start 속성` : 순서의 시작값을 설정

     ```html
    <ol type="A" start="3">
        <li>C</li>
        <li>D</li>
        <li>E</li>
    </ol>
    ```   

- `<dl> </dl>` : 용어(dt)와 정의(dd)를 나타내기 위한 태그
    
    - 용어(dt)와 정의(dd) 태그의 부모(메인) 태그

    - `<dt> </dt>` : 용어를 나타내는 태그

    - `<dd> </dd>` : 정의를 나타내는 태그

## 이미지 태그

- `<img>` : 이미지를 첨부하기 위한 태그

    ```html
    <img src="<링크 또는 경로>" alt="<대체텍스트>">
    ```

- 이미지 태그 주요 속성

|  속성  |      설명     |                 비고                |
|:------:|:-------------:|:-----------------------------------:|
|   `src`  | 원본파일 경로 |        절대경로 또는 상대경로       |
|   `alt`  |  대체 텍스트  |     스크린 리더, 원본파일 무효시    |
|  `title` |      툴팁     | alt의 대체제나 반복이 되어서는 안됨 |
|  `width` |      너비     |           픽셀 단위의 정수          |
| `height` |      높이     |           픽셀 단위의 정수          |

## 테이블(표) 태그

 - `<table> </table>` : 테이블 태그의 부모(메인) 태그

    - `<caption> </caption>` : 캡션 태그(선택사항)

    - `<tr> </tr>` : 테이블의 행

    - `<td> </td>` : 테이블의 데이터 셀

        - `colspan 속성` : 열 병합 속성(옵션엔 숫자를 작성, 해당 숫자만큼 병합)

        - `rowspan 속성` : 행 병합 속성(옵션엔 숫자를 작성, 해당 숫자만큼 병합)

    - `<thead> </thead>` : 테이블의 헤더

    - `<tbody> </tbody>` : 테이블의 바디(본문)

    - `<tfoot> </tfoot>` : 테이블의 발

    - `<th> </th>` : 열 또는 행의 헤더

        - `scope 속성` : 각 행(열)의 헤더가 될 부분을 지정(`row`(행), `col`(열) 옵션)

    - `<colgroup> </colgroup>` : 테이블의 그룹 태그(열을 묶어서 속성 부여)

        - `<col>` : 열의 묶음. colgroup 태그의 자식 태그. `span 속성`으로 열 수 
        
## 링크 태그

- `<a>` : 링크(link)를 위한 태그

- `<a>` 태그 주요 속성

    - `href 속성` : 연결할 주소를 작성

        - `href 속성`에 `#id값`을 명시하면 해당 id값을 가진 곳으로 이동(타 사이트도 가능) 

        - <a href="https://ehdgur5123.github.io/posts/HTMLnCSS-08/#id-%EA%B0%92%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%9C-%EC%9A%94%EC%86%8C%EB%A1%9C%EC%9D%98-%EC%9D%B4%EB%8F%99" target="_blank"><u>자세히 보기(새창에서)</u></a>

        - `href 속성` 추가 옵션

            - 전화 : `<a href="tel:010-1234-5678">010-1234-5678</a>`

            - 이메일 : `<a href="mailto:ehdgur5123@naver.com">ehdgur5123@naver.com</a>`

    - `target 속성` : 링크 열 곳의 옵션을 지정

        - `_self 옵션` : 현재 창에서 링크 열기(기본값)

        - `_blank 옵션` : 새 창에서 링크 열기

        - `_parent 옵션` : `<iframe> 태그` 사용 시, 부모 프래임

        - `_top 옵션` : `<iframe> 태그` 사용 시, 최상위 프래임

    ```html
    <a href="https://www.naver.com" target="_blank">
        네이버로 가기(새 창에서)
    </a>
    ```

- `<a> 태그`에 `<img> 태그`를 넣어 이미지를 링크로 사용 가능

## 입력 받는 태그

### form 태그

- 정보를 제출하기 위한 태그들을 포함하는 부모(메인) 태그

- 정보를 제출하기 위한 태그들 : `input 태그`, `label 태그`, `button 태그` 등

- `autocomplete 속성` : 입력했던 값 저장 유무(기본 : on)

### input 태그

- 입력을 받기 위한 태그

- `input 태그` 주요 속성

    - `id 속성`

        - 페이지마다 고유해야 하는 값

        - `label 태그`의 `for 속성`과 일치해야 함

    - `name 속성` : 서버에서 정보들을 구분하기 위한 이름

    - `type 속성` : 입력받는 타입을 설정(다양한 옵션이 있음)

        - `text 옵션` : 텍스트값을 받음

            - `type 속성`의 옵션이 text일 때 같이 쓰여지는 `input`의 속성

                - `placeholder 속성` : 빈 칸에 보이는 안내문

                - `maxlength 속성` : 최대 길이(몇자 이내로 입력하시오)

                - `minlength 속성` : 최소 길이(몇자 이상 입력하시오)

        - `number 옵션` : 숫자값을 받음

            - `type 속성`의 옵션이 number일 때 같이 쓰여지는 `input`의 속성

                - `min 속성` : 최소값

                - `max 속성` : 최대값

        - `password 옵션` : 비밀번호값을 받음

        - `search 옵션` : 검색값을 받음

        - `date 옵션` : 날짜값을 받음

            - `date 옵션`이외에도 `datetime-local`, `month`, `time`, `week` 등의 옵션이 있음

            - `min 속성` 및 `max 속성`과 함께 사용할 수 있지만, 옵션마다 작성하는 형식이 다름

        - `range 옵션` : 볼륨과 같은 형태로 범위를 지정 받음

            - `min 속성` 및 `max 속성`을 사용

            - `step 속성`으로 단계를 지정

        - `radio 옵션` : 체크 형식으로 체크된 값을 받음(name별 한 개만 체크 가능)

            - `type 속성`의 옵션이 radio일 때 같이 쓰여지는 `input`의 속성  

                - `checked 속성` : 초기 체크 여부 지정(옵션은 없음)

                - `name 속성` : radio 옵션의 그룹으로 적용되어, name이 다르면 다중 체크 가능

                - `value 속성` : 컨텐츠 내용이 아닌, 실제로 넘겨지는 데이터 값  

        - `checkbox 옵션` : 체크박스

            - `checked 속성` 사용 가능

        - `file 옵션` : 파일을 업로드할 수 있는 옵션

            - `type 속성`의 옵션이 file일 때 같이 쓰여지는 `input`의 속성   

                - `accept 속성` : 받아들일 수 있는 파일 형식

                    - `.jpg`, `.pdf`, `.doc` 등 확장자(대소문자 구분 X)

                    - `audio/*`는 “모든 오디오 파일”을 의미

                    - `image/*`는 “모든 이미지 파일”을 의미

                - `multiple 속성` : 여러 파일 업로드 가능 여부(옵션은 없음)

        - `hidden 옵션` : 전송할 데이터지만, 사용자에게 보여주지 않을 데이터

        - `email 옵션` : 이메일 넣을 때 사용

    - `value 속성` : 실제로 넣을 데이터 값

    - `autofocus 속성` : 시작 시 포커스 유무

    - `readonly 속성` : 읽기만 가능. 제출 가능

    - `disabled 속성` : 읽기만 가능. 제출 불가능

    - `required 속성` : 필수로 입력해야함. 미입력 시 제출 불가능

### label 태그

- `input 태그`마다의 라벨

- `label 태그`의 `for 속성`을 `input 태그`의 `id 속성`과 일치시킬 것

### button 태그

- `type 속성`의 옵션 종류

    - `submit 옵션` : 제출 버튼

    - `reset 옵션` : 초기화 버튼

    - `button 옵션` : 기본 버튼(자바스크립트로 기능 구현 필요)

### fieldset 태그

- `form 태그`의 자식 태그로 form 내부에 구역을 나눔(그룹화)

- `disabled 속성` : 포함된 입력요소 비활성화 

### legend 태그

- `fieldset 태그`로 그룹이 나뉘어진 것들의 제목 or 설명

### textarea 태그

- 긴 텍스트를 입력받기 위한 태그

### select 태그, option 태그, optgroup 태그

- 옵션을 선택할 수 있는 태그

- `select 태그`가 부모(메인) 태그

- `option 태그`로 옵션들을 지정

- `optgroup 태그`는 `option 태그`에 그룹을 지정해주기 위해 사용

### datalist 태그

- 사용자가 직접 입력할 수 있지만, 권장되는 입력사항을 표시해주기 위해 사용

## progress 태그

- 자바 스크립트와 함께 사용하여 동적으로 움직이는 값을 표현

## meter 태그

- 정적인 값으로 데이터의 범위를 표현

### pre 태그

- `br 태그`, `&nbsp;` 등을 사용하지 않아도 자동으로 엔터 및 스페이스 적용

- `Tab` 같은 것도 다 적용되어 가독성이 떨어져 **권장하지 않음**

### iframe 태그 

- 내부에 또 다른 사이트를 삽입할 때 사용

- 보안상 위험, 사용성 저하, 검색 최적화 제한, 브라우저에 무리 등의 사유로 **권장하지 않음**

## 기타

- 주석 : `<!--주석-->`

- 대체 문자 : 스페이스(`&sbsp;`), <(`&lt;`), >(`&gt;`) 등  [참조(링크)](https://html.spec.whatwg.org/multipage/named-characters.html)


