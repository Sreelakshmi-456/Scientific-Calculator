/*let display = document.getElementById('display');

// Add character to the display
function append(character) {
  display.value += character;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Perform calculation
function calculate() {
  try {
    // Replace % with modulo operation
    if (display.value.includes('%')) {
      let parts = display.value.split('%');
      let result = Number(parts[0]) % Number(parts[1]);
      display.value = result;
    } else {
      display.value = eval(display.value);
    }
  } catch {
    display.value = 'Error';
  }
}

// Square the current number
function square() {
  try {
    display.value = Math.pow(Number(display.value), 2);
  } catch {
    display.value = 'Error';
  }
}
*/




let display = document.getElementById('display');

// Add character to the display
function append(char) {
  display.value += char;
}

// All Clear the display
function clearDisplay() {
  display.value = '';
}

//Clear a value
function clearLast() {
  display.value = display.value.slice(0, -1);
}

// Square root of current value
function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = 'Error';
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function calculate() {
  try {
    let expr = display.value;

    // Auto-close missing parentheses
    const openParens = (expr.match(/\(/g) || []).length;
    const closeParens = (expr.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      expr += ')'.repeat(openParens - closeParens);
    }

    // Evaluate the expression
    display.value = eval(expr);
  } catch (err) {
    display.value = 'Error';
  }
}
