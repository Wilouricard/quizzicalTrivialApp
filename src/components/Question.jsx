import React from "react";

export default function Question() {
    window.onload = sendApiRequest
    
    const [quiz, setQuiz] = React.useState([])
    async function sendApiRequest(){
        let response = await fetch("https://opentdb.com/api.php?amount=5&category=17&type=multiple");
        // console.log(response);
        let data = await response.json()
        console.log(data.results);

        setQuiz(data.results[0])
    }

  return (
    <div>
      <div className="w-[600px]">
        <h1 className="text-blue-text font-bold text-start pb-4">
          {quiz.question}
        </h1>
        <div className="flex gap-4">
          <button className="border-[1px] border-blue-text text-blue-text rounded-lg py-1 px-4">
            {quiz.correct_answer}
          </button>
          <button className="border-[1px] border-blue-text text-blue-text rounded-lg py-1 px-4">
            {quiz.incorrect_answers}
          </button>
          <button className="border-[1px] border-blue-text text-blue-text rounded-lg py-1 px-4">
            {quiz.incorrect_answers}
          </button>
          <button className="border-[1px] border-blue-text text-blue-text rounded-lg py-1 px-4">
            {quiz.incorrect_answers}
          </button>
        </div>
        <hr className="my-4 text-selected"></hr>
      </div>
    </div>
  );
}
