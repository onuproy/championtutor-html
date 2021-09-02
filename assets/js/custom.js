jQuery(document).ready(function () {

	// Nave Manu

	jQuery('.bar-icon').click(function () {
		jQuery('.header-right-area').toggleClass('open_side_menu');
		return false;
	});

	// jQuery('.collapsed').click(function () {
	// 	return false;
	// });

	// jQuery('.mb-0 a').click(function () {
	// 	return false;
	// });


	// Get Start Video Dashboard page
		jQuery('.get_start_video_top_btn').click(function () {
			jQuery('.get_start_video_top_area').hide();
			jQuery('.get_seart_video_new_secion_area').show();
			return false;
		});
	// Get Start Video Dashboard page Mobile
		jQuery('.get_start_video_top_btn_2').click(function () {
			jQuery('.get_start_video_top_area_2').hide();
			jQuery('.get_seart_video_new_secion_area_2').show();
			return false;
		});	



	jQuery('.bar-icon').click(function () {
		jQuery('.side_manu_ovelay_color').toggleClass('open_side_menu_color');
		return false;
	});


	jQuery('.side_manu_ovelay_color').click(function () {
		jQuery('.header-right-area').toggleClass('open_side_menu');
		return false;
	});

	jQuery('.side_manu_ovelay_color').click(function () {
		jQuery('.side_manu_ovelay_color').toggleClass('open_side_menu_color');
		return false;
	});


	// Mobile menu
	jQuery('.dropdown-item-area').on('click', function (e) {
		if (Modernizr.mq('screen and (max-width:991px)')) {
			e.preventDefault();
			jQuery(this).next(jQuery('.submenu')).slideToggle();
		}
	})
	jQuery('.popup-close-icon').click(function () {
		jQuery('.contact-popup-area').addClass('popup-fixed1');
		return false;
	});
	jQuery('.popup-close-icon').click(function () {
		jQuery('.bar').addClass('show');
		return false;
	});
	jQuery('.side-left-area').click(function () {
		jQuery('.contact-popup-area').removeClass('popup-fixed1');
		return false;
	});
	jQuery('.search-area .search-icon').click(function () {
		jQuery('.seach-form-area').slideToggle();
		return false;
	});


	// Job applay time show
	jQuery('.placeholder_c_show').click(function(){
			jQuery('.dropdown_content_p_i_show').slideToggle(900);
			return false;
	});	

	
	jQuery('.custom-select-item  .select-options li').click(function () {
		jQuery('.select-styled').removeClass('select-styled-active-color');
		jQuery('.select-styled').addClass('select-styled-active-color');

		return false;
	});

	jQuery('.quiz-list1  .select-options li').click(function () {
		jQuery('.select-styled').addClass('select-styled-active-color');
		return false;
	});

	jQuery('.quiz-list4 .select-options li').click(function () {
		jQuery('.select-styled').addClass('select-styled-active-color-2');
		return false;
	});

	jQuery('.quiz-list2 .multiselect-container.dropdown-menu li a').click(function () {
		jQuery('.multiselect.dropdown-toggle.btn.btn-default').addClass('multiselect-active-color');
		return false;
	});


	// North Show Item 1
	jQuery("#chkPassport").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport").hide();
            jQuery("#AddPassport").show();
        }
    });

    // North Show Item 2
    jQuery("#chkPassport_2").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport_2").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport_2").hide();
            jQuery("#AddPassport").show();
        }
    });
    // North Show Item 3
    jQuery("#chkPassport_3").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport_3").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport_3").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 4
    jQuery("#chkPassport_4").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport_4").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport_4").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 5
    jQuery("#chkPassport_5").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport_5").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport_5").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 6
    jQuery("#chkPassport_6").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport_6").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport_6").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 7
    jQuery("#chkPassport_7").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassport_7").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassport_7").hide();
            jQuery("#AddPassport").show();
        }
    });


    // Dashboard

     // North Show Item 11
    jQuery("#chkPassport_11").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_11").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_11").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 12
    jQuery("#chkPassport_12").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_12").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_12").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 13
    jQuery("#chkPassport_13").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_13").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_13").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 14
    jQuery("#chkPassport_14").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_14").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_14").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 15
    jQuery("#chkPassport_15").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_15").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_15").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 16
    jQuery("#chkPassport_16").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_16").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_16").hide();
            jQuery("#AddPassport").show();
        }
    });
     // North Show Item 17
    jQuery("#chkPassport_17").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery("#dvPassportm_17").show();
            jQuery("#AddPassport").hide();
        } else {
            jQuery("#dvPassportm_17").hide();
            jQuery("#AddPassport").show();
        }
    });







	// Dashboard Table
	jQuery(document).ready(function() {
	  jQuery("#example").DataTable();
	});

	 
	//Aplay job Table
	jQuery(document).ready(function() {
	  jQuery("#example").DataTable();
	});



	// Apply Open job
	jQuery('.open_button_modal .button a').click(function () {
		jQuery('.view_jobs_list_details_area .container').addClass('applay_open_job');
		return false;
	});

	jQuery('.open_button_modal .button a').click(function () {
		jQuery('.applay_overlay_coloer').addClass('applay_open_job_color');
		return false;
	});
	


	// Table
	jQuery('.open_button_modal_2').click(function () {
		jQuery('.view_jobs_list_details_area .container').addClass('applay_open_job');
		return false;
	});

	jQuery('.open_button_modal_2').click(function () {
		jQuery('.applay_overlay_coloer').addClass('applay_open_job_color');
		return false;
	});





	jQuery('.applay_overlay_coloer').click(function () {
		jQuery('.view_jobs_list_details_area .container').removeClass('applay_open_job');
		return false;
	});
	jQuery('.applay_overlay_coloer').click(function () {
		jQuery('.applay_overlay_coloer').removeClass('applay_open_job_color');
		return false;
	});


	



	// Dashboard Table
	jQuery(document).ready(function() {
	  jQuery("#example").DataTable();
	});


	// tuitor
	jQuery('.tuitor-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 1000,
		slideSpeed: 500,
		navText: ['<img src="assets/images/icon/left.svg">', '<img src="assets/images/icon/right.svg">'],
		dots: false,
		responsive: {
			0: {
				items: 1,
				dots: true,
			},
			575: {
				items: 1,
				dots: true,
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});	
	
	// tuitor
	jQuery('.invest_slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayTimeout: 7000,
		smartSpeed: 1000,
		slideSpeed: 500,
		dots: true,
		items:1,
	});
	// testimonials
	jQuery('.testimonials-slider').owlCarousel({
		loop: true,
		margin: 60,
		nav: false,
		smartSpeed: 2500,
		slideSpeed: 1500,
		navText: ['<img src="assets/images/icon/arrow-left1.svg">', '<img src="assets/images/icon/arrow-right1.svg">'],
		items: 1,
		autoplay: true,
		autoplayTimeout: 10000,
		dots: true,
	});
	// Tuitor subject Slider New
	jQuery('.tuitor-subject-slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		slideSpeed: 500,
		navText: ['<img src="assets/images/icon/left.svg">', '<img src="assets/images/icon/right.svg">'],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});
	
	// encounter topics
	jQuery('.mobile-encounter-topics').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		slideSpeed: 500,
		navText: ['<img src="assets/images/icon/left.svg">', '<img src="assets/images/icon/right.svg">'],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	// sciencec single item MObile
	jQuery('.mobile_why_science_mobile').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: false,
		autoplayTimeout: 8000,
		smartSpeed: 1000,
		slideSpeed: 500,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	// tuitor
	jQuery('.online_tution_slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 1000,
		slideSpeed: 500,
		dots: true,
		items:1,
	});

	// Online find Slider
	jQuery('.online_find_your_slider').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 1000,
		slideSpeed: 500,
		dots: true,
		items:1,
	});

	// logged page
	jQuery('.companies_slider_area').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: false,
		autoplayTimeout: 7000,
		smartSpeed: 1000,
		slideSpeed: 500,
		dots: true,
		items:3,
		responsive: {
			0: {
				items: 1
			},
			575: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});





	// Tabs
	jQuery("#tabs").tabs({
		// collapsible: true
	});
	// Tabs 2
	jQuery("#tabs_puja").tabs({
		// collapsible: true
	});
	// Tabs 3
	jQuery("#qualifications").tabs({
		// collapsible: true
	});
	// Tabs 4
	jQuery("#qualifications_dashboard").tabs({
		// collapsible: true
	});

	// Tabs 5
	jQuery("#qualifications_dashboard_profile").tabs({
		// collapsible: true
	});

	// Tabs 6
	jQuery("#subandlocation_dashboard_profile").tabs({
		// collapsible: true
	});


	// Tabs 7
	jQuery("#dashboard_tab").tabs({
		// collapsible: true,
	});

	// Tab 8
	jQuery("#dashboard_second_tab").tabs({
		// collapsible: true
	});

	// Tab 9
	jQuery("#applay_job_profile_tab").tabs({
		// collapsible: true
	});

	// Tab 9
	jQuery("#applay_job_profile_tab_2").tabs({
		// collapsible: true
	});
	
	// logged tab
	jQuery("#review_applications").tabs({
		// collapsible: true
	});

	// logged tab
	jQuery("#Archive_Jobs").tabs({
		// collapsible: true
	});
	
	// applay_job_profile_tab
	jQuery("#applay_job_profile_tab1").tabs({
		// collapsible: true
	});



	// Country Specific Mobile  Entry
	var telInput = jQuery("#phone"),
		  errorMsg = jQuery("#error-msg"),
		  validMsg = jQuery("#valid-msg");

		// initialise plugin
		telInput.intlTelInput({

		  allowExtensions: true,
		  formatOnDisplay: true,
		  autoFormat: true,
		  autoHideDialCode: true,
		  autoPlaceholder: true,
		  defaultCountry: "auto",
		  ipinfoToken: "yolo",

		  nationalMode: false,
		  numberType: "MOBILE",
		  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		  preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
		  preventInvalidNumbers: true,
		  separateDialCode: true,
		  initialCountry: "auto",
		  geoIpLookup: function(callback) {
		  jQuery.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
		    var countryCode = (resp && resp.country) ? resp.country : "";
		    callback(countryCode);
		  });
		},
		 
		});

		var reset = function() {
		  telInput.removeClass("error");
		  errorMsg.addClass("hide");
		  validMsg.addClass("hide");
		};

		// on blur: validate
		telInput.blur(function() {
		  reset();
		  if (jQuery.trim(telInput.val())) {
		    if (telInput.intlTelInput("isValidNumber")) {
		      validMsg.removeClass("hide");
		    } else {
		      telInput.addClass("error");
		      errorMsg.removeClass("hide");
		    }
		  }
		});

		// on keyup / change flag: reset
		telInput.on("keyup change", reset);



	// Aso JS
	// AOS.init({
	// 	duration: 1000,
	// 	delay: 50,
	// 	once: true
	// 	});
	// Wow Animation Css
	wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: true, // default
		live: true // default
	})
	wow.init();
	// Image Upload
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				jQuery("#imagePreview").css("background-image", "url(" + e.target.result + ")");
				jQuery("#imagePreview").hide();
				jQuery("#imagePreview").fadeIn(650);
			};
			reader.readAsDataURL(input.files[0]);
		}
	}
	jQuery("#imageUpload").change(function () {
		readURL(this);
	});
	jQuery('#start-quiz').click(function () {
		jQuery('.banner-content-item').hide();
		jQuery('.quiz-list1').show();
		return false;
	});
	jQuery('.next1').click(function () {
		jQuery('.quiz-list2').show();
		jQuery('.quiz-list1').hide();
		return false;
	});
	jQuery('.pre-quiz1').click(function () {
		jQuery('.quiz-list1').show();
		jQuery('.quiz-list2').hide();
		return false;
	});
	jQuery('.next2').click(function () {
		jQuery('.quiz-list2').hide();
		jQuery('.quiz-list3').show();
		return false;
	});
	jQuery('.pre-quiz2').click(function () {
		jQuery('.quiz-list2').show();
		jQuery('.quiz-list3').hide();
		return false;
	});
	jQuery('.skip').click(function () {
		jQuery('.quiz-list4').show();
		jQuery('.quiz-list3').hide();
		return false;
	});
	jQuery('.pre-quiz3').click(function () {
		jQuery('.quiz-list3').show();
		jQuery('.quiz-list4').hide();
		return false;
	});
	jQuery('#example-getting-started').multiselect();
	jQuery('#example-getting-started1').multiselect();
	jQuery('#example-getting-started2').multiselect();
	jQuery('.dropdown-toggle').click(function () {
		jQuery('.multiselect-container').dropdown();
	});
	jQuery('#example-getting-started-logged').multiselect();


	// Add Css
	jQuery( ".multiselect-container.dropdown-menu" ).wrap( "<div class='new'></div>" );
	
	jQuery('.mobile_select_checkbox .select-options li').click(function(){
		jQuery('.mobile_select_checkbox .select-options li').removeClass("radio_active");
		jQuery(this).addClass("radio_active");
	});
	jQuery('.lession_area.custom_radio_box h6 img').hover(function () {
		jQuery('.lessions_content').show();
		return false;
	});


	// Show Hide password
		jQuery(".reveal").on('click',function() {
	    var jQuerypwd = jQuery(".pwd");
	    if (jQuerypwd.attr('type') === 'password') {
	        jQuerypwd.attr('type', 'text');
	    } else {
	        jQuerypwd.attr('type', 'password');
	    }
	});

	// Show Hide password
		jQuery(".reveal_2").on('click',function() {
	    var jQuerypwd = jQuery(".pwd_2");
	    if (jQuerypwd.attr('type') === 'password') {
	        jQuerypwd.attr('type', 'text');
	    } else {
	        jQuerypwd.attr('type', 'password');
	    }
	});

	// Home Next page mobile
	jQuery('.all-step-area .button a').click(function () {
		jQuery('.question-step-area').show();
		return false;
	});






});




