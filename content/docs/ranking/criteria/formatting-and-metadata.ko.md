---
title: "포맷 및 메타데이터 기준"
---

> 매핑 기준을 찾고 계신가요?
> ScoreSaber 매핑 기준은 [여기에서 확인할 수 있습니다](./mapping-criteria.md)

## 규칙

:::tip
외부 소스(external source)의 데이터는 이 규칙을 따를 필요는 없지만, 곡과 아티스트에 관련성을 유지해야 합니다. 추가 태그나 그 밖의 정보를 더해도 됩니다. 이 문서의 메타데이터 규칙은 인게임을 위한 것입니다.
:::

모든 필드에는 공식 메타데이터를 사용한 뒤, 아래에 설명된 포맷을 따라야 합니다. 모순이 있는 경우에는 공식 메타데이터를 따르세요. 공식 메타데이터가 검색 불가능한 문자(A-Z, 0-9 이외의 모든 것)를 사용하는 경우에는 아래 [검색 불가능한 문자, 번역, 로마자 표기](#unsearchable-characters-translations-and-romanization)를 참고하세요.

## 일반적인 경우

대다수의 경우, 곡 메타데이터는 다음 포맷을 따라야 합니다:

```text
levelAuthorName: 매퍼
songAuthorName: 곡의 아티스트
songName: 곡 이름
songSubName: 뒤따르는 모든 태그: (Short Ver.), (ft. Hatsune Miku) 등
```

태그가 여러 개라면, songSubName에 순서에 상관없이 나란히 배치하세요. 이 문서나 공식 메타데이터에 명시되지 않은 태그는 추가하지 마세요. 태그에 사용되는 괄호 종류나 그 밖의 기호는, 사용한다면 공식 메타데이터가 있을 경우 그것을 따라야 합니다.

### _예시:_

```text
levelAuthorName: Uninstaller
songAuthorName: Camellia
songName: Bassline Yatteru? w
songSubName: feat. Nanahira (Cranky Remix) (Short Ver.)
```

## 트랙이 원곡의 리믹스 또는 그 밖의 음악적 변형인 경우

리믹스, 부틀렉(bootleg) 등의 태그는 공식 메타데이터나 소스 메타데이터와 관계없이 반드시 괄호로 묶어 songSubName에 넣어야 합니다.

### _예시:_

```text
songAuthorName: DJ'TEKINA//SOMETHING
songName: Internet Bitch
songSubName: (P*Light Remix)
```

## 트랙이 커버(cover)인 경우

커버 아티스트 뒤에 "Cover"를 붙여, 공식 메타데이터나 소스 메타데이터와 관계없이 반드시 괄호로 묶어 songSubName에 넣어야 합니다.

### _예시:_

```text
songAuthorName: 150p
songName: Kodoku no Kakurenbo
songSubName: (Himeringo Cover)
```

## 트랙에 공식적인 길이 변형이 있는 경우

트랙이 공식적인 길이 변형이라면, 소스 메타데이터를 따라야 합니다.

### _예시:_

```text
songAuthorName: Camellia as "fluX Xroise"
songName: Xronier
songSubName: (”geneXe” Long ver.)
```

## 트랙에 비공식적인 길이 변형이 있는 경우

트랙이 공식 버전과 충분히 유사한 방식으로 변형되었다면, 그 버전 트랙의 소스 메타데이터를 사용해야 합니다.

트랙이 애니메이션 오프닝이나 엔딩을 위해 풀 버전을 짧게 줄인 버전이라면, songSubName에 (TV Size)를 추가해야 합니다.

### _예시:_

```text
songAuthorName: PENGUIN RESEARCH
songName: HETENA
songSubName: (TV Size)
```

트랙이 단순히 짧게 줄여진 것이라면, songSubName에 (Short Edit) 또는 (Short Ver.)를 추가해야 합니다. 원래 트랙 메타데이터에 이미 길이 표기가 있다면, (Short Edit) 또는 (Short Ver.)가 원래 길이 표기를 대체해야 합니다.

### _예시:_

```text
songAuthorName: VINXIS
songName: Sidetracked Day
songSubName: (Short Edit)
```

트랙이 어떤 식으로든 길게 늘려진 것이라면, songSubName에 (Extended Edit) 또는 (Extended Ver.)를 추가해야 합니다. 원래 트랙 메타데이터에 이미 길이 표기가 있다면, (Extended Edit) 또는 (Extended Ver.)가 원래 길이 표기를 대체해야 합니다.

### _예시:_

```text
songAuthorName: ExileLord
songName: Soulless 5
songSubName: (Extended Edit)
```

## 트랙이 매시업(mashup)인 경우

아티스트가 제공한 정보를 사용하세요.

### _예시:_

```text
songAuthorName: gmtn. vs. kozato (fw. LUZE) & gmtn. (witch’s slave)
songName: squartatrice vs disperagioia

songAuthorName: Kove x Perfume
songName: Stellar x Polyrhythm
songSubName: (TANUKI Mashup)
```

## 트랙에 보컬로이드(Vocaloid) 보컬이 있는 경우

보컬로이드가 곡의 유일한 아티스트인 경우는 드뭅니다. 프로듀서나 아티스트를 songAuthorName에 넣고, 참여한 보컬로이드는 songSubName에 추가해야 합니다.

### _예시:_

```text
songAuthorName: Rasen Hikou
songName: Omoi
songSubName: [ft. Hatsune Miku]
```

## 트랙에 여러 아티스트가 있는 경우

### 쉼표 구분

소스 메타데이터를 사용해야 하며, 아티스트 이름은 공백으로 구분해야 합니다.

#### _예시:_

```text
songAuthorName: TEA, ginkiha
songName: Luvin’Epoch
```

### vs. (Versus)

vs., VS, Versus는 두 아티스트 간의 협업을 나타낼 때 흔히 사용됩니다. 소스 메타데이터를 있는 그대로 따라야 합니다.

#### _예시:_

```text
songAuthorName: C-Show vs. DJ Genki
songName: BLACK LABEL
```

### With

With는 두 아티스트 간의 협업을 나타낼 때 흔히 사용됩니다. 소스 메타데이터를 있는 그대로 따라야 합니다.

#### _예시:_

```text
songAuthorName: Minazuki Airi with Atsushi
songName: Daisuki, Evolution
```

### And (또는 &)

And(또는 &)는 두 아티스트 간의 협업을 나타낼 때 흔히 사용됩니다. 소스 메타데이터를 있는 그대로 따라야 합니다. 앰퍼샌드(&)를 "and"로 바꾸거나 그 반대로 바꾸지 마세요.

#### _예시:_

```text
songAuthorName: Draw The Emotional & Foreground Eclipse
songName: Sad Spring
```

### Feat (또는 ft.)

Featuring(즉 feat. / ft.)은 두 아티스트 간의 협업을 나타낼 때 흔히 사용됩니다. 이는 아티스트 이름과 제목 모두에 나타날 수 있습니다. feat/ft. 부분은 항상 songSubName 안에 넣으세요.

#### _예시:_

```text
songAuthorName: The Black Eyed Peas
songName: DOPENESS
songSubName: (feat. CL)
```

### CV (Character Voice)

캐릭터 보이스(CV)는 보통 보컬리스트가 작품 속 캐릭터의 이름으로 노래할 때 사용됩니다. 이는 일관성이 거의 없기 때문에, 공식 메타데이터에도 불구하고 다음과 같은 방식으로 적용됩니다.

CV 표기의 올바른 포맷은, 캐릭터의 로마자 이름을 괄호 안에 넣고, 그 뒤에 보컬리스트의 로마자 이름을 "CV:"를 접두사로 하여 괄호 안에 넣는 것입니다.

#### _예시:_

```text
songAuthorName: Emilia (CV: Rie Takahashi)
songName: Stay Alive

songAuthorName: Tanya Degurechaff (CV: Yuki Aoi)
songName: Los! Los! Los!
```

## 트랙에 3명 이상의 아티스트가 있는 경우

트랙에 3명 이상의 아티스트가 참여한 경우, 대신 Various Artists를 사용해야 합니다.

### _예시:_

```text
songAuthorName: Various Artists
songName: Songs Compilation
```

## 맵에 여러 기여자가 있는 경우

기여자가 둘 이상인 경우, 인게임 글자 수 제한을 초과하지 않는 한 각 기여자를 개별적으로 표기할 수 있습니다. 이때 모든 기여자 이름이 포함되어야 하며 올바른 문장 부호로 구분되어야 합니다.

글자 수 제한을 초과하는 경우, levelAuthorName을 "Various Mappers" 또는 다른 그룹 이름으로 대체해야 하며, 모든 기여자는 해당 비트맵 소스 페이지에 크레딧을 표기하거나 커스텀 DAT 파일 필드 안에 나열해야 합니다.

대체 그룹 이름은 기여자 2명 이상의 협업에 허용됩니다. 그룹 이름이 15자 이하가 아닌 한, 그룹 이름은 글자 수 제한을 초과해서는 안 됩니다.

### _예시:_

```text
levelAuthorName: Amanatsu & Kikis
songAuthorName: Camellia
songName: finorza
songSubName: feat.Nanahira

levelAuthorName: DE125, Skeelie, & Vilawes
songAuthorName: ReeK
songName: Possesed By The Blood Moon
```

## 검색 불가능한 문자, 번역, 로마자 표기 [#unsearchable-characters-translations-and-romanization]

각 필드에 검색 가능한 문자열이 충분히 있는 한, 검색 불가능한 문자가 포함되어 있더라도 모든 필드에 공식 메타데이터를 사용해야 합니다. 모든 경우에, 메타데이터의 **공식 번역**과 **로마자 표기**는 매퍼의 재량에 따라 둘 다 사용할 수 있습니다. "충분한 문자열(Significant string)"은 문자열의 검색 가능성을 우선시하여 사례별로 정의됩니다.

### _허용되는 검색 가능한 메타데이터의 예시:_

```text
levelAuthorName: Uninstaller
songAuthorName: KIVΛ
songName: Code:11
```

### _검색 가능한 메타데이터의 다른 예시들:_

```text
XHRONOXAPSULΞ, t+pazolite, ΩΩPARTS, †:OLPHEUX:†, +ERABY+E CONNEC+10N, AμreoLe ~for Triumph~, \frac{\textup{sig}=\frac{821}{149}}{bpm\approx533}, 嚮導BRING+瞳EYES=死DEATH+齎INVITE
```

어떤 필드의 공식 메타데이터에 검색 가능한 문자가 전혀 없다면, 공식 번역이나 로마자 표기를 사용해야 합니다. 여기서는 かめりあ의 "ヒアソビ"를 예시로 사용합니다.

### _공식 번역의 예시:_

```text
levelAuthorName: Amanatsu
songAuthorName: Camellia
songName: Play with Fire
```

### _로마자 표기의 예시:_

```text
levelAuthorName: Amanatsu
songAuthorName: Camellia
songName: Hiasobi
```

맵이 메타데이터 기준을 위반하지만 어떤 이유로든 메타데이터 기준을 따르는 방식으로 변경할 수 없는 모든 경우는, 사례별로 처리됩니다.

### _예시:_

```text
levelAuthorName: Skeelie
songAuthorName: x0o0x_
songName: / / // / /
```
