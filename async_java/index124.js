// ! Fetch

// const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url, { method: "GET" })
//   .then((value) => {
//     if (value.ok) {
//       const data = value.json();
//       return data;
//     } else {
//       throw Error("Error Occured");
//     }
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json;  charset=UTF-8",
  },
})
  .then((value) => {
    if (value.ok) {
      return value.json();
    } else {
      throw Error("Some Error Occured");
    }
  })
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e);
  });
