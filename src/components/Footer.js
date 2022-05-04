import React from 'react'
import Twitter from "../img/Twitter.svg";
import Facebook from "../img/Facebook.svg";
import Instagram from "../img/Instagram.svg";
import Github from "../img/GitHub.svg";
export default function Footer() {
  return (
    <div className='container__footer'>
      <div className="icon__footer">
      <img src={Twitter} alt="" />
      <img src={Facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={Github} alt="" />
      </div>
    </div>
  )
}
