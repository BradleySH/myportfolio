import "./projects.scss"

const Project3 = () => {
  return (
    <div className="project-wrapper">
      <div className="title">
        <h1>Coding Notebook</h1>
      </div>
      <div className="left">
        <div className="desc">
          <h3>Description</h3>
          <p>This App was built using TypeScript and React.  I used Redux for state management and ES Build as my transpiler.  I used ESBuild as it works in browser and builds smaller files than webpack.  Uses axios to be able to download any npm files that are needed to code in the notebook. You can uses this app to learn or create notes of code you want to text before implementing it into projects. </p>
          <div className="tech">
            <h4>Tech Used</h4>
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>CSS</li>
              <li>ESBuild</li>
              <li>Redux</li>
              <li></li>
            </ul>
            <button className="project3">
              <a href="https://github.com/BradleySH/TS-Project">Check it out</a>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
      </div>
    </div>
  )
}

export default Project3