console.log('\'Allo \'Allo!');
$(document).ready(function() {
			//Ajout d'un compteur lors du passage du curseur au-dessus des images
			$('img').hover(function(){
				console.log($(this).attr('alt'));
			});
			$('.list-group-item').hover(function(){
				$(this).css('color','#fff');
			});
			//Récupération des informations sur WebService
			jQuery.get('https://swapi.co/api/people/',function(data){

				for(var i=1;i<data.results.length;i++){
					console.log('result:',data.results[i].name);
					$('body #listePerso').append('<li class='+ 'list-group-item'+'>'+data.results[i].name+'</li>');
				}
				$('.list-group-item').click(function(){
    
				});
 

				});
			
			
		 });
