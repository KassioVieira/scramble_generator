// import { useEffect, useState } from 'react';
// import { ColorType } from '../types/ColorType';
// import { FaceType } from '../types/FaceType';
// import { MOVES } from '../utils/Constants';

// const useCubeLogicHooks = () => {
//   const initialCubeState: { [face in FaceType]: ColorType[][] } = {
//     F: [
//       ['green', 'green', 'green'],
//       ['green', 'green', 'green'],
//       ['green', 'green', 'green']
//     ],
//     B: [
//       ['blue', 'blue', 'blue'],
//       ['blue', 'blue', 'blue'],
//       ['blue', 'blue', 'blue']
//     ],
//     L: [
//       ['orange', 'orange', 'orange'],
//       ['orange', 'orange', 'orange'],
//       ['orange', 'orange', 'orange']
//     ],
//     R: [
//       ['red', 'red', 'red'],
//       ['red', 'red', 'red'],
//       ['red', 'red', 'red']
//     ],
//     U: [
//       ['white', 'white', 'white'],
//       ['white', 'white', 'white'],
//       ['white', 'white', 'white']
//     ],
//     D: [
//       ['yellow', 'yellow', 'yellow'],
//       ['yellow', 'yellow', 'yellow'],
//       ['yellow', 'yellow', 'yellow']
//     ]
//   };

//   const [state, setState] =
//     useState<{ [face in FaceType]: ColorType[][] }>(initialCubeState);

//   const [stateUpdated, setStateUpdate] =
//     useState<{ [face in FaceType]: ColorType[][] }>(initialCubeState);

//   const [currentMoveIndex, setCurrentMoveIndex] = useState({
//     index: 0,
//     scramble: ''
//   });

//   const [scrambleState, setScrambleState] = useState('');

//   useEffect(() => {
//     const executeNextMove = () => {
//       if (currentMoveIndex.scramble) {
//         const moves = currentMoveIndex.scramble.trim().split(' ');

//         if (currentMoveIndex.index < moves.length) {
//           const move = moves[currentMoveIndex.index];

//           switch (move) {
//             case 'F':
//               const result = rotateFrontClockwise(state);
//               setState(result);
//               break;
//             case "F'":
//               setState(rotateFrontCounterClockwise(state));
//               break;
//             case 'F2':
//               const intermed = rotateFront180(state);
//               setState(intermed);
//               break;
//             case 'B':
//               const b = rotateBackClockwise(state);
//               setState(b);
//               break;
//             case "B'":
//               const bL = rotateBackCounterClockwise(state);
//               setState(bL);
//               break;
//             case 'B2':
//               // const result = rotateBackClockwise(state);
//               // rotateBackClockwise();
//               break;
//             case 'L':
//               rotateLeftClockwise();
//               break;
//             case "L'":
//               rotateLeftCounterClockwise();
//               break;
//             case 'L2':
//               rotateLeftClockwise();
//               rotateLeftClockwise();
//               break;
//             case 'R':
//               rotateRightClockwise();
//               break;
//             case "R'":
//               rotateRightCounterClockwise();
//               break;
//             case 'R2':
//               rotateRightClockwise();
//               rotateRightClockwise();
//               break;
//             case 'U':
//               rotateUpClockwise();
//               break;
//             case "U'":
//               rotateUpCounterClockwise();
//               break;
//             case 'U2':
//               rotateUpClockwise();
//               rotateUpClockwise();
//               break;
//             case 'D':
//               rotateDownClockwise();
//               break;
//             case "D'":
//               rotateDownCounterClockwise();
//               break;
//             case 'D2':
//               rotateDownClockwise();
//               rotateDownClockwise();
//               break;
//             default:
//               throw new Error(`Invalid move: ${move}`);
//           }

//           setCurrentMoveIndex({
//             ...currentMoveIndex,
//             index: currentMoveIndex.index + 1
//           });

//           // if (currentMoveIndex.index + 1 > moves.length) {
//           //   console.log('Update the CUBE');
//           //   setState(stateUpdated);
//           // }
//         }
//       }
//     };

