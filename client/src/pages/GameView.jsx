import React, { useState, useEffect, useRef, useCallback } from "react";
import swal from "sweetalert";
export function GameView(props) {
  // Define state variables using useState hook
  const [options, setOptions] = useState(
    "abcdefghijklmnopqrstuvwxyz0123456789".split("")
  );
  const [counter, setCounter] = useState(20);
  const [optionsPlaying, setOptionsPlaying] = useState([]);
  const [speed, setSpeed] = useState(0.9);
  const [score, setScore] = useState(0);

  // Define other variables using useRef hook
  const gameTime = useRef(0);
  const intSpeed = 50;
  const spawnRate = intSpeed * 5;
  const interval = useRef(null);
  const intervalCounter = useRef(null);

  // Define functions using useCallback hook
  const randomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const addNewItem = () => {
    if (options.length > 0) {
      const index = randomIntInRange(0, options.length);
      let item = {
        character: options[index],
        xPosition: randomIntInRange(5, 95),
        yPosition: -20,
        active: true,
        remove: false,
      };
      setOptionsPlaying((prevOptionsPlaying) => [...prevOptionsPlaying, item]);
      setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
    }
  };

  const updatePositions = () => {
    setOptionsPlaying((prevOptionsPlaying) => {
      let options = [];
      prevOptionsPlaying.forEach(function (val) {
        if (val.active) {
          val.yPosition += speed;
        }
        if (val.yPosition > 100 && val.active) {
          val.active = false;
          val.deathTimer = 0;
        }
        if (!val.active) {
          val.deathTimer++;
        }
        if (val.deathTimer > 20) {
          val.remove = true;
        }
        if (val.remove) {
          setOptions((prevOptions) => [...prevOptions, val.character]);
        } else {
          options.push(val);
        }
      });
      return options;
    });
  };

  const onGameOver = () => {
    clearInterval(intervalCounter.current);
    clearInterval(interval.current);
    clearInterval(intervalCounter.current);
    swal("Game Over!", `your score is ${score}`, "error");
    // setTimeout(() => {
    //   swal("Game Over!", `your score is ${score}`, "error");
    // }, 500);
  };

  const gameInterval = () => {
    if (counter <= 0) {
      onGameOver();
    } else {
      if (gameTime.current % spawnRate === 0) {
        addNewItem();
      }
      if (document.querySelector("input")) {
        document.querySelector("input").focus();
      }
      updatePositions();
      gameTime.current += intSpeed;
    }
  };

  const handleUserKeyInput = (e) => {
    let val = e.target.value.toLowerCase();
    let found = false;
    optionsPlaying.forEach((el, index, arr) => {
      if (val === el.character && el.active) {
        found = true;
        setOptionsPlaying((prevOptionsPlaying) => {
          prevOptionsPlaying[index].active = false;
          prevOptionsPlaying[index].deathTimer = 0;
          return [...prevOptionsPlaying];
        });
        setScore((prevScore) => prevScore + 1);
      }
    });
    if (!found) {
      setScore((prevScore) => prevScore - 1);
    }
    e.target.value = "";
  };

  // Use useEffect hook to mimic componentDidMount and componentWillUnmount
  useEffect(() => {
    interval.current = setInterval(gameInterval, intSpeed);
    return () => {
      clearInterval(interval.current);
    };
  }, [gameInterval]);

  useEffect(() => {
    intervalCounter.current = setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(intervalCounter.current);
  }, [counter]);
  // Return the JSX element to render
  return (
    <div
      style={{
        padding: "0 1rem",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        animation: "slide-in forwards .5s",
        transition: ".5s",
      }}
      onClick={() => {
        document.querySelector("input").focus();
      }}
    >
      <h1 style={{ color: "red", fontSize: "50px", textAlign: "center",marginTop:"100px" }}>
        <b>{counter}</b>
      </h1>
      <h1>Score: {score}</h1>
      <input
        type="text"
        autoFocus
        onChange={handleUserKeyInput}
        style={{ opacity: 0, fontSize: "20px" }}
      />
      {optionsPlaying.map((val) => {
        const style = {
          position: "absolute",
          left: `${Math.round(val.xPosition)}vw`,
          top: 0,
          fontSize: "2rem",
          border: "2px solid black",
          padding: ".5rem",
          transform: `translate(-50%,${val.yPosition}vh)`,
          transition: `${intSpeed}ms`,
        };
        if (!val.active) {
          style.transform = `translate(-50%,${val.yPosition}vh) scale(2) rotate(360deg)`;
          style.opacity = 0;
          style.transition = "500ms";
        }
        return (
          <h3 style={style} key={val.character}>
            {val.character}
          </h3>
        );
      })}
    </div>
  );
}
