const dataURL = "https://api.myjson.com/bins/jcmhn";
const $form = document.getElementById('messages');
const $result = $("#result");
const $fetchButton = $("#button-fetch")
var fields = [];

function handleButton() {

}

$fetchButton.click(handleButton);

function handleData(data) {

}

 function init() {
      const template = info =>{
        const $field = $(`<div class="form-group">
        <label for="${info}">${info}</label>
        <input type="text" class="form-control" name="${info}" placeholder="${info}" value="">
        </div>`)
        $field.appendTo($form);
      }


    $.getJSON(dataURL, function(data) {
    for(let i in data.text) {
      $result.append('<span>'+data.text[i]+'</span>');
      Array.prototype.push.apply(fields,data.text[i].match(/{[a-z][a-z0-9]*}/gi));
    }
    fields = Array.from(new Set(fields));
    console.log(fields);

    for(let i in fields) {
      template(fields[i].replace('{','').replace('}',''))
    }
  }
)};

$(document).ready(init);
