function insert(value) {
  var inputField = document.form.textinput;
  if (value === 'X') { // Change 'X' to '*'
    inputField.value += '*';
  } else if (value === '%') { // Change '%' to '/100'
    inputField.value += '/100';
  } else {
    inputField.value += value;
  }
}

function clean() {
  document.form.textinput.value = '';
}

function back() {
  var value = document.form.textinput.value;
  document.form.textinput.value = value.substring(0, value.length - 1);
}

function calculate() {
  var expression = document.form.textinput.value;
  try {
    var result = eval(expression);
    document.form.textinput.value = result;
  } catch (error) {
    document.form.textinput.value = 'Error';
  }
}
function insert(value) {
  var inputField = document.form.textinput;
  if (value === 'X') { 
    inputField.value += '*';
  } else if (value === '%') { 
    inputField.value += '/100';
  } else {
    inputField.value += value;
  }
}

function clean() {
  document.form.textinput.value = '';
}

function back() {
  var value = document.form.textinput.value;
  document.form.textinput.value = value.substring(0, value.length - 1);
}

function calculate() {
  var expression = document.form.textinput.value;
  try {
    
    if (expression.includes('/0')) {
      throw new Error('Division by zero');
    }
    var result = eval(expression);
    document.form.textinput.value = result;
  } catch (error) {
    if (error instanceof SyntaxError || error.message === 'Division by zero') {
      document.form.textinput.value = 'Error';
    } else {
      document.form.textinput.value = 'Error';
    }
  }
}
