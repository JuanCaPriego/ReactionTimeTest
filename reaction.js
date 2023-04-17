var clickedTime; var createdTime; var reactionTime; 

var startTime,a,b,c,d,e,f,g,h,i,j;
var startFunc, endFunc, startFunc1, endFunc1;
var i = 0;
var l = [];
var l_int = [];
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function getReaction(){
    document.getElementById('background3').style.display='none';
    document.getElementById('background1').style.display='none';
    document.getElementById('background2').style.display='inline';
    interval = randomIntFromInterval(2,5);
    interval = interval*1000;
    l_int.push(interval/1000);
    //console.log(interval);
    setTimeout(function(){
        startTime = Date.now();
        document.getElementById('background2').style.display='none';
        document.getElementById('background1').style.display='none';
        document.getElementById('background3').style.display='inline';
        b = document.getElementById('background3').onclick=function(){
            clickedTime = Date.now()
            
            console.log((clickedTime-startTime)/1000); 
            l.push((clickedTime-startTime)/1000);
        }     
    },interval);
    intervalTwo = interval+1000;
    setTimeout(function(){
        document.getElementById('background3').style.display='none';
        document.getElementById('background2').style.display='none';
        document.getElementById('background1').style.display='inline';
    },intervalTwo);
    intervalThree = intervalTwo+5000;
    setTimeout(function(){
        // document.getElementById('background3').style.display='none';
        // document.getElementById('background1').style.display='none';
        // document.getElementById('background2').style.display='inline';
    },intervalThree);
    //console.log('tre ', intervalThree);
    return intervalThree    
}

document.getElementById('app').ondblclick=function(){
    console.log('click');
    a = getReaction();

    setTimeout(b = function(){
        startFunc = Date.now();
        time = getReaction();
        endFunc = Date.now();
        intevalFunc = (endFunc-startFunc)/1000;  
        //console.log('int ', intevalFunc);
        setTimeout(function(){
            d = getReaction();
            setTimeout(function(){
                startFunc1 = Date.now();
                e = getReaction();
                endFunc = Date.now();
                intevalFunc = (endFunc-startFunc)/1000;  
                //console.log('int ', intevalFunc);
                setTimeout(function(){
                    f = getReaction();
                    setTimeout(function(){
                        g = getReaction();
                        setTimeout(function(){
                            h = getReaction();
                            setTimeout(function(){
                                i = getReaction();
                                setTimeout(function(){
                                    j = getReaction();
                                    setTimeout(function(){
                                        k = getReaction();
                                        setTimeout(function(){
                                            document.getElementById('background3').style.display='none';
                                            document.getElementById('background2').style.display='none';
                                            document.getElementById('background1').style.display='none';
                                            console.log(l);
                                            console.log(l_int);
                                        },k);
                                        
                                    },j);
                                },i);
                            },h);
                        },g);
                    },f);
                },e);
            },d);
        },a+intevalFunc);
    },a);
    
}




