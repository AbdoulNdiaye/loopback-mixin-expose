import { deprecate } from 'util';
import expose from './expose';

export default deprecate(
  app => app.loopback.modelBuilder.mixins.define('Expose', expose),
  'DEPRECATED: Use mixinSources, see https://github.com/oktapodia/loopback-mixin-expose#mixinsources'
);
