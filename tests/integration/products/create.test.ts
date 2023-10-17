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
      expect(httpResponse.body).to.be.deep.equal({ message: 'Product invalid' });
  });
});
