document.addEventListener("DOMContentLoaded", function () {
  // Get the display element
  var display = document.querySelector("input[name='display']");
  var smallDisplay = document.querySelector("input[name='smallDisplay']");
  // Function for buttons
  var operatorArray = ["%", "+", "*", "/", "-", "."];
  function handleButtonClick(buttonValue) {
    if (buttonValue === "=") {
      if (display.value === "") {
        return;
      } else {
        smallDisplay.value = display.value;
        display.value = eval(display.value);
      }
    } else if (buttonValue === "AC") {
      display.value = "";
      smallDisplay.value = "";
    } else if (buttonValue === "DE") {
      if (display.value === "") {
        return;
      } else {
        display.value = display.value.replace(
          display.value.charAt(display.value.length - 1),
          ""
        );
      }
    } else if (
      operatorArray.includes(buttonValue) &&
      display.value === ""
    ) {
      return;
    } else {
      if (
        operatorArray.includes(buttonValue) &&
        operatorArray.includes(
          display.value[display.value.length - 1]
        )
      ) {
        display.value = display.value.replace(
          display.value.charAt(display.value.length - 1),
          buttonValue
        );
        return display.value;
      } else {
        display.value += buttonValue;
      }
    }
  }
  var operatorButtons = document.querySelectorAll(".Boperator, .Number");
  operatorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      handleButtonClick(button.value);
    });
  });
  var equalButton = document.querySelector(".Eoperator");
  equalButton.addEventListener("click", function () {
    handleButtonClick("=");
  });
  var zeroButton = document.querySelector(".zero");
  zeroButton.addEventListener("click", function () {
    handleButtonClick("0");
  });
});
