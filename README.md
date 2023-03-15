# kuba

[![DeepSource](https://deepsource.io/gh/deMGoncalves/kuba.svg/?label=active+issues&show_trend=true&token=gPCov7hvg2e88VASFwhXhR26)](https://deepsource.io/gh/deMGoncalves/kuba/?ref=repository-badge})
[![DeepSource](https://deepsource.io/gh/deMGoncalves/kuba.svg/?label=resolved+issues&show_trend=true&token=gPCov7hvg2e88VASFwhXhR26)](https://deepsource.io/gh/deMGoncalves/kuba/?ref=repository-badge})
[![Codeclimate](https://api.codeclimate.com/v1/badges/f000644462eae8e6b020/maintainability)](https://codeclimate.com/github/deMGoncalves/kuba/maintainability)
[![Codacy](https://app.codacy.com/project/badge/Grade/8d2b7ccbd9d64b90bcccc515a1f61457)](https://www.codacy.com/gh/deMGoncalves/kuba/dashboard?utm_source=github.com&utm_medium=referral&utm_content=deMGoncalves/ku)
[![JS Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

No mundo do desenvolvimento de software, a complexidade excessiva pode ser um obstáculo para alcançar resultados eficazes. O Kuba surge como uma solução para simplificar o processo de desenvolvimento, focando no domínio do negócio e na eficácia das funcionalidades entregues.

## Manifesto

O manifesto Kuba é uma declaração de princípios que guiam o desenvolvimento do projeto:

1.  Simplicidade é a chave para a escalabilidade
2.  Pequeno é belo
3.  Imperfeito é humano

## Unidades construtivas

As unidades construtivas do Kuba são:

1.  **View**: Responsável pela renderização do HTML, CSS e JavaScript da aplicação.
2.  **Root Aggregate**: Responsável pela modelagem do domínio da aplicação.
    -  **Action**: Responsável por manipular a entrada do usuário.
    -  **State**: Responsável por representar o estado da aplicação.
3.  **Advice**: Responsável por gerenciar aspectos transversais da aplicação, como logs, métricas e segurança.

## Como funciona

O Kuba é uma ferramenta para desenvolvimento web que oferece um conjunto de recursos e funcionalidades para facilitar o processo de criação de aplicativos. Ele oferece uma arquitetura simples e eficiente, permitindo que os desenvolvedores possam focar na implementação da lógica de negócio, sem se preocupar tanto com detalhes técnicos.

## Características

-  Leve e de fácil utilização
-  Personalizável e adaptável para diversos projetos
-  Suporta as principais tecnologias do mercado
-  Contribuição de desenvolvedores em todo o mundo

## Benefícios

O Kuba traz diversos benefícios para a construção de aplicações web, como:

-  Código simples e fácil de manter
-  Escalabilidade e flexibilidade para acomodar mudanças no futuro
-  Modularidade e reutilização de código
-  Alta qualidade de código, seguindo os princípios do manifesto Kuba
-  Facilidade de teste e depuração

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

-  [Git](https://git-scm.com/)
-  [Node.js](https://nodejs.org/)
-  [Yarn](https://yarnpkg.com/)

## Variáveis de ambiente

O Kuba utiliza algumas variáveis de ambiente para configurar o comportamento da aplicação. Elas podem ser definidas no sistema operacional ou em um arquivo .env na raiz do projeto.

Aqui estão as variáveis de ambiente utilizadas pelo Kuba:

| Variável              | Descrição                                                              |
| --------------------- | ---------------------------------------------------------------------- |
| PUBLIC_PATH           | Define o caminho público para os arquivos da aplicação.                |
| HINTS                 | Define o nível de detalhe dos avisos exibidos durante a compilação.    |
| MAX_ASSET_SIZE        | Define o tamanho máximo (em bytes) permitido para um arquivo estático. |
| MAX_ENTRYPOINT_SIZE   | Define o tamanho máximo (em bytes) permitido para um ponto de entrada. |
| ANALYZER_MODE         | Define o modo de análise para o pacote webpack-bundle-analyzer.        |
| PORT                  | Define a porta em que o servidor da aplicação será executado.          |

Para definir essas variáveis, basta usar o comando export no terminal, seguido do nome da variável e seu valor:

```bash
export PUBLIC_PATH=/
export HINTS=warning
export MAX_ASSET_SIZE=2000000
export MAX_ENTRYPOINT_SIZE=2000000
export ANALYZER_MODE=
export PORT=3000
```

Alternativamente, você pode definir as variáveis em um arquivo .env na raiz do projeto, usando o formato NOME=VALOR. Lembre-se de adicionar o arquivo .env no seu .gitignore para que as informações confidenciais não sejam versionadas.

## Experimente

Para começar a usar o Kuba, siga os seguintes passos:

1.  Clone o repositório do Kuba em seu computador, usando o seguinte comando no terminal:
```bash
git clone https://github.com/deMGoncalves/kuba.git
```

2.  Acesse o diretório do projeto usando o seguinte comando:
```bash
cd kuba
```

3.  Instale as dependências do projeto usando o seguinte comando:
```bash
yarn install
```

4.  Inicie o servidor de desenvolvimento usando o seguinte comando:
```bash
yarn start
```

5.  Agora, você pode acessar a aplicação em seu navegador, acessando a URL [http://localhost:3000/](http://localhost:3000/).

Para mais informações sobre como usar o Kuba, consulte a documentação completa na [Wiki]([http://localhost:3000/](https://github.com/deMGoncalves/kuba/wiki)) do projeto.

## Artigos

Nesta seção, você encontrará uma lista de artigos escritos sobre o Kuba e como ele pode ser usado para criar aplicativos web modernos e escaláveis. Esses artigos abrangem vários tópicos, desde uma introdução ao Kuba até tutoriais mais avançados sobre como usar seus recursos para desenvolver aplicativos web de alta qualidade.

Se você é novo no Kuba, recomendamos começar com os artigos introdutórios, que explicam os conceitos básicos e mostram como criar seus primeiros componentes. Depois de dominar esses conceitos, você pode avançar para artigos mais avançados, que cobrem tópicos como roteamento, gerenciamento de estado e implementação de componentes reutilizáveis.

Nossos artigos são escritos por desenvolvedores experientes e incluem exemplos de código práticos, dicas úteis e soluções para problemas comuns de desenvolvimento web. Se você tiver alguma dúvida ou sugestão para novos artigos, sinta-se à vontade para entrar em contato conosco ou abrir uma issue em nosso repositório do GitHub.

Confira nossos artigos abaixo:

-  [Uma nova visão sobre modularidade e componentes javascript](https://dev.to/demgoncalves/components-469o)
-  [Adeus, useState! Descubra como @paint & @repaint estão mudando a forma de desenvolver Componentes](https://dev.to/demgoncalves/adeus-usestate-descubra-como-paint-repaint-estao-mudando-a-forma-de-desenvolver-componentes-1ceh)

Esperamos que esses artigos ajudem você a aproveitar ao máximo o Kuba e criar aplicativos web incríveis e escaláveis!

## Contribuindo

Se você deseja contribuir com o projeto Kuba, siga os passos abaixo:

1.  Faça um fork deste repositório clicando no botão "Fork" no topo da página.

2.  Clone o repositório para sua máquina local:
```bash
git clone https://github.com/deMGoncalves/kuba.git
```

3.  Crie uma branch com a feature que deseja adicionar ou corrigir:
```bash
git checkout -b minha-feature
```

4.  Faça as alterações necessárias e adicione ao stage do Git:
```bash
git add .
```

5.  Faça um commit com suas alterações:
```bash
git commit -m "Minha feature: descrição breve"
```

6.  Faça um push da sua branch para o GitHub:
```bash
git push origin minha-feature
```

7.  Abra um Pull Request para a branch "master" deste repositório.

## Licença

O Kuba é um projeto de código aberto licenciado sob a licença MIT. Isso significa que você pode utilizá-lo livremente em seus projetos pessoais ou comerciais, desde que mantenha a atribuição do autor original.

## Contato

Caso você tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato com **deMGoncalves** através do email cleber.engineer@gmail.com.
