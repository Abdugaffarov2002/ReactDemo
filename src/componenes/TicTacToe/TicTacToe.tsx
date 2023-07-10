import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [playground, setplayground] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [clickedAmount, setClickAmount] = useState(0);

  const [wonIndexes, setWonIndex] = useState<number[][]>([]);

  const checkPlayground = (newPlayground: string[][]) => {
    // 1 po gorizantalii

    newPlayground.forEach((row, rowIndex) => {
      const isRowWon = row.every((cell) => cell === row[0] && cell);
      if (isRowWon) {
        const rowWonIndexes = row.map((_, cellIndex) => [rowIndex, cellIndex]);
        setWonIndex(rowWonIndexes);
      }
    });

    // 2 po vertikali

    const [firstColumn, secondColumn, thirdColumn] = playground.map(
      (row, rowIndex) => {
        return;
      }
    );
  };
  console.log("wonindexes", wonIndexes);

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    console.log("position:", [rowIndex, cellIndex]);

    if (playground[rowIndex][cellIndex] || wonIndexes.length) {
      return;
    }

    const newClickedAmount = clickedAmount + 1;

    let sign = newClickedAmount % 2 ? "X" : "O";

    const newPlayground = playground.map((row, rIndex) => {
      if (rowIndex === rIndex) {
        return row.map((cell, cIndex) => (cellIndex === cIndex ? sign : cell));
      } else {
        return row;
      }
    });

    setplayground(newPlayground);
    setClickAmount(newClickedAmount);
    checkPlayground(newPlayground);
  };

  return (
    <div className="playground">
      {/* (row = ['','',''],) */}
      {playground.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => {
              return (
                <div
                  key={cellIndex}
                  className={`cell ${
                    JSON.stringify(wonIndexes).includes(
                      `[${rowIndex},${cellIndex}]`
                    )
                      ? "won"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToe;
