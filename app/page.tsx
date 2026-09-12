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
  Lock,
  Activity,
} from "lucide-react";


const projects = [

{
title:"SimpleFS File System Implementation",
type:"Operating Systems • C Programming",
icon:<Database size={42}/>,
description:
"Low level file system implementation featuring inode architecture, bitmap allocation, superblock management and virtual disk operations.",
tags:["C","OS","Filesystem","Inode"],
link:"https://github.com/sadmanthebatman/SimpleFS-File-System-Implementation"
},


{
title:"Bangladesh Board Examination Emergency Network",
type:"Cisco Infrastructure",
icon:<Network size={42}/>,
description:
"Enterprise level Cisco Packet Tracer network implementing VLSM, RIPv2, DHCP, DNS, HTTP, Email services and routing redundancy.",
tags:["Cisco","VLSM","Routing","Network"],
link:"https://github.com/sadmanthebatman/Bangladesh-Board-Examination-Emergency-Network"
},


{
title:"SportPulse",
type:"Full Stack Application",
icon:<Code2 size={42}/>,
description:
"A sports analytics platform providing statistics, player comparison, standings and administration dashboard.",
tags:["React","Node.js","Dashboard"],
link:"https://github.com/sadmanthebatman/SportPulse"
}

];



const arsenal = [

{
title:"Offensive Security",
icon:<Crosshair/>,
items:[
"Kali Linux",
"Nmap",
"Burp Suite",
"Metasploit",
"ffuf",
"Shodan"
]
},


{
title:"SOC & Detection",
icon:<Radar/>,
items:[
"Splunk",
"Wazuh",
"Suricata IDS",
"TheHive",
"MISP",
"ESET XDR"
]
},


{
title:"Engineering",
icon:<Terminal/>,
items:[
"Python",
"Docker",
"Linux",
"Wireshark",
"Velociraptor",
"VirusTotal"
]
}

];



export default function Home(){


return(

<main className="
min-h-screen
overflow-hidden
bg-[#05070d]
text-white
relative
px-6
md:px-20
py-12
">
<div className="cyber-scan" />
  

{/* animated background */}

<div className="
absolute inset-0
bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),transparent_35%)]
">
</div>


<div className="
absolute top-20 left-10
h-40 w-40
rounded-full
bg-green-500/20
blur-3xl
animate-pulse
">
</div>


<div className="
absolute bottom-20 right-10
h-60 w-60
rounded-full
bg-cyan-500/20
blur-3xl
animate-pulse
">
</div>




{/* HERO */}

<section className="
relative
grid
md:grid-cols-2
gap-12
items-center
min-h-[80vh]
">


<div>


<div className="
flex
items-center
gap-3
text-green-400
font-semibold
tracking-widest
animate-pulse
">

<Shield/>

CYBER SECURITY PROFILE

</div>



<h1 className="
mt-8
text-5xl
md:text-7xl
font-black
leading-tight
">

SADMAN

<span className="
text-transparent
bg-clip-text
bg-gradient-to-r
from-green-400
to-cyan-400
">

 SAKIB ABIR

</span>

</h1>



<p className="
mt-6
text-xl
text-gray-300
">

Cybersecurity Analyst
<br/>
<span className="text-green-400">
Offensive Security • SOC • Network Defense
</span>

</p>




<p className="
mt-6
max-w-xl
text-gray-400
leading-relaxed
">

Focused on penetration testing, vulnerability assessment,
security monitoring, malware analysis and secure system engineering.

</p>




<div className="
flex
flex-wrap
gap-5
mt-10
">


<a
href="/Sadman-Sakib-Abir-Resume.pdf"
className="
group
flex
items-center
gap-3
px-6
py-3
rounded-xl
bg-green-500
text-black
font-bold
hover:scale-105
transition
"
>

<Download size={18}/>

Resume

</a>




<a
href="https://github.com/sadmanthebatman"
className="
flex
items-center
gap-3
px-6
py-3
rounded-xl
border
border-green-400/40
bg-white/5
backdrop-blur
hover:bg-green-400/10
transition
"
>

<Github/>

Github

</a>


</div>



</div>



{/* NAVBAR */}

<nav
className="
relative
mb-16
flex
justify-between
items-center
rounded-2xl
px-6
py-4
bg-white/5
border
border-white/10
backdrop-blur-xl
"
>


<div
className="
flex
items-center
gap-3
font-black
tracking-widest
"
>

<div
className="
w-10
h-10
rounded-xl
bg-green-400/10
border
border-green-400/30
flex
items-center
justify-center
"
>

<Shield
className="text-green-400"
/>

</div>


SAB.SEC


</div>




<div
className="
hidden
md:flex
items-center
gap-8
text-sm
text-gray-400
"
>


