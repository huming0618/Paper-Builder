$(function(){
	$('.paper-editor__add')
		.on('mouseover', function(e){
			$(this).addClass('paper-editor__add--focus');
		})
		.on('mouseout', function(e){
			$(this).removeClass('paper-editor__add--focus');
		})
});