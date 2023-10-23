import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';
chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao receber um produto valido, ele cria o produto', async function () {
    const httpBody = productsMock.bodySuccessful
    const mockFindReturn = ProductModel.build(httpBody)
    sinon.stub(ProductModel, 'create').resolves(mockFindReturn);

    const httpResponse = await chai.request(app).post('/products').send(httpBody)

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).not.to.have.key('orderId');
  })

  it('ao não receber um body valido, retorne um erro', async function () {
      const httpRequestBody = productsMock.bodyFail

      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
  });

  it('ao não receber a propiedade name no body, retorne um erro', async function () {
      const httpRequestBody = productsMock.bodyEmptyName

      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
  });

   it('ao não receber a propiedade price no body, retorne um erro', async function () {
      const httpRequestBody = productsMock.bodyEmptyPrice

      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
  });

   it('ao receber a propiedade name com um tamanho igual a 2 ou menos caracteres no body, retorne um erro', async function () {
      const httpRequestBody = productsMock.bodyNameLength

      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' });
  });

   it('ao receber a propiedade name com um tipo diferente de uma string no body, retorne um erro', async function () {
      const httpRequestBody = productsMock.bodyNameTypeof

      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.be.deep.equal({ message: '"name" must be a string' });
  });
});
