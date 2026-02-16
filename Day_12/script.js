// console.log("Start.....")

// function myFunction(){
//         setTimeout(() => {
//             return ("Hello World");
//         }, 5000);
// }
// console.log(myFunction());
// console.log("End....");

// console.log("Start.....")

// function myFunction(cb){
//         setTimeout(() => {
//             // return ("Hello World");
//             cb();
//         }, 5000);
// }
// myFunction((data)=>{
//     console.log(data)
// });
// console.log("End....");

console.log("Start...");

function login(userMail, userPass, cb) {
  setTimeout(() => {
    cb({ userMail: userMail, userPass: userPass, Message: "Login Successful" });
  }, 1000);
}

function getVideoList(cb) {
  setTimeout(() => {
    cb([{ title: "Video 1" }, { title: "Video 2" }]);
  }, 2000);
}

function getVideoDetail(video, cb) {
  setTimeout(() => {
    cb({
      title: video.title,
      description: "This is a video about " + video.title,
    });
  }, 2000);
}

login("abcd@gmail.com", "123", (data) => {
  console.log(data);
  getVideoList((videoList) => {
    console.log(videoList);
    getVideoDetail(videoList[0], (videoDetail) => {
      console.log(videoDetail);
    });
  });
});

console.log("End...");
