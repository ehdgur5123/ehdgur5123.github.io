---
layout: single
title: "2) CSS 속성 목록"
categories: HTML&CSS
tag: [CSS]
permalink : /posts/CSS-02/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "HTML&CSS"
---

<hr>

# 1. 텍스트 관련 속성

텍스트의 모양, 정렬, 글꼴, 장식 등을 설정하는 속성들입니다.

- `color`: 텍스트의 색상을 지정합니다.
- `font-family`: 글꼴을 설정합니다.
- `font-size`: 텍스트의 크기를 지정합니다.
- `font-weight`: 텍스트의 두께(굵기)를 지정합니다.
- `font-style`: 텍스트의 스타일(이탤릭체 등)을 지정합니다.
- `text-align`: 텍스트 정렬을 지정합니다 (left, center, right, justify).
- `text-decoration`: 텍스트 장식을 설정합니다 (밑줄, 취소선, 강조선 등).
- `line-height`: 텍스트 줄 간격을 지정합니다.
- `letter-spacing`: 텍스트 글자 간격을 설정합니다.
- `word-spacing`: 단어 간의 간격을 지정합니다.
- `text-transform`: 텍스트의 대소문자 변환을 설정합니다 (uppercase, lowercase, capitalize).
- `text-indent`: 첫 번째 줄 들여쓰기를 설정합니다.
- `white-space`: 공백 처리 방식을 지정합니다 (normal, nowrap, pre 등).

# 2. 배경 관련 속성

배경 이미지, 색상, 크기 등을 설정하는 속성들입니다.

- `background-color`: 요소의 배경 색상을 지정합니다.
- `background-image`: 요소의 배경 이미지를 설정합니다.
- `background-repeat`: 배경 이미지의 반복 방식을 지정합니다.
- `background-position`: 배경 이미지의 위치를 설정합니다.
- `background-size`: 배경 이미지의 크기를 설정합니다 (cover, contain, 픽셀 또는 백분율 값).
- `background-attachment`: 배경 이미지의 스크롤 여부를 설정합니다 (scroll, fixed).
- `background-origin`: 배경 이미지가 어디에서 시작할지를 지정합니다 (border-box, padding-box, content-box).
- `background-clip`: 배경이 적용될 영역을 지정합니다 (border-box, padding-box, content-box).

# 3. 레이아웃 관련 속성

요소의 위치, 크기, 여백 등을 설정하는 속성들입니다.

## 박스 모델 관련 속성

- `width`: 요소의 너비를 지정합니다.
- `height`: 요소의 높이를 지정합니다.
- `margin`: 요소의 외부 여백을 지정합니다.
- `padding`: 요소의 내부 여백을 지정합니다.
- `border`: 요소의 테두리를 설정합니다.
- `box-sizing`: 박스 모델의 크기 계산 방식을 지정합니다 (content-box, border-box).

## 정렬 및 플로팅 관련 속성

- `display`: 요소의 표시 방식을 지정합니다 (block, inline, flex, grid, none 등).
- `position`: 요소의 위치를 설정합니다 (static, relative, absolute, fixed, sticky).
- `top`, `right`, `bottom`, `left`: 요소의 위치를 지정합니다.
- `float`: 요소를 왼쪽 또는 오른쪽으로 플로팅시킵니다.
- `clear`: 플로팅된 요소를 클리어합니다.
- `z-index`: 요소의 쌓임 순서를 지정합니다.

## 플렉스박스 및 그리드 관련 속성

- `flex-direction`: 플렉스 아이템의 방향을 설정합니다 (row, column 등).
- `justify-content`: 플렉스 컨테이너 내에서 아이템의 수평 정렬을 지정합니다.
- `align-items`: 플렉스 아이템의 수직 정렬을 지정합니다.
- `align-self`: 특정 플렉스 아이템의 정렬을 설정합니다.
- `flex-wrap`: 플렉스 아이템의 줄바꿈을 설정합니다.
- `grid-template-columns`, `grid-template-rows`: 그리드 레이아웃의 열과 행을 설정합니다.
- `grid-gap`: 그리드 아이템 간의 간격을 설정합니다.

# 4. 테두리 및 윤곽선 관련 속성

요소의 테두리 및 윤곽선을 설정하는 속성들입니다.

- `border`: 테두리의 스타일, 너비, 색상을 지정합니다.
- `border-radius`: 테두리의 둥근 정도를 지정합니다.
- `border-width`: 테두리의 두께를 지정합니다.
- `border-style`: 테두리의 스타일을 지정합니다 (solid, dotted, dashed 등).
- `border-color`: 테두리의 색상을 지정합니다.
- `outline`: 요소의 외곽선을 설정합니다 (border와 달리 공간을 차지하지 않음).
- `outline-width`: 외곽선의 두께를 지정합니다.
- `outline-style`: 외곽선의 스타일을 지정합니다.
- `outline-color`: 외곽선의 색상을 지정합니다.

# 5. 애니메이션 및 전환 관련 속성

요소의 애니메이션과 상태 전환을 설정하는 속성들입니다.

