import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";
import TokenDetails from "./tokenDetails";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import week1 from "../../assets/images/tokens/week-1-2.png";
import week2 from "../../assets/images/tokens/week-2-3.png";
import week3 from "../../assets/images/tokens/week-3-1.png";
import week4 from "../../assets/images/tokens/week-4-1.png";
import week5 from "../../assets/images/tokens/week-5.png";
import BuyImg from "../../assets/images/tokens/buy.png";
import SwapImg from "../../assets/images/tokens/swap.png";
import JazzImg from "../../assets/images/tokens/jazz-holders.png";
import { useWeb3React } from '@web3-react/core'
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import useEagerConnect from "hooks/useEagerConnect";
import { updateSaleStatus3 } from 'redux/actions/salestatus/thunkStatus'
import { resetSaleStatus } from 'redux/actions/salestatus'
import { formatNumber, getDecimalAmount } from 'utility/formatBalance'
import {useBuyPreSale, useSwapPreSale, useAirdropPreSale} from 'hooks/usePresale';
import {useApproveJazz} from 'hooks/useApprove';

const Tokens = () => {
  const network = useSelector(state => state.network.chainId);
  const saleStatus = useSelector(state => state.saleStatus);
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const [pendingTx, setPendingTx] = useState(false)
  const [, setRequestedBuy] = useState(false)
  const [sendAmount1, setSendAmount1] = useState(0);
  const [getAmount1, setGetAmount1] = useState(0);
  const [sendAmount2, setSendAmount2] = useState(0);
  const [getAmount2, setGetAmount2] = useState(0);
  const [sendAmount3, setSendAmount3] = useState(0);
  const [getAmount3, setGetAmount3] = useState(0);  

  const handleRefreshStatus = useCallback(async (network, account) => {
    const saveNewTodoThunk = updateSaleStatus3(network, account)
    dispatch(saveNewTodoThunk)
    setSendAmount1(0)
    setGetAmount1(0)
    setSendAmount2(0)
    setGetAmount2(0)
    setSendAmount3(0)
    setGetAmount3(0)
  }, [network, account])

  useEffect(() => {
    handleRefreshStatus(network, account);
  }, [network, account]);

  const { onBuy } = useBuyPreSale(network);
  const { onSwap } = useSwapPreSale(network);
  const { onAirdrop } = useAirdropPreSale(network);
  const { onApprove } = useApproveJazz(network);
  
  const buyAction = async () => {
    if (saleStatus.live&&!pendingTx) {
      setPendingTx(true)
      await handleBuy()
      setPendingTx(false)
    }
    // console.log(sendAmount)
  }
  
  const swapAction = async () => {
    if (saleStatus.live&&!pendingTx) {
      setPendingTx(true)
      await handleSwap()
      setPendingTx(false)
    }
  }
  const approveAction = async () => {
    // Do some action
      setPendingTx(true)
      await handleApprove()
      setPendingTx(false)
  }
  const airdropAction = async () => {
    if (saleStatus.live&&!pendingTx) {
      setPendingTx(true)
      await handleAirdrop()
      setPendingTx(false)
    }
  }  
  
  const handleBuy = useCallback(async () => {
    try {
      setRequestedBuy(true)
      const txHash = await onBuy(getDecimalAmount(sendAmount1))
      // user rejected tx or didn't go thru
      console.log(txHash)
      if (txHash) {
        setRequestedBuy(false)
        handleRefreshStatus(network, account);
        setSendAmount1(0)
        setGetAmount1(0)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onBuy, setRequestedBuy, sendAmount1])

  const handleSwap = useCallback(async () => {
    try {
      setRequestedBuy(true)
      const txHash = await onSwap(getDecimalAmount(sendAmount2))
      // user rejected tx or didn't go thru
      console.log(txHash)
      if (txHash) {
        setRequestedBuy(false)
        handleRefreshStatus(network, account);
        setSendAmount2(0)
        setGetAmount2(0)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onSwap, setRequestedBuy, sendAmount2])

  const handleAirdrop = useCallback(async () => {
    try {
      setRequestedBuy(true)
      const txHash = await onAirdrop(getDecimalAmount(sendAmount3))
      // user rejected tx or didn't go thru
      console.log(txHash)
      if (txHash) {
        setRequestedBuy(false)
        handleRefreshStatus(network, account);
        setSendAmount2(0)
        setGetAmount2(0)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onAirdrop, setRequestedBuy, sendAmount3])
  
  const handleApprove = useCallback(async () => {
    try {
      setRequestedBuy(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      console.log(txHash)
      if (txHash) {
        setRequestedBuy(false)
        handleRefreshStatus(network, account);
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedBuy])
  
  const changeSendAmount1 = (e) => {
    if (document.activeElement === e.target) {
      var set_amount = e.target.value;
      if (set_amount < 0) set_amount = 0;
      var get_amount = Math.floor(set_amount * saleStatus.price1 * 1000) / 1000;
      setGetAmount1(get_amount);
      setSendAmount1(set_amount);
    }
  }

  const changeGetAmount1 = (e) => {
    if (document.activeElement === e.target) {
      var get_amount = e.target.value;
      if (get_amount < 0) get_amount = 0;
      var set_amount = Math.floor(get_amount / saleStatus.price1 * 1000) / 1000;
      setGetAmount1(get_amount);
      setSendAmount1(set_amount);
    }
  }

  const changeSendAmount2 = (e) => {
    if (document.activeElement === e.target) {
      var set_amount = e.target.value;
      if (set_amount < 0) set_amount = 0;
      var get_amount = Math.floor(set_amount * saleStatus.price2 * 1000) / 1000;
      setGetAmount2(get_amount);
      setSendAmount2(set_amount);
    }
  }

  const changeGetAmount2 = (e) => {
    if (document.activeElement === e.target) {
      var get_amount = e.target.value;
      if (get_amount < 0) get_amount = 0;
      var set_amount = Math.floor(get_amount / saleStatus.price2 * 1000) / 1000;
      setGetAmount2(get_amount);
      setSendAmount2(set_amount);
    }
  }
  
  const changeSendAmount3 = (e) => {
    if (document.activeElement === e.target) {
      var set_amount = e.target.value;
      if (set_amount < 0) set_amount = 0;
      var get_amount = Math.floor(set_amount * saleStatus.price3 * 1000) / 1000;
      setGetAmount3(get_amount);
      setSendAmount3(set_amount);
    }
  }

  const changeGetAmount3 = (e) => {
    if (document.activeElement === e.target) {
      var get_amount = e.target.value;
      if (get_amount < 0) get_amount = 0;
      var set_amount = Math.floor(get_amount / saleStatus.price3 * 1000) / 1000;
      setGetAmount3(get_amount);
      setSendAmount3(set_amount);
    }
  }
  let contents = (
    <Row>
      <Col lg={12} md={12} sm={12} className="col-xs-12">
        <div className="section-heading2">
          <h4 className="elementor-heading-title elementor-size-default">
            ICO LAUNCH
          </h4>
        </div>
      </Col>
      <Col lg={12} md={12} sm={12} className="col-xs-12 mr-b30">
        <div className="weeks">
          <img src={week1} className="weeks-image" />
          <h2 className="elementor-heading-title">
            Price: $2.00
          </h2>
        </div>
        <div className="weeks">
          <img src={week2} className="weeks-image" />
          <h2 className="elementor-heading-title">
            Price: $2.25
          </h2>
        </div>
        <div className="weeks">
          <img src={week3} className="weeks-image" />
          <h2 className="elementor-heading-title">
            Price: $2.50
          </h2>
        </div>
        <div className="weeks">
          <img src={week4} className="weeks-image" />
          <h2 className="elementor-heading-title">
            Price: $3.00
          </h2>
        </div>
        <div className="weeks">
          <img src={week5} className="weeks-image" />
          <h2 className="elementor-heading-title">
            Public Sale
          </h2>
        </div>
      </Col>
      {network == '137' ? (
        <Col lg={12} md={12} sm={12} className="col-xs-12 pd-l20 pd-r20 ">
          <Row>
            <Col lg={6} md={6} sm={6} className="col-xs-12 jazzholders-tab mr-t20">
              <img src={BuyImg} />
              <div className="progressbar-container mr-t20">
                <div className="progressbar-complete" style={{ width: `${formatNumber(saleStatus.sold1, 2, 2)}%` }}>
                  <div className="progressbar-liquid"></div>
                </div>
                <span className="progress-percent">{formatNumber(saleStatus.sold1, 2, 2)}% Sold</span>
              </div>
              <div>Sale Amount: {formatNumber(saleStatus.totalSupply1, 2, 2)} RCK</div>
              <div className="mr-t30 mr-b20 buy-inputs">
                <div>
                  <div>Balance: {formatNumber(saleStatus.bnbBalance, 4, 4)} MATIC</div>
                  <input value={sendAmount1} onChange={(e) => { changeSendAmount1(e) }} type="number" placeholder="MATIC" style={{textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} /></div>
                <div>
                  <div>Balance: {formatNumber(saleStatus.prsBalance, 4, 4)} RCK</div>
                  <input value={getAmount1} onChange={(e) => { changeGetAmount1(e) }} type="number" placeholder="RCK" style={{textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} /></div>
              </div>
              <div className="buy-btns">
                <Button variant="contained" className="buy_btn" onClick={() => { buyAction() }}>Buy</Button>
              </div>
            </Col>
          </Row>
        </Col>
      ) : (
        <Col lg={12} md={12} sm={12} className="col-xs-12 pd-l20 pd-r20 ">
          <Row>
            <Col lg={6} md={6} sm={6} className="col-xs-12 mr-t20 text-center">
              <img src={BuyImg} />
              <div className="progressbar-container mr-t20">
                <div className="progressbar-complete" style={{ width: `${formatNumber(saleStatus.sold1, 2, 2)}%` }}>
                  <div className="progressbar-liquid"></div>
                </div>
                <span className="progress-percent">{formatNumber(saleStatus.sold1, 2, 2)}% Sold</span>
              </div>
              <div>Sale Amount: {formatNumber(saleStatus.totalSupply1, 2, 2)} RCK</div>
              <div className="mr-t30 mr-b20 buy-inputs">
                <div>
                  <div>Balance: {formatNumber(saleStatus.bnbBalance, 4, 4)} BNB</div>
                  <input value={sendAmount1} onChange={(e) => { changeSendAmount1(e) }} type="number" placeholder="BNB" style={{ textAlign: 'right', align: 'right', width: 250, marginRight: 30, marginTop: 10 }} />
                </div>
                <div>
                  <div>Balance: {formatNumber(saleStatus.prsBalance, 4, 4)} RCK</div>
                  <input value={getAmount1} onChange={(e) => { changeGetAmount1(e) }} type="number" placeholder="RCK" style={{ textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} />
                </div>
              </div>
              <div className="buy-btns">
                <Button variant="contained" className="buy_btn" onClick={() => { buyAction() }}>Buy</Button>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} className="col-xs-12 buy-tab mr-t20 text-center">
              <img src={SwapImg} />
              <div className="progressbar-container mr-t20">
                <div className="progressbar-complete" style={{ width: `${formatNumber(saleStatus.sold2, 2, 2)}%` }}>
                  <div className="progressbar-liquid"></div>
                </div>
                <span className="progress-percent">{formatNumber(saleStatus.sold2, 2, 2)}% Swapped</span>
              </div>
              <div>Swap Amount: {formatNumber(saleStatus.totalSupply2, 2, 2)} RCK</div>
              <div className="mr-t30 mr-b20 buy-inputs">
                <div>
                  <div>Balance: {formatNumber(saleStatus.jazzBalance, 4, 4)} JAZZ</div>
                  <input value={sendAmount2} onChange={(e) => { changeSendAmount2(e) }} type="number" placeholder="JAZZ" style={{ textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} />
                </div>
                <div>
                  <div>Balance: {formatNumber(saleStatus.prsBalance, 4, 4)} RCK</div>
                  <input value={getAmount2} onChange={(e) => { changeGetAmount2(e) }} type="number" placeholder="RCK" style={{ textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} />
                </div>
              </div>
              <div className="buy-btns">

                <Button variant="contained" className="buy_btn swap_btn" onClick={() => { swapAction() }}>Swap</Button>
                <Button  variant="contained" className="buy_btn approve_btn"  onClick={() => { approveAction() }}>Approve</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg='6' md='6' sm='6' className="col-xs-12 jazzholders-tab mr-t20 text-center">
              <img src={JazzImg} />
              <div className="progressbar-container mr-t20">
                <div className="progressbar-complete" style={{ width: `${formatNumber(saleStatus.sold3, 2, 2)}%` }}>
                  <div className="progressbar-liquid"></div>
                </div>
                <span className="progress-percent">{formatNumber(saleStatus.sold3, 2, 2)}% Sold</span>
              </div>
              <div>Sale Amount: {formatNumber(saleStatus.totalSupply3, 4, 4)} RCK</div>
              <div className="mr-t30 mr-b20 buy-inputs">
                <div>
                  <div>Balance: {formatNumber(saleStatus.bnbBalance, 4, 4)} BNB</div>
                  <input value={sendAmount3} onChange={(e) => { changeSendAmount3(e) }} type="number" placeholder="BNB" style={{ textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} />
                </div>
                <div>
                  <div>Balance: {formatNumber(saleStatus.prsBalance, 4, 4)} RCK</div>
                  <input value={getAmount3} onChange={(e) => { changeGetAmount3(e) }}  type="number" placeholder="RCK" style={{ textAlign: 'right', width: 250, marginRight: 30, marginTop: 10 }} />
                </div>
              </div>
              <div className="buy-btns">
                <Button variant="contained" className="buy_btn swap_btn jazz_btn" onClick={() => { airdropAction() }}>Buy</Button>
              </div>
            </Col>
          </Row>
        </Col>
      )
      }

    </Row>
  );

  return (
    <div id="tokens" className="wd_scroll">
      <section className="tokens-area section">
        <div
          className="elementor-shape elementor-shape-top"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 19.6"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              style={{ opacity: 0.33 }}
              d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
            ></path>
            <path
              className="elementor-shape-fill"
              style={{ opacity: 0.33 }}
              d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
            ></path>
            <path
              className="elementor-shape-fill"
              style={{ opacity: 0.33 }}
              d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
            ></path>
            <path
              className="elementor-shape-fill"
              d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
            ></path>
          </svg>
        </div>

        {contents}
      </section>
    </div>
  );
}


const mapStateToProps = (state) => ({
  network: state.network.chainId,
});



export default connect(mapStateToProps, null)(Tokens);

