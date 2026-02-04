import { useRef, useState } from "react";

export function ScrambleText({ text = "", speed = 50 }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const startScramble = () => {
    let index = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) =>
            i < index
              ? char
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );

      if (index >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      index++;
    }, speed);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className="inline-block"
    >
      {displayText.split("").map((char, i) => (
        <span
          key={i}
          className={i < 7 ? "text-red-600" : "text-white"}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
