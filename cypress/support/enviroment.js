export function env() {
    if (Cypress.env('enviroment') === 'homol') {
        Cypress.env('URL', Cypress.env('url_homol'));
        Cypress.env('user', Cypress.env('homolUser'));
    } else if (Cypress.env('enviroment') === 'prod') {
        Cypress.env('URL', Cypress.env('url_prod'));
        Cypress.env('user', Cypress.env('prodUser'));
    } else {
        Cypress.env('URL', Cypress.env('url_develop'));
        Cypress.env('user', Cypress.env('developUser'));

    }
}