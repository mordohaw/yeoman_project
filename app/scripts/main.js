console.log('\'Allo \'Allo!');
$(document).ready(function() {
			//Ajout d'un compteur lors du passage du curseur au-dessus des images
			$("img").hover(function(){
				console.log($(this).attr("alt"));
			});
			$(".list-group-item").hover(function(){
				$(this).css("color","#fff");
			});
			//Récupération des informations sur WebService
			jQuery.get("https://swapi.co/api/people/",function(data){
				var indicePersonnage=1;
				for(var i=0; i<=data.results.length; i++){
					console.log('result:',data.results[i].name);
					var myTarget = "monModal"+i;
					$("body #listePerso").append("<li class=list-group-item ><button type='button' class='btn btn-primary' data-toggle='modal' data-target=#monModal"+i+">" +data.results[i].name+"</button></li>");
					console.log('i =',i);
					getPeopleInfo("https://swapi.co/api/people/"+indicePersonnage, myTarget);
					indicePersonnage=indicePersonnage+1;
				}
 
				});
			
			
		 });

		var getPeopleInfo = function(url, target){
			jQuery.get(url ,function(dataPers){
						
						console.log(target,dataPers);
						$("body").append("<div class='modal' id="+target+"> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-header'> <h5 class='modal-title'>"+dataPers.name+"</h5>"
						+"<button type='button' class='close' data-dismiss='modal' aria-label='Close'> <span aria-hidden='true'>&times;</span></button></div><div class='modal-body'></div>"
						+"<div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button></div></div></div></div></div>");
						$("body #"+target+" .modal-body").append("<p>"+dataPers.name+", height: "+dataPers.height+", mass : "+dataPers.mass+"</p>");
						$("body #"+target+" .modal-body").append("<h4>"+"Films :"+"</h4>");
						for(var i=0;i<dataPers.films.length;i++){
							$("body #"+target+" .modal-body").append("<p>"+dataPers.films[i]+"</p>");
						}
						
					});
		}
		 
 