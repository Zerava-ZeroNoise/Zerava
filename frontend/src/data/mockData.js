// Mock data used by Reports and Results pages
export const mockScans = [
  {
    id: 'scan-1',
    target: 'example.com',
    type: 'web',
    date: '2026-01-15T10:30:00Z',
    status: 'completed',
    score: 78,
    findings: { critical: 2, high: 5, medium: 8, low: 10 }
  },
  {
    id: 'scan-2',
    target: 'api.example.com',
    type: 'api',
    date: '2026-01-14T14:00:00Z',
    status: 'completed',
    score: 88,
    findings: { critical: 0, high: 1, medium: 3, low: 2 }
  },
  {
    id: 'scan-3',
    target: 'staging.example.com',
    type: 'web',
    date: '2026-01-10T09:00:00Z',
    status: 'running',
    score: 0,
    findings: { critical: 0, high: 0, medium: 0, low: 0 }
  }
];

export const mockResults = {
  id: 'scan-1',
  target: 'example.com',
  type: 'web',
  date: '2026-01-15T10:30:00Z',
  score: 78,
  summary: {
    totalFindings: 25,
    critical: 2,
    high: 5,
    medium: 8,
    low: 10
  },
  findings: [
    {
      id: 'f-1',
      title: 'Missing Security Headers',
      severity: 'High',
      category: 'Configuration',
      description: 'The server is missing some recommended security headers such as X-Frame-Options.',
      impact: 'Clickjacking and other attacks may be possible.',
      recommendation: 'Add the recommended security headers.',
      fixSteps: ['Update server config to include X-Frame-Options', 'Add Content-Security-Policy header']
    },
    {
      id: 'f-2',
      title: 'Outdated TLS Version',
      severity: 'Critical',
      category: 'Encryption',
      description: 'TLS 1.0 is enabled on the server.',
      impact: 'Allows downgrade attacks and weak encryption.',
      recommendation: 'Disable TLS 1.0 and 1.1; enable TLS 1.2+ only.',
      fixSteps: ['Update server to disable TLS 1.0/1.1', 'Verify with SSL test']
    },
    {
      id: 'f-3',
      title: 'Exposed Admin Endpoint',
      severity: 'Medium',
      category: 'Access Control',
      description: 'An administrative endpoint is accessible without authentication.',
      impact: 'Unauthorized access to admin functions.',
      recommendation: 'Restrict access to authenticated users only.',
      fixSteps: ['Require authentication for /admin', 'Audit access logs']
    }
  ]
};

// Dashboard summary used on the main dashboard page
export const mockDashboardStats = {
  totalScans: mockScans.length,
  averageScore: Math.round((mockScans.filter(s => s.score).reduce((acc, s) => acc + (s.score||0), 0) / Math.max(1, mockScans.filter(s => s.score).length)) * 1) ,
  totalFindings: mockScans.reduce((acc, s) => acc + (s.findings.critical + s.findings.high + s.findings.medium + s.findings.low), 0),
  criticalFindings: mockScans.reduce((acc, s) => acc + (s.findings.critical || 0), 0)
};
