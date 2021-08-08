
import "./projects.scss"

const Project1 = () => {
  return (
    <div className="project-wrapper">
      <div className="title">
        <h1>Bounty Hunter App</h1>
      </div>
      <div className="left">
        <div className="desc">
          <h3>Description</h3>
          <p>This app is FullStack with MongoDB as the database it showcases the use of CRUD operations to implement storage applications. In the app you can create, read, update, and delete a bounty from the database and have it reflected immedietyly to the user.</p>
          <div className="tech">
            <h4>Tech Used</h4>
            <ul>
              <li>ReactJS</li>
              <li>CSS</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
              <li>Node.js</li>
            </ul>
            <button className="bounty">
              <a href="https://github.com/BradleySH/bountyhunter">Check it out</a>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <video className="video" width="50%" height="25%" src="/images/video.mov" controls muted autoPlay loop ></video>
      </div>
    </div>
  )
}

export default Project1