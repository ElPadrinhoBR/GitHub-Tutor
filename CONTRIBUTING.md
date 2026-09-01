# 🤝 Guia de Contribuição - Git Tutor

Obrigado pelo interesse em contribuir para o Git Tutor! Este documento fornece diretrizes e instruções para tornar o processo de contribuição suave e eficaz.

## 📋 Código de Conduta

Por favor, leia e respeite nosso [Código de Conduta](CODE_OF_CONDUCT.md). Esperamos que todos os contribuidores mantenham um ambiente inclusivo, respeitoso e profissional.

---

## 🐛 Reportando Bugs

Se você encontrou um bug, ajude-nos criando um **issue**:

1. Vá para [Issues](https://github.com/ElPadrinho/git-tutor/issues)
2. Clique em **"New Issue"**
3. Selecione o template **"Bug Report"**
4. Preencha com detalhes:

```markdown
## Descrição do Bug
[Descrição clara do problema]

## Passos para Reproduzir
1. Vá para...
2. Faça...
3. Veja o erro...

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que está acontecendo]

## Ambiente
- Browser: [Chrome, Edge, etc.]
- Versão: [0.1.0]
- Extensão Habilitada: [Sim/Não]

## Screenshots
[Se aplicável]
```

---

## ✨ Sugerindo Melhorias

Tem uma ideia para melhorar o Git Tutor?

1. Vá para [Discussions](https://github.com/ElPadrinho/git-tutor/discussions)
2. Crie uma nova discussão em **"Ideas"**
3. Descreva sua ideia claramente

Ou abra uma **Issue** com o template **"Feature Request"**.

---

## 💻 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git
- Navegador Chrome, Edge ou Brave (com suporte a Manifest V3)

### Setup Inicial

```bash
# 1. Fork o repositório
# Visite: https://github.com/ElPadrinho/git-tutor
# Clique em "Fork"

# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/git-tutor.git
cd git-tutor

# 3. Adicione o repositório original como remote
git remote add upstream https://github.com/ElPadrinho/git-tutor.git

# 4. Instale dependências
npm install

# 5. Compile o projeto
npm run build
```

### Estrutura de Pastas

```
src/
├── content.ts              # Logic para injetar tutorial
├── popup.ts                # Interface do popup
├── settings.ts             # Gerenciamento de configs
├── tooltip.ts              # Componente de balão
└── data/
    └── tutor-content.ts    # Conteúdo educativo
```

---

## 🔄 Fluxo de Desenvolvimento

### 1. Criar uma Branch

```bash
# Atualize o código local
git fetch upstream
git checkout main
git merge upstream/main

# Crie uma branch para sua feature
git checkout -b feature/sua-feature-aqui
```

### 2. Fazer Mudanças

```bash
# Compile em modo watch
npm run watch

# Isso recompila automaticamente ao salvar
```

### 3. Testar a Extensão

```bash
# Build final
npm run build

# Carregue em chrome://extensions (modo desenvolvedor)
# 1. Abra chrome://extensions
# 2. Ative "Modo de desenvolvedor"
# 3. Clique "Carregar extensão sem compactação"
# 4. Selecione a pasta do projeto
# 5. Teste em github.com
```

### 4. Fazer Commit

```bash
git add .
git commit -m "feat: descrição clara da mudança"
```

**Siga o padrão de mensagem:**
- `feat:` - Nova feature
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação (sem lógica)
- `refactor:` - Refatoração de código
- `test:` - Testes
- `chore:` - Outras mudanças

### 5. Push e Pull Request

```bash
# Push para seu fork
git push origin feature/sua-feature-aqui

# Vá para GitHub e abra um Pull Request
```

---

## 📝 Adicionando Novos Elementos do GitHub

### Passo 1: Editar `src/content.ts`

Procure pela função `getKeyFromTarget()` e adicione detecção:

```typescript
if (signal.includes('seu-elemento-chave')) return 'seuElementoKey';
```

### Passo 2: Editar `src/data/tutor-content.ts`

Adicione entrada em `BASE_TUTOR_CONTENT`:

```typescript
seuElementoKey: {
  title: 'Título do Elemento',
  category: 'Categoria',
  description: 'Explicação detalhada em português, mantendo termos técnicos em inglês.',
  tip: 'Dica prática ou melhor prática.'
}
```

### Passo 3: Adicionar Traduções

Em `TRANSLATIONS`, adicione para `en`:

```typescript
en: {
  seuElementoKey: {
    title: 'Element Title',
    category: 'Category',
    description: 'Detailed explanation in English...',
    tip: 'Practical tip...'
  }
}
```

E para `es`:

```typescript
es: {
  seuElementoKey: {
    title: 'Título del Elemento',
    category: 'Categoría',
    description: 'Explicación detallada en español...',
    tip: 'Consejo práctico...'
  }
}
```

### Passo 4: Compilar e Testar

```bash
npm run build

# Recarregue a extensão em chrome://extensions (ícone de ↻)
# Teste no GitHub
```

---

## 🎨 Guia de Estilo

### TypeScript

- Use tipos explícitos sempre que possível
- Evite `any`
- Nomes descritivos para variáveis e funções

```typescript
// ✅ Bom
function showTooltipForElement(target: Element): void {
  const key: string | undefined = getKeyFromTarget(target);
  // ...
}

// ❌ Ruim
function show(t: any): void {
  const k = getKey(t);
  // ...
}
```

### Mensagens de Conteúdo

- Portuguesa clara e concisa
- Termos técnicos em inglês
- Máximo ~200 caracteres na descrição
- Máximo ~80 caracteres na dica

```typescript
// ✅ Bom
description: 'O botão Fork cria uma cópia do repositório na sua conta, permitindo fazer mudanças sem afetar o projeto original.',

// ❌ Ruim
description: 'Isso é tipo um fork que você faz quando faz comida, mas para código...'
```

---

## 🧪 Testando

### Checklist de Teste

- [ ] Elemento é detectado no hover
- [ ] Tooltip aparece na posição correta
- [ ] Tooltip desaparece ao sair
- [ ] Toggle enable/disable funciona
- [ ] Mudança de idioma funciona
- [ ] Popup mostra status correto
- [ ] Não há erros no console
- [ ] Funciona em Chrome e Edge

### Console de Debug

Abra DevTools (F12) e procure por logs:

```
[Git Tutor] Initializing extension...
[Git Tutor] Settings: {enabled: true, language: 'pt'}
[Git Tutor] Attached handlers to X elements
[Git Tutor] Tooltip shown for: issuesTab
```

---

## 📚 Documentação

Ao adicionar recursos:

1. Atualize [README.md](README.md) se necessário
2. Adicione comentários no código para lógica complexa
3. Descreva sua mudança no PR

---

## 🚀 Antes de Submeter o PR

- [ ] Código compila sem erros (`npm run build`)
- [ ] Testou em pelo menos 2 navegadores
- [ ] Adicionou/atualizou documentação
- [ ] Mensagens de commit são claras
- [ ] Não há console errors
- [ ] Branch está atualizada com main

---

## ❓ Perguntas?

- 📖 Veja [README.md](README.md)
- 💬 Abra uma [Discussion](https://github.com/ElPadrinho/git-tutor/discussions)
- 🔗 Contate no [LinkedIn](https://www.linkedin.com/in/robertolmc/)

---

## 🙏 Obrigado!

Suas contribuições fazem o Git Tutor melhor para todos os desenvolvedores iniciantes. Muito obrigado! 🎉
