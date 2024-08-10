---
layout: single
title: "운영체제(Operating System) : 프로세스 동기화 Part.02"
categories: OperatingSystem
tag: [Operating System, Synchronization]
permalink : /posts/OS-08/
toc: true
classes: custom-style
author_profile: false
sidebar:
  nav: "OperatingSystem"
---

<hr>

# 동기화 기법

<div>  </div>

## 뮤텍스 락

- **뮤텍스 락**<sup>Mutex lock; MUTual EXclusion lock </sup> : 임계구역에 프로세스가 들어와 있으면 다른 프로세스가 진입하지 못하게 임계구역을 자물쇠로 잠그는 함수(코드)  

- 뮤텍스 락은 하나의 공유 자원에 접근하는 프로세스를 상정한 방식



- 함수의 형태는 하나의 전역 변수와 두 깨의 함수로 구현  

    - 자물쇠 역할 : 프로세스들이 공유하는 전역 변수 *lock*

    - 임계 구역을 잠그는 역할 : *acquire 함수*

    - 임계 구역의 잠금을 해제하는 역할 : *release 함수*

```cpp
acquire() {
    while (lock == true)   /* 만약 임계 구역이 잠겨 있다면 */
        ;                  /* 임계 구역이 잠겨 있는지 반복적으로 확인 */
    lock = true;           /* 만약 임계 구역이 잠겨 있지 않으면 임계 구역 잠금 */
}

release() {
    lock = false;          /* 임계 구역 작업이 끝났으니 잠금 해제 */
}
```

- acquire 함수를 보면 임계 구역이 잠겨 있는 경우 반복적으로 lock을 확인하는 것을 볼 수 있음. 이를, *바쁜 대기*<sup>busy wait</sup>라고 함


## 세마포

- **세마포**<sup>semaphore</sup>는 공유 자원이 여러 개 있는 상황에서도 적용이 가능한 동기화 도구로 *임계 구역이 여러 개*
## 모니터