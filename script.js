document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById('glowBtn');
  let banner = document.querySelector('.background');
  let canvas = document.getElementById('dots');
  let ctx = canvas.getContext('2d');
  
  // Set initial canvas size based on banner dimensions
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;

  let dots = [];
  const colors = ['#87CEEB', '#FBFF33', '#FF5733', '#33FF3B', '#D133FF'];
  for (let i = 0; i < 60; i++) {
      dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * 5)]
      });
  }

  const drawDots = () => {
      dots.forEach(dot => {
          ctx.fillStyle = dot.color;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fill();
      });
  };
  
  drawDots();

  banner.addEventListener('mousemove', (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      let mouse = {
          x: event.pageX - banner.getBoundingClientRect().left,
          y: event.pageY - banner.getBoundingClientRect().top
      };
      dots.forEach(dot => {
          let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
          if (distance < 250) {
              ctx.strokeStyle = dot.color;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
          }
      });
  });

  banner.addEventListener('mouseout', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
  });

  window.addEventListener('resize', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;

      dots = [];
      for (let index = 0; index < 60; index++) {
          dots.push({
              x: Math.floor(Math.random() * canvas.width),
              y: Math.floor(Math.random() * canvas.height),
              size: Math.random() * 3 + 2,
              color: colors[Math.floor(Math.random() * 5)]
          });
      }
      drawDots();
  });
});
