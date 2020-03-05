const dataURL = "https://api.myjson.com/bins/jcmhn";
const $form = $('#messages');
const $bt__wrap = $('#messages>.bt-wrap');
const $fetchButton = $("#button-fetch")
const $result = $("#result>p");



function handleButton(event) {
  const request=$form.serializeArray();
  request.forEach(Item => {
    if(Item.value.length>0) {
      $('#'+Item.name).attr('readonly','readonly');
      $result.html(function(j,oldText){
      return oldText.split(`{${Item.name}}`).join(`<span class="badge badge-success">${Item.value}</span>`)
    })}
  })
  event.preventDefault();
}

<<<<<<< HEAD
function init() {
  $fetchButton.click(handleButton)
  const template = info =>{
    const $field = $(`<div class="form-group row">
    <label class="col-sm-2 col-form-label" for="${info}">${info}</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="${info}" name="${info}" placeholder="${info}" value="">
    </div></div>`)
    $field.insertBefore($bt__wrap);
  }
    let fields = [];
=======


function init() {
  $fetchButton.click(handleButton)
      const template = info =>{
        const $field = $(`<div class="form-group row">
        <label class="col-sm-2 col-form-label" for="${info}">${info}</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="${info}" name="${info}" placeholder="${info}" value="">
        </div></div>`)
        $field.insertBefore($bt__wrap);
      }

>>>>>>> c56e4a1c60d68237ad93f0acb37fd9e51c95fd65
    $.getJSON(dataURL, function(data) {
      data.text.forEach(Item => {
      $result.append(Item);
      Array.prototype.push.apply(fields,Item.match(/{[a-z][a-z0-9]*}/gi));
    })
    fields = Array.from(new Set(fields));

    fields.forEach(Item => {
      template(Item.replace('{','').replace('}',''))
    })
  }
)};

$(document).ready(init);
