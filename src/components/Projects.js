import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/Projects/Food.png";
import projImg2 from "../assets/Projects/Data.jpeg";
import projImg3 from "../assets/Projects/TicTacToe.png";
import projImg4 from "../assets/Projects/Blog.png";
import projImg5 from "../assets/Projects/Todo.png";
import projImg6 from "../assets/Projects/img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Restaurant App",
      description: "React, tailwind and Appwrite",
      imgUrl: projImg1,
      link:"https://dhiwarcafe.surge.sh/",
      repo:"https://github.com/RakeshDhiwar/restaurantFoodApp",
    },
    {
      title: "Data analysis Project",
      description: "Sales analysis using Python-pandas,numpy,matplotlib",
      imgUrl: projImg2,
      link:"",
      repo:"https://github.com/RakeshDhiwar/Data_Analysis_Project",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "React, Tailwind",
      imgUrl: projImg3,
      link:"https://dhiwar-town.surge.sh/",
      repo:"https://github.com/RakeshDhiwar/React_tic-tac-toe_Project",
    },
    {
      title: "Blog App",
      description: "React, tailwind and Appwrite ",
      imgUrl: projImg4,
      link:"",
      repo:"https://github.com/RakeshDhiwar/Blog-app",
    },
    {
      title: "Todo App",
      description: "React, Tailwind",
      imgUrl: projImg5,
      link:"",
      repo:"https://github.com/RakeshDhiwar/React_todo_app",
    },
    {
      title: "Theme-Switcher",
      description: "React, Tailwind",
      imgUrl: projImg6,
      link:"",
      repo:"https://github.com/RakeshDhiwar/React_Projects/tree/main/themeswitcher",
    },
  ];

  const projects1 = [
    {
      title: "Todo App",
      description: "React, Tailwind",
      imgUrl: projImg5,
      link:"",
      repo:"https://github.com/RakeshDhiwar/React_todo_app",
    },
    {
      title: "Theme-Switcher",
      description: "React, Tailwind",
      imgUrl: projImg6,
      link:"",
      repo:"https://github.com/RakeshDhiwar/React_Projects/tree/main/themeswitcher",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have completed several personal projects to enhance my skills in web development and data analysis. Each project showcases my ability to apply theoretical knowledge to practical scenarios, from building responsive applications in React and React Native to conducting data analysis. Below is a selection of my work that reflects my technical expertise and passion for innovation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More to Come!
                      I am committed to continuous learning, and there are many more projects on the horizon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
