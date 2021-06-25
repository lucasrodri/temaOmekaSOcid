//console.log("ola mundo");

(function($) {
    $(document).ready(function() {
    //$( document ).on("change", function() {
	var $list, $listadivs;
	var tam = $(".field").length;
  
	for (let i = 0; i < tam; i++) {
		if($(".field")[i].innerText != "Email me my submission") {
			//console.log($(".field")[i].innerText);
			var texto = $(".field")[i].innerText;
			//console.log($('.field:eq('+i+')').find("label")[0].innerText);
			//console.log($(".field")[i].childNodes[3].lastElementChild.name);
			$(".field")[i].childNodes[3].lastElementChild.placeholder = texto.trim();
			//console.log($('.field:eq('+i+')').find("input")[0].name);
		}
	}
	$('.field-meta').hide();
	$( "input:checkbox" ).hide();
	$("input:submit")[0].value="Enviar sugestão";
	//$('input:submit')[0].click(function() { alert('hi');});
	//document.getElementsByName('submit')[0].onclick="alert('teste')";
	/*
	var button = document.createElement('button');
	button.type = 'button';
	button.innerHTML = 'Cancelar';
	button.className = 'btn-styled';
 
	button.onclick = function() {
		window.close();
	};
 
	var container = document.getElementsByName('submit')[0];
	container.insertAdjacentElement("beforebegin", button);	
	*/

    });
})(jQuery);
