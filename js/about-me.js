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
		getProjects: function(){
			return karan.model.miniProjects;
		},
		initResume: function(){
			karan.viewResume.initResume()
		},
		initProjects: function(){
			karan.viewProjects.initProjects();
		},
		highlightLinkOnScroll: function(section){
			var sectionOffsetTop = $('#'+section).offset().top;
			var currentOffsetMiddle = $(window).scrollTop()+150;
			var sectionHeight = Number($('#'+section).css('height').slice(0,4));
			
			if(currentOffsetMiddle > sectionOffsetTop && currentOffsetMiddle < (sectionOffsetTop+sectionHeight) && $('.'+section+'-link').css('opacity') == 0.3){	
				$('.nav-li').css('opacity', 0.3);	
				setTimeout(function(){
					$({count: 0.3}).animate({count: 1}, {
					    duration: 500,
					    easing: 'easeOutBack',
					    step: function() {
					        $('.'+section+'-link').css('opacity', this.count);
					    }
					});	
				}, 30);
			}
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

		animateLinks: function(element, topStart, topEnd, timeout){
			setTimeout(function(){
				$({top: topStart}).animate({top: topEnd}, {
				    duration: 1000,
				    easing: 'easeOutSine',
				    step: function() {
				        $('#'+element).css('top', this.top);
				    }
				});	
			}, timeout);
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
				$('.contacts-ul').append('<li class="contacts-li"><a href="'+this.basicInfo.contacts[contact].link+'" target="_blank"><section class="contacts-li-img-wrapper"><img src="'+this.basicInfo.contacts[contact].imgSrc+'" class="contacts-li-img"></section></a></li>');
			}
			
			if(!( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
				this.animateLinks('main-content', -2000, 0, 0);
				this.animateLinks('link1', 3000, 0, 100);
				this.animateLinks('link2', 3000, 0, 200);
				this.animateLinks('link3', 3000, 0, 300);
				this.animateLinks('link4', 3000, 0, 400);
			}
			else{
				$('#main-content').css('top', 0);
				$('#link1').css('top', 0);
				$('#link2').css('top', 0);
				$('#link3').css('top', 0);
				$('#link4').css('top', 0);
			}
		}
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

	karan.viewProjects = {
		initProjects: function(){
			if($('#projects').hasClass('hidden')){
				$('#projects').css('opacity', 0);
				$('#projects').removeClass('hidden');

				setTimeout(function(){
					this.projects = karan.controller.getProjects();
					for(var project in this.projects.projects){
						var projectSample = $('.sample-project').clone().removeClass('hidden').removeClass('sample-project');
						projectSample.find('.project-image').attr('src', this.projects.projects[project].imageUrl);
						projectSample.find('.project-title').html('<h3>'+this.projects.projects[project].title+'</h3>');
						projectSample.find('.project-description').html('<p>'+this.projects.projects[project].description+'</p>');
						projectSample.find('.project-link').html('<label>Link: &nbsp</label><a href="'+this.projects.projects[project].workingLink+'" target="_blank">'+this.projects.projects[project].title+'</a>');
						projectSample.find('.project-github').html('<label>Github source: &nbsp</label><a href="'+this.projects.projects[project].gitHubSrc+'" target="_blank">'+this.projects.projects[project].gitHubSrc+'</a>');
						
						for(var thisHighlight in this.projects.projects[project].highlights){
							projectSample.find('.project-highlights').append('<li class="highlight">'+this.projects.projects[project].highlights[thisHighlight]+'</li>');
						}

						$('#projectList').append(projectSample);
					}
					$('html, body').animate({
			        	scrollTop: $("#projects").offset().top -50
			    	}, 400);
				}, 10);

				setTimeout(function(){
					$({count: 0}).animate({count: 1}, {
					    duration: 1500,
					    easing: 'easeOutBack',
					    step: function() {
					        $('#projects').css('opacity', this.count);
					    }
					});	
				}, 700);
			}
			else{
				$('html, body').animate({
		        	scrollTop: $("#projects").offset().top -50
		    	}, 300);
			}
		},
	};		

$(document).ready(function(){

	karan.controller.init();
	
	$(window).scroll(function(){
		var linksOffsetTop = $('#links').offset().top;
		var linksHeight = Number($('#links').css('height').slice(0,3));
		if($(window).scrollTop() > linksOffsetTop + linksHeight){
			if($('#navigation-bar').css('opacity') == 0){
				$({count: 0}).animate({count: 1}, {
				    duration: 1000,
				    easing: 'easeOutBack',
				    step: function() {
				        $('#navigation-bar').css('opacity', this.count);
				    }
				});	
			}
			karan.controller.highlightLinkOnScroll('resume');
			karan.controller.highlightLinkOnScroll('projects');	
		}
		else{
			if($('#navigation-bar').css('opacity') == 1){
				$({count: 1}).animate({count: 0}, {
				    duration: 1000,
				    easing: 'easeOutBack',
				    step: function() {
				        $('#navigation-bar').css('opacity', this.count);
				    }
				});	
			}
				
		}
	});
});