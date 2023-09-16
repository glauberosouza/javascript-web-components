class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    // base do componente -> <h1>Glauber</h1>
    const componentRoot = document.createElement('h1');
    componentRoot.textContent = this.getAttribute('titulo');

    // estilizar o component
    const style = document.createElement('style');
    // Usei crases para criar um template string, permitindo formatação multi-linha do código css
    style.textContent = `
        h1{
            color: red;
        }
    `;
    // Todos os estilos que crio dentro do componente, ficam apenas dentro do contexto dele.

    // enviar para a shadow
    // Usei para adicionar dinamicamente os 2 elementos a sombra(shadow).
    // Isso garante que o conteudo e o estilo do componente sejam corretamente encapsulados dentro da sombra DOM.
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}
// Aviso: Lembre-se de usar um hífen no nome do elemento personalizado, para diferenciar das tags padrões.
customElements.define('titulo-dinamico', TituloDinamico);
