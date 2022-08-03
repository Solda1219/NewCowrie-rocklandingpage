const INITIAL_STATE = {
  price1: 0,
  price2: 0,
  price3: 0,
  bnbBalance: 0,
  prsBalance: 0,
  jazzBalance: 0,
  rckBalance: 0,
  totalSupply1: 0,
  remainSupply1: 0,
  totalSupply2: 0,
  remainSupply2: 0,
  totalSupply3: 0,
  remainSupply3: 0,
  sold1:0,
  sold2:0,
  sold3:0,
  live:false,
  currentPhase:0,
  claimReady:false
};

const saleStatus =  (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_SALE_STATUS": {
      return action.newStatus
    }
    case "RESET_SALE_STATUS": {
      return INITIAL_STATE
    }
    default: return state;
  }
}

export default saleStatus



