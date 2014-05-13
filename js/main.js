(function(){
	var $selectForm,
		$closeDialog,
		$bgDialog,
		$disabled;

	$(function(){
		$selectForm = $('.select-form');
		$closeDialog = $('.close-dialog');
		$bgDialog = $('.bg-dialog');
		$disabled = $('.disabled');

		$selectForm.on('change', 'select', function(){
			var $span = $(this).closest('.select-form').find('span');
			$span.text($(this).val());
		});

		$closeDialog.on('click', function(e){
			var elem = e.target || e.srcElement;
			if ($(elem).hasClass('close-dialog')){
				closeDialog();
			}
		});

		$disabled.on('click', function(e){
			e.preventDefault();
			return false;
		});
	});

	function closeDialog() {
		$('.dialog-window').addClass('_display_none');
	}
})();