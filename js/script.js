// ボタンクリックでアラートを表示しよう
// javaScript
// document
//   .querySelector("#js-button-alert")
//   .addEventListener("click", function () {
//     alert("おはよう");
//   });
// jQuery
jQuery("#js-button-alert").on("click", function () {
  alert("おはよう");
});

// アコーディオンメニューを作ろう
jQuery(".js-accordion").on("click", function () {
  jQuery(this).next().slideToggle();
  //jQuery(this).nextは次の兄弟要素を示している
  //この場合はaccordion__contentになる
});

//トップへ戻るボタンを作ろう
jQuery("#js-button-top").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

//ドロワーメニューを作ろう
jQuery("#js-button-drawer").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  //ハンバーガーが✖️に変化する
  jQuery("#js-drawer").slideToggle();
  //隠れていたメニューを表示させる
});

//フォームに入力された値をアラートに表示しよう
jQuery("#js-form-name").on("submit", function (e) {
  e.preventDefault();

  const nameInput = jQuery("#js-input-name");
  const yourName = nameInput.val();

  if (!yourName) {
    nameInput.next(".error-message").text("必須項目です");
    return;
    // 入力がない場合
  }

  nameInput.next(".error-message").text("");
  alert(`${yourName}さん、こんにちわ`);
  //入力がある場合

  return false;
});
