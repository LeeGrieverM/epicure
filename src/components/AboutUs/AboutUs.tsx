import "./AboutUs.scss";

const AboutUs = ({
  title,
  p1,
  p2,
  logo,
  appleDownloadLogo,
  googleDownloadLogo,
}: {
  title: string;
  p1: string;
  p2: string;
  logo: string;
  appleDownloadLogo: string;
  googleDownloadLogo: string;
}) => {
  return (
    <div className="about-us-container">
      <div className="about-us-left-container">
        <h1 className="about-us-title">{title}</h1>
        <p className="about-us-paragraph">{p1}</p>
        <p className="about-us-paragraph">{p2}</p>
        <div className="download-logos-container">
          <button className="download-logo-button">
            <img
              className="download-logo"
              src={appleDownloadLogo}
              alt="appleDownloadLogo"
            />
          </button>
          <button className="download-logo-button">
            <img
              className="download-logo"
              src={googleDownloadLogo}
              alt="googleDownloadLogo"
            />
          </button>
        </div>
      </div>
      <div className="about-us-right-container">
        <img className="about-us-epicure-logo" src={logo} alt={title} />
      </div>
    </div>
  );
};

export default AboutUs;
