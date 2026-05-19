"use client";

import { useEffect, useRef, useState } from "react";


const FRAME_WIDTH = 264;
const FRAME_HEIGHT = 202;

const START_X = 10;
const GROUND_Y = 100;

const JUMP_FORCE = 18;
const GRAVITY = 1.0;

const PLAYER_COLLISION_WIDTH = 70;
const PLAYER_COLLISION_HEIGHT = 120;

const framePositions = [0, 230, 540, 810, 1080, 1429, 1620];


export default function Player({ 
  sprite,
  cameraXRef,
  setCameraY,
  platforms,
  setActiveTimeline,
  controlsRef,
  setSkyProgress,
  setHasDropped,
  dataPlatforms = [],
  setActiveData,
  setActivePlatform,
  activePlatform,
  setPlayerX
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
  const viewportHeightRef = useRef(0);
  const platformsRef = useRef(platforms);
  platformsRef.current = platforms;
  const lastHasDroppedSyncRef = useRef(false);
  const lastActiveDataRef = useRef(null);
  const activatedPlatformsRef = useRef(new Set());
  const triggeredPlatformRef = useRef(null);

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
      description: "Helped Improve conversion rates by helping build a new website",
    },
    {
      x: 2800,
      title: "Nteractive",
      subtitle: "Front End Devleoper",
      description: "Improved conversion & UX...",
    },
  ];

  useEffect(() => {
  const updateHeight = () => {
    viewportHeightRef.current = window.innerHeight;
  };

  updateHeight(); // initial set
  window.addEventListener("resize", updateHeight);

  return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    playerRef.current = player;
  }, [player]);

  useEffect(() => {
    platformsRef.current = platforms;
  }, [platforms]);

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
  

    // horizontal camera
    const camX = Math.max(0, playerX - offset);
    cameraXRef.current = camX;

    // vertical camera (ONLY after drop)
    if (hasDroppedRef.current) {

      const playerY = playerRef.current.y;

      const targetY = playerY - 239;

      setCameraY(prev => {
        const next = prev + (targetY - prev) * 0.1;

        if (Math.abs(next - prev) < 0.1) {
          return prev;
        }

        return next;
      });
    } else {
      setCameraY(prev => {
        const next = prev + (0 - prev) * 0.1;

        if (Math.abs(next - prev) < 0.1) {
          return prev;
        }

        return next;
      });
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

        let newVy = prev.vy;

        let onGround = false;

        const moveRight =
          keys.current.has("right") || controlsRef?.current?.has("right");

        const moveLeft =
          keys.current.has("left") || controlsRef?.current?.has("left");

        const jumpPressed =
          keys.current.has("jump") || controlsRef?.current?.has("jump");

        const SPEED = keys.current.has("shift") ? 10 : 6;

        // =========================================
        // JUMP
        // =========================================
        if (jumpPressed && prev.onGround) {
          newVy = JUMP_FORCE;
          onGround = false;
        }

        // =========================================
        // 1. HORIZONTAL MOVEMENT
        // =========================================

        const targetSpeed =
          moveRight ? SPEED :
          moveLeft ? -SPEED :
          0;

        // smooth acceleration
        let newVx = prev.vx + (targetSpeed - prev.vx) * 0.4;

         let proposedX = prev.x;

        newX = proposedX;

        proposedX += newVx;

        // SEND PLAYER POSITION TO PAGE.TSX
         /* requestAnimationFrame(() => {
            setPlayerX(newX);
          });*/


        // direction
        if (newVx > 0.5) {
          directionRef.current = "right";
        } else if (newVx < -0.5) {
          directionRef.current = "left";
        } else {
          directionRef.current = "idle";
        }

        // prevent leaving screen left
        const MIN_X = START_X;
        proposedX = Math.max(MIN_X, proposedX);

        // =========================================
        // 2. VERTICAL MOVEMENT
        // =========================================

        // gravity
        newVy -= GRAVITY;

        let proposedY = prev.y + newVy;
        const playerBottom = proposedY;
        // =========================================
        // 3. PLATFORM COLLISION
        // =========================================

        platformsRef.current.forEach((platform) => {
         
          // PLAYER RECT
          const playerLeft = proposedX;
          const playerRight = proposedX + prev.width;

          const playerTop = proposedY + prev.height;

          // PLATFORM RECT
          const platformLeft = platform.x;
          const platformRight = platform.x + platform.width;

          const platformTop = platform.y + platform.height;
          const platformBottom = platform.y;

          // =========================================
          // HORIZONTAL WALL COLLISION
          // =========================================

          const overlapY =
            playerBottom < platformTop &&
            playerTop > platformBottom;

          // RIGHT wall
          if (
            newVx > 0 &&
            prev.x + prev.width <= platformLeft &&
            playerRight > platformLeft &&
            overlapY
          ) {
            proposedX = platformLeft - prev.width;
          }

          // LEFT wall
          if (
            newVx < 0 &&
            prev.x >= platformRight &&
            playerLeft < platformRight &&
            overlapY
          ) {
            proposedX = platformRight;
          }

          // =========================================
          // LANDING COLLISION
          // =========================================

          const prevBottom = prev.y;
          

          const isFalling = newVy < 0;

          /*console.log({
            platformY: platformTop,
            prevBottom,
            playerBottom,
          });*/

          const crossedPlatform =
            prevBottom >= platformTop &&
            playerBottom <= platformTop;

          const overlapX =
            playerRight > platformLeft &&
            playerLeft < platformRight;

          if (
            isFalling &&
            crossedPlatform &&
            overlapX
          ) {
            //console.log("LANDED");
            proposedY = platformTop;
            newVy = 0;
            onGround = true;
          }

        });

        // =========================================
        // WORLD GROUND
        // =========================================

        const LOWER_GROUND = 20;

        const groundLevel =
          hasDroppedRef.current
            ? LOWER_GROUND
            : GROUND_Y;

        if (proposedY <= groundLevel) {
          proposedY = groundLevel;
          newVy = 0;
          onGround = true;
        }

        // =========================================
        // DROP ZONE
        // =========================================

        if (newX >= 2956 && !hasDroppedRef.current) {
          hasDroppedRef.current = true;
          newVy = -12;
        }

        // =========================================
        // RETURN TO TOP WORLD
        // =========================================

        if (newX < 2956 && hasDroppedRef.current) {
          hasDroppedRef.current = false;
          newVy = 0;
        }

        // =========================================
        // DATA PLATFORMS
        // =========================================

        /*const activeDataPlatform = dataPlatforms.find((p) => {

          const withinX =
            newX + prev.width > p.x &&
            newX < p.x + p.width;

          const onTop =
            Math.abs((proposedY + prev.height) - p.y) < 20;

          return withinX && onTop;

        });

        const nextActiveData = activeDataPlatform || null;

        if (nextActiveData?.id !== lastActiveDataRef.current?.id) {

          lastActiveDataRef.current = nextActiveData;

          setActiveData(nextActiveData);

        }*/

        

        let onSkillsPlatform = false;

        platformsRef.current.forEach((platform) => {

          const playerLeft = newX;
          const playerRight = newX + prev.width;

          const overlapX =
            playerRight > platform.x + 10 &&
            playerLeft < platform.x + platform.width - 10;

          const overlapY =
            Math.abs(proposedY - platform.y) < 40 ;

          const standingOnThisPlatform =
            overlapX && overlapY;

          if (
            standingOnThisPlatform &&
            platform.id === "skills-platform"
          ) {

            onSkillsPlatform = true;

          }

        });

        const nearSkillsZone =
        newX > 3300 &&
        newX < 3500;


        // OPEN MODAL
        if (
          nearSkillsZone &&
          activePlatform?.id !== "skills-platform"
        ) {

          requestAnimationFrame(() => {
            setActivePlatform({
              id: "skills-platform",
            });
          });

        }

        // CLOSE MODAL
        if (
          !onSkillsPlatform
        ) {
          
          requestAnimationFrame(() => {
            setActivePlatform((prev) => {
              return prev ? null : prev;
            });
          });

        }

      

        return {
          ...prev,
          x: proposedX,
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
    
    }; // main loop ends

      if (hasDroppedRef.current !== lastHasDroppedSyncRef.current) {
        lastHasDroppedSyncRef.current = hasDroppedRef.current;
        setHasDropped(hasDroppedRef.current);
      }

      

      animationRef.current = requestAnimationFrame(loop);

        return () => {
          cancelAnimationFrame(animationRef.current);
          loopRunning.current = false;
        };
  }, []);

  useEffect(() => {
    const syncDropState = () => {
      setHasDropped(hasDroppedRef.current);

      requestAnimationFrame(syncDropState);
    };

    requestAnimationFrame(syncDropState);
  }, []);

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
        bottom: player.onGround && player.y > GROUND_Y
        ? player.y - 70
        : player.y,
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