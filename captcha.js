
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaCode = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captchaCode += characters[randomIndex];
    }
    document.getElementById('captcha').textContent = captchaCode;
}


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredCaptcha = document.getElementById('captchaInput').value;
    const displayedCaptcha = document.getElementById('captcha').textContent;

    if (enteredCaptcha === displayedCaptcha) {
        alert('Login successful!');
        window.location.href = 'home.html';    }
         else {
        alert('Incorrect captcha! Please try again.');
        generateCaptcha(); 
    }
});

window.onload = generateCaptcha;




const searchBox = document.querySelector(".search-box");
const suggestions = document.createElement("div");
suggestions.className = "suggestions";
searchBox.parentNode.appendChild(suggestions);

const menuItems = ["Pizza", "Burger", "Pasta", "Drinks", "Desserts"];

searchBox.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  suggestions.innerHTML = "";
  if (query) {
    const matches = menuItems.filter((item) =>
      item.toLowerCase().includes(query)
    );
    matches.forEach((match) => {
      const div = document.createElement("div");
      div.textContent = match;
      div.addEventListener("click", () => {
        searchBox.value = match;
        suggestions.innerHTML = "";
      });
      suggestions.appendChild(div);
    });
  }
});