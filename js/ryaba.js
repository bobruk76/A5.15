const dataURL = "https://api.myjson.com/bins/jcmhn";
const $result = $("#result");
const $fetchButton = $("#button-fetch")
var fields = [];


function handleButton() {

}

$fetchButton.click(handleButton);

function handleData(data) {

}
/*	$("#button-fetch").click(handleButton);*/
 function init() {
    $.getJSON(dataURL, function(data) {
    for(var i in data.text) {
      $result.append('<span>'+data.text[i]+'</span>');
      Array.prototype.push.apply(fields,data.text[i].match(/{[a-z][a-z0-9]*}/gi));
    }
    console.log(fields);
  }
)};

$(document).ready(init);
