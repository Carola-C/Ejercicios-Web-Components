class MiSaludo extends HTMLElement {
    constructor (){
        
        //const host = document.querySelector("#host");
        const tpl = document.querySelector('template');
        const tplInst = tpl.content.cloneNode(true);

        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(tplInst);
        let boton = this.shadowRoot.getElementById('boton');
        let mensaje = this.shadowRoot.getElementById('mensaje');
        mensaje.style.display='none';
        boton.addEventListener('dblclick', function(){
            console.log("Dio doble clic");
            console.log(mensaje);
             mensaje.style.display='block';
             setTimeout(function(){
                mensaje.style.display='none';

            }, 5000);
        });
    }
}

customElements.define('mi-saludo', MiSaludo);