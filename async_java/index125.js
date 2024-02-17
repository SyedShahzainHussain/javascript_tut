// ! async and await

const url = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Error Occured");
  }
  console.log("he1");
    const data = await response.json();
    console.log("he");
  return data;
}

getPost()
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e);
  });
