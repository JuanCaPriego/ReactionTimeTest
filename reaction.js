function getRandomColor() {
				
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    } //ends for loop 
    return color; 


} // ends getRandomColor Function


var clickedTime; var createdTime; var reactionTime; 

function makeBox() {
        var time=Math.random();
        time=time*3000;
        console.log(time)
    
    setTimeout(function() {
    
        if (Math.random()>0.5) {
        
            document.getElementById("box").style.borderRadius="100px";
            
            } else {
            
                document.getElementById("box").style.borderRadius="0";
            }
            
        var top= Math.random();
            top= top*300;
        var left= Math.random();
            left= left*500; 
            
        document.getElementById("box").style.top = top + "px";
        document.getElementById("box").style.left = left + "px"; 
    
        document.getElementById("box").style.backgroundColor=getRandomColor();
    
        document.getElementById("box").style.display="block";
        
        createdTime=Date.now();
        
    }, time); 

}

// document.getElementById("box").onclick=function() {

//     clickedTime=Date.now();
    
//     reactionTime=(clickedTime-createdTime)/1000;
    
//     document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + reactionTime + "seconds";
    
//     this.style.display="none";
    
//     makeBox();
    
    
// }
var startTime,a,b,c,d,e,f,g,h,i,j;
var startFunc, endFunc, startFunc1, endFunc1;
var i = 0;
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function getReaction(){
    document.getElementById('background3').style.display='none';
    document.getElementById('background1').style.display='none';
    document.getElementById('background2').style.display='inline';
    interval = randomIntFromInterval(2,5);
    interval = interval*1000;
    //console.log(interval);
    setTimeout(function(){
        startTime = Date.now();
        document.getElementById('background2').style.display='none';
        document.getElementById('background1').style.display='none';
        document.getElementById('background3').style.display='inline';
        b = document.getElementById('background3').onclick=function(){
            clickedTime = Date.now()
            
            console.log((clickedTime-startTime)/1000); 
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
        // document.getElementById('background3').style.display='none';
        // document.getElementById('background1').style.display='none';
        // document.getElementById('background2').style.display='inline';
        // interval = randomIntFromInterval(2,5);
        // interval = interval*1000;
        // console.log(interval);
        // setTimeout(function(){
        //     startTime = Date.now();
        //     document.getElementById('background2').style.display='none';
        //     document.getElementById('background1').style.display='none';
        //     document.getElementById('background3').style.display='inline';
        //     b = document.getElementById('background3').onclick=function(){
        //         clickedTime = Date.now()
                
        //         console.log((clickedTime-startTime)/1000); 
        //     }     
        // },interval);
        // intervalTwo = interval+1000;
        // setTimeout(function(){
        //     document.getElementById('background3').style.display='none';
        //     document.getElementById('background2').style.display='none';
        //     document.getElementById('background1').style.display='inline';
        // },intervalTwo);
        // intervalThree = intervalTwo+5000;
        // setTimeout(function(){
        //     document.getElementById('background3').style.display='none';
        //     document.getElementById('background1').style.display='none';
        //     document.getElementById('background2').style.display='inline';
        // },intervalThree);
        // i = i+1;
    a = getReaction();

    //console.log('a', a);
   
    //console.log('a', a);
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
    
    
    // d = getReaction();
    // setTimeout(function(){
    //     d = getReaction();
    // },a+b+c+d);
    // // e = getReaction();
    // setTimeout(function(){
    //     e = getReaction();
    // },a+b+c+d+e);
}




//makeBox(); 





