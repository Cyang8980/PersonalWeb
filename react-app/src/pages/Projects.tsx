export const Projects = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">Personal coding projects and learning experiences</p>
      </div>

      <div className="content-card">
        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '24px', alignItems: 'start', marginBottom: '32px' }}>
          <a href="https://github.com/Cyang8980/ChessGame" target="_blank" rel="noopener noreferrer">
            <img src="/images/chessGameImage.PNG" alt="Chess Game" style={{ width: '100%', borderRadius: '8px', border: '1px solid #30363d' }} />
          </a>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#e6edf3', marginBottom: '8px' }}>
              <a href="https://github.com/Cyang8980/ChessGame" target="_blank" rel="noopener noreferrer" style={{ color: '#f0883e', textDecoration: 'none' }}>
                Chess Game
              </a>
            </h3>
            <p style={{ color: '#8b949e', fontSize: '14px', lineHeight: '1.6' }}>
              A terminal-based chess game made for my Artificial Intelligence course in College using Java 
              with 2 different AI bots - one with MiniMax algorithm and the other with Q Learning. 
              You can play against them and test your chess skills.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '24px', alignItems: 'start', marginBottom: '32px' }}>
          <a href="https://github.com/Cyang8980/ChatServerSimulator" target="_blank" rel="noopener noreferrer">
            <img src="/images/chatServer.jpeg" alt="Chat Server" style={{ width: '100%', borderRadius: '8px', border: '1px solid #30363d' }} />
          </a>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#e6edf3', marginBottom: '8px' }}>
              <a href="https://github.com/Cyang8980/ChatServerSimulator" target="_blank" rel="noopener noreferrer" style={{ color: '#f0883e', textDecoration: 'none' }}>
                Chat Server Simulator
              </a>
            </h3>
            <p style={{ color: '#8b949e', fontSize: '14px', lineHeight: '1.6' }}>
              A project that simulated clients talking to each other over a server using Java and Java's 
              thread packages. Multiple terminals act as server or clients, enabling global chat and 
              private messaging functionality.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '24px', alignItems: 'start' }}>
          <a href="https://github.com/Cyang8980/eCommerce" target="_blank" rel="noopener noreferrer">
            <img src="/images/Ecommerce.jpg" alt="ECommerce" style={{ width: '100%', borderRadius: '8px', border: '1px solid #30363d' }} />
          </a>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#e6edf3', marginBottom: '8px' }}>
              <a href="https://github.com/Cyang8980/eCommerce" target="_blank" rel="noopener noreferrer" style={{ color: '#f0883e', textDecoration: 'none' }}>
                ECommerce Pokemon Store
              </a>
            </h3>
            <p style={{ color: '#8b949e', fontSize: '14px', lineHeight: '1.6' }}>
              Created a backend API using Java for a fake ECommerce Store where multiple stores can have 
              admins add multiple items. Used Docker to host PostgreSQL database, DBeaver to view the 
              database, and Postman to send HTTP requests to API endpoints.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
