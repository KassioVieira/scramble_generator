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

  const moveMap: { [key: string]: () => void } = {
    F: () => rotateFrontClockwise(),
    "F'": () => rotateFrontCounterClockwise(),
    F2: () => {
      rotateFrontClockwise();
      rotateFrontClockwise();
    },
    B: () => rotateBackClockwise(),
    "B'": () => rotateBackCounterClockwise(),
    B2: () => {
      rotateBackClockwise();
      rotateBackClockwise();
    },
    L: () => rotateLeftClockwise(),
    "L'": () => rotateLeftCounterClockwise(),
    L2: () => {
      rotateLeftClockwise();
      rotateLeftClockwise();
    },
    R: () => rotateRightClockwise(),
    "R'": () => rotateRightCounterClockwise(),
    R2: () => {
      rotateRightClockwise();
      rotateRightClockwise();
    },
    U: () => rotateUpClockwise(),
    "U'": () => rotateUpCounterClockwise(),
    U2: () => {
      rotateUpClockwise();
      rotateUpClockwise();
    },
    D: () => rotateDownClockwise(),
    "D'": () => rotateDownCounterClockwise(),
    D2: () => {
      rotateDownClockwise();
      rotateDownClockwise();
    }
  };

  const [state, setState] =
    useState<{ [face in FaceType]: ColorType[][] }>(initialCubeState);

  const [currentMoveIndex, setCurrentMoveIndex] = useState({
    index: 0,
    scramble: ''
  });

  const [scrambleState, setScrambleState] = useState('');

  useEffect(() => {
    const executeNextMove = () => {
      if (currentMoveIndex.scramble) {
        const moves = currentMoveIndex.scramble.trim().split(' ');

        if (currentMoveIndex.index < moves.length) {
          const move = moves[currentMoveIndex.index];

          if (move in moveMap) {
            moveMap[move]();
          } else {
            throw new Error(`Invalid move: ${move}`);
          }

          setCurrentMoveIndex({
            ...currentMoveIndex,
            index: currentMoveIndex.index + 1
          });
        }
      }
    };

    executeNextMove();
  }, [currentMoveIndex]);

  const move = (scramble: string): void => {
    setCurrentMoveIndex({ index: 0, scramble: scramble });
  };

  const rotateFrontClockwise = (): void => {
    const { F, L, U, R, D } = state;

    // Rotate front face
    setState(prevState => ({
      ...prevState,
      F: rotateClockwise(F)
    }));

    // Update adjacent faces
    const tempEdge = U[2];
    U[2] = R[2];
    R[2] = D[2];
    D[2] = L[2];
    L[2] = tempEdge;

    const tempCorner = U[2][2];
    U[2][2] = R[2][2];
    R[2][2] = D[2][2];
    D[2][2] = L[2][2];
    L[2][2] = tempCorner;
  };

  const rotateFrontCounterClockwise = (): void => {
    const { F, L, U, R, D } = state;

    // Rotate front face counter-clockwise (equivalent to three clockwise rotations)
    setState(prevState => ({
      ...prevState,
      F: rotateClockwise(rotateClockwise(rotateClockwise(F)))
    }));

    // Update adjacent faces
    const tempEdge = U[2];
    U[2] = L[2];
    L[2] = D[2];
    D[2] = R[2];
    R[2] = tempEdge;

    const tempCorner = U[2][2];
    U[2][2] = L[2][2];
    L[2][2] = D[2][2];
    D[2][2] = R[2][2];
    R[2][2] = tempCorner;
  };

  const rotateBackClockwise = (): void => {
    const { B, L, U, R, D } = state;

    // Rotate back face
    setState(prevState => ({
      ...prevState,
      B: rotateClockwise(B)
    }));

    // Update adjacent faces
    const tempEdge = U[0];
    U[0] = L[0];
    L[0] = D[0];
    D[0] = R[0];
    R[0] = tempEdge;

    const tempCorner = U[0][0];
    U[0][0] = L[0][0];
    L[0][0] = D[0][0];
    D[0][0] = R[0][0];
    R[0][0] = tempCorner;
  };

  const rotateBackCounterClockwise = (): void => {
    const { B, L, U, R, D } = state;

    // Rotate back face counter-clockwise (equivalent to three clockwise rotations)
    setState(prevState => ({
      ...prevState,
      B: rotateClockwise(rotateClockwise(rotateClockwise(B)))
    }));

    // Update adjacent faces
    const tempEdge = U[0];
    U[0] = R[0];
    R[0] = D[0];
    D[0] = L[0];
    L[0] = tempEdge;

    const tempCorner = U[0][0];
    U[0][0] = R[0][0];
    R[0][0] = D[0][0];
    D[0][0] = L[0][0];
    L[0][0] = tempCorner;
  };

  const rotateLeftClockwise = (): void => {
    const { F, B, L, U, D } = state;

    // Rotate left face
    setState(prevState => ({
      ...prevState,
      L: rotateClockwise(L)
    }));

    // Update adjacent faces
    const tempEdge = U.map(row => row[0]);
    U.forEach((row, index) => (row[0] = B[2 - index][2]));
    B.forEach((row, index) => (row[2] = D[2 - index][0]));
    D.forEach((row, index) => (row[0] = F[index][0]));
    F.forEach((row, index) => (row[0] = tempEdge[index]));

    const tempCorner = U[0][0];
    U[0][0] = B[2][2];
    B[2][2] = D[2][0];
    D[2][0] = F[0][0];
    F[0][0] = tempCorner;
  };

  const rotateLeftCounterClockwise = (): void => {
    const { F, B, L, U, D } = state;

    // Rotate left face counter-clockwise (equivalent to three clockwise rotations)
    setState(prevState => ({
      ...prevState,
      L: rotateClockwise(rotateClockwise(rotateClockwise(L)))
    }));

    // Update adjacent faces
    const tempEdge = U.map(row => row[0]);
    U.forEach((row, index) => (row[0] = F[index][0]));
    F.forEach((row, index) => (row[0] = D[index][0]));
    D.forEach((row, index) => (row[0] = B[2 - index][2]));
    B.forEach((row, index) => (row[2] = tempEdge[2 - index]));

    const tempCorner = U[0][0];
    U[0][0] = F[0][0];
    F[0][0] = D[0][0];
    D[0][0] = B[2][2];
    B[2][2] = tempCorner;
  };

  const rotateRightClockwise = (): void => {
    const { F, B, R, U, D } = state;

    // Rotate right face
    setState(prevState => ({
      ...prevState,
      R: rotateClockwise(R)
    }));

    // Update adjacent faces
    const tempEdge = U.map(row => row[2]);
    U.forEach((row, index) => (row[2] = F[index][2]));
    F.forEach((row, index) => (row[2] = D[index][2]));
    D.forEach((row, index) => (row[2] = B[2 - index][0]));
    B.forEach((row, index) => (row[0] = tempEdge[2 - index]));

    const tempCorner = U[0][2];
    U[0][2] = F[0][2];
    F[0][2] = D[0][2];
    D[0][2] = B[2][0];
    B[2][0] = tempCorner;
  };

  const rotateRightCounterClockwise = (): void => {
    const { F, B, R, U, D } = state;

    // Rotate right face counter-clockwise (equivalent to three clockwise rotations)
    setState(prevState => ({
      ...prevState,
      R: rotateClockwise(rotateClockwise(rotateClockwise(R)))
    }));

    // Update adjacent faces
    const tempEdge = U.map(row => row[2]);
    U.forEach((row, index) => (row[2] = B[2 - index][0]));
    B.forEach((row, index) => (row[0] = D[2 - index][2]));
    D.forEach((row, index) => (row[2] = F[index][2]));
    F.forEach((row, index) => (row[2] = tempEdge[index]));

    const tempCorner = U[0][2];
    U[0][2] = B[2][0];
    B[2][0] = D[2][2];
    D[2][2] = F[0][2];
    F[0][2] = tempCorner;
  };

  const rotateUpClockwise = (): void => {
    const { F, B, L, R, U } = state;

    // Rotate up face
    setState(prevState => ({
      ...prevState,
      U: rotateClockwise(U)
    }));

    // Update adjacent faces
    const tempEdge = F[0].slice();
    F[0] = R[0].slice();
    R[0] = B[0].slice();
    B[0] = L[0].slice();
    L[0] = tempEdge;

    const tempCorner = F[0][0];
    F[0][0] = R[0][0];
    R[0][0] = B[0][0];
    B[0][0] = L[0][0];
    L[0][0] = tempCorner;
  };

  const rotateUpCounterClockwise = (): void => {
    const { F, B, L, R, U } = state;

    // Rotate up face counter-clockwise (equivalent to three clockwise rotations)
    setState(prevState => ({
      ...prevState,
      U: rotateClockwise(rotateClockwise(rotateClockwise(U)))
    }));

    // Update adjacent faces
    const tempEdge = F[0].slice();
    F[0] = L[0].slice();
    L[0] = B[0].slice();
    B[0] = R[0].slice();
    R[0] = tempEdge;

    const tempCorner = F[0][0];
    F[0][0] = L[0][0];
    L[0][0] = B[0][0];
    B[0][0] = R[0][0];
    R[0][0] = tempCorner;
  };

  const rotateDownClockwise = (): void => {
    const { F, B, L, R, D } = state;

    // Rotate down face
    setState(prevState => ({
      ...prevState,
      D: rotateClockwise(D)
    }));

    // Update adjacent faces
    const tempEdge = F[2].slice();
    F[2] = L[2].slice();
    L[2] = B[2].slice();
    B[2] = R[2].slice();
    R[2] = tempEdge;

    const tempCorner = F[2][0];
    F[2][0] = L[2][0];
    L[2][0] = B[2][0];
    B[2][0] = R[2][0];
    R[2][0] = tempCorner;
  };

  const rotateDownCounterClockwise = (): void => {
    const { F, B, L, R, D } = state;

    // Rotate down face counter-clockwise (equivalent to three clockwise rotations)
    setState(prevState => ({
      ...prevState,
      D: rotateClockwise(rotateClockwise(rotateClockwise(D)))
    }));

    // Update adjacent faces
    const tempEdge = F[2].slice();
    F[2] = R[2].slice();
    R[2] = B[2].slice();
    B[2] = L[2].slice();
    L[2] = tempEdge;

    const tempCorner = F[2][0];
    F[2][0] = R[2][0];
    R[2][0] = B[2][0];
    B[2][0] = L[2][0];
    L[2][0] = tempCorner;
  };

  const rotateClockwise = (arr: ColorType[][]): ColorType[][] => {
    const rotated: ColorType[][] = [];
    const size = arr.length;

    for (let i = 0; i < size; i++) {
      rotated.push([]);
      for (let j = 0; j < size; j++) {
        rotated[i][j] = arr[size - j - 1][i];
      }
    }

    return rotated;
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

    return scramble.join(' ');
  };

  const createScramble = () => {
    setState(initialCubeState);
    setTimeout(() => {
      const scramble = generateScramble();
      move(scramble);
      setScrambleState(scramble);
    }, 1000);
  };

  const resetCube = (): void => {
    setState(initialCubeState);
  };

  useEffect(() => {
    resetCube();
  }, []);

  return { state, createScramble, resetCube, scrambleState, initialCubeState };
};

export default useCubeLogicHooks;
