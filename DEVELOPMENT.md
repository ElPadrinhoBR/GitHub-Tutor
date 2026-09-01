# 🛠️ Guia de Desenvolvimento - Git Tutor

Instruções detalhadas para configurar e trabalhar no ambiente de desenvolvimento do Git Tutor.

---

## 📋 Pré-Requisitos

- **Node.js**: versão 18.x ou superior
- **npm**: versão 9.x ou superior
- **Git**: versão 2.x ou superior
- Um navegador compatível (Chrome, Firefox, Edge)

---

## 🚀 Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/ElPadrinhoBR/GitHub-Tutor.git
cd GitHub-Tutor
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure as variáveis necessárias:

```bash
cp .env.example .env
```

---

## 💻 Desenvolvimento Local

### Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Verifica problemas de linting |
| `npm run format` | Formata o código automaticamente |
| `npm run test` | Executa os testes |

---

## 🏗️ Estrutura do Projeto

```
GitHub-Tutor/
├── src/
│   ├── components/    # Componentes React reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── styles/        # Arquivos de estilo global
│   ├── utils/         # Funções utilitárias
│   └── App.tsx        # Componente principal
├── public/            # Arquivos estáticos
├── tests/             # Testes unitários e integração
├── package.json       # Dependências do projeto
├── tsconfig.json      # Configuração TypeScript
└── vite.config.ts     # Configuração Vite
```

---

## 🎨 Guia de Estilo

### TypeScript

- Use tipos explícitos sempre que possível
- Evite usar `any`
- Prefira interfaces a tipos simples

### Componentes React

- Prefira componentes funcionais com hooks
- Use nomes descritivos para componentes
- Documente props com comentários JSDoc

### CSS

- Use módulos CSS ou CSS-in-JS
- Mantenha a consistência com as variáveis de tema
- Siga a convenção BEM para classes

---

## 🧪 Testes

### Executar Testes

```bash
npm run test
```

### Escrever Testes

Crie testes no diretório `tests/` com a nomenclatura `*.test.ts` ou `*.test.tsx`.

Exemplo:

```typescript
import { describe, it, expect } from 'vitest';
import { Component } from '../src/components/Component';

describe('Component', () => {
  it('deve renderizar corretamente', () => {
    expect(true).toBe(true);
  });
});
```

---

## 🐛 Debug

### DevTools do Navegador

Use as DevTools nativas do navegador para:
- Inspecionar elementos
- Verificar console
- Analisar rede e performance

### VS Code

Adicione configuração de debug no `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos compilados estarão em `dist/`.

---

## 🔄 Fluxo de Contribuição

1. Crie uma branch para sua feature/fix:
   ```bash
   git checkout -b feature/sua-feature
   ```

2. Faça suas alterações e commit:
   ```bash
   git commit -m "feat: descrição da alteração"
   ```

3. Envie para o repositório remoto:
   ```bash
   git push origin feature/sua-feature
   ```

4. Abra um Pull Request e aguarde review

---

## 📚 Recursos Úteis

- [Documentação oficial Vite](https://vitejs.dev)
- [Documentação React](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 🆘 Troubleshooting

### Porta 5173 já está em uso

```bash
npm run dev -- --port 3000
```

### Dependências com erro

```bash
rm -rf node_modules package-lock.json
npm install
```

### Cache do navegador causando problemas

Abra as DevTools, acesse o tab **Network**, marque "Disable cache" e recarregue a página.

---

## 📞 Suporte

Para dúvidas ou problemas:
- Abra uma [issue](https://github.com/ElPadrinhoBR/GitHub-Tutor/issues)
- Verifique [issues existentes](https://github.com/ElPadrinhoBR/GitHub-Tutor/issues)
- Entre em contato com os mantenedores

---

**Última atualização**: Setembro de 2026
