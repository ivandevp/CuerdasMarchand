function openPopUp()
{
	alert("hola");
	$('#capa').fadeIn(1000, function(){
			$('#popup').css('display','inline-block');
			$('#popup').animate({
				left:'25%',
			},'slow');
			
	}) ;
}

function openas(){
	alert("abierto");
}

function closePopUp() 
{
    $('#popup').animate({'left':'-100%'}, 500, function() {
        $('#popup').css({
			'left':'100%',
		});
        $('#capa').fadeOut('slow')
    });
}

function cambiaTamano(valor,ancho,alto)
{
		var  img = document.getElementById(valor);
		img.width = ancho;
		img.height = alto;
}