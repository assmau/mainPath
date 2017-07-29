$(document).ready(function() {


	var btnSignup = document.getElementsByClassName('btn-signup');
	var toggleSignup = document.getElementsByClassName('toggle-signup');

	$(btnSignup).on('click', function() {
		$(toggleSignup).toggle();
	});

	var navbarBtn = document.getElementsByClassName('btn-bar');
	var navTabs = document.getElementsByClassName('tabs');

	$(navbarBtn).on('click', function() {
		$(navTabs).toggle();
	});

    // $('.tabs li:first').addClass('active');

        $('.tabs li a').click(function(){
            $('.tabs li').removeClass('active');
            $(this).parent().addClass('active');
            var currentTab = $(this).attr('href');
            $('.content .items').hide();
            $(currentTab).show();
            return false;
    	});


        $('input').on('blur', function() {
        	var fldInput = $(this).val().length;
        	var fldText = $(this).prev().text();


        	if(fldInput === 0) {
        		$(this).css('border', '3px solid red').next().text(' Неверный формат вводимых данных!').addClass('txt-error')
        	}
        	else {
               $(this).css('border', '3px solid #23b14d').next().text('').removeClass('txt-error');
        	}

        	if (fldInput < 5 && fldInput > 0) {
        		$(this).css('border', '3px red solid').next().text('должно содержать более 4-х символов!').addClass('txt-error');
        	}
        });

    $('.send').on('click', function(){

    	$('form[name=form]').trigger('submit');
    });
    
    $('form[name=form]').on('submit', function(){
    	var fldInput = $(this).val().length;
      	$('input').blur();
      	if (fldInput != false) {
      		return true;
      	} 
      	else {
        return false;
      }
    });
});