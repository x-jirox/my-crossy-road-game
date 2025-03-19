/**
 * Calcula la posición final después de una serie de movimientos.
 *
 * @param {Object} currentPosition - La posición inicial del objeto.
 * @param {number} currentPosition.rowIndex - Índice de fila actual.
 * @param {number} currentPosition.tileIndex - Índice de columna actual.
 * @param {string[]} moves - Lista de movimientos a realizar ("forward", "backward", "left", "right").
 * @returns {Object} La nueva posición después de aplicar todos los movimientos.
 */
export function calculateFinalPosotion(currentPosition, moves) {
    return moves.reduce((position, direction) => {
        // Movimiento hacia adelante: aumenta el índice de fila
        if (direction === "forward")
            return {
                rowIndex: position.rowIndex + 1,
                tileIndex: position.tileIndex,
            };

        // Movimiento hacia atrás: disminuye el índice de fila
        if (direction === "backward")
            return {
                rowIndex: position.rowIndex - 1,
                tileIndex: position.tileIndex,
            };

        // Movimiento a la izquierda: disminuye el índice de columna
        if (direction === "left")
            return {
                rowIndex: position.rowIndex,
                tileIndex: position.tileIndex - 1,
            };

        // Movimiento a la derecha: aumenta el índice de columna
        if (direction === "right")
            return {
                rowIndex: position.rowIndex,
                tileIndex: position.tileIndex + 1,
            };

        // Si el movimiento no es válido, no se modifica la posición
        return position;
    }, currentPosition);
}
