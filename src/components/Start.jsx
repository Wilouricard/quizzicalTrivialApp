import React from "react";

export default function Start(){

    function playQuizz() {
        // console.log("clicked");
        const startQuizz = document.getElementById("start");
        startQuizz.classList.add("hidden")
    }

    return (
        <main id="start" className="text-center flex flex-col gap-4">
            <h1 className="text-blue-text font-bold text-5xl">Quizzical</h1>
            <p className="text-blue-text">Vite.js React.js TailwindCSS quizz app</p>
            <button className="bg-blue-main py-3 rounded-2xl hover:opacity-90  text-background-main active:bg-background-main active:text-blue-main active:border-2" onClick={playQuizz}>Start Quizz</button>
        </main>
    )
}