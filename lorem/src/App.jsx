import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  return (
    <section className="w-[80vw] max-w-[40rem] my-[10rem] mx-auto">
      <h4 className="text-[1.56rem] text-center uppercase">tired of the same old ipsum?</h4>
      <form className="capitalize tracking-wide mt-8 mb-16 flex justify-center items-center gap-2">
        <label className="text-[1.25rem]" htmlFor="amount">paragraphs:</label>
        <input
          className="py-1 px-2 w-16 rounded-md border-transparent bg-[#cbd5e1] text-xl cursor-pointer" 
          type="number" 
          name="amount" 
          id="amount" 
          min="1" 
          step="1"
          max="8" 
          value={count} 
          onChange={((e) => setCount(e.target.value))}
        />
        <button className="btn self-stretch" type="submit">
          generate
        </button>
      </form>
    </section>
  )
}

export default App;