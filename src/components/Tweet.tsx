import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";

interface TweetProps {
  name: string;
  user: string;
  photo: string;
  text: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to='/status' className="tweet">
      <img src={props.photo} alt={props.name} />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{props.name}</strong>
          <span>{props.user}</span>
        </div>
        <p>{props.text}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
