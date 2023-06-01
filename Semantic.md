# Semantic tag

- HMTL 4.x 이하에서는 layout 을 만들때 주로 div tag 만을 사용하여 구성하였다
- tag 와 tag 가 겹쳐지고, 복잡한 layout 을 형성하게 되면 tag의 범위(box범위가) 불분명하여 유지보수를 하기가 매우 어렵게 된다.
- HMTL 파일은 태생이 구조적 환경과는 거리가 멀기 때문에 파일의 tag 들이 겹치고 겹쳐지는 구성이 많다
- 이러한 부분은 개발자(front) 에게 많은 어려움을 주었다.

- HMTL5 에서는 div tag 대신에 단어자체가 의미를 갖는 Semantic tag를 도입하였다.

- HMTL 에서는 div 로 구성하는 layout 대신에 Semantic tag를 사용할 것을 적극 권장한다.

## Semantic tag 로 layout 만들기

- header 만들기

```html
<!-- html4 -->
<div id="header">여기는 제목</div>

<!-- html5 -->
<header>여기는 제목</header>
```

- nav(navigation) 만들기
- 화면의 상단 또는 좌우에 배치되는 메뉴 구성

```html
<!-- html4 -->
<div id="nav">여기는 메뉴</div>

<!-- html5 -->
<nav>여기는 메뉴</nav>
```

- section 만들기
- 구체적으로 보여질 화면의 본문 부분

```html
<!-- html4 -->
<div id="body">여기는 본문</div>
<div id="section">여기는 본문</div>

<!-- html5 -->
<section>여기는 본문</section>
```

- article
- 본문의 구역 나누기

```html
<!-- html4 -->
<div id="section">
  <div id="artcl1">Article</div>
  <div id="artcl2">Article</div>
  <div id="artcl3">Article</div>
</div>

<!-- html5 -->
<section>
  <article>Article1</article>
  <article>Article2</article>
  <article>Article3</article>
</section>
```

- footer(꼬리말)
- 회사의 주소, 전하번호, email 에 대한 정보를 표시하는 곳

```html
<!-- html4 -->
<div id="footer">
  <div id="address">서울</div>
  <div id="email">mar@marpol.com</div>
  <div id="tel">02-222-2222</div>
</div>

<!-- html5 -->
<footer>
  <address id="address">서울</address>
  <address id="email">mar@marpol.conm</address>
  <address id="tel">02-222-2222</address>
</footer>
```
