# Desafio Sillion

Este repositório contém dois projetos: um frontend e um backend, ambos configurados com Docker para facilitar a execução. Abaixo estão as instruções para configurar e executar ambos os projetos.

## 1. Configurar o Backend

### 1.1 Baixar o Repositório

- No repositório "Desafio Sillion", você encontrará dois projetos: o frontend e o backend.
- Ambos estão configurados com Docker para facilitar a execução.
  - Se preferir usar os projetos sem Docker, as respectivas versões são:
    - **Frontend:** Utiliza React com NextJS (Node 22.4 | React V^18 | Next V14.2.5)
    - **Backend:** Utiliza Laravel (PHP V^8.1 | Laravel V10.10)

### 1.2 Executar o Backend

1. Navegue para o diretório do backend:
   - `cd desafio-backend`

2. Construa a imagem Docker:
   - `docker compose build --no-cache`

3. Inicie os contêineres:
   - `docker compose up`

4. Com o contêiner em execução, abra um novo terminal e execute:
   - `docker exec -it laravel-app composer install`

### 1.3 Configurar o Banco de Dados

- As configurações do banco de dados já estão pré-configuradas, mas aqui estão as variáveis de ambiente usadas:
  - `DB_CONNECTION=mysql`
  - `DB_HOST=db`
  - `DB_PORT=3306`
  - `DB_DATABASE=laravel`
  - `DB_USERNAME=root`
  - `DB_PASSWORD=secret`

### 1.4 Executar Migrations

- Execute as migrations com o comando:
  - `docker exec -it laravel-app php artisan migrate`

### 1.5 Importar Usuários

- Busque usuários na API Random-data e salve-os no banco de dados com o comando:
  - `docker exec -it laravel-app php artisan import:users`

### 1.6 Verificar Backend

- Acesse [http://localhost:8000](http://localhost:8000). Se você visualizar a tela do Laravel, o backend está configurado corretamente!

## 2. Configurar o Frontend

### 2.1 Executar o Frontend

1. Navegue para o diretório do frontend:
   - `cd desafio-frontend`

2. Construa a imagem Docker:
   - `docker compose build --no-cache`

3. Inicie os contêineres:
   - `docker compose up`

4. Caso não tenha instalado as dependências do Node, abra um novo terminal e execute:
   - `docker exec -it web-1 npm install`

### 2.2 Verificar Frontend

- Acesse [http://localhost:3000](http://localhost:3000) para verificar o frontend.

## Explicação da Estrutura do Projeto

O projeto segue uma arquitetura bem definida, utilizando as seguintes camadas:

- **Controllers:** Responsáveis por lidar com as requisições HTTP e devolver as respostas apropriadas. Eles atuam como intermediários entre a camada de serviços e a interface com o usuário.

- **Services:** Contêm a lógica de negócio principal do aplicativo. Os serviços são responsáveis por processar dados e implementar regras específicas antes de passá-los para a camada de repositórios ou devolver a resposta ao controlador.

- **Repositories:** Abstraem o acesso aos dados, seja de um banco de dados ou de uma API externa. Esta camada é responsável por interagir com os modelos e garantir que os dados sejam recuperados ou armazenados de forma eficiente.

- **Models:** Representam a estrutura dos dados da aplicação. Eles são responsáveis por mapear a estrutura dos dados e as relações entre eles, tanto para persistência em banco de dados quanto para interação com outras partes do sistema.

### Integração com APIs

Para a integração com APIs externas, foi utilizado o **Design Pattern Adapter**. Embora este padrão seja mais comumente aplicado em integrações mais complexas, sua utilização neste projeto serve para:

- **Isolar a lógica de integração:** Facilitar a adaptação e manutenção da integração com APIs externas, minimizando o impacto de alterações na API externa sobre o restante do sistema.

- **Facilitar a manutenção:** Em caso de mudanças na API externa, as alterações são centralizadas na camada de adaptação, evitando modificações extensivas na lógica de negócio e nos controles.

- **Melhorar a flexibilidade:** Permitir que diferentes APIs sejam adaptadas e integradas de forma uniforme, oferecendo uma interface consistente para o restante do sistema.

Essa abordagem garante uma arquitetura modular e flexível, preparando o sistema para escalar e se adaptar a futuras necessidades de integração com APIs externas mais complexas.
