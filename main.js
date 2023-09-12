const rating = document.querySelector(".rating");
let currentValue=0; //Valor actual
const limit = 10; //Límite de estrellas
let html ="";

for(let x=0; x<limit; x++){
    html+=`<div class="item item-${x}" data-pos="${x}"></div>`;
}

rating.innerHTML = html;

document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('mouseover', e =>{
       let elemento = item.getAttribute('data-pos');
       
       document.querySelectorAll('.item').forEach(item2=>{

            if(item2.getAttribute('data-pos')<=elemento){
                if(item2.classList.contains("item-full")){
                    
                }else{
                    item2.classList.add("item-full");
                }        
            }else{
                item2.classList.remove("item-full");
            }
       });
    
       currentValue=parseInt(elemento)+1;
       
    });

    
});

   
/* document.querySelectorAll('.item').forEach(item3=>{
    item3.addEventListener('onmouseout', e=>{
        item3.classList.remove("item-full"); 
    }); 
});
 */
