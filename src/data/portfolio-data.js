export const personalInfo = {
    name: "Senior Software Developer",
    title: "Full Stack Developer & Blockchain Specialist",
    experience: "7+ Years",
    email: "chandrur707@gmail.com",
    github: "https://github.com/Ramachandran-tech-707",
    linkedin: "https://linkedin.com/in/chandru707",
    description: "Passionate Senior Software Developer with 7 years of expertise in building scalable web applications, blockchain solutions, and AI-powered tools. Specialized in creating innovative solutions across multiple domains."
};

export const skills = {
    "Backend & APIs": [
        "Node.js",
        "Express.js",
        "Python (Fast APIs)",
        "Laravel",
        "PHP",
        "REST API"
    ],
    "Frontend Development": [
        "Next.js",
        "JavaScript",
        "HTML",
        "Custom CSS",
        "Responsive Design"
    ],
    "Databases": [
        "MongoDB",
        "MySQL",
        "SQL",
        "Database Design"
    ],
    "Blockchain & Crypto": [
        "NFT Applications",
        "ICO/IEO Platforms",
        "Custom Crypto Payment Gateway",
        "Orderbook/Exchange Apps",
        "Crypto Wallet Generation"
    ],
    "E-commerce & CMS": [
        "E-commerce Applications",
        "WordPress (Basics)",
        "Payment Integration",
        "Shopping Cart Systems"
    ],
    "AI & Automation Tools": [
        "Claude AI",
        "ChatGPT",
        "Gemini AI",
        "Cursor IDE",
        "Replit",
        "n8n Automation",
        "Anti-Gravity"
    ],
    "Web Scraping": [
        "Data Extraction",
        "API Integration",
        "Automation Scripts"
    ],
    "Version Control & Tools": [
        "Git",
        "GitHub/GitLab",
        "Version Control",
        "Docker (Basic Knowledge)",
        "Kubernetes (Basic Knowledge)",
    ],
    '3rd Party APIs & Webhooks': [
        'REST API Integration',
        'Webhook Handling',
        'Payment Gateway APIs',
        'OAuth Authentication',
        'Rate-limit Handling',
        'API Error Handling',
        'JSON/XML Parsing'
    ]
};

export const projects = [
    {
        id: 1,
        title: "Custom Crypto Payment Gateway",
        category: "Blockchain",
        description: "Developed a secure and scalable cryptocurrency payment gateway supporting multiple blockchain networks. Features include real-time transaction monitoring, multi-wallet support, and automated payment processing.",
        technologies: ["Node.js", "Express.js", "MySQL", "Blockchain APIs"],
        highlights: [
            "Multi-currency support",
            "Real-time transaction tracking",
            "Secure wallet integration",
            "Automated reconciliation"
        ]
    },
    {
        id: 2,
        title: "NFT Marketplace Application",
        category: "Blockchain",
        description: "Built a complete NFT marketplace with minting, buying, selling, and auction features. Integrated with major blockchain networks and IPFS for decentralized storage.",
        technologies: ["Next.js", "Node.js", "MySQL", "Smart Contracts"],
        highlights: [
            "NFT minting & trading",
            "Auction system",
            "Wallet integration",
            "IPFS storage"
        ]
    },
    {
        id: 3,
        title: "ICO/IEO Platform",
        category: "Blockchain",
        description: "Comprehensive platform for Initial Coin Offerings and Initial Exchange Offerings with KYC integration, smart contract deployment, and token distribution mechanisms.",
        technologies: ["Node.js", "React", "MySQL", "Smart Contracts"],
        highlights: [
            "KYC/AML integration",
            "Token sale management",
            "Smart contract automation",
            "Investor dashboard"
        ]
    },
    {
        id: 4,
        title: "Crypto Exchange Application",
        category: "Blockchain",
        description: "Full-featured cryptocurrency exchange with orderbook management, real-time trading, and advanced charting capabilities. Supports limit, market, and stop-loss orders.",
        technologies: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
        highlights: [
            "Real-time orderbook",
            "Trading engine",
            "Advanced charting",
            "Liquidity management"
        ]
    },
    {
        id: 5,
        title: "Enterprise E-commerce Platform",
        category: "E-commerce",
        description: "Scalable e-commerce solution with inventory management, payment gateway integration, and advanced analytics. Handles thousands of products and concurrent users.",
        technologies: ["Next.js", "Node.js", "Mongo DB", "Payment APIs"],
        highlights: [
            "Multi-vendor support",
            "Inventory management",
            "Payment integration",
            "Analytics dashboard"
        ]
    },
    {
        id: 6,
        title: "Universal Crypto Wallet Generator",
        category: "Blockchain",
        description: "Node.js-based tool for generating crypto wallet addresses across multiple blockchain networks. Supports Bitcoin, Ethereum, and various altcoins with hierarchical deterministic wallet support.",
        technologies: ["Node.js", "Cryptography", "Blockchain SDKs"],
        highlights: [
            "Multi-chain support",
            "HD wallet generation",
            "Secure key management",
            "Batch processing"
        ]
    },
    {
        id: 7,
        title: "AI-Powered Automation Platform",
        category: "AI & Automation",
        description: "Integrated n8n workflows with AI tools (Claude, ChatGPT, Gemini) to create no-code automation solutions. Streamlined business processes and reduced manual work by 70%.",
        technologies: ["n8n", "Node.js", "AI APIs", "REST APIs"],
        highlights: [
            "No-code workflows",
            "AI integration",
            "Process automation",
            "Custom integrations"
        ]
    },
    {
        id: 8,
        title: "Web Scraping & Data Platform",
        category: "Web Scraping",
        description: "Advanced web scraping solution for extracting and processing large-scale data from multiple sources. Features anti-detection mechanisms and intelligent data parsing.",
        technologies: ["Node.js", "PHP", "JAVASCRIPT", "MongoDB", "REST API"],
        highlights: [
            "Large-scale scraping",
            "Anti-detection",
            "Data normalization",
            "API endpoints"
        ]
    },
    {
        id: 9,
        title: "Universal Wallet Connector System",
        category: "Blockchain",
        description: "Developed a universal wallet connection system supporting all major crypto wallets using WalletConnect and direct SDK integrations. Designed for seamless plug-and-play integration across DeFi, NFT, and Exchange applications.",
        technologies: [
            "Next.js",
            "Node.js",
            "WalletConnect v2",
            "Ethers.js",
            "Web3.js"
        ],
        walletIntegrations: {
            supported: true,
            connectionType: ["WalletConnect v2", "Injected Providers"],
            wallets: [
                "MetaMask",
                "WalletConnect (300+ wallets)",
                "Coinbase Wallet",
                "Trust Wallet",
                "Rainbow",
                "Ledger",
                "Trezor"
            ],
            features: [
                "Universal wallet modal",
                "Multi-chain support",
                "Auto network switching",
                "Session persistence",
                "Secure disconnect handling"
            ]
        },
        highlights: [
            "All-wallet compatibility",
            "Reusable wallet adapter",
            "Production-ready security",
            "Multi-chain architecture"
        ]
    }
];

