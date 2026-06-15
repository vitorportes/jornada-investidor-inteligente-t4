# Jornada Investidor Inteligente - Landing Page

Esta é uma landing page de alta conversão para a imersão presencial "Jornada Investidor Inteligente", conduzida por Luciano Mangueira.

## Arquitetura
- **Next.js 14+ (App Router)**: Para performance máxima e SEO.
- **Tailwind CSS 4**: Estilização moderna e leve.
- **TypeScript**: Segurança de tipos e melhor manutenção.
- **Lucide React**: Ícones leves e consistentes.

## Estrutura de Pastas
- `src/app`: Rotas e layout (Next.js).
- `src/components`: Componentes React modulares.
- `src/data`: `landingContent.ts` centraliza toda a copy, facilitando futuras alterações de texto sem mexer no código visual.
- `docs`: Contém os arquivos de referência originais (HTML e Copy em TXT).

## Como Rodar o Projeto

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Rodar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

## Pontos de Customização
- **Copy**: Altere os textos em `src/data/landingContent.ts`.
- **Cores**: As cores principais (Emerald, Slate) podem ser ajustadas no arquivo `tailwind.config.ts` (ou diretamente nas classes se preferir).
- **Imagens**: Substitua os placeholders de foto (Autoridade) e vídeo (Provas Sociais) pelos arquivos reais.

## Checklist de Performance & SEO
- [x] Mobile First.
- [x] SSR/Static Generation (Next.js).
- [x] Metadata configurada (Title, Description, OpenGraph).
- [x] Semântica HTML (h1, h2, h3, main, section).
- [x] Lazy loading de imagens (nativo do Next.js Image - a implementar quando houver fotos).
- [x] Acessibilidade básica (contrastes, botões semânticos).

## Disclaimer Educacional
A página inclui avisos discretos de que o conteúdo é estritamente educacional e não constitui recomendação personalizada de investimentos, conforme boas práticas de compliance financeiro.
