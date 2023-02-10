### Entidade
- classe que descreve o que é o usuário.
- utilizada no controller no lugar do repositório

**Passos para utilização da entidade**
- Criação do arquivo `user.entity.ts` com os campos do repositório e mais um `id`
- Alteração do tipo de usuário na classe de salvar no repositório para a entidade criada
- Criação da entidade no controller e alteração da variável do método salvar para a entidade criada
- retorno de informações personalizadas: `id` e `mensagem`