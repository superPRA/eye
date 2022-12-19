import React from "react";
import "./App.css";

function App() {
  const [style, setStyle] = React.useState({
    bottom: "0px",
    left: "0px",
  });

  function mouseMoveHandle(
    e: any,
    CenterOfTheEye: { x: number; y: number }
  ): {
    distance: number;
    Xdistance: number;
    Ydistance: number;
    cosine: number;
    sine: number;
    cordinate: {
      x: string;
      y: string;
    };
  } {
    const Xdistance: number = CenterOfTheEye.x - e.pageX;
    const Ydistance: number = CenterOfTheEye.y - e.pageY;
    const distance: number = Math.sqrt(
      Xdistance * Xdistance + Ydistance * Ydistance
    );
    const cosine: number = Ydistance / distance;
    const sine: number = Xdistance / distance;

    const XeyeBall: number = -sine * 30;
    const YeyeBall: number = cosine * 30;

    setStyle({
      bottom: YeyeBall.toString() + "px",
      left: XeyeBall.toString() + "px",
    });

    return {
      distance: distance,
      Xdistance: Xdistance,
      Ydistance: Ydistance,
      cosine: cosine,
      sine: sine,
      cordinate: {
        x: XeyeBall.toString() + "px",
        y: YeyeBall.toString() + "px",
      },
    };
  }

  return (
    <div
      className="h-screen bg-red-600"
      onMouseMove={(e) =>
        mouseMoveHandle(e, {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        })
      }
    >
      <div
        className="h-[100px] w-[100px] bg-slate-400 rounded-full mx-auto flex justify-center items-center absolute center"
        id="eyeBall"
      >
        <div
          className="h-[40px] w-[40px] bg-black rounded-full relative"
          style={style}
        ></div>
      </div>
    </div>
  );
}

export default App;
