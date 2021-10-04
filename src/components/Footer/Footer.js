import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const fb = <FontAwesomeIcon icon={faFacebook} />
    const insta = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div className="bg-dark mt-5">
            <InputGroup className="my-2 pt-4 w-50 mx-auto">
                <FormControl
                placeholder="Your E-mail"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-success" id="button-addon2">
                Subscribe
                </Button>
            </InputGroup>
            <h3 className="text-info pt-2">Connect with our social Page.</h3> 
            <div className="footer mx-auto d-flex justify-content-between py-1">  
              <div>
                  <a href="https://facebook.com/">{fb}</a></div> 
              <div><a href="https://twitter.com/">{twitter}</a></div> 
              <div><a href="https://instagram.com/">{insta}</a></div> 
            </div>
            <h2 className="pb-2 text-secondary">© Copyright By Grapes Heaven 2021</h2>
        </div>
    );
};

export default Footer;