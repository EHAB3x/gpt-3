import React from 'react';
import './footer.css';
import gptLogo from '../../assets/GPT-3.svg';
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gptLogo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        {/* 
          You can make a great design here as below
        */}
        {[
          {
            title: 'Links',
            links: ['Overons', 'Social Media', 'Counters', 'Contact'],
          },
          {
            title: 'Company',
            links: ['Terms & Conditions', 'Privacy Policy', 'Contact'],
          },
          // Here we destruct the content directly instead of using item.title, ...etc
        ].map(({ title, links }, i) => (
          <div className="gpt3__footer-links_div" key={i}>
            <h4>{title}</h4>
            {links.map((item, x) => (
              <p key={`${title}-link-${x}`}>{item}</p>
            ))}
          </div>
        ))}

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Overons</p>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
