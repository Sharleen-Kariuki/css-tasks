document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const clearBtn = document.querySelector('.heading-clear');
    const inputContainers = document.querySelectorAll('.input-container');
    const radioCards = document.querySelectorAll('.radio-card');
  
    // 1. Input Focus States (highlights container and badges on focus)
    inputContainers.forEach(container => {
      const input = container.querySelector('input');
      const badge = container.querySelector('.unit-badge');
  
      input.addEventListener('focus', () => {
        container.style.borderColor = 'hsl(61, 70%, 52%)';
        if (badge) {
          badge.style.backgroundColor = 'hsl(61, 70%, 52%)';
          badge.style.color = 'hsl(202, 55%, 16%)';
        }
      });
  
      input.addEventListener('blur', () => {
        container.style.borderColor = 'hsl(200, 20%, 78%)';
        if (badge) {
          badge.style.backgroundColor = 'hsl(202, 86%, 94%)';
          badge.style.color = 'hsl(200, 30%, 35%)';
        }
      });
    });
  
    // 2. Radio Selection State (toggles active background on cards)
    const updateRadioCards = () => {
      radioCards.forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio.checked) {
          card.style.backgroundColor = 'hsla(61, 70%, 52%, 0.15)';
          card.style.borderColor = 'hsl(61, 70%, 52%)';
        } else {
          card.style.backgroundColor = 'transparent';
          card.style.borderColor = 'hsl(200, 20%, 78%)';
        }
      });
    };
  
    radioCards.forEach(card => {
      card.addEventListener('click', updateRadioCards);
    });
    updateRadioCards(); // Initial check
  
    // 3. Clear All Button
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        form.reset();
        updateRadioCards();
      });
    }
  
    // 4. Form Submit Prevention
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  
    // 5. Modal Open / Close Logic
    const modal = document.querySelector('.modal');
    const openModalBtn = document.querySelector('.btn-open-modal');
    const closeModalBtns = document.querySelectorAll('.btn-close-modal');
  
    if (modal) {
      // Open
      if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
          modal.style.display = 'block';
        });
      }
  
      // Close on button click
      closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          modal.style.display = 'none';
        });
      });
  
      // Close on outside backdrop click
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  });