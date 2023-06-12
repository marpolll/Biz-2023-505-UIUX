// JSON(Javascript Object Notation)
// 자바스크립트에서 처음으로 사용하기 시작한
// 독특한 data 객체
// INPUT_INDEX.USERNAME = 0 과 유사한 코드
// INPUT_INDEX.PASSWORD = 1 과 유사한 코드
const INPUT_INDEX = {
  USERNAME: 0,
  PASSWORD: 1,
  RE_PASSWORD: 2,
  EMAIL: 3,
  TEL: 4,
};

document.addEventListener("DOMContentLoaded", () => {
  const join = () => {
    // join_form 이 감싸고 있는 input 들을 모두 select 하여
    // join_inputs(배열) 에 담아라
    const join_inputs = document.querySelectorAll("#join_form input");
    if (!join_inputs[INPUT_INDEX.USERNAME].value) {
      alert("이름은 필수");
      join_inputs[INPUT_INDEX.USERNAME].focus();
      return false;
    }

    const input_password = join_inputs[INPUT_INDEX.PASSWORD].value;
    if (!input_password) {
      alert("password 필수");
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    // 정규화 문자열 : 일반 문자열과 달리 / 로 감싸진 문자열이다
    // [] : OR(아래 A 부터 Z) 입력된 문자열이 대문자 A ~ Z 중에 있냐
    // {} : 자릿수
    // [A-Z]{3} : 대문자 3자리 문자열인가 검사 {}이 없으면 1자리임
    // [A-Za-z]{3} : 대소문자 3자리
    // [A-Za-z0-9]{3} : 대소문자, 숫자 3자리
    // [A-Za-z0-9]{6,12} : 대소문자 숫자 6자리 부터 12자리까지
    // 특수문자, 영문대소문자, 숫자 포함하여 8 ~ 15 자리 이내
    const password_check =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!password_check.test(input_password)) {
      alert(
        "비밀번호는 특수문자, 영문대소문자, 숫자 포함하여 8 ~ 15자리로 입력하세요"
      );
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    const re_password = join_inputs[INPUT_INDEX.RE_PASSWORD].value;
    if (!re_password) {
      alert("비밀번호 확인 입력해라");
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }
    if (input_password !== re_password) {
      alert("비밀번호 값이 일치 하지 않습니다.");
      join_inputs[INPUT_INDEX.PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].value = "";
      join_inputs[INPUT_INDEX.PASSWORD].focus = "";
      return false;
    }

    const input_email = join_inputs[INPUT_INDEX.EMAIL].value;
    if (!input_email) {
      alert("이메일 입력해라");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }

    const email_check =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!email_check.test(input_email)) {
      alert("이메일 형식이 잘못됬다");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }

    const input_tel = join_inputs[INPUT_INDEX.TEL].value;
    if (!input_tel) {
      alert("전화번호 확인");
      join_inputs[INPUT_INDEX.TEL].focus();
      return false;
    }
    const tel_check = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!tel_check.test(input_tel)) {
      alert("전화번호 형식이 잘못됬다(000-0000-0000)");
      join_inputs[INPUT_INDEX.TEL].focus();
      return false;
    }
  }; //end join()
  document.querySelector("#join_button").addEventListener("click", join);
});
