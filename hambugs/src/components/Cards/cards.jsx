import s from './cards.module.scss'

export default function Cards({ imagem, titulo, descricao, preco, onAdd }){
    return(
      <div className={s.item}>
        <div>
            <div className={s.imagemcont}>
            <img src={imagem} alt={titulo} className={s.imagem} />
           </div>
        </div>

      <div className={s.content}>
        <h3 className={s.titulo}>{titulo}</h3>
        <p className={s.descricao}>{descricao}</p>

        <span className={s.preco}>R$ {preco.toFixed(2).replace('.', ',')}</span>
        <button className={s.button} onClick={onAdd}>
            Adicionar ao Carrinho <span>🛒</span>
        </button>
      </div>
     </div>
  );
}