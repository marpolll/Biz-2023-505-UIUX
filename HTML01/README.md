# css 를 사용하여 interactive 화면 구현 하기

- 실무에서 사용하는 css 는 'css2' 와 'css3' 가 사용된다
- 아직은 css2가 많이 사용 되고 있지만, css3 의 새로운 기능들이 증가하면서 css3 사용이 점점 증가하고 있다
- 아직 css2 를 주로 사용하는 이유는 일부 브라우저에서 css3 의 새로운 기능을 지원하지 않기 때문에
- 크롬, Edge, firefox, opera, safari 와 같은 범용적인 브라우저는 대부분의 HTML5 기능과 css3 의 기능을 지원한다. 하지만 매우 새로운
- css3 는 업데이트 되지 않은 브라우저 에서는 가끔 지원하지 않는 경우도 있다.

## css 의 selector

- css 속성을 부여하기 위한 대상
- 'tag', 'id', 'class' 가 있다

### tag : 아무런 기호 없이 tag 키워드를 바로 사용

```css
div {
  color: blue;
}
```

### id : # 기호와 함께 식별자(단어)를 사용

```css
/* id 만 단독으로 사용하기 */
/*
   id 는 페이지에서 유니크 하기 때문에 단독으로 사용해도 
   문제를 일으키는 경우가 상대적으로 적다
*/
#save {
  color: red;
}
```

### class : Dot(.) 기호와 함께 사용

```css
/* 
    class 를 tag 없이 사용할때는 매우 신중하게 사용
    페이지에 bbs 라는 클래스다 어디에 있는지 잘 파악해야한다
    원하지 않는 곳에 속성이 설정될수 있다.
*/
.bbs {
  color: red;
}

/*
    tag selector 와 함께 class selector 사용하기
    select 되는 대상을 좀더 명확히 할때
*/
a.bbs {
  color: blue;
}
```
