import { useEffect, useRef, useState } from "react";
import "@n8n/chat/style.css";

const skills = [
  { name: "AI / ML", level: 90 },
  { name: "Full Stack Dev", level: 85 },
  { name: "Cloud & DevOps", level: 75 },
  { name: "Data Engineering", level: 80 },
  { name: "Automation", level: 95 },
];

const stats = [
  { label: "PROJECTS", value: "24+" },
  { label: "AUTOMATIONS", value: "50+" },
  { label: "YEARS EXP", value: "5+" },
  { label: "UPTIME", value: "99.9%" },
];

const HUDCorner = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const classes = {
    tl: "top-0 left-0 border-t-2 border-l-2 rounded-tl-sm",
    tr: "top-0 right-0 border-t-2 border-r-2 rounded-tr-sm",
    bl: "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm",
    br: "bottom-0 right-0 border-b-2 border-r-2 rounded-br-sm",
  };
  return (
    <div
      className={`absolute w-4 h-4 border-primary ${classes[position]}`}
    />
  );
};

const ScanLine = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    <div
      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      style={{
        animation: "scan-line 8s linear infinite",
        top: 0,
      }}
    />
  </div>
);

const GridBackground = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0"
    aria-hidden="true"
    style={{
      backgroundImage: `
        linear-gradient(hsl(195 100% 50% / 0.03) 1px, transparent 1px),
        linear-gradient(90deg, hsl(195 100% 50% / 0.03) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />
);

const Index = () => {
  const chatInitialized = useRef(false);
  const [time, setTime] = useState(new Date());
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "SYSTEM ONLINE",
    "AI CORE ACTIVE",
    "NEURAL NET READY",
    "AGENT STANDING BY",
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const si = setInterval(() => {
      setStatusIndex((i) => (i + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(si);
  }, []);

  useEffect(() => {
    if (chatInitialized.current) return;
    chatInitialized.current = true;

    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://dikshaakvean.app.n8n.cloud/webhook/df84d4d3-ce90-496d-9b49-b68287c2bcda/chat",
        mode: "window",
        chatInputKey: "chatInput",
        target: "#n8n-chat",
        initialMessages: [
          "Hello! I'm J.A.R.V.I.S — your personal AI agent.",
          "How can I assist you today?",
        ],
        i18n: {
          en: {
            title: "J.A.R.V.I.S",
            subtitle: "Personal AI Agent · Online",
            footer: "",
            getStarted: "Initiate Conversation",
            inputPlaceholder: "Enter command...",
            closeButtonTooltip: "Close",
          },
        },
      });
    });
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <GridBackground />
      <ScanLine />

      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none fixed top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "hsl(195 100% 50%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl"
        style={{ background: "hsl(195 100% 50%)" }}
        aria-hidden="true"
      />

      {/* TOP HUD BAR */}
      <header className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-border/40">
        <div className="flex items-center gap-6">
          <div className="hud-text text-primary text-xs tracking-widest animate-hud-blink">
            ◈ SYS.ACTIVE
          </div>
          <div className="hud-text text-muted-foreground text-xs tracking-wider">
            {formattedDate}
          </div>
        </div>
        <div className="hud-text text-primary text-2xl font-bold tracking-[0.3em] hud-glow">
          J.A.R.V.I.S
        </div>
        <div className="flex items-center gap-6">
          <div className="hud-text text-primary text-xs tracking-widest">
            {statuses[statusIndex]}
          </div>
          <div className="hud-text text-foreground text-lg font-bold tracking-widest">
            {formattedTime}
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          {/* Orbital avatar */}
          <div className="relative flex-shrink-0 w-64 h-64 flex items-center justify-center">
            {/* Outer rotating ring */}
            <div
              className="absolute inset-0 rounded-full border border-primary/20 animate-rotate-slow"
              style={{
                borderTopColor: "hsl(195 100% 50%)",
                borderRightColor: "transparent",
              }}
            />
            {/* Middle ring */}
            <div
              className="absolute inset-6 rounded-full border border-primary/30 animate-rotate-reverse"
              style={{
                borderBottomColor: "hsl(195 100% 50%)",
                borderLeftColor: "transparent",
              }}
            />
            {/* Inner ring */}
            <div className="absolute inset-12 rounded-full border border-primary/20 animate-rotate-slow" />
            {/* Core */}
            <div className="relative z-10 w-28 h-28 rounded-full border-2 border-primary flex items-center justify-center animate-glow-pulse"
              style={{ background: "hsl(220 30% 6%)" }}>
              <span className="hud-text text-primary text-4xl font-bold hud-glow">D</span>
            </div>
            {/* Orbit dot */}
            <div
              className="absolute w-3 h-3 rounded-full bg-primary animate-rotate-slow"
              style={{ top: "8px", left: "50%", transformOrigin: "0 120px" }}
            />
          </div>

          {/* Identity panel */}
          <div className="flex-1 animate-fade-in-up">
            <div className="hud-text text-muted-foreground text-xs tracking-[0.4em] mb-2">
              ▸ IDENTITY CONFIRMED
            </div>
            <h1 className="hud-text text-foreground text-5xl lg:text-6xl font-bold tracking-wider mb-2">
              DIKSHA
            </h1>
            <h2 className="hud-text text-primary text-xl tracking-[0.3em] mb-6 hud-glow">
              AKVEAN
            </h2>
            <div className="w-24 h-px bg-primary mb-6 opacity-60" />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl font-light tracking-wide mb-8">
              AI Engineer & Automation Architect. Building intelligent systems
              that think, learn, and adapt. Powered by curiosity, driven by
              data.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["AI ENGINEER", "N8N EXPERT", "FULL STACK", "CLOUD NATIVE", "AUTOMATION"].map((tag) => (
                <span
                  key={tag}
                  className="hud-text text-xs tracking-widest px-3 py-1 border border-border/60 text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS ROW */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative p-5 border border-border/40 bg-card hud-panel-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <HUDCorner position="tl" />
              <HUDCorner position="br" />
              <div className="hud-text text-primary text-3xl font-bold hud-glow mb-1">
                {stat.value}
              </div>
              <div className="hud-text text-muted-foreground text-xs tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS + AGENT INFO */}
        <section className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Skills */}
          <div className="relative p-6 border border-border/40 bg-card hud-panel-glow">
            <HUDCorner position="tl" />
            <HUDCorner position="tr" />
            <HUDCorner position="bl" />
            <HUDCorner position="br" />
            <div className="hud-text text-muted-foreground text-xs tracking-[0.4em] mb-6">
              ▸ CAPABILITY MATRIX
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="hud-text text-xs tracking-widest text-foreground">
                      {skill.name}
                    </span>
                    <span className="hud-text text-xs text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        boxShadow: "0 0 8px hsl(195 100% 50% / 0.6)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Panel */}
          <div className="relative p-6 border border-border/40 bg-card hud-panel-glow">
            <HUDCorner position="tl" />
            <HUDCorner position="tr" />
            <HUDCorner position="bl" />
            <HUDCorner position="br" />
            <div className="hud-text text-muted-foreground text-xs tracking-[0.4em] mb-6">
              ▸ AGENT CORE STATUS
            </div>
            <div className="space-y-4">
              {[
                { label: "MODEL", value: "N8N AI Agent" },
                { label: "STATUS", value: "ONLINE ●", highlight: true },
                { label: "PROTOCOL", value: "Webhook / REST" },
                { label: "RESPONSE", value: "< 2s avg" },
                { label: "MEMORY", value: "Persistent Context" },
                { label: "TASKS", value: "Unlimited" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-border/20 pb-3 last:border-0">
                  <span className="hud-text text-muted-foreground text-xs tracking-widest">
                    {item.label}
                  </span>
                  <span
                    className={`hud-text text-xs tracking-wider ${
                      item.highlight ? "text-primary hud-glow animate-hud-blink" : "text-foreground"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGENT ACTIVATION SECTION */}
        <section className="relative p-8 border border-primary/30 bg-card hud-panel-glow text-center mb-16">
          <HUDCorner position="tl" />
          <HUDCorner position="tr" />
          <HUDCorner position="bl" />
          <HUDCorner position="br" />
          <div className="hud-text text-muted-foreground text-xs tracking-[0.5em] mb-4">
            ▸ ACTIVATE PERSONAL AGENT
          </div>
          <h3 className="hud-text text-foreground text-2xl font-bold tracking-widest mb-4">
            SPEAK WITH <span className="text-primary hud-glow">J.A.R.V.I.S</span>
          </h3>
          <p className="text-muted-foreground tracking-wide max-w-lg mx-auto mb-6">
            Your AI-powered personal agent is live. Ask anything — from scheduling 
            to research, automation to analysis. The agent adapts to you.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="hud-text text-primary text-xs tracking-widest">
              CHAT WIDGET ACTIVE — BOTTOM RIGHT ↘
            </span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </section>
      </main>

      {/* BOTTOM HUD BAR */}
      <footer className="relative z-10 border-t border-border/40 px-8 py-4 flex items-center justify-between">
        <div className="hud-text text-muted-foreground text-xs tracking-widest">
          JARVIS v2.0 · PERSONAL AGENT SYSTEM
        </div>
        <div className="flex gap-6">
          {["GITHUB", "LINKEDIN", "EMAIL"].map((link) => (
            <span
              key={link}
              className="hud-text text-muted-foreground text-xs tracking-widest hover:text-primary transition-colors cursor-pointer"
            >
              {link}
            </span>
          ))}
        </div>
        <div className="hud-text text-muted-foreground text-xs tracking-widest animate-hud-blink">
          ◈ ALL SYSTEMS NOMINAL
        </div>
      </footer>

      {/* n8n chat widget mount point */}
      <div id="n8n-chat" />
    </div>
  );
};

export default Index;
