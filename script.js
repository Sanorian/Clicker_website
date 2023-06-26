let clicks_per_click=1, click_count=0, auto_click=0;
function makeClick(){
    click_count+=clicks_per_click;
}
function buy3Clicks(){
    if (clicks_per_click>=3){ alert('You don`t need it');}
    else if (click_count>=30){
        clicks_per_click=3;
        click_count-=30;
    }else{
        alert('You are missing '+(30-click_count)+' clicks');
    }
}
function buy5Clicks(){
    if (clicks_per_click>=5){ alert('You don`t need it');}
    else if (click_count>=150){
        clicks_per_click=5;
        click_count-=150;
    }else{
        alert('You are missing '+(150-click_count)+' clicks');
    }
}
function buy10Clicks(){
    if (clicks_per_click>=10){ alert('You don`t need it');}
    else if (click_count>=500){
        clicks_per_click=10;
        click_count-=500;
    }else{
        alert('You are missing '+(500-click_count)+' clicks');
    }
}
function buy100Clicks(){
    if (clicks_per_click>=100){ alert('You don`t need it');}
    else if (click_count>=5000){
        clicks_per_click=100;
        click_count-=5000;
    }else{
        alert('You are missing '+(5000-click_count)+' clicks');
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