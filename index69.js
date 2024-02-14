// ! call apply bind

// ? call method is take the current object is only use their if i want to call some function to another object without copying that function to that object so call help  us

// ? bind  return the function
// ? apply take the parameter as a list

 function about (name){
    console.log(this.firstName,this.age,name);
}

var datas = {
    "firstName": "shahzain",
    "age": 12,
    
};

var data1 = {
    "firstName": "zain",
    "age": 19,
    
};

// * call

// datas.about.call(data1,"hussain");
// datas.about.call(datas);


// * apply

about.apply(data1,["hussain"]);

// * bind

var func = about.bind(datas,"hussain");
func();