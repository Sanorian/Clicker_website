let clicks_per_click=1, click_count=0, auto_click=0;

function makeClick(){
    click_count+=clicks_per_click;
    
}
function buying_some_clicks(count_of_buying_clicks){
    if (click_count>=20*count_of_buying_clicks){
        clicks_per_click+=count_of_buying_clicks;
        click_count-=20*count_of_buying_clicks;
    }else{
        alert('You are missing '+(20*count_of_buying_clicks-click_count)+' clicks');
    }
}
function buying_some_automatise_clicks(count_of_buying_automatise_clicks){
    if (click_count>=100*count_of_buying_automatise_clicks){
        auto_click+=count_of_buying_automatise_clicks;
        click_count-=100*count_of_buying_automatise_clicks;
    }else{
        alert('You are missing '+(100*count_of_buying_automatise_clicks-click_count)+' clicks');
    }
}

var click_text = document.getElementById('mydiv');
setInterval(function(){
    click_text.innerHTML='<h2>Your count of clicks is '+click_count+'</h2>';
},10);
setInterval(function(){
    click_count+=auto_click
},1000);