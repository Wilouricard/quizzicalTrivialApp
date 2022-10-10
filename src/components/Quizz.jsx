import React from "react";
import Question from "./Question";

export default function Start(){

    function playQuizz() {
        // console.log("clicked");
        // const startQuizz = document.getElementById("start");
        // startQuizz.classList.add("hidden")
    }

    return (
        <main id="quizz" className="text-center flex flex-col">
            <Question />
            <button className="bg-blue-main py-3 rounded-2xl hover:opacity-90  text-background-main active:bg-background-main active:text-blue-main active:border-2" onClick={playQuizz}>Check answers</button>
        </main>
    )
}