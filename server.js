const express = require('express');
const app = express();
const port = 3000;

// Dynamic data
const teamMember = {
  name: "Alex Chen",
  role: "Lead Cloud Engineer",
  startupIdea: "AI-Powered Logistics",
  pitch: "Our platform uses predictive AI to optimize global supply chains, reducing waste by 40%. Real-time anomaly detection prevents disruptions before they happen.",
  bio: "Ex-Amazon SDE. Built scalable microservices for 10M+ users. MS in Distributed Systems, Stanford. Certified AWS Solutions Architect."
};

app.use(express.static('public'));

app.get('/api/profile', (req, res) => {
  res.json(teamMember);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});