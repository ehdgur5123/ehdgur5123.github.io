---
layout: single
title: "HTML & CSS : Flex 레이아웃"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/HTMLnCSS-24/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## display 속성의 flex 옵션

- display를 `flex`로 지정하면 플랙스 방식으로 자식 요소들을 배치

    - `inline-flex` 옵션의 경우는 컨테이너 요소를 인라인으로 만듬


### flex-direction 속성

1. `row` 옵션 : 자식 요소들을 좌에서 우로 배치(기본값)

2. `column` 옵션 : 자식 요소들을 위에서 아래로 배치

3. `row-reverse` 옵션 : 자식 요소들을 우에서 좌로 배치

4. `column-reverse` 옵션 : 자식 요소들을 아래에서 위로 배치

- **flex-direction** 속성에 따라 **justify-content**, **align-items**, **align-content** 속성들의 방향이 결정


### flex-wrap 속성

- 내부 요소의 '갯수x길이'가 컨테이너를 넘어갈 때 이들을 여러 줄에 걸쳐 나열할지의 여부를 정함

1. `nowrap` : 나열하지 않음

2. `wrap` : 나열 함


### justify-content 속성

- **메인 축**에서 아이템들을 정렬할 방식을 정함

- **flex-direction** 속성에 따라 구체적인 방향은 바뀜

1. `flex-start` : 시작값에서 정렬

2. `flex-end` : 마지막값에서 정렬

3. `center` : 가운데 정렬

4. `space-between` : 양측 정렬

5. `space-around` : 요소별 양쪽 공백을 동일하게 하여 정렬

6. `space-evenly` : 요소들의 공백을 동일하게 하여 정렬

> flex-direction 속성에 start와 end 옵션도 있지만, flex가 붙은 옵션 사용 권장 


### align-items 속성

- **수직 축(메인 축의 반대)**에서 아이템들을 정렬할 방식을 정함

1. `stretch` : 기본 값

2. `flex-start` : 시작값에서 정렬

3. `flex-end` : 마지막값에서 정렬

4. `center` : 가운데 정렬


### align-content 속성

- flex-wrap 속성으로 요소들이 여러 줄이 되면 여러줄에 대한 정렬 방식을 지정

1. `stretch` : 기본 값

2. justify-content 속성의 옵션과 같음(flex-, space- 등)


### gap 속성

- 요소들의 간격을 띄어주는데에 사용(단위 : px, em(%) 등)




## flex 컨테이너 안 아이템의 속성들


### flex-basis

- 메인 축상의 길이

- 컨테이너의 **flex-direction** 값에 따라 너비 또는 높이값으로 작용

- 기본값 : auto

- 단위: px, em 등


### flex-grow

- 빈 공간을 채울지의 여부

- 다른 아이템들의 동 속성값에 비례해서 공백을 나눠갖음

- 기본값 : **0**

- 단위는 그냥 숫자

### flex-shrink

- 전체 공간이 부족할 때, 해당 아이템의 길이가 <u>컨텐츠의 너비</u> 또는 <u>flex-basis로 지정한 값</u>보다 작아질 수 있을지를 지정

- 기본값 : **1** (증가할수록 길이가 많이 줄어듬)

- 단위는 그냥 숫자

## order 속성

- 컨테이너 내 요소들의 순서를 부여

- 기본값 : 0

- 요소들의 order 순서대로 요소가 배치됨

