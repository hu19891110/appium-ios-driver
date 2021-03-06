// transpile:mocha

import _ from 'lodash';
import env from '../helpers/env';
import { IosDriver } from '../../../lib/driver';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe('built-in apps', function () {
  this.timeout(120000);
  let driver;
  describe('Calendar', () => {
    it('should start', async () => {
      let caps = {
        app: 'Calendar',
        platformName: 'iOS',
        showIOSLog: false,
        fullReset: false,
        newCommandTimeout: 120
      };
      caps = _.merge({}, env.CAPS, caps);
      driver = new IosDriver();
      await driver.createSession(caps);

      let src = await driver.getPageSource();
      src.should.include('UIAApplication name="Calendar" label="Calendar"');
    });
  });
});
