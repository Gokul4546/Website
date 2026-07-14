"use client";

import { useEffect, useRef } from "react";

type Mode = "drift" | "converge";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

type Pulse = {
  a: number;
  b: number;
  t: number;
  speed: number;
};

const PULSE_COLOR = "55, 212, 230"; // signal cyan
const NODE_COLOR = "139, 148, 167"; // steel
const EDGE_COLOR = "46, 107, 255"; // pulse blue

/**
 * The living enterprise network. `drift` mode: free nodes forming and
 * dissolving connections (hero). `converge` mode: the same system pulled
 * toward a central point of contact (final CTA).
 *
 * Honors prefers-reduced-motion (renders one static frame), pauses when
 * the tab is hidden or the canvas leaves the viewport, and caps DPR at 2.
 */
export function NetworkBackground({
  mode = "drift",
  className,
  interactive = true,
}: {
  mode?: Mode;
  className?: string;
  interactive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = false;
    let visible = true;
    let inView = true;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const pointer = { x: -9999, y: -9999 };
    const linkDist = () => Math.min(190, Math.max(120, width / 8));

    function seed() {
      const area = width * height;
      const budget = width < 768 ? 26000 : 15500; // px² per node
      const count = Math.max(14, Math.min(84, Math.round(area / budget)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1 + Math.random() * 1.6,
      }));
      pulses = [];
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) drawFrame(); // keep the static frame fresh on resize
    }

    function step() {
      const cx = width / 2;
      const cy = height / 2;
      for (const n of nodes) {
        if (mode === "converge") {
          const dx = cx - n.x;
          const dy = cy - n.y;
          const d = Math.hypot(dx, dy) || 1;
          // gentle gravity well + orbital slip
          n.vx += (dx / d) * 0.006 + (-dy / d) * 0.0035;
          n.vy += (dy / d) * 0.006 + (dx / d) * 0.0035;
          n.vx *= 0.985;
          n.vy *= 0.985;
        }
        if (interactive && pointer.x > -999) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < 150 && d > 0.001) {
            n.vx += (dx / d) * 0.008;
            n.vy += (dy / d) * 0.008;
          }
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      // signals traveling along active edges
      if (pulses.length < 3 && Math.random() < 0.02) {
        const a = Math.floor(Math.random() * nodes.length);
        let b = -1;
        let best = linkDist();
        for (let i = 0; i < nodes.length; i++) {
          if (i === a) continue;
          const d = Math.hypot(nodes[i].x - nodes[a].x, nodes[i].y - nodes[a].y);
          if (d < best) {
            best = d;
            b = i;
          }
        }
        if (b >= 0) pulses.push({ a, b, t: 0, speed: 0.008 + Math.random() * 0.008 });
      }
      pulses = pulses.filter((p) => (p.t += p.speed) < 1);
    }

    function drawFrame() {
      ctx!.clearRect(0, 0, width, height);
      const maxD = linkDist();

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxD) {
            const alpha = (1 - d / maxD) * 0.34;
            ctx!.strokeStyle = `rgba(${EDGE_COLOR}, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pd = Math.hypot(pointer.x - n.x, pointer.y - n.y);
        const lit = interactive && pd < 150;
        ctx!.fillStyle = lit
          ? `rgba(${PULSE_COLOR}, 0.95)`
          : `rgba(${NODE_COLOR}, 0.75)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, lit ? n.r + 0.8 : n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (const p of pulses) {
        const a = nodes[p.a];
        const b = nodes[p.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI);
        ctx!.fillStyle = `rgba(${PULSE_COLOR}, ${0.9 * fade})`;
        ctx!.beginPath();
        ctx!.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(${PULSE_COLOR}, ${0.18 * fade})`;
        ctx!.beginPath();
        ctx!.arc(x, y, 7, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      if (!running) return;
      step();
      drawFrame();
      raf = requestAnimationFrame(loop);
    }

    function setRunning() {
      const next = !reduced && visible && inView;
      if (next && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!next && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    }

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      setRunning();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        setRunning();
      },
      { threshold: 0 }
    );
    const ro = new ResizeObserver(resize);

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    if (reduced) {
      // static, fully-drawn frame — no animation loop
      drawFrame();
    } else {
      running = true;
      raf = requestAnimationFrame(loop);
      document.addEventListener("visibilitychange", onVisibility);
      io.observe(canvas);
      if (interactive) {
        canvas.parentElement?.addEventListener("pointermove", onPointer);
        canvas.parentElement?.addEventListener("pointerleave", onLeave);
      }
    }
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      running = false;
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.parentElement?.removeEventListener("pointermove", onPointer);
      canvas.parentElement?.removeEventListener("pointerleave", onLeave);
    };
  }, [mode, interactive]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}

export default NetworkBackground;
