import { PaperPlaneRight } from "phosphor-react";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { userLogged } from "../userData";
import "./Status.css";

export function Status() {
  const [answers, setAnswers] = useState([
    {
      id: 1,
      name: "Jady Godoi",
      user: "@jadygodoi",
      photo: "https://github.com/jady-sm-godoi.png",
      text: `Muito legal!`,
    },
    {
      id: 2,
      name: "Cesar Godoi",
      user: "@cesargodoi",
      photo: "https://github.com/cesargodoi.png",
      text: `Top 10 de 10 🔥`,
    },
    {
      id: 3,
      name: "Bruno Rocha",
      user: "@brunorocha",
      photo: "https://github.com/rochacbruno.png",
      text: `Good job!🔥`,
    },
  ]);

  const [inputAnswer, setInputAnswer] = useState("");

  const [answer, setAnswer] = useState({
    id: 0,
    name: userLogged.name,
    user: userLogged.user,
    photo: userLogged.photo,
    text: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAnswers([answer, ...answers]);
    setInputAnswer("");
  };

  const handeHotKeySubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setAnswers([answer, ...answers]);
      setInputAnswer("");
    }
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputAnswer(e.target.value);
    setAnswer({
      id: answers.length + 1,
      name: userLogged.name,
      user: userLogged.user,
      photo: userLogged.photo,
      text: inputAnswer,
    });
  };

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet
        name={userLogged.name}
        photo={userLogged.photo}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus sapiente autem exercitationem commodi praesentium, delectus porro modi neque magnam aut, quo est pariatur nulla. Alias nemo incidunt quidem maiores."
        user={userLogged.user}
      />

      <Separator />

      <form onSubmit={handleSubmit} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/jady-sm-godoi.png" alt="Jady Godoi" />
          <textarea
            onChange={(e) => handleInput(e)}
            onKeyDown={handeHotKeySubmit}
            value={inputAnswer}
            id="tweet"
            placeholder="Tweet your answer"
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet
          key={answer.id}
          name={answer.name}
          user={answer.user}
          photo={answer.photo}
          text={answer.text}
        />
      ))}
    </main>
  );
}
