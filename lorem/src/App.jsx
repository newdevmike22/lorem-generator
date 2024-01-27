import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";
import emoji from "./assets/bored2_emoji.png";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="w-[80vw] max-w-[40rem] my-[10rem] mx-auto">
      <img src={emoji} alt="angry emoji" className="w-[350px] h-auto mx-auto mb-5 hover:animate-ping cursor-pointer" />
      <h4 className="text-[2rem] text-center uppercase font-semibold">tired of the same old<br/>boring lorem ipsum?</h4>
      <form 
        className="capitalize tracking-wide mt-8 mb-16 flex justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
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
        <button className="btn self-stretch uppercase font-semibold" type="submit">
          generate
        </button>
      </form>
      <article>
        {text.map((item) => {
          return (
            <p key={nanoid()} className="leading-[2] mb-8">
              {item}
            </p>
          )
        })}
      </article>
    </section>
  )
}

export default App;