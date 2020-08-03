function getItem(toggleLoading, setItem, id) {
  toggleLoading();
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response) => response.json())
    .then((response) => {
      setItem(response);
      toggleLoading();
    })
    .catch((err) => console.log(err));
}

export default getItem;
