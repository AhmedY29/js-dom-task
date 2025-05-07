let students = [
  {
    fullName: "Ahmed",
    gender: "male",
    imgUrl:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    fullName: "Mohammed",
    gender: "male",
    imgUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    fullName: "Sara",
    gender: "female",
    imgUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

let body = document.body;

let h2 = document.createElement("h2");
h2.innerText = students.map((e) => {
  let h2 = document.createElement("h2");
  h2.innerText = e.imgUrl;
  body.appendChild(h2);
});