<a
href="#experience"
className="
hover:text-green-400
transition
"
>
Experience
</a>


<a
href="#projects"
className="
hover:text-green-400
transition
"
>
Projects
</a>


<a
href="#contact"
className="
hover:text-green-400
transition
"
>
Contact
</a>


</div>




<div
className="
flex
items-center
gap-2
text-green-400
text-sm
font-mono
"
>

<span
className="
w-2
h-2
rounded-full
bg-green-400
animate-pulse
"
/>

SECURE

</div>


</nav>
{/* futuristic visual */}

{/* CYBER HUD VISUAL */}

<div className="
relative
flex
justify-center
items-center
h-[420px]
">


{/* outer radar rings */}

<div className="
absolute
w-[360px]
h-[360px]
rounded-full
border
border-green-400/20
slow-rotate
">


<div className="
absolute
top-0
left-1/2
w-[2px]
h-full
bg-gradient-to-b
from-green-400/50
to-transparent
">
</div>


</div>



<div className="
absolute
w-[280px]
h-[280px]
rounded-full
border
border-cyan-400/20
reverse-rotate
">


<div className="
absolute
left-1/2
top-0
h-full
w-[1px]
bg-cyan-400/30
">
</div>


</div>





{/* center core */}

<div className="
relative
z-10
w-48
h-48
rounded-full
bg-gradient-to-br
from-green-400/20
to-cyan-400/20
border
border-green-400/40
backdrop-blur-xl
flex
items-center
justify-center
shadow-[0_0_80px_rgba(34,197,94,0.25)]
cyber-float
">


<Shield
size={85}
className="
text-green-400
drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]
"
/>


</div>





{/* floating status cards */}



<div className="
absolute
top-10
right-0
glass
px-5
py-4
border-green-400/20
animate-bounce
">


<div className="
flex
items-center
gap-3
">


<div className="
w-3
h-3
rounded-full
bg-green-400
animate-pulse
"
/>


<div>

<p className="
text-xs
text-gray-400
">

SYSTEM

</p>


<p className="
text-green-400
font-bold
">

ONLINE

</p>


</div>


</div>


</div>





<div className="
absolute
bottom-14
left-0
glass
px-5
py-4
">


<div className="
flex
gap-3
items-center
">


<Terminal
size={25}
className="
text-cyan-400
"/>


<div>

<p className="
text-xs
text-gray-400
">

ACCESS

</p>


<p className="
text-white
font-bold
">

AUTHORIZED

</p>


</div>


</div>


</div>







<div className="
absolute
top-1/2
left-0
translate-y-[-50%]
glass
px-4
py-3
hidden
lg:block
">


<p className="
text-xs
text-gray-400
font-mono
">

PORT_SCAN

</p>


<p className="
text-green-400
font-bold
">

1024 PORTS

</p>


</div>








<div className="
absolute
bottom-8
right-0
glass
px-5
py-4
hidden
md:block
">


<div className="
flex
items-center
gap-3
">


<Radar
className="
text-green-400
"
/>


<div>

<p className="
text-xs
text-gray-400
">

THREAT LEVEL

</p>


<p className="
text-green-400
font-bold
">

LOW

</p>


</div>


</div>


</div>






</div>



<div className="
absolute
top-10
right-10
glass
p-5
animate-bounce
">

<Activity className="text-green-400"/>

</div>



<div className="

absolute


bottom-10
left-10
glass
p-5
">

<Cpu className="text-cyan-400"/>

</div>



</div>
{/* EXPERIENCE */}

<section 
id="experience"
className="relative mt-32"
>


<h2 className="
text-4xl
font-black
bg-gradient-to-r
from-green-400
to-cyan-400
bg-clip-text
text-transparent
">

Professional Experience

</h2>



<div className="
mt-10
glass-card
p-8
rounded-3xl
border
border-green-400/20
bg-white/5
backdrop-blur-xl
hover:border-green-400/50
transition
">


<div className="
flex
gap-5
items-center
">


<div className="
p-4
rounded-xl
bg-green-400/10
">

<Server
className="text-green-400"
size={35}
/>

</div>



<div>

<h3 className="
text-2xl
font-bold
">

Cyber Security Analyst Intern

</h3>


<p className="
text-green-400
mt-1
">

Business Automation Limited

</p>


<p className="
text-gray-400
text-sm
">

Oct 2025 — Jan 2026

</p>


</div>


</div>




<div className="
mt-8
grid
md:grid-cols-2
gap-5
">


