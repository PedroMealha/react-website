import MainSection from "../../components/main-section/main-section.component";

import './home.styles.scss';

import Logo from '../../assets/logo.svg';

const Home = () =>
	<div className="home">
		<div className="focus">
			<img className="logo" src={ Logo } alt="logo" />
		</div>
		<MainSection />
	</div>

export default Home;