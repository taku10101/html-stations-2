function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  //   トグルボタンがオンのとき「背景色が変わります。」というテキストの背景色が赤色に変化する。
  // トグルボタンがオフのとき「背景色が変わります。」というテキストの背景色が無色に変化する。
  if (e.target.checked) {
    document.getElementById("text").style.backgroundColor = "red";
  } else {
    document.getElementById("text").style.backgroundColor = "";
  }
}
