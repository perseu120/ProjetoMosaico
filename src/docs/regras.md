# 🛠️ Guia de Contribuição – Projeto Mosaico

Este documento define as regras e o fluxo de trabalho para contribuição no repositório, garantindo organização, qualidade e colaboração eficiente entre os integrantes.

## 🔀 Fluxo de Trabalho

Para contribuir com o projeto, siga obrigatoriamente as etapas abaixo:

### 1. Criação de Branch
Não é permitido realizar alterações diretamente na branch `main`.

Cada integrante deve criar uma branch a partir da `main` para desenvolver sua tarefa.

**Padrão de nomenclatura:**
tipo: atividade-colaborador

**Exemplo:**
feat: questao-01-joao

---

### 2. Submissão (Pull Request)
Após concluir sua implementação:

- Envie sua branch para o repositório remoto
- Abra um Pull Request (PR) direcionado para a branch `main`
- Descreva de forma clara e objetiva o que foi desenvolvido
- O PR deve conter **apenas uma entrega/questão por vez**

---

### 3. Revisão por Pares (Code Review)

Antes de realizar o merge, o Pull Request deve passar por revisão:

- É obrigatória pelo menos **1 aprovação de outro integrante**
- O autor do PR **não pode aprovar sua própria contribuição**
- Utilize os comentários do PR para:
  - Sugerir melhorias
  - Apontar inconsistências
  - Tirar dúvidas

---

### 4. Merge

O merge só poderá ser realizado quando:

- Houver no mínimo **1 aprovação**
- Não existirem conflitos com a branch `main`
- A implementação estiver validada e consistente

---

## ✍️ Padrão de Commits

Utilize mensagens claras e padronizadas:

**Formato:**
tipo: descrição

**Exemplos:**

- docs: apenas mudanças de documentação
- feat: uma nova funcionalidade
- fix: a correção de um bug
- perf: mudança de código focada em melhorar performance
- refactor: mudança de código que não adiciona uma funcionalidade e também não corrigi um bug
- style: mudanças no código que não afetam seu significado (espaço em branco, formatação, ponto e vírgula, etc)
- test: adicionar ou corrigir testes

---

## ✅ Boas Práticas

- Escreva commits claros e objetivos
- Trabalhe sempre em sua própria branch
- Mantenha sua branch atualizada com a `main`
- Teste suas alterações antes de abrir um PR
- Evite mudanças fora do escopo da sua tarefa

---

Seguindo essas diretrizes, o time garante um fluxo de trabalho organizado, seguro e alinhado com práticas profissionais de desenvolvimento.