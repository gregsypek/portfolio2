import "./scss/main.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Project from "./Project";

function App() {
	return (
		<>
			<section className="home" id="home">
				<Nav />
				<Home />
			</section>
			<section className="about" id="about">
				<About />
			</section>
			<section class="projects" id="projects">
				<h2 class="projects__title">My Websites & Apps</h2>
				<div class="projects__boxes">
					<Project />
				</div>
			</section>
		</>
	);
}

export default App;
