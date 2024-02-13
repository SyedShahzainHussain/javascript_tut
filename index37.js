// ! object destructuring 
const band = {
    "singerName":"zain",
    "singerAge":12,
  };
  
  let {singerName:singer,singerAge:age} = band;

  console.log(singer);
  console.log(age);

