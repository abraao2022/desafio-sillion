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
