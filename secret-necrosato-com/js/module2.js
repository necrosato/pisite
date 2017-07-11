console.log("module2");

var buttons = [];
for (var i = 0; i < 9; i++) {
    buttons.push([i, false]);
}
function toggleButton(buttonIndex) {
    buttons[buttonIndex][1] = !buttons[buttonIndex][1];
    nextRand = (buttonIndex * 7) % 9;
    buttons[nextRand][1] = !buttons[nextRand][1];
}

alert("You've found a secret site!");
