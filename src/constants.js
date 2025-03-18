// minTileIndex = -8 → Índice más bajo en la cuadrícula.
// maxTileIndex = 8 → Índice más alto en la cuadrícula.
// Esto sugiere que las coordenadas de los tiles van desde -8 hasta 8.
export const minTileIndex = -8;
export const maxTileIndex = 8;
export const tilesPerRow = maxTileIndex - minTileIndex + 1;
export const tileSize = 42;