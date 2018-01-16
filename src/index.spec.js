import Storage from 'dom-storage';
import canWriteStorageCheck from './index';

describe('canWriteStorageCheck', () => {
  it('pass sync storage', () => {
    const storage = new Storage();

    return canWriteStorageCheck(storage)
    .then((canWrite) => {
      expect(canWrite).toBe(true);
    })
  });

  it('not pass invalid storage', () => {
    const storage = {};

    return canWriteStorageCheck(storage)
    .then((canWrite) => {
      expect(canWrite).toBe(false);
    })
  });

  it('pass async storage', () => {
    function timeout(delay) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    };
    const normalStorage = new Storage();
    normalStorage.setItem('vuex', JSON.stringify({ persisted: 'json' }));

    const storage = {
      setItem(key, value) {
        return timeout(10).then(() => normalStorage.setItem(key, value));
      },
      getItem(key) {
        return timeout(10).then(() => normalStorage.getItem(key));
      },
      removeItem(key) {
        return timeout(10).then(() => normalStorage.removeItem(key));
      },
    };

    return canWriteStorageCheck(storage)
    .then((canWrite) => {
      expect(canWrite).toBe(true);
    })
  });
});
