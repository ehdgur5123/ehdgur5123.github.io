---
layout: single
title: "HTML & CSS : 이미지 넣기"
categories: HTML&CSS
tag: [HTML]
permalink : /posts/HTMLnCSS-06/
toc: true
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

## 이미지 넣기

```html
<img 
    src="https://cdn.pixabay.com/photo/2024/02/19/08/35/sailboat-8582847_640.jpg"
    alt="이미지가 있었는데 없습니다"
    title="파도가 출렁출렁"
>
```

<img src="https://cdn.pixabay.com/photo/2024/02/19/08/35/sailboat-8582847_640.jpg" alt="이미지가 있었는데 없었습니다" title="파도가 출렁출렁">

### 이미지 태그의 속성

|  속성  |      설명     |                 비고                |
|:------:|:-------------:|:-----------------------------------:|
|   src  | 원본파일 경로 |        절대경로 또는 상대경로       |
|   alt  |  대체 텍스트  |     스크린 리더, 원본파일 무효시    |
|  title |      툴팁     | alt의 대체제나 반복이 되어서는 안됨 |
|  width |      너비     |           픽셀 단위의 정수          |
| height |      높이     |           픽셀 단위의 정수          |

- **width**와 **height**중에 하나만 지정하면 비율을 유지하면서 사이즈가 변경됨

## 맵 기능

- 이미지에 구역별로 링크를 지정하는 기능인데, 현재는 권장하지 않는 기능

- 사용하고자 한다면 [이미지 맵 생성 사이트][이미지 맵 생성 사이트]를 사용하자. 

[이미지 맵 생성 사이트]:https://www.image-map.net/

