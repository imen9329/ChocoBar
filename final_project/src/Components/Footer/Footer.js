import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <strong style={{ color: "#65350f" }}>
                            Copyright &copy; Choco Bar
                        </strong>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
