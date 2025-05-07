let students = [
  {
    fullName: "Ahmed",
    age: 24,
    gender: "male",
    imgUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    fullName: "Mohammed",
    age: 25,
    gender: "male",
    imgUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Sara",
    age: 26,
    gender: "female",
    imgUrl:
      "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

let body = document.body;

students.map((e) => {
  let fullname = document.createElement("h1");
  fullname.innerText = `The Name is : ${e.fullName}`;
  body.appendChild(fullname);
  let age = document.createElement("h4");
  age.innerText = `The age is : ${e.age}`;
  body.appendChild(age);
  let gender = document.createElement("h4");
  e.gender == "male"
    ? (gender.style.color = "lightblue")
    : (gender.style.color = "pink");
  gender.innerText = `The gender is : ${e.gender}`;
  body.appendChild(gender);
  let img = document.createElement("img");
  img.src = e.imgUrl;
  img.width = "400";
  body.appendChild(img);
});
