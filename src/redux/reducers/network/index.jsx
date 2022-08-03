const INITIAL_STATE = {
  chainId: 56,
};
const network = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SWITCH": {
      return {
        chainId: parseInt(action.chainId),
      };
    }
    default:
      return state;
  }
};

export default network;
