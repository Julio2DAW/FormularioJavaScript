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

  //https://es.stackoverflow.com/questions/71985/cargar-un-select-dependiendo-de-otro-select-javascript-dom
  let select = document.getElementById('sComunidad')
   select.onchange=elegirProvincia
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

  //Validad asturianos y brocoli
    if(document.getElementById('si').checked && document.getElementById('sComunidad')==3){
        document.getElementById('sComunidad').style.border='2px solid blue'
        return false
    }
}

function elegirProvincia(){
    if(document.getElementById('sComunidad').value==11){

        //Creo el Select
        let select=document.createElement('select')
        select.id='provincia'
        select.name='provincia'

        let div=document.getElementsByClassName('select')[0]
        div.appendChild(select)


        //Array de las Provincias
        let provincias=["Cáceres","Badajoz"]
        //Ordeno array alfabéticamente
        provincias.sort()

        //Recorremos el array
        for(let provincia in provincias){
            let opcion=document.createElement('option')
            opcion.text=provincias[provincia]
            select.appendChild(opcion)
        }


    }else{
        if(document.getElementById('provincia')){
            document.getElementById('provincia').remove()
        }
    }
}

function visualizarMensaje(mensaje, posicion){
    let p=document.createElement('p')
    let texto=document.createTextNode('* '+mensaje)

    p.appendChild(texto)
   // p.classList.add('mensajeerror')

    document.getElementsByClassName(`${posicion}`).appendChild(p)
}
