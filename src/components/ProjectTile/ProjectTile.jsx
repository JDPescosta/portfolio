import React from 'react';
import PropTypes from 'prop-types';
import './ProjectTile.scss';

const ProjectTile = ({
  image,
  className,
  linkAddress,
  srcAddress,
  projectName,
  description,
  builtWith,
}) => (
  <div className={`project-tile ${className}`}>
    <img src={image} alt={`A screenshot of the ${projectName} app.`} />
    <div>
      <h3>{projectName}</h3>
      <p>{description}</p>
      <h4>
        <strong>Built with:</strong>
        {builtWith}
      </h4>
      <div>
        {srcAddress ? (
          <a
            className="offsite-link"
            href={srcAddress}
            rel="noopener noreferrer"
            target="_blank"
          >
            Source
          </a>
        ) : (
          <p
            className="offsite-link"
            style={{ ...{ backgroundColor: '#D3D3D3' } }}
          >
            Private Src
          </p>
        )}
        <a
          className="offsite-link"
          href={linkAddress}
          rel="noopener noreferrer"
          target="_blank"
        >
          Open
        </a>
      </div>
    </div>
  </div>
);

ProjectTile.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  linkAddress: PropTypes.string.isRequired,
  srcAddress: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  builtWith: PropTypes.string.isRequired,
};

export default ProjectTile;
