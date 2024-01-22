var scoresBtn = document.querySelector("#view-high-scores");

// Rank previous scores in order by retrieving scores from localStorage

function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
    highscores.forEach(function(score) {
      var liTag = document.createElement("li");
      liTag.textContent = score.name + " - " + score.score;

      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
}

// Clear previous scores when users click clear 
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  } document.getElementById("clear").onclick = clearHighscores;
  
printHighscores();

// document.getElementById("email-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   var email = document.getElementById("email").value.trim();
//   if (email !== "") {
//     // Save the email in localStorage or perform any other desired action
//     console.log("Email:", email);
//   }
// });

document.getElementById("email-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var initials = document.getElementById("initials").value.trim();
  if (initials !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.push({ initials: initials });
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    // Perform any other desired action
    console.log("Initials:", initials);
  }
});