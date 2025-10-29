export const Home = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Calvin Yang</h1>
        <p className="page-subtitle">Software Engineer | Chess Player | Gamer</p>
      </div>
      <div className="content-card">
      <h2 className="section-title">Welcome</h2>
      <p style={{ marginBottom: '20px', color: '#8b949e' }}>
        I'm Calvin Yang, a Software Engineer based in Brooklyn, NY. I'm passionate about building 
        innovative solutions and constantly learning new technologies. Explore my professional 
        experiences and personal projects to learn more about my work.
      </p>
      <h3 className="section-title" style={{ fontSize: '18px', marginTop: '32px' }}>Technologies</h3>
      <p style={{ color: '#8b949e' }}>
        Java, Python, JavaScript, TypeScript, React, Node.js, Spring Boot, AWS, MySQL, PostgreSQL, 
        Docker, PEGA, AI/ML
      </p>
    </div>
    </>
  );
};
