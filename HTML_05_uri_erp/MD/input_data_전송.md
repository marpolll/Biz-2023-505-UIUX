# 화면에서 입력한 데이터를 서버로 전송하기

- HTML 의 input tag 를 사용하여 입력 box 를 만들기
- input tag 로 만들어진 입력 box 는 개별데이터 요소를 입력하는 화면 도구이다
- input tag 들을 form tag 로 감싸서 포장을 한다.
- 서버로 데이터를 보낼때는 개별적으로 보낼수도 있지만, 일반적으로 form tag 로 감싸서 한꺼번에 전송을 한다.

## input tag 구성 요소

- `name 속성` : 서버로 데이터를 보낼때 개별 데이터 요소를 식별할 변수를 만드는 코드

- 아래 코드로 생성된 화면에 문자열(홍길동)을 입력하면 `d_name = 홍길동` 이라는 서버로 보내기 위한 코드가 자동 생성된다.
- 생성된 코드는 form tag 에 의해 하나의 묶음으로 만들어지고 서버로 보내진다.
- input box 에 문자열을 입력한 후 `전송` 버튼을 클릭하면 자동으로 서버로 데이터를 보내는 `submit` 코드가 자동 생성되고, `전송` 버튼을 클릭하면 서버로 데이터가 보내진다.

```html
<form>
  <input name="d_name" />
  <button>전송</button>
  <button type="submit">저장</button>
  <button type="reset">다시작성</button>
  <button type="button">리스트로</button>
</form>
```

## form tag 로 감싸진 button 의 역활

- form tag 로 감싸진 button 은 기본 역활이 `submit` 이다
- 아무런 코드 타입을 작성 하지 않아도 HTML 문서의 기본 성질중에서 button 은 submit 코드를 실행하는 역활을 수행한다.

### button 성질 부여 속성

- 버튼의 성질을 부여할때는 `type="submit"` 과 같은 속성을 사용한다.
- `type="submit"` : form tag 로 감싸진 경우 input box 에 입력한 데이터(text) 를 서버로 보내는 역활 수행, 기본 설정값, 타입을 생략하면 자동으로 `type="submit"` 을 설정한 것 과 같다.
- `type="reset"` : form tag 로 감싸진 경우 같은 form tag 로 감싸진 input box 에 입력한 데이터(text)를 모두 클리어 하는 역활 수행
- `type="button"` : 아무런 역활,기능도 수행하지 마라, 모양만 버튼으로 유지하라
