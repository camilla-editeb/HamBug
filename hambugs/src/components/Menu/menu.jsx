import { useState } from 'react';

import full from '../../assets/full.jpg'
import onion from '../../assets/onionrings.jpg'
import hello from '../../assets/helloworld.jpg'
import java from '../../assets/javascript.jpg'
import css from '../../assets/css3.jpg'
import refrigerantes from '../../assets/refrigerantes.png'
import suco from '../../assets/suco.jpg'
import brownie from '../../assets/browniesass.jpg'
import milkshake from '../../assets/milkshake.jpg'
import Cards from '../Cards/cards'
import s from './menu.module.scss'


export default function Menu() {

    const [carrinho, setCarrinho] = useState([]);

    const hamburgueres=[
         {
        id: 1,
        nome: "X-Hello Word",
        descricao: "A primeira escrita agora em forma de hamburguer: Pão brioche, carne angus 150g, fatia de queijo mussarela e muuita salada!.",
        valor:32.99,
        imagem: hello,
    },

    {
        id: 2,
        nome: "Full Burguer",
        descricao: "Para quem ama TUDO: Pão brioche, duas carnes angus 120g, 2 fatias de queijo cheddar, muuita salada e molho de alho para fechar o mix de sabor!.",
        valor:39.99,
        imagem: full,
    },

     {
        id: 3,
        nome: "Onion Rings",
        descricao: "Para aquela turbinada no seu level: Pão brioche, carne angus 200g, molho cheddar com bacon, aneis de cebola e molho de alho!.",
        valor:46.99,
        imagem: onion,
    },
     
    {
        id: 4,
        nome: "JavaScript",
        descricao: "A melhor linguagem em forma de hamburguer: Pão americano, 2 carnes angus 150g, 2 fatias de queijo cheddar, molho cheddar, cebola caramelizada e tiras de bacon! (puro suco do saabor).",
        valor:49.99,
        imagem: java,
    },

    {
        id: 5,
        nome: "CSS3",
        descricao: "Você gosta de estilo? então toma: Pão australiano, 3 carnes angus 150g, 3 fatias de queijo cheddar, molho cheddar e muuita cebola caramelizada! Acompanha: batata P.",
        valor:57.99,
        imagem: css,
    }
    ]

    const bebidas=[
        {
            id: 6,
            nome: "Manas (Refrigerantes)",
            descricao: "Sua Mana em forma de refrigerante, escolha seu sabor preferido: Coca, Guaraná, Fantas.",
            valor:6.99,
            imagem: refrigerantes,
        },
         {
            id: 7,
            nome: "Suco de laranja (potion)",
            descricao: "Copo de 700ml bem geladinho.",
            valor:11.99,
            imagem: suco,
        },
    ]

    const sobremesas=[
        {
            id: 8,
            nome: "Level 1: Brownie",
            descricao: "Brownie de chocolate 70% acompanhado de sorvete artesanal de creme e muita calda de chocolate ao leite.",
            valor:25.99,
            imagem: brownie,
        },
        {
            id: 9,
            nome: "Level 2: Milkshake",
            descricao: "Mix de sabor de sorvete artesanal de chocolate ao leite, uma generosa dose de calda, finalizado com chantilly.",
            valor:21.99,
            imagem: milkshake,
        },
    ]

    const [modalAberto, setModalAberto] = useState(false);
     
    const adicionarAoCarrinho = (item) =>{
        setCarrinho([... carrinho, item]); 
    };

    const total = carrinho.reduce((acc, item) => acc + item.valor, 0);

    const tel = 87999999999;

    const finalizarPedido = () => {
        if (carrinho.length === 0) return;

        let texto = "*OLÁ! ESSE É O MEU PEDIDO:* \n\n";

        carrinho.forEach (item => {
            texto += `- ${item.nome} (R$ ${item.valor.toFixed(2)})\n`;
        })

         texto += `\n* Total: R$ ${total.toFixed(2)}}*`;

        window.open(`https://wa.me/${tel}?text=${encodeURIComponent(texto)}`, '_blank');
    }

    return(
        <section className={s.sectionhambug}>
            <h2>Debug sua fome com o melhor da região!</h2>
            <p>Avenida dev front-end, n20 - React</p>

            <button 
                    className={s.botaoFlutuante} 
                    onClick={() => setModalAberto(true)} // Ao clicar, abre a janela
                >
                    🛒 <span>{carrinho.length}</span>
            </button>

            {modalAberto && (
                <div className={s.fundoEscuro}>
                    <div className={s.janelaModal}>
                        <div className={s.modalHeader}>
                            <h3>Seu Carrinho</h3>
                            {/* Botão X para fechar */}
                            <button onClick={() => setModalAberto(false)}>✖</button>
                        </div>

                        <div className={s.listaItens}>
                            {carrinho.map((item, index) => (
                                <div key={index} className={s.itemLinha}>
                                    <span>{item.nome}</span>
                                    <span>R$ {item.valor.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className={s.modalFooter}>
                            <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
                            <button className={s.botaoVerde} onClick={finalizarPedido}>
                                Enviar Pedido
                            </button>
                        </div>
                    </div>
            </div>
            )}

            <h3 className={s.catTitulo}>BURGUERS_</h3>
            <div className={s.contCards}>
                {hamburgueres.map((item) => (
                    <Cards 
                        key={item.id}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.valor}
                        imagem={item.imagem}
                        onAdd={() => adicionarAoCarrinho(item)}
                    />
                ))}
            </div>

            <h3 className={s.catTitulo}> BEBIDAS_</h3>
            <div className={s.contCards}>
                {bebidas.map((item) => (
                    <Cards
                        key={item.id}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.valor}
                        imagem={item.imagem}
                        onAdd={() => adicionarAoCarrinho(item)}
                    />
                ))}
            </div>

            <h3 className={s.catTitulo}> SOBREMESAS_</h3>
            <div className={s.contCards}>
                {sobremesas.map((item) => (
                    <Cards
                        key={item.id}
                        titulo={item.nome}
                        descricao={item.descricao}
                        preco={item.valor}
                        imagem={item.imagem}
                        onAdd={() => adicionarAoCarrinho(item)}
                    />
                ))}
            </div>

        </section>


    )
}