import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { userLogged } from "../userData";
import "./Timeline.css";

export function Timeline() {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      name: "Jady Godoi",
      user: "@jadygodoi",
      photo: "https://github.com/jady-sm-godoi.png",
      text: `Muito legal esse projeto!`,
    },
    {
      id: 2,
      name: "Cesar Godoi",
      user: "@cesargodoi",
      photo: "https://github.com/cesargodoi.png",
      text: `Meu primeiro tweet!!!🔥`,
    },
    {
      id: 3,
      name: "Bruno Rocha",
      user: "@brunorocha",
      photo: "https://github.com/rochacbruno.png",
      text: `Grande dia!!!🔥`,
    },
  ]);

  const [inputTweet, setInputTweet] = useState("");

  const [tweet, setTweet] = useState({
    id: 0,
    name: userLogged.name,
    user: userLogged.user,
    photo: userLogged.photo,
    text: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTweets([tweet, ...tweets]);
    setInputTweet("");
  };

  const handeHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([tweet, ...tweets]);
      setInputTweet("");
    }
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputTweet(e.target.value);
    setTweet({
      id: tweets.length + 1,
      name: userLogged.name,
      user: userLogged.user,
      photo: userLogged.photo,
      text: inputTweet,
    });
  };

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={handleSubmit} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src={userLogged.photo} alt={userLogged.name} />
          <textarea
            onChange={(e) => handleInput(e)}
            onKeyDown={handeHotKeySubmit}
            id="tweet"
            placeholder="What's happening?"
            value={inputTweet}
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          name={tweet.name}
          user={tweet.user}
          photo={tweet.photo}
          text={tweet.text}
        />
      ))}
    </main>
  );
}
