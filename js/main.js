(function(){
	var $selectForm,
		$closeDialog,
		$bgDialog;

	$(function(){
		$selectForm = $('.select-form');
		$closeDialog = $('.close-dialog');
		$bgDialog = $('.bg-dialog');

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
	});

	function closeDialog() {
		$('.dialog-window').addClass('_display_none');
	}
})();