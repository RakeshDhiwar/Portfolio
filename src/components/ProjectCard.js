import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link,repo}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div> {link && (
              <a href={link}>
                <button className="proj-btn">Url</button>
              </a>
            )} 
          <a href={repo}> <button className="proj-btn">Github Repo</button> </a>
           </div>
        </div>
      </div>
    </Col>
  )
}