{

[
"Performed vulnerability assessment and penetration testing using Nessus and Nuclei.",
"Analysed CVEs and prepared security remediation reports.",
"Worked with SOC monitoring tools including Wazuh, Suricata and ESET XDR.",
"Supported threat intelligence workflow using Splunk, TheHive and MISP.",
"Performed malware and network analysis using Wireshark and VirusTotal.",
"Investigated security events and improved defensive monitoring."
]

.map((item,index)=>(


<div
key={index}
className="
p-4
rounded-xl
bg-black/30
border
border-white/10
hover:border-green-400/40
transition
text-gray-300
"
>

<span className="
text-green-400
mr-2
">

&gt;

</span>

{item}


</div>


))


}


</div>


</div>


</section>







{/* PROJECTS */}


<section className="
relative
mt-32
">


<h2 className="
text-4xl
font-black
bg-gradient-to-r
from-green-400
to-cyan-400
bg-clip-text
text-transparent
">

Featured Projects

</h2>



<p className="
text-gray-400
mt-3
">

Security, networking and software engineering projects

</p>





<div className="
grid
md:grid-cols-3
gap-8
mt-10
">


{

projects.map(project=>(


<div
key={project.title}
className="
group
relative
rounded-3xl
p-7
overflow-hidden
bg-white/5
border
border-white/10
backdrop-blur-xl
hover:-translate-y-3
hover:border-green-400/60
transition-all
duration-500
"
>



<div className="
absolute
inset-0
bg-gradient-to-br
from-green-400/10
to-cyan-400/10
opacity-0
group-hover:opacity-100
transition
">

</div>




<div className="
relative
">


<div className="
text-green-400
">

{project.icon}

</div>




<h3 className="
mt-6
text-xl
font-bold
">

{project.title}

</h3>




<p className="
text-green-400
text-sm
mt-3
">

{project.type}

</p>




<p className="
mt-5
text-gray-400
text-sm
leading-relaxed
">

{project.description}

</p>





<div className="
flex
flex-wrap
gap-2
mt-6
">


{

project.tags.map(tag=>(


<span
key={tag}
className="
px-3
py-1
rounded-full
text-xs
bg-green-400/10
border
border-green-400/20
text-green-300
"
>

{tag}

</span>


))

}


</div>




<a
href={project.link}
target="_blank"
rel="noopener noreferrer"
className="
flex
items-center
gap-2
mt-7
text-green-400
hover:text-cyan-400
transition
"
>


<Github size={18}/>

Repository

<ExternalLink size={15}/>


</a>



</div>


</div>


))


}


</div>



</section>









{/* SECURITY ARSENAL */}


<section className="
relative
mt-32
">


<h2 className="
text-4xl
font-black
bg-gradient-to-r
from-green-400
to-cyan-400
bg-clip-text
text-transparent
">

Security Arsenal

</h2>



<p className="
text-gray-400
mt-3
">

Tools and technologies used in offensive and defensive security

</p>




<div className="
grid
md:grid-cols-3
gap-7
mt-10
">


{

arsenal.map(group=>(



<div
key={group.title}
className="
rounded-3xl
p-7
bg-white/5
border
border-white/10
backdrop-blur-xl
hover:border-cyan-400/50
transition
"
>


<div className="
flex
items-center
gap-4
text-green-400
">


{group.icon}


<h3 className="
text-xl
font-bold
text-white
">

{group.title}

</h3>


</div>




<div className="
mt-7
space-y-3
">


{

group.items.map(item=>(


<div
key={item}
className="
flex
items-center
gap-3
text-gray-300
border-b
border-white/10
pb-3
"
>


<span className="
text-green-400
">

›

</span>


{item}


</div>


))


}


</div>


</div>


))


}


</div>


</section>


</section>
{/* CONTACT */}

