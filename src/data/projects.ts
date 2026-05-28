export interface ProjectData {
    slug: string;
    num: string;
    name: string;
    tagline: string;
    fastline: string;
    stack: string[];
    about: string[];
    links: { label: string; href: string }[];
    images: { src: string; caption: string }[];
    highlights: { label: string; value: string }[];
}

export const ProjectData: ProjectData[] = [
    {
        slug: "promptops",
        num: "01",
        name: "PROMPTOPS",
        tagline:
            "Full-stack prompt engineering workbench,  run prompts across multiple LLMs in parallel, compare outputs side-by-side, and evaluate results with an AI-as-judge pipeline. Includes token tracking, cost estimation, and a versioning system for repeatable experiments.",
        fastline: "prompt versioning tool",
            stack: ["React", "TypeScript", "FastAPI", "Python", "OpenRouter API"],
        about: [
            "Provides a unified workbench to define prompts once and fire them in parallel across any combination of models available through OpenRouter,  including GPT-4o, Claude, Mistral, LLaMA, and others,  without manually switching between interfaces or writing per-model API boilerplate.",
            "Side-by-side comparison view lets you see every model's response to the same prompt simultaneously, making it immediately obvious which models handle your specific use case better in terms of tone, accuracy, format adherence, and reasoning depth.",
            "Structured evaluation system lets you define test cases with expected outputs or criteria, then scores each model response using an AI-as-judge pipeline,  turning subjective 'does this look good' gut checks into repeatable, quantified benchmarks.",
            "Tracks token usage and estimated cost per run per model, so you can make data-driven decisions about which model gives the best quality-to-cost ratio for a given task rather than defaulting to the most expensive option.",
            "Full prompt versioning system lets you iterate on phrasing, system prompts, and formatting without losing previous versions,  so you can A/B test changes, roll back regressions, and build a documented history of what worked and why.",
            "Project-based workflow keeps prompts, test cases, evaluations, and results organized by task domain, making it practical to maintain multiple parallel prompt engineering efforts without everything bleeding together.",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/arnavsaxena62/PromptOps",
            },
        ],
        highlights: [
            { label: "Frontend", value: "React / TS" },
            { label: "Backend", value: "FastAPI" },
            { label: "Models", value: "Multi-LLM" },
            { label: "Status", value: "Active" },
        ],
        images: [
            { src: "/projects/promptops1.png", caption: "Parallel LLM comparison" },
            { src: "/projects/promptops2.png", caption: "Evaluation pipeline" },
        ],
    },

    {
        slug: "pollution-tracker",
        num: "02",
        name: "POLLUTION TRACKER",
        tagline:
            "Reverse-traces pollution sources using a backtracking particle simulation over real wind vectors from the Copernicus CDS API. Motivated by the observation that most urban pollution originates outside the region,  not from local sources.",
        fastline: "pollution tracer through backtracking",
            stack: ["Python", "NumPy", "CDS API"],
        about: [
            "Built around the insight that urban pollution attribution is almost always wrong,  residents and officials blame local factories, traffic, and industry, but atmospheric transport means a significant fraction of what you're breathing originated hundreds of kilometers away.",
            "Instead of simulating pollution spreading forward from a source, it runs the simulation backward: particles are placed at the target region and traced in reverse through the wind field, converging on the geographic origins of the air mass that arrived there.",
            "Wind vector data is pulled directly from the Copernicus Climate Data Store (CDS API),  the same reanalysis dataset used by meteorological agencies,  giving the simulation real atmospheric conditions rather than synthetic or averaged data.",
            "Particle tracking is designed to handle the time-varying nature of wind fields: as you step backward through time, the wind vectors at each grid cell update accordingly, so the trajectories reflect actual synoptic conditions rather than a static snapshot.",
            "The backtracking approach makes the output interpretable in a way forward-dispersion models aren't,  instead of a heatmap of where pollution might spread, you get a map of where it came from, which is directly actionable for policy and attribution.",
            "Planned extensions include visualizing full particle path trajectories on a geographic map, integrating real measured pollution concentration data as input, and improving simulation resolution for finer-grained source attribution.",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/arnavsaxena62/pollution-tracker",
            },
        ],
        highlights: [
            { label: "Algorithm", value: "Backtracking" },
            { label: "Wind Data", value: "CDS API" },
            { label: "License", value: "MIT" },
            { label: "Status", value: "Research" },
        ],
        images: [
            {
                src: "/projects/windtracker.jpg",
                caption: "Backtracked pollution source simulation",
            },
        ],
    },

    {
        slug: "star-map",
        num: "03",
        name: "STAR MAP",
        tagline:
            "Interactive 3D star field renderer built from the BSC5 Yale Bright Star Catalog. Converts stellar polar coordinates to 3D vectors and renders them with accurate per-star colors using VisPy's OpenGL backend, with full turntable navigation.",
        fastline: "star renderer using hubble dataset",
        stack: ["Python", "VisPy", "OpenGL", "BSC5 Dataset"],
        about: [
            "Loads star data from the BSC5 Yale Bright Star Catalog, one of the most complete compiled datasets of naked-eye and near-naked-eye stars, containing positions, magnitudes, and spectral classifications for nearly 9,100 stars.",
            "Converts each star's right ascension and declination,  the standard spherical coordinate system used in astronomy,  into 3D Cartesian vectors, placing every star at its correct position on the celestial sphere for geometrically accurate spatial rendering.",
            "Star colors are derived from spectral classification data in the catalog, mapping each star's spectral type to its corresponding blackbody RGB value, so the rendered field reflects actual stellar temperatures rather than rendering everything white or arbitrary.",
            "Star data is cached as a pickle file after the initial parse, so subsequent launches skip the catalog parsing step entirely and load the pre-processed vector and color arrays directly into memory for near-instant startup.",
            "Rendering is handled by VisPy's Markers visual, which pushes the entire point cloud to the GPU as a single draw call,  meaning the full catalog of thousands of stars is rendered at stable framerates without per-star Python overhead.",
            "The turntable camera lets you orbit the full celestial sphere freely, zoom in on specific constellations or regions of the sky, and explore the three-dimensional structure of the star distribution from any vantage point.",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/arnavsaxena62/star-map",
            },
        ],
        highlights: [
            { label: "Dataset", value: "BSC5 / Yale" },
            { label: "Renderer", value: "VisPy / OpenGL" },
            { label: "Navigation", value: "Turntable 3D" },
            { label: "Status", value: "Experimental" },
        ],
        images: [
            { src: "/projects/starmap.png", caption: "BSC5 star field render" },
        ],
    },
];