const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
    addToList();
})

const addToList = async () => {
    const jokeLine = await getDadJoke();
    const newJoke = document.createElement("LI");
    newJoke.append(jokeLine);
    list.append(newJoke);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        const jokeLine = res.data.joke;
        return jokeLine;
    }
    catch (e) {
        console.log("error logged", error);
    }
}
