let SCORE = prompt("Please enter your Grade");
if (SCORE < 100 && SCORE >= 85) {
  alert("You got a A 🎉");
} else if (SCORE < 85 && SCORE >= 75) {
  alert("You got a B 🎉");
} else if (SCORE < 75 && SCORE >= 65) {
  alert("You got a C 📃");
} else if (SCORE < 65 && SCORE >= 50) {
  alert("You got a D 👌");
} else if (SCORE < 50 && SCORE >= 0) {
  alert("You got a F 😟");
} else if (SCORE > 100 || SCORE < 0) {
  alert("Invalid score ❌");
} else if (isNaN(SCORE)) {
  alert("Not a number ❌");
} else if (SCORE == 100) {
  alert("Perfect Score 🏆");
}
