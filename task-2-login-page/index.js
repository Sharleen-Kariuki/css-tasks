document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.form-group input');
  const button = document.querySelector('.btn-submit');
  const form = document.querySelector('.login-form');

  // Prevent submit from reloading the page
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // Input Focus & Blur Transitions
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.style.borderColor = 'hsl(224, 60%, 12%)';
      input.style.backgroundColor = 'hsl(0, 0%, 100%)';
      input.style.boxShadow = '0 0 0 2px hsla(224, 60%, 12%, 0.15)';
    });

    input.addEventListener('blur', () => {
      input.style.borderColor = 'hsl(210, 15%, 82%)';
      input.style.backgroundColor = 'hsl(48, 100%, 96%)';
      input.style.boxShadow = 'none';
    });
  });

  // Button Hover Effects
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'hsl(224, 60%, 20%)';
    button.style.transform = 'translateY(-1px)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'hsl(224, 60%, 12%)';
    button.style.transform = 'translateY(0)';
  });

  // Password Visibility Toggle
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  if (togglePassword && passwordInput) {
    const eyeOpen = togglePassword.querySelector('.eye-open');
    const eyeClosed = togglePassword.querySelector('.eye-closed');

    togglePassword.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      if (isPassword) {
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
        togglePassword.setAttribute('aria-label', 'Hide password');
      } else {
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
        togglePassword.setAttribute('aria-label', 'Show password');
      }
      passwordInput.focus();
    });
  }
});