let value = document.getElementById("value");
let btns = document.querySelectorAll('.btn');
let count = 0 ;
btns.forEach( btn =>{
  btn.addEventListener ('click' , function(e){
   const styles = e.currentTarget.classList;
    if(styles.contains('increase')){
        count++  
    }
    else if(styles.contains('decrease')) {
        count--;
    }
    else{
        count=0
    }
    value.textContent=count;
    if(count < 0){
        value.style.color ='red'
    }
    if(count > 0){
        value.style.color ='green'   
    }
    if(count === 0){
        value.style.color ='#222'    
    }


  })
})