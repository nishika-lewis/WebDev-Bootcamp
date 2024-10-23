let task = prompt("What would you like to do?");
const finalList = [];

while (task !== "quit" && task !== "q") {
    if (task === "new") {
        let addToList = prompt("Add a task");
        finalList.push(addToList);
        console.log(`${addToList} is added to the List`);
    }
    else if (task === "list") {
        if (finalList.length === 0) {
            console.log("Your list is empty.");
        } else {
            console.log("====*********************====");
            for (let i = 0; i < finalList.length; i++) {
                console.log(`${i}: ${finalList[i]}`);
            }
            console.log("====*********************====");
        }
    }
    else if (task === "delete") {
        if (finalList.length === 0) {
            console.log("There is nothing to delete.");
        } else {
            let deleteIndex = parseInt(prompt("Type the index of the task you want to delete:"));
            if (!Number.isNaN(deleteIndex) && deleteIndex >= 0 && deleteIndex < finalList.length) {
                let deleted = finalList.splice(deleteIndex, 1);
                console.log(`${deleted[0]} removed from the list`);
            } else {
                console.log("Unknown or invalid index");
            }
        }
    }
    task = prompt("What would you like to do next?");
}

console.log("You quit the application");