export const experience = [
    {
        id: 1,
        position: "Senior Software Developer",
        company: "Current Position",
        duration: "7+ Years Total Experience",
        responsibilities: [
            "Lead development of blockchain applications including NFT platforms, ICO/IEO systems, and crypto payment gateways",
            "Architected and deployed scalable e-commerce solutions handling high traffic and transaction volumes",
            "Developed custom crypto wallet generation systems supporting multiple blockchain networks",
            "Implemented AI-powered automation using Claude, ChatGPT, Gemini AI, and n8n workflows",
            "Built RESTful APIs and microservices using Node.js, Express.js, and Laravel",
            "Managed databases (MongoDB, MySQL) with optimization for high-performance applications",
            "Integrated web scraping solutions for data extraction and processing",
            "Utilized modern development tools: Cursor IDE, Bolt AI, Replit, Anti-Gravity for rapid development",
            "Maintained version control and collaborated using Git, GitHub, and GitLab"
        ]
    }
];

export const services = [
    {
        icon: "⚡",
        title: "Full Stack Development",
        description: "End-to-end web application development using Next.js, Node.js, Express.js, Python (Fast APIs) and modern frameworks"
    },
    {
        icon: "🔗",
        title: "Blockchain Solutions",
        description: "NFT platforms, ICO/IEO systems, crypto payment gateways, and exchange applications"
    },
    {
        icon: "🛒",
        title: "E-commerce Development",
        description: "Custom e-commerce platforms with payment integration, inventory management, and analytics"
    },
    {
        icon: "💰",
        title: "Crypto Wallet Services",
        description: "Multi-chain wallet generation and management for Bitcoin, Ethereum, and altcoins"
    },
    {
        icon: "🤖",
        title: "AI Integration",
        description: "AI-powered automation using Claude, ChatGPT, Gemini, and no-code tools like n8n"
    },
    {
        icon: "🔍",
        title: "Web Scraping",
        description: "Advanced data extraction and processing solutions with intelligent parsing"
    },
    {
        icon: "🎨",
        title: "Custom Development",
        description: "Tailored solutions using cutting-edge tools: Cursor IDE, Bolt AI, Replit, Anti-Gravity"
    },
    {
        icon: "📊",
        title: "Database Design",
        description: "Optimized database architecture using MongoDB, MySQL, and SQL for scalable applications"
    }
];