import './experience-wrapper.styles.scss';

const ExperienceWrapper = () =>
	<div className="timeline-wrapper">
		<div className="timeline-item-container">
			<h3>Professional Experience</h3>
			<div className="items">
				<div className="timeline-item" from-to='2017 - 2022'>
					<h4>Mainbrain Lda</h4>
					<p>Develop Ad Banners with high focus on clean code, performance, cross-browsing and platform compatibility to work on publishers/ platforms such as Weborama, Platform 161, DoubleClick Campaign Manager, Double Click Studio, AdForm.</p>
					<p>Make sure the end product matches the client`s design on a pixel-perfect level</p>
					<p>Contributing for company`s overall performance and workflow efficiency by creating components, modules and tools for such purpose</p>
					<p>Complementary design from clients whenever necessary as well as optimization of their assets for web (images/ videos)</p>
				</div>

				<div className="timeline-item" from-to='2014 - 2015'>
					<h4>Aspas & Parentesis</h4>
					<p>Websites [Mar e Montanha, 1º Salão Agro-Alimentar em Paris, Aroma do Campo]</p>
					<p>Advertising page for magazine</p>
					<p>Development of stationaries, posters, ﬂyers, room sheets for exhibitions, brand identity, image manipulation and photomontage, facebook posts, newsletters, press releases, email signatures</p>
				</div>

				<div className="timeline-item" from-to='2009 - 2010'>
					<h4>Infraconsult</h4>
					<p>Line work correction, organization of layers, creation of trafﬁc signals to scale, placement of trafﬁc signs in projects, revisions and notes of projects errors, creation of charts, ﬁnal arrangements</p>
				</div>

				<div className="timeline-item" from-to='2007 - 2008'>
					<h4>SbH - Solutions by Heart</h4>
					<p>Webmaster, Web designer (website content, banners, etc.)</p>
					<p>Responsible in the area of Augmented Reality</p>
					<p>3D modeling of children`s book characters  in collaboration with ADETTI (Association for the Development of Telecommunications and Computer Techniques) for the creation of e-books with built-in Augmented Reality</p>
				</div>
			</div>
		</div>

		<div className="timeline-item-container">
			<h3>Education</h3>
			<div className="items">
				<div className="timeline-item" from-to='2017'>
					<h4>EDIT.<span>Disruptive Digital Education</span></h4>
					<p>Frontend & Responsive Web Development - UI/UX, HTML5, CSS3, JavaScript</p>
				</div>

				<div className="timeline-item" from-to='2013'>
					<h4>PENN<span>University of Pennsilvania</span></h4>
					<p>Design - Creation of Artifacts in Society</p>
				</div>

				<div className="timeline-item" from-to='2009 - 2012'>
					<h4>IADE<span>Creative University</span></h4>
					<p>Design</p>
				</div>

				<div className="timeline-item" from-to='2017'>
					<h4>FORINO<span>New Technologies School</span></h4>
					<p>Multimedia</p>
				</div>
			</div>
		</div>
	</div>

export default ExperienceWrapper;