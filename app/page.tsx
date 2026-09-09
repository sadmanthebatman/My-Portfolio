"use client";

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
} from "lucide-react";


const projects = [

{
title:"SimpleFS File System Implementation",
type:"Operating Systems • C Programming",
icon:<Database size={45}/>,
description:
"A lightweight file system implementation featuring superblock management, inode-based storage, bitmap allocation, directory entries and virtual disk management.",
tags:["C","File System","Inode","Operating Systems"],
link:"https://github.com/sadmanthebatman/SimpleFS-File-System-Implementation"
},


{
title:"Bangladesh Board Examination Emergency Network",
type:"Cisco Networking • Infrastructure",
icon:<Network size={45}/>,
description:
"Enterprise network architecture using Cisco Packet Tracer with VLSM, RIPv2, static routing, DHCP, DNS, HTTP, email services and redundancy.",
tags:["Cisco","VLSM","Routing","Networking"],
link:"https://github.com/sadmanthebatman/Bangladesh-Board-Examination-Emergency-Network"
},


{
title:"SportPulse",
type:"Full Stack Development",
icon:<Code2 size={45}/>,
description:
"Multi-sport analytics platform with player statistics, match archives, standings, comparisons and administration dashboard.",
tags:["React","Node.js","Dashboard"],
link:"https://github.com/sadmanthebatman/SportPulse"
}

];



const securityGroups=[

{
title:"Offensive Security",
icon:<Crosshair/>,
items:[
"Kali Linux",
"Burp Suite",
"Nmap",
"Metasploit",
"ffuf",
"Shodan"
]
},


{
title:"Detection & Monitoring",
icon:<Radar/>,
items:[
"Suricata IDS/IPS",
"Wazuh",
"Splunk",
"TheHive",
"MISP",
"ESET XDR"
]
},


{
title:"Analysis & Engineering",
icon:<Terminal/>,
items:[
"Python",
"Docker",
"Wireshark",
"Velociraptor",
"VirusTotal",
"Linux"
]
}

];



export default function Home(){


return(

<main className="min-h-screen px-6 md:px-16 py-10">


{/* HERO */}

<section className="grid md:grid-cols-2 gap-10 items-center">


<div>


<div className="flex gap-3 items-center text-green-400 mb-6">

<Shield/>

CYBER SECURITY PROFILE

</div>


<h1 className="text-5xl md:text-7xl font-bold !text-white">

SADMAN{" "}

<span className="text-green-400">

SAKIB ABIR

</span>

</h1>



<h2 className="text-xl mt-6 text-gray-300">

Cybersecurity Enthusiast

</h2>


<p className="text-gray-300 mt-5 max-w-xl">

Focused on penetration testing, SOC operations,
security monitoring, vulnerability assessment,
and secure system engineering.

</p>



<div className="flex gap-4 mt-8">


<a
href="/Sadman-Sakib-Abir-Resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="btn"
>

<Download size={18}/>

Resume

</a>




<a
href="https://github.com/sadmanthebatman"
target="_blank"
rel="noopener noreferrer"
className="btn"
>

<Github size={18}/>

GitHub

</a>


</div>


</div>

</section>





{/* EXPERIENCE */}

<section className="mt-24">


<h2 className="section-title !text-white">

Professional Experience

</h2>



<div className="glass mt-10">


<div className="flex gap-4 items-center">


<Server className="text-green-400"/>


<div>


<h3 className="text-2xl font-bold !text-white">

Cyber Security Analyst Intern

</h3>


<p className="text-green-400">

Business Automation Limited

</p>


<p className="text-gray-400">

Oct 2025 — Jan 2026

</p>


</div>

</div>




<div className="mt-8 text-gray-300 space-y-5 leading-relaxed">


<p>
• Performed vulnerability assessments and penetration testing using <b>Nessus</b> and <b>Nuclei</b> including CVE analysis.
</p>


<p>
• Worked with threat detection, security monitoring, endpoint visibility and incident investigation.
</p>


<p>
• Used <b>Suricata</b>, <b>Wazuh</b>, and <b>ESET XDR</b> for security monitoring.
</p>


<p>
• Supported SOC workflows using <b>Splunk</b>, <b>TheHive</b> and <b>MISP</b>.
</p>


<p>
• Conducted malware and network analysis using <b>Wireshark</b>, <b>Velociraptor</b> and <b>VirusTotal</b>.
</p>


<p>
• Created security assessment reports with remediation recommendations.
</p>


</div>


</div>


</section>





{/* PROJECTS */}

<section className="mt-24">


<h2 className="section-title !text-white">

Featured Projects

</h2>


<p className="subtitle !text-gray-300">

Security, networking and software engineering projects

</p>

<div className="grid md:grid-cols-3 gap-8 mt-10">


{projects.map(project=>(


<div
key={project.title}
className="glass project-card"
>


<div className="text-green-400">

{project.icon}

</div>


<h3 className="text-xl font-bold mt-6 !text-white">

{project.title}

</h3>


<p className="text-green-400 text-sm mt-3">

{project.type}

</p>




<p className="text-gray-300 mt-5 text-sm">

{project.description}

</p>




<div className="flex flex-wrap gap-2 mt-5">


{project.tags.map(tag=>(

<span 
className="tag" 
key={tag}
>

{tag}

</span>

))}


</div>





<a
href={project.link}
target="_blank"
rel="noopener noreferrer"
className="flex gap-2 items-center text-green-400 mt-6"
>


<Github size={18}/>

View Repository

<ExternalLink size={15}/>


</a>




</div>


))}


</div>


</section>






{/* SECURITY ARSENAL */}


<section className="mt-24">


<h2 className="section-title !text-white">

Security Arsenal

</h2>



<p className="subtitle !text-gray-300">

Tools and technologies used for offensive and defensive security

</p>




<div className="grid md:grid-cols-3 gap-6 mt-10">


{securityGroups.map(group=>(


<div 
className="glass" 
key={group.title}
>



<div className="flex gap-3 items-center text-green-400">


{group.icon}



<h3 className="text-xl font-bold !text-white">

{group.title}

</h3>


</div>





<div className="mt-6 space-y-3">


{group.items.map(item=>(


<div
key={item}
className="border-b border-green-900 pb-2 !text-white"
>


&gt; {item}


</div>


))}


</div>



</div>


))}


</div>


</section>






{/* CONTACT */}


<section className="mt-24">


<h2 className="section-title !text-white">

Feel Free To Reach Out.

</h2>





<div className="grid md:grid-cols-3 gap-6 mt-10">


<Contact
icon={<Github/>}
title="GitHub"
value="github.com/sadmanthebatman"
link="https://github.com/sadmanthebatman"
/>




<Contact
icon={<Linkedin/>}
title="LinkedIn"
value="www.linkedin.com/in/sadman-sakib-abir-38967841b"
link="https://www.linkedin.com/in/sadman-sakib-abir-38967841b"
/>





<Contact
icon={<Mail/>}
title="Email"
value="sadmansakibabir717@gmail.com"
link="mailto:sadmansakibabir717@gmail.com"
/>



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
icon:React.ReactNode;
title:string;
value:string;
link:string;
}){


return(

<a
href={link}
target="_blank"
rel="noopener noreferrer"
className="block"
>



<div className="glass hover:border-green-400 transition cursor-pointer">


<div className="text-green-400">

{icon}

</div>




<h3 className="text-xl mt-4 !text-white">

{title}

</h3>




<p className="text-gray-300 mt-2">

{value}

</p>



</div>



</a>

)

}
