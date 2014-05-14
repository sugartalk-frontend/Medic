(function(){
	var buildSelectors = function(selectors, source, characterToPrependWith) {
		$.each(source, function(propertyName, value){
			selectors[propertyName] = characterToPrependWith + value;
		});
	};

	var buildAllSelectors = function(classNames, ids) {
		var selectors = {};
		if(classNames) {
			buildSelectors(selectors, classNames, ".");
		}
		if(ids) {
			buildSelectors(selectors, ids, "#");
		}
		return selectors;
	};

	var classNames = {
		selectForm: 'select-form',
		closeDialog: 'close-dialog',
		bgDialog: 'bg-dialog',
		disabled: 'disabled',
		closeSetup: 'close-setup',
		setupPopup: 'setup-popup',
		setupWheel: 'setup-wheel',
		displayNone: '_display_none'
	};

	var ids = {};

	var selectors = buildAllSelectors(classNames, ids);

	var $selectForm,
		$closeDialog,
		$bgDialog,
		$disabled,
		$closeSetup,
		$setupPopup,
		$setupWheel,
		$showSetupPopup;

	$(function(){
		$selectForm = $(selectors.selectForm);
		$closeDialog = $(selectors.closeDialog);
		$bgDialog = $(selectors.bgDialog);
		$disabled = $(selectors.disabled);
		$closeSetup = $(selectors.closeSetup);
		$setupPopup = $(selectors.setupPopup);
		$setupWheel = $(selectors.setupWheel);

		$selectForm.on('change', 'select', function(){
			var $span = $(this).closest(selectors.selectForm).find('span');
			$span.text($(this).val());
		});

		$closeDialog.on('click', function(e){
			var elem = e.target || e.srcElement;
			if ($(elem).hasClass(classNames.closeDialog)){
				closeDialog();
			}
		});

		$disabled.on('click', function(e){
			e.preventDefault();
			return false;
		});

		$closeSetup.on('click', function(e){
			$(this).closest(selectors.setupPopup).hide();
		});

		$setupWheel.on('click', function(e){
			var el = e.target || e.srcElement;
			if ($(el).hasClass(classNames.setupWheel)) {
				if ($showSetupPopup) {
					$showSetupPopup.hide();
				}
				$showSetupPopup = $(this).find(selectors.setupPopup).toggle();
			}
		});
	});

	function closeDialog() {
		$('.dialog-window').addClass(classNames.displayNone);
	}
})();