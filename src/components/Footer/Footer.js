import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark mt-5">
            <InputGroup className="my-2 pt-5 w-50 mx-auto">
                <FormControl
                placeholder="Your E-mail"
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-success" id="button-addon2">
                Subscribe
                </Button>
            </InputGroup>
            <h2 className="py-4 text-secondary">© By grapes Society 2021</h2>
        </div>
    );
};

export default Footer;