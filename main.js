const outcome = document.querySelector(".outcome");
const buttons = document.querySelectorAll("button");
let equalized = false;
buttons.forEach((item) => {
  item.onclick = () => {
    if (
      outcome.innerText == "" &&
      (item.id == "clear" ||
        item.id == "delete" ||
        item.id == "+" ||
        item.id == "*" ||
        item.id == "." ||
        item.id == "/" ||
        item.id == "-" ||
        item.id == ")" ||
        item.id == "=")
    ) {
      alert("Write a number");
    } else if (item.id == "clear") {
      outcome.innerText = "";
    } else if (item.id == "delete") {
      let string = outcome.innerText.toString();
      outcome.innerText = string.substr(0, string.length - 1);
    } else if (outcome.innerText != "" && item.id == "=") {
      try {
        outcome.innerText = eval(outcome.innerText);
        equalized = true;
      } catch {
        alert("Wrong syntax");
      }
    } else if (outcome.innerText == "" && item.id == "=") {
      outcome.innerText = "";
      equalized = true;
    } else {
      if (equalized == true) {
        if (
          item.id == "*" ||
          item.id == "+" ||
          item.id == "." ||
          item.id == "/" ||
          item.id == ")" ||
          item.id == "-"
        ) {
          alert("For new operation write new number first");
        } else {
          outcome.innerText = item.id;
          equalized = false;
        }
      } else if (outcome.innerText == "0" && item.id != ".") {
        outcome.innerText = item.id;
        equalized = false;
      } else if (outcome.innerText.length > 15) {
        alert("Too many digits,pls try shorter numbers");
      } else {
        outcome.innerText += item.id;
        equalized = false;
      }
    }
  };
});
