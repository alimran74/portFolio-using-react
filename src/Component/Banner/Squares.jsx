import { useRef, useEffect } from 'react';
import './Squares.css';

const Squares = ({
  direction = 'down',
  speed = 4,
  borderColor = '#E5E7EB',      // Light border
  squareSize = 40,
  hoverFillColor = '#2563EB',   // Accent on hover
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);
  const dimensions = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      dimensions.current = { w: canvas.width, h: canvas.height };
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = () => {
      const { w, h } = dimensions.current;
      ctx.clearRect(0, 0, w, h);

      const startX = -gridOffset.current.x % squareSize;
      const startY = -gridOffset.current.y % squareSize;

      for (let x = startX; x < w; x += squareSize) {
        for (let y = startY; y < h; y += squareSize) {
          const col = Math.floor((x + gridOffset.current.x) / squareSize);
          const row = Math.floor((y + gridOffset.current.y) / squareSize);

          if (
            hoveredSquare.current &&
            hoveredSquare.current.x === col &&
            hoveredSquare.current.y === row
          ) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(x, y, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      // Optional gradient overlay
      const gradient = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        Math.sqrt(w * w + h * h) / 2
      );
      gradient.addColorStop(0, 'rgba(255,255,255,0.02)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    };

    const animate = () => {
      const s = Math.max(speed, 0.1);
      switch (direction) {
        case 'left':
          gridOffset.current.x += s;
          break;
        case 'right':
          gridOffset.current.x -= s;
          break;
        case 'up':
          gridOffset.current.y += s;
          break;
        case 'down':
          gridOffset.current.y -= s;
          break;
        case 'diagonal':
          gridOffset.current.x -= s;
          gridOffset.current.y -= s;
          break;
        default:
          break;
      }
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const col = Math.floor((mouseX + gridOffset.current.x) / squareSize);
      const row = Math.floor((mouseY + gridOffset.current.y) / squareSize);

      hoveredSquare.current = { x: col, y: row };
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return <canvas ref={canvasRef} className={`squares-canvas ${className}`} />;
};

export default Squares;
