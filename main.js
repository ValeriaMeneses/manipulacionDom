var formulario = document.forms.login
formulario.addEventListener('submit', function (e) {
  e.preventDefault()
  var name = formulario.elements[0].value
  var lastName = formulario.elements[1].value

  if (name !== ""  &&  lastName !== "") {
    alert(name[0].toUpperCase() + " " + lastName[0].toUpperCase())
  }else {
    alert("Llenar campos")
  }


})
