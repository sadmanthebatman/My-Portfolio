 "use client";

import type { ReactNode } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Shield,
  Terminal,
  ExternalLink,
  Code2,
  Network,
  Database,
  Crosshair,
  Radar,
  Server,
  Download,
  Cpu,
  Activity,
} from "lucide-react";

const projects = [
  {
    title: "SimpleFS File System Implementation",
    type: "Operating Systems • C Programming",
    icon: <Database size={40}/>,
    description:
      "A lightweight file system implementation using inode structure, bitmap allocation, superblock management and virtual disk operations.",
    tags:["C","Operating Systems","Filesystem"],
    link:"https://github.com/sadmanthebatman/SimpleFS-File-System-Implementation"
  },
  {
    title:"Bangladesh Board Examination Emergency Network",
    type:"Cisco Infrastructure",
    icon:<Network size={40}/>,
    description:
      "Enterprise network design using VLSM, RIPv2, DHCP, DNS, HTTP, email services and routing configuration.",
    tags:["Cisco","VLSM","Routing"],
    link:"https://github.com/sadmanthebatman/Bangladesh-Board-Examination-Emergency-Network"
  },
  {
    title:"SportPulse",
    type:"Full Stack Development",
    icon:<Code2 size={40}/>,
    description:
      "Sports analytics platform with statistics, player comparison and administration dashboard.",
    tags:["React","Node.js","Dashboard"],
    link:"https://github.com/sadmanthebatman/SportPulse"
  }
];

const skills=[
 {title:"Offensive Security",icon:<Crosshair/>,items:["Kali Linux","Nmap","Burp Suite","Metasploit"]},
 {title:"SOC Tools",icon:<Radar/>,items:["Splunk","Wazuh","Suricata","TheHive","MISP"]},
 {title:"Engineering",icon:<Terminal/>,items:["Python","Docker","Linux","Wireshark"]}
];

export default function Home(){

return(
<main className="min-h-screen bg-[#05070d] text-white px-6 md:px-20 py-10 relative">

<div className="cyber-scan"/>

<nav className="glass p-5 rounded-2xl flex justify-between mb-12">
<div className="flex gap-3 items-center font-bold">
<Shield className="text-green-400"/> SAB.SEC
</div>
<div className="text-green-400 font-mono">● ONLINE</div>
</nav>

<section className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">

<div>
<p className="text-green-400 tracking-widest">
CYBER SECURITY PROFILE
</p>

<h1 className="text-5xl md:text-7xl font-black mt-5">
SADMAN <span className="text-green-400">SAKIB ABIR</span>
</h1>

<h2 className="text-xl text-gray-300 mt-5">
Cybersecurity Analyst
</h2>

<p className="text-gray-400 mt-5 max-w-xl">
Focused on penetration testing, SOC operations, vulnerability assessment,
security monitoring and secure system engineering.
</p>

<div className="flex gap-4 mt-8">
<a className="btn flex gap-2" href="/Sadman-Sakib-Abir-Resume.pdf">
<Download size={18}/> Resume
</a>

<a className="btn flex gap-2" href="https://github.com/sadmanthebatman">
<Github size={18}/> Github
</a>
</div>
</div>

<div className="flex justify-center">
<div className="hud-core">
<Shield size={90} className="text-green-400"/>
</div>
</div>

</section>

<section className="mt-24">
<h2 className="section-title">Professional Experience</h2>

<div className="glass p-8 rounded-3xl mt-8">
<div className="flex gap-4 items-center">
<Server className="text-green-400"/>
<div>
<h3 className="text-2xl font-bold">Cyber Security Analyst Intern</h3>
<p className="text-green-400">Business Automation Limited</p>
</div>
</div>

<ul className="mt-6 space-y-3 text-gray-300">
<li>Performed vulnerability assessment and security testing.</li>
<li>Worked with SOC monitoring and threat detection tools.</li>
<li>Analysed network traffic and security incidents.</li>
</ul>
</div>
</section>

<section className="mt-24">
<h2 className="section-title">Projects</h2>

<div className="grid md:grid-cols-3 gap-6 mt-8">
{projects.map(p=>(
<div key={p.title} className="glass p-6 rounded-3xl">
<div className="text-green-400">{p.icon}</div>
<h3 className="text-xl font-bold mt-5">{p.title}</h3>
<p className="text-green-400 mt-2">{p.type}</p>
<p className="text-gray-400 mt-4">{p.description}</p>
<a href={p.link} className="text-green-400 flex gap-2 mt-5">
<Github size={18}/> Repository <ExternalLink size={15}/>
</a>
</div>
))}
</div>
</section>

<section className="mt-24">
<h2 className="section-title">Security Arsenal</h2>

<div className="grid md:grid-cols-3 gap-6 mt-8">
{skills.map(s=>(
<div key={s.title} className="glass p-6 rounded-3xl">
<div className="text-green-400 flex gap-3">{s.icon}<b>{s.title}</b></div>
{s.items.map(i=><p key={i} className="mt-3 text-gray-300">› {i}</p>)}
</div>
))}
</div>
</section>

<section className="mt-24">
<h2 className="section-title">Contact</h2>
<div className="grid md:grid-cols-3 gap-6 mt-8">
<Contact icon={<Github/>} title="Github" value="github.com/sadmanthebatman" link="https://github.com/sadmanthebatman"/>
<Contact icon={<Linkedin/>} title="LinkedIn" value="Sadman Sakib Abir" link="https://linkedin.com"/>
<Contact icon={<Mail/>} title="Email" value="sadmansakibabir717@gmail.com" link="mailto:sadmansakibabir717@gmail.com"/>
</div>
</section>

</main>
)
}

function Contact({icon,title,value,link}:{icon:ReactNode,title:string,value:string,link:string}){

return(
<a href={link} target="_blank" rel="noopener noreferrer">
<div className="glass p-6 rounded-2xl">
<div className="text-green-400">{icon}</div>
<h3 className="font-bold text-xl mt-4">{title}</h3>
<p className="text-gray-400">{value}</p>
</div>
</a>
)

}
