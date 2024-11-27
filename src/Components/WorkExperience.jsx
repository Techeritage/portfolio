import React from "react";

const WorkExperience = () => {
  return (
    <div className="resume-cont">
      <div className="resume-cont1">
        <h2>Work Experience</h2>
      </div>
      <div className="resume-cont2">
        {/* Bincom Dev Center */}
        {/* Freelancing and Gigs */}
        <div className="resume-details-cont">
          <div className="resume-date">
            <p>2023-Present</p>
          </div>
          <div className="resume-details">
            <p className="workplace">Freelancer</p>
            <h3>Frontend Web Developer</h3>
            <p>
              Since 2023, I have been freelancing as a web developer, delivering
              a wide range of projects for various clients. I specialize in
              building <b>eCommerce platforms</b>, <b>business websites</b>, and
              <b>custom websites</b>, tailored to each client’s unique needs. My
              expertise spans across designing responsive, user-friendly
              interfaces and integrating robust back-end systems to ensure
              seamless functionality.
            </p>
          </div>
        </div>

        {/* Zumbox Technologies */}
        <div className="resume-details-cont">
          <div className="resume-date">
            <p>2024-2024</p>
          </div>
          <div className="resume-details">
            <p className="workplace">Zumbox Technologies</p>
            <h3>Frontend Web Developer</h3>
            <p>
              As a Frontend Web Developer at Zumbox Technologies, I worked on
              building various projects, including <b>admin dashboards</b>,
              <b>eCommerce platforms</b>, and <b>business websites</b>. I
              collaborated with both frontend and backend teams to deliver
              high-quality, responsive, and user-friendly web applications.
              Additionally, I implemented best practices in performance
              optimization and ensured seamless integration with third-party
              services and APIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
