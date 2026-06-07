import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Yükleniyor...');

  useEffect(() => {
    // Backend'i test et
    fetch('http://localhost:3000/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Backend bağlantısı başarısız: ' + err.message));
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🔐 Muhasebe CRM</h1>
      <p>Güvenli İş Yönetim Sistemi</p>
      <hr />
      <h2>Status</h2>
      <p>{message}</p>
      <p style={{ color: '#666', fontSize: '12px', marginTop: '50px' }}>
        Backend: http://localhost:3000
      </p>
    </div>
  );
}

export default App;