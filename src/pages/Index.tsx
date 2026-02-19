import { useEffect, useRef } from "react";
import "@n8n/chat/style.css";
import campusImg from "@/assets/campus.png";
import hackathonImg from "@/assets/hackathon.png";
import studentsImg from "@/assets/students.png";
import kartingImg from "@/assets/karting.png";

const news = [
  { date: "Feb 15, 2026", title: "IIST Students Win Smart India Hackathon 2025 — Team 'Web Rebels' claims top honors" },
  { date: "Feb 10, 2026", title: "Indian Superkarting Series 3.0 — Team Vijayrath secures Overall 2nd Runner-Up position" },
  { date: "Feb 05, 2026", title: "Annual Technical Fest 'TECHNOVANZA 2026' registrations now open for all departments" },
  { date: "Jan 28, 2026", title: "IIST signs MoU with leading IT companies for campus placements 2026 batch" },
  { date: "Jan 20, 2026", title: "New AI & Machine Learning lab inaugurated with state-of-the-art GPU infrastructure" },
  { date: "Jan 12, 2026", title: "IIST ranked among Top 50 Engineering Colleges in Madhya Pradesh by NIRF 2025" },
];

const achievements = [
  { value: "5000+", label: "Students Enrolled" },
  { value: "200+", label: "Faculty Members" },
  { value: "95%", label: "Placement Rate" },
  { value: "150+", label: "Industry Partners" },
];

const departments = [
  { icon: "💻", name: "Computer Science & Engineering" },
  { icon: "⚡", name: "Electronics & Communication" },
  { icon: "⚙️", name: "Mechanical Engineering" },
  { icon: "🏗️", name: "Civil Engineering" },
  { icon: "🤖", name: "Artificial Intelligence & ML" },
  { icon: "📊", name: "Information Technology" },
];

const events = [
  {
    img: hackathonImg,
    tag: "Hackathon",
    title: "Smart India Hackathon 2020",
    desc: "Team 'Web Rebels' represented IIST at SIH 2020 organized by Ministry of HRD, Government of India.",
  },
  {
    img: kartingImg,
    tag: "Sports",
    title: "Indian Superkarting Series 3.0",
    desc: "Team Vijayrath from IIST achieved Overall 2nd Runner-Up at the prestigious Indian Superkarting Series.",
  },
  {
    img: studentsImg,
    tag: "Event",
    title: "Annual Fest & Cultural Meet",
    desc: "Students and faculty come together at IIST's annual celebration of talent, innovation, and culture.",
  },
];