//     executeNextMove();
//   }, [currentMoveIndex]);

//   const move = (scramble: string): void => {
//     const moves = scramble.trim().split(' ');

//     let updateState: { [face in FaceType]: ColorType[][] } = state;

//     moves.forEach(move => {
//       switch (move) {
//         case 'F':
//           updateState = rotateFrontClockwise(updateState);
//           console.log('F result ', updateState);
//           break;
//         case "F'":
//           updateState = rotateFrontCounterClockwise(updateState);
//           break;
//         case 'F2':
//           updateState = rotateFront180(updateState);
//           break;
//         case 'B':
//           updateState = rotateBackClockwise(updateState);
//           break;
//         case "B'":
//           updateState = rotateBackCounterClockwise(updateState);
//           break;
//         // case 'B2':
//         //   updateState = rotateBack180(updateState);
//         //   break;
//         // case 'L':
//         //   updateState = rotateLeftClockwise(updateState);
//         //   break;
//         // case "L'":
//         //   updateState = rotateLeftCounterClockwise(updateState);
//         //   break;
//         // case 'L2':
//         //   updateState = rotateLeft180(updateState);
//         //   break;
//         // case 'R':
//         //   updateState = rotateRightClockwise(updateState);
//         //   break;
//         // case "R'":
//         //   updateState = rotateRightCounterClockwise(updateState);
//         //   break;
//         // case 'R2':
//         //   updateState = rotateRight180(updateState);
//         //   break;
//         // case 'U':
//         //   updateState = rotateUpClockwise(updateState);
//         //   break;
//         // case "U'":
//         //   updateState = rotateUpCounterClockwise(updateState);
//         //   break;
//         // case 'U2':
//         //   updateState = rotateUp180(updateState);
//         //   break;
//         // case 'D':
//         //   updateState = rotateDownClockwise(updateState);
//         //   break;
//         // case "D'":
//         //   updateState = rotateDownCounterClockwise(updateState);
//         //   break;
//         // case 'D2':
//         //   updateState = rotateDown180(updateState);
//         //   break;
//         default:
//           throw new Error(`Invalid move: ${move}`);
//       }
//     });

//     setState(updateState);
//   };

//   const rotateFrontClockwise = (currentState: {
//     [face in FaceType]: ColorType[][];
//   }): { [face in FaceType]: ColorType[][] } => {
//     const { F, L, U, R, D } = currentState;

//     // Rotate front face
//     const updatedF = rotateClockwise(F);

//     const updatedL = L.map((row, index) => {
//       if (index === 0) {
//         return [row[0], row[1], D[0][0]];
//       } else if (index === 1) {
//         return [row[0], row[1], D[0][1]];
//       } else {
//         return [row[0], row[1], D[0][2]];
//       }
//     });

//     const updatedU = U.map((row, index) => {
//       if (index === 2) {
//         return [L[2][2], L[2][1], L[2][0]];
//       } else {
//         return row;
//       }
//     });

//     const updatedR = R.map((row, index) => [U[2][index], ...row.slice(1)]);

//     const updatedD = D.map((row, index) => {
//       if (index === 0) {
//         return [R[2][0], R[1][0], R[0][0]];
//       } else {
//         return row;
//       }
//     });

//     return {
//       ...currentState,
//       F: updatedF,
//       L: updatedL,
//       U: updatedU,
//       R: updatedR,
//       D: updatedD
//     };
//   };

//   const rotateFrontCounterClockwise = (currentState: {
//     [face in FaceType]: ColorType[][];
//   }): { [face in FaceType]: ColorType[][] } => {
//     const { F, L, U, R, D } = currentState;

//     // Rotate front face counter-clockwise (equivalent to one clockwise rotation)
//     const updatedF = rotateClockwise(F);

//     const updatedL = L.map((row, index) => {
//       if (index === 0) {
//         return [row[0], row[1], U[2][2]];
//       } else if (index === 1) {
//         return [row[0], row[1], U[2][1]];
//       } else {
//         return [row[0], row[1], U[2][0]];
//       }
//     });

