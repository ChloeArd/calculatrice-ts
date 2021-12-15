const inputValue = document.getElementById("input1") as HTMLInputElement;

let tableID : string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "height", "nine", "modulo", "multiplication", "addition", "subtraction"];
const tableNumber : (string | number)[] = [];
const tableNumberBefore : number[] = [];
const tableNumberAfter : number[] = [];


for (let i = 0; i < tableID.length; i++) {
    const button = document.getElementById(tableID[i]) as HTMLButtonElement;

    button.addEventListener("click", () => {
        let value :string = button.innerHTML;
        count(value, i);
        if (button.id === "addition" || button.id === "modulo" || button.id === "multiplication" || button.id === "subtraction") {
            // block operation buttons
            const idAdd = document.getElementById("addition") as HTMLButtonElement;
            idAdd.disabled = Boolean('true');
            const idModulo = document.getElementById("modulo") as HTMLButtonElement;
            idModulo.disabled = Boolean('true');
            const idSub = document.getElementById("subtraction") as HTMLButtonElement;
            idSub.disabled = Boolean('true');
            const idMulti = document.getElementById("multiplication") as HTMLButtonElement;
            idMulti.disabled = Boolean('true');
        }
    });
}

// display the result of the calculation in the input
const result = document.getElementById("result") as HTMLButtonElement;
result.addEventListener("click", () => {
   for (let i = 0; tableNumber.length; i++) {
       let tableValue = tableNumber[i];
       if (typeof tableValue == "string") {
           for (let a = 0; a < i; a++) {
               let val = tableNumber[a];
               if (typeof val === "number") {
                   tableNumberBefore.push(val);
               }
           }
           for (let b = i + 1; b <= tableNumber.length; b++) {
               let val = tableNumber[b];
               if (typeof val === "number") {
                   tableNumberAfter.push(val);
               }
           }

           // delete the comma
           let a: number = parseInt(tableNumberBefore.toString().replace(/[, ]+/g, ""));
           let b: number = parseInt(tableNumberAfter.toString().replace(/[, ]+/g, ""));

           calculate(a, b, tableValue);

           // delete a value of table
           tableNumber.splice(0, tableNumber.length);
           tableNumberBefore.splice(0, tableNumberBefore.length);
           tableNumberAfter.splice(0, tableNumberAfter.length)

           // block all buttons
           for (let i = 0; i < tableID.length; i++) {
               const button = document.getElementById(tableID[i]) as HTMLButtonElement;
               button.disabled = Boolean('true');
           }
       }
   }
});

// reset a value of input
const reset = document.getElementById("reset") as HTMLButtonElement;
reset.addEventListener("click", () => {
   inputValue.value = "";
    // activate all buttons
    for (let i = 0; i < tableID.length; i++) {
        const button = document.getElementById(tableID[i]) as HTMLButtonElement;
        button.removeAttribute("disabled")
    }
});

// block all keyboard keys
document.body.onkeydown = () => { return false; }

// Displays the digits clicked by the user in the input
function count (number: number|string, i: number) :void {
    if (typeof number == "string") {
        if (i < 10) {
            number = parseInt(number);
        }
    }
    inputValue.value += number;
    tableNumber.push(number);
}

// calculate
function calculate(a: number, b: number, operation: string): number | undefined {
    switch (operation) {
        case "+":
            inputValue.value =  String(a + b);
            return a + b;
            break;
        case "-":
            inputValue.value =  String(a - b);
            return a - b;
            break;
        case "*":
            inputValue.value = String(a * b);
            return a * b;
            break;
        case "%":
            inputValue.value = String(a % b);
            return a % b;
            break;
    }
}