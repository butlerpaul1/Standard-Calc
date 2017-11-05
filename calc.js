var result = 0;
var operation = '';
var refresh = false;

var Result = function () {
  var v = parseFloat(document.getElementsByTagName('input')[0].value);
  if (operation === '+') {
    result += v;
  } else if (operation === '-') {
    result -= v;
  } else if (operation === '÷' || operation === '/') {
    result /= operator;
  } else if (operation === 'x' || operation === '*') {
    result *= operator;
  }  else {
    result = v;
  }

  document.getElementsByTagName('input')[0].value = result;
};

var calcuate = function (key) {
    if (/\d/.test(key) || key === '.') {
      // If the button is a number
      if (refresh) {
        document.getElementsByTagName('input')[0].value = key;
        refresh = false;
      } else {
        document.getElementsByTagName('input')[0].value += key;
      }
    } else if (key === 'C') {
      result = 0;
      operation = '';
      document.getElementsByTagName('input')[0].value = '0';
    } else {
      Result();
      operation = key;
      refresh = true;
    }
  };

var btns = document.getElementsByClassName('flex-item');
[].forEach.call(btns, function (btn) {
  btn.onclick = function () {
    calcuate(btn.textContent);
  };

});

document.getElementsByTagName('body')[0].addEventListener('keypress', function (event) {
  calcuate(event.key);
});
