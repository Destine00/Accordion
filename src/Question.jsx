import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info }) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>

        <button
          className="question-btn"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          {showText ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showText && <p>{info}</p>}
    </div>
  );
}
export default Question;
