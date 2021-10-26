/**
  validaciones.js
  Script para validar un formulario
  @author Julio Antonio Ramos Gago <jramosgago.guadalupe@alumnado.fundacionloyola.net>
  @license GPL v3 2021
**/

'use strict'

window.onload = iniciar

function iniciar() {
  let formulario = document.forms[0]
  console.log(formulario)
  formulario.onsubmit = validar
}

function validar(evento) {
  console.log("Estoy validando")

  //Comprobar el campo Nombre
  if (document.getElementById('iNombre').lengh < 3)
    return false


  //Comprobamos la Aceptación de la Política de Privacidad
  if(!document.getElementById('iPolitica').checked)
    return false

  //evento.preventDefault()
  //return false
}