//     const updatedU = U.map((row, index) => {
//       if (index === 2) {
//         return [R[0][0], R[1][0], R[2][0]];
//       } else {
//         return row;
//       }
//     });

//     const updatedR = R.map((row, index) => {
//       if (index === 0) {
//         return [D[0][2], ...row.slice(1)];
//       } else if (index === 1) {
//         return [D[0][1], ...row.slice(1)];
//       } else {
//         return [D[0][0], ...row.slice(1)];
//       }
//     }) as ColorType[][];

//     const updatedD = D.map((row, index) => {
//       if (index === 0) {
//         return [L[2][2], L[1][2], L[0][2]];
//       } else {
//         return row;
//       }
//     }) as ColorType[][];

//     return {
//       ...currentState,
//       F: updatedF,
//       L: updatedL,
//       U: updatedU,
//       R: updatedR,
//       D: updatedD
//     };
//   };

//   const rotateFront180 = (currentState: {
//     [face in FaceType]: ColorType[][];
//   }): {
//     [face in FaceType]: ColorType[][];
//   } => {
//     const { F, L, U, R, D } = currentState;

//     // Rotate front face
//     const updatedF = rotateClockwise(F);

//     const updatedL = L.map((row, index) => {
//       if (index === 0) {
//         return [row[0], row[1], R[2][0]];
//       } else if (index === 1) {
//         return [row[0], row[1], R[1][0]];
//       } else {
//         return [row[0], row[1], R[0][0]];
//       }
//     });

//     const updatedU = U.map((row, index) => {
//       if (index === 2) {
//         return [D[0][2], D[0][1], D[0][0]];
//       } else {
//         return row;
//       }
//     });

//     const updatedR = R.map((row, index) => [L[2][index], ...row.slice(1)]);

//     const updatedD = D.map((row, index) => {
//       if (index === 0) {
//         return [U[2][2], U[2][1], U[2][0]];
//       } else {
//         return row;
//       }
//     });

//     return {
//       ...currentState,
//       F: updatedF,
//       L: updatedL,
//       U: updatedU,
//       R: updatedR,
//       D: updatedD
//     };
//   };

//   const rotateBackClockwise = (currentState: {
//     [face in FaceType]: ColorType[][];
//   }): { [face in FaceType]: ColorType[][] } => {
//     const { L, U, R, D, B } = currentState;

//     // Rotate front face counter-clockwise (equivalent to one clockwise rotation)
//     const updatedB = rotateClockwise(B);

//     const updatedL = L.map((row, index) => {
//       if (index === 0) {
//         return [U[0][2], row[0], row[1]];
//       } else if (index === 1) {
//         return [U[0][1], row[0], row[1]];
//       } else {
//         return [U[0][0], row[0], row[1]];
//       }
//     });

//     const updatedU = U.map((row, index) => {
//       if (index === 0) {
//         return [R[0][2], R[1][2], R[2][2]];
//       } else {
//         return row;
//       }
//     });

//     const updatedR = R.map((row, index) => {
//       if (index === 0) {
//         return [...row.slice(1), D[2][2]];
//       } else if (index === 1) {
//         return [...row.slice(1), D[2][1]];
//       } else {
//         return [...row.slice(1), D[2][0]];
//       }
//     }) as ColorType[][];

//     const updatedD = D.map((row, index) => {
//       if (index === 2) {
//         return [L[0][0], L[0][1], L[0][2]];
//       } else {
//         return row;
//       }
//     }) as ColorType[][];

//     return {
//       ...currentState,
//       L: updatedL,
//       U: updatedU,
//       R: updatedR,
//       D: updatedD,
//       B: updatedB
//     };
//   };

//   const rotateBackCounterClockwise = (currentState: {
//     [face in FaceType]: ColorType[][];
//   }): { [face in FaceType]: ColorType[][] } => {
//     const { B, L, U, R, D } = currentState;

//     // Rotate front face
//     const updatedB = rotateClockwise(B);

