let clicks_per_click=1, click_count=0, auto_click=0;
function makeClick(){
    click_count+=clicks_per_click;
}
function buy3Clicks(){
    if (click_count>=60){
        clicks_per_click+=3;
        click_count-=60;
    }else{
        alert('You are missing '+(60-click_count)+' clicks');
    }
}
function buy5Clicks(){
    if (click_count>=100){
        clicks_per_click+=5;
        click_count-=100;
    }else{
        alert('You are missing '+(100-click_count)+' clicks');
    }
}
function buy10Clicks(){
    if (click_count>=200){
        clicks_per_click+=10;
        click_count-=200;
    }else{
        alert('You are missing '+(200-click_count)+' clicks');
    }
}
function buy100Clicks(){
    if (click_count>=2000){
        clicks_per_click+=100;
        click_count-=2000;
    }else{
        alert('You are missing '+(2000-click_count)+' clicks');
    }
}
function buy1automise_click(){
    if (click_count>=100){
        auto_click+=1;
        click_count-=100;
    }else{
        alert('You are missing '+(100-click_count)+' clicks');
    }}
    function buy10automise_click(){
        if (click_count>=1000){
            auto_click+=10;
            click_count-=1000;
        }else{
            alert('You are missing '+(1000-click_count)+' clicks');
        }}
        function buy100automise_click(){
            if (click_count>=10000){
                auto_click+=100;
                click_count-=10000;
            }else{
                alert('You are missing '+(10000-click_count)+' clicks');
            }}
var click_text = document.getElementById('mydiv');
setInterval(function(){
    click_text.innerHTML='<h2>Your count of clicks is '+click_count+'</h2>';
},10);
setInterval(function(){
    click_count+=auto_click
},1000);