// ==========================================
// StartGuesser - Guess the Startup Game
// ==========================================

const STARTUPS = [
    {
        name: "Stripe",
        aliases: ["stripe"],
        hint: "This fintech company processed $1.4 trillion in payments volume in 2024.",
        category: "Fintech",
        html: `
            <div class="lp" style="background:#fff;position:relative;overflow:hidden;">
                <div style="position:absolute;top:-80px;right:-120px;width:500px;height:500px;background:radial-gradient(circle at 30% 40%, #80ecff 0%, #7b61ff 25%, #ff6fb5 50%, #ffd194 75%, transparent 100%);opacity:0.35;filter:blur(60px);"></div>
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#635bff;font-weight:800;">████</div>
                    <div class="lp-nav-links">
                        <span>Products</span>
                        <span>Solutions</span>
                        <span>Developers</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Contact sales</span>
                        <span style="font-size:13px;color:#555;">Sign in</span>
                    </div>
                </div>
                <div class="lp-hero" style="align-items:flex-start;text-align:left;padding-left:64px;padding-right:200px;">
                    <h1 style="font-size:54px;letter-spacing:-2.5px;color:#0a2540;line-height:1.08;">Financial infrastructure to grow your revenue</h1>
                    <p style="color:#425466;max-width:520px;text-align:left;">Accept payments, offer financial services and implement custom revenue models — from your first transaction to your billionth.</p>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <button class="lp-cta" style="background:#635bff;color:#fff;border-radius:20px;">Get started →</button>
                        <button class="lp-cta" style="background:#fff;color:#0a2540;border:1px solid #e0e0e0;border-radius:20px;">Contact sales →</button>
                    </div>
                </div>
                <div class="lp-social-proof" style="justify-content:flex-start;padding-left:64px;gap:32px;">
                    <span style="font-weight:700;color:#aaa;font-size:11px;letter-spacing:1px;">Amazon</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;letter-spacing:1px;">Anthropic</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;letter-spacing:1px;">Figma</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;letter-spacing:1px;">Uber</span>
                </div>
            </div>
        `
    },
    {
        name: "Notion",
        aliases: ["notion"],
        hint: "This workspace tool now has AI agents and was described as 'Your AI everything app.'",
        category: "Productivity",
        html: `
            <div class="lp" style="background:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="font-weight:700;">████</div>
                    <div class="lp-nav-links">
                        <span>Product</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Request a demo</span>
                        <span style="font-size:13px;color:#555;">Log in</span>
                        <button class="lp-nav-cta" style="background:#000;color:#fff;border-radius:6px;">Get free</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:52px;letter-spacing:-2px;color:#000;">One workspace.<br>Zero busywork.</h1>
                    <p style="color:#6b6b6b;">Your teams and AI agents capture knowledge, find answers, and automate projects. Now a team of 7 feels like 70.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#000;color:#fff;border-radius:6px;">Get free →</button>
                        <button class="lp-cta" style="background:transparent;color:#000;border:1px solid #d4d4d4;border-radius:6px;">Request a demo</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="color:#999;font-size:12px;">Trusted by</span>
                    <span style="font-weight:700;color:#888;font-size:11px;letter-spacing:1px;">Figma</span>
                    <span style="font-weight:700;color:#888;font-size:11px;letter-spacing:1px;">OpenAI</span>
                    <span style="font-weight:700;color:#888;font-size:11px;letter-spacing:1px;">Ramp</span>
                    <span style="font-weight:700;color:#888;font-size:11px;letter-spacing:1px;">Cursor</span>
                    <span style="font-weight:700;color:#888;font-size:11px;letter-spacing:1px;">Vercel</span>
                    <span style="font-weight:700;color:#888;font-size:11px;letter-spacing:1px;">NVIDIA</span>
                </div>
            </div>
        `
    },
    {
        name: "Linear",
        aliases: ["linear"],
        hint: "A purpose-built tool for modern product development, loved by fast-moving teams.",
        category: "Developer Tools",
        html: `
            <div class="lp" style="background:#000;color:#fff;position:relative;overflow:hidden;">
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(ellipse, rgba(94,106,210,0.15) 0%, transparent 70%);"></div>
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:#888;">
                        <span>Product</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                        <span>Customers</span>
                        <span>Now</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#888;">Log in</span>
                        <button class="lp-nav-cta" style="background:rgba(255,255,255,0.1);color:#fff;border-radius:6px;border:1px solid rgba(255,255,255,0.1);">Sign up</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <div class="lp-pill" style="background:rgba(94,106,210,0.15);color:#818cf8;border:1px solid rgba(94,106,210,0.3);">New: Reviews (Beta)</div>
                    <h1 style="font-size:52px;letter-spacing:-2.5px;line-height:1.05;">Plan and build<br>your product</h1>
                    <p style="color:#666;max-width:440px;">A purpose-built tool for modern product development. Streamline issues, projects, and product roadmaps.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#5e6ad2;color:#fff;border-radius:8px;">Start building</button>
                    </div>
                </div>
                <div class="lp-social-proof" style="border-color:rgba(255,255,255,0.06);color:#555;">
                    <span>Powering the world's best product teams</span>
                </div>
            </div>
        `
    },
    {
        name: "Vercel",
        aliases: ["vercel"],
        hint: "The platform behind a famous React framework — 'Build and deploy on the AI Cloud.'",
        category: "Developer Tools",
        html: `
            <div class="lp" style="background:#000;color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">▲ ████</div>
                    <div class="lp-nav-links" style="color:#888;">
                        <span>Products</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#888;">Log In</span>
                        <button class="lp-nav-cta" style="background:#fff;color:#000;border-radius:6px;">Start Deploying</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:58px;letter-spacing:-3px;line-height:1.05;">Build and deploy<br>on the AI Cloud.</h1>
                    <p style="color:#888;max-width:500px;">The developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#fff;color:#000;border-radius:6px;">Start Deploying</button>
                        <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid #333;border-radius:6px;">Get a Demo</button>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Figma",
        aliases: ["figma"],
        hint: "The collaborative design tool with a purple (#4D49FC) accent and a famous multi-color logo.",
        category: "Design",
        html: `
            <div class="lp" style="background:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="display:flex;gap:4px;align-items:center;">
                        <div style="display:flex;gap:2px;">
                            <span style="color:#F24E1E;">●</span><span style="color:#FF7262;">●</span><span style="color:#A259FF;">●</span><span style="color:#1ABCFE;">●</span><span style="color:#0ACF83;">●</span>
                        </div>
                        <span style="filter:blur(8px);user-select:none;font-weight:700;">████</span>
                    </div>
                    <div class="lp-nav-links">
                        <span>Products</span>
                        <span>Solutions</span>
                        <span>Community</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Contact sales</span>
                        <button class="lp-nav-cta" style="background:#000;color:#fff;border-radius:8px;">Get started for free</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:56px;letter-spacing:-2px;color:#000;line-height:1.1;">How you design,<br>align, and build<br>matters.</h1>
                    <p style="color:#6b6b6b;">Design and development teams build great products, together.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#000;color:#fff;border-radius:8px;">Get started for free</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="color:#999;font-size:12px;">Used by</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Microsoft</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Airbnb</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Spotify</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Netflix</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Google</span>
                </div>
            </div>
        `
    },
    {
        name: "Slack",
        aliases: ["slack"],
        hint: "This team messaging platform calls itself 'your team's collective brain.'",
        category: "Communication",
        html: `
            <div class="lp" style="background:#4A154B;color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:#e0c0e0;">
                        <span>Features</span>
                        <span>Solutions</span>
                        <span>Enterprise</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#e0c0e0;">Sign in</span>
                        <button class="lp-nav-cta" style="background:#fff;color:#4A154B;border-radius:4px;font-weight:700;">GET STARTED</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:50px;letter-spacing:-1.5px;line-height:1.1;">Your team's<br>collective brain.</h1>
                    <p style="color:#d8b4e8;">Move faster and work smarter, with people, apps and AI at your side.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#fff;color:#4A154B;border-radius:4px;font-weight:700;">Get started</button>
                        <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:4px;">Find your plan</button>
                    </div>
                </div>
                <div class="lp-features" style="color:#d8b4e8;">
                    <div class="lp-feature"><div class="lp-feature-icon">🚀</div>Plan launches</div>
                    <div class="lp-feature"><div class="lp-feature-icon">📋</div>Run projects</div>
                    <div class="lp-feature"><div class="lp-feature-icon">💬</div>Chat with clients</div>
                    <div class="lp-feature"><div class="lp-feature-icon">🤖</div>Ask an agent</div>
                    <div class="lp-feature"><div class="lp-feature-icon">⚡</div>Automate tasks</div>
                </div>
            </div>
        `
    },
    {
        name: "Shopify",
        aliases: ["shopify"],
        hint: "This e-commerce platform encourages you to 'Be the next big thing.'",
        category: "E-commerce",
        html: `
            <div class="lp" style="background:#000;color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#95bf47;">🛍️ <span style="filter:blur(8px);user-select:none;color:#fff;">████</span></div>
                    <div class="lp-nav-links" style="color:#999;">
                        <span>Solutions</span>
                        <span>Pricing</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#999;">Log in</span>
                        <button class="lp-nav-cta" style="background:#fff;color:#000;border-radius:8px;">Start for free</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:60px;letter-spacing:-3px;line-height:1.05;">Be the next<br>big thing</h1>
                    <p style="color:#999;max-width:440px;">Dream big, build fast, and grow far on the platform where commerce is built.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#fff;color:#000;border-radius:8px;">Start for free</button>
                    </div>
                    <div style="display:flex;gap:20px;margin-top:16px;font-size:12px;color:#666;">
                        <span>✓ No credit card required</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Canva",
        aliases: ["canva"],
        hint: "An Australian design platform that makes graphic design accessible to everyone.",
        category: "Design",
        html: `
            <div class="lp" style="background:linear-gradient(135deg, #7b2ff2 0%, #4c1d95 50%, #2e1065 100%);color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:#d8b4fe;">
                        <span>Design spotlight</span>
                        <span>Business</span>
                        <span>Education</span>
                        <span>Plans and pricing</span>
                    </div>
                    <button class="lp-nav-cta" style="background:#00c4cc;color:#000;border-radius:8px;font-weight:700;">Sign up for free</button>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:52px;letter-spacing:-2px;line-height:1.1;">What will you<br>design today?</h1>
                    <p style="color:#d8b4fe;">The visual communication platform that empowers everyone to design anything and publish anywhere.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#00c4cc;color:#000;border-radius:8px;font-weight:700;">Start designing</button>
                    </div>
                </div>
                <div class="lp-features" style="color:#d8b4fe;">
                    <div class="lp-feature"><div class="lp-feature-icon">📄</div>Presentations</div>
                    <div class="lp-feature"><div class="lp-feature-icon">📱</div>Social media</div>
                    <div class="lp-feature"><div class="lp-feature-icon">🎥</div>Videos</div>
                    <div class="lp-feature"><div class="lp-feature-icon">📋</div>Whiteboards</div>
                    <div class="lp-feature"><div class="lp-feature-icon">🖨️</div>Print</div>
                </div>
            </div>
        `
    },
    {
        name: "Airtable",
        aliases: ["airtable"],
        hint: "This platform is trusted by 500,000 leading teams for AI-powered workflows.",
        category: "Productivity",
        html: `
            <div class="lp" style="background:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo">████</div>
                    <div class="lp-nav-links">
                        <span>Platform</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Book demo</span>
                        <span style="font-size:13px;color:#555;">Sign in</span>
                        <button class="lp-nav-cta" style="background:#166ee1;color:#fff;border-radius:8px;">Get started for free</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:44px;letter-spacing:-1.5px;color:#000;line-height:1.15;">All your teams, all their<br>workflows — connected<br>in one workspace</h1>
                    <p style="color:#555;max-width:520px;">Build AI-powered workflows that unify data, maximize collaboration, and set your teams up for long-term success. No code required.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#166ee1;color:#fff;border-radius:8px;">Get started for free</button>
                        <button class="lp-cta" style="background:transparent;color:#166ee1;border:1px solid #166ee1;border-radius:8px;">Book demo</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="font-size:12px;color:#999;">Trusted by 500,000 leading teams</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">AWS</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Walmart</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">HBO</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Vimeo</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">NBA</span>
                </div>
            </div>
        `
    },
    {
        name: "Loom",
        aliases: ["loom"],
        hint: "Millions of people across 400,000+ companies choose this video messaging tool.",
        category: "Communication",
        html: `
            <div class="lp" style="background:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#625df5;">████</div>
                    <div class="lp-nav-links">
                        <span>Product</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <button class="lp-nav-cta" style="background:#625df5;color:#fff;border-radius:8px;">Get free</button>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:50px;letter-spacing:-2px;color:#000;">One video is worth<br>a thousand words</h1>
                    <p style="color:#666;">Easily record and share AI-powered video messages with your teammates and customers to supercharge productivity.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#625df5;color:#fff;border-radius:8px;">Get free</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="font-size:12px;color:#999;">Millions of people across</span>
                    <span style="font-weight:700;color:#555;">400,000+ companies</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;">HubSpot</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;">Atlassian</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;">Tesla</span>
                    <span style="font-weight:700;color:#aaa;font-size:11px;">Disney</span>
                </div>
            </div>
        `
    },
    {
        name: "Calendly",
        aliases: ["calendly"],
        hint: "The scheduling tool that eliminates the back-and-forth — brand color is #006BFF.",
        category: "Productivity",
        html: `
            <div class="lp" style="background:#f8f9fb;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#006bff;font-weight:800;">████</div>
                    <div class="lp-nav-links">
                        <span>Individuals</span>
                        <span>Teams</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Log in</span>
                        <button class="lp-nav-cta" style="background:#006bff;color:#fff;border-radius:20px;">Get started</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:50px;letter-spacing:-2px;color:#0b3558;">Easy scheduling<br>ahead</h1>
                    <p style="color:#476788;max-width:460px;">Take the work out of connecting with others so you can accomplish more. The scheduling platform for eliminating busywork.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#006bff;color:#fff;border-radius:20px;">Sign up for free</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="font-size:12px;color:#999;">Trusted by top teams</span>
                </div>
            </div>
        `
    },
    {
        name: "Twilio",
        aliases: ["twilio"],
        hint: "This communications API company serves 335,000+ businesses — its brand color is red.",
        category: "Developer Tools",
        html: `
            <div class="lp" style="background:#fff;position:relative;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#f22f46;font-weight:800;">████</div>
                    <div class="lp-nav-links">
                        <span>Products</span>
                        <span>Solutions</span>
                        <span>Why Us</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Login</span>
                        <button class="lp-nav-cta" style="background:#f22f46;color:#fff;border-radius:4px;">Start for free</button>
                    </div>
                </div>
                <div class="lp-hero" style="flex-direction:row;text-align:left;gap:40px;padding:40px 48px;">
                    <div style="flex:1;">
                        <h1 style="font-size:44px;letter-spacing:-1.5px;color:#121c2d;line-height:1.1;">Where amazing customer experiences are built</h1>
                        <p style="color:#555;text-align:left;">Powerful communications APIs combined with AI and first-party data to build customer engagement.</p>
                        <div style="display:flex;gap:12px;margin-top:16px;">
                            <button class="lp-cta" style="background:#f22f46;color:#fff;border-radius:4px;">Start for free</button>
                            <button class="lp-cta" style="background:transparent;color:#f22f46;border:1px solid #f22f46;border-radius:4px;">See what's possible</button>
                        </div>
                        <div style="font-size:11px;color:#888;margin-top:12px;">Free trial · No credit card required</div>
                    </div>
                    <div style="flex:1;display:flex;align-items:center;justify-content:center;">
                        <div style="width:240px;height:180px;background:#f22f46;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:48px;">📞</div>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Miro",
        aliases: ["miro"],
        hint: "A collaborative online whiteboard with brand colors yellow (#fde050) and blue (#3859ff).",
        category: "Productivity",
        html: `
            <div class="lp" style="background:#fff5cc;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#050038;">████</div>
                    <div class="lp-nav-links">
                        <span>Product</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <button class="lp-nav-cta" style="background:#050038;color:#fff;border-radius:8px;">Sign up free</button>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:50px;letter-spacing:-2px;color:#050038;line-height:1.1;">The Visual Workspace<br>for Innovation</h1>
                    <p style="color:#555;max-width:460px;">Where teams come together to design the next big thing. The online collaborative whiteboard for bringing teams together.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#4262ff;color:#fff;border-radius:8px;">Sign up free →</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="font-size:12px;color:#888;">Trusted by 60M+ users worldwide</span>
                </div>
            </div>
        `
    },
    {
        name: "Webflow",
        aliases: ["webflow"],
        hint: "This AI-native platform lets you create sites that drive results — 'Smarter sites start here.'",
        category: "Developer Tools",
        html: `
            <div class="lp" style="background:#f5f5f0;">
                <div class="lp-nav">
                    <div class="lp-logo">████</div>
                    <div class="lp-nav-links">
                        <span>Platform</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Enterprise</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#555;">Login</span>
                        <button class="lp-nav-cta" style="background:#4353ff;color:#fff;border-radius:8px;">Get started</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:56px;letter-spacing:-2.5px;color:#1a1a1a;line-height:1.05;">Smarter sites<br>start here</h1>
                    <p style="color:#555;max-width:500px;">With the AI-native platform, you can create, manage, and optimize personalized web experiences that drive real results — faster than ever.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#4353ff;color:#fff;border-radius:8px;">Get started</button>
                        <button class="lp-cta" style="background:transparent;color:#1a1a1a;border:1px solid #ccc;border-radius:8px;">Talk to sales</button>
                    </div>
                </div>
                <div class="lp-social-proof">
                    <span style="font-size:12px;color:#999;">Trusted by teams at</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">IDEO</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">Monday.com</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">TED</span>
                    <span style="font-weight:700;color:#888;font-size:11px;">DocuSign</span>
                </div>
            </div>
        `
    },
    {
        name: "Intercom",
        aliases: ["intercom"],
        hint: "The AI customer service company — features an AI agent called 'Fin.'",
        category: "Customer Support",
        html: `
            <div class="lp" style="background:#000;color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:#888;">
                        <span>Products</span>
                        <span>Solutions</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#888;">Contact sales</span>
                        <span style="font-size:13px;color:#888;">Sign in</span>
                        <button class="lp-nav-cta" style="background:#fff;color:#000;border-radius:20px;">View demo</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:48px;letter-spacing:-2px;line-height:1.1;">The AI customer<br>service company</h1>
                    <p style="color:#888;max-width:480px;">The highest-performing AI Agent that works with any helpdesk — or the complete suite combining AI with next-generation support.</p>
                    <div style="display:flex;gap:16px;margin-top:8px;">
                        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:20px 24px;text-align:center;">
                            <div style="font-size:16px;font-weight:700;margin-bottom:6px;">Fin AI Agent</div>
                            <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:8px;font-size:13px;">Explore Fin</button>
                        </div>
                        <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:20px 24px;text-align:center;">
                            <div style="font-size:16px;font-weight:700;margin-bottom:6px;">Full Suite</div>
                            <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:8px;font-size:13px;">Explore Suite</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Supabase",
        aliases: ["supabase"],
        hint: "The open-source Postgres platform with 97K+ GitHub stars.",
        category: "Developer Tools",
        html: `
            <div class="lp" style="background:#171717;color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#3ecf8e;">████</div>
                    <div class="lp-nav-links" style="color:#888;">
                        <span>Product</span>
                        <span>Developers</span>
                        <span>Solutions</span>
                        <span>Pricing</span>
                        <span>Docs</span>
                        <span>Blog</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:12px;color:#888;background:rgba(255,255,255,0.06);padding:4px 10px;border-radius:12px;">⭐ 97.3K</span>
                        <span style="font-size:13px;color:#888;">Sign in</span>
                        <button class="lp-nav-cta" style="background:#3ecf8e;color:#000;border-radius:4px;">Start your project</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:50px;letter-spacing:-2px;line-height:1.1;">Build in a weekend.<br>Scale to millions.</h1>
                    <p style="color:#888;max-width:540px;">The Postgres development platform. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#3ecf8e;color:#000;border-radius:4px;">Start your project</button>
                        <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid #444;border-radius:4px;">Request a demo</button>
                    </div>
                </div>
                <div class="lp-social-proof" style="border-color:rgba(255,255,255,0.06);color:#555;">
                    <span style="font-size:12px;">Trusted by fast-growing companies worldwide</span>
                    <span style="font-weight:700;color:#666;font-size:11px;">Mozilla</span>
                    <span style="font-weight:700;color:#666;font-size:11px;">GitHub</span>
                    <span style="font-weight:700;color:#666;font-size:11px;">1Password</span>
                    <span style="font-weight:700;color:#666;font-size:11px;">PwC</span>
                </div>
            </div>
        `
    },
    {
        name: "Wealthfront",
        aliases: ["wealthfront"],
        hint: "This robo-advisor has $90B+ in total assets and 1.3M+ funded clients.",
        category: "Fintech",
        html: `
            <div class="lp" style="background:#1a1a2e;color:#fff;position:relative;overflow:hidden;">
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;height:500px;background:radial-gradient(circle, rgba(100,100,255,0.1) 0%, transparent 70%);"></div>
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:#aaa;">
                        <span>Cash</span>
                        <span>Invest</span>
                        <span>Borrow</span>
                        <span>Learn</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:#aaa;">Log in</span>
                        <button class="lp-nav-cta" style="background:#fff;color:#000;border-radius:6px;">Get started</button>
                    </div>
                </div>
                <div class="lp-hero">
                    <div class="lp-pill" style="background:rgba(100,200,100,0.15);color:#7ce87c;">New welcome offer</div>
                    <h1 style="font-size:46px;letter-spacing:-1.5px;line-height:1.1;">3.95% APY</h1>
                    <p style="color:#aaa;max-width:480px;">Boost your APY when you open and fund a Cash Account. No fees, no strings, and surprisingly few asterisks.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#fff;color:#000;border-radius:6px;">Get started</button>
                        <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid #555;border-radius:6px;">Learn more</button>
                    </div>
                </div>
                <div class="lp-social-proof" style="border-color:rgba(255,255,255,0.06);color:#666;gap:32px;">
                    <span><strong style="color:#fff;">1.3M+</strong> Funded clients</span>
                    <span><strong style="color:#fff;">$90B+</strong> In total assets</span>
                </div>
            </div>
        `
    },
    {
        name: "Datadog",
        aliases: ["datadog"],
        hint: "This monitoring platform's headline is about seeing inside any stack, any app, at any scale.",
        category: "Developer Tools",
        html: `
            <div class="lp" style="background:linear-gradient(135deg, #632ca6 0%, #4a1d8e 50%, #2d1162 100%);color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">🐶 <span style="filter:blur(8px);user-select:none;">████</span></div>
                    <div class="lp-nav-links" style="color:#d8b4fe;">
                        <span>Product</span>
                        <span>Customers</span>
                        <span>Pricing</span>
                        <span>Docs</span>
                    </div>
                    <button class="lp-nav-cta" style="background:#fff;color:#632ca6;border-radius:4px;font-weight:700;">GET STARTED FREE</button>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:46px;letter-spacing:-2px;line-height:1.1;">AI-Powered<br>Observability<br>and Security</h1>
                    <p style="color:#d8b4fe;max-width:480px;">See inside any stack, any app, at any scale, anywhere.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#fff;color:#632ca6;border-radius:4px;">Free trial</button>
                        <button class="lp-cta" style="background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:4px;text-transform:uppercase;font-size:13px;">See the platform</button>
                    </div>
                </div>
                <div class="lp-social-proof" style="border-color:rgba(255,255,255,0.1);color:#b088d8;">
                    <span>Thousands of customers love & trust us</span>
                </div>
            </div>
        `
    },
    {
        name: "Plaid",
        aliases: ["plaid"],
        hint: "This fintech API connects bank accounts to apps — uses a blue-to-turquoise gradient.",
        category: "Fintech",
        html: `
            <div class="lp" style="background:linear-gradient(150deg, #07578C 0%, #0E94D8 50%, #42F0CD 100%);color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:rgba(255,255,255,0.8);">
                        <span>Products</span>
                        <span>Use cases</span>
                        <span>Developers</span>
                        <span>Resources</span>
                        <span>Pricing</span>
                    </div>
                    <div style="display:flex;gap:12px;align-items:center;">
                        <span style="font-size:13px;color:rgba(255,255,255,0.8);">Log in</span>
                        <button class="lp-nav-cta" style="background:rgba(255,255,255,0.2);color:#fff;border-radius:20px;backdrop-filter:blur(4px);">Contact sales</button>
                    </div>
                </div>
                <div class="lp-hero" style="text-align:left;align-items:flex-start;padding-left:64px;">
                    <h1 style="font-size:52px;letter-spacing:-2.5px;line-height:1.05;max-width:550px;">Turn data into revolutionary financial products</h1>
                    <p style="color:rgba(255,255,255,0.8);max-width:460px;text-align:left;">Connect to real-time insights to create fast, safe, and smart financial experiences.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:linear-gradient(90deg,#80f0d0,#fff);color:#07578C;border-radius:20px;font-weight:600;">Talk to our team</button>
                        <button class="lp-cta" style="background:rgba(255,255,255,0.1);color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:20px;">Start building</button>
                    </div>
                </div>
            </div>
        `
    },
    {
        name: "Framer",
        aliases: ["framer"],
        hint: "A website builder with advanced animations — uses Inter, Satoshi, and Switzer fonts.",
        category: "Design",
        html: `
            <div class="lp" style="background:#000;color:#fff;">
                <div class="lp-nav">
                    <div class="lp-logo" style="color:#fff;">████</div>
                    <div class="lp-nav-links" style="color:#888;">
                        <span>Features</span>
                        <span>Pricing</span>
                        <span>Enterprise</span>
                        <span>Gallery</span>
                        <span>Updates</span>
                    </div>
                    <button class="lp-nav-cta" style="background:#fff;color:#000;border-radius:8px;">Start for free</button>
                </div>
                <div class="lp-hero">
                    <h1 style="font-size:60px;letter-spacing:-3px;line-height:1.02;">Start your site with<br>AI. Finish with a<br>designer's touch.</h1>
                    <p style="color:#666;max-width:480px;">Build and publish your site with the speed of AI and the precision of a designer.</p>
                    <div style="display:flex;gap:12px;">
                        <button class="lp-cta" style="background:#fff;color:#000;border-radius:8px;">Start for free</button>
                    </div>
                </div>
            </div>
        `
    }
];

