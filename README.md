# Translation Popup prevents playwright test from clicking "firefox"

## steps to reproduce

```bash
yarn install && yarn playwright install && yarn e2e
```

If you do nothing, the test fails after 7 seconds.

If you close the translation popup from firefox Nightly, the test succeed.


### video

https://github.com/BenjaminLesne/nightly-popup/assets/73464907/12ee09bd-1a47-48d8-aee2-2d1af7f90fbf

