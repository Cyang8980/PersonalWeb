export const About = () => {
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Me Outside of Programming</p>
      </div>

      <div className="content-card">
        <h2 className="section-title">Education</h2>
        <p style={{ color: '#8b949e', marginBottom: '32px' }}>
          I was born and raised in Brooklyn, NY. I went to college at Skidmore in Saratoga Springs, NY 
          and graduated with a Major in Computer Science. However, the road wasn't always Computer Science. 
          At first I wanted to be a doctor and majored in Chemistry with a concentration in Biochemistry. 
          That didn't really work out too well and I found Computer Science during the Covid 19 pandemic.
        </p>

        <h2 className="section-title">Hobbies</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '24px' }}>
          <div style={{ background: '#0d1117', padding: '24px', borderRadius: '8px', border: '1px solid #30363d' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <img src="/images/ChessSet.jpg" alt="Chess" style={{ width: '60px', height: '60px', borderRadius: '8px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e6edf3', marginBottom: '4px' }}>Chess Player</h3>
                <p style={{ fontSize: '12px', color: '#8b949e' }}>Competitor since elementary school</p>
              </div>
            </div>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              I competed nationally in chess since I was in elementary school. Now I just play and teach it for fun.
            </p>
          </div>

          <div style={{ background: '#0d1117', padding: '24px', borderRadius: '8px', border: '1px solid #30363d' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <img src="/images/LittleHouseOfChessLogo.PNG" alt="Little House of Chess" style={{ width: '60px', height: '60px', borderRadius: '8px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e6edf3', marginBottom: '4px' }}>Chess Teacher</h3>
                <p style={{ fontSize: '12px', color: '#8b949e' }}>After school program instructor</p>
              </div>
            </div>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              I taught chess to elementary school kids at Little House of Chess, emphasizing having fun while 
              developing critical thinking and outside-the-box problem solving.
            </p>
          </div>

          <div style={{ background: '#0d1117', padding: '24px', borderRadius: '8px', border: '1px solid #30363d' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <img src="/images/RiotLogo.PNG" alt="Riot Games" style={{ width: '60px', height: '60px', borderRadius: '8px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e6edf3', marginBottom: '4px' }}>Gamer</h3>
                <p style={{ fontSize: '12px', color: '#8b949e' }}>Strategy & competitive gaming</p>
              </div>
            </div>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              I love playing strategy games, FPS games, MOBAs, and survival extraction games. 
              I'm a big fan of Riot Games and enjoy their game library.
            </p>
          </div>

          <div style={{ background: '#0d1117', padding: '24px', borderRadius: '8px', border: '1px solid #30363d' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <img src="/images/CCALogo.PNG" alt="Chess Events" style={{ width: '60px', height: '60px', borderRadius: '8px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e6edf3', marginBottom: '4px' }}>Tournament Director</h3>
                <p style={{ fontSize: '12px', color: '#8b949e' }}>Giving back to the community</p>
              </div>
            </div>
            <p style={{ color: '#8b949e', fontSize: '14px' }}>
              I participated as a tournament director throughout high school and college to give back to what 
              I got when I was younger, answering questions and directing players.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