// All startup names for autocomplete
const ALL_STARTUP_NAMES = STARTUPS.map(s => s.name);

// ==========================================
// Game State
// ==========================================
let state = {
    currentScreen: 'welcome',
    currentRound: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    hintsUsed: 0,
    hintUsedThisRound: false,
    timeLeft: 60,
    timerInterval: null,
    roundStartTimes: [],
    roundEndTimes: [],
    results: [],       // { startup, guess, correct, hintUsed, timeTaken }
    gameStartups: [],   // 10 shuffled startups for this game
    selectedSuggestion: -1
};

// ==========================================
// DOM Elements
// ==========================================
const $ = id => document.getElementById(id);

const welcomeScreen = $('welcome-screen');
const gameScreen = $('game-screen');
const resultsScreen = $('results-screen');

const startBtn = $('start-btn');
const scoreDisplay = $('score-display');
const streakDisplay = $('streak-display');
const timerDisplay = $('timer-display');
const roundDisplay = $('round-display');
const browserUrl = $('browser-url');
const landingContainer = $('landing-page-container');
const hintBtn = $('hint-btn');
const hintText = $('hint-text');
const guessInput = $('guess-input');
const guessBtn = $('guess-btn');
const suggestionsEl = $('suggestions');
const feedbackOverlay = $('feedback-overlay');
const feedbackIcon = $('feedback-icon');
const feedbackTitle = $('feedback-title');
const feedbackDetail = $('feedback-detail');
const nextBtn = $('next-btn');
const playAgainBtn = $('play-again-btn');

