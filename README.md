# Basemaps Screenshot

### _Validate basemaps.linz.govt.nz is working correctly by taking screenshots_

## Why?

Basemaps has multiple styles that need to be validated on every change, this tool creates screenshots of the styles to be compared against previous runs.

```bash
docker run --rm -v $PWD:$PWD ghcr.io/linz/basemaps-screenshot/cli:v1.1.0 --url http://localhost:5000 --output $PWD/.artifacts/visual-snapshots
```

## Building the tool

1. Open a terminal to the root of the repository.

2. Run the following commands:

   ```bash
   # Install Node.js dependencies
   npm install

   # Transpile the source code
   npm run build
   ```

## Using the tool

There are two main ways to run the tool:

### Capturing screenshots from a single Basemaps URL

For each test, this mode outputs a screenshot of the resulting Basemaps site.

#### Examples

- Using the default set of tests:

  ```bash
  node bms.mjs \
  --url "https://basemaps.linz.govt.nz" \
  --output ./output-dir
  ```

- Using a custom set of tests:

  ```bash
  node bms.mjs \
  --url "https://basemaps.linz.govt.nz" \
  --output ./output-dir \
  --tests ./custom-tests.json
  ```

### Capturing screenshots from, and differences between, two Basemaps URLs

For each test, this mode outputs an additional image highlighting any differences between the two resulting Basemaps sites.

#### Examples

In the following examples, note the hardcoded parameters included in the `diffUrl` URL. The tool will preserve such parameters, overriding those defined in the test set. This allows the `url` and `diffUrl` URLs to target different tilesets (`i=`), matrices (`p=`), and styles (`s=`).

- Using the default set of tests:

  ```bash
  node bms.mjs \
  --url "https://basemaps.linz.govt.nz" \
  --diffUrl "https://basemaps.linz.govt.nz/?s=topographic-v2&i=topographic&config=s3://linz-basemaps-staging/config/config-3yPz7p2RBWJBBrx25mZcF55RH8xqxUyFc71D8v4baEYk.json.gz" \
  --output ./output-dir
  ```

- Using a custom set of tests:

  ```bash
  node bms.mjs \
  --url "https://basemaps.linz.govt.nz" \
  --diffUrl "https://basemaps.linz.govt.nz/?s=topographic-v2&i=topographic&config=s3://linz-basemaps-staging/config/config-3yPz7p2RBWJBBrx25mZcF55RH8xqxUyFc71D8v4baEYk.json.gz" \
  --output ./output-dir \
  --tests ./custom-tests.json
  ```
