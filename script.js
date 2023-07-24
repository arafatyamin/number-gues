let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;

console.log(correct_ans)
let user_guess;
let guesses = 0;
const maxGuesses = 3;

document.getElementById("guess_button").addEventListener("click", function() {
  if (guesses < maxGuesses) {
    user_guess = document.getElementById("user_guess").value;
    user_guess = parseInt(user_guess);

    if (user_guess === correct_ans) {
      document.querySelector(".alert").innerHTML = "<strong>You win!</strong>";
      document.getElementById("guess_button").disabled = true;
      document.getElementById("user_guess").disabled = true;
      document.getElementById("user_guess").style.backgroundColor = "#e8e8e8";
    } else if (user_guess < correct_ans) {
      document.querySelector(".alert").innerHTML = "<strong>Correct answer is greater!</strong>";
    } else {
      document.querySelector(".alert").innerHTML = "<strong>Correct answer is smaller!</strong>";
    }

    guesses++;
    const remainingGuesses = maxGuesses - guesses;
    if (remainingGuesses === 0 && user_guess !== correct_ans) {
      document.querySelector(".alert").innerHTML = `<strong>You lose! Your correct answer is ${correct_ans}</strong>`;
      document.getElementById("guess_button").disabled = true;
      document.getElementById("user_guess").disabled = true;
      document.getElementById("user_guess").style.backgroundColor = "#e8e8e8";
    } else {
      document.querySelector(".alert").innerHTML += `<br><strong>Chances left: ${remainingGuesses}</strong>`;
    }
  }
});