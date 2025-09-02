const display = document.getElementById("display")

const buttons = document.querySelectorAll("h1");

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value == "AC") {
            display.value = "";
        } 
        
        else if (value === "=") {
            try {
                let expression = display.value.replace(/x/g, "*").replace(/÷/g, "/");

                expression = expression.replace(/%/g, "/100")
                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        }
        else{
            display.value += value;
        }
    });
});

