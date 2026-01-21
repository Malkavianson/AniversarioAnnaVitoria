# 🎉 Convite Infantil – Pequena Sereia (Mobile First)

Este projeto é um **convite digital infantil**, pensado para **usuários leigos e idosos**, com foco total em **mobile first**, acessibilidade e uma estética moderna inspirada no universo da **Pequena Sereia da Disney**.

A interface combina **simplicidade**, **legibilidade** e um visual lúdico, utilizando tendências atuais como **liquid glass (glassmorphism)** sem comprometer a usabilidade.

---

## ✨ Conceito

* Convite infantil (aniversário)
* Tema: **Pequena Sereia (Disney)**
* Público-alvo:

  * Pais e familiares
  * Pessoas com pouca familiaridade com tecnologia
  * Idosos

O objetivo é ser **bonito, intuitivo e impossível de confundir**.

---

## 📱 Mobile First

O layout foi projetado **priorizando telas pequenas**:

* Layout em coluna por padrão
* Botões grandes e claros
* Textos legíveis sem necessidade de zoom
* Interações simples (mostrar/ocultar conteúdo)

Em telas maiores, o layout se adapta de forma fluida.

---

## 🎨 Identidade Visual

### Fonte

Utilizamos a fonte **Ranchers**, aplicada globalmente em todo o projeto:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Ranchers&display=swap" rel="stylesheet" />
```

```css
body {
  font-family: "Ranchers", system-ui, -apple-system, "Segoe UI", sans-serif;
}
```

Motivo:

* Fonte divertida
* Excelente leitura
* Combina com o universo infantil
* Funciona bem para idosos

---

### Background

* Utiliza `background-image`
* Imagem será fornecida pela designer
* Configuração recomendada:

```css
background-size: cover;
background-position: center;
background-repeat: no-repeat;
```

📐 **Dimensão recomendada da imagem:**

* **2000 × 3000 px** (vertical)
* Proporção aproximada **2:3**
* Área central limpa (safe area) para textos

---

## 🧊 Glassmorphism (Liquid Glass)

As seções principais utilizam o efeito de **vidro translúcido**, inspirado no estilo recente da Apple:

* Fundo semi-transparente
* Blur suave (`backdrop-filter`)
* Bordas arredondadas
* Leve sombra

Isso cria profundidade sem poluir a tela.

---

## 🗺️ Seção do Mapa

### Comportamento

A seção de mapa (`invitation-section--map`) inicia **oculta**.

O usuário vê apenas um botão com ícone de localização.

Ao clicar:

* O mapa do Google é exibido
* Interação simples e previsível

### UX

* Evita poluição visual inicial
* Reduz carga cognitiva
* Facilita uso por idosos

O ícone de localização é aplicado via `background-image` (PNG).

---

## 🧩 Estrutura das Sections

### invitation-section--details

* Layout em **duas colunas** (quando possível)
* Visual leve, orgânico e divertido
* Nada de blocos rígidos ou aparência corporativa

Objetivo: parecer um convite, não um formulário.

---

## ♿ Acessibilidade

* Tipografia grande
* Alto contraste
* Botões claros
* Texto direto
* Zero jargão técnico

Tudo foi pensado para **qualquer pessoa conseguir usar sem explicação**.

---

## 🚀 Tecnologias

* HTML5
* CSS3
* JavaScript (interações simples)
* Sem dependência de frameworks pesados

---

## 🧠 Filosofia do Projeto

> Se uma criança entende, um idoso navega e um designer não reclama — o projeto venceu.

Menos efeito por efeito.
Mais clareza.
Mais carinho.

---

## 📌 Observações Finais

* A imagem de fundo deve ser escolhida com cuidado (evitar excesso de informação no centro)
* Ícones devem ser simples e reconhecíveis
* Testar sempre em celular real

Este convite não é só bonito — ele é **gentil com quem usa**.
