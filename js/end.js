const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const scoreEle = document.querySelector("p");
const button = document.querySelector("button");
const input = document.querySelector("input");
scoreEle.innerText = score;
const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score");
  } else {
    const finalScroe = { name: input.value, score };
    highScores.push(finalScroe);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("scores");
    window.location.assign("./scores.html");
  }
};

button.addEventListener("click", saveHandler);
