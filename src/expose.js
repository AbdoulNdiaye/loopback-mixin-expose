// @flow

import ModelDefinition from 'loopback-datasource-juggler/lib/model-definition';
import debugModule from 'debug';
const debug = debugModule('disable-all-methods-mixin');

export default (Model: ModelDefinition, options: {}) => {
  if (Model && Model.sharedClass) {
    const methodsToExpose = options.methods || [];
    const methods = Model.sharedClass.methods();

    methods.forEach((method: Function) => {
      const methodName = method.name;

      if (methodsToExpose.indexOf(methodName) < 0) {
        Model.disableRemoteMethod(methodName, method.isStatic);
        debug('%s.%s disabled', Model.modelName, methodName);
      }
    });
  }
}
