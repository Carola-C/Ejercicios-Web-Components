function consultar() {
    fetch("./json/datos.json")
        .then(response => {
            return response.json();
        })
        .then(personas => {
            consultarPersonas(personas);
        })
        .catch(error => {
            console.log('Request error' + error);
        });

    function consultarPersonas(personas) {
        if(document.getElementById("inBuscar").value != ""){
            var personas2 = [];
            var indice = 0;
            var table = document.getElementById("tabla");
            var row;
            for (i = 0; i < personas.length; i++) {
                if (document.getElementById("inBuscar").value == personas[i]['employee_name']) {
                    personas2[indice] = personas[i];
                    indice++;
                }
            }
            if (table.rows.length > 1) {
                var rowCount = table.rows.length;
                for (var j = rowCount - 1; j >= 1; j--) {
                    table.deleteRow(j);
                }
            }

            for (i = 0; i < personas2.length; i++) {
                row = table.insertRow(table.length);
                row.insertCell(0).innerHTML = personas2[i]['id'];
                row.insertCell(1).innerHTML = personas2[i]['employee_name'];
                row.insertCell(2).innerHTML = personas2[i]['employee_salary'];
                row.insertCell(3).innerHTML = personas2[i]['employee_age'];
            }
        }else{
            document.getElementById('msj').style.display='';
            setTimeout(() => {
                document.getElementById('msj').style.display='none';
            }, 2000);
        }
        
    }

}
cancelar();
function cancelar() {
    fetch("./json/datos.json")
        .then(response => {
            return response.json();
        })
        .then(personas => {
            consultarPersonas(personas);
        })
        .catch(error => {
            console.log('Request error' + error);
        });

    function consultarPersonas(personas) {
        console.log('Entro a consultarPersonas')
        var personas2 = [];
        var indice = 0;
        var table = document.getElementById("tabla");
        var row;
        for (i = 0; i < personas.length; i++) {
            personas2[indice] = personas[i];
                    indice++;
        }

        if (table.rows.length > 1) {

            var rowCount = table.rows.length;
            for (var j = rowCount - 1; j >= 1; j--) {
                table.deleteRow(j);
            }
        }

        for (i = 0; i < personas2.length; i++) {
            row = table.insertRow(table.length);
            row.insertCell(0).innerHTML = personas2[i]['id'];
            row.insertCell(1).innerHTML = personas2[i]['employee_name'];
            row.insertCell(2).innerHTML = personas2[i]['employee_salary'];
            row.insertCell(3).innerHTML = personas2[i]['employee_age'];


        }
        
    }

}

function llenar(){
    console.log("Entro a llenar ");
    fetch("./json/datos.json")
        .then(response => {
            return response.json();
        })
        .then(personas => {
            buscarPersonas(personas);
        })
        .catch(error => {
            console.log('Request error');
        });

    function buscarPersonas(personas) {
        var opciones='<option></option>';
        for (i = 0; i < personas.length; i++) {
            opciones+= `<option value="${personas[i].employee_name}">${personas[i].employee_name}</option>`;
            
        }
        document.getElementById('inBuscar').innerHTML = opciones;
    }
}

llenar();


class MiHeader extends HTMLElement{
    constructor(){
        super();
        const header = document.querySelectorAll('header');
        const temp = document.querySelector('template');
        const temp2 = temp.content.cloneNode(true);
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(temp2);
    }
}
customElements.define('mi-header', MiHeader);
class MiBoton extends HTMLElement {
    constructor(){
        super();
    }

    static get observedAttributes(){
        return ['consultar', 'cancelar'];
    }
    attributeChangedCallback(attrName, oldVal, newVal){
        if (attrName =='consultar') {
            this.addEventListener('click',function(){
                consultar();
            });
            this.innerHTML = 'Buscar'
        }
        if (attrName =='cancelar') {
            this.addEventListener('click',function(){
                cancelar()
            });
            this.innerHTML = 'Cancelar';
        }
    }
}
customElements.define('mi-boton', MiBoton);
