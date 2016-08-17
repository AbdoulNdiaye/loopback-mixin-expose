import { deprecate } from 'util';
import Expose from './expose';

export default deprecate(
  app => app.loopback.modelBuilder.mixins.define('Expose', Expose),
  'DEPRECATED: Use mixinSources, see https://github.com/oktapodia/loopback-mixin-expose#mixinsources'
);
