// Criei uma classe que têm o mesmo comportamento de um elemento Html que adiciona um conteúdo dentro
class CardNews extends HTMLElement {
  constructor() {
    super();
    // Cria uma sombra encapsulada para este elemento
    // Modo "open": Permite que o shadow DOM seja acessível e manipulável a partir do código externo.
    // Modo "closed": Impede que o shadow DOM seja acessível ou manipulável a partir do código externo.
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card__left');

    const autor = document.createElement('span');
    autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('contet');

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card__right');

    const newsImage = document.createElement('img');
    newsImage.src = this.getAttribute('photo');
    newsImage.alt = 'Foto da Noticia';
    cardRight.appendChild(newsImage);

    // Estou dizendo que o cardLef e Right são filhos do componentRoot.
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
        width: 80%;
        border: 1px solid gray;
        /* Elemento de sombra em volta da caixa */
        box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
        display: flex;
        flex-direction: row; /* Deixar as 2 caixas(card_left and card_right) um ao lado da outra*/
        justify-content: space-between; /*Adicionar espaçamento entre a noticia e a imagem*/
      }
      
      .card__left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px; /* Espaçamento a esquerda da box*/
      }
      
      .card__left > span {
        font-weight: 400;
      }
      
      .card__left > a {
        margin-top: 15px; /* Separando um conteúdo do outro.*/
        font-size: 25px;
        color: black;
        text-decoration: none; /* Os links não terão sublinhado quando estiverem no estado normal */
        font-weight: bold;
      }
      /*Utilizando o > para dizer que quero acessar o paragrafo do card_left*/
      .card__left > p {
        color: rgb(70, 70, 70);
      }
  `;
    return style;
  }
}
// Criando um elemento customizado e definindo um apelido que ele será utilizado e o método construtor dele, classe de molde.
customElements.define('card-news', CardNews);
