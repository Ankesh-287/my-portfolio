import React from 'react'
import '../style/Contact.css'
import { IoCallOutline, IoLocationOutline, } from "react-icons/io5";
import { MdOutlineMail, } from "react-icons/md";
import { BsWhatsapp, } from "react-icons/bs";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";

import Heading from '../components/Heading'

function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className="box1"></div>
        <Heading title="Contact Me" id='contact-style' />
        <div className="contact-page">
          <div id="details">
            <MdOutlineMail className='icons' />
            <p className="detail-text">
              <a href="mailto:ankeshpatil287@gmail.com">ankeshpatil287@gmail.com</a>
            </p>
          </div>
          <div id="details">
            <IoCallOutline className='icons' />
            <p className="detail-text">
              <a href="tell:+919978432611">9978432611</a>
            </p>
          </div>
          <div id="details">
            <IoLocationOutline className='icons' />
            <p className="detail-text">
              <a href="https://maps.app.goo.gl/ZwxqHs9WdWEuQZPV8">Amroli, Surat, Gujarat</a>
            </p>
          </div>
        </div>
        <div className="contact2">
          <div className="icon-box">
            <BsWhatsapp className='icons' />
            <FaLinkedinIn className='icons' />
            <SlSocialInstagram className='icons' />
            <FaFacebook className='icons' />
            <div className="box2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
