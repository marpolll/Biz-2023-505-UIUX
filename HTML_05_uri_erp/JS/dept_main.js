document.addEventListener("DOMContentLoaded", () => {
  /* 
    dept_main 에서 입력하는 요소중에서
    거래처코드, 거래처명, 대표전화, 담담자명, 담당자연락처는
    반드시 입력해야 하는 요소이다

    각 요소를 입력하지 않고 저장을 할 경우 
    alert 경고를 띄우고, 값을 입력하도록 하는 front validation(유효성 검사)
    를 실행하시오
    */

  const d_code = document.querySelector("#d_code");
  const d_name = document.querySelector("#d_name");
  const d_tel = document.querySelector("#d_tel");
  const d_ceo = document.querySelector("#d_ceo");
  const d_man = document.querySelector("#d_man");
  const d_man_tel = document.querySelector("#d_man_tel");

  const btnSaveOnClick = () => {
    const dCodeText = d_code.value;
    const dNameText = d_name.value;
    const dTelText = d_tel.value;
    const dCeoText = d_ceo.value;
    const dManText = d_man.value;
    const dManTelText = d_man_tel.value;

    if (!dCodeText) {
      alert("이름은 반드시 입력해야 합니다.");
      d_code.focus();
      return false;
    }

    if (!dNameText) {
      alert("이름은 반드시 입력해야 합니다.");
      d_name.focus();
      return false;
    }

    if (!dTelText) {
      alert("이름은 반드시 입력해야 합니다.");
      d_tel.focus();
      return false;
    }

    if (!dCeoText) {
      alert("이름은 반드시 입력해야 합니다.");
      d_ceo.focus();
      return false;
    }

    if (!dManText) {
      alert("이름은 반드시 입력해야 합니다.");
      d_man.focus();
      return false;
    }

    if (!dManTelText) {
      alert("이름은 반드시 입력해야 합니다.");
      d_man_tel.focus();
      return false;
    }
    save.addEventListener("click", btnSaveOnClick);
  };
});
