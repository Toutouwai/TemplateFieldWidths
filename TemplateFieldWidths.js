$(function(){
	$('#Inputfield_inputfield_widths input').on('change', function() {
		var width = $(this).val();
		$(this).closest('.tfw-item').css('width', width + '%');
	});
});
