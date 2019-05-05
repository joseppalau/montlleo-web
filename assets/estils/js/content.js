$('#open-modal-btn').on('click', function(){
  $('#main-modal').show()
})

$('#close-modal-btn').on('click', function(){
  $('#main-modal').hide()
})


let lista = [['Casaments','casaments.html','assets/images/slide/casaments-slide.png'],['Comunions', 'comunions.html', 'assets/images/slide/comunions-slide.png'], ['Embarassos','embarassos.html', 'assets/images/slide/embarassades-slide.png'], ['Families', 'grups-i-families.html','assets/images/slide/families-slide.png'], ['Nadons', 'nadons.html', 'assets/images/slide/nadons-slide.png'], ['Parelles', 'parelles.html', 'assets/images/slide/parelles-slide.png']]

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

document.getElementById("btn-left-content").addEventListener("click", function(){
   if(pos != 0){
     pos--
   }
   console.log('click')
   listaChangeDown()
   slideRender()
})

document.getElementById("btn-right-content").addEventListener("click", function(){
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
   $(this).html('<div class="component-img"><img src=' + lista[i][2] + '></div><p style="font-size:20px;">' + lista[i][0] + '</p>')
 } else{
   $(this).html('<div class="component-img"><img src=' + lista[i][2] + '></div><p style="font-size:20px; font-weight:bold;"><a href=' + lista[i][1] + '>' + lista[i][0] + '</a></p>')
 }
 i++
 })
}
