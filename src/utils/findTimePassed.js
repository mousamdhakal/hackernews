function findTimePassed(startTime) {
  let endTime = new Date();
  endTime = Math.floor(endTime.getTime() / 1000);
  let seconds = endTime - startTime;
  if (seconds < 60) {
    return seconds + " seconds ago";
  }
  let minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes + " minutes ago";
  }
  let hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours + " hours ago";
  }
  let days = Math.floor(hours / 24);
  hours = hours % 24;
  return days + " days " + hours + " hours ago";
}

export default findTimePassed;
