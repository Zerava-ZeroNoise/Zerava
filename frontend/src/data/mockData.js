export const mockScans = [
  { id: 1, name: "Scan 1", status: "Completed", date: "2026-01-14" },
  { id: 2, name: "Scan 2", status: "In Progress", date: "2026-01-14" },
];

export const mockDashboardStats = [
  { label: "Total Scans", value: 42 },
  { label: "Completed", value: 30 },
  { label: "In Progress", value: 12 },
];

// Add this for Results.jsx
export const mockResults = [
  { id: 1, scanId: 1, result: "No issues detected" },
  { id: 2, scanId: 2, result: "Vulnerabilities found" },
];
