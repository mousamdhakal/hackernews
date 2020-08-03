function getStories(toggleLoading, addStory, startStoryNumber) {
  toggleLoading();
  fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response) => response.json())
    .then((response) => {
      toggleLoading();
      return response
        .slice(startStoryNumber, startStoryNumber + 20)
        .map((id) => {
          toggleLoading();
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then((response) => response.json())
            .then((response) => {
              toggleLoading();
              addStory(response);
            })
            .catch((err) => console.log(err));
        });
    })
    .catch((err) => console.log(err));
}

export default getStories;
