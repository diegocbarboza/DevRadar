## Descrição 
Este projeto foi criando durante a Semana OnmniStack 10 da https://rocketseat.com.br/.

Este é um aplicativo web que permite cadastrar desenvolvedores através de seu perfil do Github e sua localidade. Os desenvolvedores cadastrados são exibidos em uma lista com foto de perfil, nome e biografia obtidos da API do Github, localidade e tecnologias que domina conforme informado no cadastro.

O backend foi desenvolvido em Node.js com MongoDB e o frontend em React. 

## Atualização
O projeto original buscava as coordenadas do usuário no seu navegador no momento do cadastro. Esta versão foi atualizada para usar o CEP do usuário e converter seu CEP para latitude e longitude usando a API http://cepaberto.com/ antes de inserir no banco.

