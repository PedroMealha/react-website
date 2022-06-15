import FileSaver from 'file-saver';

import './skills.styles.scss';

const Skills = () => {

	const handleDownload = () =>
		FileSaver.saveAs(process.env.PUBLIC_URL + "/CV_Pedro_Mealha.pdf", "CV_Pedro_Mealha.pdf");

	return (
		<div className="skills">
			..soon<br />
			<button onClick={ handleDownload }>Download CV</button>
		</div>
	)
}

export default Skills;