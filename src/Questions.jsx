import Question from "./Question";

function Questions({ questions }) {
  return (
    <div className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </div>
  );
}
export default Questions;
