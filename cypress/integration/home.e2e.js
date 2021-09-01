describe('Busca de informações', () => {
    it('Realizar uma busca e verificar se a pagina carregou', async () => {
        cy.visit('https://duckduckgo.com/');
        cy.get('input#search_form_input_homepage').type('cypressio');
        cy.get('input#search_button_homepage').click();
        cy.get('a.result__a').then((arr) =>{
            const result = arr[0];
            result.click();
        });
    })
})