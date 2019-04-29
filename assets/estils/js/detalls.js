let lista = [['Casaments','casaments.html'],['Comunions', 'comunions.html'], ['Embarassos','embarassos.html'], ['Families', 'grups-i-families.html'], ['Nadons', 'nadons.html'], ['Parelles', 'parelles.html']]

var pos = 0

function listaChangeUp(){
  let pos = lista[lista.length - 1]
  let newpos = lista[0]
  for(let i= 0; i < lista.length; i++){
      newpos = lista[i]
      lista[i] = pos
      pos = newpos
  }
}

function listaChangeDown(){
  let pos = lista[0]
  let newpos = lista[lista.legength - 1]
  for(let i= lista.length - 1; i >= 0; i--){
      newpos = lista[i]
      lista[i] = pos
      pos = newpos

  }
}


function slideRender(){
    let components = document.getElementsByClassName('component')
    for(let i=0; i < 5; i++){
      components[i].innerHTML = lista[i][0]
    }
}

document.getElementById("btn-left").addEventListener("click", function(){
    if(pos != 0){
      pos--
    }
    listaChangeDown()
    slideRender()
})

document.getElementById("btn-right").addEventListener("click", function(){
    if(pos != lista.length - 1){
      pos++
    }
    listaChangeUp()
    slideRender()
})
