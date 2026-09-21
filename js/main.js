const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const typingText = document.getElementById('typing-text');
const roles = ['Developer', 'Data Analyst', 'Web Developer'];

if (typingText) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const current = roles[roleIndex];

    if (!deleting) {
      typingText.textContent = current.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      typingText.textContent = current.slice(0, charIndex - 1);
      charIndex -= 1;

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 80 : 140);
  };

  tick();
}
