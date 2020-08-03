import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./containers/Header/Header";
import Story from "./containers/StoryDetails/StoryDetails";
import getStories from "./utils/getStories";
import StoriesContainer from "./containers/StoriesContainer/StoriesContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      isLoading: false,
      currentStoryNumber: 0,
    };
  }

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  };

  addStory = (story) => {
    let stories = [...this.state.stories, story];
    this.setState({
      stories,
    });
  };

  goAnotherPage = (direction) => {
    let stories = [];
    if (direction === "left") {
      let currentStoryNumber =
        this.state.currentStoryNumber < 20
          ? 0
          : this.state.currentStoryNumber - 20;
      this.setState(
        {
          currentStoryNumber,
          stories,
        },
        () => this.loadStories()
      );
    }
    if (direction === "right") {
      let currentStoryNumber =
        this.state.currentStoryNumber > 400
          ? 400
          : this.state.currentStoryNumber + 20;
      this.setState(
        {
          currentStoryNumber,
          stories,
        },
        () => this.loadStories()
      );
    }
    return;
  };

  loadStories = () => {
    getStories(
      this.toggleLoading,
      this.addStory,
      this.state.currentStoryNumber
    );
  };

  componentDidMount() {
    this.loadStories();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <StoriesContainer
                {...props}
                isLoading={this.state.isLoading}
                stories={this.state.stories}
                currentStoryNumber={this.state.currentStoryNumber}
                goAnotherPage={this.goAnotherPage}
              />
            )}
          />
          <Route path="/:story_id" component={Story} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
