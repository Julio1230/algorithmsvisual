import { Row, Container, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { BsFiletypeHtml } from "react-icons/bs";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skil-bx">
                            <h1>
                                Skills 
                            </h1>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="javaButton">
                                    <FaJava size="80px"/>
                                </div>
                                <div className="python">
                                    <FaPython size="80px"/>
                                </div>
                                <div className="C++">
                                    <CgCPlusPlus size="80px"/>
                                </div>
                                <div className="C">
                                    <h5> C </h5>
                                </div>
                                <div className="javaScript">
                                    <h5> JavaScript </h5>
                                </div>
                                <div className="html">
                                    <BsFiletypeHtml size="80px"/>
                                </div>
                                <div className="React">
                                    <FaReact size="80px"/>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}