## 🎯 Requisitos Funcionais (RF)

**RF01**
Como **Participante**, quero me cadastrar na plataforma, para poder me inscrever em eventos.
**CA:** Cadastro salvo com sucesso ao informar dados obrigatórios válidos.

**RF02**
Como **Participante**, quero visualizar eventos disponíveis, para escolher onde me inscrever.
**CA:** Lista de eventos exibida com nome, data e status.

**RF03**
Como **Participante**, quero me inscrever em um evento, para garantir minha vaga.
**CA:** Inscrição registrada com status “pendente de pagamento”.

**RF04**
Como **Participante**, quero realizar um pagamento simulado, para confirmar minha inscrição.
**CA:** Sistema retorna status “aprovado” ou “recusado”.

**RF05**
Como **Participante**, quero receber o resultado do pagamento, para saber se minha inscrição foi confirmada.
**CA:** Inscrição muda para “confirmada” ou “cancelada” após retorno do pagamento.

**RF06**
Como **Organizador**, quero criar eventos, para disponibilizá-los aos participantes.
**CA:** Evento criado aparece na listagem.

**RF07**
Como **Organizador**, quero visualizar participantes inscritos, para gerenciar o evento.
**CA:** Lista de participantes exibida com status da inscrição.

**RF08**
Como **Organizador**, quero realizar check-in dos participantes, para registrar presença.
**CA:** Participante muda status para “presente”.

**RF09**
Como **Participante**, quero acessar meu certificado após o evento, para comprovar minha participação.
**CA:** Certificado disponível apenas se status for “presente”.

**RF10**
Como **Participante**, quero baixar meu certificado, para comprovar minha participação.
**CA:** Download disponível após presença confirmada.

**RF11**
Como **Admin**, quero gerenciar usuários, para manter controle da plataforma.
**CA:** Admin consegue ativar/inativar usuários.

**RF12**
Como **Admin**, quero visualizar logs do sistema, para auditoria e segurança.
**CA:** Logs exibem ações relevantes (login, criação, check-in).

---

## ⚙️ Requisitos Não Funcionais (RNF)

**RNF01 – Segurança (Autenticação)**
Sistema deve bloquear usuário após **5 tentativas de login inválidas**.

**RNF02 – Segurança (Autorização)**
Cada perfil (Admin, Organizador, Participante) deve acessar apenas suas funcionalidades.

**RNF03 – Segurança (Dados)**
Dados sensíveis (senha) devem ser armazenados com **hash**.

**RNF04 – Usabilidade**
Interface deve permitir inscrição em no máximo **5 cliques**.

**RNF05 – Desempenho**
Tempo de resposta das requisições deve ser de até **3 segundos**.

**RNF06 – Disponibilidade**
Sistema deve ter disponibilidade mínima de **95%**.

**RNF07 – Auditoria**
Sistema deve registrar logs de ações críticas (login, pagamento, check-in).

**RNF08 – Escalabilidade (simples)**
Sistema deve suportar pelo menos **100 usuários simultâneos**.
