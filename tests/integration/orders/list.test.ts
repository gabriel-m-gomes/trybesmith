import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });


  it('Testa se retorna a lista de orders corretamente', async function() {
  
    sinon.stub(OrderModel, 'findAll').resolves([])

    const httpResponse = await chai.request(app)
      .get('/orders');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.an('array');
  })
});