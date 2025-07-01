# Configuração do EmailJS para Formulário de Contato

## 📧 Passo a Passo para Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Configurar o Serviço de Email
1. No painel do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure as credenciais:
   - **Para Gmail**: Use sua conta do Google
   - **Para outros**: Configure SMTP

### 3. Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:

```html
Assunto: Nova mensagem do portfólio - {{subject}}

Olá {{to_name}},

Você recebeu uma nova mensagem através do seu portfólio:

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Mensagem enviada automaticamente pelo formulário de contato do portfólio.
```

### 4. Obter as Chaves de Configuração
1. Anote seu **Service ID** (da seção Email Services)
2. Anote seu **Template ID** (da seção Email Templates)  
3. Vá para "Account" > "General" e copie sua **Public Key**

### 5. Configurar no Código
Edite o arquivo `script.js` e substitua:

```javascript
// Linha ~476
emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua Public Key

// Linhas ~494-495
'YOUR_SERVICE_ID',    // Substitua pelo seu Service ID
'YOUR_TEMPLATE_ID',   // Substitua pelo seu Template ID
```

### 6. Testar o Formulário
1. Abra seu portfólio no navegador
2. Preencha o formulário de contato
3. Envie uma mensagem de teste
4. Verifique se o email chegou

## 🔧 Configuração Alternativa (Sem EmailJS)

Se preferir não usar EmailJS, o sistema já tem um fallback que:
1. Abre o cliente de email padrão do usuário
2. Preenche automaticamente o destinatário, assunto e mensagem
3. Permite que o usuário envie pelo seu próprio email

## 📋 Variáveis do Template EmailJS

Certifique-se de usar estas variáveis no seu template:

- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente  
- `{{subject}}` - Assunto da mensagem
- `{{message}}` - Conteúdo da mensagem
- `{{to_name}}` - Seu nome (David Fernandes)
- `{{to_email}}` - Seu email (david.h.queiroz@gmail.com)

## 🚀 Funcionalidades Implementadas

✅ **Envio Real de Emails**: Integração com EmailJS
✅ **Sistema de Notificações**: Feedback visual para o usuário
✅ **Fallback Automático**: Abre cliente de email se falhar
✅ **Validação de Formulário**: Campos obrigatórios validados
✅ **Estados de Loading**: Feedback durante o envio
✅ **Responsivo**: Funciona em desktop e mobile

## 🎨 Personalização

Você pode personalizar:
- Cores das notificações no CSS
- Texto das mensagens de feedback
- Template do email no painel do EmailJS
- Tempo de exibição das notificações

## 📞 Suporte

Em caso de dúvidas:
- Documentação do EmailJS: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Suporte: david.h.queiroz@gmail.com
