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

        // Perform the move
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
      case 'B2':
        const resultB180 = rotateBackClockwise180(state);
        setState(resultB180);
        break;
      case 'R':
        const resultR = rotateRightClockwise(state);
        setState(resultR);
        break;
      case "R'":
        const resultRCounter = rotateRightCounterClockwise(state);
        setState(resultRCounter);
        break;
      case 'R2':
        const resultR180 = rotateRightClockwise180(state);
        setState(resultR180);
        break;
      case 'L':
        const resultL = rotateLeftClockwise(state);
        setState(resultL);
        break;
      case "L'":
        const resultLCounter = rotateLeftCounterClockwise(state);
        setState(resultLCounter);
        break;
      case 'L2':
        const resultL180 = rotateLeftClockwise180(state);
        setState(resultL180);
        break;
      case 'D':
        const resultD = rotateDownClockwise(state);
        setState(resultD);
        break;
      case "D'":
        const resultDCounter = rotateDownCounterClockwise(state);
        setState(resultDCounter);
        break;
      case 'D2':
        const resultD180 = rotateDownClockwise180(state);
        setState(resultD180);
        break;
      case 'U':
        const resultU = rotateUpClockwise(state);
        setState(resultU);
        break;
      case "U'":
        const retultUCounter = rotateUpCounterClockwise(state);
        setState(retultUCounter);
        break;
      case 'U2':
        const resultU180 = rotateUClockwise180(state);
        setState(resultU180);
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
    const { L, U, R, D, F } = currentState;

    const updateF = F.map((row, index) => {
      if (index === 0) {
        return [F[2][0], F[1][0], F[0][0]];
      } else if (index === 1) {
        return [F[2][1], F[1][1], F[0][1]];
      } else {
        return [F[2][2], F[1][2], F[0][2]];
      }
    });

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
        return [L[2][2], L[1][2], L[0][2]];
      } else {
        return row;
      }
    });

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
      F: updateF,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const rotateFrontCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { L, U, R, D, F } = currentState;

    const updateF = F.map((row, index) => {
      if (index === 0) {
        return [F[0][2], F[1][2], F[2][2]];
      } else if (index === 1) {
        return [F[0][1], F[1][1], F[2][1]];
      } else {
        return [F[0][0], F[1][0], F[2][0]];
      }
    });

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
      F: updateF,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const rotateFront180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    // Rotate the first time
    const firstRotation = rotateFrontClockwise(currentState);

    // Rotate the result of the first rotation again
    const secondRotation = rotateFrontClockwise(firstRotation);

    return secondRotation;
  };

  const rotateBackClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { L, U, R, D, B } = currentState;

    // Rotate front face counter-clockwise (equivalent to one clockwise rotation)

    const updateB = B.map((row, index) => {
      if (index === 0) {
        return [B[2][0], B[1][0], B[0][0]];
      } else if (index === 1) {
        return [B[2][1], B[1][1], B[0][1]];
      } else {
        return [B[2][2], B[1][2], B[0][2]];
      }
    });

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
        return [L[0][0], L[1][0], L[2][0]];
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
      B: updateB
    };
  };

  const rotateBackCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { B, L, U, R, D } = currentState;

    const updateB = B.map((row, index) => {
      if (index === 0) {
        return [B[0][2], B[1][2], B[2][2]];
      } else if (index === 1) {
        return [B[0][1], B[1][1], B[2][1]];
      } else {
        return [B[0][0], B[1][0], B[2][0]];
      }
    });

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
      B: updateB,
      L: updatedL,
      U: updatedU,
      R: updatedR,
      D: updatedD
    };
  };

  const rotateBackClockwise180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    // Rotate the first time
    const firstRotation = rotateBackClockwise(currentState);

    // Rotate the result of the first rotation again
    const secondRotation = rotateBackClockwise(firstRotation);

    return secondRotation;
  };

  const rotateRightClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, R, B, U, D } = currentState;

    const UpdateR = R.map((row, index) => {
      if (index === 0) {
        return [R[2][0], R[1][0], R[0][0]];
      } else if (index === 1) {
        return [R[2][1], R[1][1], R[0][1]];
      } else {
        return [R[2][2], R[1][2], R[0][2]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], F[0][2]];
      } else if (index === 1) {
        return [row[0], row[1], F[1][2]];
      } else {
        return [row[0], row[1], F[2][2]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], D[0][2]];
      } else if (index === 1) {
        return [row[0], row[1], D[1][2]];
      } else {
        return [row[0], row[1], D[2][2]];
      }
    });

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], B[2][0]];
      } else if (index === 1) {
        return [row[0], row[1], B[1][0]];
      } else {
        return [row[0], row[1], B[0][0]];
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 0) {
        return [U[2][2], row[1], row[2]];
      } else if (index === 1) {
        return [U[1][2], row[1], row[2]];
      } else {
        return [U[0][2], row[1], row[2]];
      }
    });

    return {
      ...currentState,
      R: UpdateR,
      U: updatedU,
      F: updatedF,
      D: updatedD,
      B: updatedB
    };
  };

  const rotateRightCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, R, B, U, D } = currentState;

    const UpdateR = R.map((row, index) => {
      if (index === 0) {
        return [R[0][2], R[1][2], R[2][2]];
      } else if (index === 1) {
        return [R[0][1], R[1][1], R[2][1]];
      } else {
        return [R[0][0], R[1][0], R[2][0]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], B[2][0]];
      } else if (index === 1) {
        return [row[0], row[1], B[1][0]];
      } else {
        return [row[0], row[1], B[0][0]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], U[0][2]];
      } else if (index === 1) {
        return [row[0], row[1], U[1][2]];
      } else {
        return [row[0], row[1], U[2][2]];
      }
    });

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], F[0][2]];
      } else if (index === 1) {
        return [row[0], row[1], F[1][2]];
      } else {
        return [row[0], row[1], F[2][2]];
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 0) {
        return [D[2][2], row[1], row[2]];
      } else if (index === 1) {
        return [D[1][2], row[1], row[2]];
      } else {
        return [D[0][2], row[1], row[2]];
      }
    });

    return {
      ...currentState,
      R: UpdateR,
      U: updatedU,
      F: updatedF,
      D: updatedD,
      B: updatedB
    };
  };

  const rotateRightClockwise180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    // Rotate the first time
    const firstRotation = rotateRightClockwise(currentState);

    // Rotate the result of the first rotation again
    const secondRotation = rotateRightClockwise(firstRotation);

    return secondRotation;
  };

  const rotateLeftClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, L, B, U, D } = currentState;

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [L[2][0], L[1][0], L[0][0]];
      } else if (index === 1) {
        return [L[2][1], L[1][1], L[0][1]];
      } else {
        return [L[2][2], L[1][2], L[0][2]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [B[2][2], row[1], row[2]];
      } else if (index === 1) {
        return [B[1][2], row[1], row[2]];
      } else {
        return [B[0][2], row[1], row[2]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 0) {
        return [U[index][0], row[1], row[2]];
      } else if (index === 1) {
        return [U[index][0], row[1], row[2]];
      } else {
        return [U[index][0], row[1], row[2]];
      }
    });

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [F[0][0], row[1], row[2]];
      } else if (index === 1) {
        return [F[1][0], row[1], row[2]];
      } else {
        return [F[2][0], row[1], row[2]];
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], D[2][0]];
      } else if (index === 1) {
        return [row[0], row[1], D[1][0]];
      } else {
        return [row[0], row[1], D[0][0]];
      }
    });

    return {
      ...currentState,
      L: updatedL,
      U: updatedU,
      F: updatedF,
      D: updatedD,
      B: updatedB
    };
  };

  const rotateLeftCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, L, B, U, D } = currentState;

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [L[0][2], L[1][2], L[2][2]];
      } else if (index === 1) {
        return [L[0][1], L[1][1], L[2][1]];
      } else {
        return [L[0][0], L[1][0], L[2][0]];
      }
    });

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [F[index][0], row[1], row[2]];
      } else if (index === 1) {
        return [F[index][0], row[1], row[2]];
      } else {
        return [F[index][0], row[1], row[2]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 0) {
        return [D[index][0], row[1], row[2]];
      } else if (index === 1) {
        return [D[index][0], row[1], row[2]];
      } else {
        return [D[index][0], row[1], row[2]];
      }
    });

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [B[2][2], row[1], row[2]];
      } else if (index === 1) {
        return [B[1][2], row[1], row[2]];
      } else {
        return [B[0][2], row[1], row[2]];
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 0) {
        return [row[0], row[1], U[2][0]];
      } else if (index === 1) {
        return [row[0], row[1], U[1][0]];
      } else {
        return [row[0], row[1], U[0][0]];
      }
    });

    return {
      ...currentState,
      L: updatedL,
      U: updatedU,
      F: updatedF,
      D: updatedD,
      B: updatedB
    };
  };

  const rotateLeftClockwise180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    // Rotate the first time
    const firstRotation = rotateLeftClockwise(currentState);

    // Rotate the result of the first rotation again
    const secondRotation = rotateLeftClockwise(firstRotation);

    return secondRotation;
  };

  const rotateDownClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, R, B, L, D } = currentState;

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [D[2][0], D[1][0], D[0][0]];
      } else if (index === 1) {
        return [D[2][1], D[1][1], D[0][1]];
      } else {
        return [D[2][2], D[1][2], D[0][2]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 2) {
        return [L[2][0], L[2][1], L[2][2]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 2) {
        return [F[2][0], F[2][1], F[2][2]];
      } else {
        return row;
      }
    });

    const updatedL = L.map((row, index) => {
      if (index === 2) {
        return [B[2][0], B[2][1], B[2][2]];
      } else {
        return row;
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 2) {
        return [R[2][0], R[2][1], R[2][2]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      D: updatedD,
      R: updatedR,
      F: updatedF,
      L: updatedL,
      B: updatedB
    };
  };

  const rotateDownCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, R, B, L, D } = currentState;

    const updatedD = D.map((row, index) => {
      if (index === 0) {
        return [D[0][2], D[1][2], D[2][2]];
      } else if (index === 1) {
        return [D[0][1], D[1][1], D[2][1]];
      } else {
        return [D[0][0], D[1][0], D[2][0]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 2) {
        return [R[2][0], R[2][1], R[2][2]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 2) {
        return [B[2][0], B[2][1], B[2][2]];
      } else {
        return row;
      }
    });

    const updatedL = L.map((row, index) => {
      if (index === 2) {
        return [F[2][0], F[2][1], F[2][2]];
      } else {
        return row;
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 2) {
        return [L[2][0], L[2][1], L[2][2]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      D: updatedD,
      R: updatedR,
      F: updatedF,
      L: updatedL,
      B: updatedB
    };
  };

  const rotateDownClockwise180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    // Rotate the first time
    const firstRotation = rotateDownClockwise(currentState);

    // Rotate the result of the first rotation again
    const secondRotation = rotateDownClockwise(firstRotation);

    return secondRotation;
  };

  const rotateUpClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, R, B, L, U } = currentState;

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [U[2][0], U[1][0], U[0][0]];
      } else if (index === 1) {
        return [U[2][1], U[1][1], U[0][1]];
      } else {
        return [U[2][2], U[1][2], U[0][2]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 0) {
        return [R[0][0], R[0][1], R[0][2]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 0) {
        return [B[0][0], B[0][1], B[0][2]];
      } else {
        return row;
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 0) {
        return [L[0][0], L[0][1], L[0][2]];
      } else {
        return row;
      }
    });

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [F[0][0], F[0][1], F[0][2]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      U: updatedU,
      F: updatedF,
      R: updatedR,
      B: updatedB,
      L: updatedL
    };
  };

  const rotateUpCounterClockwise = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    const { F, R, B, L, U } = currentState;

    const updatedU = U.map((row, index) => {
      if (index === 0) {
        return [U[0][2], U[1][2], U[2][2]];
      } else if (index === 1) {
        return [U[0][1], U[1][1], U[2][1]];
      } else {
        return [U[0][0], U[1][0], U[2][0]];
      }
    });

    const updatedF = F.map((row, index) => {
      if (index === 0) {
        return [L[0][0], L[0][1], L[0][2]];
      } else {
        return row;
      }
    });

    const updatedR = R.map((row, index) => {
      if (index === 0) {
        return [F[0][0], F[0][1], F[0][2]];
      } else {
        return row;
      }
    });

    const updatedB = B.map((row, index) => {
      if (index === 0) {
        return [R[0][0], R[0][1], R[0][2]];
      } else {
        return row;
      }
    });

    const updatedL = L.map((row, index) => {
      if (index === 0) {
        return [B[0][0], B[0][1], B[0][2]];
      } else {
        return row;
      }
    });

    return {
      ...currentState,
      U: updatedU,
      F: updatedF,
      R: updatedR,
      B: updatedB,
      L: updatedL
    };
  };

  const rotateUClockwise180 = (currentState: {
    [face in FaceType]: ColorType[][];
  }): { [face in FaceType]: ColorType[][] } => {
    // Rotate the first time
    const firstRotation = rotateUpClockwise(currentState);

    // Rotate the result of the first rotation again
    const secondRotation = rotateUpClockwise(firstRotation);

    return secondRotation;
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
      const scramble = generateScramble();
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
