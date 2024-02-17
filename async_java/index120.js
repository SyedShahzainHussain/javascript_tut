// ! function return promise

function ricePromise() {
  const bucket = ["vegetable", "rice", "salts", "oil"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetable") &&
      bucket.includes("rice") &&
      bucket.includes("salts")
    ) {
      resolve("fried rices completed");
    } else {
      reject("Could not do it");
    }
  });
}


ricePromise().then((value) => {
    console.log(value);
}).catch((e) => {
    console.log(e);
});