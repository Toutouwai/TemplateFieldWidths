$(function(){
	$('#Inputfield_inputfield_widths input').on('change', function(event) {
		var width = $(this).val();
		$(this).closest('.tfw-item').css('width', width + '%');
	});
});
