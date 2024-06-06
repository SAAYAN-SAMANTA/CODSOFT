const txt = ["Saayan Samanta", "a FullStack Developer", "a UX/UI Developer and Designer", "a Java Developer"];
const speed = 100;
let characterIndex = 0;
let currentTextIndex = 0;

function removeText() {
  const demoElement = document.getElementById("demo");
  demoElement.textContent = "";
}

function animateTyping() {
  const demoElement = document.getElementById("demo");
  const currentText = txt[currentTextIndex];

  if (characterIndex < currentText.length) {
    demoElement.textContent += currentText.charAt(characterIndex);
    characterIndex++;
    setTimeout(animateTyping, speed);
  } else {
    characterIndex = 0;
    currentTextIndex++;
    if (currentTextIndex < txt.length) {
      setTimeout(removeText, speed);
      setTimeout(animateTyping, speed);
    } else {
      currentTextIndex = 0;
      setTimeout(removeText, speed);
      setTimeout(animateTyping, speed);
    }
  }
}

animateTyping();