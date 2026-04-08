# 🛡️ Análise de Riscos de Segurança

## 1. Falha de Autorização e Quebra de Controle de Acesso (IDOR)

### 🔴 Cenário
Um usuário com perfil de **Participante** descobre ou manipula a URL de gerenciamento (ex: `/admin/pagamentos/aprovar?id=123`) para alterar o status da sua própria inscrição para "Aprovado" sem realizar o pagamento real. [cite_start]Além disso, o usuário tenta realizar o check-in remoto manipulando requisições para obter o certificado sem estar presente no evento[cite: 9, 83].

### ⚠️ Impacto
* [cite_start]**Financeiro:** Prejuízo direto pela prestação de serviços e emissão de certificados sem a contrapartida do pagamento[cite: 9].
* [cite_start]**Integridade dos Dados:** Relatórios gerenciais e métricas de presença tornam-se imprecisos e pouco confiáveis[cite: 93].
* [cite_start]**Reputação:** Uma falha crítica de segurança que expõe a fragilidade da plataforma diante de organizadores e parceiros[cite: 10, 32].

### 🛡️ Mitigação
* [cite_start]**Controle de Acesso Baseado em Função (RBAC):** Implementar uma matriz de permissões rígida onde o servidor valida o perfil do usuário (Admin vs. Participante) antes de executar qualquer ação de escrita ou alteração de status[cite: 15, 31, 84].

* **Autenticação via Token (JWT):** Utilizar tokens de acesso únicos e assinados. [cite_start]Cada requisição deve validar se o ID do usuário contido no token possui autorização específica para o recurso solicitado, impedindo que um usuário acesse ou modifique dados de terceiros.
* [cite_start]**Validação de Check-in:** Implementar travas de geolocalização ou tokens temporários (como QR Codes dinâmicos) para garantir que o check-in só ocorra presencialmente e dentro do horário estipulado[cite: 83].

Risco de Dados (Vazamento ou Exposição)

cenário:

impacto:

mitigação:


Risco de Autenticação (Login ou Sessão)

cenário:

impacto:

mitigação:
