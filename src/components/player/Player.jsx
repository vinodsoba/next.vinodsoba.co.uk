"use client";

import { useEffect, useRef, useState } from "react";


const FRAME_WIDTH = 264;
const FRAME_HEIGHT = 202;

const START_X = 10;
const GROUND_Y = 100;

const JUMP_FORCE = 26;
const GRAVITY = 1.0;

const LOWER_GROUND_Y = -300;

const PLAYER_COLLISION_WIDTH = 70;
const PLAYER_COLLISION_HEIGHT = 120;

const framePositions = [0, 230, 540, 810, 1080, 1429, 1620];


export default function Player({ 
  sprite, 
  cameraXRef, 
  setCameraY,
  platforms = [], 
  setActiveTimeline,
  controlsRef,
  setSkyProgress,
  setHasDropped,
}) {
  
  const directionRef = useRef("idle");
  const animationRef = useRef(null);
  const keys = useRef(new Set());
  const loopRunning = useRef(false);
  const justPressed = useRef(new Set());
  const isMobileRef = useRef(false);
  const lastCheckpointRef = useRef(null);
  const controlsRefStable = useRef(new Set());
  const hasDroppedRef = useRef(false);
  const prevSkyProgressRef = useRef(0);


  const [player, setPlayer] = useState({
  x: START_X,
  y: GROUND_Y,
  vx: 0,
  vy: 0,
  width: PLAYER_COLLISION_WIDTH,
  height: PLAYER_COLLISION_HEIGHT,
    onGround: true,
  });

  const playerRef = useRef(player);

  const timeline = [
    {
      x: 2400,
      title: "Addison Lee",
      subtitle: "Senior Developer",
      description: "Led ecommerce growth for Nordic Spirit...",
    },
    {
      x: 2800,
      title: "Warner Bros Discovery",
      subtitle: "Digital Specialist",
      description: "Improved conversion & UX...",
    },
  ];

  useEffect(() => {
    playerRef.current = player;
  }, [player]);

  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 768;
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    controlsRefStable.current = controlsRef.current;
  }, [controlsRef]);

  // CAMERA FOLLOW
  useEffect(() => {
    const screenWidth = window.innerWidth;
    const offset = isMobileRef.current
      ? Math.max(120, screenWidth * 0.35)
      : 300;

    const playerX = playerRef.current.x;
    const playerY = playerRef.current.y;

    // horizontal camera
    const camX = Math.max(0, playerX - offset);
    cameraXRef.current = camX;

    // vertical camera (ONLY after drop)
    if (hasDroppedRef.current) {
      const targetY = -(playerY - 200);
      setCameraY(prev => prev + (targetY - prev) * 0.1); // smooth follow
    } else {
    setCameraY(prev => prev + (0 - prev) * 0.1);
  }

  }, [player.x, player.y]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "ArrowRight") {
        keys.current.add("right");
        justPressed.current.add("right");
      }
      if (e.code === "ArrowLeft") {
        keys.current.add("left");
        justPressed.current.add("left");
      }
      if (e.code === "ShiftLeft") keys.current.add("shift");

      if (e.code === "Space") {
        e.preventDefault();

        setPlayer((prev) => {
          if (!prev.onGround) return prev;

          return {
            ...prev,
            vy: JUMP_FORCE,
            onGround: false,
          };
        });
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === "ArrowRight") keys.current.delete("right");
      if (e.code === "ArrowLeft") keys.current.delete("left");
      if (e.code === "ShiftLeft") keys.current.delete("shift");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (loopRunning.current) return; // prevents duplicate loops
    loopRunning.current = true;

    

  const loop = () => {
  
     // TIMELINE CHECK (SAFE HERE)
    const checkpoint = timeline.find(item => {
      return Math.abs(playerRef.current.x - item.x) < 100;
    });

    if (checkpoint && checkpoint !== lastCheckpointRef.current) {
      setActiveTimeline(checkpoint);
      lastCheckpointRef.current = checkpoint;
       
    }

    if (!checkpoint && lastCheckpointRef.current !== null) {
      setActiveTimeline(null);
      lastCheckpointRef.current = null;
    }

      setPlayer(prev => {

      let newX = prev.x;
      let newY = prev.y;
      let newVy = prev.vy;

      let onGround = false;

      const moveRight =
        keys.current.has("right") || controlsRef?.current?.has("right");

      const moveLeft =
        keys.current.has("left") || controlsRef?.current?.has("left");

      const jumpPressed =
        keys.current.has("jump") || controlsRef?.current?.has("jump");

      const SPEED = keys.current.has("shift") ? 10 : 6;

      // JUMP
      if (jumpPressed && prev.onGround) {
        newVy = JUMP_FORCE;
      }

      // =========================================
      // 1. HORIZONTAL MOVEMENT + COLLISION
      // =========================================
      let proposedX = prev.x;

      // target velocity based on input
      const targetSpeed = moveRight ? SPEED : moveLeft ? -SPEED : 0;

      // smooth acceleration
      let newVx = prev.vx + (targetSpeed - prev.vx) * 0.4;

      // apply movement
      proposedX += newVx;

      if (newVx > 0.5) {
        directionRef.current = "right";
      } else if (newVx < -0.5) {
        directionRef.current = "left";
      } else {
        directionRef.current = "idle";
      }

      // clamp player to move off screen to the left
      const MIN_X = START_X; // or 0
      proposedX = Math.max(MIN_X, proposedX);

      const playerTop = prev.y + prev.height;
      const playerBottom = prev.y;

      platforms.forEach(platform => {
        const platformLeft = platform.x;
        const platformRight = platform.x + platform.width;
        const platformTop = platform.y + platform.height;
        const platformBottom = platform.y;

        const willOverlapY =
          playerTop > platformBottom &&
          playerBottom < platformTop;

        // RIGHT collision
        if (
          newVx > 0 &&
          prev.x + prev.width <= platformLeft &&
          proposedX + prev.width > platformLeft &&
          willOverlapY
        ) {
          proposedX = platformLeft - prev.width;
        }

        // =========================
        // LEFT collision 
        // =========================
        if (
          newVx < 0 &&
          prev.x >= platformRight - 2 && 
          proposedX < platformRight &&
          willOverlapY
        ) {
          proposedX = platformRight;
        }
      });

      newX = proposedX;

      /*console.log({
        newVx,
        prevX: prev.x,
        proposedX,
      });*/

      // =========================================
      // 2. VERTICAL MOVEMENT + COLLISION
      // =========================================

      newVy -= GRAVITY;
      let proposedY = prev.y + newVy;

      const playerLeft = newX;
      const playerRight = newX + prev.width;

      platforms.forEach(platform => {
        const prevBottom = prev.y;
        const newBottom = proposedY;
        const platformTop = platform.y + platform.height;

        const isFalling = newVy <= 0;

        const isCrossing =
          prevBottom >= platformTop &&
          newBottom <= platformTop;

        const isWithinX =
          playerRight > platform.x &&
          playerLeft < platform.x + platform.width;

        if (isFalling && isCrossing && isWithinX) {
          proposedY = platformTop;
          newVy = 0;
          onGround = true;
        }
      });

      // GROUND
      
      const groundLevel = hasDroppedRef.current ? LOWER_GROUND_Y : GROUND_Y;

      if (proposedY <= groundLevel) {
        proposedY = groundLevel;
        newVy = 0;
        onGround = true;
      }

      // drop zone
    

      if (newX >= 2956 && !hasDroppedRef.current) {
        hasDroppedRef.current = true;
        newVy = -20;

        // ✅ only trigger once
        setTimeout(() => setHasDropped(true), 0);
      }

      // RETURN TO TOP LEVEL
      if (newX < 2956 && hasDroppedRef.current) {
        hasDroppedRef.current = false;

        newVy = 0;
        onGround = true;

        setTimeout(() => setHasDropped(false), 0);
      }

      return {
        ...prev,
        x: newX,
        y: proposedY,
        vx: newVx,
        vy: newVy,
        onGround,
      };
    });

    const START = 1200;
    const END = 1900;

    const currentX = playerRef.current.x;

    const progress = Math.min(
      Math.max((currentX - START) / (END - START), 0),
      1
    );

    if (Math.abs(prevSkyProgressRef.current - progress) > 0.02) {
      setSkyProgress(progress);
      prevSkyProgressRef.current = progress;
    }

    animationRef.current = requestAnimationFrame(loop);
    
  };

  animationRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationRef.current);
      loopRunning.current = false;
    };
  }, [platforms]);

  let row = 0;
  let currentFrameIndex = 0;

  if (directionRef.current === "right") {
    row = 0;
    currentFrameIndex = 1;
  }

  if (directionRef.current === "left") {
    row = 1;
    currentFrameIndex = 1;
  }

 if (!player.onGround) {
  currentFrameIndex = player.vy > 0 ? 5 : 5;
 }

  return (
    <div
      style={{
        position: "absolute",
        left: playerRef.current.x - cameraXRef.current,
        bottom: player.y,
        transform: "scale(0.5)", 
        transformOrigin: "bottom left",
        zIndex: 10,
        width: FRAME_WIDTH,
        height: FRAME_HEIGHT,
        backgroundImage: `url(${sprite})`,
        backgroundSize: `auto ${FRAME_HEIGHT * 2}px`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${framePositions[currentFrameIndex]}px -${
          row * FRAME_HEIGHT
        }px`,
      }}
    />
  );
}