// Mock data for Zerava dashboard

export const mockScans = [
  {
    id: '1',
    target: 'https://example.com',
    type: 'Full Scan',
    status: 'completed',
    score: 85,
    date: '2024-01-15T10:30:00Z',
    findings: {
      critical: 2,
      high: 5,
      medium: 8,
      low: 12
    }
  },
  {
    id: '2',
    target: 'https://api.example.com',
    type: 'API Scan',
    status: 'completed',
    score: 72,
    date: '2024-01-14T14:20:00Z',
    findings: {
      critical: 1,
      high: 7,
      medium: 10,
      low: 15
    }
  },
  {
    id: '3',
    target: 'https://app.example.com',
    type: 'Full Scan',
    status: 'in-progress',
    score: null,
    date: '2024-01-16T09:15:00Z',
    findings: null
  },
  {
    id: '4',
    target: 'https://staging.example.com',
    type: 'Quick Scan',
    status: 'completed',
    score: 91,
    date: '2024-01-13T16:45:00Z',
    findings: {
      critical: 0,
      high: 2,
      medium: 4,
      low: 6
    }
  }
];

export const mockResults = {
  scanId: '1',
  target: 'https://example.com',
  type: 'Full Scan',
  date: '2024-01-15T10:30:00Z',
  score: 85,
  summary: {
    totalFindings: 27,
    critical: 2,
    high: 5,
    medium: 8,
    low: 12
  },
  findings: [
    {
      id: 'f1',
      title: 'Missing security headers',
      severity: 'critical',
      category: 'Headers',
      description: 'The application is missing critical security headers including X-Frame-Options, X-Content-Type-Options, and Strict-Transport-Security.',
      impact: 'Without these headers, the application is vulnerable to clickjacking attacks, MIME type sniffing, and man-in-the-middle attacks.',
      recommendation: 'Implement security headers in your web server configuration or application middleware. Recommended headers: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Strict-Transport-Security: max-age=31536000; includeSubDomains',
      fixSteps: [
        'Review your web server configuration (Apache, Nginx, etc.)',
        'Add security headers to your server configuration',
        'Test headers using security header analysis tools',
        'Verify headers are present in production environment'
      ]
    },
    {
      id: 'f2',
      title: 'SQL injection vulnerability detected',
      severity: 'critical',
      category: 'Database',
      description: 'The application appears to be vulnerable to SQL injection attacks in the user authentication endpoint.',
      impact: 'An attacker could potentially access, modify, or delete sensitive data in your database.',
      recommendation: 'Use parameterized queries or prepared statements for all database operations. Never concatenate user input directly into SQL queries.',
      fixSteps: [
        'Review all database query code',
        'Replace string concatenation with parameterized queries',
        'Implement input validation and sanitization',
        'Run security tests to verify the fix'
      ]
    },
    {
      id: 'f3',
      title: 'Weak password policy',
      severity: 'high',
      category: 'Authentication',
      description: 'The application allows passwords that do not meet minimum security requirements.',
      impact: 'Weak passwords increase the risk of unauthorized access through brute force attacks.',
      recommendation: 'Enforce a strong password policy requiring at least 12 characters, including uppercase, lowercase, numbers, and special characters.',
      fixSteps: [
        'Update password validation rules',
        'Implement password strength meter',
        'Add password expiration policy',
        'Consider implementing two-factor authentication'
      ]
    },
    {
      id: 'f4',
      title: 'Exposed API keys in client-side code',
      severity: 'high',
      category: 'Secrets',
      description: 'API keys and credentials are visible in the client-side JavaScript code.',
      impact: 'Exposed credentials can be used by attackers to access your services and potentially incur costs or data breaches.',
      recommendation: 'Move all API keys and credentials to server-side code. Use environment variables and never commit secrets to version control.',
      fixSteps: [
        'Audit all client-side code for exposed credentials',
        'Move API calls to backend endpoints',
        'Implement proper authentication for API access',
        'Rotate all exposed credentials immediately'
      ]
    },
    {
      id: 'f5',
      title: 'Outdated dependencies',
      severity: 'high',
      category: 'Dependencies',
      description: 'Multiple dependencies contain known security vulnerabilities.',
      impact: 'Outdated packages may contain security flaws that could be exploited by attackers.',
      recommendation: 'Update all dependencies to their latest secure versions. Review changelogs for breaking changes before updating.',
      fixSteps: [
        'Run dependency vulnerability scanner',
        'Review security advisories for each outdated package',
        'Update packages one at a time and test',
        'Implement automated dependency updates'
      ]
    },
    {
      id: 'f6',
      title: 'Insecure session management',
      severity: 'high',
      category: 'Session',
      description: 'Session tokens are not properly secured and may be vulnerable to session hijacking.',
      impact: 'Attackers could potentially steal user sessions and gain unauthorized access to accounts.',
      recommendation: 'Implement secure session management with HttpOnly and Secure flags, and use strong session token generation.',
      fixSteps: [
        'Review session token generation algorithm',
        'Set HttpOnly and Secure flags on cookies',
        'Implement session timeout and rotation',
        'Add session monitoring and anomaly detection'
      ]
    },
    {
      id: 'f7',
      title: 'Missing rate limiting',
      severity: 'high',
      category: 'API',
      description: 'API endpoints do not implement rate limiting, making them vulnerable to abuse and denial-of-service attacks.',
      impact: 'Without rate limiting, attackers can overwhelm your API with requests, causing service disruption.',
      recommendation: 'Implement rate limiting on all API endpoints. Consider using a service like Cloudflare or implementing middleware.',
      fixSteps: [
        'Identify all public API endpoints',
        'Implement rate limiting middleware',
        'Set appropriate rate limits per endpoint',
        'Monitor and adjust limits based on usage patterns'
      ]
    },
    {
      id: 'f8',
      title: 'Cross-site scripting (XSS) vulnerability',
      severity: 'medium',
      category: 'Input Validation',
      description: 'User input is not properly sanitized before being rendered in the browser.',
      impact: 'Attackers could inject malicious scripts that execute in users\' browsers, potentially stealing sensitive data.',
      recommendation: 'Implement proper input sanitization and output encoding. Use Content Security Policy headers.',
      fixSteps: [
        'Review all user input handling',
        'Implement input validation and sanitization',
        'Use output encoding for all user-generated content',
        'Add Content Security Policy headers'
      ]
    },
    {
      id: 'f9',
      title: 'Insufficient logging',
      severity: 'medium',
      category: 'Monitoring',
      description: 'The application does not log security-relevant events such as failed login attempts or access to sensitive data.',
      impact: 'Without proper logging, security incidents may go undetected and investigation becomes difficult.',
      recommendation: 'Implement comprehensive security event logging and monitoring.',
      fixSteps: [
        'Identify security-relevant events to log',
        'Implement structured logging',
        'Set up log aggregation and monitoring',
        'Create alerts for suspicious activities'
      ]
    },
    {
      id: 'f10',
      title: 'HTTP instead of HTTPS',
      severity: 'medium',
      category: 'Transport',
      description: 'Some resources are loaded over HTTP instead of HTTPS, creating mixed content vulnerabilities.',
      impact: 'Mixed content can be intercepted and modified by attackers, compromising the security of your application.',
      recommendation: 'Ensure all resources are loaded over HTTPS. Use HTTPS redirects and HSTS headers.',
      fixSteps: [
        'Audit all resource URLs',
        'Update all HTTP links to HTTPS',
        'Implement HTTPS redirects',
        'Add HSTS header to enforce HTTPS'
      ]
    },
    {
      id: 'f11',
      title: 'Information disclosure in error messages',
      severity: 'medium',
      category: 'Error Handling',
      description: 'Error messages reveal sensitive information about the application structure and database schema.',
      impact: 'Detailed error messages can provide attackers with information to craft more targeted attacks.',
      recommendation: 'Implement generic error messages for users while logging detailed errors server-side.',
      fixSteps: [
        'Review all error handling code',
        'Create generic user-facing error messages',
        'Log detailed errors server-side only',
        'Test error scenarios to verify changes'
      ]
    },
    {
      id: 'f12',
      title: 'Weak encryption algorithm',
      severity: 'low',
      category: 'Cryptography',
      description: 'The application uses deprecated encryption algorithms that are no longer considered secure.',
      impact: 'Weak encryption may be vulnerable to attacks, potentially exposing sensitive data.',
      recommendation: 'Upgrade to modern, secure encryption algorithms such as AES-256 and use TLS 1.3 or higher.',
      fixSteps: [
        'Audit all encryption usage',
        'Identify deprecated algorithms',
        'Upgrade to secure alternatives',
        'Test encryption/decryption after changes'
      ]
    },
    {
      id: 'f13',
      title: 'Missing security.txt file',
      severity: 'low',
      category: 'Policy',
      description: 'The application does not have a security.txt file for responsible disclosure.',
      impact: 'Security researchers may not know how to report vulnerabilities responsibly.',
      recommendation: 'Create a security.txt file at /.well-known/security.txt with contact information for security reports.',
      fixSteps: [
        'Create security.txt file',
        'Include contact information and disclosure policy',
        'Place file at /.well-known/security.txt',
        'Verify file is accessible'
      ]
    },
    {
      id: 'f14',
      title: 'Verbose API responses',
      severity: 'low',
      category: 'API',
      description: 'API responses include more information than necessary, potentially revealing internal structure.',
      impact: 'Verbose responses can provide attackers with information about your application architecture.',
      recommendation: 'Minimize API response data to only what is necessary for the client.',
      fixSteps: [
        'Review all API response structures',
        'Remove unnecessary fields',
        'Implement response filtering',
        'Document API response formats'
      ]
    },
    {
      id: 'f15',
      title: 'Missing Content Security Policy',
      severity: 'low',
      category: 'Headers',
      description: 'The application does not implement a Content Security Policy header.',
      impact: 'Without CSP, the application is more vulnerable to XSS attacks and data injection.',
      recommendation: 'Implement a strict Content Security Policy header that restricts resource loading.',
      fixSteps: [
        'Audit all resource loading in your application',
        'Create CSP policy',
        'Test CSP in development',
        'Deploy CSP with report-only mode first'
      ]
    }
  ]
};

export const mockDashboardStats = {
  totalScans: 24,
  averageScore: 78,
  totalFindings: 156,
  criticalFindings: 8,
  scansThisMonth: 12,
  lastScanDate: '2024-01-16T09:15:00Z'
};
