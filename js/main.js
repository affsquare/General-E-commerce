/* Start OTP Function */
/* Custom Input Type Number MaxLength */
function customMaxLength(input) {
  if (input.value.length > 1) input.value = input.value.slice(0, 1);
}

(function OTP() {
  const inputs = document.getElementsByTagName("input");
  // console.log(inputs)
  for (let i = 0; i < inputs.length; i++) {
    /* foucs first input */
    if (i === 0) inputs[0].focus();

    /* add keydown Event For All Inputs*/
    inputs[i].addEventListener("keydown", function (e) {
      // console.log(e.keyCode);

      if (e.keyCode > 47 && e.keyCode < 58) {
        /* write Value In Inputs */
        inputs[i].value = e.key;
        /* Foucs Next Input */
        if (i !== inputs.length - 1) inputs[i + 1].focus();
        e.preventDefault();
      } else if (e.keyCode > 95 && e.keyCode < 105) {
        inputs[i].value = e.key;
        if (i !== inputs.length - 1) inputs[i + 1].focus();
        e.preventDefault();
      }
      /* Remove Value From Inputs */
      if (e.key === "Backspace") {
        inputs[i].value = "";
        /* Focus Prev Input */
        if (i !== 0) inputs[i - 1].focus();
      }
    });
  }
})();
/* End OTP Function */