<section className="relative mt-32 mb-20">

  <div
    className="
    absolute
    left-1/2
    -translate-x-1/2
    -top-24
    w-[500px]
    h-[250px]
    bg-green-500/10
    blur-[120px]
    pointer-events-none
    "
  />

  <div className="relative">

    <p
      className="
      text-green-400
      font-mono
      tracking-[0.25em]
      text-sm
      uppercase
      "
    >
      // establish_connection
    </p>

    <h2
      className="
      text-4xl
      md:text-5xl
      font-black
      mt-3
      bg-gradient-to-r
      from-white
      via-green-300
      to-cyan-400
      bg-clip-text
      text-transparent
      "
    >
      Feel Free To Reach Out.
    </h2>

    <p
      className="
      text-gray-400
      mt-4
      max-w-2xl
      leading-relaxed
      "
    >
      Interested in cybersecurity, networking, software engineering,
      collaboration or new opportunities? Connect with me through the
      platforms below.
    </p>

  </div>


  <div
    className="
    grid
    md:grid-cols-3
    gap-6
    mt-12
    "
  >

    <Contact
      icon={<Github size={28} />}
      title="GitHub"
      value="github.com/sadmanthebatman"
      link="https://github.com/sadmanthebatman"
    />

    <Contact
      icon={<Linkedin size={28} />}
      title="LinkedIn"
      value="Sadman Sakib Abir"
      link="https://www.linkedin.com/in/sadman-sakib-abir-38967841b"
    />

    <Contact
      icon={<Mail size={28} />}
      title="Email"
      value="sadmansakibabir717@gmail.com"
      link="mailto:sadmansakibabir717@gmail.com"
    />

  </div>


  {/* TERMINAL */}

  <div
    className="
    mt-20
    rounded-3xl
    overflow-hidden
    border
    border-green-400/20
    bg-black/60
    backdrop-blur-xl
    shadow-[0_0_60px_rgba(34,197,94,0.08)]
    "
  >

    {/* terminal top bar */}

    <div
      className="
      flex
      items-center
      justify-between
      px-5
      py-4
      border-b
      border-white/10 
      bg-white/[0.03]
      "
    >

      <div className="flex gap-2">

        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />

      </div>

      <div
        className="
        flex
        items-center
        gap-2
        text-gray-500
        text-xs
        font-mono
        "
      >
        <Terminal size={14} />
        sadman@security-terminal
      </div>

    </div>


    {/* terminal body */}

    <div
      className="
      p-6
      md:p-8
      font-mono
      text-sm
      md:text-base
      leading-8
      "
    >

      <p className="text-gray-500">
        Last login: secure session established
 

     <

/p>

      <p className="mt-3">
        <span className="text-green-400">sadman@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-white">$ whoami</span>
      </p>

      <p className="text-gray-300 ml-4">
        Cybersecurity Enthusiast
      </p>


      <p className="mt-2">
        <span className="text-green-400">sadman@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-white">$ cat focus.txt</span>
      </p>

      <p className="text-gray-300 ml-4">
        Penetration Testing • SOC • Network Security • System Engineering
      </p>


      <p className="mt-2">
        <span className="text-green-400">sadman@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-white">$ status</span>
      </p>

      <p className="ml-4 text-green-400">
        ● Available for opportunities
      </p>


      <p className="mt-2 flex items-center">
        <span className="text-green-400">sadman@portfolio</span>
        <span className="text-gray-500">:</span>
        <span className="text-cyan-400">~</span>
        <span className="text-white">$</span>

        <span
          className="
          inline-block
          ml-2
          w-[9px]
          h-5
          bg-green-400
          animate-pulse
          "
        />

      </p>

    </div>

  </div>


  {/* FOOTER */}

  <div
    className="
    mt-20
    pt-8
    border-t
    border-white/10
    flex
    flex-col
    md:flex-row
    justify-between
    items-center
    gap-5
    text-sm
    text-gray-500
    "
  >

    <p>
      © 2026 Sadman Sakib Abir
    </p>


    <div className="flex items-center gap-3">

      <div
        className="
        w-2
        h-2
        bg-green-400
        rounded-full
        animate-pulse
        shadow-[0_0_10px_rgba(74,222,128,0.9)]
        "
      />

      <span className="font-mono">
        SYSTEM ONLINE
      </span>

    </div>

  </div>

</section>

</main>

);

}

function Contact({
  icon,
  title,
  value,
  link,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  link: string;
}) {

  return (

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group
      relative
      block
      rounded-2xl
      overflow-hidden
      "
    >

      {/* hover glow */}

      <div
        className="
        absolute
        -inset-[1px]
        rounded-2xl
        bg-gradient-to-r
        from-green-400
        via-cyan-400
        to-green-400
        opacity-0
        blur
        group-hover:opacity-50
        transition
        duration-500
        "
      />


      <div
        className="
        relative
        h-full
        rounded-2xl
        p-6
        bg-[#080d12]/90
        border
        border-white/10
        backdrop-blur-xl
        group-hover:border-green-400/40
        transition-all
        duration-500
        group-hover:-translate-y-1
        "
      >

        <div
          className="
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          bg-green-400/10
          border
          border-green-400/20
          text-green-400
          group-hover:text-cyan-300
          group-hover:scale-110
          transition-all
          duration-300
          "
        >
          {icon}
        </div>


        <h3
          className="
          text-xl
          font-bold
          text-white
          mt-5
          "
        >
          {title}
        </h3>


        <p
          className="
          text-gray-400
          text-sm
          mt-2
          break-words
          "
        >
          {value}
        </p>


        <div
          className="
          flex
          items-center
          gap-2
          mt-5
          text-green-400
          text-sm
          font-medium
          "
        >
          Connect

          <ExternalLink
            size={14}
            className="
            group-hover:translate-x-1
            group-hover:-translate-y-1
            transition
            "
          />

        </div>

      </div>

    </a>

  );

}
