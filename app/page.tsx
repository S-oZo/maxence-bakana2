"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BookOpen, BriefcaseBusiness, ChevronRight, Download,
  ExternalLink, Github, GraduationCap, Laptop, Mail, MapPin, Menu,
  Network, Search, ShieldCheck, Sparkles, Terminal, X, Linkedin,
  Server, Boxes, Activity, FileText, Wrench
} from "lucide-react";

type Item = {
  title: string;
  category: string;
  icon: React.ElementType;
  short: string;
  details: string[];
  tools?: string[];
  document?: string;
};

const experiences: Item[] = [
  {
    title: "Anaii Home — Technicien de maintenance",
    category: "Expérience",
    icon: Wrench,
    short: "Stage • Janvier → Février 2026",
    details: [
      "Vérification et maintenance préventive du parc informatique.",
      "Réinstallation de systèmes d'exploitation et logiciels.",
      "Configuration des équipements réseau.",
      "Mise à jour antivirus et pare-feu.",
      "Configuration de la gateway Milesight.",
      "Procédure d'ajout d'une Gateway Milesight sur The Things Industries (TTI)."
    ],
    tools: ["Maintenance", "Réseau", "Milesight", "TTI"],
    document: "Doc-Anaii.pdf"
  },
  {
    title: "Médiathèque de Limay — Technicien",
    category: "Expérience",
    icon: Laptop,
    short: "Stage • Mai → Juin 2025",
    details: [
      "Vérification et maintenance préventive du parc informatique.",
      "Réinstallation de systèmes d'exploitation et logiciels.",
      "Configuration des équipements réseau.",
      "Mise à jour antivirus et pare-feu.",
      "Assistance aux usagers et formation aux bonnes pratiques.",
      "Organisation et animation d'ateliers numériques."
    ],
    tools: ["Maintenance", "Réseau", "Support", "Médiation numérique"]
  },
  {
    title: "Bricorama, Orgeval",
    category: "Expérience",
    icon: BriefcaseBusiness,
    short: "Équipier polyvalent • Mars → Août 2024",
    details: ["Assurer les caisses.", "S'occuper du facing.", "Assurer l'arrosage des fleurs et des plantes.", "Aider les autres membres de l'équipe pour une productivité optimale."],
    tools: ["Travail en équipe", "Organisation", "Relation client"]
  },
  {
    title: "Otis Line, Argenteuil",
    category: "Expérience",
    icon: BriefcaseBusiness,
    short: "Stage découverte • Février 2020",
    details: ["Découverte de la gestion de projets.", "Suivi administratif.", "Collaboration en équipe.", "Conseil auprès de la clientèle."],
    tools: ["Projet", "Équipe", "Client"]
  }
];

const skills: Item[] = [
  { title: "Réseaux & protocoles", category: "Réseaux", icon: Network, short: "HTTP/HTTPS • TCP/IP • OSPF • RIP", details: ["Protocoles HTTP/HTTPS et TCP/IP.", "Routage avec OSPF et RIP.", "Configuration et tests de connectivité dans des environnements réseau.", "Travail avec Cisco Packet Tracer."], tools: ["HTTP", "HTTPS", "TCP/IP", "OSPF", "RIP", "Cisco Packet Tracer"] },
  { title: "Systèmes Windows", category: "Systèmes", icon: Server, short: "Windows Server • administration", details: ["Administration de systèmes Windows.", "Installation et configuration de Windows Server.", "Installation et maintenance de postes."], tools: ["Windows Server", "Windows 7/8/10/11"] },
  { title: "Linux", category: "Systèmes", icon: Terminal, short: "Administration et environnement Linux", details: ["Utilisation de Linux dans les environnements de formation et d'administration.", "Installation de services et outils d'infrastructure."], tools: ["Linux", "Debian"] },
  { title: "Virtualisation", category: "Infrastructure", icon: Boxes, short: "VMware Workstation • Proxmox VE", details: ["Création et utilisation de machines virtuelles.", "Mise en place d'environnements de test et d'infrastructure."], tools: ["VMware Workstation", "Proxmox VE"] },
  { title: "Sécurité", category: "Sécurité", icon: ShieldCheck, short: "Sécurité réseau et systèmes", details: ["Sécurité informatique et protocoles.", "Mise à jour antivirus et pare-feu.", "Veille sur le modèle Zero Trust."], tools: ["Pare-feu", "Antivirus", "Zero Trust"] },
  { title: "Développement & données", category: "Développement", icon: Terminal, short: "Python • SQL • Java", details: ["Bases de Python, SQL et Java dans le cadre du BTS SIO.", "Compréhension des besoins techniques et réalisation de travaux pratiques."], tools: ["Python", "SQL", "Java"] }
];

