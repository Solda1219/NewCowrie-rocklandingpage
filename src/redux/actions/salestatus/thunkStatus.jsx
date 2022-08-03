import {fetchFullSaleStatus} from 'utility/tokenBalance'
import {getBalanceNumber} from 'utility/formatBalance'

const getPrice = (phase, chainId) =>{
    const priceBnb =330;
    if(chainId == '56'){
      switch(phase){
        case 0:
        case 1:
          return 157.5;
        case 2:
          return 140;
        case 3:
          return 126;
        case 4:
          return 105;
          default:
            return 157.5;
      }
      
    }else{
      switch(phase){
        case 0:
        case 1:
          return 0.5;
        case 2:
          return 0.44444;
        case 3:
          return 0.4;
        case 4:
          return 0.33333;
        default:
          return 0.5;
      }
    }  
}

export const updateSaleStatus3=(chainId, account) => {
    return  async (dispatch, getState) => 
    {
      let temp = await fetchFullSaleStatus(chainId,account);

      let sold1 = getBalanceNumber(temp.sale[0]) - getBalanceNumber(temp.sale[1]);
      sold1 = getBalanceNumber(temp.sale[0])>0 ? sold1/getBalanceNumber(temp.sale[0])*100:0;
      let sold2 = getBalanceNumber(temp.sale[2]) - getBalanceNumber(temp.sale[3]);
      sold2 = getBalanceNumber(temp.sale[2])>0 ?  sold2/getBalanceNumber(temp.sale[2])*100:0;
      let sold3 = getBalanceNumber(temp.sale[4]) - getBalanceNumber(temp.sale[5]);
      sold3 = getBalanceNumber(temp.sale[4])>0 ?  sold3/getBalanceNumber(temp.sale[4])*100:0;
      
      
      const result ={
        price1: getPrice(temp.sale[7], chainId),
        price2: 0.166666,
        price3: 630,
        bnbBalance: getBalanceNumber(temp.base),
        prsBalance: getBalanceNumber(temp.curSale[0]),
        jazzBalance: getBalanceNumber(temp.tokens[0]),
        rckBalance: 0,
        totalSupply1: getBalanceNumber(temp.sale[0]),
        remainSupply1: getBalanceNumber(temp.sale[1]),
        totalSupply2: getBalanceNumber(temp.sale[2]),
        remainSupply2: getBalanceNumber(temp.sale[3]),
        totalSupply3: getBalanceNumber(temp.sale[4]),
        remainSupply3: getBalanceNumber(temp.sale[5]),
        sold1:sold1,
        sold2:sold2,
        sold3:sold3,
        live:temp.sale[6],
        currentPhase:temp.sale[7],
        claimReady:temp.sale[8]
      }
      console.log(result)
      dispatch({ type: 'UPDATE_SALE_STATUS', newStatus: result })
    }
}

