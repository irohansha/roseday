import { useEffect, useState } from "react";
import "./RoseDay.css";

export default function RoseDay() {
  const fullName = "@kshita"; // 👉 change name here
  const [text, setText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hearts-bg"></div>

      <div className="card">
        <h1>Happy Rose Day 🌹</h1>

        <h2 id="typewriter">{text}</h2>

        <p>
          A rose for your smile,
          <br />
          <br />
          just for you ❤️
        </p>

        <button onClick={() => setShowMessage(true)}>
          Open My Heart 💖
        </button>

        {showMessage && (
          <div id="hiddenText">
            You make ordinary moments feel special 🌸
            <br />
            Happy Rose Day ❤️
          </div>
        )}
      </div>
    </>
  );
}