// ==========================================
// Utility
// ==========================================
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function switchScreen(name) {
    [welcomeScreen, gameScreen, resultsScreen].forEach(s => s.classList.remove('active'));
    if (name === 'welcome') welcomeScreen.classList.add('active');
    else if (name === 'game') gameScreen.classList.add('active');
    else if (name === 'results') resultsScreen.classList.add('active');
    state.currentScreen = name;
}

// ==========================================
// Game Logic
// ==========================================
function startGame() {
    state.currentRound = 0;
    state.score = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.hintsUsed = 0;
    state.results = [];
    state.roundStartTimes = [];
    state.roundEndTimes = [];
    state.gameStartups = shuffle(STARTUPS).slice(0, 10);

    updateScoreboard();
    switchScreen('game');
    loadRound();
}

function loadRound() {
    const startup = state.gameStartups[state.currentRound];

    // Reset round state
    state.hintUsedThisRound = false;
    state.timeLeft = 60;
    clearInterval(state.timerInterval);

    // Update UI
    roundDisplay.textContent = state.currentRound + 1;
    hintBtn.disabled = false;
    hintBtn.textContent = 'Need a hint? (-50pts)';
    hintText.textContent = '';
    guessInput.value = '';
    guessInput.focus();
    suggestionsEl.classList.remove('active');
    suggestionsEl.innerHTML = '';
    state.selectedSuggestion = -1;

    // Render landing page
    landingContainer.innerHTML = startup.html;
    landingContainer.className = 'browser-content animate-in';

    // Blurred URL
    browserUrl.innerHTML = '<span class="url-text">████████.com</span>';

    // Start timer
    state.roundStartTimes[state.currentRound] = Date.now();
    timerDisplay.textContent = formatTime(state.timeLeft);
    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        timerDisplay.textContent = formatTime(state.timeLeft);

        if (state.timeLeft <= 10) {
            timerDisplay.parentElement.style.animation = 'pulse 0.5s ease-in-out infinite';
        } else {
            timerDisplay.parentElement.style.animation = '';
        }

        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleGuess() {
    const guess = guessInput.value.trim();
    if (!guess) return;

    clearInterval(state.timerInterval);
    timerDisplay.parentElement.style.animation = '';
    state.roundEndTimes[state.currentRound] = Date.now();

    const startup = state.gameStartups[state.currentRound];
    const isCorrect = startup.aliases.some(a => a === guess.toLowerCase()) ||
                      startup.name.toLowerCase() === guess.toLowerCase();

    const timeTaken = Math.round((state.roundEndTimes[state.currentRound] - state.roundStartTimes[state.currentRound]) / 1000);

    if (isCorrect) {
        const basePoints = 200;
        const streakBonus = state.streak * 50;
        const hintPenalty = state.hintUsedThisRound ? 50 : 0;
        const timeBonus = Math.max(0, Math.floor(state.timeLeft / 2) * 5);
        const pointsEarned = basePoints + streakBonus + timeBonus - hintPenalty;

        state.score += pointsEarned;
        state.streak++;
        if (state.streak > state.bestStreak) state.bestStreak = state.streak;

        state.results.push({ startup: startup.name, guess, correct: true, hintUsed: state.hintUsedThisRound, timeTaken });

        showFeedback('correct', startup.name, `+${pointsEarned} pts (${streakBonus > 0 ? `streak +${streakBonus}, ` : ''}${timeBonus > 0 ? `speed +${timeBonus}` : 'no speed bonus'}${hintPenalty > 0 ? `, hint -${hintPenalty}` : ''})`);
    } else {
        state.streak = 0;
        state.results.push({ startup: startup.name, guess, correct: false, hintUsed: state.hintUsedThisRound, timeTaken });

        showFeedback('wrong', startup.name, `You guessed "${guess}"`);
    }

    updateScoreboard();
}

function handleTimeout() {
    timerDisplay.parentElement.style.animation = '';
    state.roundEndTimes[state.currentRound] = Date.now();

    const startup = state.gameStartups[state.currentRound];
    state.streak = 0;
    state.results.push({ startup: startup.name, guess: '', correct: false, hintUsed: state.hintUsedThisRound, timeTaken: 60 });

    showFeedback('timeout', startup.name, "Time's up!");
    updateScoreboard();
}

function showFeedback(type, startupName, detail) {
    feedbackOverlay.classList.add('active');

    if (type === 'correct') {
        feedbackIcon.textContent = '✅';
        feedbackIcon.className = 'feedback-icon animate-bounce';
        feedbackTitle.textContent = 'Correct!';
        feedbackTitle.className = 'correct-text';
    } else if (type === 'wrong') {
        feedbackIcon.textContent = '❌';
        feedbackIcon.className = 'feedback-icon animate-shake';
        feedbackTitle.textContent = `It was ${startupName}`;
        feedbackTitle.className = 'wrong-text';
    } else {
        feedbackIcon.textContent = '⏰';
        feedbackIcon.className = 'feedback-icon animate-shake';
        feedbackTitle.textContent = `It was ${startupName}`;
        feedbackTitle.className = 'timeout-text';
    }

    feedbackDetail.textContent = detail;
    nextBtn.textContent = state.currentRound < 9 ? 'Next' : 'See Results';
}

function advanceRound() {
    feedbackOverlay.classList.remove('active');
    state.currentRound++;

    if (state.currentRound >= 10) {
        showResults();
    } else {
        loadRound();
    }
}

function useHint() {
    if (state.hintUsedThisRound) return;

    const startup = state.gameStartups[state.currentRound];
    state.hintUsedThisRound = true;
    state.hintsUsed++;
    hintText.textContent = startup.hint;
    hintBtn.disabled = true;
    hintBtn.textContent = 'Hint used';
}

function updateScoreboard() {
    scoreDisplay.textContent = state.score.toLocaleString();
    streakDisplay.textContent = state.streak;
}

// ==========================================
// Autocomplete
// ==========================================
function updateSuggestions() {
    const val = guessInput.value.trim().toLowerCase();
    state.selectedSuggestion = -1;

    if (val.length < 1) {
        suggestionsEl.classList.remove('active');
        suggestionsEl.innerHTML = '';
        return;
    }

    const matches = ALL_STARTUP_NAMES.filter(n => n.toLowerCase().includes(val));

    if (matches.length === 0) {
        suggestionsEl.classList.remove('active');
        suggestionsEl.innerHTML = '';
        return;
    }

    suggestionsEl.innerHTML = matches.slice(0, 6).map((name, i) =>
        `<div class="suggestion-item" data-index="${i}" data-name="${name}">${name}</div>`
    ).join('');
    suggestionsEl.classList.add('active');

    // Click handler
    suggestionsEl.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            guessInput.value = item.dataset.name;
            suggestionsEl.classList.remove('active');
            guessInput.focus();
        });
    });
}

