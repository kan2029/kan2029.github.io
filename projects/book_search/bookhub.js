Bookhub = {
	books : {},
	bookIds : [],

	getBooksOnLoad: function(){
		$.getJSON('https://capillary.0x10.info/api/books?type=json&query=list_books', function (obj) { 
			Bookhub.books = obj;
			$('#book-list').empty();      
        	$('#total-books').html(obj.books.length);
     		for(var i=0; i < Bookhub.books.books.length; i++){
     			var thisBook = '<div class="panel panel-default bookhub-panel margin-bottom-10" data-price="'+Bookhub.books.books[i]['price'].split(' ')[0]+'" data-rating="'+Bookhub.books.books[i]['rating']+'" onclick="Bookhub.showBookDetails(this);Bookhub.selectBook(this);"><div class="panel-body book-panel" id="'+Bookhub.books.books[i]['id']+'"><span class="glyphicon glyphicon-book" aria-hidden="true"></span><span class="book-name">'+Bookhub.books.books[i]['name']+'</span><span id="book-price">'+Bookhub.books.books[i]['price']+'</span></span></div></div>';
 				$('#book-list').append(thisBook);
     		}
     		for(var i=0; i < 4; i++){
				$('.sort-ul').find('.glyphicon').eq(i).css('color', '#ccc');
			}
		});
	},	

	searchBooks: function(thisObj){
		var input = $(thisObj).val();
		$('#book-list').empty();
		$('#book-list').append('<img src="http://iamchriscollins.com/loading.gif">');	
		for(var i=0; i < 4; i++){
			$('.sort-ul').find('.glyphicon').eq(i).css('color', '#ccc');
		}
		if(!input){
			Bookhub.getBooksOnLoad();
			$('.to-be-hidden').removeClass('hidden');
	      	$('.to-be-shown').addClass('hidden');
		}else if(!isNaN(Number(input)) && (Number(input) <= 5) && (Number(input) >= 0)){
			$('#book-list').empty();
			var booksFetched = 0;     
			$('#book-list').empty();
    		for(var i=0; i < this.books.books.length; i++){
    			if(this.books.books[i]['rating'] == Number(input)){
    				var thisBook = '<div class="panel panel-default bookhub-panel margin-bottom-10" data-price="'+this.books.books[i]['price'].split(' ')[0]+'" data-rating="'+this.books.books[i]['rating']+'"  onclick="Bookhub.showBookDetails(this);Bookhub.selectBook(this);"><div class="panel-body book-panel" id="'+this.books.books[i]['id']+'"><span class="glyphicon glyphicon-book" aria-hidden="true"></span><span class="book-name">'+this.books.books[i]['name']+'</span><span id="book-price">'+this.books['price']+'</span></span></div></div>';
					$('#book-list').append(thisBook);	
					booksFetched++;
    			}
    		}
    		$('.to-be-hidden').removeClass('hidden');
  			$('.to-be-shown').addClass('hidden');	
    		if(booksFetched == 0){
    			$('#book-list').append('<div id="no-results"> No results to show... </div>');
    			$('#welcome-text').hide();
    		}
			$('#total-books').html(booksFetched); 
		}
		else{
			if(input.length >= 2){
				$('#book-list').empty();
				var booksFetched = 0;
			    $('#book-list').empty();
        		for(var i=0; i < this.books.books.length; i++){
        			if( (this.books.books[i]['name'].toLowerCase().includes(input.toLowerCase())) && (this.books.books[i]['name'].toLowerCase().search(input.toLowerCase()) == 0) ){
        				var thisBook = '<div class="panel panel-default bookhub-panel margin-bottom-10" data-price="'+this.books.books[i]['price'].split(' ')[0]+'" data-rating="'+this.books.books[i]['rating']+'"  onclick="Bookhub.showBookDetails(this);Bookhub.selectBook(this);"><div class="panel-body book-panel" id="'+this.books.books[i]['id']+'"><span class="glyphicon glyphicon-book" aria-hidden="true"></span><span class="book-name">'+this.books.books[i]['name']+'</span><span id="book-price">'+this.books.books[i]['price']+'</span></span></div></div>';
    					$('#book-list').append(thisBook);	
    					booksFetched++;
        			}
        			if( (this.books.books[i]['author'].toLowerCase().includes(input.toLowerCase())) && (this.books.books[i]['author'].toLowerCase().search(input.toLowerCase()) == 0) ){
        				//check if already appended
        				var duplicateBook = false;
        				for(var j=0; j < $('#book-list').find('.panel-body').length; j++){
        					if($('#book-list').find('.panel-body').eq(j).attr('id') == this.books.books[i]['id']){
        						duplicateBook = true;
        						break;
	        				}	
	        				else{
	        					continue;
	        				}
        				}
        				if(!duplicateBook){
        					var thisBook = '<div class="panel panel-default bookhub-panel margin-bottom-10" data-price="'+this.books.books[i]['price'].split(' ')[0]+'" data-rating="'+this.books.books[i]['rating']+'"  onclick="Bookhub.showBookDetails(this);Bookhub.selectBook(this);"><div class="panel-body book-panel" id="'+this.books.books[i]['id']+'"><span class="glyphicon glyphicon-book" aria-hidden="true"></span><span class="book-name">'+this.books.books[i]['name']+'</span><span id="book-price">'+this.books.books[i]['price']+'</span></span></div></div>';
	    					$('#book-list').append(thisBook);	
	    					booksFetched++;
        				}	
        			}

        		}
        		$('.to-be-hidden').removeClass('hidden');
      			$('.to-be-shown').addClass('hidden');		
        		if(booksFetched == 0){
        			$('#book-list').append('<div id="no-results"> No results to show... </div>');
        			$('#welcome-text').hide();
        		}
    			$('#total-books').html(booksFetched); 
			}
		}	
	},

	showBookDetails: function(thisObj){
		var thisBookId = $(thisObj).find('.panel-body').attr('id');
		if($('#first-time-show').length){
			$('#first-time-show').removeClass('hidden');
		}
		$('#book-image').attr('src','http://www.arabianbusiness.com/skins/ab.main/gfx/loading_spinner.gif');
		for(var i=0; i < this.books.books.length; i++){
			if(this.books.books[i]['id'] == thisBookId){
				$('#book-image').attr('src', this.books.books[i]['image']);
				$('#book-publisher').html(this.books.books[i]['details']['Publisher']);
				$('#book-author').html(this.books.books[i]['author']);
				$('#book-isbn').html(this.books.books[i]['details']['ISBN']);
				$('#book-binding').html(this.books.books[i]['details']['Binding']);
				$('#book-rating').html(this.books.books[i]['rating']);
				$('#book-description').html(this.books.books[i]['description']);
			}
		}
		$('.to-be-hidden').addClass('hidden');
        $('.to-be-shown').removeClass('hidden');
        $('#first-time-show').remove();
	},

	selectBook: function(thisObj){
		for(var i=0; i < $('.panel.panel-default.margin-bottom-10').length; i++){
			$('.panel.panel-default.margin-bottom-10').eq(i).removeClass('selected-book');
		}
		$(thisObj).addClass('selected-book');
	},

	sort: function(thisObj, criteria){
		var noOfBooks = $('#book-list').find('.bookhub-panel').length;
		if(criteria == 'price-high' || criteria == 'price-low'){
			var prices = [];
			for(var i=0; i < noOfBooks; i++){
				prices.push($('#book-list').find('.bookhub-panel').eq(i).attr('data-price'));
			}
			if(criteria == 'price-high'){
				prices.sort(function(a, b){return b-a});
			}else if(criteria == 'price-low'){
				prices.sort(function(a, b){return a-b});
			}	
			for(var i=0; i < prices.length; i++){
				for(var j=0; j < prices.length; j++){
					if($('#book-list').find('.bookhub-panel').eq(j).attr('data-price') == prices[i]){
						var bookClone = $('#book-list').find('.bookhub-panel').eq(j).clone();
						$('#book-list').append(bookClone);
						$('#book-list').find('.bookhub-panel').eq(j).remove();
					}
				}		
			}
		}
		else if(criteria == 'rating-high' || criteria == 'rating-low'){
			var ratings = [];
			for(var i=0; i < noOfBooks; i++){
				ratings.push($('#book-list').find('.bookhub-panel').eq(i).attr('data-rating'));
			}
			if(criteria == 'rating-high'){
				ratings.sort(function(a, b){return b-a});
			}else if(criteria == 'rating-low'){
				ratings.sort(function(a, b){return a-b});
			}
			for(var i=0; i < ratings.length; i++){
				for(var j=0; j < ratings.length; j++){
					if($('#book-list').find('.bookhub-panel').eq(j).attr('data-rating') == ratings[i]){
						var bookClone = $('#book-list').find('.bookhub-panel').eq(j).clone();
						$('#book-list').append(bookClone);
						$('#book-list').find('.bookhub-panel').eq(j).remove();
					}
				}		
			}
		}
		for(var i=0; i < 4; i++){
			$('.sort-ul').find('.glyphicon').eq(i).css('color', '#ccc');
		}
		$(thisObj).find('.glyphicon').css('color', '#666');
	},

	saveBookMark: function(){
		if($('#book-list').find('.selected-book').length !=0){
			var bookId = $('#book-list').find('.selected-book').find('.book-panel').attr('id');
			if( $.inArray(bookId, Bookhub.bookIds ) == -1 ){
				this.bookIds.push(bookId);
				localStorage['bookIds'] = JSON.stringify(Bookhub.bookIds);
				$('#total-bookmarks').html(localStorage['bookIds'].split(',').length);
			}
		}
	}
};		

$(document).ready(function(){
	Bookhub.getBooksOnLoad();
});