const docs: Item[] = [
  ["windows-10.pdf", "Installation de Windows 10", "Systèmes"],
  ["windows-11.pdf", "Installation de Windows 11", "Systèmes"],
  ["windows-server-2025.pdf", "Déploiement de Windows Server", "Systèmes"],
  ["proxmox.pdf", "Proxmox VE", "Virtualisation"],
  ["apache2.pdf", "Installation Apache2", "Serveurs"],
  ["docker.pdf", "Installation Docker", "Virtualisation"],
  ["glpi.pdf", "Gestion de parc GLPI", "Gestion"],
  ["haproxy.pdf", "Installation HAProxy", "Réseaux"],
  ["pfsense.pdf", "Installation PFSENSE", "Réseaux"],
  ["zabbix.pdf", "Installation Zabbix", "Supervision"],
  ["E6.pdf", "Fiche de compétences E6", "BTS SIO"]
].map(([document, title, category]) => ({
  title, category, icon: FileText, short: "Documentation technique",
  details: ["Documentation réalisée dans le cadre de ma formation et de mes travaux pratiques.", "Ouvre le PDF pour consulter le contenu détaillé."],
  document
}));

const categories = ["Tous", "Réseaux", "Systèmes", "Infrastructure", "Sécurité", "Développement", "Supervision"];

