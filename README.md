<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Aiqfome" />

  &#xa0;

  <!-- <a href="https://aiqfome.netlify.app">Demo</a> -->
</div>

<h1 align="center">Aiqfome</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/gccavalheiro/aiqfome?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/gccavalheiro/aiqfome?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gccavalheiro/aiqfome?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/gccavalheiro/aiqfome?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/gccavalheiro/aiqfome?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/gccavalheiro/aiqfome?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/gccavalheiro/aiqfome?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Aiqfome 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-missao">Missão</a> &#xa0; | &#xa0; 
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-comecando">Começando</a> &#xa0; | &#xa0;
  <a href="#hook-hooks">Hooks</a> &#xa0; | &#xa0;
  <a href="#memo-licenca">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/gccavalheiro" target="_blank">Autor</a>
</p>

<br>

## :memo: Contexto ##
Seu desafio será prototipar essa funcionalidade em uma aplicação web utilizando React e Next.js, com foco em proporcionar uma excelente experiência em dispositivos móveis e explorando os benefícios dos Server Components.

## :dart: Missão ##
Este desafio é focado em desenvolvimento web com React e Next.js, priorizando a experiência do usuário em dispositivos móveis e a fluidez da interface. Esperamos que você demonstre conhecimento em Server Components para otimizar a renderização e o desempenho, além de aplicar conceitos de Design Systems para garantir consistência e escalabilidade da interface. O backend não é necessário — o foco está no front-end web com experiência mobile, utilizando Next.js.

:link: [Link do Figma](www.figma.com/design/mgLRWavLkkZnDTVKOKQPie/-aiqfome--teste-front-end---MOBILE)\
:link: [Demonstração completa - ao vivo](https://aiqfome-plum.vercel.app)

## :sparkles: Funcionalidades ##

:heavy_check_mark: Busca e listagem de restaurantes\
:heavy_check_mark: Visualização de cardápios e produtos\
:heavy_check_mark: Sistema de checkout\
:heavy_check_mark: Gerenciamento de carrinho de compras\
:heavy_check_mark: Opções adicionais e personalização de pedidos\
:heavy_check_mark: Cálculo automático de preços\
:heavy_check_mark: Interface responsiva e moderna\
:heavy_check_mark: Favoritos\
:heavy_check_mark: Filtros por status (aberto/fechado)

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org)
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com)
- [FontAwesome](https://fontawesome.com)

## :hook: Hooks ##

### Hooks de Checkout

O projeto inclui um conjunto abrangente de hooks customizados para gerenciar o processo de checkout:

#### `useCheckoutState.ts`
Hook responsável por gerenciar o estado principal do checkout, incluindo:
- Estado do checkout
- Loading state
- Persistência no localStorage
- Criação de novos checkouts

#### `useCheckoutProducts.ts`
Hook para gerenciar produtos no checkout:
- Adicionar produtos
- Remover produtos
- Alterar quantidades
- Adicionar observações

#### `useCheckoutAdditionals.ts`
Hook para gerenciar opções adicionais:
- Adicionar opções adicionais
- Remover opções adicionais
- Gerenciar upsells
- Controlar quantidades de opções

#### `useCheckoutPricing.ts`
Hook para cálculos de preços:
- Calcular preço total de produtos
- Aplicar descontos
- Calcular preços com adicionais

#### `useCheckout.ts`
Hook principal que combina todos os outros hooks, fornecendo uma interface unificada para o checkout.

## :white_check_mark: Requisitos ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Começando ##

```bash
# Clone este projeto
$ git clone https://github.com/gccavalheiro/aiqfome

# Entre no diretório
$ cd aiqfome

# Instale as dependências
$ pnpm install

# Execute o projeto
$ pnpm dev

# O servidor será inicializado em <http://localhost:3000>
```

Feito com :heart: por <a href="https://github.com/gccavalheiro" target="_blank">Gabriel Cavalheiro</a>

<a href="#top">Voltar ao topo</a>
