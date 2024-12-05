describe('Testes da API ViaCEP', () => {
  const baseUrl = 'https://viacep.com.br/ws';

  it.only('Consulta de CEP válido', () => {
    // Definição dos dados esperados para o CEP consultado
    const expectedResponse = {
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
    };
  
    // Realizando a requisição GET para a API ViaCEP
    cy.request({
      method: 'GET', // Método HTTP utilizado
      url: `${baseUrl}/01001-000/json`, // Endpoint com o CEP válido
    }).then((response) => {

      // Validação do status HTTP para garantir que a requisição foi bem-sucedida
      expect(response.status).to.eq(200); // 200 indica sucesso
      // Validação dos campos principais do corpo da resposta
      
      expect(response.body).to.include(expectedResponse); // Valida o valor esperado 
      });
    });
  
  });
  