function navigateSuggestions(direction) {
    const items = suggestionsEl.querySelectorAll('.suggestion-item');
    if (items.length === 0) return;

    items.forEach(i => i.classList.remove('selected'));

    if (direction === 'down') {
        state.selectedSuggestion = Math.min(state.selectedSuggestion + 1, items.length - 1);
    } else {
        state.selectedSuggestion = Math.max(state.selectedSuggestion - 1, -1);
    }

    if (state.selectedSuggestion >= 0) {
        items[state.selectedSuggestion].classList.add('selected');
        guessInput.value = items[state.selectedSuggestion].dataset.name;
    }
}

// ==========================================
// Results
// ==========================================
function showResults() {
    switchScreen('results');

    const correctCount = state.results.filter(r => r.correct).length;
    const totalTime = state.results.reduce((sum, r) => sum + r.timeTaken, 0);
    const avgTime = Math.round(totalTime / state.results.length);

    // Title
    const titles = [
        { min: 0, text: "Better luck next time!" },
        { min: 3, text: "Not bad!" },
        { min: 5, text: "Good job!" },
        { min: 7, text: "Impressive!" },
        { min: 9, text: "Startup Expert!" },
        { min: 10, text: "Perfect Score! 🏆" }
    ];
    const title = [...titles].reverse().find(t => correctCount >= t.min).text;

    $('results-title').textContent = title;
    $('final-score').textContent = state.score.toLocaleString();
    $('correct-count').textContent = `${correctCount}/10`;
    $('best-streak').textContent = state.bestStreak;
    $('hints-used').textContent = state.hintsUsed;
    $('avg-time').textContent = `${avgTime}s`;

    // Breakdown
    const breakdownEl = $('results-breakdown');
    breakdownEl.innerHTML = state.results.map(r => {
        const icon = r.correct ? '✅' : (r.timeTaken >= 60 ? '⏰' : '❌');
        const cls = r.correct ? 'correct' : (r.timeTaken >= 60 ? 'timeout' : 'wrong');
        const resultText = r.correct ? 'Correct' : (r.timeTaken >= 60 ? 'Timed out' : 'Wrong');
        const userGuess = !r.correct && r.guess ? ` — guessed "${r.guess}"` : '';
        return `
            <div class="breakdown-item">
                <span class="breakdown-icon">${icon}</span>
                <span class="breakdown-name">${r.startup}</span>
                <span class="breakdown-result ${cls}">${resultText}${userGuess}</span>
            </div>
        `;
    }).join('');
}

// ==========================================
// Event Listeners
// ==========================================
startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', startGame);
guessBtn.addEventListener('click', handleGuess);
hintBtn.addEventListener('click', useHint);
nextBtn.addEventListener('click', advanceRound);

guessInput.addEventListener('input', updateSuggestions);
guessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (state.selectedSuggestion >= 0) {
            const items = suggestionsEl.querySelectorAll('.suggestion-item');
            if (items[state.selectedSuggestion]) {
                guessInput.value = items[state.selectedSuggestion].dataset.name;
            }
        }
        suggestionsEl.classList.remove('active');
        handleGuess();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateSuggestions('down');
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateSuggestions('up');
    } else if (e.key === 'Escape') {
        suggestionsEl.classList.remove('active');
    }
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.input-wrapper')) {
        suggestionsEl.classList.remove('active');
    }
});
