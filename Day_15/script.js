// let pro = new Promise((resolve, reject) => {
//     let a = 10;
//     if (a > 5) {
//         resolve()
//     }
//     else {
//         reject()
//     }
// })

// pro
// .then(()=>console.log("Resolved"))
// .catch((err)=>console.error(err,"Rejected"));

function pro(num) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      console.log(num);
      resolved();
    }, 1000);
  });
}

// pro(1)
// .then(()=>pro(2))
// .then(()=>pro(3))
// .then(()=>pro(4))
// .then(()=>pro(5));

async function run() {
  for (let i = 1; i < 6; i++) await pro(i);
}

run();
