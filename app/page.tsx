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
} from "lucide-react";


const bootLines = [
  "Initializing SADMAN.OS...",
  "Loading cybersecurity profile...",
  "Connecting threat intelligence...",
  "Activating SOC dashboard...",
  "Access granted: ROOT",
];


const skills = [
  "Kali Linux",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "Python",
  "Wireshark",
  "Wazuh",
  "Splunk",
  "Suricata",
  "TheHive",
  "MISP",
  "Docker",
];


const projects = [
  {
    title: "TCP Port Scanner",
    category: "Network Recon",
    description:
      "Python based security tool for network port discovery and analysis.",
  },

  {
    title: "Cyber Security Lab",
    category: "Penetration Testing",
    description:
      "Virtual environment for vulnerability assessment and exploitation practice.",
  },

  {
    title: "SOC Monitoring Platform",
    category: "Blue Team",
    description:
      "Security monitoring practice using SIEM and threat intelligence tools.",
  },
];


export default function Home() {


  const [boot, setBoot] = useState("");
  const [command,setCommand] = useState("");



  useEffect(()=>{

    const text = bootLines.join("\n");

    let index = 0;


    const timer=setInterval(()=>{

      if(index < text.length){

        setBoot(prev=>prev + text[index]);

        index++;

      }

      else{

        clearInterval(timer);

      }


    },35);


    return ()=>clearInterval(timer);


  },[]);





return (

<main className="min-h-screen bg-black text-green-400 font-mono p-5 md:p-12">


{/* NAVBAR */}

<nav className="
flex justify-between items-center
border-b border-green-900
pb-5 mb-10
">

<h1 className="text-2xl font-bold">

SADMAN.OS

</h1>


<div className="
flex items-center gap-2
">

<span className="
h-3 w-3 bg-green-400 rounded-full animate-pulse
"/>

SYSTEM ONLINE

</div>


</nav>





{/* HERO */}

<section className="
grid md:grid-cols-3 gap-6
">


<motion.div

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

className="
border border-green-900
rounded-xl
p-8
bg-green-950/10
shadow-[0_0_30px_rgba(0,255,100,.2)]
flex flex-col items-center
"

>


<div className="
border border-green-500
rounded-full
p-8
">

<Shield size={70}/>

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






<div className="
md:col-span-2
border border-green-900
rounded-xl
p-8
bg-black
">


<div className="
flex gap-3 items-center
">

<Terminal/>

root@sadman:~$

</div>



<pre className="
mt-6 whitespace-pre-wrap text-sm md:text-lg
">

{boot}

<span className="animate-pulse">

█

</span>

</pre>




<h1 className="
text-5xl font-bold mt-8
">

SADMAN SAKIB ABIR

</h1>


<p className="
text-xl mt-4
">

Cyber Security Enthusiast

</p>


<p className="
text-gray-500 mt-2
">

Penetration Testing • SOC Operations • Security Research

</p>



</div>


</section>







{/* SYSTEM STATUS */}


<section className="
grid md:grid-cols-4 gap-5 mt-10
">


<Status
icon={<Shield/>}
title="Security"
value="ROOT"
/>


<Status
icon={<Activity/>}
title="Threat"
value="LOW"
/>


<Status
icon={<Wifi/>}
title="Network"
value="ONLINE"
/>


<Status
icon={<Cpu/>}
title="System"
value="ACTIVE"
/>


</section>









{/* COMMAND TERMINAL */}


<section className="
border border-green-900
rounded-xl
p-6 mt-10
">


<h2 className="text-3xl flex gap-3">

<Terminal/>

Hacker Console

</h2>


<div className="mt-5">


root@sadman:~$


<input

className="
bg-transparent outline-none ml-3
"

value={command}

onChange={(e)=>setCommand(e.target.value)}

placeholder="type help"

/>


</div>



{
command==="help" &&

<div className="mt-5 text-gray-400">

<p>about</p>
<p>skills</p>
<p>projects</p>
<p>contact</p>
<p>resume</p>

</div>

}



</section>









{/* SKILLS */}


<section className="mt-12">


<h2 className="
text-3xl flex gap-3
">

<Crosshair/>

Security Arsenal

</h2>



<div className="
grid md:grid-cols-3 gap-5 mt-6
">


{
skills.map(skill=>(


<div

key={skill}

className="
border border-green-900
rounded-xl
p-5
hover:bg-green-900/20
transition
"


>


<div className="flex justify-between">

<span>

{skill}

</span>


<span>

90%

</span>


</div>



<div className="
h-2 bg-gray-900 mt-3 rounded
">

<div className="
h-full w-[90%]
bg-green-400
rounded
"/>


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




<div className="
grid md:grid-cols-3 gap-6 mt-6
">


{

projects.map(project=>(


<div

key={project.title}

className="
border border-green-900
rounded-xl
p-6
bg-green-950/10
"


>


<Lock/>


<h3 className="text-xl mt-4">

{project.title}

</h3>


<p className="text-green-500 mt-2">

{project.category}

</p>


<p className="text-gray-500 mt-3">

{project.description}

</p>


<button className="
mt-5
px-4 py-2
bg-green-400
text-black
rounded
">

VIEW SOURCE →

</button>


</div>


))


}



</div>


</section>









{/* SOC */}


<section className="
mt-12
border border-green-900
rounded-xl
p-8
">


<h2 className="
text-3xl flex gap-3
">

<Server/>

LIVE SOC MONITOR

</h2>


<div className="mt-5 space-y-3">


<p>
✓ IDS ........ ONLINE
</p>


<p>
✓ SIEM ....... ACTIVE
</p>


<p>
✓ Threat Intel CONNECTED
</p>


<p>
✓ Firewall .... SECURED
</p>


</div>


</section>









{/* CONTACT */}


<section className="
mt-12
border border-green-900
rounded-xl
p-8
">


<h2 className="text-3xl">

CONTACT TERMINAL

</h2>


<div className="
mt-5 space-y-4
">


<div className="flex gap-3">

<Github/>

github.com/sadmanthebatman

</div>


<div className="flex gap-3">

<Linkedin/>

www.linkedin.com/in/sadman-sakib-abir-38967841b/?locale=en-US

</div>



<div className="flex gap-3">

<Mail/>

sadmansakibabir717@gmail.com

</div>


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

<div className="
border border-green-900
rounded-xl
p-6
bg-green-950/10
">


<div className="flex gap-3">

{icon}

{title}

</div>


<h3 className="
text-2xl mt-4
">

{value}

</h3>


</div>

)

}