- `transition`: 요소의 상태가 변할 때 적용할 전환 효과를 설정합니다.
- `transition-duration`: 전환 효과의 지속 시간을 지정합니다.
- `transition-timing-function`: 전환 효과의 속도 곡선을 지정합니다 (ease, linear 등).
- `animation`: 애니메이션을 지정하고 시작합니다.
- `animation-name`: 애니메이션 키프레임을 지정합니다.
- `animation-duration`: 애니메이션의 지속 시간을 지정합니다.
- `animation-timing-function`: 애니메이션의 속도 곡선을 설정합니다.
- `animation-delay`: 애니메이션의 시작 지연 시간을 설정합니다.
- `animation-iteration-count`: 애니메이션의 반복 횟수를 설정합니다.

# 6. 변형(Transform) 관련 속성

요소를 변형(회전, 크기 조정, 이동 등)하는 속성들입니다.

- `transform`: 요소를 회전, 크기 조정, 이동 또는 기울이기 위해 사용합니다.
- `transform-origin`: 변형의 기준점을 설정합니다.
- `perspective`: 3D 변환의 원근 효과를 설정합니다.
- `backface-visibility`: 3D 변환에서 요소의 뒷면이 보일지 여부를 지정합니다.

# 7. 필터 및 효과 관련 속성

요소에 그래픽 효과를 적용하는 속성들입니다.

- `filter`: 요소에 그래픽 필터 효과(블러, 밝기, 대비 등)를 적용합니다.
- `opacity`: 요소의 투명도를 설정합니다.
- `box-shadow`: 요소에 그림자를 설정합니다.
- `text-shadow`: 텍스트에 그림자를 설정합니다.

# 8. 리스트 관련 속성

목록의 스타일을 설정하는 속성들입니다.

- `list-style`: 목록의 스타일을 지정합니다 (이미지, 종류, 위치 등).
- `list-style-type`: 목록 항목의 마커 스타일을 설정합니다 (circle, square, decimal 등).
- `list-style-position`: 마커가 안쪽 또는 바깥쪽에 위치할지 설정합니다 (inside, outside).
- `list-style-image`: 목록 마커 대신 사용할 이미지를 지정합니다.

# 9. 테이블 관련 속성

테이블 요소의 스타일을 설정하는 속성들입니다.

- `border-collapse`: 테이블 셀의 테두리 겹침 여부를 지정합니다 (collapse, separate).
- `border-spacing`: 테이블 셀 간의 간격을 설정합니다.
- `caption-side`: 테이블 캡션의 위치를 설정합니다 (top, bottom).
- `empty-cells`: 빈 테이블 셀의 테두리 표시 여부를 설정합니다.
- `table-layout`: 테이블의 레이아웃 방식을 지정합니다 (auto, fixed).

# 10. 미디어 쿼리 및 반응형 디자인 관련 속성

미디어 쿼리는 디바이스의 특성에 따라 스타일을 적용할 수 있도록 돕습니다.

- `@media`: 특정 조건(화면 크기, 해상도 등)에 따라 스타일을 적용할 수 있는 미디어 쿼리를 정의합니다.
- `min-width`, `max-width`: 미디어 쿼리에서 화면 너비를 기준으로 스타일 적용을 지정합니다.
- `min-height`, `max-height`: 미디어 쿼리에서 화면 높이를 기준으로 스타일 적용을 지정합니다.
- `orientation`: 화면의 방향(세로, 가로)에 따라 스타일을 적용합니다.

# 11. 유동적 크기 관련 속성

유동적 레이아웃을 구성할 때 사용하는 속성들입니다.

- `min-width`: 요소가 가질 수 있는 최소 너비를 지정합니다.
- `max-width`: 요소가 가질 수 있는 최대 너비를 지정합니다.
- `min-height`: 요소가 가질 수 있는 최소 높이를 지정합니다.
- `max-height`: 요소가 가질 수 있는 최대 높이를 지정합니다.

# 12. 인터랙션 및 접근성 관련 속성

사용자 인터랙션과 접근성을 고려한 스타일링 속성들입니다.

- `cursor`: 요소 위에 마우스 커서를 올렸을 때 표시될 커서 모양을 지정합니다 (pointer, default, move, text 등).
- `pointer-events`: 요소에 대한 마우스 이벤트 처리를 제어합니다 (none, auto 등).
- `user-select`: 사용자가 텍스트를 선택할 수 있는지 여부를 설정합니다 (none, text 등).
- `resize`: 요소를 사용자가 크기를 조정할 수 있도록 설정합니다 (none, both, horizontal, vertical).
- `outline-offset`: 요소의 외곽선과 요소 사이의 거리를 설정합니다.
- `tabindex`: 요소의 탭 순서를 설정하여 키보드 네비게이션을 제어합니다.
- `aria-*`: 접근성을 위해 스크린 리더와 같은 도구에 추가적인 정보를 제공하는 ARIA 속성들이며, CSS에서는 해당 요소의 스타일링을 통해 시각적으로 나타낼 수 있습니다.

# 13. 스크롤 및 오버플로우 관련 속성

