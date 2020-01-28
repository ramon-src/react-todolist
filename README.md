This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

<pre>npm start</pre>
<pre>npm test</pre>
<pre>npm run build</pre>



estratégia de testes

- testes unitários
-- redux, saga, store, helpers, utils

- testes de componentes
-- variação de estados, validação de comportamentos, validação de estilo

- testes de integração
-- comportamento de composição de componentes




Testes orientando design de código

É fácil identificarmos se a estrutura está complexa demais
e muito acoplada com testes. Pois se está difícil de testar
x partes do sistema na maioria das vezes é porque a estrutura em si não foi bem desenhada.

Por isso a prática de TDD se encaixa muito bem, trabalhar a simplicidade do código,
exercita a prática de desenho mental e casos de uso.



Vantagens dos testes

Testes unitários: Rastreabilidade a nível de código, feedback muito rápido, é fácil de aumentar
a base de cobertura por ser testes focados em pequenas partes do sistema.

Testes de Integração: Feedback ainda rápido por ainda não depender de tantas partes na execução,
trabalha com um pequeno conjunto de funcionalidades, sua aplicação já é um pouco mais demorada.

Testes funcionais: Feedback lento pois o teste é executado de ponta a ponta de cada funcionalidade do sistema. É um teste que garante o funcionamento e comunicação do sistema e suas partes. A nível de interface, todas apis, e serviços



Casos de usos são importantes

Casos de usos são user stories quebradas em pequenas funcionalidades
é importante termos casos de usos já mapeados pois ajudam a guiar o desenvolvedor
em suas tarefas de desenvolvimento e consequentemente para testar!




AJUDA:

USING REACT TESTING LIBRARY

BUSCA POR TEXTO: expect(getByText(text)).toBeInTheDocument()

BUSCA POR LABEL: expect(getByLabelText(text)).toBeInTheDocument()

BUSCA POR ELEMENTO: expect(container.querySelector('query')).toBeInTheDocument()

ASSERTIONS:
 - toBeInTheDocument
 - toBeVisible

AÇÕES DE TELA:
import userEvent from '@testing-library/user-event'

------------------------------------------------------
MOCK LOCAL STORAGE: https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
------------------------------------------------------

MOCK MOMENT: 
https://medium.com/front-end-weekly/mocking-moment-js-in-jest-a-simple-one-line-solution-61259ffaaa2

jest.mock('moment', () => () => ({format: () => '2018–01–30T12:34:56+00:00'}));

------------------------------------------------------



RENDER WITH REDUX
function renderWithRedux(
  ui,
  {initialState, store = createStore(reducer, initialState)} = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}


