import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Panel from '../components/Panel';
import Button from '../components/Button';
import './Scan.css';

export default function Scan() {
  const navigate = useNavigate();
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('full');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    navigate('/dashboard');
  };

  return (
    <section className="scan-page visible">
      <div className="container">
        <h1>New Scan</h1>
        <p className="text-light">Scan a website or API endpoint for security vulnerabilities</p>

        <Panel title="Scan Configuration">
          <form onSubmit={handleSubmit} className="scan-form">
            <div className="form-group">
              <label htmlFor="target" className="form-label">
                Target URL or API Endpoint
              </label>
              <input
                type="url"
                id="target"
                className="form-input"
                placeholder="https://example.com or https://api.example.com"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <p className="form-help text-light">
                Enter the full URL of the website or API endpoint you want to scan
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="scanType" className="form-label">
                Scan Type
              </label>
              <select
                id="scanType"
                className="form-input"
                value={scanType}
                onChange={(e) => setScanType(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="full">Full Scan</option>
                <option value="quick">Quick Scan</option>
                <option value="api">API Scan</option>
                <option value="headers">Headers Only</option>
              </select>
              <p className="form-help text-light">
                {scanType === 'full' && 'Comprehensive security analysis including all checks'}
                {scanType === 'quick' && 'Fast scan focusing on common vulnerabilities'}
                {scanType === 'api' && 'Specialized scan for API endpoints and authentication'}
                {scanType === 'headers' && 'Quick check of security headers and configuration'}
              </p>
            </div>

            <div className="form-actions">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting || !target}
              >
                {isSubmitting ? 'Starting Scan...' : 'Start Scan'}
              </Button>
            </div>
          </form>
        </Panel>
      </div>
    </section>
  );
}
