$(document).ready(async () => {
  var textSize = 10;
  let textBox = $("#text");
  textBox.css({"font-size": textSize});
  $("#smaller").on("click", ()=>{
    textSize = 10;
    textBox.css({"font-size": textSize});
  });
  $("#bigger").on("click", ()=>{
    textSize = 24;
    textBox.css({"font-size": textSize});
  });
  $("#moo").on("click", ()=>{
    textBox.val(textBox.val().split(".").join("-Moo."));
  });
  $("#less-moo").on("click", ()=>{
    let moo = /(-Moo)+/g
    let currentText = textBox.val();
    let moos = currentText.match(moo);
    if(moos != null){
      let mooCounts = moos.map((mooStr) => mooStr.split("-Moo").length - 1);
      let splitText = currentText.split(moo);
      for(var i = 0; i < moos.length; i++){
        splitText[2*i+1] = "-Moo".repeat(mooCounts[i] - 1);
      }
      textBox.val(splitText.join(""));
    }
  })
  $("input[type=radio]").on("change", (event)=>{
    switch(event.target.value){
      case "boring":
        textBox.css({
          "color": "#000000",
          "text-decoration": "initial",
          "font-weight": "normal"
        });
        break;
      case "fancy":
        textBox.css({
          "color": "#4444ff",
          "text-decoration": "underline",
          "font-weight": "bold"
        });
        break;
    }
  })


});
