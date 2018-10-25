	

		window.onload=lunbotu;
		var i=1;
		var dingshiqi;
		function lunbotu(){
			dingshiqi=window.setInterval("tupian()",3200);
			
		}

		function tupian(){

			

			i++;
			if(i>10){
				i=1;
			}
			var obj = document.getElementById("lunbo_img");

			obj.src="./images/lunbotu/"+i+".jpg";

		
			var lunbos=document.getElementById("lunbo_img");
			console.log(lunbos);
		
			lunbos.onmouseover=function(){

				clearInterval(dingshiqi);

			}
			lunbos.onmouseout=function(){
				dingshiqi=window.setInterval("tupian()",2000);
			}
			


		}
			

