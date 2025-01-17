/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(typeof (circle(3)), 'object', 'Circle não retorna um objeto.');

    assert.strictEqual(Object.keys(circle(3)).length, 3, 'O objeto retornado não tem 3 entradas.');
  
    assert.strictEqual(circle(), undefined, 'Quando não recebe nenhum parâmetro, não retorna undefined.');
  
    assert.strictEqual(circle(2).circumference, 12.56, 'A função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.');

    const raio3 = circle(3);
    raio3.area = parseFloat(raio3.area.toPrecision(4));
    raio3.circumference = parseFloat(raio3.circumference.toPrecision(4));

    assert.strictEqual(raio3.area, 28.26, 'A função retorna, dentro de um objeto, a área correta para um círculo de raio 3.');
  
    assert.deepStrictEqual(raio3, { radius: 3, area: 28.26, circumference: 18.84 }, 'A função não retorna, num objeto, os dados corretos de um círculo de raio 3.');
  });
});