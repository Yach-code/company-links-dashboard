const linkData = [
    {
        title: "EIP Employee Portal",
        description: "Main portal for internal annoucements, forms, and administrative tasks.",
        url: "https://eip.example.com",
        category: "hr",
        icon: "📅"
    },
    {
        title: "Production Dashboard",
        description: "Real-time metrics and monitoring for the production environment.",
        url: "https://dash.example.com",
        category: "production",
        icon: "📈"
    },
    {
        title: "GitLab Repository",
        description: "Source code management, CI/CD pipelines, and code reviews.",
        url: "https://gitlab.example.com",
        category: "development",
        icon: "🦊"
    },
    {
        title: "Jira Issue Tracking",
        description: "Project management, sprint planning, and bug tracking.",
        url: "https://jira.example.com",
        category: "tools",
        icon: "📝"
    },
    {
        title: "Confluence Docs",
        description: "Technical documentation, architecture blueprints, and meeting notes.",
        url: "https://confluence.example.com",
        category: "tools",
        icon: "📚"
    },
    {
        title: "AWS Console",
        description: "Cloud infrastructure management and deployment settings.",
        url: "https://aws.amazon.com/console",
        category: "production",
        icon: "☁️"
    },
    {
        title: "Staging Environment",
        description: "Pre-production testing environment for QA and staging releases.",
        url: "https://staging.example.com",
        category: "development",
        icon: "🧪"
    },
    {
        title: "HR Expense System",
        description: "Submit reimbursement claims and manage corporate expenses.",
        url: "https://expenses.example.com",
        category: "hr",
        icon: "💰"
    }
];

const linksGrid = document.getElementById('linksGrid');
const searchInput = document.getElementById('searchInput');

function renderLinks(links) {
    linksGrid.innerHTML = '';
    
    if (links.length === 0) {
        linksGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--text-secondary); padding: 40px;">
                No links found matching your search.
            </div>
        `;
        return;
    }

    links.forEach(link => {
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
        linksGrid.appendChild(card);
    });
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
