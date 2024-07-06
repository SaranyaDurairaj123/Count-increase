let countElement = document.getElementById("count");
let count = 0;

function incrementCount() {
    let incrementBy = parseInt(document.getElementById("incrementBy").value) || 1; // Default to 1 if no value
    count += incrementBy;
    countElement.textContent = count;
}
