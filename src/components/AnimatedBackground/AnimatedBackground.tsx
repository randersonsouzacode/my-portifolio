import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  closest: Point[];
  active: number;
  radius: number;
};

const LINE_COLOR = "156, 217, 249"; // cor das linhas (R, G, B)
const COLS = 20; // colunas de pontos
const ROWS = 20; // linhas de pontos
const CONNECTIONS = 5; // vizinhos ligados a cada ponto

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let frameId = 0;
    const pointer = { x: -9999, y: -9999 };

    const distSq = (a: { x: number; y: number }, b: { x: number; y: number }) =>
      (a.x - b.x) ** 2 + (a.y - b.y) ** 2;

    const newTarget = (p: Point) => {
      p.targetX = p.originX - 50 + Math.random() * 100;
      p.targetY = p.originY - 50 + Math.random() * 100;
    };

    const createPoints = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      const stepX = width / COLS;
      const stepY = height / ROWS;
      points = [];

      for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
          const x = i * stepX + Math.random() * stepX;
          const y = j * stepY + Math.random() * stepY;
          const p: Point = {
            x, y,
            originX: x, originY: y,
            targetX: x, targetY: y,
            closest: [],
            active: 0,
            radius: 2 + Math.random() * 2,
          };
          newTarget(p);
          points.push(p);
        }
      }

      for (const p of points) {
        p.closest = points
          .filter((q) => q !== p)
          .sort((a, b) => distSq(p, a) - distSq(p, b))
          .slice(0, CONNECTIONS);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of points) {
        p.x += (p.targetX - p.x) * 0.02;
        p.y += (p.targetY - p.y) * 0.02;
        if (Math.abs(p.targetX - p.x) < 1 && Math.abs(p.targetY - p.y) < 1) {
          newTarget(p);
        }

        const d = distSq(pointer, p);
        if (d < 4000) p.active = 0.3;
        else if (d < 20000) p.active = 0.1;
        else if (d < 40000) p.active = 0.02;
        else p.active = 0;

        if (p.active === 0) continue;

        for (const q of p.closest) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${p.active})`;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${LINE_COLOR}, ${p.active + 0.3})`;
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = clientX - rect.left;
      pointer.y = clientY - rect.top;
    };

    const onMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) updatePointer(t.clientX, t.clientY);
    };

    createPoints();
    draw();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", createPoints);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", createPoints);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default AnimatedBackground;