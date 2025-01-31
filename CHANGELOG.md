# Changelog

## [1.9.0](https://github.com/linz/basemaps-screenshot/compare/v1.8.1...v1.9.0) (2024-10-09)


### Features

* Add screenshot test into CI and fix the health test for NZTM2000Quad. BM-1087 ([#422](https://github.com/linz/basemaps-screenshot/issues/422)) ([eaf8713](https://github.com/linz/basemaps-screenshot/commit/eaf8713be6de55c8aad407d3a5506a366f023636))

## [1.8.1](https://github.com/linz/basemaps-screenshot/compare/v1.8.0...v1.8.1) (2024-09-26)


### Bug Fixes

* remove hillshade from taranaki screenshot test BM-1054 ([#420](https://github.com/linz/basemaps-screenshot/issues/420)) ([3e5b01a](https://github.com/linz/basemaps-screenshot/commit/3e5b01ab633ac581bd61db351895dd64e0f1a514))

## [1.8.0](https://github.com/linz/basemaps-screenshot/compare/v1.7.0...v1.8.0) (2024-08-11)


### Features

* Remove bearing and pitch for default tests. ([#416](https://github.com/linz/basemaps-screenshot/issues/416)) ([99b800e](https://github.com/linz/basemaps-screenshot/commit/99b800eaf0da6a80c08107e34130b0ad0e2d1818))
* Remove some 3d map tests to shorten screenshot running time. ([#419](https://github.com/linz/basemaps-screenshot/issues/419)) ([670e858](https://github.com/linz/basemaps-screenshot/commit/670e858f5195a79cdec75853e24a8adb5cc340f9))
* Update the PR template ([#417](https://github.com/linz/basemaps-screenshot/issues/417)) ([9979552](https://github.com/linz/basemaps-screenshot/commit/9979552ac508677a43e2628034c1968429e0076d))

## [1.7.0](https://github.com/linz/basemaps-screenshot/compare/v1.6.0...v1.7.0) (2024-07-11)


### Features

* Allow to import customized test file into the screenshots ([#415](https://github.com/linz/basemaps-screenshot/issues/415)) ([e02fc95](https://github.com/linz/basemaps-screenshot/commit/e02fc957b767e154dba534df27b4e863a60e85d8))
* Update the terrain source id to the new one. ([#413](https://github.com/linz/basemaps-screenshot/issues/413)) ([1b7fe14](https://github.com/linz/basemaps-screenshot/commit/1b7fe1440c6fc287c91bddea5b8ef9ee695267b3))

## [1.6.0](https://github.com/linz/basemaps-screenshot/compare/v1.5.0...v1.6.0) (2024-06-10)


### Features

* **tests:** Add more tests for elevation 3d map. ([#411](https://github.com/linz/basemaps-screenshot/issues/411)) ([65ba46f](https://github.com/linz/basemaps-screenshot/commit/65ba46fc3e319923e5f8db785c38fe03079816db))

## [1.5.0](https://github.com/linz/basemaps-screenshot/compare/v1.4.1...v1.5.0) (2023-03-08)


### Features

* Set Default timeout for the whole transaction, remove the wait once map-loaded. ([#209](https://github.com/linz/basemaps-screenshot/issues/209)) ([94201b8](https://github.com/linz/basemaps-screenshot/commit/94201b84d1adaa1ad88d90e9ba91fdca23a80fc9))

## [1.4.1](https://github.com/linz/basemaps-screenshot/compare/v1.4.0...v1.4.1) (2023-03-07)


### Bug Fixes

* broken yarn.lock ([0c65b3f](https://github.com/linz/basemaps-screenshot/commit/0c65b3f050a552841ff9fc7c52a1e74795c7a570))

## [1.4.0](https://github.com/linz/basemaps-screenshot/compare/v1.3.0...v1.4.0) (2023-03-07)


### Features

* Stop error out and still take screenshot when failure or timeout, add waiting timeout for networkidle. ([#200](https://github.com/linz/basemaps-screenshot/issues/200)) ([6a0119f](https://github.com/linz/basemaps-screenshot/commit/6a0119f38ad128142976788823538bb6ed9f880b))

## [1.3.0](https://github.com/linz/basemaps-screenshot/compare/v1.2.0...v1.3.0) (2023-01-17)


### Features

* **deps:** bump @chunkd/fs from 8.5.1 to 10.0.2 ([#99](https://github.com/linz/basemaps-screenshot/issues/99)) ([0fdf267](https://github.com/linz/basemaps-screenshot/commit/0fdf267b8d64ef896966d536b5003ea8c9127703))
* **deps:** bump pino from 8.4.2 to 8.8.0 ([#127](https://github.com/linz/basemaps-screenshot/issues/127)) ([bfcb0a3](https://github.com/linz/basemaps-screenshot/commit/bfcb0a3f7a15381883d579544b60df53a9732278))
* **deps:** bump playwright from 1.25.1 to 1.29.2 ([#147](https://github.com/linz/basemaps-screenshot/issues/147)) ([1e53695](https://github.com/linz/basemaps-screenshot/commit/1e53695936cd03000ebd9f412079007d97632f7a))
* **deps:** bump pretty-json-log from 1.1.2 to 1.3.0 ([#43](https://github.com/linz/basemaps-screenshot/issues/43)) ([78671f5](https://github.com/linz/basemaps-screenshot/commit/78671f55cf3443766ed25aacc15af6c32787bda8))


### Bug Fixes

* set-output has been deprecated ([#154](https://github.com/linz/basemaps-screenshot/issues/154)) ([895725b](https://github.com/linz/basemaps-screenshot/commit/895725b2140ea60f1d19fa24f192721a083d932d))

## [1.2.0](https://github.com/linz/basemaps-screenshot/compare/v1.1.1...v1.2.0) (2022-08-28)


### Features

* **deps:** bump pino from 8.4.0 to 8.4.2 ([#11](https://github.com/linz/basemaps-screenshot/issues/11)) ([069b7ea](https://github.com/linz/basemaps-screenshot/commit/069b7ea21c235e7aa5e1d360a613a4a80a694dd2))
* take two screen shots at a time ([3030356](https://github.com/linz/basemaps-screenshot/commit/30303566b45bc38443b76623a3ba4005f91a0685))

## [1.1.1](https://github.com/linz/basemaps-screenshot/compare/v1.1.0...v1.1.1) (2022-08-28)


### Bug Fixes

* docker should use same package manager as the repo ([63f5af0](https://github.com/linz/basemaps-screenshot/commit/63f5af08902f95d93fabac0f4a464803044e5225))

## [1.1.0](https://github.com/linz/basemaps-screenshot/compare/v1.0.2...v1.1.0) (2022-08-28)


### Features

* **deps:** bump @chunkd/fs from 8.4.0 to 8.5.1 ([#16](https://github.com/linz/basemaps-screenshot/issues/16)) ([61c0a37](https://github.com/linz/basemaps-screenshot/commit/61c0a37e875ea776f9804552c61534b06cf3215f))
* **deps:** bump playwright from 1.25.0 to 1.25.1 ([#19](https://github.com/linz/basemaps-screenshot/issues/19)) ([6a7daff](https://github.com/linz/basemaps-screenshot/commit/6a7daff8016b21f4395061d16eff24a14dc018b8))

## [1.0.2](https://github.com/linz/basemaps-screenshot/compare/v1.0.1...v1.0.2) (2022-08-12)


### Bug Fixes

* correct location of package/repo ([dd45f5c](https://github.com/linz/basemaps-screenshot/commit/dd45f5c46f274c8cab218aba36deb9058cef560e))

## [1.0.1](https://github.com/linz/basemaps-screenshot/compare/v1.0.0...v1.0.1) (2022-08-12)


### Bug Fixes

* use correct context ([1ab3c2c](https://github.com/linz/basemaps-screenshot/commit/1ab3c2c5c8fb68dd86f6183d5d5e8863bfa2ff32))

## 1.0.0 (2022-08-12)


### Features

* add screenshot cli ([a67c7b3](https://github.com/linz/basemaps-screenshot/commit/a67c7b3cc815f40dbf21ca6785701e97c349827b))
* only publish containers on release ([8c36047](https://github.com/linz/basemaps-screenshot/commit/8c360477510b2caf150d40cd49c62c6231ee13b3))

## 0.0.2 (2022-08-11)


### ⚠ BREAKING CHANGES

* this switches from commonjs to ESM modules

### Features

* create github release on version tag ([#10](https://github.com/linz/template-javascript-hello-world/issues/10)) ([550cf40](https://github.com/linz/template-javascript-hello-world/commit/550cf406918c06faac6bf7b2e57500f5f4be621a))
* initial commit ([9ed41de](https://github.com/linz/template-javascript-hello-world/commit/9ed41de00ea3cf08eda07563bc444c124fb6814c))
* switch to ESM modules for packaging ([#12](https://github.com/linz/template-javascript-hello-world/issues/12)) ([b82767f](https://github.com/linz/template-javascript-hello-world/commit/b82767fa973324a23f9f6eb692147f603ea6a0cc))


### Bug Fixes

* get typescript to compile into esm ([cff197b](https://github.com/linz/template-javascript-hello-world/commit/cff197be277a9f13277f10276cc93d1a6835328e))


### Continuous Integration

* switch to release-please for release automation ([c5ad62d](https://github.com/linz/template-javascript-hello-world/commit/c5ad62d7fc96a198618bebb716702c56758e9824))
