$(function(){
	$('#plus').on('mouseup',function() {
		if (!$('#link1').hasClass('link1out')) {
			$('#link1').addClass('link1out');
			$('#link2').addClass('link2out');
			$('#link3').addClass('link3out');
			$('#link4').addClass('link4out');
			$('#plus').addClass('times');
			$('#link1').removeClass('link1in');
			$('#link2').removeClass('link2in');
			$('#link3').removeClass('link3in');
			$('#link4').removeClass('link4in');
			$('#plus').removeClass('plus');
		}
		else {
			$('#link1').addClass('link1in');
			$('#link2').addClass('link2in');
			$('#link3').addClass('link3in');
			$('#link4').addClass('link4in');
			$('#plus').addClass('plus');
			$('#link1').removeClass('link1out');
			$('#link2').removeClass('link2out');
			$('#link3').removeClass('link3out');
			$('#link4').removeClass('link4out');
			$('#plus').removeClass('times');
		}
	});
    
    $('#plus2').on('mouseup',function() {
		if (!$('#link5').hasClass('link5out')) {
			$('#link5').addClass('link5out');
			$('#plus2').addClass('times');
			$('#link5').removeClass('linkin');
			$('#plus2').removeClass('plus2');
		}
		else {
			$('#link5').addClass('link5in');
			$('#plus2').addClass('plus2');
			$('#link5').removeClass('link5out');
			$('#plus2').removeClass('times');
		}
	});
    
    $('#plus3').on('mouseup',function() {
		if (!$('#link6').hasClass('link6out')) {
			$('#link6').addClass('link6out');
			$('#link7').addClass('link7out');
			$('#plus3').addClass('times');
			$('#link6').removeClass('link6in');
			$('#link7').removeClass('link7in');
			$('#plus3').removeClass('plus3');
		}
		else {
			$('#link6').addClass('link6in');
			$('#link7').addClass('link7in');
			$('#plus3').addClass('plus3');
			$('#link6').removeClass('link6out');
			$('#link7').removeClass('link7out');
			$('#plus3').removeClass('times');
		}
	});
    
    $('#plus4').on('mouseup',function() {
		if (!$('#link8').hasClass('link8out')) {
			$('#link8').addClass('link8out');
			$('#link9').addClass('link9out');
			$('#plus4').addClass('times');
			$('#link8').removeClass('link8in');
			$('#link9').removeClass('link9in');
			$('#plus4').removeClass('plus4');
		}
		else {
			$('#link8').addClass('link8in');
			$('#link9').addClass('link9in');
			$('#plus4').addClass('plus4');
			$('#link8').removeClass('link8out');
			$('#link9').removeClass('link9out');
			$('#plus4').removeClass('times');
		}
	});
    
    $('#plus5').on('mouseup',function() {
		if (!$('#link10').hasClass('link10out')) {
			$('#link10').addClass('link10out');
			$('#link11').addClass('link11out');
			$('#plus5').addClass('times');
			$('#link10').removeClass('link10in');
			$('#link11').removeClass('link11in');
			$('#plus5').removeClass('plus5');
		}
		else {
			$('#link11').addClass('link10in');
			$('#link11').addClass('link11in');
			$('#plus5').addClass('plus5');
			$('#link10').removeClass('link10out');
			$('#link11').removeClass('link11out');
			$('#plus5').removeClass('times');
		}
	});
    
});