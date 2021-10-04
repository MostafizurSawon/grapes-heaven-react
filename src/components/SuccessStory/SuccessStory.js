import React from 'react';
import { Col, Image, Pagination, Row } from 'react-bootstrap';

const SuccessStory = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
    return (
        <div className="container">
            <div className="my-5">
                <Row>
                    <Col>
                    <h2 className="text-info mt-5">Success Story</h2>
                    <p>
                    A starter pack will be availed to the newbies to come terms with the technical terms only the professional grape growers use. In addition, there are videos that illustrate how you can proceed with the growth from making your first cutting to collecting your grapes. You will be in a position to compare your grape yield yearly to ensure you continue producing fantastic grapes.
                        <br />
                    Moreover, you will be provided with a grape grower’s diary, which has been highlighted in this guide in an easy to follow way and very important to do list for each cycle your vines undergo.
                    </p>
                    </Col>
                    <Col>
                    <Image src="https://images.unsplash.com/photo-1599747391696-3a0e716b2726?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=865&q=80" fluid />
                    </Col>
                </Row>
                <Row className="my-5">
                <Col>
                    <Image src="https://images.unsplash.com/photo-1464036388609-747537735eab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" fluid />
                    </Col>
                    <Col>
                    <h2 className="text-info mt-5">Success Story</h2>
                    <p>
                    How could it get any better than this? Think about it, you could invest in it and begin a productive business of exporting quality grapes or even locally create a grapevine shop. You can further venture into other business ideas or expand the export one. Either way, the choice rests with you, one choice and you can make it possible to change your future forever. There is no previous experience on grape growing that is needed, only you, your interest and passion, nothing more.
                        <br />
                    Follow the system regimen to the later and you will be smiling all the years for the rest of your life. Furthermore, you can make it a family business and leave a legacy behind, your legacy, just imagine it with your children and other families for generations to come.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h2 className="text-info mt-5">Success Story</h2>
                    <p>
                    What can it help you solve?
                            <br />
                    This system will guide you every step of the way, from making the cuts, planting your grapevine, nurturing it, how to prune it and at the end collect your grapes and get rewarded.
                    <br />
                    These and much more are in store for you in this system. While viewing all that information, one might think that growing grapes is too hard and should be left to those who are good at it. This is folly, growing grapes is only difficult if you do not understand what you are doing.
                    </p>
                    </Col>
                    <Col>
                    <Image src="https://images.unsplash.com/photo-1464638681273-0962e9b53566?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" fluid />
                    </Col>
                </Row>
                <div className="my-5 d-flex justify-content-center">
                <Pagination size="lg">
                   {items}
                    
                    </Pagination>
                </div>
        </div>
        </div>
    );
};

export default SuccessStory;