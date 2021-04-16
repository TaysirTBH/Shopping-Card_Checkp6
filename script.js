var product = document.querySelectorAll(".product")
var heart = document.querySelectorAll(".heart");
var remove = document.querySelectorAll(".remove");

for(let i=0; i<remove.length;i++){
    remove[i].addEventListener("click", function() {

            product[i].remove();
        });
}


for(let i=0; i<heart.length;i++){
    heart[i].addEventListener("click", () => {
        heart[i].style.backgroundColor = "red";
    
    });
}



var plus= document.querySelectorAll(".plus");
var minus = document.querySelectorAll(".minus");

for(let i=0; i<plus.length;i++){
    plus[i].addEventListener('click',function(e){
        let cible = e.target.nextElementSibling
        console.log(cible)
        cible.textContent=parseInt(cible.textContent)+1;
    });
}

for(let i=0; i<minus.length;i++){
    minus[i].addEventListener('click',function(e){
        let cible = e.target.previousElementSibling
        console.log(cible)
        if(parseInt(cible.textContent)>=1){
            cible.textContent=parseInt(cible.textContent)-1;
        }
    });
}


var add = document.querySelectorAll(".add");

for(let i=0; i<add.length;i++){
    add[i].addEventListener('click',function(){
        let price= document.getElementsByClassName("price");
        let quantity=document.getElementsByClassName("cnt");
        console.log("1"+total)
        console.log("2"+quantity)
       
            let tot=0;
            for(let i=0; i<price.length;i++){
            tot= tot+parseInt(price[i].innerHTML)*parseInt(quantity[i].innerHTML)
            }
        
            document.getElementById('total').value=tot;
          



    });
}













