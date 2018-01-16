# can-use-storage-check

## Installing
```
npm i -S can-use-storage-check
```

## Usage

```js
import canUseStorageCheck from 'can-use-storage-check'

// sync
const storage = window.sessionStorage;
let canUseStorage;
canUseStorageCheck(storage).then((canUse) => {
  canUseStorage = canUse;
});

// async
let canUseLocalforage;
canUseStorageCheck(localforage).then((canUse) => {
  canUseLocalforage = canUse;
});
```

## API

### `canUseStorageCheck(storage)`

Checks storage usability by sync/async calling of `setItem`, `getItem` and `removeItem` methods.

## License

MIT © Jake Oswaldo
