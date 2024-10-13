---
layout: single
title: "VS code 스니펫 설정"
categories: Others
tag: [VScode, snippet]
permalink : /posts/Others-01/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "Others"
---

<hr>

# 스니펫(Snippet)

스니펫(Snippet)은 재사용 가능한 소스 코드, 기계어, 텍스트의 작은 부분을 일컫는 프로그래밍 용어이다. 사용자가 루틴 편집 조작 중 반복 타이핑을 회피할 수 있게 도와준다.

## 1. 사용자 정의 스니펫 파일 생성

<b>생성 방법 및 경로는 버전 또는 운영체제 마다 다를 수 있음</b>

1. 파일 -> 기본 설정 -> 코드 조각 구성

2. 창에 스니펫을 설정하고 싶은 언어를 파일명으로 하고 확장자를 `.json` 파일로 생성(ex. `markdown.json`)

3. 파일이 생성되는 경로 : `~/.config/Code/User/snippets/markdown.json`

## 2. 스니펫 추가

```json
{
    "Insert Image HTML": {
        "prefix": "image",
        "body": [
            "<p id=\"img_center\">",
            "  <img ",
            "        src=\"${1:}\"",
            "        alt=\"${2:image}\"",
            "        title=\"${3:image}\"",
            "  >",
            "</p>"
        ],
        "description": "Insert image with center alignment"
    }
}
```

## 3. 스니펫 설명

- `prefix`: `image`라는 키워드를 입력하면 이 스니펫이 활성화됩니다.

- `body`: 스니펫이 자동으로 생성할 코드입니다. `${1:}`, `${2:}`, `${3:}`은 템플릿 변수로, Tab을 눌러서 해당 위치로 빠르게 이동할 수 있습니다.

- `description`: 이 스니펫의 설명입니다. 스니펫 목록에서 보일 설명입니다.

## 4. 사용 방법

1. 마크다운 파일에서 `image`를 입력하고 Tab을 누릅니다.

2. 자동으로 아래 코드가 입력됩니다.

```html
<p id="img_center">
  <img 
        src=" "
        alt="image"
        title="image"
  >
</p>
```

# 동작 안할 시 해결 방법

## 자동 완성 설정 확인

1. `Ctrl` + `,`을 눌러서 설정 창을 엽니다.

2. `editor.tabCompletion` 설정을 검색합니다.

3. 이 설정을 `on` 또는 `onlySnippets`로 설정해야 합니다.

    - `on`: 모든 자동 완성 항목을 포함해 Tab으로 완성을 트리거합니다.

    - `onlySnippets`: 오직 스니펫만 Tab으로 트리거됩니다.
