import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <div className="flex flex-wrap justify-center shadow-lg bg-white gap-3 px-3 py-3 rounded-3xl">
            <button
              // onClick={() => changeColor("red")}
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-red-500"
            >
              Red
            </button>
            <button
              // onClick={() => changeColor("green")}
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-green-600"
            >
              Green
            </button>
            <button
              // onClick={() => changeColor("blue")}
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-blue-500"
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
