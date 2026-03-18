function add() {
    let input = document.querySelector("input");
    let value = input.value;

    if (value === "") return; // avoid empty tasks

    let newTask = document.createElement("div");
    newTask.className = "lists";

    newTask.innerHTML = `
        <p>${value} <span><button class="hello" onclick="removeTask(this)">Delete</button></span></p>
    `;

    document.querySelector(".major").appendChild(newTask);

    input.value = ""; // clear input
}

function removeTask(button) {
    button.closest(".lists").remove();
}

