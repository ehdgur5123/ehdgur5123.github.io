---
layout: single
title: "11) 가상 메모리 Part.01"
categories: OperatingSystem
tag: [Operating System, Virtual Memory]
permalink : /posts/OS-11/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "OperatingSystem"
---

<hr>

# 연속 메모리 할당

프로세스들이 메모리에 연속적으로 할당되는 방식(연속 할당)

## 스와핑(swapping)

- 메모리에 적재된 프로세스 중 현재 사용되지 않는 프로세스를 보조기억장치의 일부 영역(스왑 영역)으로 쫒아내고, 그 공간에 다른 프로세스를 적재하는 방식

- 스왑 영역<sup>swap space</sup>: 메모리에서 쫒겨난 프로세스들의 정보가 저장되는 보조기억장치의 영역

- 