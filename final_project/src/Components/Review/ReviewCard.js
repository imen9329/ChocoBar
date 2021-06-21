import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productRate } from "../../Redux/Actions/productActions";

const Review = ({ match, history }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.user._id);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productRate(match.params.id, userId, rating, comment));
        history.push("/");
    };
    return (
        <div>
            <Form className="p-5">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Write your commment
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Comment"
                            name="comment"
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Rate
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="1"
                                label="1 Star"
                                onClick={(e) => setRating(e.target.value)}
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="2"
                                label="2 Stars"
                                onClick={(e) => setRating(e.target.value)}
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="3"
                                label="3 Stars"
                                onClick={(e) => setRating(e.target.value)}
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="4"
                                label="4 Stars"
                                onClick={(e) => setRating(e.target.value)}
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="5"
                                label="5 Stars"
                                onClick={(e) => setRating(e.target.value)}
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group
                    as={Row}
                    controlId="formHorizontalCheck"
                ></Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={handleSubmit}>
                            Send Review
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Review;
