---
layout: single
title: "운영체제(Operating System) : CPU 스케줄링 Part.01"
categories: OperatingSystem
tag: [Operating System, CPU Scheduling]
permalink : /posts/OS-05/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "OperatingSystem"
---

<hr>

##  CPU 스케줄링(CPU Scheduling)

- 프로세스들에게 공정하고 합리적으로 CPU 자원을 배분하는 것

### 프로세스 우선순위

- CPU는 우선순위가 높은 프로세스부터 실행시킨다.

- **입출력 집중 프로세스** : 입출력 작업이 많은 프로세스

  > 입출력 집중 프로세스는 실행 상태보다는 입출력을 위한 대기 상태에 많이 머무름

- **CPU 집중 프로세스** : CPU 작업이 많은 프로세스

  > CPU 집중 프로세스는 대기 상태보다 실행 상태에 많이 머무름

- 대기 상태에 많이 머무르는 입출력 집중 프로세스를 먼저 처리해야 작업이 효율적이므로 CPU 집중 프로세스보다 <u>입출력 집중 프로세스의 우선순위가 높다.</u>

✅ 참고

  - CPU 버스트(CPU burst) : CPU를 이용하는 작업

  - 입출력 버스트(I/O burst) : 입출력장치를 기다리는 작업

- 각 프로세스의 PCB에 우선순위를 명시

### 스케줄링 큐

- PCB에 프로세스의 우선순위가 명시되어 있지만, 운영체제가 직접 PCB를 보고 우선순위를 결정하는 것은 비효율적

- 스케줄링 큐(scheduling queue) 방식을 통해 작업별로 프로세스들을 줄(큐)을 세워 관리

![image](../../assets/images/OperatingSystem/CPU_Scheduling01-1.png)

- **준비 큐(ready queue)** : CPU를 이용하고 싶은 프로세스들이 서는 줄

- **대기 큐(waiting queue)** : 입출력장치를 이용하기 위해 대기 상태에 접어든 프로세스들이 서는 줄

