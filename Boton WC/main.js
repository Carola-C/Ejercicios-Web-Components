class MiBoton extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Botón izquierdo');
        });
        this.addEventListener('mouseover', function(e){
            console.log("Pasaste por el botón derecho");
        });
    }
}

customElements.define('mi-boton',MiBoton);
customElements.define('mi-boton-2', class extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('mouseenter',function(e){
            console.log("Estas entrando al botón");
        });
        this.addEventListener('mouseleave',function(e){
            console.log("Estas saliendo al botón");
        });
        this.addEventListener('click', function(e){
            alert('Botón derecho');
            let divEle=document.querySelector('div');
        });
    }
});