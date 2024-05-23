let first = 0, last = 0, flag = 'f', result = 0, operator = "operator";

const buttonpressed = (e) => {
     checkorcal(e.target.innerText);
}

const checkorcal = (val) => {
     if (val == "+" || val == "-" || val == "/" || val == "x") {
          if (result == 0) {
               if (operator != "operator") {
                    let ele = document.getElementById("display");
                    ele.innerHTML = first;
                    }
                    flag = 'l';
                    operator = val;
                    display(operator);
               }
               else {
                    flag = 'l';
                    operator = val;
                    first = result;
                    result = 0;
                    last = 0;
                    display(operator);
               }
          }

          else if (val == "Clear") {
               first = 0, last = 0, flag = 'f', result = 0, operator = "operator";
               display("00");
          }

          else if (val == "=") {
               flag = 'f';
               switch (operator) {
                    case "+":
                         result = first + last;
                         display(result);
                         break;
                    case "-":
                         result = first - last;
                         display(result);
                         break;
                    case "/":
                         result = first / last;
                         display(result);
                         break;
                    case "x":
                         result = first * last;
                         display(result);
                         break;
               }
          }

          else {
               let value = parseInt(val);
               if (flag == 'f') {
                    first = (first * 10) + value;
                    display(first);
               }
               else {
                    last = (last * 10) + value;
                    display(val);
               }
          }
     }

     const display = (message) => {
          console.log(message);
          let ele = document.getElementById("display");
          if (flag == 'l') {
               ele.innerHTML += message;
          }
          else {
               ele.innerHTML = message;
          }
     }