


export default function canWriteStorageCheck(storage) {
  return Promise.resolve()
  .then(() => storage.setItem('@@', 1))
  .then(() => storage.getItem('@@'))
  .then((item) => item === 1 ? Promise.resolve() : Promise.reject())
  .then(() => storage.removeItem('@@'))
  .then(() => storage.getItem('@@'))
  .then((item) => item === null ? Promise.resolve() : Promise.reject())
  .then(() => true)
  .catch(() => false);
}
