karan = {};

karan.model = {

	basicInfo: {
		name: 'Karanbir Kajal',
		traits: ['Web Developer', 'Musician', 'Foodie'],
		imgSrc: 'img/my-picture.gif',
		contacts: [
			{
				imgSrc: 'img/linkedin-contact.png',
				link: 'https://www.linkedin.com/in/karanbir-kajal-8a026688'
			},
			{	
				 imgSrc: 'img/github-contact.png',
				 link: 'https://github.com/kan2029'
			},
			{	
				imgSrc: 'img/youtube-contact.png',
				link: 'http://www.youtube.com/user/karanbirkajal'
			},
			{
				imgSrc: 'img/fb-contact.png',
				link: 'http://www.facebook.com/karanbirkajla'
			},
			{
				imgSrc: 'img/google-contact.png',
				link: 'https://plus.google.com/114755228560479582746/posts'
			}	
		]
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
				imgUrl: 'img/jquery.png',
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
				logo: 'img/sdss.png'
			},
			{
				degree: 'AISSE',
				institution: 'Spring Dale Senior School, Amritsar, Punjab',
				period: '2007',
				description: 'All India Secondary School Examination (Class 10th) conducted by CBSE with a percentage score of 89.4%',
				logo: 'img/sdss.png'
			}
		],
		workExperience:[
			{
				position: 'SDE-1 (Front-end)',
				company: 'Commonfloor.com, Bangalore',
				logo: 'img/cf.png',
				period: 'Apr 2015 - Present',
				description: '- Worked on various projects involving HTML, CSS, JavaScript, JQuery, Bootstrap, React, PHP, MySQL<br>'+ 
							'- Developed tools for brokers, builders and internal service delivery team to post listing/project details<br>'+
							'- Worked on advertisements for our homepage using \'React\' framework<br>'+
							'- Worked on some features of live-in tour (360 degree views) for mobile devices<br>'+
							'- Have experience in responsive web design and handling different mobile devices'
			},
			{
				position: 'Manager',
				company: 'Tata Motors, Pune',
				logo: 'img/tml.png',
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
		certifications: [
			{ //add more details
				imgSrc: 'img/frontendNanodegree.jpg'
			}
		],
		references: [
			{

			},
			{

			}
		]
	},

	miniProjects: {
		projects: [
			{
				title: 'Book Search',
				description: 'A simple book search feature was implemented as a part of Hackerearth challenge. The task was to look for books in an already provided API as the user types book name or author, and show its details. Sorting by price, rating was also implemented and the whole page was made responsive.',
				imageUrl: 'img/book-search-img.png',
				gitHubSrc: 'https://github.com/kan2029/hackerearth-book-search',
				workingLink: 'projects/book_search/bookhub.html',
				highlights: ['Responsive and Adaptive design']
			},
			{
				title: 'Neighborhood Map',
				description: "Location filter was implemented using javacript's 'Knockout' framework and Google maps. The task was to filter the list of locations as well as their corresponding markers on searching. Wikipedia API was also used to display information on user interaction",
				imageUrl: 'img/neighborhood-map-img.png',
				gitHubSrc: 'https://github.com/kan2029/frontend-nanodegree-neighborhood-map',
				workingLink: 'projects/neighborhood_map/index.html',
				highlights: ['Knockout framework', 'Google Map API', 'MediaWiki API']
			},
			{
				title: 'Reach The River',
				description: "A classic single-player arcade game was developed where the player has to cross the path full of bugs moving at different speeds and reach the river. The main focus of this project was to create efficient javascript objects (player, enemies) rather than game engine and HTML canvas. Concepts like javascrip prototypes, 'this' keyword, pseudoclassical subclasses, were implemented. Other features like collision handling, player boundaries, changeable character, winning streak were implemented too.",
				imageUrl: 'img/reach-the-river-img.png',
				gitHubSrc: 'https://github.com/kan2029/frontend-nanodegree-arcade-game',
				workingLink: 'projects/reach_the_river/reach_the_river.html',
				highlights: ['Object Oriented Javascript']
			},
			{
				title: 'Test your memory',
				description: 'An old classic that tests your memory. Finding it easy??? Difficulty level is in your hands ...',
				imageUrl: 'img/memory.png',
				gitHubSrc: 'https://github.com/kan2029/memory_game',
				workingLink: 'projects/memory_game/index.html',
				highlights: ['Vanilla JS']
			}
		]
	}
}