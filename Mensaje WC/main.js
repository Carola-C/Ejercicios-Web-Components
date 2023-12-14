class MiMensaje extends HTMLElement {
    
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Click en mensaje');
        });
        console.log('constructor: Cuando el elemento es creado');
    }
    
    static get observedAttributes(){
        return ['msj','casi-visible','mi-otro'];
    }

    connectedCallback(){
        console.log('connectedCallback: Cuando el elemento es insertado en el documento');
    }

    disconnectedCallback(){
        alert('disconnected: Cuando el elemento es eliminado del documento');
    }
    adoptedCallback(){
        alert('adoptedCallback: Cuando el elemento es adoptado por otro documento');
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        console.log('attributeChangedCallback: Cuando cambia un atributo');
        if (attrName === 'msj') {
            this.pintaMensaje(newVal);
        }

        if (attrName === 'casi-visible') {
            this.setCasiVisible();
        }

        if (attrName === 'mi-otro') {
            this.setMiOtro();
        }
    }
    pintaMensaje(mj){
        this.innerHTML = mj;
    }
    setCasiVisible(){
        if (this.casiVisible) {
            this.style.opacity = 0.1;
        } else {
            this.style.opacity =1;
        }
    }
    setMiOtro(){
        if (this.miOtro) {
            var contador=0;
            this.addEventListener('mousemove', function(e){
                contador ++;
                if(contador<=200){
                    let red = contador*parseInt(Math.random()*10);
                    let green = contador*parseInt(Math.random()*10);
                    let blue = contador*parseInt(Math.random()*10);
                    let color = 'rgb('+red+','+green+','+blue+')';
                    this.style.color = color;
                }else{
                    contador=0;
                }
                
            });
            
            
        }
    }
    //Mostar mensaje en los creados desde DOM
    get msj(){
        return this.getAttribute('msj');
    }

    set msj(val){
        this.setAttribute('msj',val)
    }
    //Casi visible
    get casiVisible (){
        return this.hasAttribute('casi-visible');
    }
    set casiVisible(value){
        if (value) {
            this.setAttribute('casi-visible','');
        } else {
            this.removeAttribute('casi-visible');
        }
    }
    //Otro atributo
    get miOtro(){
        return this.hasAttribute('mi-otro');
    }
    set miOtro(value){
        if (value) {
            this.setAttribute('mi-otro','');
        } else {
            this.removeAttribute('mi-otro');
        }
    }
}
customElements.define('mi-mensaje',MiMensaje);

let miMensaje = document.createElement('mi-mensaje');
miMensaje.msj ='Otro mensaje';
document.body.appendChild(miMensaje);

let tercerMensaje = new MiMensaje();
tercerMensaje.msj = 'Tercer mensaje';
document.body.appendChild(tercerMensaje);


