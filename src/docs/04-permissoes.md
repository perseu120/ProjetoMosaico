# Matriz de Permissões - Plataforma de Eventos

## Controle de Acesso por Perfil

Esta matriz define quais ações cada perfil de usuário pode realizar na plataforma de eventos.

### Legenda
- ✅ = Permitido
- ❌ = Não permitido
- 🔒 = Permitido com restrições (apenas dados próprios)

### Tabela de Permissões

| Recurso        | Ação     | Admin | Organizador | Participante |
|----------------|----------|-------|-------------|--------------|
| **Evento**     | Criar    | ✅    | ✅          | ❌           |
|                | Ver      | ✅    | ✅          | ✅           |
|                | Editar   | ✅    | ✅          | ❌           |
|                | Cancelar | ✅    | ❌          |            |
| **Inscrição**  | Criar    | ✅    | ✅          | ✅           |
|                | Ver      | ✅    | ✅          | 🔒           |
|                | Editar   | ✅    | ✅          | 🔒           |
|                | Cancelar | ✅    | ✅          | 🔒           |
| **Pagamento**  | Criar    | ✅    | ❌          | ✅           |
|                | Ver      | ✅    | ✅          | 🔒           |
|                | Aprovar  | ✅    | ✅          | ❌           |
|                | Recusar  | ✅    | ✅          | ❌           |
| **Check-in**   | Criar    | ✅    | ✅          | ❌           |
|                | Ver      | ✅    | ✅          | ✅           |
|                | Editar   | ✅    | ✅          | ❌           |
| **Certificado**| Criar    | ✅    | ✅          | ❌           |
|                | Ver      | ✅    | ✅          | ✅           |
|                | Emitir   | ✅    | ✅          | ✅           |
| **Relatórios** | Ver      | ✅    | ✅          | ❌           |
|                | Exportar | ✅    | ❌          | ❌           |

## Descrições dos Perfis

### 👤 Admin
- Acesso total e irrestrito a todos os recursos da plataforma
- Pode gerenciar usuários, eventos e configurações do sistema
- Responsável por aprovações críticas e cancelamentos

### 👤 Organizador
- Gerencia eventos e participantes
- Pode criar, editar e visualizar eventos
- Aprova pagamentos e inscrições
- Visualiza relatórios (sem permissão para exportar)
- **NÃO** pode cancelar eventos (apenas Admin)

### 👤 Participante
- Usuário final da plataforma
- Inscreve-se em eventos disponíveis
- Realiza pagamento simulado
- Faz check-in no evento e recebe certificado
- Visualiza **apenas** seus próprios dados (inscrições, pagamentos, certificados)

## Regras de Negócio

1. **Participante só visualiza dados próprios** (inscrições, pagamentos, certificados)
2. **Organizador não pode cancelar eventos** (apenas Admin tem essa permissão)
3. **Exportação de relatórios** é restrita ao Admin (segurança de dados)
4. **Check-in** só pode ser criado/editado por Admin e Organizador
5. **Emissão de certificado** está disponível para todos os perfis após conclusão do evento