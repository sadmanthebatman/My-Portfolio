"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Shield,
  Activity,
  Wifi,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Crosshair,
  Database,
  Lock,
  Server,
  FileText,
  Award,
  Target,
} from "lucide-react";


const bootText = [
  "Initializing SADMAN.OS security framework...",
  "Loading cyber operations profile...",
  "Connecting threat intelligence database...",
  "Starting SOC monitoring modules...",
  "Access granted: ROOT USER",
];


const skills = [
  {
    name: "Kali Linux",
    level: "95%",
    type: "Offensive Security",
  },
  {
    name: "Burp Suite",
    level: "90%",
    type: "Web Pentesting",
  },
  {
    name: "Nmap",
    level: "90%",
    type: "Network Recon",
  },
  {
    name: "Python",
    level: "90%",
    type: "Automation",
  },
  {
    name: "Wireshark",
    level: "85%",
    type: "Network Analysis",
  },
  {
    name: "Wazuh / SIEM",
    level: "85%",
    type: "SOC Operations",
  },
];


const projects = [
  {
    title: "TCP Port Scanner",
    tech: "Python | Socket Programming",
    desc: "Network reconnaissance tool for scanning open ports and analyzing services.",
  },
  {
    title: "Security Research Lab",
    tech: "Linux | Vulnerability Assessment",
    desc: "Hands-on penetration testing environment for security experiments.",
  },
  {
    title: "SOC Monitoring Platform",
    tech: "SIEM | Threat Detection",
    desc: "Security monitoring workflow using defensive security concepts.",
  },
];


