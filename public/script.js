document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('/api/profile');
  const data = await response.json();
  
  // Inject dynamic content
  document.getElementById('name').textContent = data.name;
  document.getElementById('role').textContent = data.role;
  document.getElementById('startupIdea').textContent = data.startupIdea;
  document.getElementById('pitch').textContent = data.pitch;
  document.getElementById('bio').textContent = data.bio;
});