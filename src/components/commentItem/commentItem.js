import React, { Component } from "react";
import "./commentItem.css";
import getStory from "../../utils/getItem";
import findTimePassed from "../../utils/findTimePassed";
import { TextLoader } from "../../services/loaders";

class CommentItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null,
      isLoading: false,
    };
  }

  setComment = (comment) => {
    this.setState({
      comment,
    });
  };

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  };

  componentDidMount() {
    let id = this.props.id;
    getStory(this.toggleLoading, this.setComment, id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isLoading && this.state.isLoading) {
      return false;
    }
    return true;
  }

  render() {
    return !this.state.comment || !this.state.comment.deleted ? (
      <div className="comment">
        {this.state.isLoading || !this.state.comment ? (
          <TextLoader />
        ) : (
          <>
            <span className="comment__user">{this.state.comment.by}</span>
            <span className="comment__time">
              {findTimePassed(this.state.comment.time)}
            </span>
            <div
              className="comment__text"
              dangerouslySetInnerHTML={{ __html: this.state.comment.text }}
            ></div>
            {this.state.comment.kids && this.state.comment.kids.length > 0 && (
              <div className="comment__nested">
                {this.state.comment.kids.map((id) => (
                  <CommentItem key={id} id={id} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    ) : null;
  }
}

export default CommentItem;
