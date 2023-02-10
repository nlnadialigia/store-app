### Validação do email

Para validação do cadastro de usuário, não permitindo o cadastramento do mesmo email, podemos utilizar uma forma assíncrona e um validador customizado, conforme instruções abaixo.

- Criação do decorator e o utilização em `CreaterUser.dto.ts`  
- Criação da classe de validação `UniqueEmailValidator`, que implementa a interface `ValidatorConstraintInterface`  
- Transformação dessa classe em um `provider`, usando `@Injectable`  
- Configuração dessa classe com uma validação assíncrona, com o decorator de `@ValidatorConstraint`  
- Adição do `provider` no módulo `user.moddule.ts`  


O **Nest** consegue resolver as dependências dos nossos `providers`, quando os configuramos com o `@Injectable` e colocamos a classe em questão dentro da chave de `providers` dos nossos módulos. 

Contudo, o **class-validator** não sabe onde ele buscar o `usuarioRepository` que está no construtor do nosso validator. Portanto, precisamos explicitar ao **class-validator** que ele pode usar o mesmo mecanismo de resolução de dependências que o **Nest** tem. 

Assim, quando for criar nosso validator, ele saberá buscar o `usuarioRepository`.

Para solucionar esse ponto basta adicionar a função `useContainer`, do **class-validator** no arquivo `main.ts`, passando uma referência para o root module da nossa aplicação, utilizando a variável `app` e o método `select()`.

Assim, o **class-validator** conseguirá resolver suas dependências e das classes nele contidas do mesmo jeito que o Nest resolve. 

Ademais, vamos passar um segundo parâmetro, definindo que o **class-validator** deve usar o seu próprio contêiner para tentar solucionar a dependência, caso não consiga resolvê-la como o Nest:

```ts
async function bootstrap() {
// ...

useContainer(app.select(AppModule), { fallbackOnErrors: true });

// ...
}
```