(function($) {

	$(function() {

		var $tfw_inputfield = $('#Inputfield_inputfield_widths');

		// Detect inputfield open/close and set hidden field value
		var $visibility_input = $('#tfw_open');
		$tfw_inputfield.on('closed', function() {
			$visibility_input.val(0);
		});
		$tfw_inputfield.on('opened', function() {
			$visibility_input.val(1);
		});

		// Tab click
		$('.tfw-tab').click(function() {
			showTab($(this).data('tab'));
		});

		// Adjust preview field widths on input change
		$tfw_inputfield.find('input').on('change', function(event) {
			var width = $(this).val();
			$(this).closest('.tfw-item').css('width', width + '%');
		});

		// Drag resizing
		$('.tfw-item').resizable({
			handles: 'e',
			resize: function(event, ui) {
				var percentage = Math.ceil(ui.size.width / ui.element.parent().outerWidth() * 100);
				percentage = Math.min(Math.max(parseInt(percentage), 10), 100);
				ui.element.children('label').find('input').val(percentage);
				ui.element[0].style.width = percentage + '%';
			}
		});

		// Navigate between tabs via TAB key
		$(document).on('keydown', '.tfw-input input', function(e) {
			// Return if keydown was not TAB
			if(e.keyCode !== 9) return;
			var $tfw_item = $(this).closest('.tfw-item');
			if(e.shiftKey && $tfw_item.is('.tfw-tab-wrap > .tfw-item:first-child')) {
				$prev_tab = $(this).closest('.tfw-tab-content').prev();
				if($prev_tab.length) {
					showTab($prev_tab.attr('id'));
				}
			} else if(!e.shiftKey && $tfw_item.is('.tfw-tab-wrap > .tfw-item:last-child')) {
				$next_tab = $(this).closest('.tfw-tab-content').next();
				if($next_tab.length) {
					showTab($next_tab.attr('id'));
				}
			}
		});

		// Show tab of given ID
		function showTab(tab_id) {
			var $tabs = $('.tfw-tab');
			var $tabs_content = $('.tfw-tab-content');
			$tabs.add($tabs_content).removeClass('active');
			$('#' + tab_id).addClass('active');
			$tabs.filter('[data-tab="' + tab_id + '"]').addClass('active');
		}

	});

}(jQuery));
