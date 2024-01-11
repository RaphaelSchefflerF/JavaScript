export default function Publicacao({titulo, id , conteudo}) {
return (
    <div className="pub">
        <h2>{titulo}</h2>
        <p>{conteudo}</p>
    </div>
);
}