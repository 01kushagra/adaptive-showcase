import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Sparkles } from "lucide-react";

const skills = [
  "Figma", "Framer", "Photoshop", "Illustrator", "InDesign",
  "Adobe XD", "Canva", "Notion", "Protopie", "Miro", "Zeplin", "Slack",
];

const coreSkills = [
  "Product Strategy", "User Research", "Competitive Analysis", "A/B Testing",
  "Wireframing & Prototyping", "Usability Testing", "Design Systems",
  "Visual Identity & Branding", "Creative Problem-Solving",
];

const education = [
  { title: "UI/UX Design Certification", place: "Dice Academy", period: "Mar 2023 – Sept 2023" },
  { title: "Graphic Design Certification", place: "Dice Academy", period: "Jul 2022 – Jan 2023" },
  { title: "B.Tech (Computer Science)", place: "RGPV", period: "Jun 2022 – May 2026" },
];

const socialLinks = [
  { label: "Resume", href: "https://drive.google.com/file/d/1neawC_ymwsC6vBbf0-CArlv2KbpAPrR1/view?usp=sharing" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kushagra-arora-29236621b/" },
  { label: "Behance", href: "https://www.behance.net/kushagraarora3" },
  { label: "Notion", href: "https://delicate-salesman-ef8.notion.site/Hey-I-m-Kushagra-Arora-UI-UX-Designer-based-in-Delhi-2146f2ef586f800390f5ded8d365bee1" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "45+", label: "Projects Done" },
  { value: "15+", label: "Happy Clients" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] -top-60 -right-60 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] bottom-20 -left-40 pointer-events-none" />

      {/* Hero — full width two-column layout */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Left column */}
        <div>
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            UI/UX Designer · Delhi
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-display font-bold text-foreground leading-[1.1]">
            Hey, I'm
            <br />
            Kushagra Arora<span className="text-primary">.</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-6 text-muted-foreground text-lg leading-relaxed">
            I'm a UI/UX designer passionate about creating smooth, intuitive, and user-focused digital experiences. With a strong foundation in UX principles, HCI, and Figma, I design interfaces that blend clarity, functionality, and visual appeal.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:kushagraarora2727@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} custom={4} className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={13} /> {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column — stats & highlight card */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-col gap-6 lg:pt-8"
        >
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 transition-colors"
              >
                <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Highlight card */}
          <div className="rounded-xl border border-border bg-card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-primary" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary">Currently</span>
            </div>
            <p className="text-foreground font-display font-medium">Open to freelance & full-time roles</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Looking for opportunities to collaborate on meaningful design projects — from startups to established brands.
            </p>
          </div>

          {/* Quick skills preview */}
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Primary Tools</p>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Framer", "Photoshop", "Illustrator"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            2+ years shaping complete brand identities, designing across print and digital, and creating impactful marketing assets. Managed social media and email marketing, boosted engagement and improved brand visibility across logos, magazines, brochures, websites, and merchandise.
          </p>
        </div>

        {/* Education on the right */}
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Education & Certifications
          </h2>
          <div className="grid gap-4">
            {education.map((edu) => (
              <div
                key={edu.title}
                className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-display font-medium text-foreground">{edu.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.place} · {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills — two columns */}
      <motion.section
        className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Software & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary transition-colors cursor-default hover:bg-primary/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Index;
