let screen = document.querySelector('.calc-screen');
screen.textContent = "0"

let numButtons = Array.from(document.querySelectorAll('.button'));
let clearButton = Array.from(document.querySelectorAll('.clear-button'));
let delButton = Array.from(document.querySelectorAll('.del-button'));
let parenButtons = Array.from(document.querySelectorAll('.paren-button'));
let opButtons = Array.from(document.querySelectorAll('.operation-button'));
let eqButton = Array.from(document.querySelectorAll('.equals-button'));
let buttons = numButtons.concat(clearButton).concat(delButton).concat(parenButtons).concat(opButtons).concat(eqButton);

//read inputs from button clicks
buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.textContent) {
      case 'C':
        screen.textContent = "0";
        break;
      case 'del':
        if (screen.textContent == "Error") {
        } else if (screen.textContent.length == 1) {
          screen.textContent = "0";
        } else if (screen.textContent.charAt(screen.textContent.length - 1) == " ") { 
          //if we are deleting an operation, take care of the spaces before and after it
          screen.textContent = screen.textContent.slice(0,-3);
        } else {
          //normal delete
          screen.textContent = screen.textContent.slice(0,-1);
        }
        break;
      case '÷':
        screen.textContent += " / ";
        break;
      case '×':
        screen.textContent += " * ";
        break;
      case '+':
        screen.textContent += " + ";
        break;
      case '−':
        screen.textContent += " - ";
        break;
      case '^':
        screen.textContent += " ** "
        break;
      case '(–)':
        screen.textContent += "-"
        break;
      case '=':
        try {
          screen.textContent = eval(screen.textContent);
        } catch {
          screen.textContent = "Error";
        }
        break;
      default:
        if (screen.textContent == "0" || screen.textContent == "Error") {
          screen.textContent = e.target.textContent;
        } else {
          screen.textContent += e.target.textContent;
        }
        break;
    }
  })
});

//read inputs from keyboard
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 67) {
    document.getElementById("c").click();
  } else if (e.keyCode === 8) {
    document.getElementById("del").click();
  } 
  // else if ("(")
  // else if (")")
  else if (e.keyCode === 57 && e.shiftKey) {
    document.getElementById("(").click();
  } else if (e.keyCode === 48 && e.shiftKey) {
    document.getElementById(")").click();
  } else if (e.keyCode === 48 && !e.shiftKey) { //0, not )
    document.getElementById("0").click();
  } else if (e.keyCode === 49) {
    document.getElementById("1").click();
  } else if (e.keyCode === 50) {
    document.getElementById("2").click();
  }
  else if (e.keyCode === 51) {
    document.getElementById("3").click();
  }
  else if (e.keyCode === 52) {
    document.getElementById("4").click();
  }
  else if (e.keyCode=== 53) {
    document.getElementById("5").click();
  }
  else if (e.keyCode === 54 && !e.shiftKey) { //6, not ^
    document.getElementById("6").click();
  }
  else if (e.keyCode === 55) {
    document.getElementById("7").click();
  }
  else if (e.keyCode === 56 && !e.shiftKey) { //8, not *
    document.getElementById("8").click();
  }
  else if (e.keyCode === 57 && !e.shiftKey) { //9, not ()
    document.getElementById("9").click();
  }
  else if (e.keyCode === 190) {
    document.getElementById(".").click();
  }
  else if (e.keyCode === 187) {
    document.getElementById("+").click();
  }
  else if (e.keyCode === 189) {
    document.getElementById("-").click();
  }
  else if (e.keyCode === 88 || (e.shiftKey && e.keyCode === 56)) { //x or *
    document.getElementById("x").click();
  }
  else if (e.keyCode === 191) {
    document.getElementById("/").click();
  }
  else if (e.keyCode === 54 && e.shiftKey) {
    document.getElementById("^").click();
  }
  else if (e.keyCode === 13) {
    document.getElementById("=").click();
  }
});

