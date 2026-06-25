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

    {
        slug: "compressor",
        num: "04",
        name: "COMPRESSOR",
        tagline:
            "Lossless data compressor built in C implementing a full BWT + MTF + Huffman pipeline — the same algorithm family used by bzip2. Compresses a 2000KB text file down to 30KB with no external libraries.",
        fastline: "bzip2-style compressor in C",
        stack: ["C"],
        about: [
            "Implements the Burrows-Wheeler Transform as the first stage, which rearranges the input into a form that clusters repeated characters together without losing any information — making the data significantly more compressible by subsequent stages.",
            "Move-to-Front encoding follows the BWT stage, exploiting the locality of reference introduced by the transform: recently seen symbols are assigned small integer codes, so the output skews heavily toward low values which Huffman coding can then encode very efficiently.",
            "Huffman coding forms the final compression stage, building an optimal prefix-free code tree from symbol frequencies in the MTF output and encoding each symbol with a variable-length bitstring — common symbols get short codes, rare ones get long ones.",
            "The three-stage pipeline mirrors the core algorithm family behind bzip2, one of the most widely used lossless compression formats, implemented here from scratch in C with no external libraries or compression primitives.",
            "Achieved 98.5% compression on a 2000KB plain text file, reducing it to 30KB — demonstrating that the pipeline is correctly exploiting the statistical structure of natural language text across all three stages.",
            "Built as a CLI tool that takes an input file and writes the compressed output, with a corresponding decompression path that reverses the Huffman, MTF, and BWT stages in sequence to recover the original file exactly.",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/arnavsaxena62/Compressor",
            },
        ],
        highlights: [
            { label: "Algorithm", value: "BWT + MTF + Huffman" },
            { label: "Language", value: "C" },
            { label: "Compression", value: "2000KB → 30KB" },
            { label: "Status", value: "Complete" },
        ],
        images: [],
    },

    {
        slug: "commitcast",
        num: "05",
        name: "COMMITCAST",
        tagline:
            "Automated pipeline that fetches your GitHub commit activity each morning, summarizes raw diffs using a two-stage LLM pipeline, and delivers ready-to-post tweet drafts to Telegram — building in public without the overhead.",
        fastline: "github activity to tweets via LLM",
        stack: ["Python", "OpenRouter API", "GitHub API", "Telegram Bot API"],
        about: [
            "Fetches PushEvents from the GitHub API going back up to three days, pulling the raw diffs for each commit rather than just the commit messages — which are often too terse or developer-shorthand to be useful as public communication.",
            "First LLM stage summarizes each individual commit diff into a plain-English sentence describing what actually changed, stripping away the noise of line-level diffs and translating implementation details into something a technical audience can understand at a glance.",
            "Second LLM stage groups the per-commit summaries by repository and date, then generates one to three tweet draft options per group using a persona prompt tuned for dry wit and technical specificity — explicitly avoiding hustle-culture phrasing.",
            "Runs on a daily cron job on a home Linux server, firing each morning and delivering that day's drafts to a Telegram channel via the Bot API, so the entire build-in-public workflow requires zero manual effort beyond choosing which draft to post.",
            "Two-stage architecture means the tweet generation stage receives clean semantic summaries rather than raw diffs, producing significantly better output than a single-stage approach that tries to go from code to tweet in one step.",
            "Uses OpenRouter for model access with a free-tier fallback, keeping operating costs near zero while retaining the ability to swap in stronger models for either stage without changing the pipeline logic.",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/arnavsaxena62/commitcast",
            },
        ],
        highlights: [
            { label: "Pipeline", value: "2-stage LLM" },
            { label: "Delivery", value: "Telegram" },
            { label: "Schedule", value: "Daily cron" },
            { label: "Status", value: "Active" },
        ],
        images: [],
    },

    {
        slug: "langanalyzer",
        num: "06",
        name: "LANGANALYZER",
        tagline:
            "Python library that recursively scans a codebase and returns a language breakdown by file size — the same stat GitHub shows on every repository, available locally for any directory.",
        fastline: "github language stats for local directories",
        stack: ["Python"],
        about: [
            "Recursively walks a directory tree and groups every file by extension, accumulating total byte size per language — mirroring exactly the calculation GitHub performs on repository contents to generate its language percentage bar.",
            "Returns a structured dictionary with raw sizes and percentage breakdowns per extension, making it trivial to integrate into other tools, scripts, or reporting pipelines that need to understand the composition of a codebase.",
            "Supports a configurable ignore list that defaults to skipping .git and __pycache__ directories, with the option to extend it to node_modules, build artifacts, or any other directories that would skew the language stats.",
            "Dependency-free by design — the entire library uses only the Python standard library, so it installs without pulling in any transitive dependencies and works in any Python environment without compatibility concerns.",
            "Built as a reusable library rather than a one-off script, with a clean public API that takes a path and optional ignore list and returns a predictable data structure — designed to be imported and used programmatically rather than just run from the command line.",
            "Installable directly from source via pip, making it straightforward to add to any project or virtual environment without needing a PyPI account or package registry setup.",
        ],
        links: [
            {
                label: "GitHub",
                href: "https://github.com/arnavsaxena62/langanalyzer",
            },
        ],
        highlights: [
            { label: "Type", value: "Python Library" },
            { label: "Dependencies", value: "Zero" },
            { label: "Install", value: "pip + source" },
            { label: "Status", value: "Stable" },
        ],
        images: [],
    },
];