export default function Home() {

  const [boot, setBoot] = useState("");
  const [cmd, setCmd] = useState("");


  useEffect(() => {

    const text = bootText.join("\n");
    let index = 0;


    const timer = setInterval(() => {

      if(index < text.length){

        setBoot(prev => prev + text[index]);
        index++;

      }
      else{

        clearInterval(timer);

      }

    },35);


    return ()=>clearInterval(timer);

  },[]);



return (

<main className="min-h-screen p-6 md:p-12">


{/* HEADER */}

<header className="flex justify-between items-center border-b border-green-900 pb-5">


<div>

<h1 className="text-3xl font-bold">

SADMAN // CYBER OPERATIONS

</h1>


<p className="text-gray-500">

Security Research | Penetration Testing | SOC

</p>

</div>


<div className="flex items-center gap-2">

<span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>

ONLINE

</div>


</header>





{/* HERO */}


<section className="grid md:grid-cols-3 gap-6 mt-10">


<motion.div

initial={{opacity:0,x:-40}}

animate={{opacity:1,x:0}}

className="terminal flex flex-col items-center justify-center"

>


<div className="border border-green-400 rounded-full p-8">

<Shield size={80}/>

</div>


<h2 className="text-3xl mt-5">

ROOT

</h2>


<p>

Cyber Security Operator

</p>


<p className="text-gray-500 mt-3">

Clearance Level: MAX

</p>


</motion.div>





<motion.div

initial={{opacity:0,x:40}}

animate={{opacity:1,x:0}}

className="terminal md:col-span-2"

>


<div className="flex gap-3 items-center">

<Terminal/>

root@sadman:~$

</div>


<pre className="mt-6 whitespace-pre-wrap">

{boot}

<span className="animate-pulse">
█
</span>

</pre>


<h2 className="text-5xl font-bold mt-8">

SADMAN SAKIB ABIR

</h2>


<p className="text-xl mt-3">

Cybersecurity Enthusiast

</p>


<p className="text-gray-500">

Penetration Testing • SOC Operations • Security Research

</p>


</motion.div>


</section>








{/* SYSTEM STATUS */}


<section className="grid md:grid-cols-4 gap-5 mt-10">


<Status icon={<Shield/>} title="Security" value="ROOT"/>
<Status icon={<Activity/>} title="Threat" value="LOW"/>
<Status icon={<Wifi/>} title="Network" value="ONLINE"/>
<Status icon={<Cpu/>} title="System" value="ACTIVE"/>


</section>









{/* COMMAND TERMINAL */}


<section className="terminal mt-10">


<h2 className="text-3xl flex gap-3">

<Terminal/>

Interactive Terminal

</h2>


<div className="mt-5">

root@sadman:~$

<input

className="bg-transparent outline-none ml-3"

value={cmd}

onChange={(e)=>setCmd(e.target.value)}

placeholder="type help"

/>

</div>



{
cmd==="help" &&

<div className="mt-5 text-gray-400">

<p>about</p>
<p>skills</p>
<p>projects</p>
<p>resume</p>
<p>contact</p>

</div>

}


</section>









{/* SKILLS */}


<section className="mt-12">


<h2 className="text-3xl flex gap-3">

<Crosshair/>

Security Arsenal

</h2>



<div className="grid md:grid-cols-3 gap-5 mt-6">


{
skills.map(skill=>(


<div className="terminal" key={skill.name}>


<div className="flex justify-between">

<span>

{skill.name}

</span>


<span>

{skill.level}

</span>


</div>


<p className="text-gray-500 text-sm">

{skill.type}

</p>


<div className="h-2 bg-black mt-4">

<div

className="h-full bg-green-400"

style={{
width:skill.level
}}

/>

</div>


</div>


))

}


</div>


</section>









{/* PROJECTS */}


<section className="mt-12">


<h2 className="text-3xl flex gap-3">

<Database/>

Project Database

</h2>


<div className="grid md:grid-cols-3 gap-6 mt-6">


{
projects.map(project=>(


<div className="terminal" key={project.title}>


<Lock/>


<h3 className="text-xl mt-4">

{project.title}

</h3>


<p className="text-green-400">

{project.tech}

</p>


<p className="text-gray-500 mt-3">

{project.desc}

</p>


<button className="mt-5">

VIEW SOURCE →

</button>


</div>


))

}


</div>


</section>









{/* EXPERIENCE */}


<section className="terminal mt-12">


<h2 className="text-3xl flex gap-3">

<Target/>

Mission Log

</h2>


<div className="mt-5">


<p>

[2025] Cyber Security Analyst Intern

</p>


<p>

Business Automation Limited

</p>


<p className="text-gray-500 mt-3">

✓ Vulnerability Assessment

<br/>

✓ Penetration Testing

<br/>

✓ SOC Monitoring

</p>


</div>


</section>









{/* CERTIFICATION */}


<section className="terminal mt-12">


<h2 className="text-3xl flex gap-3">

<Award/>

Training Database

</h2>


<p className="mt-5">

HackTheBox | TryHackMe | Cybersecurity Labs

</p>


</section>









{/* RESUME */}


<section className="terminal mt-12">


<h2 className="text-3xl flex gap-3">

<FileText/>

Resume Terminal

</h2>


<p className="mt-5">

root@sadman:~$ download resume.pdf

</p>


<button className="mt-5">

DOWNLOAD CV

</button>


</section>









{/* CONTACT */}


<section className="terminal mt-12">


<h2 className="text-3xl">

Contact Terminal

</h2>


<div className="mt-5 space-y-4">


<p className="flex gap-3">

<Github/>

github.com/sadmanthebatman

</p>


<p className="flex gap-3">

<Linkedin/>

linkedin.com/in/sadman-sakib-abir

</p>


<p className="flex gap-3">

<Mail/>

sadmansakibabir717@gmail.com

</p>


</div>


</section>



</main>

)

}






function Status({
icon,
title,
value
}:{
icon:React.ReactNode;
title:string;
value:string;
}){


return (

<div className="terminal">

<div className="flex gap-3">

{icon}

{title}

</div>


<h3 className="text-2xl mt-4">

{value}

</h3>


</div>

)

}
