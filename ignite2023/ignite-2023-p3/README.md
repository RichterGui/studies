# App

GymPass style app.

## RFs (requisitos funcionais)

- [x] Deve ser possivel se cadastrar;
- [x] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter o perfil de um usuario logado;
- [ ] Deve ser possivel obter o numero de check-ins realizados pelo usuario logado;
- [ ] Deve ser possivel o usuario obter seu historico de check-ins;
- [ ] Deve ser possivel o uruario buscar academias proximas;
- [ ] Deve ser possivel o usuario buscar academias pelo nome;
- [ ] Deve ser possivel o usuario realizar o check-in em uma academia;
- [ ] Deve ser possivel validar o check-in de um usuario
- [ ] Deve ser possivel cadastrar uma academia

## RNs (Regras de negocios)

- [x] O usuario nao deve poder se cadastrar com um email duplicado
- [ ] O usuario nao pode fazer 2 check-ins no mesmo dia;
- [ ] O usuario nao pode fazer check-in se nao estiver perto (100m) da academia;
- [ ] O check-in so pode ser vbalidado ate 20 min apos criado
- [ ] o check-in so pode ser validado por admins
- [ ] a academia so pode ser cadastrada por admins

## RNFs (Requisitos nao-funcionais)

- [x] A senha do usuario precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco postgreSql
- [ ] Os dados da aplicacao presisam estar paginadas com 20 itens por pagina;
- [ ] O usuario deve ser identificada por um jwt
