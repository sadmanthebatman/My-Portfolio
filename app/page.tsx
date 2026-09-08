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
  Lock,
  Server,
  Download,
} from "lucide-react";


const projects = [
  {
    title: "SimpleFS File System Implementation",
    type: "Operating Systems • C Programming",
    icon: <Database size={40}/>,
    description:
      "A lightweight file system implementation featuring superblock management, inode-based storage, bitmap allocation, directory entries, and virtual disk management.",
    tags:["C","File System","Inode","OS"],
    link:"https://github.com/sadmanthebatman/SimpleFS-File-System-Implementation"
  },


  {
    title:"Bangladesh Board Examination Emergency Network",
    type:"Cisco Networking • Infrastructure",
    icon:<Network size={40}/>,
    description:
      "Enterprise network design using Cisco Packet Tracer with VLSM, RIPv2, static routing, DHCP, DNS, HTTP, email services and redundancy.",
    tags:["Cisco","VLSM","Routing","Networking"],
    link:"https://github.com/sadmanthebatman/Bangladesh-Board-Examination-Emergency-Network"
  },


  {
    title:"SportPulse",
    type:"Full Stack Development",
    icon:<Code2 size={40}/>,
    description:
      "Multi-sport analytics platform with player statistics, match archives, standings, comparisons and admin dashboard.",
    tags:["React","Node.js","Dashboard"],
    link:"https://github.com/sadmanthebatman/SportPulse"
  }
];



const skills=[
"Kali Linux",
"Burp Suite",
"Nmap",
"Metasploit",
"Python",
"Wireshark",
"Wazuh",
"Splunk",
"Docker",
"Linux"
];



export default function Home(){


return(

<main className="min-h-screen text-white px-6 md:px-16 py-10">


{/* HERO */}


<section className="
grid md:grid-cols-2 gap-10 items-center
">


<div>


<div className="
flex items-center gap-3 text-green-400 mb-5
">

<Shield/>

CYBER SECURITY PROFILE

</div>



<h1 className="
text-5xl md:text-7xl font-bold
leading-tight
">

SADMAN
<br/>

<span className="text-green-400">

SAKIB ABIR

</span>


</h1>


<p className="
text-xl text-gray-400 mt-6
">

Cybersecurity Enthusiast

</p>


<p className="
text-gray-500 mt-4 max-w-xl
">

Focused on penetration testing, SOC operations,
security research, and building secure systems.

</p>



<div className="flex gap-4 mt-8">


<a className="btn">

<Download size={18}/>

Resume

</a>


<a className="btn">

Github

</a>


</div>


</div>





{/* SYSTEM CARD */}


<div className="glass">


<div className="flex gap-3 items-center">

<Terminal/>

SYSTEM STATUS

</div>


<div className="mt-8 space-y-5">


<div>

<p className="text-gray-500">
Availability
</p>

<p className="text-green-400 text-xl">
ONLINE
</p>

</div>



<div>

<p className="text-gray-500">
Security Level
</p>

<p className="text-green-400 text-xl">
ACTIVE
</p>

</div>



<div>

<p className="text-gray-500">
Primary Focus
</p>

<p>
SOC / Pentesting
</p>

</div>


</div>


</div>


</section>









{/* PROJECTS */}


<section className="mt-24">


<h2 className="section-title">

Featured Projects

</h2>


<p className="subtitle">

Selected engineering and cybersecurity projects

</p>




<div className="
grid md:grid-cols-3 gap-8 mt-10
">


{
projects.map(project=>(


<div
key={project.title}
className="glass project-card"
>


<div className="text-green-400">

{project.icon}

</div>



<h3 className="text-xl font-bold mt-6">

{project.title}

</h3>



<p className="text-green-400 text-sm mt-2">

{project.type}

</p>



<p className="text-gray-400 mt-5 text-sm">

{project.description}

</p>



<div className="flex flex-wrap gap-2 mt-5">

{
project.tags.map(tag=>(

<span
key={tag}
className="tag"
>

{tag}

</span>

))
}

</div>



<a
href={project.link}
target="_blank"
className="
flex items-center gap-2
text-green-400
mt-6
"
>

View Repository

<ExternalLink size={16}/>

</a>



</div>


))

}



</div>


</section>









{/* SKILLS */}


<section className="mt-24">


<h2 className="section-title">

Security Arsenal

</h2>



<div className="
grid grid-cols-2 md:grid-cols-5 gap-5 mt-10
">


{
skills.map(skill=>(

<div
key={skill}
className="glass text-center py-6"
>

<Lock
className="mx-auto text-green-400"
/>


<p className="mt-3">

{skill}

</p>


</div>

))
}


</div>


</section>









{/* EXPERIENCE */}


<section className="mt-24">


<h2 className="section-title">

Experience

</h2>



<div className="glass mt-8">


<div className="flex gap-3">

<Server/>

<h3 className="text-xl">

Cyber Security Analyst Intern

</h3>


</div>


<p className="text-green-400 mt-3">

Business Automation Limited

</p>



<p className="text-gray-400 mt-5">

• Vulnerability Assessment

<br/>

• Penetration Testing

<br/>

• Security Monitoring

<br/>

• Threat Analysis

</p>


</div>


</section>









{/* CONTACT */}


<section className="mt-24">


<h2 className="section-title">

Secure Communication

</h2>



<div className="
grid md:grid-cols-3 gap-6 mt-10
">


<ContactCard
icon={<Github/>}
title="GitHub"
value="github.com/sadmanthebatman"
/>



<ContactCard
icon={<Linkedin/>}
title="LinkedIn"
value="linkedin.com/in/sadman-sakib-abir"
/>



<ContactCard
icon={<Mail/>}
title="Email"
value="sadmansakibabir717@gmail.com"
/>



</div>


</section>




</main>

)

}




function ContactCard({
icon,
title,
value
}:{
icon:React.ReactNode;
title:string;
value:string;
}){


return(

<div className="glass">

<div className="text-green-400">

{icon}

</div>


<h3 className="mt-4 text-xl">

{title}

</h3>


<p className="text-gray-400 mt-2 text-sm">

{value}

</p>


</div>

)

}
