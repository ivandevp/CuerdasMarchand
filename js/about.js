function openPopUp(){
	$('#capa').fadeIn('fast', function() {
        $('#popup').css('display','fixed')
        $('#popup').animate({'left':'60%'},500)
    });	
}

function closePopUp() 
{
    $('#popup').animate({'left':'-100%'}, 500, function() {
        $('#popup').css('left','100%')
        $('#capa').fadeOut('slow')
    });
}

function cambiaTamano(valor,ancho,alto){
		var  img = document.getElementById(valor);
		img.width = ancho;
		img.height = alto;
}