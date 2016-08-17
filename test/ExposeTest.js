import chai from 'chai';
import ModelDefinition from 'loopback-datasource-juggler/lib/model-definition';
import Expose from '../src/expose';

describe('Method exposition mixin', function () {
  it('should be a function.', function (done) {
    chai.assert.isFunction(Expose);
    done();
  });
  it('Method exposition work without parameters.', function (done) {
    Expose(ModelDefinition, {});
    done();
  });
});
