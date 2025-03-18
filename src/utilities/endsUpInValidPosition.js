import { calculateFinalPosotion } from "./calculateFinalPosition";
import { minTileIndex, maxTileIndex } from "../constants";
import { metadata as rows } from "../components/objects/Map";

export function  endsUpInValidPosition (currentPosition, moves) {
    //Caluclate where the the player would end up after the move
    const finalPosition = calculateFinalPosotion(
        currentPosition,
        moves
    );

    //Detect if we hit the edge of the board
    if(
        finalPosition.rowIndex === - 1 ||
        finalPosition.tileIndex === minTileIndex- 1 ||
        finalPosition.tileIndex === maxTileIndex + 1 
    ){
        //Invalid move, ignore ove command
        return false;
    }

    //Detected if we hit a tree
    const finalRow = rows[finalPosition.rowIndex - 1];
    if(
        finalRow &&
        finalRow.type === "forest" &&
        finalRow.trees.some(
            (tree) => tree.tileIndex === finalPosition.tileIndex
        )
    ){
        //Invalid move; Ignore move command
        return false;
    }
    return true;
}