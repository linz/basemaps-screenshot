# Basemaps Screenshot

### _Validate basemaps.linz.govt.nz is working correctly by taking screenshots_


## Why?

Basemaps has multiple styles that need to be validated on every change, this tool creates screenshots of the styles to be compared against previous runs.

```bash
docker run --rm -v $PWD:$PWD ghcr.io/linz/basemaps-screenshot/cli:v1.1.0 --url http://localhost:5000 --output $PWD/.artifacts/visual-snapshots
```