//     const updatedL = L.map((row, index) => {
//       if (index === 0) {
//         return [D[2][0], row[0], row[1]];
//       } else if (index === 1) {
//         return [D[2][1], row[0], row[1]];
//       } else {
//         return [D[2][2], row[0], row[1]];
//       }
//     });

//     const updatedU = U.map((row, index) => {
//       if (index === 0) {
//         return [L[2][0], L[1][0], L[0][0]];
//       } else {
//         return row;
//       }
//     });

//     const updatedR = R.map((row, index) => {
//       if (index === 0) {
//         return [...row.slice(1), U[0][0]];
//       } else if (index === 1) {
//         return [...row.slice(1), U[0][1]];
//       } else {
//         return [...row.slice(1), U[0][2]];
//       }
//     }) as ColorType[][];

//     const updatedD = D.map((row, index) => {
//       if (index === 2) {
//         return [R[2][2], R[1][2], R[0][2]];
//       } else {
//         return row;
//       }
//     });

//     return {
//       ...currentState,
//       B: updatedB,
//       L: updatedL,
//       U: updatedU,
//       R: updatedR,
//       D: updatedD
//     };
//   };

//   const rotateLeftClockwise = (): void => {
//     const { F, B, L, U, D } = state;

//     // Rotate left face
//     setState(prevState => ({
//       ...prevState,
//       L: rotateClockwise(L)
//     }));

//     // Update adjacent faces
//     const tempEdge = U.map(row => row[0]);
//     U.forEach((row, index) => (row[0] = B[2 - index][2]));
//     B.forEach((row, index) => (row[2] = D[2 - index][0]));
//     D.forEach((row, index) => (row[0] = F[index][0]));
//     F.forEach((row, index) => (row[0] = tempEdge[index]));

//     const tempCorner = U[0][0];
//     U[0][0] = B[2][2];
//     B[2][2] = D[2][0];
//     D[2][0] = F[0][0];
//     F[0][0] = tempCorner;
//   };

//   const rotateLeftCounterClockwise = (): void => {
//     const { F, B, L, U, D } = state;

//     // Rotate left face counter-clockwise (equivalent to three clockwise rotations)
//     setState(prevState => ({
//       ...prevState,
//       L: rotateClockwise(rotateClockwise(rotateClockwise(L)))
//     }));

//     // Update adjacent faces
//     const tempEdge = U.map(row => row[0]);
//     U.forEach((row, index) => (row[0] = F[index][0]));
//     F.forEach((row, index) => (row[0] = D[index][0]));
//     D.forEach((row, index) => (row[0] = B[2 - index][2]));
//     B.forEach((row, index) => (row[2] = tempEdge[2 - index]));

//     const tempCorner = U[0][0];
//     U[0][0] = F[0][0];
//     F[0][0] = D[0][0];
//     D[0][0] = B[2][2];
//     B[2][2] = tempCorner;
//   };

//   const rotateRightClockwise = (): void => {
//     const { F, B, R, U, D } = state;

//     // Rotate right face
//     setState(prevState => ({
//       ...prevState,
//       R: rotateClockwise(R)
//     }));

//     // Update adjacent faces
//     const tempEdge = U.map(row => row[2]);
//     U.forEach((row, index) => (row[2] = F[index][2]));
//     F.forEach((row, index) => (row[2] = D[index][2]));
//     D.forEach((row, index) => (row[2] = B[2 - index][0]));
//     B.forEach((row, index) => (row[0] = tempEdge[2 - index]));

//     const tempCorner = U[0][2];
//     U[0][2] = F[0][2];
//     F[0][2] = D[0][2];
//     D[0][2] = B[2][0];
//     B[2][0] = tempCorner;
//   };

//   const rotateRightCounterClockwise = (): void => {
//     const { F, B, R, U, D } = state;

//     // Rotate right face counter-clockwise (equivalent to three clockwise rotations)
//     setState(prevState => ({
//       ...prevState,
//       R: rotateClockwise(rotateClockwise(rotateClockwise(R)))
//     }));

