karan.controller = {
		init: function(){
			karan.viewBasicInfo.init();
		},
		getBasicInfo: function(){
			return karan.model.basicInfo;
		},
		getResume: function(){
			return karan.model.resume;
		},
		initResume: function(){
			karan.viewResume.initResume()
		},
	};

	karan.viewBasicInfo = {
		init: function(){
			var loaderImg = '<section class="loader-img-wrapper hidden-div"><img class="loader-img" src="img/progress.gif"></section>';
			$('body').prepend(loaderImg);
			$('.loader-img-wrapper').fadeIn(700);
			setTimeout(function(){
				$('.loader-img-wrapper').fadeOut();
			},2000);
			setTimeout(function(){
				karan.viewBasicInfo.initBackground();
			},2300);
			setTimeout(function(){
				karan.viewBasicInfo.initLinks();
			},2500);

		},

		initBackground: function(){
			$('body').addClass('background');
		},

		initLinks: function(){
			$('.container').removeClass('hidden');
			this.basicInfo = karan.controller.getBasicInfo();
			$('.my-image').attr('src', 'img/my-picture.gif');
			$('.main-intro').prepend('<h1>'+this.basicInfo.name+'</h1><hr>');
			for(trait in this.basicInfo.traits){
				$('.traits-ul').append('<li class="traits-li">'+this.basicInfo.traits[trait]+'</li>');
			}
			for(contact in this.basicInfo.contacts){
				$('.contacts-ul').append('<li class="contacts-li"><section class="contacts-li-img-wrapper"><img src="'+this.basicInfo.contacts[contact]+'" class="contacts-li-img"></section></li>');
			}
			
			if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

				$({top: -2000}).animate({top: 0}, {
				    duration: 1000,
				    easing: 'easeOutSine',
				    step: function() {
				        $('#main-content').css('top', this.top);
				    }
				});	
				setTimeout(function(){
					$({top: 3000}).animate({top: 0}, {
					    duration: 1000,
					    easing: 'easeOutSine',
					    step: function() {
					        $('#link1').css('top', this.top);
					    }
					});	
				}, 100);
				setTimeout(function(){
					$({top: 3000}).animate({top: 0}, {
					    duration: 1000,
					    easing: 'easeOutSine',
					    step: function() {
					        $('#link2').css('top', this.top);
					    }
					});	
				}, 200);
				setTimeout(function(){
					$({top: 3000}).animate({top: 0}, {
					    duration: 1000,
					    easing: 'easeOutSine',
					    step: function() {
					        $('#link3').css('top', this.top);
					    }
					});	
				}, 300);
				setTimeout(function(){
					$({top: 3000}).animate({top: 0}, {
					    duration: 1000,
					    easing: 'easeOutSine',
					    step: function() {
					        $('#link4').css('top', this.top);
					    }
					});	
				}, 400);
			}
			else{
				$('#main-content').css('top', 0);
				$('#link1').css('top', 0);
				$('#link2').css('top', 0);
				$('#link3').css('top', 0);
				$('#link4').css('top', 0);
			}
		},

	};

	karan.viewResume = {
		initResume: function(){
			if($('#resume').hasClass('hidden')){
				$('#resume').css('opacity', 0);
				$('#resume').removeClass('hidden');
				$('html, body').animate({
		        	scrollTop: $("#resume").offset().top -50
		    	}, 300);
									
				setTimeout(function(){

					this.resume = karan.controller.getResume();
					$('.resume-img').attr('src', this.resume.imageUrl);
					$('.resume-name').html(this.resume.name);
					$('.resume-place').html(this.resume.place);
					$('.resume-email').html(this.resume.email);
					$('.resume-mobile').html(this.resume.mobile);

					for(socialLink in this.resume.socialLinks){
						$('.social-links').eq(0).append('<a href="'+this.resume.socialLinks[socialLink].link+'" target="_blank"><img src="'+this.resume.socialLinks[socialLink].img+'" class="social-link-img"></a>')
					}

					$('.resume-skills-section').find('h1').eq(0).html('Skills');
					for(var skill in this.resume.skills){
						var thisSkill = '<section class="skill-img-wrapper">'+
										'<img class="skill-img" src="'+this.resume.skills[skill].imgUrl+'" alt="'+this.resume.skills[skill].label+'">'+
										'<span class="text-content"><span>'+this.resume.skills[skill].label+'</span></span>'+
										'</section>';
						$('.resume-skills').append(thisSkill);
					}

					$('.resume-education-section').find('h1').eq(0).html('Education');
					for(var edu in this.resume.education){
						var thisEducation = '<div class="education"><h3>'+this.resume.education[edu].degree+'</h3>'+
											'<h4>'+this.resume.education[edu].institution+'</h4>'+
											'<h4><small>'+this.resume.education[edu].period+'</small></h4>'+
											'<img class="education-insti-logo" src="'+this.resume.education[edu].logo+'">'+
											'<p>'+this.resume.education[edu].description+'</p>'+
											'</div><br>';	
						$('.resume-education').append(thisEducation);	
					}

					$('.resume-work-exp-section').find('h1').eq(0).html('Work Experience');
					for(var exp in this.resume.workExperience){
						var thisExperience = '<div class="work-exp"><h3>'+this.resume.workExperience[exp].position+'</h3>'+
											'<h4>'+this.resume.workExperience[exp].company+'</h4>'+
											'<h4><small>'+this.resume.workExperience[exp].period+'</small></h4>'+
											'<img class="work-company-logo" src="'+this.resume.workExperience[exp].logo+'">'+
											'<p>'+this.resume.workExperience[exp].description+'</p>'+
											'</div><br>';	
						$('.resume-work-exp').append(thisExperience);
					}
					
					$('.resume-accomplishments-section').find('h1').eq(0).html('Accomplishments');
					for(var acc in this.resume.accomplishments){
						var thisAccomplishment = '<div class="accomplishment"><h3>'+this.resume.accomplishments[acc].title+'</h3>'+
											'<section class="col-xs-12 accomplishment-img-wrapper"><img class="accomplishment-img" src="'+this.resume.accomplishments[acc].imgSrc+'"></section>'+
											'<p>'+this.resume.accomplishments[acc].description+'</p></div><br>';	
						$('.resume-accomplishments').append(thisAccomplishment);
					}

					$('.resume-certifications-section').find('h1').eq(0).html('Certifications');
					for(var certi in this.resume.certifications){
						var thisCertification = '<div class="certification">'+
											'<section class="col-xs-12 certification-img-wrapper"><img class="certification-img" src="'+this.resume.certifications[certi].imgSrc+'"></section>'+
											'</div><br>';	
						$('.resume-certifications').append(thisCertification);
					}
				}, 400);

				setTimeout(function(){
					$({count: 0}).animate({count: 1}, {
					    duration: 1500,
					    easing: 'easeOutBack',
					    step: function() {
					        $('#resume').css('opacity', this.count);
					    }
					});	
				}, 500);
			}
			else{
				$('html, body').animate({
		        	scrollTop: $("#resume").offset().top -50
		    	}, 300);
			}
		}
	};
//};

$(document).ready(function(){
	karan.controller.init();
});