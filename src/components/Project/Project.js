import React from "react";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Pro1 from "./project_will.png";
import Pro2 from "./project_portfolio.png";
import Pro3 from "./project_meme.png";
import Pro4 from "./project_todoapp.png";

const Project = () => {
  return (
    <div className="container">
      <h2>PROJECTS</h2>
      <div className="projects" id="projects">
        {/* project1  */}
        <a href="https://www.mywill-online.cyou/" className="project">
          <h3>Wille</h3>
          <div className="pro-image">
            <img src={Pro1} alt="project1"></img>
          </div>
          <p>
            Wille makes users encourage to consider what happens to themselves
            after they die by creating a post-life will and funeral plan online.
          </p>
          <div className="link">
            <span>Ruby on rails</span>
            <a href="https://github.com/ReinaKitazawa/Wille">
              <GitHubIcon />
            </a>
          </div>
        </a>
        {/* project2 */}
        <a
          href="https://reinakitazawa.github.io/portfolio/"
          className="project"
        >
          <h3>My portfolio</h3>
          <div className="pro-image">
            <img src={Pro2} alt="project2"></img>
          </div>
          <p>
            This is what you see right now, this page. I put my information and
            some works in different section. I try to make it simple and easy to
            know me.
          </p>
          <div className="link">
            <span>React</span>

            <a href="https://github.com/ReinaKitazawa/my-portfolio">
              <GitHubIcon />
            </a>
          </div>
        </a>
        {/* project3  */}

        <a
          href="https://reinakitazawa.github.io/meme-generator/"
          className="project"
        >
          <h3>Meme generator</h3>
          <div className="pro-image">
            <img src={Pro3} alt="project3"></img>
          </div>
          <p>
            You can make your original meme by choosing one from randome images
            and add any words you like in top and bottom space.
          </p>
          <div className="link">
            <span>React</span>
            <a href="https://github.com/ReinaKitazawa/meme-generator">
              <GitHubIcon />
            </a>
          </div>
        </a>
        {/* project4  */}
        <a href="https://reinakitazawa.github.io/todo-app/" className="project">
          <h3>Todo app</h3>
          <div className="pro-image">
            <img src={Pro4} alt="project4"></img>
          </div>
          <p>
            This is a simple todo app. You can add, delete each task and also
            delete all tasks.
          </p>
          <div className="link">
            <span>JavaScript</span>
            <a href="https://github.com/ReinaKitazawa/todo-app">
              <GitHubIcon />
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Project;
