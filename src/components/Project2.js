import "./projects.scss"

const Project2 = () => {
  return (
    <div className="project-wrapper">
      <div className="title">
        <h1>NPM Lookup</h1>
      </div>
      <div className="left">
        <div className="desc">
          <h3>Description</h3>
          <p>This was my first time using Redux for state managament with React and TypeScript.  Its a simple API request to get all of the npm registries to see if an npm package exists.</p>
          <div className="tech">
            <h4>Tech Used</h4>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>CSS</li>
            </ul>
            <button className="npm">
              <a href="https://github.com/BradleySH/npm-registry">Check it out</a>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <iframe src="https://npm-registry.vercel.app/"></iframe>
      </div>
    </div>
  )
}

export default Project2