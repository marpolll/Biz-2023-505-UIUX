document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");

  /*
  document.querySelector("li#home").addEventListener("click", () => {
    alert("home 으로 가기");
  });

  document.querySelector("li#dept").addEventListener("click", () => {
    alert("거래처 관리로 가기");
  });

  document.querySelector("li#goood").addEventListener("click", () => {
    alert("상품 으로 가기");
  });
  */

  // 위 코드보다 아래 코드가 간단하다

  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;

    if (nav_text === "home") {
      document.location.href = "./index.html";
    } else if (nav_text === "거래처") {
      document.location.href = "./background.html";
    } else if (nav_text === "상품") {
      document.location.href = "./background2.html";
    } else if (nav_text === "로그아웃") {
      alert("바이");
    } else if (nav_text === "관리자") {
      document.location.href = "https://naver.com";
    }
  };

  //   nav_ul.onClick = nav_click  별로 안좋음 아래거 사용
  /*
  if (nav_ul) {
    nav_ul.addEventListener("click", nav_click);
  }

  nav_ul 값이 있으면 !nav_ul 값이 null 이면
  */

  // null safe 코드
  // nav_ul 객체변수가 null 이 아닐경우에만 add...() 함수를 실행하라
  // null 이면 무시하라
  nav_ul?.addEventListener("click", nav_click);
});
