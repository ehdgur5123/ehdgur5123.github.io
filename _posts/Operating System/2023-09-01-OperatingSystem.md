---
layout: single
title: "운영체제(Operating System) : 운영체제 개요"
categories: OperatingSystem
tag: [Operating System, kernel, system call]
permalink : /posts/OS-01/
toc: true
author_profile: false
sidebar:
  nav: "OperatingSystem"
---

<hr>

* **운영체제(Operating System)**
  * 컴퓨터 하드웨어를 제어하기 위한 소프트웨어

* **커널(kernel)**  
  * 운영체제의 핵심서비스를 담당하는 프로그램
 
* **메모리 영역**
  * **사용자 영역** : 일반적인 응용 프로그램들이 실행되는 영역 
  * **커널 영역** : 운영체제가 실행되는 영역 
 
* **CPU 명령 모드**
  * 이중 모드   
    * **사용자 모드** : 하드웨어를 제어할 수 없는 모드
    * **커널 모드** : 하드웨어를 제어할 수 있는 모드 
  * 하이퍼바이저 모드
    * 가상머신(VM ware 등) 환경에서 하드웨어에 접근하기 위한 모드

* **시스템 호출(=시스템 콜)**
  * 사용자 모드에서 하드웨어를 제어하기 위해 커널 모드로 전환하는 방법

  ![출처:https://hongong.hanbit.co.kr](../../assets/images/OperatingSystem/OS_chapter9_1.png)

* **운영체제의 핵심서비스**
  * 프로세스 관리
  * 자원 접근 및 할당
  * 파일 시스템 관리  

<hr>