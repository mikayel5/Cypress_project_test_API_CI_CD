describe('API testing', () => {
    let authToken = null;
  
    // get access Token
    before('creating access token', () => {
      cy.request({
        method: 'POST',
        url: 'https://simple-books-api.glitch.me/api-clients/',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          clientName: Math.random().toString(5).substring(2),
          clientEmail: Math.random().toString(5).substring(2) + "@mail.com"
        }
      }).then((response) => {
        authToken = response.body.accessToken;
        console.log("ddd", authToken);
      });
    });
  
    before('Creating new order', () => {
      cy.request({
        method: 'POST',
        url: "https://simple-books-api.glitch.me/orders/",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken,
        },
        body: {
          "bookId": 1,
          "customerName": 'xyzabc',
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.created).to.eq(true);
      });
    });
  
    it('Fetching the orders', () => {
      cy.request({
        method: 'GET', // Change method to GET
        url: "https://simple-books-api.glitch.me/orders/",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken,
        },
        cookies: {
          "cookieName": "mycookie",
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(1); // Fix the typo
      });
    });
  });
  