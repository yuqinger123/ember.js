import Adapter from './adapter';
import { inspect } from 'ember-metal';

/**
  This class implements the methods defined by Ember.Test.Adapter for the
  QUnit testing framework.

  @class QUnitAdapter
  @namespace Ember.Test
  @extends Ember.Test.Adapter
  @public
*/
export default Adapter.extend({
  asyncStart() {
    QUnit.stop();
  },
  asyncEnd() {
    QUnit.start();
  },
  exception(error) {
    ok(false, inspect(error));
  }
});
