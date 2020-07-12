const interval = setInterval(() => {
 
 const header = document.querySelector(".ng-star-inserted");
  
  if(header){
       
       
       //clearInterval(interval)
       var botoes = document.getElementsByTagName("button");
       var fim = botoes.length
       var i = 0
       
       for (i; i < fim; i++){
                          
          if(botoes[i].className === "gmat-button mat-focus-indicator mat-tooltip-trigger mat-stroked-button mat-button-base"){
             botoes[i].click()
          }
 
        }
     }

}, 15000)
