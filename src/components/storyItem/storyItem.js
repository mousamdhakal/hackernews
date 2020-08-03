import React from "react";
import "./storyItem.css";
import { Link } from "react-router-dom";
import findTimePassed from "../../utils/findTimePassed";

function StoryItem(props) {
  return (
    <Link
      to={{
        pathname: "/hackernews/" + props.story.id,
        aboutProps: {
          story: props.story,
        },
      }}
    >
      <li className="story">
        <h2 className="story__title">
          {props.currentStoryNumber + props.index + 1}. {props.story.title}
        </h2>
        <p className="story__info">
          <span className="story__info-item story__info-item--author">
            By : {props.story.by}
          </span>
          <span className="story__info-item story__info-item--score">
            Score : {props.story.score}
          </span>
          <span className="story__info-item story__info-item--comments">
            Comments : {props.story.descendants}
          </span>
          <span className="story__info-item story__info-item--time">
            Time : {findTimePassed(props.story.time)}
          </span>
        </p>
      </li>
    </Link>
  );
}

export default StoryItem;
