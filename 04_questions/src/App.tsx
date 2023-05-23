import Question from "./components/Question";
import questionArray from "./data";

function App() {
  return (
    <div className="h-screen w-full bg-sky-200 flex items-center justify-center">
      <div className="max-w-[90%] w-[750px] bg-white rounded shadow-2xl flex flex-col items-center p-12">
        <h1 className="text-4xl font-bold mb-8">Questions</h1>
        <ul className="w-full">
          {questionArray.map((q) => {
            return (
              <li>
                <Question question={q.question} answer={q.answer} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
