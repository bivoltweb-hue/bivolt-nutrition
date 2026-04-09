# Bivolt Nutrition

Projeto base de e-commerce em **Next.js + Tailwind CSS**, com visual premium esportivo.

## O que já vem pronto

- Home
- Página de produto dinâmica
- Carrinho com `localStorage`
- Checkout visual de demonstração
- FAQ
- Contato
- Identidade visual preta, amarela e branca
- Estrutura pronta para subir no GitHub e publicar na Vercel

## Importante

Este projeto **não inclui pagamento real nem cálculo de frete**. O checkout atual é uma base visual para acelerar o lançamento. Depois, você pode integrar:

- Mercado Pago
- Stripe
- Melhor Envio
- GA4
- Meta Pixel
- WhatsApp

## Como rodar localmente

Segundo a documentação oficial, o Next.js recomenda `create-next-app` com App Router e o Tailwind recomenda integração com Next.js usando PostCSS. A documentação do Next.js também indica Node.js 20.9+ para o fluxo atual. citeturn155355search0turn155355search1turn155355search4

```bash
npm install
npm run dev
```

Depois, abra:

```bash
http://localhost:3000
```

## Como subir no GitHub

1. Crie um repositório chamado `bivolt-nutrition`
2. Envie todos os arquivos desta pasta
3. Faça o primeiro commit

## Como publicar na Vercel

1. Entre na Vercel
2. Clique em **Add New Project**
3. Escolha o repositório `bivolt-nutrition`
4. Clique em **Deploy**

## Estrutura principal

```text
app/
components/
lib/
public/
```

## Produtos cadastrados

- Whey Protein Premium
- Creatina Monohidratada
- Pré-Treino Boost Turbo

## Próximas melhorias recomendadas

- Adicionar fotos reais dos produtos
- Integrar checkout real
- Inserir tabela nutricional
- Adicionar prova social real
- Configurar pixels e analytics
- Criar kits promocionais
