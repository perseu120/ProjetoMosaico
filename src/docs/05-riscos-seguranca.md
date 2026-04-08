# 🛡️ Análise de Riscos de Segurança

## 1. Falha de Autorização e Quebra de Controle de Acesso (IDOR)

### 🔴 Cenário
Um usuário com perfil de **Participante** descobre ou manipula a URL de gerenciamento (ex: `/admin/pagamentos/aprovar?id=123`) para alterar o status da sua própria inscrição para "Aprovado" sem realizar o pagamento real. Além disso, o usuário tenta realizar o check-in remoto manipulando requisições para obter o certificado sem estar presente no evento.

### ⚠️ Impacto
* **Financeiro:** Prejuízo direto pela prestação de serviços e emissão de certificados sem a contrapartida do pagamento.
* **Integridade dos Dados:** Relatórios gerenciais e métricas de presença tornam-se imprecisos e pouco confiáveis.
* **Reputação:** Uma falha crítica de segurança que expõe a fragilidade da plataforma diante de organizadores e parceiros.

### 🛡️ Mitigação
* **Controle de Acesso Baseado em Função (RBAC):** Implementar uma matriz de permissões rígida onde o servidor valida o perfil do usuário (Admin vs. Participante) antes de executar qualquer ação de escrita ou alteração de status.

* **Autenticação via Token (JWT):** Utilizar tokens de acesso únicos e assinados. Cada requisição deve validar se o ID do usuário contido no token possui autorização específica para o recurso solicitado, impedindo que um usuário acesse ou modifique dados de terceiros.
* **Validação de Check-in:** Implementar travas de geolocalização ou tokens temporários (como QR Codes dinâmicos) para garantir que o check-in só ocorra presencialmente e dentro do horário estipulado.

## 2. Exposição de Dados Sensíveis (Vazamento de Dados)

### 🔴 Cenário
Ocorre a exportação de planilhas de inscritos contendo dados pessoais (nome, e-mail, CPF) e registros de status de pagamento em diretórios do servidor que estão expostos via URLs públicas sem proteção de credenciais. Qualquer pessoa que descubra o link direto pode baixar a base de dados dos participantes.

### ⚠️ Impacto
* **Privacidade:** Violação grave da privacidade dos usuários e descumprimento da LGPD (Lei Geral de Proteção de Dados).
* **Segurança:** Dados vazados podem ser usados para ataques de engenharia social ou phishing contra os participantes do evento.
* **Jurídico:** Possibilidade de multas administrativas e processos judiciais contra a plataforma e os organizadores.

### 🛡️ Mitigação
* b**Controle Rigoroso de Acesso:** Implementar autenticação obrigatória para o download de qualquer relatório ou exportação de dados, limitando o acesso apenas aos perfis de **Admin** e **Organizador**[cite: 15, 60].
* **Criptografia e Higienização:** Utilizar criptografia para dados sensíveis em repouso e garantir que links temporários de download expirem após um curto período de tempo.
* **Arquitetura de Pastas Privadas:** Armazenar arquivos exportados em diretórios não indexáveis e protegidos por camadas de segurança do servidor, fora da raiz pública da aplicação.

---

## 3. Falha de Autenticação (Ataque de Força Bruta)

### 🔴 Cenário
O sistema permite tentativas ilimitadas de login sem nenhum mecanismo de bloqueio ou atraso. Um atacante utiliza scripts automatizados para testar milhares de combinações de senhas comuns (Brute Force) para tentar invadir contas de **Organizadores** ou **Admins**.

### ⚠️ Impacto
* **Invasão de Contas:** Acesso total de terceiros a funcionalidades críticas, como aprovação indevida de pagamentos e alteração de dados do evento.
* **Sobrecarga do Sistema:** O alto volume de requisições de login pode causar lentidão ou queda do servidor (DoS), afetando a disponibilidade para usuários legítimos.

### 🛡️ Mitigação
* **Política de Bloqueio de Conta (RNF de Segurança):** Implementar o bloqueio automático do acesso após 5 tentativas consecutivas de login inválidas para o mesmo usuário.
* **Mecanismos de Rate Limiting:** Limitar o número de requisições por IP em um determinado intervalo de tempo para barrar ataques automatizados.
* **Uso de Captcha:** Adicionar desafios visuais (Captcha) após a terceira tentativa de login falha para diferenciar usuários humanos de robôs.