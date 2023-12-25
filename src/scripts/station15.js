function fruits() {
  const fruits = document.getElementById("fruits");
  //pタグの中身を取得
  const text = fruits.textContent;
  console.log(text);
  // fruitsの中身をulとliを使ったリスト表示に変更
  fruits.innerHTML = `
      <ul>
        <li>${text}</li>
      </ul>
      `;
}
