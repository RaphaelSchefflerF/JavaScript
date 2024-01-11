
//componente de react mais isolado dos outros
export default function Modal({personagem}){

    return (
        <div id='modal'>
            <p>Nome: {personagem.name}</p>
            <p>Origem: {personagem.origin.name}</p>
        </div>
    );
}