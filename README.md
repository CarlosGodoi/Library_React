# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Este projeto faz uso do JSON server, abaixo seguem os passos para correta utilização.

## Instalação o json server

#### yarn add json-server -D
#### yarn add axios
#### Após a instalação das bibliotecas configure package.json em "scripts"
#### "server": "json-server server.json -w --port 3333"

### Para rodar o serviço do json server execute no terminal 
#### yarn server

## Available Scripts

In the project directory, you can run:

### `yarn start`

Execute o aplicativo no modo de desenvolvimento.
Abra http://localhost:3000 para visualizá-lo no navegador.

A página será recarregada se você fizer edições.
Você também verá erros de lint no console.

### `yarn test`

Inicie o executor de teste no modo de exibição interativa.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `yarn build`


Compile o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

### `yarn eject`

**Nota: esta é uma operação unidirecional. Depois de 'ejetar', você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, poderá `ejetar` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente em seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste momento você está por sua conta.

Você não precisa usar `eject`. O conjunto de recursos com curadoria é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## Saber mais

Você pode aprender mais na [documentação Criar aplicativo React](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, confira a [documentação do React](https://reactjs.org/).
