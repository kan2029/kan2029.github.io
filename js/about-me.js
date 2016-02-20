var karan = {
	model: {
		basicInfo: {
			name: 'Karanbir Kajal',
			summary: '',
			imageUrl: 'img/my-picture.gif'
		},
		resume: {
			name: 'Karanbir Kajal',
			place: 'Bangalore, Karnataka',
			email: 'karanbir.kajal@gmail.com',
			mobile: '+91-9972241602',
			imageUrl: 'img/resume-my-picture.jpg',
			socialLinks: [
				{
					img: 'img/linkedin.png',
					link: 'http://linkedin.com/in/karanbir-kajal-8a026688'
				},
				{
					img: 'img/github.png',
					link: 'http://github.com/kan2029'
				},
				{
					img: 'img/facebook.png',
					link: 'http://www.facebook.com/karanbirkajla'
				},
				{
					img: 'img/youtube.png',
					link: 'http://www.youtube.com/user/karanbirkajal'
				},
			],
			skills: [
				{
					imgUrl: 'img/cpp.png',
					label: 'C++'
				},
				{
					imgUrl: 'img/html5.png',
					label: 'HTML 5'
				},
				{
					imgUrl: 'img/css3.png',
					label: 'CSS 3'
				},
				{
					imgUrl: 'img/js.png',
					label: 'Javascript'
				},
				{
					imgUrl: 'img/jquery.jpg',
					label: 'JQuery'
				},
				{
					imgUrl: 'img/bootstrap.png',
					label: 'Bootstrap'
				},
				{
					imgUrl: 'img/react.png',
					label: 'React'
				}
			],
			//add github, linkedin etc
			education: [
				{
					degree: 'Integrated Dual Degree (B.Tech + M.Tech)',
					institution: 'IIT Roorkee, Roorkee, Uttarakhand',
					period: '2009 - 2014',
					description: 'Electronics and Communication Engineering, specialisation in Wireless Communication with CGPA of 7.8',
					logo: 'img/iitr.png'
				},
				{
					degree: 'AISSCE',
					institution: 'Spring Dale Senior School, Amritsar, Punjab',
					period: '2009',
					description: 'All India Senior School Certificate Exam (Class 12th) conducted by CBSE with a percentage score of 87.8%',
					logo: 'img/sdss.gif'
				},
				{
					degree: 'AISSE',
					institution: 'Spring Dale Senior School, Amritsar, Punjab',
					period: '2007',
					description: 'All India Secondary School Examination (Class 10th) conducted by CBSE with a percentage score of 89.4%',
					logo: 'img/sdss.gif'
				}
			],
			workExperience:[
				{
					position: 'SDE-1 (Front-end)',
					company: 'Commonfloor.com, Bangalore',
					logo: 'img/cf.png',
					period: 'Apr 2015 - Present',
					description: '- Worked on various projects involving HTML, CSS, JavaScript, JQuery, Bootstrap, React, PHP, MySQL<br>'+ 
								'- Developed tools for brokers/builders and internal service delivery team to post listing/project details'+
								'- Worked on advertisements for our homepage<br>'+
								'- Worked on some features of live-in tour (360 degree views) for mobile devices<br>'+
								'- Have experience in responsive web design and handling different mobile devices'
					//add description about react/ customer ads too
				},
				{
					position: 'Manager',
					company: 'Tata Motors, Pune',
					logo: 'img/tml.gif',
					period: 'Aug 2014 - Mar 2015',
					description: "- Was actively involved in dealing with an engineering counterpart and designing product release requirements for 'in-vehicle' apps<br>"+
					"- Designing these apps was in light with Tata Motor's 'HorizonNext' strategy."
				}
			],
			accomplishments: [
				{
					title: 'You Made A Difference',
					imgSrc: 'img/youMadeADifference.jpg',
					description: 'Was chosen the best performer for the quarter July - Sept 2015 because I completed all tasks well before their corresponding target dates'					
				},
				{
					title: 'Pat On The Back',
					imgSrc: 'img/patOnTheBack.jpg',
					description: 'Was chosen the best fresher of my batch mainly because of my speed of execution and willingness to learn more'
				},
			],

			references: [
				{

				},
				{

				}
			],
		},
	},
	controller: {
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
	},
	viewBasicInfo: {
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
			$('.my-image').eq(0).attr('src', this.basicInfo.imageUrl);
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
		},

	},
	viewResume: {
		initResume: function(){
			if($('#resume').hasClass('hidden')){
				$('#resume').css('left', '3000px');
				$('#resume').removeClass('hidden');
				$('html, body').animate({
		        	scrollTop: $("#resume").offset().top -50
		    	}, 300);
					

							

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
										'<p>'+this.resume.education[edu].description+'</p>'+
										'<img class="education-insti-logo" src="'+this.resume.education[edu].logo+'"></div><br>';	
					$('.resume-education').append(thisEducation);	
				}

				$('.resume-work-exp-section').find('h1').eq(0).html('Work Experience');
				for(var exp in this.resume.workExperience){
					var thisExperience = '<div class="work-exp"><h3>'+this.resume.workExperience[exp].position+'</h3>'+
										'<h4>'+this.resume.workExperience[exp].company+'</h4>'+
										'<h4><small>'+this.resume.workExperience[exp].period+'</small></h4>'+
										'<p>'+this.resume.workExperience[exp].description+'</p>'+
										'<img class="work-company-logo" src="'+this.resume.workExperience[exp].logo+'"></div><br>';	
					$('.resume-work-exp').append(thisExperience);
				}
				
				$('.resume-accomplishments-section').find('h1').eq(0).html('Accomplishments');
				for(var acc in this.resume.accomplishments){
					var thisAccomplishment = '<div class="accomplishment"><h3>'+this.resume.accomplishments[acc].title+'</h3>'+
										'<section class="col-xs-12 accomplishment-img-wrapper"><img class="accomplishment-img" src="'+this.resume.accomplishments[acc].imgSrc+'"></section>'+
										'<p>'+this.resume.accomplishments[acc].description+'</p></div><br>';	
					$('.resume-accomplishments').append(thisAccomplishment);
				}
				setTimeout(function(){
					$({count: 2000}).animate({count: 0}, {
					    duration: 1000,
					    easing: 'easeOutBack',
					    step: function() {
					        $('#resume').css('left', this.count);
					    }
					});	
				}, 300);


			}
			else{
				$('html, body').animate({
		        	scrollTop: $("#resume").offset().top -50
		    	}, 300);
			}
			 
			
		}
	},
};

$(document).ready(function(){
	karan.controller.init();
});