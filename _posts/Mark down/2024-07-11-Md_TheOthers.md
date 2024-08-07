---
layout: single
title: "마크다운(Markdown) : 기타(TheOthers)"
categories: Markdown
tag: [Markdown]
permalink : /posts/Markdown-11/
toc: true
author_profile: false
sidebar:
  nav: "MarkDown"
---

<hr>

## 수평선(Horizontal Rule)

* HTML의 hr 태그
* 별 3개(\*\*\*) or 하이픈 3개(\-\-\-) or 언더바 3개(\_\_\_)

  ![image](../../assets/images/MarkDown/MD_TheOthers-1.PNG)

<br>

## 각주(Footnote)

* `[^각주]` 의 형태  
* 각주의 내용은 하단에 출력된다

* 입력

  `이것은 깃허브 블로그 작성을 위한 마크다운[^1] 문법을 공부하는 공간이다.` 

  `[^1]: 마크다운 (Markdown)은마크업 언어의 일종으로, 존 그루버(John Gruber) 와 아론 스워츠(Aaron Swartz)가 만들었다.`

* 출력

  이것은 깃허브 블로그 작성을 위한 마크다운[^1] 문법을 공부하는 공간이다.

  [^1]: 마크다운 (Markdown)은마크업 언어의 일종으로, 존 그루버(John Gruber) 와 아론 스워츠(Aaron Swartz)가 만들었다.

<br>

## 작업 목록(Task list)

* 체크박스 형태로 클릭은 되지 않는다  
* `- [] 문장`의 형태  
* \[\] 안에는 체크할 곳에 x를 표기한다.  
* 입력  

  ```
  - [x] 아침
  - [ ] 점심
  - [x] 저녁
  ```
* 출력 
  - [x] 아침
  - [ ] 점심
  - [x] 저녁 

<br>

## 이모지(Emoji)

* 이모지를 사용할 수 있는 사이트 : [https://emojipedia.org/](https://emojipedia.org/)
* 😭 😿

<br>

## 하이라이트(Highlight)  
* HTML mark태그  
* `==Highlight==`의 형태이나, 깃허브 블로그에서는 지원이 안된다.  
* HTML 태그를 활용해야 한다.
  * 입력 : `<mark>Highlight</mark>`
  * 출력 : <mark>Highlight</mark> 

<br>

## 첨자(Subscript)  
* HTML sub태그  
* `H~2~O`의 형태이나, 깃허브 블로그에서는 지원이 안된다.  
* HTML 태그를 활용해야 한다.
  * 입력 : `H<sub>2</sub>O`  
  * 출력 : H<sub>2</sub>O

<br>

## 어깨기호(Superscript)  
* HTML sup태그   
* `X^2^`의 형태이나, 깃허브 블로그에서는 지원이 안된다.  
* HTML 태그를 활용해야 한다.
  * 입력 : `X<sup>2</sup>`  
  * 출력 : X<sup>2</sup>  

<br>

## 주석  

* 주석의 형태는 `<!-- 주석입니다. -->` 또는 `[//]: # "주석입니다."`의 형태  

  ![image](../../assets/images/MarkDown/MD_TheOthers-2.PNG)  

* `[//]: #`에는 문장에 `()` or `" "` or `' '` 으로 감싸주어야 한다.    
* 깃허브 블로그에서는 감싸주지 않아도 주석처리는 되는 것 같다.    

<hr>  