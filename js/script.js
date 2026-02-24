let jobsData = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", status: "NOT APPLIED", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions worldwide." },
    { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", status: "NOT APPLIED", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern seb design trends." },
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", status: "NOT APPLIED", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and stronger analytical thinking." },
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", status: "NOT APPLIED", desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure" },
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", status: "NOT APPLIED", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required." },
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", status: "NOT APPLIED", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities." },
    { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", status: "NOT APPLIED", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included." },
    { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", status: "NOT APPLIED", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects." }
];

let currentTab = 'all';

function updateDashboard() {
    document.getElementById('total-count').innerText = jobsData.length;
    document.getElementById('interview-count').innerText = jobsData.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobsData.filter(j => j.status === 'rejected').length;
}

function renderJobs() {
    const list = document.getElementById('job-list');
    const empty = document.getElementById('empty-state');
    
    let filtered = jobsData;
    if (currentTab !== 'all') {
        filtered = jobsData.filter(j => j.status === currentTab);
    }

    document.getElementById('tab-jobs-count').innerText = `${filtered.length} jobs`;

    if (filtered.length === 0) {
        list.innerHTML = "";
        empty.style.display = "flex";
    } else {
        empty.style.display = "none";
        list.innerHTML = filtered.map(job => `
            <div class="job-card">
                <div class="job-header">
                    <h2 class="company-name">${job.company}</h2>
                    <button class="delete-btn" onclick="deleteJob(${job.id})">
    <img src="picture/trash.png" alt="delete" class="delete-icon">
</button>
                </div>
                <p class="job-position">${job.position}</p>
                <p class="job-details">${job.location} • ${job.type} • ${job.salary}</p>
                <div class="status-badge">${job.status.toUpperCase()}</div>
                <p class="job-description">${job.desc}</p>
                <div class="action-buttons">
                    <button class="btn-interview ${job.status === 'interview' ? 'active' : ''}" onclick="setStatus(${job.id}, 'interview')">INTERVIEW</button>
                    <button class="btn-rejected ${job.status === 'rejected' ? 'active' : ''}" onclick="setStatus(${job.id}, 'rejected')">REJECTED</button>
                </div>
            </div>
        `).join('');
    }
    updateDashboard();
}

function setStatus(id, status) {
    const job = jobsData.find(j => j.id === id);
    job.status = status;
    renderJobs();
}

function deleteJob(id) {
    jobsData = jobsData.filter(j => j.id !== id);
    renderJobs();
}

function changeTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    renderJobs();
}

renderJobs();