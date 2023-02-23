export default function reducer(state, action) {
  switch (action.type) {
    case 'start': {
      return {
        ...state,
        navState: {
          hasInitiated: false,
          hasStarted: true,
          hasCompleted: false,
          hasSubmitted: false,
        },
        gameState: action.payload
      }
    }
    case 'complete': {
      return {
        ...state,
        navState: {
          hasInitiated: false,
          hasStarted: false,
          hasCompleted: true,
          hasSubmitted: false,
        }
      }
    }
    case 'submit': {
      return {
        ...state,
        navState: {
          hasInitiated: false,
          hasStarted: false,
          hasCompleted: false,
          hasSubmitted: true,
        },
        resultState: action.payload
      }
    }
    case 'restart': {
      return {
        ...state,
        navState: {
          hasInitiated: true,
          hasStarted: false,
          hasCompleted: false,
          hasSubmitted: false 
        }  
      }
    }
  }
}