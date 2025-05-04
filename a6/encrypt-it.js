$(document).ready(async () => {
  var shiftValue = 1;
  let shiftText = $("#shift-value");
  $("#decrement").on("click", ()=>{
    shiftValue = (shiftValue + 25) % 26;
    shiftText.text(shiftValue);
  });
  $("#increment").on("click", ()=>{
    shiftValue = (shiftValue + 1) % 26;
    shiftText.text(shiftValue);
  });
  let inputField = $("#input-text");
  let resultField = $("#result");
  $("#encrypt-it").on("click", ()=>{
    let inputText = inputField.val();
    var outputText = "";
    for(var i = 0; i < inputText.length; i++){
      let currentChar = inputText.charCodeAt(i);
      //'A' = 65, 'Z' = 90
      if(65 <= currentChar && currentChar <= 90){
        outputText += String.fromCharCode(((currentChar - 65 + shiftValue) % 26) + 65);
      //'a' = 97, 'z' = 122
      }else if(97 <= currentChar && currentChar <= 122){
        outputText += String.fromCharCode(((currentChar - 97 + shiftValue) % 26) + 97);
      } else {
        outputText += String.fromCharCode(currentChar);
      }
    }
    resultField.text(outputText);
  })
  $("#reset").on("click", ()=>{
    inputField.val("");
    resultField.text("");
  })
});
