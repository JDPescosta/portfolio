import React, { useRef } from 'react';
import shortid from 'shortid';
import './HomePage.scss';
import profilePic from '../../assets/images/profile-pic.png';
import linkedinPic from '../../assets/images/linkedin-icon.png';
import githubPic from '../../assets/images/github-icon.png';
import cvPic from '../../assets/images/cv-icon.png';
import downArrowPic from '../../assets/images/down-arrow-icon.png';
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

const HomePage = () => {
  const aboutRef = useRef(null);

  const scrollToRef = () => {
    window.scrollTo({
      left: 0,
      top: aboutRef.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="landing-container">
        <div className="landing-row">
          <img
            className="profile-img"
            src={profilePic}
            alt="A cartoon avatar of James"
          />

          <Card className="heading-card">
            <h1>Hi I'm James,</h1>
            <h3>A rookie developer with experience in web and games.</h3>
          </Card>
        </div>

        <button
          type="button"
          className="down-button"
          onClick={() => scrollToRef()}
        >
          <img src={downArrowPic} alt="down arrow" />
        </button>
      </div>
      <div className="about-container" ref={aboutRef}>
        <Card className="about-card">
          <h2>WHO I AM</h2>
          <p>I'm an Australian developer who recently moved to Vancouver after honeymooning with my new wife. While it's a tad bit colder here, I find myself warming up to the Canadian lifestyle.</p>
          <br/>
          <p>I spend most of my time coding, playing D&D and walking my dog. I'm a huge nerd!</p>
        </Card>
        <Card className="about-card link-card">
          {socialInfo.map(({ image, alt, link, ...props }) => (
            <SocialLink
              key={shortid.generate()}
              imageSrc={image}
              altText={alt}
              link={link}
              {...props}
            />
          ))}
        </Card>
        <Card className="about-card">
          <h2>WHAT I DO</h2>
          <p>I originally studied a Bachelor of Games Development in Australia. After finishing my degree, I was employed as a Business Analyst where I was exposed to broader elements of the software development industry.</p>
          <br/>
          <p>Now that I've moved to Canada, I'm looking to get back into the development side of software. </p>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
