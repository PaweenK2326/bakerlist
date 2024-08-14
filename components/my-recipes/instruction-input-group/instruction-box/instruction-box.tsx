"use client";

import { useState } from "react";
import classes from "./instruction-box.module.css";
import { InputBase } from "@mui/material";

interface BoxProps {
  id: string;
}

export default function InstructionBox(props: BoxProps) {
  const { id } = props;
  const [inputCount, setInputCount] = useState(2);

  function handleInputEvent(e: any) {
    if (e.keyCode === 13) {
      //13 is the key code for Enter
      e.preventDefault();
      const nextInput = document.getElementById(
        `${id}_${parseInt(e.target.id.split("_").pop()) + 1}`
      );
      if (nextInput) {
        nextInput.focus();
      } else {
        setInputCount(inputCount + 1);
        setTimeout(() => {
          document
            .getElementById(
              `${id}_${parseInt(e.target.id.split("_").pop()) + 1}`
            )!
            .focus();
        }, 0);
      }
    } else if (e.keyCode === 38) {
      //38 is the key code for ArrowUp
      e.preventDefault();
      const previousInput = document.getElementById(
        `${id}_${parseInt(e.target.id.split("_").pop()) - 1}`
      );
      if (previousInput) {
        previousInput.focus();
      }
    } else if (e.keyCode === 40) {
      //40 is the key code for ArrowDown
      e.preventDefault();
      const nextInput = document.getElementById(
        `${id}_${parseInt(e.target.id.split("_").pop()) + 1}`
      );
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  return (
    <div className={classes.box}>
      {[...Array(inputCount)].map((_, i) => (
        <div className="flex gap-x-4 w-full items-baseline" key={i}>
          <div>{`${i + 1}.`}</div>
          <div className="flex-1">
            <InputBase
              id={`${id}_${i}`}
              className="text-[#4A4A4A]"
              placeholder={i === 0 ? "ขั้นตอนที่ 1" : "..."}
              fullWidth
              multiline
              onKeyDown={(e) => handleInputEvent(e)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
