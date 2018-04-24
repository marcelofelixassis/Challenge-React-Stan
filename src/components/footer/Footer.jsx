import React, { Component } from 'react';

import FacebookImg from '../../assets/social/facebook-white.svg';
import TwitterImg from '../../assets/social/twitter-white.svg';
import InstagramImg from '../../assets/social/instagram-white.svg';

import AppleImg from '../../assets/store/app-store.svg';
import AndroidImg from '../../assets/store/play-store.svg';
import WindowsImg from '../../assets/store/windows-store.svg'


class Footer extends Component {
  render() {
    return (
      <footer className="grid" id="content__footer">
        <div className="content__grid">
          <div>
            <a href="" className="footer__links">Home</a>
            <a href="" className="footer__links">|  Terms and Conditions</a>
            <a href="" className="footer__links">|  Privacy Policy</a>
            <a href="" className="footer__links">|  Collection Statement</a>
            <a href="" className="footer__links">|  Help</a>
            <a href="" className="footer__links">|  Manage Account</a>
          </div>
          <div id="footer__copyright">
            Copyright © DEMO Streaming. All Rights Reserved. 
          </div>
          <div id="footer__social">
            <a href="" className="social"><img src={FacebookImg} width="35px" height="35px" alt=""/></a>
            <a href="" className="social"><img src={TwitterImg} width="35px" height="35px" alt=""/></a>
            <a href="" className="social"><img src={InstagramImg} width="35px" height="35px" alt=""/></a>
          </div>
          <div id="footer_platforms">
            <a href="" className="social"><img src={AppleImg} width="150px" height="50px" alt=""/></a>
            <a href="" className="social"><img src={AndroidImg} width="150px" height="50px" alt=""/></a>
            <a href="" className="social"><img src={WindowsImg} width="150px" height="50px" alt=""/></a>
          </div>
        </div>
      </footer> 
    );
  }
}

export default Footer;
