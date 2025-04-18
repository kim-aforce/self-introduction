// HTMLがすべて読み込まれた後に実行
document.addEventListener("DOMContentLoaded", function () {
  // ボタンをすべて取得
  const openBtns = document.querySelectorAll(".info-btn");
  // 閉じるボタンをすべて取得
  const closeBtns = document.querySelectorAll(".modal-close");

  // 各ボタンがクリックされたときの処理
    openBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        // 対象のモーダルIDを取得
        const target = btn.dataset.target;
        const modal = document.getElementById("modal-" + target);
        const content = modal.querySelector(".modal-content");

        // モーダルを表示
        modal.style.display = "flex";
        // アニメーションを追加（fadeInUp）
        content.classList.add("animate__animated", "animate__fadeInUp");

        // アニメーション終了後にクラスを削除（再表示のため）
        content.addEventListener("animationend", () => {
          content.classList.remove("animate__animated", "animate__fadeInUp");
        }, { once: true });
      });
    });
	
  // 各閉じるボタンをクリックしたときの処理
  closeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      // 閉じると非表示にする
      btn.closest(".modal").style.display = "none";
    });
  });

  // モーダルの外側をクリックしたときの処理
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", function (e) {
      // クリックされた要素がモーダルそのものであれば閉じる
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
