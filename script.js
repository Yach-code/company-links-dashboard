const linkData = [
    {
        title: "EIP Employee Portal",
        description: "Main portal for internal announcements, forms, and administrative tasks.",
        url: "https://eip.example.com",
        category: "hr",
        env: "formal",
        icon: "📅"
    },
    {
        title: "Production Dashboard",
        description: "Real-time metrics and monitoring for the production environment.",
        url: "https://dash.example.com",
        category: "production",
        env: "formal",
        icon: "📈"
    },
    {
        title: "GitLab Repository",
        description: "Main source code management and deployment pipelines.",
        url: "https://gitlab.example.com",
        category: "development",
        env: "formal",
        icon: "🦊"
    },
    {
        title: "Jira Issue Tracking",
        description: "Project management, sprint planning, and bug tracking.",
        url: "https://jira.example.com",
        category: "tools",
        env: "formal",
        icon: "📝"
    },
    {
        title: "UAT EIP Portal",
        description: "Testing environment for new employee portal features.",
        url: "https://uat-eip.example.com",
        category: "hr",
        env: "uat",
        icon: "🧪"
    },
    {
        title: "UAT Metrics Dash",
        description: "Monitoring for the UAT testing environment.",
        url: "https://uat-dash.example.com",
        category: "production",
        env: "uat",
        icon: "📊"
    },
    {
        title: "UAT GitLab Runner",
        description: "Testing for GitLab CI/CD pipeline automation.",
        url: "https://uat-gitlab.example.com",
        category: "development",
        env: "uat",
        icon: "🧪"
    },
    {
        title: "UAT Jira Sandbox",
        description: "Sandbox environment for trying out new project management flows.",
        url: "https://uat-jira.example.com",
        category: "tools",
        env: "uat",
        icon: "🏗️"
    },
    {
        title: "Confluence Docs",
        description: "Technical documentation and architecture blueprints.",
        url: "https://confluence.example.com",
        category: "tools",
        env: "formal",
        icon: "📚"
    },
    {
        title: "AWS Console",
        description: "Cloud infrastructure management and settings.",
        url: "https://aws.amazon.com/console",
        category: "production",
        env: "formal",
        icon: "☁️"
    },
    {
        title: "HR Expense System",
        description: "Submit reimbursement claims and corporate expenses.",
        url: "https://expenses.example.com",
        category: "hr",
        env: "formal",
        icon: "💰"
    },
    {
        title: "UAT Expense System",
        description: "Testing the new expense workflow for the next release.",
        url: "https://uat-expenses.example.com",
        category: "hr",
        env: "uat",
        icon: "🧪"
    }
];

const formalGrid = document.getElementById('formalGrid');
const uatGrid = document.getElementById('uatGrid');
const searchInput = document.getElementById('searchInput');

function createCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.className = 'link-card';
    card.setAttribute('data-category', link.category);
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    card.innerHTML = `
        <div class="link-header">
            <div class="link-icon">${link.icon}</div>
            <div class="link-title">${link.title}</div>
        </div>
        <div class="link-desc">${link.description}</div>
        <div class="link-footer">
            <span class="link-tag">${link.category}</span>
            <span class="link-url">
                Open Link
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </span>
        </div>
    `;
    return card;
}

function renderLinks(links) {
    formalGrid.innerHTML = '';
    uatGrid.innerHTML = '';
    
    const filteredFormal = links.filter(l => l.env === 'formal');
    const filteredUat = links.filter(l => l.env === 'uat');

    if (filteredFormal.length === 0 && filteredUat.length === 0) {
        formalGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--text-secondary); padding: 40px;">
                No links found matching your search.
            </div>
        `;
        return;
    }

    filteredFormal.forEach(link => formalGrid.appendChild(createCard(link)));
    filteredUat.forEach(link => uatGrid.appendChild(createCard(link)));

    // Handle empty group headers (optional)
    if (filteredFormal.length === 0) {
        formalGrid.innerHTML = '<div class="empty-msg">No formal links found.</div>';
    }
    if (filteredUat.length === 0) {
        uatGrid.innerHTML = '<div class="empty-msg">No UAT links found.</div>';
    }
}

// Initial render
renderLinks(linkData);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredLinks = linkData.filter(link => 
        link.title.toLowerCase().includes(searchTerm) || 
        link.description.toLowerCase().includes(searchTerm) ||
        link.category.toLowerCase().includes(searchTerm)
    );
    
    renderLinks(filteredLinks);
});
