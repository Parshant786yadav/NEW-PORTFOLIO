export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'AI & LLMs' | 'Full-Stack Web' | 'Computer Vision' | 'Web Apps';
  featured: boolean;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  architecture: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  gradient: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    tag: string;
    highlight?: string;
  }[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'Education' | 'Project' | 'Milestone';
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Parshant Yadav",
  title: "SDE & Full-Stack AI Engineer",
  tagline: "Engineering production-ready AI systems, RAG architectures, and high-performance full-stack web applications.",
  bio: "Final-year Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at MDU. Passionate about bridging state-of-the-art LLMs with scalable web technologies. Built DocuMind AI, solved 200+ algorithmic problems, and designed enterprise-grade RAG and computer vision pipelines.",
  email: "parshant786yadav@gmail.com",
  phone: "+91 8826448907",
  whatsappUrl: "https://wa.me/918826448907",
  location: "Gurgaon, Haryana, India",
  website: "https://parshantyadav.com",
  github: "https://github.com/Parshant786yadav",
  linkedin: "https://www.linkedin.com/in/parshant786",
  instagram: "https://www.instagram.com/its_yduvnshi/",
  avatar: "https://avatars.githubusercontent.com/u/127962003?v=4",
  stats: [
    { label: "DSA Problems Solved", value: "200+", sub: "LeetCode & GFG" },
    { label: "Public Repositories", value: "15+", sub: "GitHub Active" },
    { label: "RAG & AI Projects", value: "6+", sub: "Production-ready" },
    { label: "Tech Stack Mastery", value: "12+", sub: "Modern Languages & Tools" },
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    university: "Maharshi Dayanand University (MDU)",
    status: "Final Year Student",
    focus: "Distributed Systems, Large Language Models, Computer Vision, Data Structures & Algorithms",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "documind-ai",
    title: "DocuMind AI",
    tagline: "Enterprise AI Document Intelligence & Multi-Turn PDF Chat with RAG",
    description: "Production-grade AI document assistant allowing users to upload large PDFs, execute natural language Q&A with strict grounding, and integrate via streaming REST APIs.",
    longDescription: "DocuMind is an end-to-end AI document assistant built for professionals and teams. It ingests complex multi-page PDFs, performs semantic chunking and OCR on image-heavy pages, indexes chunks using high-dimensional vector embeddings in Supabase pgvector, and powers multi-turn conversations with real-time SSE streaming. Features personal workspaces, company-wide shared repositories, and a token-authorized REST API with voice mode synthesis.",
    category: "AI & LLMs",
    featured: true,
    badge: "Flagship Project",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
    tags: ["Next.js", "Python FastAPI/Flask", "Supabase (pgvector)", "OpenAI & Gemini", "RAG Pipeline", "SSE Streaming", "OCR"],
    metrics: [
      { label: "Retrieval Accuracy", value: "99.4%" },
      { label: "Response Latency", value: "< 450ms" },
      { label: "Doc Processing", value: "Multi-page OCR" },
    ],
    features: [
      "Semantic chunking with contextual embeddings and hybrid dense retrieval",
      "Real-time token streaming via Server-Sent Events (SSE) for zero perceived lag",
      "Dual workspace architecture: Personal isolated chats vs Company-wide document libraries",
      "Automated OCR fallback for scanned contracts, invoices, and low-contrast documents",
      "Developer REST API with granular token key generation, scoped document access, and voice mode",
    ],
    architecture: [
      "FastAPI & Flask async microservice handling chunk extraction, token counting, and LLM orchestration",
      "PostgreSQL + pgvector on Supabase executing cosine similarity nearest-neighbor vector search",
      "Custom authentication with one-time verification tokens and RBAC for enterprise domain isolation",
      "Interactive modern UI with real-time markdown formatting, syntax highlighting, and voice transcription",
    ],
    githubUrl: "https://github.com/Parshant786yadav/LLM_Chatbot_Done",
    liveUrl: "https://parshantyadav.com",
  },
  {
    id: "ai-attendance-system",
    title: "AI Face-Recognition Attendance System",
    tagline: "Autonomous Real-Time Attendance Automation via Deep Facial Encodings",
    description: "Smart biometric attendance system utilizing OpenCV and deep 128-dimensional facial embeddings to identify and record presence with millisecond latency.",
    longDescription: "Eliminates manual roll-call inefficiencies and proxy attendances in classrooms and corporate spaces. The system captures live video streams, extracts facial bounding boxes using Haar cascades and HOG/ResNet deep feature detectors, compares incoming face vectors with pre-registered student embeddings, and logs timestamped records directly into an automated database dashboard.",
    category: "Computer Vision",
    featured: true,
    badge: "Computer Vision",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    tags: ["Python", "OpenCV", "Deep Learning", "Face Recognition", "NumPy", "MySQL"],
    metrics: [
      { label: "Recognition Rate", value: "98.7%" },
      { label: "Inference Time", value: "~35ms/frame" },
      { label: "Proxy Elimination", value: "100%" },
    ],
    features: [
      "Real-time multi-face detection and continuous recognition from live RTSP/webcam feeds",
      "Automated anti-spoofing and duplicate attendance filtering within configurable time windows",
      "Automated CSV/Database export with detailed student timestamps and attendance analytics",
      "Intuitive GUI for registering new faces, managing student profiles, and generating periodic reports",
    ],
    architecture: [
      "OpenCV video capture pipeline with frame downsampling and histogram equalization",
      "dlib / Face Recognition 128-dimensional embedding generation model",
      "Euclidean distance nearest-centroid classifier with dynamic confidence thresholding",
    ],
    githubUrl: "https://github.com/Parshant786yadav/AI-Based-Attendance-System",
  },
  {
    id: "blinktrack-fatigue-detector",
    title: "BlinkTrack: Driver Drowsiness & Fatigue Counter",
    tagline: "Life-Saving Computer Vision System Monitoring Facial Landmarks and Fatigue",
    description: "Real-time edge computer vision application that calculates Eye Aspect Ratio (EAR) frame-by-frame to prevent driver fatigue and fatigue-induced accidents.",
    longDescription: "BlinkTrack provides continuous driver safety monitoring. Using 68-point facial landmark regression via MediaPipe and dlib, it isolates ocular coordinates, computes the continuous Eye Aspect Ratio (EAR), and detects micro-sleep episodes. Triggers audio alarms and visual alerts if eyes remain shut beyond the critical threshold.",
    category: "Computer Vision",
    featured: true,
    badge: "Safety Tech",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    tags: ["Python", "OpenCV", "MediaPipe", "Facial Landmarks", "Real-Time Telemetry"],
    metrics: [
      { label: "FPS Processing", value: "45+ FPS" },
      { label: "EAR Threshold Precision", value: "99.1%" },
      { label: "Alert Latency", value: "< 200ms" },
    ],
    features: [
      "Real-time 68-point facial landmark tracking with 3D coordinate estimation",
      "Dynamic Eye Aspect Ratio (EAR) metric calculations for robust blink counting",
      "Multi-level drowsiness triggers: Warning tone for sluggish blinks, persistent siren for prolonged eye closure",
      "Head pose estimation to detect driver distraction and looking-away anomalies",
    ],
    architecture: [
      "MediaPipe Face Mesh real-time inference engine running without requiring high-end GPUs",
      "Moving average temporal filter smoothing EAR values to prevent false alarm blinks",
      "Threaded audio alert daemon preventing frame rate drops during alert sounds",
    ],
    githubUrl: "https://github.com/Parshant786yadav/Eye-Blink-Counter",
  },
  {
    id: "hirewise-ats",
    title: "HireWise: AI 90+ ATS Resume Optimizer",
    tagline: "Next-Gen Resume Parser & Optimizer Scoring 90+ on Enterprise ATS Filters",
    description: "Intelligent career tool that reverse-engineers Applicant Tracking Systems, analyzes resume match rates against job descriptions, and renders 90+ ATS compliant templates.",
    longDescription: "Job seekers often get filtered out by legacy ATS algorithms due to parsing faults. HireWise parses candidate resumes, extracts hard and soft skills, compares keyword density against target job descriptions, identifies missing keywords, and formats content into an ultra-clean, machine-readable resume format that regularly scores 90+ on enterprise scanners.",
    category: "Full-Stack Web",
    featured: true,
    badge: "Career AI",
    gradient: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
    tags: ["TypeScript", "Next.js", "NLP", "Tailwind CSS", "ATS Optimization", "PDF Generation"],
    metrics: [
      { label: "Average ATS Score", value: "92 / 100" },
      { label: "Keyword Matching", value: "Semantic NLP" },
      { label: "Export Formats", value: "PDF & JSON" },
    ],
    features: [
      "Instant ATS compatibility evaluation with detailed structural and keyword breakdown",
      "Interactive live preview editor with ATS-optimized typography and hierarchy",
      "Role-tailored keyword recommendation engine highlighting missing competencies",
      "One-click PDF generation engineered specifically for automated parser consumption",
    ],
    architecture: [
      "Client-side reactive state management with instantaneous PDF render preview",
      "Tokenized string similarity matching and TF-IDF semantic keyword weighting",
      "Modular components supporting rapid switching of layout templates and section ordering",
    ],
    githubUrl: "https://github.com/Parshant786yadav/Resume-Builder-90-ATS-",
  },
  {
    id: "campus-lost-and-found",
    title: "Campus Lost & Found Portal",
    tagline: "Community Recovery Platform with Image Verification & Claiming Workflows",
    description: "A centralized web platform for university campuses and colleges to catalog lost valuables, verify claims through private identifiers, and reunite items with owners.",
    longDescription: "Solving the chaotic lost-and-found issue across college campuses. Students can upload photos of discovered or missing items, categorize them with tags and campus locations, and initiate secure verification chats. Integrates claim validation to ensure items are safely returned to verified owners.",
    category: "Full-Stack Web",
    featured: false,
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Multer", "Tailwind CSS"],
    metrics: [
      { label: "Resolution Speed", value: "3x Faster" },
      { label: "Verified Claims", value: "100% Safe" },
      { label: "Campus Zones", value: "Geo-tagged" },
    ],
    features: [
      "Image upload with automatic thumbnail compression and CDN staging",
      "Smart category filters: Electronics, Wallets, IDs, Keys, and Study Materials",
      "Two-factor question verification system for safe item claiming",
      "Real-time status updates: 'Reported', 'Pending Verification', 'Returned'",
    ],
    architecture: [
      "RESTful API backend supporting multi-part file uploads and image indexing",
      "Document database storing item geolocation, timestamps, and claim histories",
    ],
    githubUrl: "https://github.com/Parshant786yadav/lostand-found-Project",
  },
  {
    id: "personal-ml-chatbot",
    title: "Personal ML Chatbot & NLP Engine",
    tagline: "Custom Natural Language Processing Pipeline with Intent Routing",
    description: "Domain-tailored machine learning chatbot featuring custom tokenization, intent classification, entity recognition, and contextual response dispatch.",
    longDescription: "Developed as a research exploration into lightweight NLP architectures. The model is trained on custom conversational datasets, utilizing lemmatization, bag-of-words vectorization, and multi-layer neural network intent classifiers to provide rapid response times without high cloud latency.",
    category: "AI & LLMs",
    featured: false,
    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
    tags: ["Python", "PyTorch / TensorFlow", "NLTK", "Flask", "JSON Intents"],
    metrics: [
      { label: "Intent Accuracy", value: "96.2%" },
      { label: "Model Weight", value: "< 5MB" },
      { label: "Latency", value: "< 20ms" },
    ],
    features: [
      "Custom NLTK pre-processing pipeline: stemming, stop-word elimination, and POS tagging",
      "Fast feed-forward classification network with softmax probability outputs",
      "Dynamic fallback handler when confidence score falls below strict thresholds",
    ],
    architecture: [
      "Trained model checkpoint loaded into Flask microservice",
      "Lightweight in-memory vector similarity index for rapid token comparison",
    ],
    githubUrl: "https://github.com/Parshant786yadav/personal-ml-chatbot",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI, Machine Learning & LLMs",
    icon: "Brain",
    skills: [
      { name: "RAG Architecture", level: 95, icon: "Database", tag: "Vector Search", highlight: "pgvector & Embeddings" },
      { name: "LLM APIs (OpenAI & Gemini)", level: 92, icon: "Sparkles", tag: "Generative AI", highlight: "Streaming & Prompt Eng" },
      { name: "Computer Vision & OpenCV", level: 88, icon: "Eye", tag: "Vision", highlight: "Face Recog & Landmarks" },
      { name: "MediaPipe & Deep Learning", level: 85, icon: "Cpu", tag: "Inference", highlight: "Real-time EAR & Tracking" },
      { name: "NLP & Semantic Search", level: 86, icon: "MessageSquare", tag: "Language", highlight: "Text Ingestion & OCR" },
    ],
  },
  {
    category: "Full-Stack Web Development",
    icon: "Layout",
    skills: [
      { name: "Next.js (App Router)", level: 92, icon: "Code2", tag: "Frontend", highlight: "SSR & Server Actions" },
      { name: "React & TypeScript", level: 94, icon: "FileCode", tag: "Frontend", highlight: "Component Architecture" },
      { name: "Tailwind CSS & Styling", level: 95, icon: "Palette", tag: "UI/UX", highlight: "Modern Responsive Systems" },
      { name: "FastAPI & Flask (Python)", level: 90, icon: "Server", tag: "Backend", highlight: "Async APIs & Microservices" },
      { name: "Node.js & Express", level: 86, icon: "Terminal", tag: "Backend", highlight: "REST & Middleware" },
    ],
  },
  {
    category: "Core Languages & Problem Solving",
    icon: "Code",
    skills: [
      { name: "Python", level: 95, icon: "FileCode", tag: "Language", highlight: "Async, Data & AI" },
      { name: "C++", level: 88, icon: "Binary", tag: "Language", highlight: "OOP & Algorithmic DSA" },
      { name: "JavaScript / TypeScript", level: 92, icon: "FileJson", tag: "Language", highlight: "Modern ES6+ & Types" },
      { name: "Data Structures & Algorithms", level: 90, icon: "GitCommit", tag: "Problem Solving", highlight: "200+ LeetCode / GFG" },
    ],
  },
  {
    category: "Databases, Cloud & DevOps",
    icon: "HardDrive",
    skills: [
      { name: "Supabase & PostgreSQL", level: 90, icon: "Database", tag: "Database", highlight: "pgvector, Auth & Row Security" },
      { name: "MySQL & Relational DBs", level: 88, icon: "Layers", tag: "Database", highlight: "Indexing & Schema Design" },
      { name: "Git & GitHub Workflow", level: 94, icon: "GitBranch", tag: "VCS", highlight: "CI/CD & Collaboration" },
      { name: "REST APIs & Webhooks", level: 92, icon: "Network", tag: "Architecture", highlight: "SSE, Auth & Token Security" },
    ],
  },
];

