$('#sec-icon').on('click', function(){
  $('.modal-seccions').show()
})

let lista = [['Casaments','casaments.html','assets/images/casament003-1134x772.jpg'],['Comunions', 'comunions.html', 'assets/images/comunions006-992x676.jpg'], ['Embarassos','embarassos.html', 'assets/images/embaracades011-992x661-800x533.jpg'], ['Families', 'grups-i-families.html','assets/images/grup-i-families001-992x676-800x545.jpg'], ['Nadons', 'nadons.html', 'assets/images/nadons015-992x992.jpg'], ['Parelles', 'parelles.html', 'assets/images/parelles004-992x992.jpg']]

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
   $(this).html('<img src=' + lista[i][2] + '><p style="font-size:20px;">' + lista[i][0] + '</p>')
 } else{
   $(this).html('<img src=' + lista[i][2] + '><p style="font-size:20px; font-weight:bold;"><a href=' + lista[i][1] + '>' + lista[i][0] + '</a></p>')
 }
 i++
 })
}