// Home Banner
jQuery('.custom-select-item select').each(function () {
	var jQuerythis = jQuery(this),
		numberOfOptions = jQuery(this).children('.custom-select-item option').length;
	jQuerythis.addClass('select-hidden');
	jQuerythis.wrap('<div class="select"></div>');
	jQuerythis.after('<div class="select-styled"></div>');
	var jQuerystyledSelect = jQuerythis.next('div.select-styled');
	jQuerystyledSelect.text(jQuerythis.children('option').eq(0).text());
	var jQuerylist = jQuery('<ul />', {
		'class': 'select-options'
	}).insertAfter(jQuerystyledSelect);
	for (var i = 0; i < numberOfOptions; i++) {
		jQuery('<li />', {
			text: jQuerythis.children('option').eq(i).text(),
			rel: jQuerythis.children('option').eq(i).val()
		}).appendTo(jQuerylist);
	}
	var jQuerylistItems = jQuerylist.children('li');
	jQuerystyledSelect.click(function (e) {
		e.stopPropagation();
		jQuery('div.select-styled.active').not(this).each(function () {
			jQuery(this).removeClass('active').next('ul.select-options').hide();
		});
		jQuery(this).toggleClass('active').next('ul.select-options').toggle();
	});
	jQuerylistItems.click(function (e) {
		e.stopPropagation();
		jQuerystyledSelect.text(jQuery(this).text()).removeClass('active');
		jQuerythis.val(jQuery(this).attr('rel'));
		jQuerylist.hide();
		//console.log(jQuerythis.val());
	});
	jQuery(document).click(function () {
		jQuerystyledSelect.removeClass('active');
		jQuerylist.hide();
	});
});