//     // Update adjacent faces
//     const tempEdge = U.map(row => row[2]);
//     U.forEach((row, index) => (row[2] = B[2 - index][0]));
//     B.forEach((row, index) => (row[0] = D[2 - index][2]));
//     D.forEach((row, index) => (row[2] = F[index][2]));
//     F.forEach((row, index) => (row[2] = tempEdge[index]));

//     const tempCorner = U[0][2];
//     U[0][2] = B[2][0];
//     B[2][0] = D[2][2];
//     D[2][2] = F[0][2];
//     F[0][2] = tempCorner;
//   };

//   const rotateUpClockwise = (): void => {
//     const { F, B, L, R, U } = state;

//     // Rotate up face
//     setState(prevState => ({
//       ...prevState,
//       U: rotateClockwise(U)
//     }));

//     // Update adjacent faces
//     const tempEdge = F[0].slice();
//     F[0] = R[0].slice();
//     R[0] = B[0].slice();
//     B[0] = L[0].slice();
//     L[0] = tempEdge;

//     const tempCorner = F[0][0];
//     F[0][0] = R[0][0];
//     R[0][0] = B[0][0];
//     B[0][0] = L[0][0];
//     L[0][0] = tempCorner;
//   };

//   const rotateUpCounterClockwise = (): void => {
//     const { F, B, L, R, U } = state;

//     // Rotate up face counter-clockwise (equivalent to three clockwise rotations)
//     setState(prevState => ({
//       ...prevState,
//       U: rotateClockwise(rotateClockwise(rotateClockwise(U)))
//     }));

//     // Update adjacent faces
//     const tempEdge = F[0].slice();
//     F[0] = L[0].slice();
//     L[0] = B[0].slice();
//     B[0] = R[0].slice();
//     R[0] = tempEdge;

//     const tempCorner = F[0][0];
//     F[0][0] = L[0][0];
//     L[0][0] = B[0][0];
//     B[0][0] = R[0][0];
//     R[0][0] = tempCorner;
//   };

//   const rotateDownClockwise = (): void => {
//     const { F, B, L, R, D } = state;

//     // Rotate down face
//     setState(prevState => ({
//       ...prevState,
//       D: rotateClockwise(D)
//     }));

//     // Update adjacent faces
//     const tempEdge = F[2].slice();
//     F[2] = L[2].slice();
//     L[2] = B[2].slice();
//     B[2] = R[2].slice();
//     R[2] = tempEdge;

//     const tempCorner = F[2][0];
//     F[2][0] = L[2][0];
//     L[2][0] = B[2][0];
//     B[2][0] = R[2][0];
//     R[2][0] = tempCorner;
//   };

//   const rotateDownCounterClockwise = (): void => {
//     const { F, B, L, R, D } = state;

//     // Rotate down face counter-clockwise (equivalent to three clockwise rotations)
//     setState(prevState => ({
//       ...prevState,
//       D: rotateClockwise(rotateClockwise(rotateClockwise(D)))
//     }));

//     // Update adjacent faces
//     const tempEdge = F[2].slice();
//     F[2] = R[2].slice();
//     R[2] = B[2].slice();
//     B[2] = L[2].slice();
//     L[2] = tempEdge;

//     const tempCorner = F[2][0];
//     F[2][0] = R[2][0];
//     R[2][0] = B[2][0];
//     B[2][0] = L[2][0];
//     L[2][0] = tempCorner;
//   };

//   const rotateClockwise = (arr: ColorType[][]): ColorType[][] => {
//     const rotated: ColorType[][] = [];
//     const size = arr.length;

//     for (let i = 0; i < size; i++) {
//       rotated.push([]);
//       for (let j = 0; j < size; j++) {
//         rotated[i][j] = arr[size - j - 1][i];
//       }
//     }
//     return rotated;
//   };

//   const getRandomInt = (min: number, max: number) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const generateScramble = () => {
//     let scramble = [];
//     let previousMove = '';

//     for (let i = 0; i < 20; i++) {
//       let move = MOVES[getRandomInt(0, MOVES.length - 1)];
//       let notation = getRandomInt(0, 2);
//       if (notation === 1) {
//         move += "'";
//       } else if (notation === 2) {
//         move += '2';
//       }

