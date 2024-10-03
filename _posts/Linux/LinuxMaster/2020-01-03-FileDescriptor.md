---
layout: single
title: "파일 디스크립터"
categories: Linux
tag: [Linux]
permalink : /posts/LinuxMaster-03/
classes : custom-style
toc: true
author_profile: false
sidebar:
  nav: "Linux"
---

<hr>

# 파일 디스크립터(File Descriptor)

- **파일 디스크립터(File Descriptor)**는 리눅스와 유닉스 계열 운영체제에서 *프로세스가 파일이나 입출력 장치에 접근할 때 사용하는 숫자 핸들*입니다. 간단히 말해, 파일이나 입출력 스트림을 식별하는 **고유한 숫자**입니다.

- 파일 디스크립터는 *파일*, *장치*, *소켓* 등과 연결되며, 이 숫자는 프로세스의 **파일 디스크립터 테이블**에 저장됩니다.

- **파일 디스크립터 테이블**: 각 프로세스에 대한 **파일 디스크립터와 자원 간의 매핑**을 저장하는 데이터 구조입니다.

## 기본 파일 디스크립터

*기본 파일 디스크립터*에는 **표준 입력(0)**, **표준 출력(1)**, **표준 오류(2)**가 있으며, **리다이렉션**에서 자주사용됨 

### 표준 입력(standard input, stdin)

1. 파일 디스크립터 번호는 **0**

2. 기본적으로 **키보드**에서 입력을 받습니다

3. 예를 들어, 명령어가 입력을 기다릴 때 키보드 입력을 받는 것이 표준 입력입니다.

### 표준 출력(Standard Output, stdout)

1. 파일 디스크립터 번호는 **1**

2. 명령어의 결과를 **화면**에 출력합니다.

3. 예: `echo "Hello, World!"`는 표준 출력으로 화면에 `"Hello, World!"`를 출력합니다.

### 표준 오류(Standard Error, stderr)

1. 파일 디스크립터 번호는 **2**

2. 오류 메시지를 **화면**에 출력합니다.

3. 예: 파일을 찾을 수 없을 때 발생하는 오류 메시지가 표준 오류로 출력됩니다.

## 파일 디스크립터의 확장

파일 디스크립터는 파일이나 스트림 외에도 **다양한 자원을 식별하는 데 사용**됩니다. 주요 확장된 사용 예시는 다음과 같습니다.

### 1. 파일과 장치

- 파일 디스크립터는 *일반 파일*뿐만 아니라 *장치 파일*(예: `/dev/sda`, `/dev/tty`)에도 사용됩니다.

#### 일반 파일

일반 파일에 대한 읽기 및 쓰기 작업에 사용됩니다.

```bash
exec 3> myfile.txt
```

`3`은 새로운 파일 디스크립터로 `myfile.txt`에 대한 출력 스트림을 생성

#### 장치 파일

- 장치 파일은 하드웨어 장치를 소프트웨어적으로 표현한 것으로

- 실제 하드웨어 장치와의 입출력 인터페이스를 제공하며

- 이 장치 파일을 열면 파일 디스크립터가 할당됩니다.

### 2. 파이프(Pipe)

- **파이프**는 **프로세스 간 통신(IPC)**을 위해 사용되는 메커니즘으로, 파이프에 대한 파일 디스크립터는 데이터를 순차적으로 전달하는 데 사용됩니다.

### 3. 소켓(Socket)

- **소켓**은 **네트워크 통신**을 위한 인터페이스입니다. 소켓에 대한 파일 디스크립터는 **네트워크 연결**을 통해 데이터를 송수신하는 데 사용됩니다.

- 예를 들어, 웹 서버나 클라이언트가 소켓을 열어 네트워크를 통해 데이터를 주고받을 때, 소켓 파일 디스크립터가 사용됩니다.

### 4. 터널 (Tunnel)

- **터널**은 여러 프로세스 간에 데이터를 전달할 수 있는 **특수한 형태의 파이프**입니다. 파일 디스크립터를 통해 터널링된 데이터는 다른 프로세스와 통신하는 데 사용됩니다.

### 5. 공유 메모리 (Shared Memory)

- **공유 메모리**는 여러 프로세스가 **공통의 메모리 공간**을 공유하여 데이터를 교환할 수 있게 합니다. 이 메모리 영역에 대한 접근도 파일 디스크립터를 통해 관리될 수 있습니다.