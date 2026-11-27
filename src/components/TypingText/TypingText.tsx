import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { keyframes } from "@mui/system";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

type TypingTextProps = TypographyProps & {
  text: string;
  speed?: number; // milissegundos por letra
};

const TypingText = ({ text, speed = 100, ...props }: TypingTextProps) => {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <Typography {...props}>
      {shown}
      <span style={{ animation: `${blink} 1s step-end infinite` }}>|</span>
    </Typography>
  );
};

export default TypingText;