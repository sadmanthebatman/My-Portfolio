"use client";

import { useEffect, useState } from "react";
import {
  Terminal,
  Shield,
  Activity,
  Wifi,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Code2,
  Network,
  Database,
  ExternalLink,
  Lock,
} from "lucide-react";


const bootLines = [
  "> Initializing SADMAN'S Work",
  "> Loading security modules",
  
  "> You r welcome ✓",
];


const projects = [
  {
    title: "SimpleFS File System Implementation",
    category: "Operating Systems | C | File Systems",
    description:
      "A lightweight file system implementation featuring superblock management, inode-based storage, bitmap allocation, directory entries and virtual disk management.",
    github:
      "https://github.com/sadmanthebatman/SimpleFS-File-System-Implementation",
    icon: <Database size={45}/>,
    tags:[
      "C",
      "OS",
      "Inode",
      "Bitmap Allocation"
    ]
  },

  {
    title: "Bangladesh Board Examination Emergency Network",
    category: "Cisco Networking | Infrastructure",
    description:
      "Enterprise network design using Cisco Packet Tracer with VLSM, RIPv2, static routing, floating static routing, DHCP, DNS, HTTP, email services and redundancy.",
    github:
      "https://github.com/sadmanthebatman/Bangladesh-Board-Examination-Emergency-Network",
    icon:<Network size={45}/>,
    tags:[
      "Cisco",
      "VLSM",
      "Routing",
      "DHCP"
    ]
  },

  {
    title:"SportPulse",
    category:"Full Stack Development | Analytics",
    description:
      "Multi-sport analytics platform providing player statistics, match archives, standings, comparisons and administrative management.",
    github:
      "https://github.com/sadmanthebatman/SportPulse",
    icon:<Code2 size={45}/>,
    tags:[
      "React",
      "Node.js",
      "Dashboard"
    ]
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
"Suricata",
"Docker"
];



export default function Home(){

const [boot,setBoot]=useState("");



useEffect(()=>{

let index=0;

const text=bootLines.join("\n");

const timer=setInterval(()=>{

if(index < text.length){

setBoot(prev=>prev+text[index]);

index++;

}
else{

clearInterval(timer);

}

},40);


return()=>clearInterval(timer);


},[]);




return(

<main className="min-h-screen p-6 md:p-12">



{/* HEADER */}

<header className="flex justify-between items-center border-b border-green-900 pb-6">


<div>

<h1 className="text-3xl font-bold">
SADMAN // CYBER OPERATIONS
</h1>


<p className="text-gray-500 mt-2">
Cyber Security • SOC • Penetration Testing
</p>


</div>



<div className="flex items-center gap-2">

<span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>

ONLINE

</div>


</header>








{/* HERO */}


<section className="grid md:grid-cols-2 gap-8 mt-10">


<div className="terminal">


<div className="flex gap-3 items-center">

<Terminal/>

root@sadman:~$

</div>



<pre className="mt-6 text-green-400 whitespace-pre-wrap">

{boot}

</pre>


<h2 className="text-5xl font-bold mt-8">

SADMAN SAKIB ABIR

</h2>


<p className="text-xl mt-4">

Cybersecurity Enthusiast

</p>


<p className="text-gray-500 mt-3">

Security Researcher | SOC Operations | Pentesting

</p>


</div>






<div className="terminal flex flex-col justify-center">


<div className="flex items-center gap-3">

<Shield/>

SYSTEM PROFILE

</div>



<div className="mt-8 space-y-5">


<p>
ACCESS LEVEL:
<span className="text-green-400">
 ROOT
</span>
</p>


<p>
THREAT STATUS:
<span className="text-green-400">
 LOW
</span>
</p>


<p>
SECURITY MODE:
<span className="text-green-400">
 ACTIVE
</span>
</p>


</div>


</div>



</section>









{/* STATUS */}


<section className="grid md:grid-cols-4 gap-5 mt-10">


<Card icon={<Shield/>} title="Security" value="ROOT"/>

<Card icon={<Activity/>} title="Threat" value="LOW"/>

<Card icon={<Wifi/>} title="Network" value="ONLINE"/>

<Card icon={<Cpu/>} title="System" value="ACTIVE"/>


</section>









{/* PROJECTS */}


<section className="mt-16">


<h2 className="text-4xl font-bold">

FEATURED PROJECTS

</h2>


<p className="text-gray-500 mt-2">
Selected engineering and cybersecurity projects
</p>



<div className="grid md:grid-cols-3 gap-6 mt-8">


{
projects.map(project=>(


<div 
key={project.title}
className="terminal hover:-translate-y-2 transition"
>


<div className="text-green-400">

{project.icon}

</div>


<h3 className="text-xl font-bold mt-5">

{project.title}

</h3>


<p className="text-green-400 mt-2 text-sm">

{project.category}

</p>


<p className="text-gray-400 mt-4 text-sm">

{project.description}

</p>



<div className="flex flex-wrap gap-2 mt-5">

{
project.tags.map(tag=>(

<span
key={tag}
className="border border-green-900 px-3 py-1 rounded text-xs"
>
{tag}
</span>

))
}

</div>


<a
href={project.github}
target="_blank"
className="flex items-center gap-2 mt-6 text-green-400"
>

<Github size={18}/>

VIEW SOURCE

<ExternalLink size={15}/>

</a>


</div>


))
}


</div>


</section>









{/* SKILLS */}


<section className="mt-16">


<h2 className="text-4xl font-bold">

SECURITY ARSENAL

</h2>



<div className="grid md:grid-cols-5 gap-4 mt-8">


{
skills.map(skill=>(

<div
key={skill}
className="terminal text-center"
>

<Lock size={20}/>

<p className="mt-3">

{skill}

</p>


</div>


))
}



</div>


</section>









{/* CONTACT */}

<section className="terminal mt-16 relative overflow-hidden">


{/* Background Glow */}

<div className="
absolute
top-0
right-0
w-72
h-72
bg-green-400/10
blur-3xl
rounded-full
">
</div>



<div className="relative z-10">


<div className="flex items-center gap-3">

<div className="
p-3
rounded-lg
bg-green-400/10
border
border-green-900
">

<Mail className="text-green-400"/>

</div>


<div>

<h2 className="text-3xl font-bold">

CONTACT TERMINAL

</h2>


<p className="text-gray-500 mt-1">

Establish secure communication channel

</p>


</div>


</div>





{/* Terminal Message */}

<div className="
mt-8
border
border-green-900
rounded-xl
p-5
bg-black/50
">


<p className="text-green-400">

root@sadman:~$ connect --secure

</p>


<p className="text-gray-400 mt-3">

Searching available communication channels...

</p>


<p className="text-green-400 mt-2">

✓ Connection endpoints found

</p>


</div>








{/* Contact Cards */}

<div className="
grid
md:grid-cols-3
gap-5
mt-8
">



{/* Github */}

<a

href="https://github.com/sadmanthebatman"

target="_blank"

className="
group
border
border-green-900
rounded-xl
p-5
hover:border-green-400
hover:bg-green-400/5
transition
"

>


<div className="flex items-center gap-3">


<div className="
p-3
rounded-lg
bg-green-400/10
">

<Github size={25}/>

</div>


<div>

<h3 className="font-bold">

GitHub

</h3>


<p className="text-sm text-gray-500">

Source Code Repository

</p>


</div>


</div>



<p className="
mt-4
text-green-400
text-sm
group-hover:underline
">

github.com/sadmanthebatman

</p>


</a>







{/* LinkedIn */}

<a

href="https://linkedin.com/in/sadman-sakib-abir"

target="_blank"

className="
group
border
border-green-900
rounded-xl
p-5
hover:border-green-400
hover:bg-green-400/5
transition
"

>


<div className="flex items-center gap-3">


<div className="
p-3
rounded-lg
bg-green-400/10
">

<Linkedin size={25}/>

</div>


<div>

<h3 className="font-bold">

LinkedIn

</h3>


<p className="text-sm text-gray-500">

Professional Network

</p>


</div>


</div>



<p className="
mt-4
text-green-400
text-sm
group-hover:underline
">

linkedin.com/in/sadman-sakib-abir

</p>


</a>







{/* Email */}

<a

href="mailto:sadmansakibabir717@gmail.com"

className="
group
border
border-green-900
rounded-xl
p-5
hover:border-green-400
hover:bg-green-400/5
transition
"

>


<div className="flex items-center gap-3">


<div className="
p-3
rounded-lg
bg-green-400/10
">

<Mail size={25}/>

</div>


<div>

<h3 className="font-bold">

Email

</h3>


<p className="text-sm text-gray-500">

Direct Communication

</p>


</div>


</div>



<p className="
mt-4
text-green-400
text-sm
group-hover:underline
">

sadmansakibabir717@gmail.com

</p>


</a>



</div>








{/* Footer Command */}

<div className="
mt-10
text-center
text-gray-500
text-sm
">


<p>

&gt; Waiting for incoming connection...

<span className="animate-pulse text-green-400">

█

</span>

</p>


</div>


</div>


</section>





function Card({
icon,
title,
value
}:{
icon:React.ReactNode;
title:string;
value:string;
}){


return(

<div className="terminal">

<div className="flex gap-3">

{icon}

{title}

</div>


<h3 className="text-3xl mt-5">

{value}

</h3>


</div>

)

}
