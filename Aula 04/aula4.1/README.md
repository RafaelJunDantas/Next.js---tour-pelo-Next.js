# Glossário do NExt.js

- **Static**
  - Por padrão
  - Só vai usar o `next export`, em casos onde TUDO é pré-renderizado
  - `getStaticProps`: versão com mesnos recursos

- **SSG (Static Site Generation):**
  - `getStaticProps` 
  - `revalidade`: true [npm run build && npm run start]
  - **Incremental Static Generation**
    - Fallback: true || 'blocking' e o getStaticPaths vem vazio ou com somente alguns itens

- **SSR (Server Side Render):**
  - `getServerSideProps`
  - Se estiver dentro da pasta `/api` é uma API route do SSR 
