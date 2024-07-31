import React from 'react'
import '../style/Contact.css'
import { IoCallOutline, IoLocationOutline, } from "react-icons/io5";
import { MdOutlineMail, } from "react-icons/md";
import { BsWhatsapp, } from "react-icons/bs";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

import Heading from '../components/Heading'

function Contact() {
  return (
    <>
      <div className="contact-section">
        <Heading id='contact-style' title="Contact Me"  />
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
            <a href="https://wa.me/+919978432611">
              <BsWhatsapp className='icons w' />
            </a>
            <a href="https://www.linkedin.com/in/ankesh-patil-a093bb184/">
              <FaLinkedinIn className='icons l' />
            </a>
            <a href="https://github.com/Ankesh-287">
              <SiGithub className='icons g' />
            </a>
            <a href="https://www.instagram.com/_ankesh_patil/">
              <SlSocialInstagram className='icons i' />
            </a>
            <a href="https://www.facebook.com/ankesh.patil.9212/?_rdr">
              <FaFacebook className='icons f' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