스크롤 동작과 요소의 오버플로우를 제어하는 속성들입니다.

- `overflow`: 요소 내 콘텐츠가 부모 요소를 벗어날 때의 동작을 지정합니다 (visible, hidden, scroll, auto).
- `overflow-x`: 수평 방향의 오버플로우 동작을 지정합니다.
- `overflow-y`: 수직 방향의 오버플로우 동작을 지정합니다.
- `scroll-behavior`: 사용자가 스크롤할 때의 애니메이션을 제어합니다 (auto, smooth).
- `scroll-snap-type`: 스크롤 시 특정 위치로 스냅되도록 설정합니다.
- `scroll-snap-align`: 스냅 위치를 지정합니다.
- `scrollbar-width`: 스크롤바의 너비를 설정합니다 (auto, thin, none).
- `scrollbar-color`: 스크롤바의 색상을 지정합니다.

# 14. 콘텐츠 생성 및 삽입 관련 속성

CSS를 통해 콘텐츠를 삽입하거나 변경하는 속성들입니다.

- `content`: CSS에서 요소의 콘텐츠를 설정합니다 (주로 ::before 및 ::after 가상 요소에서 사용).
- `counter-reset`: CSS 카운터를 초기화합니다.
- `counter-increment`: 카운터를 증가시킵니다.
- `quotes`: 인용구 스타일을 설정합니다.

# 15. 표현 및 사용자 정의 변수 관련 속성

브라우저 렌더링과 성능 최적화, 사용자 정의 변수를 위한 속성들입니다.

- `will-change`: 요소에서 예상되는 변화를 브라우저에 미리 알려 성능 최적화를 돕습니다 (transform, opacity 등).
- `contain`: 요소의 렌더링 범위를 제한하여 브라우저 렌더링 최적화를 돕습니다.
- `filter`: 요소에 CSS 필터 효과를 적용합니다 (blur, brightness, contrast 등).
- `clip-path`: 요소를 특정한 경로에 맞춰 자릅니다.
- `mix-blend-mode`: 요소의 혼합 모드를 지정하여 다른 요소와의 시각적 효과를 설정합니다 (multiply, screen 등).
- `isolation`: 요소의 혼합 모드와 관련된 효과를 제어합니다.
- `var()`: 사용자 정의 CSS 변수를 호출하는 데 사용합니다.
`--*`: 사용자 정의 CSS 변수를 정의할 때 사용합니다.

# 16. 애니메이션 세부 제어 관련 속성

애니메이션을 세밀하게 제어하는 추가 속성들입니다.

- `@keyframes`: 애니메이션의 중간 단계를 정의합니다.
- `animation-direction`: 애니메이션의 진행 방향을 지정합니다 (normal, reverse, alternate, alternate-reverse).
- `animation-fill-mode`: 애니메이션이 시작되기 전과 종료된 후의 상태를 지정합니다 (none, forwards, backwards, both).
- `animation-play-state`: 애니메이션의 실행 또는 일시정지 상태를 제어합니다 (running, paused).

# 17. 멀티컬럼 레이아웃 관련 속성

여러 열을 사용하는 레이아웃을 제어하는 속성들입니다.

- `column-count`: 요소를 나눌 열의 수를 설정합니다.
- `column-gap`: 열 사이의 간격을 지정합니다.
- `column-width`: 각 열의 너비를 지정합니다.
- `column-rule`: 열 사이의 구분선을 설정합니다.
- `column-span`: 요소가 여러 열에 걸쳐 표시될지 여부를 지정합니다.

# 18. CSS 그리드 세부 속성

CSS Grid 레이아웃의 세부적인 제어를 위한 속성들입니다.

- `grid-template-areas`: 그리드 항목들이 그리드 내에서 배치될 위치를 지정합니다.
- `grid-auto-flow`: 그리드 아이템이 자동으로 배치되는 순서를 설정합니다.
- `grid-auto-columns`: 자동으로 생성되는 그리드 열의 크기를 지정합니다.
- `grid-auto-rows`: 자동으로 생성되는 그리드 행의 크기를 지정합니다.
- `grid-area`: 그리드 아이템이 차지할 영역을 지정합니다 (grid-row, grid-column의 단축 속성).

# 19. CSS 지원 함수 및 계산 관련 속성

CSS에서 동적 계산을 도와주는 함수들입니다.

- `calc()`: 값들을 동적으로 계산하여 적용할 수 있습니다 (예: width: calc(100% - 50px);).
- `min()`, `max()`, `clamp()`: 여러 값 중 최소값, 최대값을 계산하거나 범위를 제한합니다.

# 20. 맞춤형 스크롤바 관련 속성

맞춤형 스크롤바 스타일을 지정할 때 사용됩니다.

- `::-webkit-scrollbar`: 스크롤바 전체의 스타일을 설정합니다.
- `::-webkit-scrollbar-thumb`: 스크롤바의 움직이는 부분의 스타일을 지정합니다.
- `::-webkit-scrollbar-track`: 스크롤바 트랙의 스타일을 설정합니다.