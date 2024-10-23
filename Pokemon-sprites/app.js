const container = document.querySelector("#container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 151; i++) {
    const box = document.createElement("div");
    box.classList.add("pokemon");
    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${i}.png`;
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    box.append(newImg);
    box.append(label);
    container.append(box);
}

