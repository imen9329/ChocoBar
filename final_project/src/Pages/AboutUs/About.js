import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const About = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <div>
            <img
                src="https://i.pinimg.com/originals/69/1c/70/691c70984942ede78bc4e5f1b25eac02.jpg"
                alt="melting chocolate"
                height="250px"
                width="450px"
                className="rounded mx-auto d-block"
                style={{ marginTop: "5px" }}
            />
            <br />
            <Container className="container-fluid">
                <h1 style={{ color: "#A07855FF" }}>
                    Why is chocolate so tasty?
                </h1>
                <p>
                    What you may not realise is that it’s the hundreds of
                    complex chemicals found in chocolate that keep us coming
                    back for more. Not only do they give chocolate its delicious
                    taste and smooth texture, but they also have powerful
                    effects on the human brain to make us feel happy and alert.
                    It’s no wonder that the plant genus from which this tasty
                    substance comes from is called
                    <strong style={{ color: "#BD7F37FF" }}> theobroma</strong>,
                    derived from the Greek for ‘food of the gods’ .
                </p>
                <br />
                <h1 style={{ color: "#A07855FF" }}>Why Choco Bar?</h1>
                <h4 style={{ color: "#D64161FF" }}> "As a client"</h4>
                <br />
                <p>
                    We offer you a sweet experience in the world of chocolate to
                    indulge your senses. With a simple click, you will find a
                    great variety of chocolates and brands.
                    <br />
                    {!isAuth ? (
                        <Link to="/register">Click here to join us</Link>
                    ) : null}
                </p>
                <h4 style={{ color: "#D64161FF" }}> "As a Provider"</h4>
                <br />
                <p>
                    We give you the chance to show your products, contact your
                    clients and get reviewed with a simple click
                </p>
            </Container>
        </div>
    );
};

export default About;
