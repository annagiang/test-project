function main() {

(function () {
   'use strict'
	//Script
	//-----------------------------------
    jQuery(document).ready(function($){
		$('input[type="checkbox"]').rsCheckbox();
		$('.content-form form').parsley();
	});	
}());
}
main();