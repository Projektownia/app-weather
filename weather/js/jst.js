var apiCode = 'http://api.openweathermap.org/data/2.5/forecast?=qid=524901&APPID=9c398cd4cf22ab63cebf65a655f9d64d';

	 /// the function rensposible for all activites   ///
     var $valueCity = $('.chekin-op');
function main_Element(){
	 	 
    var $valueCity = $('.chekin-op');
    var $batton_first = $('.btn-primary');
      $('.card').hide();

$batton_first.on('click',function(e){

	e.preventDefault();
     
     var city = $valueCity.val();
	
if(/\D/.test(city)){
	
///ajax elements///	

    var idCityformy = 'api.openweathermap.org/data/2.5/forecast?id=524901'; 
    var keyAppid =	'&appid=%209c398cd4cf22ab63cebf65a655f9d64d';
    var timer = 5;	
	
//// ajax request///

$.ajax({
	
    type: 'GET',
    url:'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=9c398cd4cf22ab63cebf65a655f9d64d',
    dataType: 'json',
    success: function(data){

	    var Main_object =  result_for_object(data);	
            $('.card').show();       
     } 	
});	

     $valueCity.val('');


    }else{

        
    }

});
    
}
  // Weather setting for api //
function result_for_object(data){ 

    var blackboard_eight = []; 

// add new record for backbord_eight and shortening the string

function  data_result_for_table(){  

    var blackboard_seven = [];  
 
for(var i = 0; i <= 39; i++ ){

    var long_string = data.list[i].dt_txt;	
    var short_String = long_string.substring(0,10);
        blackboard_seven.push(short_String); 
    } 

for (var i= 0 ; i <= blackboard_seven.length ; i++ ){
    
    if(blackboard_seven[i] !== blackboard_seven[i+1]  ){   

    blackboard_eight.push(blackboard_seven[i]); 

    }
  }
} 

// function-start. add new record for backbord_eight  //

data_result_for_table();

    var blackboard_two = []; 
    var  blackboard_three = []; 
    var blackboard_four = []; 
    var blackboard_five = [];	
    var blackboard_six =[];  
    var  blackboard_seven =[];  
    var sum_one = 1;   
    var sum_two = 0;    
    var sum_three = 0;    


//bulding_block_weather  argument_one(data) argument_two=(element-for-if()),
 //argument_three(elements-card-from-dom-object) argument_four(el-list-from-DOM) argument_four(color_name)

 function  bulding_block_weather(data,Termin,loc_number_one,loc_number_two){  
	  
  for( var i = 0 ; i <= 39 ; i++ ){	

	var temperature_value = data.list[i].main.temp ; 
	var ToCloud_value = data.list[i].clouds.all; ; 
	var  Wind_value = data.list[i].wind.speed ; 
	var  data_value = data.list[i].dt_txt;  
	var short_data_value =  data_value.substring(0,10);      
			   					
   if( short_data_value === Termin ){

	blackboard_six.push( short_data_value); 
	blackboard_two.push(temperature_value); 
	blackboard_three.push( ToCloud_value); 
    blackboard_four.push( Wind_value);  
					 
	  sum_one += blackboard_two[i];     
	  sum_two  += blackboard_three[i];      
	  sum_three += blackboard_four[i]; 		     

     }   
}	
	      
       /// operation on the model DOM ///
$(loc_number_one).each(function(index){

    var $this = $(this);
    var Ad_row_one =   $this.find('#one'); 
    var Ad_row_two =   $this.find('#two');
	var Ad_row_three =   $this.find('#tree');
	
				  // calculation operations  //
				                                  
        Ad_row_one.text('temperatura : '+Math.round((sum_one/blackboard_three.length)-273)+' C');    
        Ad_row_two.text('zachmurzenie : '+(sum_two/blackboard_three.length).toFixed(2)+'%');        
        Ad_row_three.text('Prędkość Wiatru : '+(sum_three/blackboard_three.length).toFixed(2)+'km/h'); 

        
});


var Time = new Date(Termin);
var day = Time.getDay();

    switch(day){
	    case 0: 
	    $(loc_number_two).text('Niedziela');	
	    break;
	    case 1:  
	    $(loc_number_two).text('Poniedziałek');
	    break;
	    case 2:
	    $(loc_number_two).text('Wtorek');
	    break;
	    case 3:
	    $(loc_number_two).text('Środa');
	    break;
	    case 4:
	    $(loc_number_two).text('Czwartek');
	    break;
	    case 5:
	    $(loc_number_two).text('Piątek'); 
	    break;
	    case 6:
	    $(loc_number_two).text('Sobota');
	    break;
}

  }

  


 
             //elements-from-file-index.html// 
          var color_album = ['#color3','#color3','#color4','#color5'];
          var $card_Album = ['.card-title1','.card-title2','.card-title3','.card-title4','.card-title5'];
          var $tab_list = ['#list-numberone','#list-numbertwo','#list-numbertree','#list-numberfour','#list-numberfive'];

  //bulding_block_weather  argument_one(data) argument_two=(element-blackbord),
  //argument_three(elements-card-from-dom-object) argument_four(el-list-from-DOM)

                bulding_block_weather(data,blackboard_eight[0],$tab_list[0],$card_Album[0]);   
                bulding_block_weather(data,blackboard_eight[1],$tab_list[1],$card_Album[1]);   
                bulding_block_weather(data,blackboard_eight[2],$tab_list[2],$card_Album[2]);   
                bulding_block_weather(data,blackboard_eight[3],$tab_list[3],$card_Album[3]);   
                bulding_block_weather(data,blackboard_eight[4],$tab_list[4],$card_Album[4]);                  
   }

main_Element();

       


	   


