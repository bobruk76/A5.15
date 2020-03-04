const dataURL = "https://api.myjson.com/bins/jcmhn";
const $form = $('#messages');
const $bt__wrap = $('#messages>.bt-wrap');
const $fetchButton = $("#button-fetch")
const $result = $("#result>p");
var fields = [];


function handleButton() {
  let $content = $("#result>p");
  let request=$form.serializeArray();

  for(let i in request){
    $content.html(function(j,oldText){
      return oldText.split(`{${request[i].name}}`).join(`<span class="badge badge-success">${request[i].value}</span>`)
    })
  }

  return false;
}

$fetchButton.click(handleButton)

function init() {
      const template = info =>{
        const $field = $(`<div class="form-group row">
        <label class="col-sm-2 col-form-label" for="${info}">${info}</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" name="${info}" placeholder="${info}" value="${info}">
        </div></div>`)
        $field.insertBefore($bt__wrap);
      }

    $.getJSON(dataURL, function(data) {
    for(let i in data.text) {
      $result.append(data.text[i]);
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
