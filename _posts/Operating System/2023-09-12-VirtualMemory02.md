---
layout: single
title: "12) 가상 메모리 Part.02"
categories: OperatingSystem
tag: [Operating System, Virtual Memory]
permalink : /posts/OS-12/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "OperatingSystem"
---

<hr>

# 페이징을 통한 가상 메모리 관리

가상 메모리<sup>virtual memory</sup>란 실행하고자 하는 프로그램을 일부만 메모리에 적재하여 실제 물리 메모리 크기보다 더 큰 프로세스를 실행할 수 있게 하는 기술

가상 메모리 관리 기법에는 *페이징*과 *세스멘테이션*이 있지만, 현재 대부분의 운영체제는 **페이지 기법**을 사용함

## 페이징이란

**페이징**<sup>paging</sup>은 메모리의 물리 주소 공간을 **프레임** 단위로 자르고, 프로세스의 논리 주소 공간을 **페이지** 단위로 자른 뒤 페이지를 프레임에 할당하는 가상 메모리 관리 기법

<p id="img_center">
  <img 
        src="../../assets/images/OperatingSystem/VirtualMemory02-1.png"
        alt="image"
        title="image"
  >
</p>

- 프로세스를 잘라서 메모리에 불연속적으로 할당하므로 외부 단편화가 발생하지 않음

- 페이지 단위로 **스와핑**을 하기 때문에 프로세스 전체를 물리 메모리에 적재할 필요가 없어, **실제 물리 메모리 크기보다 더 큰 프로세스를 실행할 수 있음**

- 페이징 시스템에서의 스왑 아웃은 *페이지 아웃*<sup>page out</sup>, 스왑 인은 *페이지 인*<sup>page in</sup>이라고도 부름

<p id="img_center">
  <img 
        src="../../assets/images/OperatingSystem/VirtualMemory02-2.png"
        alt="image"
        title="image"
  >
</p>

## 페이지 테이블