//End Home Banner
jQuery(document).ready(function () {
	var current_fs, next_fs, previous_fs; //fieldsets
	var opacity;
	var current = 1;
	var steps = jQuery("fieldset").length;
	setProgressBar(current);
	jQuery(".next").click(function () {
		current_fs = jQuery(this).parent();
		next_fs = jQuery(this).parent().next();
		//Add Class Active
		jQuery("#progressbar li").eq(jQuery("fieldset").index(next_fs)).addClass("active");
		jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).addClass("complete_field");
		jQuery(".mobile-progressbar li").eq(jQuery("fieldset").index(current_fs)).addClass("complete_field");
		//show the next fieldset
		next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({
			opacity: 0
		}, {
			step: function (now) {
				// for making fielset appear animation
				opacity = 1 - now;
				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				next_fs.css({
					'opacity': opacity
				});
			},
			duration: 500
		});
		setProgressBar(++current);
	});
	jQuery(".previous").click(function () {
		current_fs = jQuery(this).parent();
		previous_fs = jQuery(this).parent().prev();
		//Remove class active
		jQuery("#progressbar li").eq(jQuery("fieldset").index(current_fs)).removeClass("active");
		jQuery("#progressbar li").eq(jQuery("fieldset").index(previous_fs)).removeClass("complete_field");
		jQuery(".mobile-progressbar li").eq(jQuery("fieldset").index(previous_fs)).removeClass("complete_field");
		//show the previous fieldset
		previous_fs.show();
		//hide the current fieldset with style
		current_fs.animate({
			opacity: 0
		}, {
			step: function (now) {
				// for making fielset appear animation
				opacity = 1 - now;
				current_fs.css({
					'display': 'none',
					'position': 'relative'
				});
				previous_fs.css({
					'opacity': opacity
				});
			},
			duration: 500
		});
		setProgressBar(--current);
	});

	function setProgressBar(curStep) {
		var percent = parseFloat(100 / steps) * curStep;
		percent = percent.toFixed();
		jQuery(".progress-bar").css("width", percent + "%")
	}
	jQuery(".submit").click(function () {
		return false;
	})



	// Text Count
	$("textarea").keyup(function(){
		el = $(this);
		if(el.val().length >= 5000){
			el.val( el.val().substr(0, 5000) );
		} else {
			$("#xxxxxxxx").text(0+el.val().length);
		}
	});

	$("textarea").keyup(function(){
		el = $(this);
		if(el.val().length >= 5000){
			el.val( el.val().substr(0, 5000) );
		} else {
			$("#xxxxxxxx_2").text(0+el.val().length);
		}
	});


	$('.select-options').change(function () {
	var select=$(this).find(':selected').val();        
	 $(".hide").hide();
	 $('#' + select).show();

		}).change();






});

	// Popup
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 600) {
			jQuery('.contact-popup-area').addClass('popup-fixed');
			jQuery('.contact-popup-area').removeClass('contact-popup');
		} else {
			jQuery('.contact-popup-area').removeClass('popup-fixed');
			jQuery('.contact-popup-area').addClass('contact-popup');
		}
	});





	// Range
	class Slider {
	  constructor (rangeElement, valueElement, options) {
	    this.rangeElement = rangeElement
	    this.valueElement = valueElement
	    this.options = options

	    // Attach a listener to "change" event
	    this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
	  }

	  // Initialize the slider
	  init() {
	    this.rangeElement.setAttribute('min', options.min)
	    this.rangeElement.setAttribute('max', options.max)
	    this.rangeElement.value = options.cur

	    this.updateSlider()
	  }

	  // Format the money
	  asMoney(value) {
	    return '$' + parseFloat(value)
	      .toLocaleString('en-US', { maximumFractionDigits: 2 })
	  }

	  generateBackground(rangeElement) {   
	    if (this.rangeElement.value === this.options.min) {
	      return
	    }

	    let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
	    return 'background: linear-gradient(to right, #EA4335, #EA4335 ' + percentage + '%, #F9C7C2 ' + percentage + '%, #F9C7C2 100%)'
	  }

	  updateSlider (newValue) {
	    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
	    this.rangeElement.style = this.generateBackground(this.rangeElement.value)
	  }
	}

	let rangeElement = document.querySelector('.range [type="range"]');
	let valueElement = document.querySelector('.range .range__value span'); 

	let options = {
	  min: 5,
	  max: 100,
	  cur: 50
	}

	if (rangeElement) {
	  let slider = new Slider(rangeElement, valueElement, options)

	  slider.init()
	}

	// Range
	let rangeElement_2 = document.querySelector('.range_2 [type="range"]');
	let valueElement_2 = document.querySelector('.range_2 .range__value_2 span'); 

	if (rangeElement_2) {
	  let slider = new Slider(rangeElement_2, valueElement_2, options)

	  slider.init()
	}


// Tutors View Apply Desktop
	var header = document.getElementById("myDIV");
		var btns = header.getElementsByClassName("v_t_button");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		  var current = document.getElementsByClassName("v_t_active_button");
		  current[0].className = current[0].className.replace(" v_t_active_button", "");
		  this.className += " v_t_active_button";
		  });
	};



	// Tutors View Apply Mobile
	var header = document.getElementById("myDIV_mobile");
		var btns = header.getElementsByClassName("v_t_button_mobile");
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		  var current = document.getElementsByClassName("v_t_active_button_mobile");
		  current[0].className = current[0].className.replace(" v_t_active_button_mobile", "");
		  this.className += " v_t_active_button_mobile";
		  });
	};



