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

document.getElementById("btn-left").addEventListener("click", function(){
    if(pos != 0){
      pos--
    }
    console.log('click')
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


function slideRender(){
  let i = 0
  $('.component').each(function(){
  if(i != 2){
    $(this).html('<p style="font-size:20px;">' + lista[i][0] + '</p>')
  } else{
    $(this).html('<p style="font-size:20px; font-weight:bold;"><a href=' + lista[i][1] + '>' + lista[i][0] + '</a></p>')
  }
  i++  
  })
}
