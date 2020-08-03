import React from "react";

import StoryItem from "../../components/storyItem/storyItem";
import { PageLoader } from "../../services/loaders";
import Button from "../../components/button/button";
import "./StoriesContainer.css";

function StoriesContainer(props) {
  return (
    <section className="stories">
      <div className="container">
        {props.isLoading || props.stories.length < 20 ? (
          <PageLoader />
        ) : (
          <>
            <ul className="stories__list">
              {props.stories.map((story, index) => (
                <StoryItem
                  key={story.id}
                  story={story}
                  index={index}
                  currentStoryNumber={props.currentStoryNumber}
                />
              ))}
            </ul>
            <div className="stories__nav">
              <Button
                className="btn-nav"
                onClick={() => props.goAnotherPage("left")}
              >
                <i className="fas fa-caret-left"></i>
              </Button>
              <span className="stories__page-number">
                {props.currentStoryNumber / 20 + 1}
              </span>
              <Button
                className="btn-nav"
                onClick={() => props.goAnotherPage("right")}
              >
                <i className="fas fa-caret-right"></i>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default StoriesContainer;
