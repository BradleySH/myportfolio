
import "./projects.scss"


export default function Project() {


    return (
        <div className="projects-container" id="projects">
            <div className="container">
                <div className="card">
                    <div className="hero">
                        <div className="rectangle"></div>
                        <video src="images/video.mov" controls autoPlay muted loop />
                    </div>
                    <div className="info">
                        <h2 className="title">Bounty Hunter</h2>
                        <p>This app is FullStack with MongoDB as the database it showcases the use of CRUD operations to implement storage applications. In the app you can create, read, update, and delete a bounty from the database and have it reflected immediately to the user.</p>
                        <h3 className="tech-stack">Built with:</h3>
                        <p>React, CSS, Express, MongoDB, Node.js, Mongoose</p>
                        <button className="github">
                        <a href="https://github.com/BradleySH/bountyhunter">Check it out</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card">
                    <div className="hero">
                        <div className="rectangle"></div>
                        <iframe src="https://npm-registry.vercel.app/"></iframe>
                    </div>
                    <div className="info">
                        <h2 className="title">NPM Lookup</h2>
                        <p>This was my first time using Redux for state managament with React and TypeScript.  Its a simple API request to get all of the npm registries to see if an npm package exists.</p>
                        <h3 className="tech-stack">Built with:</h3>
                        <p>React, TypeScript, Redux, CSS</p>
                        <button className="github">
                        <a href="https://github.com/BradleySH/npm-registry">Check it out</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card">
                    <div className="hero">
                        <div className="rectangle"></div>
                        <img src="images/notebook.png" />
                    </div>
                    <div className="info">
                        <h2 className="title">Coding Notebook</h2>
                        <p>This App was built using TypeScript and React.  I used Redux for state management and ES Build as my transpiler.  I used ESBuild as it works in browser and builds smaller files than webpack.  Uses axios to be able to download any npm files that are needed to code in the notebook. You can uses this app to learn or create notes of code you want to text before implementing it into projects.</p>
                        <h3 className="tech-stack">Built with:</h3>
                        <p>TypeScript, React, ESBuild, Redux, CSS</p>
                        <button className="github">
                        <a href="https://github.com/BradleySH/TS-Project">Check it out</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
