console.log("Start...");

function login(userMail, userPass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userMail: userMail,
        userPass: userPass,
        Message: "Login Successful",
      });
    }, 1000);
  });
}

function getVideoList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ title: "Video 1" }, { title: "Video 2" }]);
    }, 2000);
  });
}

function getVideoDetail(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: video.title,
        description: "This is a video about " + video.title,
      });
    }, 2000);
  });
}

login("abcd@gmail.com", "123")
  .then((user) => {
    console.log(user);
    return getVideoList();
  })
  .then((videoList) => {
    console.log(videoList);
    return getVideoDetail(videoList[0]);
  })
  .then((videoDetail) => {
    console.log(videoDetail);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

console.log("End...");
