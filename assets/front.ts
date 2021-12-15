const inputValue = document.getElementById("input1") as HTMLInputElement;

let tableID : string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "height", "nine", "modulo", "multiplication", "addition", "subtraction", "comma"];
const tableNumber : (string | number)[] = [];
const tableNumberBefore : number[] = [];
const tableNumberAfter : number[] = [];

for (let i = 0; i < tableID.length; i++) {
    const button = document.getElementById(tableID[i]) as HTMLButtonElement;

    button.addEventListener("click", () => {
        let value :string = button.innerHTML;
        count(value, i);
    });
}

const result = document.getElementById("result") as HTMLButtonElement;
result.addEventListener("click", () => {
   for (let i = 0; tableNumber.length; i++) {
       let tableValue = tableNumber[i];
       if (typeof tableValue == "string") {
           console.log("string de " + tableValue + ", position " + i);
           for (let a = 0; a < i; a++) {
               let val = tableNumber[a];
               if (typeof val === "number") {
                   tableNumberBefore.push(val);
               }
               console.log(tableNumberBefore);
           }
           for (let b = i + 1; b <= tableNumber.length; b++) {
               let val = tableNumber[b];
               if (typeof val === "number") {
                   tableNumberAfter.push(val);
               }
               console.log(tableNumberAfter);
           }

           let a = parseInt(tableNumberBefore.toString().replace(/[, ]+/g, ""));
           let b = parseInt(tableNumberAfter.toString().replace(/[, ]+/g, ""));
           console.log(a + tableValue + b);

           calculate(a, b, tableValue);

           // delete a value of table
           tableNumber.splice(0, tableNumber.length);
           tableNumberBefore.splice(0, tableNumberBefore.length);
           tableNumberAfter.splice(0, tableNumberAfter.length)
       }
   }
});

// reset a value of input
const reset = document.getElementById("reset") as HTMLButtonElement;
reset.addEventListener("click", () => {
   inputValue.value = "";
});

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

function calculate(a: number, b: number, operation: string) {
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