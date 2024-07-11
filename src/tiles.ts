enum TileMatrixIdentifier {
  Nztm2000Quad = 'NZTM2000Quad',
  Google = 'WebMercatorQuad',
}

interface Location {
  lat: number;
  lng: number;
  z: number;
  b?: number;
  p?: number;
}

export interface TestTile {
  name: string;
  tileMatrix: TileMatrixIdentifier;
  location: Location;
  tileSet: string;
  style?: string;
  terrain?: string;
  hillshade?: string;
}

export const DefaultTestTiles: TestTile[] = [
  {
    name: 'health-3857-z5',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.8899962, lng: 174.0492437, z: 5 },
    tileSet: 'health',
  },
  {
    name: 'health-2193-z3',
    tileMatrix: TileMatrixIdentifier.Nztm2000Quad,
    location: { lat: -41.8899962, lng: 174.0492437, z: 3 },
    tileSet: 'aerial',
  },
  {
    name: 'aerial-3857-wellington-urban-z16',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.2890657, lng: 174.7769262, z: 16 },
    tileSet: 'aerial',
  },
  {
    name: 'aerial-3857-canterbury-rural-z12',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -43.4040409, lng: 172.5393086, z: 12 },
    tileSet: 'aerial',
  },
  {
    name: 'topographic-3857-z8',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -39.2169833, lng: 176.4774344, z: 8 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topolite-3857-z8',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -39.2169833, lng: 176.4774344, z: 8 },
    tileSet: 'topographic',
    style: 'topolite',
  },
  {
    name: 'topographic-3857-z14',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.8899962, lng: 174.0492437, z: 14 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topographic-3857-ngauranga-z15',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.2454458, lng: 174.8101136, z: 15 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topographic-3857-auckland-airport-z13',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -37.000845, lng: 174.8064383, z: 13 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topographic-3857-otaki-south-z13',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -40.7727954, lng: 175.1504838, z: 13 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topographic-3857-christchurch-north-urban-z17',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -43.4567506, lng: 172.6109426, z: 17 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topographic-3857-mount-cook-village-z12',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -43.717227, lng: 170.0844837, z: 12 },
    tileSet: 'topographic',
    style: 'topographic',
  },
  {
    name: 'topolite-3857-ngauranga-z15',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.2454458, lng: 174.8101136, z: 15 },
    tileSet: 'topographic',
    style: 'topolite',
  },
  {
    name: 'topolite-3857-z17',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -43.8063936, lng: 172.9679876, z: 17 },
    tileSet: 'topographic',
    style: 'topolite',
  },
  {
    name: 'aerial-3857-terrain-hillshade-z6',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -45.0735206, lng: 169.1674805, z: 6, b: 18, p: 55 },
    tileSet: 'aerial',
    style: 'aerial',
    terrain: 'LINZ-Terrain',
    hillshade: 'LINZ-Terrain',
  },
  {
    name: 'aerial-3857-terrain-hillshade-z5',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -40.7681948, lng: 172.4544741, z: 5 },
    tileSet: 'aerial',
    style: 'aerial',
    hillshade: 'LINZ-Terrain',
  },
  {
    name: 'aerial-3857-wellington-urban-terrain-z13',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.3040702, lng: 174.7730613, z: 14, b: -14, p: 60 },
    tileSet: 'aerial',
    style: 'aerial',
    terrain: 'LINZ-Terrain',
  },
  {
    name: 'aerial-3857-mount-taranaki-terrain-hillshade-z14',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -39.3031717, lng: 174.0585208, z: 14, b: 46, p: 43 },
    tileSet: 'aerial',
    style: 'aerial',
    terrain: 'LINZ-Terrain',
    hillshade: 'LINZ-Terrain',
  },
  {
    name: 'topographic-3857-terrain-hillshade-z12',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -42.4146988, lng: 174.1766669, z: 5, b: 13, p: 46 },
    tileSet: 'topographic',
    style: 'topographic',
    terrain: 'LINZ-Terrain',
    hillshade: 'LINZ-Terrain',
  },
  {
    name: 'topographic-3857-tauranga-terrain-z12',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -37.7635905, lng: 176.2261963, z: 12, p: 60 },
    tileSet: 'topographic',
    style: 'topographic',
    terrain: 'LINZ-Terrain',
  },
  {
    name: 'topolite-3857-hillshade-z4',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -41.6092133, lng: 173.0748696, z: 4 },
    tileSet: 'topographic',
    style: 'topolite',
    hillshade: 'LINZ-Terrain',
  },
  {
    name: 'topolite-3857-christchurch-rural-terrain-hillshade-z10',
    tileMatrix: TileMatrixIdentifier.Google,
    location: { lat: -43.6547079, lng: 172.6999283, z: 10, b: 32, p: 60 },
    tileSet: 'topographic',
    style: 'topolite',
    terrain: 'LINZ-Terrain',
    hillshade: 'LINZ-Terrain',
  },
];
