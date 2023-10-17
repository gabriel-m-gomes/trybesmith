import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se retorna a lista de produtos corretamente', async function () {
    const productModels = productsMock.AllProducts.map(product => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(productModels);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(productsMock.AllProducts); 
  })
});
