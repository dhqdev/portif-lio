# 📸 Como Adicionar Sua Foto de Perfil

## Método 1: Usando foto do LinkedIn (Recomendado)

1. **Acesse seu perfil do LinkedIn**: https://www.linkedin.com/in/david-fernandes-77a663229/
2. **Clique com o botão direito** na sua foto de perfil
3. **Selecione "Copiar endereço da imagem"** ou "Copy image address"
4. **Abra o arquivo `index.html`**
5. **Encontre a linha 47** (aproximadamente):
   ```html
   <img src="https://via.placeholder.com/300x300/6366f1/ffffff?text=DF" alt="David Fernandes" class="profile-img">
   ```
6. **Substitua o URL do placeholder** pelo URL copiado do LinkedIn:
   ```html
   <img src="SEU_URL_AQUI" alt="David Fernandes" class="profile-img">
   ```

## Método 2: Usando arquivo local

1. **Salve sua foto** na pasta do projeto (ex: `foto-perfil.jpg`)
2. **Abra o arquivo `index.html`**
3. **Substitua o src** na linha 47:
   ```html
   <img src="foto-perfil.jpg" alt="David Fernandes" class="profile-img">
   ```

## Método 3: Usando serviço de hospedagem

1. **Faça upload da sua foto** para um serviço como:
   - GitHub (crie um repositório público)
   - Imgur
   - Cloudinary
   - Google Drive (link público)

2. **Copie o link direto** da imagem
3. **Substitua no `index.html`** conforme método 1

## ✅ Dicas Importantes

- **Tamanho recomendado**: 300x300px ou maior
- **Formato**: JPG, PNG ou WEBP
- **Qualidade**: Alta resolução para melhor aparência
- **Proporção**: Quadrada (1:1) para melhor resultado no círculo

## 🔧 Exemplo Prático

```html
<!-- ANTES (placeholder atual) -->
<img src="https://via.placeholder.com/300x300/6366f1/ffffff?text=DF" alt="David Fernandes" class="profile-img">

<!-- DEPOIS (com sua foto) -->
<img src="https://media.licdn.com/dms/image/v2/SUA_FOTO_AQUI" alt="David Fernandes" class="profile-img">
```

## 🎨 Efeitos Incluídos

Sua foto terá automaticamente:
- ✨ Borda circular
- 🌟 Sombra elegante
- 🎭 Efeito hover com overlay
- 📱 Responsividade total
- 🔄 Animação suave

## 📝 Nota

O placeholder atual mostra suas iniciais "DF" em um círculo azul. Assim que você adicionar sua foto real, ela aparecerá no lugar com todos os efeitos visuais!
