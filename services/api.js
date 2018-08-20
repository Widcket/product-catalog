import 'isomorphic-fetch';

class ProductsAPI {
    _baseUrl = 'https://private-anon-9e62fcff2d-aerolabchallenge.apiary-mock.com';
    _token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc0YTY4YTNmZjhhNjAwNTg4NDU2ZjIiLCJpYXQiOjE1MzQzNzE0NjZ9.ce0NdgE3UWC5EvYqcSeF1GNOKwAg-DWdDNXwS9VJPsY';
    _methods = { GET: 'GET', POST: 'POST' };

    _getRequestData(method, body = {}) {
        return {
            method: method,
            body: body,
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${this._token}`
            })
        };
    }

    getProfile() {
        const url = `${this._baseUrl}/user/me`;
        const requestData = this._getRequestData(this._methods.GET);

        return fetch(url, requestData);
    }

    addPoints(amount) {
        const url = `${this._baseUrl}/user/points`;
        const requestData = this._getRequestData(this._methods.POST, { amount });

        return fetch(url, requestData);
    }

    getHistory() {
        const url = `${this._baseUrl}/user/history`;
        const requestData = this._getRequestData(this._methods.GET);

        return fetch(url, requestData);
    }

    redeemProduct(productId) {
        const url = `${this._baseUrl}/redeem`;
        const requestData = this._getRequestData(this._methods.POST, { productId });

        return fetch(url, requestData);
    }

    getProducts() {
        const url = `${this._baseUrl}/products`;
        const requestData = this._getRequestData(this._methods.GET);

        return fetch(url, requestData);
    }
}

export default ProductsAPI;