function Modal({ item, close }: { item: Item; close: () => void }) {
  const Icon = item.icon;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onMouseDown={close}>
      <div className="glass max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-7 shadow-2xl" onMouseDown={e => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-5">
          <div className="flex gap-4">
            <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-400"><Icon size={24}/></div>
            <div>
              <p className="text-sm text-blue-400">{item.category}</p>
              <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>
            </div>
          </div>
          <button aria-label="Fermer" onClick={close} className="rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white"><X/></button>
        </div>
        <div className="mt-7 space-y-3">
          {item.details.map((detail, i) => <p key={i} className="leading-7 text-slate-300">• {detail}</p>)}
        </div>
        {item.tools && <div className="mt-7"><p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Technologies / compétences</p><div className="flex flex-wrap gap-2">{item.tools.map(t => <span key={t} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-sm text-slate-300">{t}</span>)}</div></div>}
        {item.document && <a href={`/${item.document}`} target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400"><ExternalLink size={17}/> Voir la documentation</a>}
      </div>
    </div>
  );
}

function Card({ item, open }: { item: Item; open: () => void }) {
  const Icon = item.icon;
  return (
    <button onClick={open} className="group text-left">
      <div className="glass h-full rounded-2xl p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/30 group-hover:bg-white/[.05]">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-400"><Icon size={21}/></div>
          <ChevronRight size={18} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400"/>
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-blue-400">{item.category}</p>
        <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{item.short}</p>
        <p className="mt-5 text-sm font-medium text-slate-300">Explorer →</p>
      </div>
    </button>
  );
}

export default function Home() {
  const [active, setActive] = useState<Item | null>(null);
  const [mobile, setMobile] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", key); };
  }, [active]);

  const filteredDocs = useMemo(() => docs.filter(d => (filter === "Tous" || d.category === filter) && d.title.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <main className="min-h-screen">
      {active && <Modal item={active} close={() => setActive(null)}/>}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070a12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#accueil" className="font-bold tracking-tight">MB<span className="text-blue-400">.</span></a>
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {["À propos", "Parcours", "Expériences", "Compétences", "Docs", "Veille"].map((x, i) => <a key={x} href={["#apropos","#parcours","#experiences","#competences","#docs","#veille"][i]} className="transition hover:text-white">{x}</a>)}
            <a href="#contact" className="rounded-xl bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setMobile(!mobile)} aria-label="Menu">{mobile ? <X/> : <Menu/>}</button>
        </div>
        {mobile && <div className="border-t border-white/10 px-5 py-3 md:hidden">{["#apropos","#parcours","#experiences","#competences","#docs","#veille","#contact"].map(h => <a key={h} onClick={() => setMobile(false)} href={h} className="block py-2 text-slate-300">{h.slice(1)}</a>)}</div>}
      </nav>

      <section id="accueil" className="grid-bg relative overflow-hidden">
        <div className="mx-auto grid min-h-[650px] max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.25fr_.75fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300"><span className="h-2 w-2 animate-pulse-soft rounded-full bg-blue-400"/> Disponible pour une alternance</div>
            <p className="text-sm font-semibold uppercase tracking-[.25em] text-slate-500">Portfolio • BTS SIO SISR</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">MAXENCE<br/><span className="text-blue-400">BAKANA</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Étudiant en 2ème année BTS SIO SISR, futur technicien infrastructure & réseaux.</p>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">Bienvenue dans mon portfolio interactif. <strong className="text-slate-200">Clique sur les cartes</strong> pour découvrir mes expériences, compétences et réalisations.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#competences" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-400">Explorer mon profil <ArrowRight size={17}/></a>
              <a href="/CV_Maxence_Bakana.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5"><Download size={17}/> CV</a>
            </div>
          </div>
          <div className="animate-float hidden md:block">
            <div className="glass relative rounded-3xl p-6">
              <div className="mb-5 flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-yellow-400"/><span className="h-3 w-3 rounded-full bg-green-400"/></div>
              <div className="font-mono text-sm leading-8 text-slate-400">
                <p><span className="text-blue-400">maxence</span>@portfolio:~$ whoami</p>
                <p className="text-white">BTS SIO SISR</p>
                <p><span className="text-blue-400">maxence</span>@portfolio:~$ skills</p>
                <p className="text-slate-300">→ networks</p><p className="text-slate-300">→ systems</p><p className="text-slate-300">→ virtualization</p><p className="text-slate-300">→ cybersecurity</p>
                <p><span className="text-blue-400">maxence</span>@portfolio:~$ <span className="animate-pulse">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={Sparkles} eyebrow="Profil" title="À propos de moi" text="Un profil orienté infrastructure, réseaux et cybersécurité."/>
        <div className="glass rounded-3xl p-7 md:p-9">
          <p className="text-lg leading-8 text-slate-300">Je suis un étudiant passionné en BTS SIO avec une spécialisation en SISR à Ensitech de Cergy. Ma formation me permet d'acquérir des compétences techniques solides dans la conception, le déploiement et la maintenance d'infrastructures informatiques.</p>
          <p className="mt-5 leading-7 text-slate-400">Mon objectif est de devenir administrateur systèmes & réseaux ou, dans plusieurs années, pentester. Passionné par les infrastructures réseaux, la virtualisation et la cybersécurité, je souhaite consolider mes compétences techniques tout en contribuant activement aux projets d'une entreprise.</p>
        </div>
      </section>

      <section id="parcours" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={GraduationCap} eyebrow="Formation" title="Mon parcours"/>
        <div className="grid gap-5 md:grid-cols-2">
          <TimelineCard title="ENSITECH — Cergy" date="2024 → 2026" text="1ère année en initiale puis 2ème année en alternance — BTS SIO SISR."/>
          <TimelineCard title="Lycée Condorcet — Limay" date="2020 → 2023" text="Baccalauréat Général — spécialités Sciences numériques et informatique / Anglais monde contemporain."/>
        </div>
      </section>

      <section id="experiences" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={BriefcaseBusiness} eyebrow="Expériences" title="Mon expérience professionnelle" text="Clique sur une expérience pour ouvrir sa fiche détaillée."/>
        <div className="grid gap-5 md:grid-cols-2">{experiences.map(item => <Card key={item.title} item={item} open={() => setActive(item)}/>)}</div>
      </section>

      <section id="competences" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={Network} eyebrow="Savoir-faire" title="Mes compétences" text="Chaque domaine ouvre une fiche avec les technologies et compétences associées."/>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map(item => <Card key={item.title} item={item} open={() => setActive(item)}/>)}</div>
      </section>

      <section id="bts" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={BookOpen} eyebrow="Formation" title="BTS SIO — SISR"/>
        <div className="glass rounded-3xl p-7 md:p-9">
          <h3 className="text-2xl font-bold">Solutions d'Infrastructure, Systèmes et Réseaux</h3>
          <p className="mt-4 leading-7 text-slate-400">Le BTS SIO forme des techniciens supérieurs capables de répondre aux besoins informatiques des organisations. L'option SISR me permet de travailler sur les systèmes, les réseaux, la virtualisation et la sécurité.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Administration Windows / Linux", "Conception et configuration réseau", "Virtualisation", "Sécurité informatique", "Bases de données et développement", "Gestion de projets"].map(x => <div key={x} className="rounded-xl border border-white/10 bg-white/[.03] p-4 text-slate-300">{x}</div>)}
          </div>
        </div>
      </section>

      <section id="docs" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={FileText} eyebrow="Réalisations" title="Mes documentations" text="Recherche et filtre les documentations techniques. Clique sur une carte pour voir sa fiche."/>
        <div className="mb-7 flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1"><Search className="absolute left-4 top-3.5 text-slate-500" size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Rechercher une documentation..." className="w-full rounded-xl border border-white/10 bg-white/[.04] py-3 pl-11 pr-4 outline-none focus:border-blue-400/50"/></div>
          <div className="flex flex-wrap gap-2">{categories.map(c => <button key={c} onClick={() => setFilter(c)} className={`rounded-xl px-3 py-2 text-sm ${filter === c ? "bg-blue-500 text-white" : "border border-white/10 bg-white/[.03] text-slate-400 hover:text-white"}`}>{c}</button>)}</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filteredDocs.map(item => <Card key={item.title} item={item} open={() => setActive(item)}/>)}</div>
      </section>

      <section id="veille" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={Activity} eyebrow="Veille technologique" title="Zero Trust" text="Une veille centrée sur l'évolution des infrastructures et de la cybersécurité."/>
        <div className="glass rounded-3xl p-7 md:p-9">
          <div className="grid gap-5 md:grid-cols-3">
            {[["Vérification explicite","Chaque demande d'accès est authentifiée selon l'identité et le contexte du terminal."],["Moindre privilège","L'accès est limité au strict nécessaire afin de réduire la surface d'attaque."],["Micro-segmentation","Le réseau est découpé en zones isolées pour limiter les déplacements latéraux."]].map(([t,d]) => <div key={t} className="rounded-2xl border border-white/10 bg-white/[.03] p-5"><h3 className="font-bold text-blue-300">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{d}</p></div>)}
          </div>
          <div className="mt-7 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5 text-slate-300">Ma méthodologie de veille s'appuie sur des flux RSS (Feedly), les rapports de l'ANSSI et des médias spécialisés comme Le MagIT et Cybersécurité Actu.</div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <SectionTitle icon={Mail} eyebrow="Contact" title="Me contacter"/>
        <div className="glass rounded-3xl p-7 md:p-9">
          <div className="grid gap-5 md:grid-cols-3">
            <a href="mailto:bknmaxence@gmail.com" className="rounded-2xl border border-white/10 p-5 hover:bg-white/[.04]"><Mail className="text-blue-400"/><p className="mt-3 font-semibold">Email</p><p className="mt-1 text-sm text-slate-400">bknmaxence@gmail.com</p></a>
            <a href="tel:0759965137" className="rounded-2xl border border-white/10 p-5 hover:bg-white/[.04]"><MapPin className="text-blue-400"/><p className="mt-3 font-semibold">Localisation</p><p className="mt-1 text-sm text-slate-400">Limay (78520) — France</p></a>
            <div className="rounded-2xl border border-white/10 p-5"><GraduationCap className="text-blue-400"/><p className="mt-3 font-semibold">Disponibilité</p><p className="mt-1 text-sm text-slate-400">Alternance septembre 2026</p></div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/maxence-bakana-b48536273/" target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-[#0a66c2] px-5 py-3 font-semibold"><Linkedin size={18}/> LinkedIn</a>
            <a href="https://github.com/S-oZo" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5"><Github size={18}/> GitHub</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">© 2026 Maxence Bakana — Portfolio BTS SIO SISR</footer>
    </main>
  );
}

function SectionTitle({ icon: Icon, eyebrow, title, text }: { icon: React.ElementType; eyebrow: string; title: string; text?: string }) {
  return <div className="mb-9"><div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[.2em] text-blue-400"><Icon size={17}/>{eyebrow}</div><h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>{text && <p className="mt-3 max-w-2xl leading-7 text-slate-400">{text}</p>}</div>;
}
function TimelineCard({ title, date, text }: { title: string; date: string; text: string }) {
  return <div className="glass rounded-2xl p-6"><div className="mb-4 flex items-center justify-between gap-4"><h3 className="text-lg font-bold">{title}</h3><span className="whitespace-nowrap text-sm text-blue-400">{date}</span></div><p className="leading-7 text-slate-400">{text}</p></div>;
}
