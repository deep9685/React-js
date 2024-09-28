import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('#e5e7eb')

  const bgChanger = (color) => {
      setBgColor(color)
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center" style={{backgroundColor: bgColor}}>
        <div className="bg-white w-max h-max mt-10 p-5 rounded-xl flex gap-4 shadow-xl">
          <button className="bg-red-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
                  onClick={()=>bgChanger('#ef4444')}
          >
            Red
          </button>
          <button className="bg-green-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#22c55e')}
          >
            Green
          </button>
          <button className="bg-blue-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#3b82f6')}
          >
            Blue
          </button>
          <button className="bg-fuchsia-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#d946ef')}
          >
            Fushia
          </button>
          <button className="bg-gray-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#6b7280')}
          >
            Gray
          </button>
          <button className="bg-yellow-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#eab308')}
          >
            Yellow
          </button>
          <button className="bg-pink-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#ec4899')}
          >
            Pink
          </button>
          <button className="bg-purple-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#a855f7')}
          >
            Purple
          </button>
          <button className="bg-lime-500 px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#84cc16')}
          >
            Lime
          </button>
          <button className="bg-gray-200 px-4 py-1 rounded-3xl text-black drop-shadow-md"
            onClick={()=>bgChanger('#ffffff')}
          >
            White
          </button>
          <button className="bg-black px-4 py-1 rounded-3xl text-white drop-shadow-md"
            onClick={()=>bgChanger('#000000')}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
