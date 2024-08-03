---
layout: single
title: "운영체제(Operating System) : CPU 스케줄링 Part.02"
categories: OperatingSystem
tag: [Operating System, CPU Scheduling]
permalink : /posts/OS-06/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "OperatingSystem"
---

<hr>

## CPU 스케줄링 알고리즘

<div></div>

### 선입 선처리 스케줄링

- **FCFS 스케줄링**(First Come First Served Scheduling)이라고도 부름

- 준비 큐에 삽입된 **순서대로** 프로세스를 처리하는 비선점형 스케줄링 방식

- 우선순위가 없어, 짧은 CPU 버스트[^1]를 갖는 프로세스도 무작정 기다려야 해서 효위 효과가 발생

    > 효위 효과(convoy effect) : CPU 버스트 시간이 긴 프로세스가 준비 큐 앞에 위치하게 되면 그 뒤에 있는 짧은 CPU버스트를 가지는 프로세스들도 해당 프로세스의 끝을 기다려야 하는 현상

[^1]: CPU 버스트(CPU burst) : CPU를 이용하는 작업

### 최단 작업 우선 스케줄링

- **SJF 스케줄링**(Shortest Job First Scheduling)이라고도 부름

- 준비 큐에 삽입된 프로세스 중 **CPU 버스트 시간이 짧은 순서**로 프로세스를 처리하는 비선점형 스케줄링 방식

### 라운드 로빈 스케줄링

- 선입 선처리 스케줄링에 타임 슬라이스의 개념이 더해진 스케줄링 방식

    > 타임 슬라이스 : 각 프로세스가 CPU를 사용할 수 있는 정해진 시간

- **타임 슬라이스만큼**의 시간 동안 돌아가며 CPU를 이용하는 선점형 스케줄링 방식    

- 타임 슬라이스가 끝나면 문맥 교환 후, 큐의 마지막에 다시 삽입

![image](../../assets/images/OperatingSystem/CPU_Scheduling02-1.png)

### 최소 잔여 시간 우선 스케줄링

- **SRT 스케줄링**(Shortest Remaining Time Scheduling)이라고도 부름

- 최단 작업 우선 스케줄링 + 라운드 로빈 스케줄링

- 정해진 타임 슬라이스만큼 CPU를 사용하되, CPU를 사용할 다음 프로세스는 남아있는 작업 시간이 가장 적은 프로세스가 선택