import "../css/home.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { coinGet, coinAdd } from "../actions/coinActions";
import { logoutAction } from "../actions/userActions";

const Home = () => {
  const { userInfo } = useSelector((state) => state.info);
  const { coinData } = useSelector((state) => state.coin);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };
  const handleLead = () => {
    const gross = coinData ? coinData.grossCoins : 0;
    const net = coinData ? coinData.netCoins : 0;
    const newcoin = {
      grossCoins: gross + net + 100,
      netCoins: net + 100,
      username: JSON.parse(localStorage.getItem("userInfo")).username,
    };
    dispatch(coinAdd(newcoin));
  };
  useEffect(() => {
    if (!userInfo) {
      history("/");
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(coinGet());
  }, []);
  return (
    <div className="main">
      <div className="denaurlen">DENAURLEN</div>
      <div className="logout_btn"></div>

      <button className="logout" onClick={handleLogout}>
        Logout
      </button>

      <div className="profilepic"></div>
      <div className="name">{userInfo.username}</div>
      <div className="date_time">6 June 2021, 12:10 pm</div>
      <div className="gross_coin">Gross Coins</div>
      <div className="bid_gross_coin"></div>
      <div className="gross_value">{coinData ? coinData.grossCoins : 0}</div>
      <img src="./images/arrow.png" className="arrow1" />
      <img src="./images/arrow.png" className="arrow2" />
      <img src="./images/dot.png" class="dot" />
      <div className="post">
        <img src="./images/post.png" alt="" />
      </div>
      <div className="like">
        <img src="./images/like.png" alt="" />
      </div>
      <div className="comment">
        <img src="./images/comment.png" alt="" />
      </div>
      <div className="share">
        <img src="./images/share.png" alt="" />
      </div>
      <div className="lead"></div>
      <button className="lead_100" onClick={handleLead}>
        LEAD+100
      </button>
      <div className="interested">50 interested</div>
      <div className="bidder"></div>
      <div className="bid_coin"></div>
      <div className="net_value">{coinData ? coinData.netCoins : 0}</div>
      <div className="bidder_name">
        {coinData ? coinData.username : "NoBidders"}
      </div>
      <div className="in_lead"> in Lead</div>
      <div className="user">@alferdo r..</div>
      <div className="caption_1">If everything seems under control, you're</div>
      <div className="caption_2">
        going fast enough. Be Fast, Be Curious..! 😎
      </div>
    </div>
  );
};

export default Home;
