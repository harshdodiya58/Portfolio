"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

const GRID_SIZE = 15;
const INITIAL_SPEED = 400;

type Point = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Point[]>([{ x: 7, y: 7 }]);
  const [food, setFood] = useState<Point>({ x: 10, y: 10 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const gameRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<Direction>("RIGHT");
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Detect touch screen device
  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
    );
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    const threshold = 30; // minimum swipe distance in px

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0 && directionRef.current !== "LEFT") {
          directionRef.current = "RIGHT";
        } else if (diffX < 0 && directionRef.current !== "RIGHT") {
          directionRef.current = "LEFT";
        }
        touchStartRef.current = null;
      }
    } else {
      // Vertical swipe
      if (Math.abs(diffY) > threshold) {
        if (diffY > 0 && directionRef.current !== "UP") {
          directionRef.current = "DOWN";
        } else if (diffY < 0 && directionRef.current !== "DOWN") {
          directionRef.current = "UP";
        }
        touchStartRef.current = null;
      }
    }
  };

  // Keep focus on the game
  useEffect(() => {
    const focusTimer = setTimeout(() => {
      if (gameRef.current) {
        gameRef.current.focus();
      }
    }, 100);
    return () => clearTimeout(focusTimer);
  }, [isPlaying]);

  const generateFood = useCallback((currentSnake: Point[]) => {
    let newFood: Point;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      // eslint-disable-next-line no-loop-func
      if (!currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)) {
        break;
      }
    }
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake([{ x: 7, y: 7 }]);
    setDirection("RIGHT");
    directionRef.current = "RIGHT";
    setFood(generateFood([{ x: 7, y: 7 }]));
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = () => {
      setSnake((prev) => {
        const head = prev[0];
        const newHead = { ...head };

        switch (directionRef.current) {
          case "UP": newHead.y -= 1; break;
          case "DOWN": newHead.y += 1; break;
          case "LEFT": newHead.x -= 1; break;
          case "RIGHT": newHead.x += 1; break;
        }

        // Check collision with walls
        if (
          newHead.x < 0 || newHead.x >= GRID_SIZE ||
          newHead.y < 0 || newHead.y >= GRID_SIZE ||
          prev.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setGameOver(true);
          setIsPlaying(false);
          return prev;
        }

        const newSnake = [newHead, ...prev];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const intervalId = setInterval(moveSnake, Math.max(50, INITIAL_SPEED - score));
    return () => clearInterval(intervalId);
  }, [isPlaying, gameOver, food, score, generateFood]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
      e.preventDefault(); // prevent scrolling
      e.stopPropagation(); // stop bubbling
    }

    if (!isPlaying && e.key === "Enter") {
      resetGame();
      return;
    }

    const currentDir = directionRef.current;
    if (e.key === "ArrowUp" && currentDir !== "DOWN") directionRef.current = "UP";
    if (e.key === "ArrowDown" && currentDir !== "UP") directionRef.current = "DOWN";
    if (e.key === "ArrowLeft" && currentDir !== "RIGHT") directionRef.current = "LEFT";
    if (e.key === "ArrowRight" && currentDir !== "LEFT") directionRef.current = "RIGHT";
  };

  // Render the grid using emojis
  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
        const isHead = snake[0].x === x && snake[0].y === y;
        const isFood = food.x === x && food.y === y;
        
        let char = "·"; // Empty space
        if (isHead) char = "🐍";
        else if (isSnake) char = "🟩";
        else if (isFood) char = "🍎";
        
        row.push(
          <span 
            key={`${x}-${y}`} 
            className={`w-5 h-5 flex items-center justify-center text-sm ${
              !isSnake && !isFood ? "text-[var(--color-text-secondary)] opacity-30" : ""
            }`}
          >
            {char}
          </span>
        );
      }
      grid.push(<div key={y} className="flex">{row}</div>);
    }
    return grid;
  };

  return (
    <div 
      ref={gameRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="no-focus-steal my-4 p-4 border border-[var(--color-card)] bg-[var(--color-surface)]/80 rounded-xl max-w-fit font-mono focus:outline-none focus:border-[var(--color-accent-green)] focus:shadow-[0_0_15px_rgba(46,204,113,0.2)] transition-all relative group"
      onClick={() => gameRef.current?.focus()}
    >
      <div className="flex justify-between items-center mb-4 border-b border-[var(--color-card)] pb-2">
        <h3 className="text-[var(--color-accent-green)] font-bold flex items-center gap-2">
          <span>🐍</span> Terminal Snake
        </h3>
        <span className="text-white font-bold bg-black/40 px-3 py-1 rounded-md">SCORE: {score}</span>
      </div>
      
      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="flex flex-col items-center select-none bg-black/60 p-4 rounded-lg shadow-inner touch-none"
      >
        {renderGrid()}
      </div>

      {isTouchDevice && isPlaying && (
        <div className="flex flex-col items-center gap-2 mt-4 select-none">
          {/* Up Button */}
          <button
            onTouchStart={(e) => {
              e.preventDefault();
              if (directionRef.current !== "DOWN") directionRef.current = "UP";
            }}
            onClick={() => {
              if (directionRef.current !== "DOWN") directionRef.current = "UP";
            }}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-card)]/80 border border-[var(--color-accent-green)]/30 text-[var(--color-accent-green)] active:bg-[var(--color-accent-green)] active:text-black active:shadow-[0_0_15px_rgba(46,204,113,0.4)] transition-all text-xl font-bold font-sans"
          >
            ▲
          </button>
          
          <div className="flex gap-6">
            {/* Left Button */}
            <button
              onTouchStart={(e) => {
                e.preventDefault();
                if (directionRef.current !== "RIGHT") directionRef.current = "LEFT";
              }}
              onClick={() => {
                if (directionRef.current !== "RIGHT") directionRef.current = "LEFT";
              }}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-card)]/80 border border-[var(--color-accent-green)]/30 text-[var(--color-accent-green)] active:bg-[var(--color-accent-green)] active:text-black active:shadow-[0_0_15px_rgba(46,204,113,0.4)] transition-all text-xl font-bold font-sans"
            >
              ◀
            </button>
            
            {/* Down Button */}
            <button
              onTouchStart={(e) => {
                e.preventDefault();
                if (directionRef.current !== "UP") directionRef.current = "DOWN";
              }}
              onClick={() => {
                if (directionRef.current !== "UP") directionRef.current = "DOWN";
              }}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-card)]/80 border border-[var(--color-accent-green)]/30 text-[var(--color-accent-green)] active:bg-[var(--color-accent-green)] active:text-black active:shadow-[0_0_15px_rgba(46,204,113,0.4)] transition-all text-xl font-bold font-sans"
            >
              ▼
            </button>
            
            {/* Right Button */}
            <button
              onTouchStart={(e) => {
                e.preventDefault();
                if (directionRef.current !== "LEFT") directionRef.current = "RIGHT";
              }}
              onClick={() => {
                if (directionRef.current !== "LEFT") directionRef.current = "RIGHT";
              }}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-card)]/80 border border-[var(--color-accent-green)]/30 text-[var(--color-accent-green)] active:bg-[var(--color-accent-green)] active:text-black active:shadow-[0_0_15px_rgba(46,204,113,0.4)] transition-all text-xl font-bold font-sans"
            >
              ▶
            </button>
          </div>
        </div>
      )}

      {!isPlaying && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-xl backdrop-blur-sm z-10">
          {gameOver ? (
            <>
              <div className="text-[var(--color-accent-red)] text-2xl font-bold mb-2 glitch uppercase tracking-widest">Game Over</div>
              <div className="text-white mb-6 text-lg">Final Score: <span className="text-[var(--color-accent-green)] font-bold">{score}</span></div>
            </>
          ) : (
            <div className="text-[var(--color-accent-green)] text-2xl font-bold mb-6 tracking-widest">SNAKE OS</div>
          )}
          <button 
            onTouchStart={(e) => {
              e.preventDefault();
              resetGame();
            }}
            onClick={resetGame}
            className="px-6 py-2.5 bg-[var(--color-accent-green)] text-black font-bold rounded-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(46,204,113,0.4)]"
          >
            {gameOver ? "PLAY AGAIN" : "START GAME"}
          </button>
          <div className="text-[var(--color-text-secondary)] text-sm mt-4 animate-pulse">
            (Press ENTER, Tap or Click to Start)
          </div>
        </div>
      )}
    </div>
  );
};
