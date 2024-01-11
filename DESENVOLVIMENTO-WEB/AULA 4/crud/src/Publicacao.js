import 'bootstrap/dist/css/bootstrap.css';
export default function Publicacao({titulo, conteudo, imagem,money}) {

return (
    <div class="container-sm">
        <div class="card" className="pub">
            <img className='image' class="card-img-top" src={imagem}/>
            <div class="card-body">
                <h5 class="card-title">{titulo}</h5>
                <p class="card-text">{conteudo}</p>
                <a href="#" class="btn btn-primary">{money}</a>
            </div>
        </div>
    </div>
);
}
