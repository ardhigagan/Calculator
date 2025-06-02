const display = document.getElementById("display");

const buttons = document.querySelectorAll(".button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        switch (value) {
            case "AC":
                currentInput = "";
                break;
            case "DEL":
                currentInput = currentInput.slice(0, -1);
                break;
            case "=":
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
                break;
            default:
                currentInput += value;
                break;
        }
        display.textContent = currentInput || "0";
    });
});
