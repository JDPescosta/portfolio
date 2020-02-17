import React from 'react';
import shortid from 'shortid';
import './HomePage.scss';
import profilePic from '../../assets/images/profile-pic.png';
import linkedinPic from '../../assets/images/linkedin-icon.png';
import githubPic from '../../assets/images/github-icon.png';
import cvPic from '../../assets/images/cv-icon.png';
import Card from '../../components/Card/Card';
import SocialLink from '../../components/SocialLink/SocialLink';


const socialInfo = [
  {
    image: linkedinPic,
    alt: 'LinkedIn Icon',
    link: 'https://ca.linkedin.com/in/james-pescosta-58180116b'
  },
  {
    image: githubPic,
    alt: 'GitHub Icon',
    link: 'https://github.com/JDPescosta'
  },
  {
    image: cvPic,
    alt: 'CV Icon',
    link: '/JamesPescosta_Resume.pdf',
    isDownload: true
  }
];

const HomePage = () => (
  <>
    <div className="landing-container">
      <img src={profilePic} alt="A cartoon avatar of James" />

      <Card className="heading-card">
        <h1>Hi I'm James,</h1>
        <h3>A software developer with experience in web and mobile.</h3>
      </Card>
    </div>
    <div className="about-container">
      <Card className="about-card">
        <h2>WHO I AM</h2>
        <p>this is example text</p>
      </Card>
      <Card className="about-card link-card">
        {socialInfo.map(({ image, alt, link, ...props }) => (
          <SocialLink key={shortid.generate()} imageSrc={image} altText={alt} link={link} {...props} />
        ))}
      </Card>
      <Card className="about-card">
        <h2>WHAT I DO</h2>
        <p>this is example text</p>
      </Card>
    </div>
  </>
);

export default HomePage;
