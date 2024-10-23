const form = document.querySelector("#shelterForm");
const response = document.querySelector("#response");
const list = document.querySelector("#peopleList");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const personName = response.value;
    console.log(personName);
    const newName = document.createElement("li");
    newName.innerText = personName;
    list.append(newName);
    response.value = "";

})