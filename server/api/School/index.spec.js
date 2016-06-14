'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var SchoolCtrlStub = {
  index: 'SchoolCtrl.index',
  show: 'SchoolCtrl.show',
  create: 'SchoolCtrl.create',
  update: 'SchoolCtrl.update',
  destroy: 'SchoolCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var SchoolIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './School.controller': SchoolCtrlStub
});

describe('School API Router:', function() {

  it('should return an express router instance', function() {
    SchoolIndex.should.equal(routerStub);
  });

  describe('GET /api/Schools', function() {

    it('should route to School.controller.index', function() {
      routerStub.get
        .withArgs('/', 'SchoolCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/Schools/:id', function() {

    it('should route to School.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'SchoolCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/Schools', function() {

    it('should route to School.controller.create', function() {
      routerStub.post
        .withArgs('/', 'SchoolCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/Schools/:id', function() {

    it('should route to School.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'SchoolCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/Schools/:id', function() {

    it('should route to School.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'SchoolCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/Schools/:id', function() {

    it('should route to School.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'SchoolCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
