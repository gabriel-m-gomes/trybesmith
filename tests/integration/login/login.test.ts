import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import jwt from '../../../src/utils/jwt'
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model'
import app from '../../../src/app'
chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('deve retornar um status 201 com uma transação criada', async function () {
      const body = {
        username: 'Hagar',
        password: 'terrível'
        }
        
      const mockFindOneReturn = UserModel.build(loginMock.bodySuccessfull);
      sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send(body)

      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.have.key('token');
    });

    it('ao enviar um nome vazio deve retornar um status 400 com uma mensagem de erro', async function () {
      const mockFindOneReturn = UserModel.build(loginMock.bodySuccessfull);
      sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginMock.noEmptyName)

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required'});
    });

      it('ao enviar uma senha vazia deve retornar um status 400 com uma mensagem de erro', async function () {
      const mockFindOneReturn = UserModel.build(loginMock.bodySuccessfull);
      sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginMock.noEmptyPassword)

      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required'});
    });
});
