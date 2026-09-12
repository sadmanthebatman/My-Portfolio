"use client";

import type { ReactNode } from "react";

import {
  Github,
  Linkedin,
  Mail,
  Shield,
  ExternalLink,
  Code2,
  Network,
  Database,
  Crosshair,
  Server,
  Download,
  Code,
  SearchCode,
  ShieldCheck,
} from "lucide-react";

const projects = [
  {
    title: "SimpleFS File System Implementation",
    type: "Operating Systems • C Programming",
    icon: <Database size={40}/>,
    description:
      "A lightweight file system implementation using inode architecture, bitmap allocation and virtual disk management.",
    tags:["C","Operating Systems","Filesystem"],
    link:"https://github.com/sadmanthebatman/SimpleFS-File-System-Implementation"
  },
  {
    title:"Bangladesh Board Examination Emergency Network",
    type:"Cisco Infrastructure",
    icon:<Network size={40}/>,
    description:
      "Enterprise network design using VLSM, RIPv2, DHCP, DNS and routing configuration.",
    tags:["Cisco","VLSM","Routing"],
    link:"https://github.com/sadmanthebatman/Bangladesh-Board-Examination-Emergency-Network"
  },
  {
    title:"SportPulse",
    type:"Full Stack Development",
    icon:<Code2 size={40}/>,
    description:
      "Sports analytics platform with statistics, comparisons and dashboard features.",
    tags:["React","Node.js","Dashboard"],
    link:"https://github.com/sadmanthebatman/SportPulse"
  }
];

const arsenal = [
 {
  title:"Programming Languages",
  icon:<Code/>,
  items:["Python","JAVA","C++"]
 },
 {
  title:"Security Research & Bug Exploration",
  icon:<SearchCode/>,
  items:["HackerOne","Bugcrowd","YesWeHack"]
 },
 {
  title:"Offensive Security Tools",
  icon:<Crosshair/>,
  items:["Burp Suite","Kali Linux","Nmap","Metasploit","Shodan","ffuf"]
 },
 {
  title:"Security Testing",
  icon:<ShieldCheck/>,
  items:["Recon","XSS","IDOR","CSRF","SSRF","HTML Injection","SQL Injection","File Upload Vulnerability"]
 }
];

export default function Home(){
return(
<main className="portfolio">

<div className="cyber-scan"/>

<nav className="glass navbar">
<div className="logo">
<Shield/> Welcome !!
</div>
<div className="online">
● Still Alive
</div>
</nav>

<section className="hero">
<div>
<p className="green">CYBER SECURITY PROFILE</p>
<h1>
SADMAN <span>SAKIB ABIR</span>
</h1>
<h2>Cybersecurity Researcher</h2>
<p className="desc">
Focused on penetration testing, SOC operations,
security monitoring, vulnerability assessment and secure engineering.
</p>
<div className="buttons">
<a href="/Sadman-Sakib-Abir-Resume.pdf" className="btn">
<Download/> Resume
</a>
<a href="https://github.com/sadmanthebatman" className="btn">
<Github/> Github
</a>
</div>
</div>
<div className="hud-core">
<Shield size={90}/>
</div>
</section>

<section>
<h2 className="section-title">Professional Experience</h2>
<div className="glass card">
<Server/>
<h3>Cyber Security Analyst Intern</h3>
<p className="green">Business Automation Limited</p>
<ul>
<li> Performed hands-on vulnerability assessments and penetration testing using Nessus and Nuclei to identify, validate, and document security weaknesses across applications and infrastructure, including CVE analysis and vulnerability assessment.
</li>
<li> Worked with practical threat detection, security monitoring, endpoint visibility, and incident investigation, supporting the early identification and analysis of suspicious activities.
</li>
<li> Gained hands-on experience with Suricata for IDS/IPS monitoring, and worked with Wazuh and in SIEM-based security monitoring and event analysis, while using ESET for XDR-related security operations.
</li>
<li> Supported alert management, incident response and security orchestration workflows using Splunk and TheHive, while working with MISP for threat intelligence and security event correlation.
</li>
<li> Conducted practical digital forensics, malware & network analysis using Velociraptor, Wireshark, VirusTotal, and assisting in the investigation of suspicious files, network activity, and potential security incidents.
</li>
<li> Produced detailed security assessment and incident analysis reports with actionable remediation recommendations, while supporting CIRT & Infrastructure operations, deployment workflows, DevOps activities, and secure system management.
</li>
</ul>
</div>
</section>

<section>
<h2 className="section-title">Featured Projects</h2>
<div className="grid">
{projects.map(project=>(
<div className="glass card" key={project.title}>
<div className="green">{project.icon}</div>
<h3>{project.title}</h3>
<p className="green">{project.type}</p>
<p>{project.description}</p>
<a href={project.link} target="_blank" rel="noopener noreferrer">
<Github/> Repository <ExternalLink/>
</a>
</div>
))}
</div>
</section>

<section>
<h2 className="section-title">Security Arsenal</h2>
<div className="grid">
{arsenal.map(group=>(
<div className="glass card" key={group.title}>
<div className="green">
{group.icon} {group.title}
</div>
{group.items.map(item=>(
<p key={item}>› {item}</p>
))}
</div>
))}
</div>
</section>

<section>
<h2 className="section-title">Contact</h2>
<div className="grid">
<Contact icon={<Github/>} title="Github" value="github.com/sadmanthebatman" link="https://github.com/sadmanthebatman"/>
<Contact icon={<Linkedin/>} title="LinkedIn" value="Sadman Sakib Abir" link="https://linkedin.com"/>
<Contact icon={<Mail/>} title="Email" value="sadmansakibabir717@gmail.com" link="mailto:sadmansakibabir717@gmail.com"/>
</div>
</section>

</main>
)
}

function Contact({
icon,
title,
value,
link
}:{
icon:ReactNode;
title:string;
value:string;
link:string;
}){
return(
<a href={link} target="_blank" rel="noopener noreferrer">
<div className="glass card">
{icon}
<h3>{title}</h3>
<p>{value}</p>
</div>
</a>
)
}
