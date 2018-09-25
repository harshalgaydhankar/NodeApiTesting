var expect = require('chai').expect;
var code = require('../../app');
var request = require('supertest');

describe('Get /books', function() {
  it('should display information about all the books', function(done) {
    request(code)
      .get('/books')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {

          expect(res.body.result).to.deep.equal([]);
          done();
        }
      });
  });
});

describe('Post /books', function() {
  var book = {
    'id':1,
    'name':'Wings of Fire',
    'author':'A P J Abdul Kalam',
    'publisher':'The India',
    'price':'860'
  }
  it('should save information about given book to library', function(done) {
    request(code)
      .post('/books')
      .send(book)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.body.size).to.be.at.least(1);
          done();
        }
      });
  });
});

describe('Get /books', function() {
  it('should display information about all the books', function(done) {
    request(code)
      .get('/books')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {

          expect(res.body.result.length).to.equal(1);
          expect(res.body.result[0].author).to.equal('A P J Abdul Kalam');
          done();
        }
      });
  });
});

describe('Post /books', function() {
  var book = {
    'id':2,
    'name':'XP Practices and Principles',
    'author':'Kent Beck',
    'publisher':'Oreally Publishing House',
    'price':'500'
  }
  it('should save information about given book to library', function(done) {
    request(code)
      .post('/books')
      .send(book)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.body.size).to.be.at.least(1);
          done();
        }
      });
  });
});


describe('Get /books', function() {
  it('should display information about all the books', function(done) {
    request(code)
      .get('/books')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {

          expect(res.body.result.length).to.equal(2);
          expect(res.body.result[0].author).to.equal('A P J Abdul Kalam');
          expect(res.body.result[1].author).to.equal('Kent Beck');
          done();
        }
      });
  });
});

describe('Delete /books', function() {
  it('should remove books from library', function(done) {
    var book = {
      id : 2
    }
    request(code)
      .delete('/books')
      .send(book)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          console.log(res.body);
          expect(res.body.size).to.equal(1);

          done();
        }
      });
  });
});
