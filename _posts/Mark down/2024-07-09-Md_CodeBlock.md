---
layout: single
title: "마크다운(Markdown) : 코드 블록(Code Block)"
categories: Markdown
tag: [Markdown, Code Block]
permalink : /posts/Markdown-4/
toc: true
author_profile: false
sidebar:
  nav: "MarkDown"
---
  
<hr>

## 코드 블록(Code Block)  
 
### 문법

* 마크다운으로 코드블록을 만들려면 \`\`\`로 감싸야 한다.
* 변환할 언어를 \`\`\` 옆에 작성하고 내부에 코드를 작성하고 \`\`\`로 닫아준다.
* 형식  
  \`\`\`python  
  print('hello')  
  \`\`\`  
* 출력
```python
print('hello')
```
* 참고
  * 코드블록 내부에 \`\`\`를 넣고 싶으면 \`\`\`\`로 코드블록을 감싸준다.
  * \`를 문자로 입력 받고 싶으면 \ 를 앞에 입력해서 이스케이프 처리한다.(\\`)
  * \`는 키보드의 ~ 아래에 있다. [Shift + ~]

### 코드 블록(Code Block) 테이블

|    언어   | Markdown |    언어    |  Markdown  |
|:---------:|:--------:|:----------:|:----------:|
|    Bash   |   bash   |    JSON    |    json    |
|     C#    |    cs    |    Java    |    java    |
|    C++    |    cpp   | JavaScript | javascript |
|    CSS    |    css   |     PHP    |     php    |
|    Diff   |   diff   |    Perl    |    perl    |
| HTML, XML |   html   |   Python   |   python   |
|    HTTP   |   http   |    Ruby    |    ruby    |
|    Ini    |    ini   |     SQL    |     sql    |

<hr>