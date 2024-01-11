import React, {useState} from 'react';
export default function Formulario({aoPublicar}) {

    const [titulo, setTitulo] = useState(' ');
    const [texto, setTexto] = useState(' ');

    function aoAlterar(evento)    {
        setTexto(evento.target.value);
        console.log(evento.target.value);
    }

    function aoClicar(){
        aoPublicar(titulo, texto);
    }

    function aoAlterarTitulo(evento){
        setTitulo(evento.target.value);
    }
    function aoPublicar(titulo, texto) {


    }


    return (
        <div>
            <form className="formulario">
            <h3>Novo Post</h3>
            <h4>Título</h4>
            <input type="text" onChange={aoAlterarTitulo} />
            <h4>Descrição</h4>	
            <textarea onChange={aoAlterar}></textarea>
            <br/>
            <button type="button" onClick={aoClicar}> Publicar </button>
        </form> 
        </div>
    )
}