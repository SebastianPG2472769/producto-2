let formulario = document.getElementById('product-form')
formulario.addEventListener('submit',(e)=>{
    
    
   let name = document.getElementById('name').value;
   let price = document.getElementById('price').value;
   let year = document.getElementById('year').value;
   e.preventDefault();

   //console.log(name, price, year);
   //console.log(new Product(name, price, year))

   
   let inter = new UI();
   inter.addProduct(new Product(name, price, year));
   document.getElementById('msg').innerHTML = inter.showMessage('product added!','success')
   inter.clearproduct(); 
})

class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class UI{

    addProduct(product){
        let productlist = document.getElementById('product-list');
        let element = document.createElement('div');
        element.innerHTML =`
        <div class='card text-center mb-4'>
            <div class='card-body row'>
               <div class='col-md-10'>
                   <strong>name: ${product.name}</strong>
                   <strong>price: ${product.price}</strong>
                   <strong>year: ${product.year}</strong>
               </div> 
               <div class='col-md-2'>
               <a href="#" class='btn btn-danger' name='delete'>
               delete</a>
             </div>   
         </div>
        </div> `;
            productlist.appendChild(element);
    }
    deleteproduct(element){
            if(element.name=='delete'){
                element.parentElement.parentElement.parentElement.remove();
               
            }
    }
    clearproduct(){
        document.getElementById('product-form').reset();
    }
    showMessage(msg, alert){
        let message = `<div class='container' id='msremo'>
        <div class='alert alert-${alert} mt-5'>${msg}</div>
       </div>`;
        setTimeout(function(){
        document.getElementById('msremo').remove();
     }, 1000);  
    return message;   

    }
    
}

let lista = document.getElementById('product-list');
lista.addEventListener('click' , function(e){
    let inter = new UI();
    inter.deleteproduct(e.target);
    document.getElementById('msg').innerHTML = inter.showMessage('product deleted!','danger')
})