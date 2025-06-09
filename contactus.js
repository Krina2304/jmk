const text = "contactus";
    const h1 = document.getElementById("animated-text");
    let index = 0;
    let typingSpeed = 150;
    let deletingSpeed = 80;
    let pauseBeforeDelete = 1500;
    let pauseBeforeType = 500;
    let deleting = false;
    function type() {
      if (!deleting) {
        if (index < text.length) {
          h1.textContent += text.charAt(index);
          index++;
          h1.style.borderRight = "4px solid #61dafb"; // Cursor visible
          h1.style.animation = "blink-caret 1s step-end infinite"; // Cursor blinking
          setTimeout(type, typingSpeed);
        } else {
          // Finished typing, stop cursor blinking but keep visible
          h1.style.borderRight = "4px solid #61dafb";
          h1.style.animation = "none";
          setTimeout(() => {
            deleting = true;
            setTimeout(type, pauseBeforeDelete);
          }, pauseBeforeDelete);
        }
      } else {
        if (index > 0) {
          h1.textContent = h1.textContent.slice(0, -1);
          index--;
          h1.style.borderRight = "4px solid #61dafb";
          h1.style.animation = "blink-caret 1s step-end infinite";
          setTimeout(type, deletingSpeed);
        } else {
          deleting = false;
          setTimeout(type, pauseBeforeType);
        }
      }
    }
    type();


    document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const checkBox = document.getElementById('check');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
})