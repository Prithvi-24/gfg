
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});


document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


document.getElementById("logo").addEventListener("click", () => {
  const snake = document.createElement("div");
  snake.textContent = "🐍";
  snake.style.position = "fixed";
  snake.style.top = "50%";
  snake.style.left = "-50px";
  snake.style.fontSize = "40px";
  snake.style.transition = "left 3s linear";
  document.body.appendChild(snake);
  setTimeout(() => snake.style.left = "110%", 50);
  setTimeout(() => snake.remove(), 3100);
});



const eggs = document.querySelectorAll(".easter-egg");
let foundCount = 0;
eggs.forEach(egg => {
  egg.addEventListener("click", () => {
    if (!egg.classList.contains("found")) {
      egg.classList.add("found");
      foundCount++;
      alert(egg.dataset.fact);
      if (foundCount === eggs.length) {
        setTimeout(() => alert("🎉 You found all the Python secrets!"), 300);
      }
    }
  });
});
