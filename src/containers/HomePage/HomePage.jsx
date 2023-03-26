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
import ProjectTile from '../../components/ProjectTile/ProjectTile';

const socialInfo = [
  {
    image: linkedinPic,
    alt: 'LinkedIn Icon',
    link: 'www.linkedin.com/in/james-pescosta',
  },
  {
    image: githubPic,
    alt: 'GitHub Icon',
    link: 'https://github.com/JDPescosta',
  },
  {
    image: cvPic,
    alt: 'CV Icon',
    link: 'https://jdp-portfolio.s3-us-west-2.amazonaws.com/Dev_Online_JamesResume.pdf',
    isDownload: true,
  },
];

const projectInfo = [
  {
    image: 'https://jdp-portfolio.s3-us-west-2.amazonaws.com/otoImg.jpeg',
    className: 'project-tile',
    linkAddress: 'https://otonomos.com/',
    projectName: 'Otonomos website',
    description: 'Business incorporation site',
    builtWith: ' React & AWS',
  },
  {
    image:
      'https://pointbuy-calc.s3-us-west-2.amazonaws.com/race-images/rockgnome.png',
    className: 'project-tile',
    linkAddress: 'https://jdp-pointbuy.herokuapp.com/',
    srcAddress: 'https://github.com/JDPescosta/PointBuy',
    projectName: 'JDP-Pointbuy',
    description: 'A 5e D&D pointbuy calculator.',
    builtWith: ' Elixir/Phoenix, React & Heroku',
  },
  {
    image: 'https://jdp-portfolio.s3-us-west-2.amazonaws.com/soup-timer.png',
    className: 'project-tile',
    linkAddress: 'https://www.soup-timer.com/',
    srcAddress: 'https://github.com/gotsoup/soup-timer',
    projectName: 'Soup Timer',
    description: 'A Pomodoro technique timer.',
    builtWith: ' React, TypeScript & AWS',
  },
];

const HomePage = () => {
  const aboutRef = useRef(null);

  const scrollToRef = () => {
    window.scrollTo({
      left: 0,
      top: aboutRef.current.offsetTop,
      behavior: 'smooth',
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
            <h3>A full-stack developer with experience in web and games.</h3>
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
          <p>
            I'm an Australian developer who moved to Vancouver Island with my
            wife and baby daughter. I was told it never snows here and it has
            snowed every year since we moved.
          </p>
          <br />
          <p>
            I spend most of my time with my Wife, daughter and two dogs. In my
            (rare) free time, I like to code, play D&D, read Brandon Sanderson
            novels and walk my dogs.
          </p>
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
          <p>
            I originally studied a Bachelor of Games Development in Australia.
            After finishing my degree, I was employed as a Business Analyst
            where I was exposed to broader elements of the software development
            industry.
          </p>
          <br />
          <p>
            After moving to Canada, I started at a full-stack web dev position
            and I found that I really enjoy development side of software.{' '}
          </p>
        </Card>
      </div>
      <div className="project-container">
        <h2 className="projects-title">PROJECTS</h2>
        <div className="project-row">
          {projectInfo.map(
            ({
              image,
              className,
              linkAddress,
              srcAddress,
              projectName,
              description,
              builtWith,
            }) => (
              <ProjectTile
                key={projectName}
                image={image}
                className={className}
                linkAddress={linkAddress}
                srcAddress={srcAddress}
                projectName={projectName}
                description={description}
                builtWith={builtWith}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