const Index = () => {
  const chatInitialized = useRef(false);

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
          "Hello! I'm the IIST AI Assistant.",
          "How can I help you today?",
        ],
        i18n: {
          en: {
            title: "IIST Assistant",
            subtitle: "Ask about admissions, courses & more",
            footer: "",
            getStarted: "Start Conversation",
            inputPlaceholder: "Type your question...",
            closeButtonTooltip: "Close",
          },
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* TOP INFO BAR */}
      <div className="bg-secondary text-secondary-foreground text-xs py-1.5 px-4 flex justify-between items-center">
        <span>Affiliated to RGPV (Bhopal) | Approved by AICTE (New Delhi)</span>
        <div className="flex gap-4">
          <span>📞 Toll Free: 1800 103 3069</span>
          <span>🌐 www.indoreinstitute.com</span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="bg-white border-b-4 border-primary shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-secondary rounded flex items-center justify-center flex-shrink-0">
              <div className="grid grid-cols-2 gap-0.5 p-1.5">
                <div className="w-3 h-3 bg-primary rounded-sm" />
                <div className="w-3 h-3 bg-primary rounded-sm" />
                <div className="w-3 h-3 bg-secondary-foreground/30 rounded-sm" />
                <div className="w-3 h-3 bg-primary rounded-sm" />
              </div>
            </div>
            <div>
              <h1 className="text-secondary text-2xl font-bold leading-tight" style={{ fontFamily: 'Merriweather, serif' }}>
                Indore Institute of Science & Technology
              </h1>
              <p className="text-muted-foreground text-xs mt-0.5">
                IIST Campus, Opp. IIM(Indore), Rau-Pithampur Road, Rau, Indore 453331 (MP)
              </p>
            </div>
          </div>
          {/* AI Assistant badge */}
          <div className="hidden md:flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold">AI Assistant Active</span>
          </div>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="bg-secondary text-secondary-foreground sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-0 overflow-x-auto">
            {["Home", "About", "Academics", "Admissions", "Research", "Placements", "Campus Life", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-3 text-sm font-medium whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors duration-200 border-b-2 border-transparent hover:border-primary-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* NEWS TICKER */}
      <div className="bg-primary text-primary-foreground py-2 flex items-center gap-3 overflow-hidden">
        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 flex-shrink-0 ml-4 rounded">
          LATEST NEWS
        </span>
        <div className="ticker-wrap flex-1">
          <span className="ticker-content text-sm">
            {news.map((n) => `📌 ${n.title}   •   `).join("")}
          </span>
        </div>
      </div>

      {/* HERO — CAMPUS IMAGE */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={campusImg}
          alt="IIST Campus"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-xl animate-fade-in-up">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Welcome to
              </p>
              <h2 className="text-white text-4xl font-bold leading-tight mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                Indore Institute of<br />
                <span className="text-primary">Science & Technology</span>
              </h2>
              <p className="text-white/80 text-base mb-6 leading-relaxed">
                Shaping tomorrow's engineers and innovators since 2000. 
                Excellence in education, research and industry collaboration.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary/90 transition-colors">
                  Apply Now
                </a>
                <a href="#" className="bg-white/20 backdrop-blur text-white border border-white/40 px-5 py-2.5 rounded font-semibold text-sm hover:bg-white/30 transition-colors">
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT STATS */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/20">
          {achievements.map((a) => (
            <div key={a.label} className="text-center px-6 py-4">
              <div className="text-primary text-3xl font-bold">{a.value}</div>
              <div className="text-white/70 text-sm mt-1">{a.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT — NEWS + DEPARTMENTS */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        {/* NEWS & ANNOUNCEMENTS */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-7 bg-primary rounded-full" />
            <h2 className="text-secondary text-xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>
              News & Announcements
            </h2>
          </div>
          <div className="bg-white rounded-lg border border-border shadow-sm divide-y divide-border">
            {news.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 hover:bg-muted/50 transition-colors group cursor-pointer">
                <div className="flex-shrink-0 bg-primary/10 text-primary rounded px-2 py-1 text-center min-w-[70px]">
                  <div className="text-xs font-semibold">{item.date.split(" ")[0]}</div>
                  <div className="text-lg font-bold leading-none">{item.date.split(" ")[1].replace(",","")}</div>
                  <div className="text-xs">{item.date.split(" ")[2]}</div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground leading-relaxed group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <span className="text-xs text-primary font-medium mt-1 inline-block">Read more →</span>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="mt-3 inline-block text-primary text-sm font-semibold hover:underline">
            View All News →
          </a>
        </div>

        {/* QUICK LINKS + DEPARTMENTS */}
        <div className="space-y-6">
          {/* Departments */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-7 bg-primary rounded-full" />
              <h2 className="text-secondary text-xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>
                Departments
              </h2>
            </div>
            <div className="space-y-2">
              {departments.map((dept) => (
                <a
                  key={dept.name}
                  href="#"
                  className="flex items-center gap-3 bg-white border border-border rounded-lg px-4 py-3 hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <span className="text-xl">{dept.icon}</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {dept.name}
                  </span>
                  <span className="ml-auto text-muted-foreground group-hover:text-primary transition-colors">›</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-secondary text-secondary-foreground rounded-lg p-5">
            <h3 className="font-bold text-base mb-3 text-primary">Quick Links</h3>
            <div className="space-y-2">
              {["Admission 2026", "Fee Structure", "Exam Schedule", "Results", "Library Portal", "Student Login"].map((link) => (
                <a key={link} href="#" className="flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-colors">
                  <span className="text-primary">›</span> {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS / EVENTS GALLERY */}
      <section className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="w-1 h-1 hidden" />
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-1">Our Pride</p>
            <h2 className="text-secondary text-2xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>
              Student Achievements & Events
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ev.img}
                    alt={ev.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                    {ev.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground text-base mb-2">{ev.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ev.desc}</p>
                  <a href="#" className="mt-3 inline-block text-primary text-sm font-semibold hover:underline">
                    Know More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPSKILLING & CERTIFICATIONS */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-1">Skill Development</p>
            <h2 className="text-secondary text-2xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>
              Upskilling & Certification Programs
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">
              IIST empowers students with industry-recognized certifications and hands-on learning platforms to stay ahead in the tech world.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Virtual Labs */}
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">🔬</div>
              <h3 className="text-secondary font-bold text-lg mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Merriweather, serif' }}>
                Virtual Labs
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Access IIT-developed virtual experiments for Physics, Chemistry, Electronics, and CS labs — anytime, anywhere via Ministry of Education initiative.
              </p>
              <ul className="space-y-1 mb-5">
                {["50+ Virtual Experiments", "IIT Collaborated", "Free Access for Students", "Certificate on Completion"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://www.vlab.co.in" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Access Virtual Labs →
              </a>
            </div>

            {/* AWS Certification */}
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">☁️</div>
              <h3 className="text-secondary font-bold text-lg mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Merriweather, serif' }}>
                AWS Certification
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                IIST is an AWS Academy member institution. Students get access to AWS Educate credits, cloud labs, and preparation for globally recognized AWS certifications.
              </p>
              <ul className="space-y-1 mb-5">
                {["AWS Cloud Practitioner", "AWS Solutions Architect", "Free AWS Educate Credits", "Industry-Recognized Badge"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://aws.amazon.com/training/awsacademy/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Explore AWS Programs →
              </a>
            </div>

            {/* NPTEL */}
            <div className="bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">🎓</div>
              <h3 className="text-secondary font-bold text-lg mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Merriweather, serif' }}>
                NPTEL Courses
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                IIST is an NPTEL Local Chapter. Enroll in IIT & IISc faculty-taught courses across Engineering, Science, and Management with proctored exams and certificates.
              </p>
              <ul className="space-y-1 mb-5">
                {["1000+ Free Courses", "IIT/IISc Faculty", "Proctored Certification Exam", "SWAYAM Credit Transfer"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="https://nptel.ac.in" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Browse NPTEL Courses →
              </a>
            </div>
          </div>

          {/* Student Registration CTA */}
          <div className="bg-secondary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">🚀 Start Upskilling Today</p>
              <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
                Register for Certification Programs
              </h3>
              <p className="text-white/70 text-sm max-w-lg">
                IIST students can enroll in Virtual Labs, AWS Academy, and NPTEL courses through the Student Portal. Build your profile, earn certificates, and stay industry-ready.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {["Virtual Labs", "AWS Academy", "NPTEL / SWAYAM", "Coursera for Campus"].map(tag => (
                  <span key={tag} className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href="#" className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center whitespace-nowrap">
                🎯 Student Sign Up / Register
              </a>
              <a href="#" className="bg-white/10 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-center whitespace-nowrap">
                📋 View All Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT BANNER */}
      <section className="bg-secondary text-secondary-foreground py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">AI-Powered Assistant</span>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
              Have Questions? Ask Our AI Assistant
            </h3>
            <p className="text-white/70 text-sm max-w-lg">
              Get instant answers about admissions, courses, fee structure, campus facilities and more — available 24/7.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right hidden md:block">
              <p className="text-white/60 text-xs">Powered by</p>
              <p className="text-primary font-bold text-sm">IIST AI · n8n Agent</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-2xl">
              🤖
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-primary font-bold text-base mb-3">IIST Indore</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              IIST Campus, Opp. IIM(Indore),<br />
              Rau-Pithampur Road, Rau,<br />
              Indore 453331 (MP)
            </p>
          </div>
          <div>
            <h4 className="text-primary font-bold text-base mb-3">Contact Us</h4>
            <div className="space-y-1 text-sm text-white/60">
              <p>📞 Toll Free: 1800 103 3069</p>
              <p>📞 822 407 1000/2000/3000/4000</p>
              <p>📞 822 507 1000/2000/3000</p>
              <p>🌐 www.indoreinstitute.com</p>
            </div>
          </div>
          <div>
            <h4 className="text-primary font-bold text-base mb-3">Important Links</h4>
            <div className="space-y-1">
              {["About IIST", "Admissions", "Academics", "Research", "Placements", "Contact"].map((l) => (
                <a key={l} href="#" className="block text-sm text-white/60 hover:text-primary transition-colors">
                  › {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-white/40 text-xs">
          © 2026 Indore Institute of Science & Technology. All rights reserved. | Affiliated to RGPV (Bhopal) | Approved by AICTE (New Delhi)
        </div>
      </footer>

      {/* n8n chat widget */}
      <div id="n8n-chat" />
    </div>
  );
};

export default Index;
