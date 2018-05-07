$(document).ready(function() {

    //Welcome alert when website first loads
    $('.welcomeAlert').slideToggle(1000).delay(5000).slideToggle(1000);


    //Changes text depending on if collapsed.
    var flag = true;
    $('#expandToggle').click(function() {
        if (flag === true) {
            $('#expandToggle').text("Collapse all");
            $('.dropDwnAll').slideDown();
            flag = false;
        } else {
            $('#expandToggle').text("Expand all");
            $('.dropDwnAll').slideUp();

            flag = true;

        }
    });



    // // Drops down all course requirment tables
    // $('.dda').click(function() {
    //     if(flag === true){}
    //     $('.dropDwnAll').slideToggle();
    // });


    //Drop down when table header is clicked

    $('.dd1').click(function() {
        $('.dropDwn1').slideToggle();
    });
    $('.dd2').click(function() {
        $('.dropDwn2').slideToggle();
    });
    $('.dd3').click(function() {
        $('.dropDwn3').slideToggle();
    });
    $('.dd4').click(function() {
        $('.dropDwn4').slideToggle();
    });
    $('.dd5').click(function() {
        $('.dropDwn5').slideToggle();
    });
    $('.dd6').click(function() {
        $('.dropDwn6').slideToggle();
    });
    $('.dd7').click(function() {
        $('.dropDwn7').slideToggle();
    });
	   $('.navbar-toggler').click(function() {
		$('.navbar-collapse').toggleClass('collapse show');
		
		
    });
	
	


    //Dynamically changes to bold depending on the time of day
    var time = new Date();
    var hr = time.getHours();

    if (hr > 19 || hr < 7) {
   $('p').css("font-weight", "bolder");
   $('td').css("font-weight", "bolder");
    }
});