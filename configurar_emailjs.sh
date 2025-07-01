#!/bin/bash

# 🚀 Script de Configuração Rápida do EmailJS

echo "🔧 CONFIGURAÇÃO DO EMAILJS PARA PORTFÓLIO"
echo "=========================================="
echo ""

echo "📋 Você precisará das seguintes informações do EmailJS:"
echo "   1. Public Key (da seção Account > General)"
echo "   2. Service ID (da seção Email Services)"  
echo "   3. Template ID (da seção Email Templates)"
echo ""

read -p "📧 Digite sua PUBLIC KEY do EmailJS: " public_key
read -p "🔗 Digite seu SERVICE ID do EmailJS: " service_id
read -p "📝 Digite seu TEMPLATE ID do EmailJS: " template_id

echo ""
echo "⚙️  Configurando arquivo script.js..."

# Backup do arquivo original
cp script.js script.js.backup

# Substituir as chaves no arquivo
sed -i "s/YOUR_PUBLIC_KEY/$public_key/g" script.js
sed -i "s/YOUR_SERVICE_ID/$service_id/g" script.js  
sed -i "s/YOUR_TEMPLATE_ID/$template_id/g" script.js

echo "✅ Configuração concluída!"
echo ""
echo "🎯 Próximos passos:"
echo "   1. Abra o portfólio no navegador"
echo "   2. Teste o formulário de contato"
echo "   3. Verifique se o email foi recebido"
echo ""
echo "🔄 Para reverter as alterações: mv script.js.backup script.js"
echo ""
echo "📖 Consulte CONFIGURACAO_EMAILJS.md para instruções detalhadas"
