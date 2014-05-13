(function(){
	var $selectForm;

	$(function(){
		$selectForm = $('.select-form');

		$selectForm.on('change', 'select', function(){
			var $span = $(this).closest('.select-form').find('span');
			$span.text($(this).val());
		});
	});
})();