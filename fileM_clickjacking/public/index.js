window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fake-btn');
  
    if (!button) return;
  
    button.addEventListener('click', (e) => {
      shakeButton(button);
      flashBackground();
      spawnConfetti();
  
      temporarilyDisableButton(button);
    });
  });
  
  
  function temporarilyDisableButton(button) {
    button.style.opacity = '0'; 
    button.style.pointerEvents = 'none'; 
  
    setTimeout(() => {
      button.style.opacity = '1'; 
      button.style.pointerEvents = 'auto';
    }, 150);
  }
  
  
  function shakeButton(button) {
    button.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)' },
      { transform: 'translateX(0)' }
    ], {
      duration: 200,
      iterations: 1
    });
  }

  
  
  function flashBackground() {
    const originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#ffe066'; 
  
    setTimeout(() => {
      document.body.style.backgroundColor = originalColor || '#f5f5f5';
    }, 150);
  }
  
  
  function spawnConfetti() {
    const confettiCount = 15;
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      document.body.appendChild(confetti);
  
      const size = Math.random() * 8 + 4 + 'px';
      confetti.style.width = size;
      confetti.style.height = size;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.position = 'absolute';
      confetti.style.top = (window.innerHeight / 2) + 'px';
      confetti.style.left = (window.innerWidth / 2) + 'px';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '999';
  
      
      const x = (Math.random() - 0.5) * window.innerWidth;
      const y = (Math.random() - 0.5) * window.innerHeight;
      const rotate = Math.random() * 720;
  
      confetti.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 600,
        easing: 'ease-out',
        iterations: 1
      });
  
      
      setTimeout(() => {
        confetti.remove();
      }, 2000);
    }
  }
  
  
  function getRandomColor() {
    const colors = ['#ff5e5e', '#5eff5e', '#5e5eff', '#ffea5e', '#5effea', '#ea5eff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  

  document.getElementById('url-input').addEventListener('click', function() {
    const urlInput = document.getElementById('url-input');
    urlInput.style.opacity = '1';
    urlInput.focus();
  });
  
  document.getElementById('url-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const url = event.target.value;
      if (url) {
        const iframe = document.querySelector('iframe');
        iframe.src = url;
      }
    }
  });
  
  document.getElementById('url-input').addEventListener('focus', function() {
    this.style.opacity = '1';
  });
  
  document.getElementById('url-input').addEventListener('blur', function() {
    this.style.opacity = '0.2';
  });
  