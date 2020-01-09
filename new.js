
        var leftOffset = 0;
        var topOffset = (200, 0);
        var rightOffset = 200;
        var toTheTop = (0, 200);
        var counter = 10;
        var congrats = "Congrats you Win!"


        var moveHeading = function() {
            
            
            $('#heading').offset({
                top:0,
                left: leftOffset
            });
            leftOffset++;


            if (leftOffset > 200) {
              
                
                $('#heading').offset({
                   top: topOffset,
                    left: 200
                    
                });
                topOffset++;
               
            
            }
            if (topOffset > 200) {
                 $('#heading').offset({
                     left:rightOffset,
                     top: 200
                     
            });
           rightOffset--                           
        
            };
             if (rightOffset < 0) {
                $('#heading').offset({
                 left:(200,0),
                    top:toTheTop
                    
                    
                });
                toTheTop--;
             }
        
            
            
        if (toTheTop < 0){
      leftOffset = 0,
        topOffset = (200, 0),
         rightOffset = 200,
          toTheTop= (200);
            
       
            }
        
          
        };

   var ghost = function () {
       $("#heading").text(counter)
       counter--;
   }
   
 

    
    var nuts = function () {
        if (counter < 8)
{    clearInterval(cc)   }
        
   if (counter === 9){
      var cc = setInterval(moveHeading,10)
   }
        if (counter < 8)
{    clearInterval(cc)   }
   }
  
    
    
  
       
   var x = setTimeout(nuts,20)
   
  
     
    
 $("#heading").click(ghost)
  $("#heading").click(moveHeading)
        $("#heading").click(nuts)
         
