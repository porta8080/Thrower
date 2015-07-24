jQuery.fn.extend({
	'thrower': function(validation,defaultMessage,prevent,show_alert){
		this.on('keypress',function(e){
		  var t = e.target;
		  var k = e.which || e.keyCode;
		  var c = String.fromCharCode(k);

		  var i = (prevent) ? c : t.value+c;
		  var r = validation(i,e,t,t.value,c,k);

		  if(r !== true){
			if(typeof r !== 'string') r = defaultMessage;
			if(prevent) e.preventDefault();
			if(show_alert) alert(r);
			else{
				this.setCustomValidity(r);
				$(this).parents('form').find('> submit, > button.submit').trigger('click');
			}
		}else this.setCustomValidity('');
	});
  }
});

/*

$('input').customValidation(function(i,e,t,v,c,k){
	if(i.match(/[1-9a-z]/g) == null){
	  return 'Didn\'t match the criteria!';
	}

	return true;
},'Error!');

*/