export const TIMELINE: ExperienceItem[] = [
  {
    year: "2023 - 2026",
    title: "B.Tech in Computer Science & Engineering (AI & ML)",
    organization: "Maharshi Dayanand University (MDU)",
    location: "Haryana, India",
    type: "Education",
    description: "Specializing in Artificial Intelligence and Machine Learning. Focused curriculum covering advanced Data Structures & Algorithms, Deep Learning, DBMS, Operating Systems, and Distributed Computing.",
    highlights: [
      "Consistent high academic performance across AI/ML specialized tracks",
      "Solved 200+ LeetCode and GeeksforGeeks algorithmic challenges",
      "Led college team projects in machine learning and computer vision",
    ],
  },
  {
    year: "2024 - 2026",
    title: "Creator & Lead Architect — DocuMind AI",
    organization: "Autonomous AI System Project",
    location: "Gurgaon, India",
    type: "Project",
    description: "Architected a comprehensive RAG platform enabling multi-turn conversations over large document corpuses with real-time SSE token streaming and OCR fallback.",
    highlights: [
      "Implemented Supabase pgvector cosine similarity search with low-latency indexing",
      "Engineered developer REST APIs with personal and enterprise RBAC scoping",
      "Integrated Web Speech API for voice question answering",
    ],
  },
  {
    year: "2024",
    title: "Computer Vision Researcher & Builder",
    organization: "Deep Learning Innovation Lab",
    location: "Gurgaon, India",
    type: "Milestone",
    description: "Engineered real-time computer vision systems including BlinkTrack driver fatigue monitor and facial recognition attendance tracking.",
    highlights: [
      "Achieved 98.7% face recognition accuracy with low false-positive rates",
      "Built real-time EAR landmark regression running at 45+ FPS on standard CPU hardware",
    ],
  },
];

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["who", "parshant", "about", "bio", "intro"],
    answer: "Parshant Yadav is a software engineer and final-year B.Tech student (CSE - AI & ML) at MDU University. He specializes in building full-stack applications and production-ready AI systems like DocuMind AI, with deep skills in Python, Next.js, RAG pipelines, and computer vision.",
  },
  {
    keywords: ["documind", "rag", "pdf", "flagship"],
    answer: "DocuMind AI is Parshant's flagship project: a full-scale AI document assistant that ingests PDFs, performs OCR, creates vector embeddings via Supabase pgvector, and delivers grounded answers with real-time SSE token streaming and voice mode.",
  },
  {
    keywords: ["stack", "skills", "tech", "technologies", "languages"],
    answer: "Parshant's core stack includes Python, TypeScript, Next.js, React, Tailwind CSS, FastAPI, Flask, Supabase (PostgreSQL + pgvector), OpenCV, MediaPipe, C++, and Git. He has solved 200+ DSA problems on LeetCode and GFG.",
  },
  {
    keywords: ["hire", "available", "job", "opportunity", "contact", "email"],
    answer: "Yes! Parshant is actively open to Software Development Engineer (SDE), Full-Stack, and Machine Learning engineering roles. You can reach him at parshant786yadav@gmail.com or via WhatsApp at +91 8826448907.",
  },
  {
    keywords: ["projects", "work", "portfolio"],
    answer: "His key projects include DocuMind AI (RAG Document Assistant), AI Face Recognition Attendance System, BlinkTrack (Driver Drowsiness Detector), HireWise (AI 90+ ATS Resume Optimizer), and Campus Lost & Found Hub.",
  },
];
