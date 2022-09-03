const input = document.querySelector("input");
const addUserButton = document.querySelector("button");

addUserButton.onClick = () => {
  fetch("http://localhost:3001/addUser", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: Date.now(),
      name: input.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayUser();
});

    input.value = "";
};

function displayUser() {
    fetch("http://localhost:3001/displayUser")
    .then(res=>res.json())
    .then(data => console.log(data));
}