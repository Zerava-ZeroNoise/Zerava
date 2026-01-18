import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="container">
          <div className="landing-nav-content">
            <div className="landing-brand">
              <img src="/icon.jpg" alt="Zerava" className="landing-logo" />
              <span className="landing-brand-text">Zerava</span>
            </div>
            <div className="landing-nav-actions">
              <Link to="/login" className="btn">Sign In</Link>
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="landing-hero visible">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Enterprise-Grade Security
              <span className="hero-title-accent"> for Modern Teams</span>
            </h1>
            <p className="hero-description">
              Zerava empowers startups and growing businesses with professional cybersecurity scanning. 
              Discover vulnerabilities before attackers do. Get clear, actionable security insights 
              without the enterprise complexity. Built by security experts, designed for founders.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary btn-large">
                Start Free Scan
              </Link>
              <Link to="/login" className="btn btn-large">
                View Demo
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">150+</div>
                <div className="stat-label">Security Tests</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5min</div>
                <div className="stat-label">Average Scan</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Actionable Reports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-features visible">
        <div className="container">
          <h2 className="section-title">Everything You Need to Stay Secure</h2>
          <p className="section-subtitle text-light" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.125rem' }}>
            Professional security scanning without the enterprise overhead
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Comprehensive Vulnerability Detection</h3>
              <p className="feature-description">
                Our advanced scanning engine checks for 150+ security issues including SQL injection, 
                XSS vulnerabilities, misconfigured headers, exposed secrets, and weak encryption. 
                Get complete visibility into your security posture.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Clear Security Scoring</h3>
              <p className="feature-description">
                Receive an intuitive 0-100 security score that makes sense. Each finding is categorized 
                by severity (Critical, High, Medium, Low) with detailed explanations. Understand your 
                risks at a glance, fix what matters most.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Lightning-Fast Scans</h3>
              <p className="feature-description">
                Most scans complete in under 5 minutes. No waiting, no delays. Get instant security 
                insights for your websites and APIs. Perfect for CI/CD pipelines and regular security audits.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Step-by-Step Remediation</h3>
              <p className="feature-description">
                Every vulnerability comes with clear, actionable fix instructions. No security degree required. 
                Copy-paste solutions, code examples, and configuration guides help you resolve issues quickly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3 className="feature-title">Track Security Over Time</h3>
              <p className="feature-description">
                Monitor your security improvements with historical reports and trend analysis. See your 
                security score improve as you fix issues. Export reports for compliance and stakeholder reviews.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Web & API Scanning</h3>
              <p className="feature-description">
                Specialized scanning engines for both web applications and REST APIs. Detect authentication 
                flaws, authorization issues, and API-specific vulnerabilities. One platform for all your security needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-testimonials visible">
        <div className="container">
          <h2 className="section-title">Trusted by Security-Conscious Teams</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Zerava caught critical vulnerabilities in our API that we didn't know existed. 
                The clear remediation steps helped us fix everything in one afternoon."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-name">Sarah Chen</div>
                <div className="testimonial-role">CTO, TechStartup Inc.</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "Finally, a security tool that speaks our language. No jargon, just clear 
                explanations and actionable fixes. Our security score improved from 45 to 92 in two weeks."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-name">Marcus Rodriguez</div>
                <div className="testimonial-role">Founder, CloudScale</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                "The API scanning feature is a game-changer. We scan our endpoints before every 
                deployment. It's become an essential part of our security workflow."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-name">Emily Watson</div>
                <div className="testimonial-role">Lead Developer, DataFlow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-how-it-works visible">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Enter Your URL</h3>
              <p className="step-description">
                Simply provide your website or API endpoint. No complex configuration needed.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Automated Scanning</h3>
              <p className="step-description">
                Our engine runs 150+ security tests in minutes, checking for vulnerabilities 
                and misconfigurations.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Get Your Report</h3>
              <p className="step-description">
                Receive a detailed security report with scores, findings, and step-by-step 
                remediation guides.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Fix & Improve</h3>
              <p className="step-description">
                Follow our clear instructions to fix issues. Rescan anytime to track your 
                security improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-cta visible">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Start Your Security Journey Today</h2>
            <p className="cta-description">
              Join hundreds of startups and growing companies who use Zerava to protect their digital assets. 
              No credit card required. Get your first security scan in minutes.
            </p>
            <Link to="/signup" className="btn btn-primary btn-large">
              Start Free Scan
            </Link>
            <p className="text-light" style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
              ✓ Free forever plan available  ✓ No credit card required  ✓ Setup in 2 minutes
            </p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/icon.jpg" alt="Zerava" className="footer-logo" />
              <span>Zerava</span>
            </div>
            <div className="footer-links">
              <Link to="/login">Dashboard</Link>
              <Link to="/login">Documentation</Link>
              <Link to="/login">Support</Link>
            </div>
            <div className="footer-copyright">
              © 2026 Zerava. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