//       while (move.charAt(0) === previousMove.charAt(0)) {
//         move = MOVES[getRandomInt(0, MOVES.length - 1)];
//         notation = getRandomInt(0, 2);
//         if (notation === 1) {
//           move += "'";
//         } else if (notation === 2) {
//           move += '2';
//         }
//       }

//       scramble.push(move);
//       previousMove = move;
//     }

//     return scramble.join(' ');
//   };

//   const createScramble = () => {
//     setState(initialCubeState);
//     setTimeout(() => {
//       const scramble = generateScramble();
//       move('F');
//       setScrambleState(scramble);
//     }, 1000);
//   };

//   const resetCube = (): void => {
//     setState(initialCubeState);
//   };

//   useEffect(() => {
//     resetCube();
//   }, []);

//   return { state, createScramble, resetCube, scrambleState, initialCubeState };
// };

// export default useCubeLogicHooks;

import { useEffect, useState } from 'react';
import { ColorType } from '../types/ColorType';
import { FaceType } from '../types/FaceType';
import { MOVES } from '../utils/Constants';

const useCubeLogicHooks = () => {
  const initialCubeState: { [face in FaceType]: ColorType[][] } = {
    F: [
      ['green', 'green', 'green'],
      ['green', 'green', 'green'],
      ['green', 'green', 'green']
    ],
    B: [
      ['blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue']
    ],
    L: [
      ['orange', 'orange', 'orange'],
      ['orange', 'orange', 'orange'],
      ['orange', 'orange', 'orange']
    ],
    R: [
      ['red', 'red', 'red'],
      ['red', 'red', 'red'],
      ['red', 'red', 'red']
    ],
    U: [
      ['white', 'white', 'white'],
      ['white', 'white', 'white'],
      ['white', 'white', 'white']
    ],
    D: [
      ['yellow', 'yellow', 'yellow'],
      ['yellow', 'yellow', 'yellow'],
      ['yellow', 'yellow', 'yellow']
    ]
  };

  const [state, setState] =
    useState<{ [face in FaceType]: ColorType[][] }>(initialCubeState);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [scrambleState, setScrambleState] = useState('');
  const [isMoveInProgress, setIsMoveInProgress] = useState(false);

  // Execute the next move
  const executeNextMove = () => {
    if (isMoveInProgress) return;

    const moves = scrambleState.trim().split(' ');

    if (currentMoveIndex < moves.length) {
      if (scrambleState !== '') {
        setIsMoveInProgress(true);
        const move = moves[currentMoveIndex];
        console.log('Move is ', move);

        // Perform the move
        console.log('state ', state);
        performMove(move);

        // Increase the move index
        setCurrentMoveIndex(currentMoveIndex + 1);
      }
    }
  };

  // Perform the move
  const performMove = (move: string) => {
    switch (move) {
      case 'F':
        const resultF = rotateFrontClockwise(state);
        setState(resultF);
        break;
      case "F'":
        const resultFL = rotateFrontCounterClockwise(state);
        setState(resultFL);
        break;
      case 'F2':
        const intermedF = rotateFront180(state);
        setState(intermedF);
        break;
      case 'B':
        const resultB = rotateBackClockwise(state);
        setState(resultB);
        break;
      case "B'":
        const resultBL = rotateBackCounterClockwise(state);
        setState(resultBL);
        break;
      default:
        throw new Error(`Invalid move: ${move}`);
    }

    // After the move is finished, set isMoveInProgress to false
    setIsMoveInProgress(false);
  };

  const rotateFrontClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { L, U, R, D } = currentState;

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], D[0][0]];
      } else if (index === 1) {
        return [row[0], row[1], D[0][1]];
      } else {
        return [row[0], row[1], D[0][2]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 2) {
        console.log('L FACE ', L);
        console.log('Change in ', row);
        return [L[0][2], L[1][2], L[1][2]];
      } else {
        return row;
      }
    });
    console.log('U FACE => ', updatedU);

    const updatedR = R.map((row, index) => [U[2][index], ...row.slice(1)]);

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [R[2][0], R[1][0], R[0][0]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const rotateFrontCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { L, U, R, D } = currentState;

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], U[2][2]];
      } else if (index === 1) {
        return [row[0], row[1], U[2][1]];
      } else {
        return [row[0], row[1], U[2][0]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 2) {
        return [R[0][0], R[1][0], R[2][0]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 0) {
        return [D[0][2], row[1], row[2]];
      } else if (index === 1) {
        return [D[0][1], row[1], row[2]];
      } else {
        return [D[0][0], row[1], row[2]];
      }
    }) as ColorType[][];

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [L[2][2], L[1][2], L[0][2]];
      } else {
        return row;
      }
    }) as ColorType[][];

    return {
      ...currentState,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const rotateFront180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { L, U, R, D } = currentState;

    //     // Rotate front face

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], R[2][0]];
      } else if (index === 1) {
        return [row[0], row[1], R[1][0]];
      } else {
        return [row[0], row[1], R[0][0]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 2) {
        return [D[0][2], D[0][1], D[0][0]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => [L[2][index], ...row.slice(1)]);

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [U[2][2], U[2][1], U[2][0]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const rotateBackClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { L, U, R, D, B } = currentState;

    // Rotate front face counter-clockwise (equivalent to one clockwise rotation)

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [U[0][2], row[1], row[2]];
      } else if (index === 1) {
        return [U[0][1], row[1], row[2]];
      } else {
        return [U[0][0], row[1], row[2]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [R[0][2], R[1][2], R[2][2]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 0) {
        return [R[0][0], R[0][1], D[2][2]];
      } else if (index === 1) {
        return [R[1][0], R[1][1], D[2][1]];
      } else {
        return [R[2][0], R[2][1], D[2][0]];
      }
    }) as ColorType[][];

    const updatedD = D.map((row, index) => {
      if (index === 2) {
        return [L[0][0], L[1][0], L[1][0]];
      } else {
        return row;
      }
    }) as ColorType[][];

    return {
      ...currentState,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD,
      B: B
    };
  };

  const rotateBackCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { B, L, U, R, D } = currentState;

    // Rotate front face

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [D[2][0], row[1], row[2]];
      } else if (index === 1) {
        return [D[2][1], row[1], row[2]];
      } else {
        return [D[2][2], row[1], row[2]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [L[2][0], L[1][0], L[0][0]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 0) {
        return [R[0][0], R[0][1], U[0][0]];
      } else if (index === 1) {
        return [R[1][0], R[1][1], U[0][1]];
      } else {
        return [R[2][0], R[2][1], U[0][2]];
      }
    }) as ColorType[][];

    const updatedD = D.map((row, index) => {
      if (index === 2) {
        return [R[2][2], R[1][2], R[0][2]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      B: B,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateScramble = () => {
    let scramble = [];
    let previousMove = '';

    for (let i = 0; i < 20; i++) {
      let move = MOVES[getRandomInt(0, MOVES.length - 1)];
      let notation = getRandomInt(0, 2);
      if (notation === 1) {
        move += "'";
      } else if (notation === 2) {
        move += '2';
      }

      while (move.charAt(0) === previousMove.charAt(0)) {
        move = MOVES[getRandomInt(0, MOVES.length - 1)];
        notation = getRandomInt(0, 2);
        if (notation === 1) {
          move += "'";
        } else if (notation === 2) {
          move += '2';
        }
      }

      scramble.push(move);
      previousMove = move;
    }

    setCurrentMoveIndex(0);

    return scramble.join(' ');
  };

  useEffect(() => {
    // Execute the next move whenever the currentMoveIndex or scrambleState changes
    executeNextMove();
  }, [currentMoveIndex, scrambleState]);

  const createScramble = () => {
    setState(initialCubeState);
    setTimeout(() => {
      const scramble = "F2 B F' B' F";
      // const scramble = generateScramble();
      setScrambleState(scramble);
    }, 1000);
  };

  return {
    state,
    generateScramble,
    createScramble,
    scrambleState,
    initialCubeState
  };
};

export default useCubeLogicHooks;
