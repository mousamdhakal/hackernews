import React, { Component } from "react";
import "./StoryDetails.css";

import getStory from "../../utils/getItem";
import { PageLoader } from "../../services/loaders";
import CommentItem from "../../components/commentItem/commentItem";

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: "",
      isLoading: false,
    };
  }

  componentDidMount() {
    if (this.props.location.aboutProps) {
      this.setState({
        story: this.props.location.aboutProps.story,
      });
    }
    if (!this.props.location.aboutProps) {
      let id = this.props.match.params.story_id;
      getStory(this.toggleLoading, this.setStory, id);
    }
  }

  setStory = (story) => {
    this.setState({
      story,
    });
  };

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  };

  render() {
    return (
      <section className="story-details">
        <div className="container">
          {this.state.isLoading || !this.state.story ? (
            <PageLoader />
          ) : (
            <>
              <div className="story-details__head">
                <h2 className="story-details__title">
                  <a
                    href={this.state.story.url}
                    className="story-details__link"
                  >
                    {this.state.story.title}
                  </a>
                </h2>
                <p className="story-details__info">
                  <span className="story-details__author">
                    By: {this.state.story.by}
                  </span>{" "}
                  <span className="story-details__score">
                    Score: {this.state.story.score}
                  </span>
                </p>
                <div>
                  <span className="story-details__comment-title">Comments</span>
                </div>
              </div>
              <div className="story-details__comments">
                {this.state.story.kids ? (
                  this.state.story.kids.map((id) => (
                    <CommentItem key={id} id={id} />
                  ))
                ) : (
                  <p className="story-details__no-comments">No comments</p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }
}

export default Story;
