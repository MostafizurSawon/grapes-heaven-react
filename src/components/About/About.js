import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';


const About = () => {
    return (
        <div className="container">
            <Row className="my-5">
                <Col xs={6}>
                    <h2 className="text-info">
                        Our Advice
                    </h2>
                    <p>For those who are serious about grape farming and would like to avoid future failure and disappointment, then you better not pass up this opportunity today.</p>
                    <p>Who you are or what location you are in, not an issue, neither is a requirement of being experienced in farming, this product is for anyone who is passionate about grapes and exploiting as a business venture. You can develop the perfect grapevine that produces the juiciest grapes ever! It can as well become the perfect resource for you</p>
                </Col>
                <Col className="mb-3" xs={6}>
                <h2 className="text-info">
                        What you need to do.
                    </h2>
                <p>Do not waste more time searching the web on information to help you grow your grape farm, this is the solution for you, get your copy today and get to experience the rewarding gifts, even so, conducting a search on the net will only lead to you to this product in particular.</p>

                <p>
                What makes this product unique?
                    <br />
                This is an easy to follow system for even those who have never grown grapes before. Blending in with mother nature and adapting to it is what will have you succeed, nothing can stop you.
                </p>
                </Col>
                <Col xs={12}>
                <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" fluid />
                </Col>
                <Col className="mt-5" xs={12}>
                <p>
                Do not let this opportunity pass you by, you can cry all you want about there being no job or you grow your grapes and fail from time to time that you have no good yield or cannot maintain or produce good quality grapes, this is the solution for you. You have no one but you to blame if your life doesn’t change after going through ‘The complete grape growing system’.
                </p>
                <p>
                For those who think that the most valuable guidelines are best grounded on experience, it is folly, and it is not what you should consider, on the other hand, first-hand knowledge and your understanding of the situation are the best. So, get the first-hand information on your own in this system and try it out to see the difference.
                </p>
                <p>
                Why would you like to go through the trails, errors, and disappointment and most importantly the time and money trying to figure out the growing grapes shortcuts? It is not worth it. Time is the most valuable asset. Save on money and time and get your copy today, that guarantees you success. You will not believe it until you see it for yourself, and this is your chance to get the secrets on how to make an amazing grape farm with quality products from it.
                </p>
                
                <p>
                Time is something we do not always have, invest in your grapevine, and most importantly in yourself and start growing the ultimate grapevine with quality products. This can be your way out or your retirement scheme plan for the rest of your life if you only make the right choice today.
                </p>
                </Col>
            </Row>
        </div>
    );
};

export default About;