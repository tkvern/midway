import {config, plugin} from '../../../../../src/decorators';
import {provide, async, init} from 'midway-context';

@async()
@provide()
export class BaseService {

  @config('hello')
  config;

  @plugin('plugin2')
  plugin2;

  @init()
  async init() {
    await new Promise(resolve => {
      setTimeout(() => {
        this.config.c = 10;
        resolve();
      }, 100);
    });
  }

}
