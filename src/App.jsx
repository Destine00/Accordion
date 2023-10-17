import query from "./data";
import { useState } from "react";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(query);
  
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
