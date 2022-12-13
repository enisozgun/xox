let flag = true;
let player1score = 0;
let player2score = 0;

const xMark =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>';
const oMark =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>';

document.querySelectorAll(".tile").forEach((item) => {
  item.addEventListener("click", clickTile);
});

function clickTile() {
  if (this.getAttribute("mark") == "empty") {
    if (flag) {
      this.innerHTML = xMark;
      this.setAttribute("mark", "x");
    } else {
      this.innerHTML = oMark;
      this.setAttribute("mark", "o");
    }
    checkWinner();
  }
}

function gameStatus() {
  flag = !flag;
  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");
  if (flag) {
    player1.classList.add("h2-turn");
    player1.innerHTML = "Player 1's Turn (X)";
    player2.classList.remove("h2-turn");
    player2.innerHTML = "Player 2 (O)";
  } else {
    player2.classList.add("h2-turn");
    player2.innerHTML = "Player 2's Turn (O)";
    player1.classList.remove("h2-turn");
    player1.innerHTML = "Player 1 (X)";
  }
}

function checkWinner() {
  if (
    lineChecker(t1, t2, t3) ||
    lineChecker(t4, t5, t6) ||
    lineChecker(t7, t8, t9) ||
    lineChecker(t1, t4, t7) ||
    lineChecker(t2, t5, t8) ||
    lineChecker(t3, t6, t9) ||
    lineChecker(t1, t5, t9) ||
    lineChecker(t3, t5, t7)
  ) {
    if (flag) {
      alert("Player 1 wins");
      player1score += 1;
      document.getElementById("player1score").innerHTML =
        "Score: " + player1score;
    } else {
      alert("Player 2 wins");
      player2score += 1;
      document.getElementById("player2score").innerHTML =
        "Score: " + player2score;
    }
    gameReset();
  } else {
    gameStatus();
  }
}

function lineChecker(tile1, tile2, tile3) {
  let t1 = tile1.getAttribute("mark");
  let t2 = tile2.getAttribute("mark");
  let t3 = tile3.getAttribute("mark");
  return (
    t1 == t2 && t2 == t3 && t1 != "empty" && t2 != "empty" && t3 != "empty"
  );
}

function gameReset() {
  document.querySelectorAll(".tile").forEach((tile) => {
    tile.innerHTML = "";
    tile.setAttribute("mark", "empty");
  });
  gameStatus();
}
