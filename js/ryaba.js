const dataURL = "https://api.myjson.com/bins/jcmhn";
const $result = $("#result");
const $fetchButton = $("#button-fetch")



function handleButton() {
  $.getJSON(dataURL,handleData);
}

$fetchButton.click(handleButton);

function handleData(data) {
  console.log(data)
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  for(jstring in data.text) {
    $result.append('<p>'+jstring.text+'</p>');
    console.log(jstring)
  }
}

/* function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init); */
