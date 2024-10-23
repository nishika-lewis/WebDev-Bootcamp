const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    let randColor = getARandColor();
    let randColorNum = randColor.replace('rgb(', '').replace(')', '').split(",");
    let finalArr = randColorNum.map(num => parseInt(num));
    let sumofArr = finalArr[0] + finalArr[1] + finalArr[2];
    if (sumofArr > 50) {
        h1.style.color = "black";
    } else {
        h1.style.color = "white";
    }
    document.body.style.backgroundColor = randColor;
    h1.innerText = randColor;
});

function getARandColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

