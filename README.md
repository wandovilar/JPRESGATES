# 🚛 JP Resgates - Landing Page

Bem-vindo ao repositório do site institucional da **JP Resgates**, uma empresa especializada em serviço de guincho de motocicletas e socorro 24 horas.

Este projeto foi desenvolvido com foco em alta performance, design premium (Dark Mode + Dourado) e conversão rápida de clientes em situações de emergência.

---

## 🎯 Funcionalidades

*   **Design Premium e Focado:** Identidade visual baseada em tons escuros e dourado metálico, transmitindo confiança e profissionalismo.
*   **Totalmente Responsivo:** Layout *Mobile-First*, garantindo que o site funcione perfeitamente em celulares (onde a maioria das buscas por guincho ocorre), tablets e desktops.
*   **Menu Inteligente:** Cabeçalho com efeito *blur* (desfoque) ao rolar a página e menu estilo "hambúrguer" para dispositivos móveis.
*   **Animações de Alta Performance:** Utilização da API `IntersectionObserver` com JavaScript puro (Vanilla JS) para criar efeitos de entrada (Fade Up) suaves sem comprometer o carregamento.
*   **Call to Action (CTA) Direto:** Botões otimizados para iniciar conversas no WhatsApp e ligações diretas com apenas um clique.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído sem o uso de frameworks pesados para garantir o máximo de velocidade de carregamento:

*   **HTML5:** Estrutura semântica e acessível.
*   **CSS3:** Estilização avançada, variáveis globais (CSS Variables), gradientes, Flexbox e CSS Grid.
*   **JavaScript (Vanilla):** Lógica para animações no scroll, menu mobile e manipulação dinâmica do DOM.
*   **FontAwesome:** Biblioteca de ícones vetoriais.
*   **Google Fonts:** Fontes *Montserrat* (títulos) e *Inter* (textos).

---

## 📂 Estrutura de Arquivos

Para que o site funcione corretamente, a sua pasta no VS Code deve ter exatamente esta estrutura:

```text
/jp-resgates
│
├── index.html       # Estrutura principal do site
├── style.css        # Estilos, cores e responsividade
├── script.js        # Lógica do menu e animações
│
└── /assets
    └── /img
        ├── logoJP-preto1.png  # Logo do banner principal (escudo)
        └── logoJP.png         # Logo horizontal do cabeçalho/rodapé