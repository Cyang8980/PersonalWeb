export const Experiences = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Professional Experience</h1>
        <p className="page-subtitle">My journey in software development and engineering roles</p>
      </div>
      <div className="content-card">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <img src="/images/JPMorganChaseLogo.png" alt="JPMorgan Chase" style={{ width: '130px', height: '130px', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#e6edf3', marginBottom: '8px' }}>
              <a href="https://headstarter.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#f0883e', textDecoration: 'none' }}>
                Headstarter AI Software Engineer Fellow
              </a>
            </h2>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              Designed and implemented a backend API system for the team to streamline the support process for the team.
              Allowed the team to do less manual work and more time to focus on the product. Increased productivity by 20%.
              Used Python Lambdas and API Gateway to create a scalable and efficient system with minimal overhead. 
            </p>
          </div>
        </div>
      </div>
      <div className="content-card">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <img src="/images/headstarterlogo.PNG" alt="Headstarter" style={{ width: '130px', height: '130px', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#e6edf3', marginBottom: '8px' }}>
              <a href="https://headstarter.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#f0883e', textDecoration: 'none' }}>
                Headstarter AI Software Engineer Fellow
              </a>
            </h2>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              Built 5+ AI projects, prepared for technical interviews, and worked with 3 other people 
              on my team to build out a backlog of a startup. Also participated in weekend startups 
              every weekend over 7 days.
            </p>
          </div>
        </div>
      </div>

      <div className="content-card">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <img src="/images/smartAttorneyLogo.PNG" alt="Smart Attorney" style={{ width: '130px', height: '130px', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#e6edf3', marginBottom: '8px' }}>
              <a href="https://www.smartattorney.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#f0883e', textDecoration: 'none' }}>
                Freelance Software Engineer
              </a>
            </h2>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              Built out the web application with a team of 2 others to meet MVP requirements using 
              a React and Tailwind CSS frontend and a Java Spring backend using AWS and MySQL.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
