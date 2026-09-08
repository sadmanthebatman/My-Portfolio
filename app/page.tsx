"use client";

import { useEffect, useState } from "react";
import {
  Terminal,
  Shield,
  Cpu,
  Wifi,
  Github,
  Linkedin,
  Mail,
  Lock,
  Activity,
  Database,
  Crosshair,
} from "lucide-react";


const commands = [
  "Initializing Cyber Operations System...",
  "Loading security profile...",
  "Analyzing threat intelligence...",
  "Connecting to SOC dashboard...",
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
    name: "TCP Port Scanner",
    tech: "Python | Networking",
    status: "ACTIVE",
  },
  {
    name: "Security Research Toolkit",
    tech: "Python | Cybersecurity",
    status: "ACTIVE",
  },
  {
    name: "Network Analysis Lab",
    tech: "Wireshark | Linux",
    status: "ACTIVE",
  },
];


export default function Home() {

  const [boot, setBoot] = useState("");
  const [command, setCommand] = useState("");


  // FIXED TERMINAL ANIMATION
  useEffect(() => {

    const text = commands.join("\n");

    let index = 0;

    const timer = setInterval(() => {

      if (index < text.length) {

        setBoot((prev) => prev + text[index]);

        index++;

      } else {

        clearInterval(timer);

      }

    }, 35);


    return () => clearInterval(timer);

  }, []);



  return (

    <main className="min-h-screen bg-black text-green-400 p-6 md:p-12 font-mono">


      {/* HERO */}

      <section className="border border-green-900 bg-black rounded-xl p-6 shadow-[0_0_40px_rgba(0,255,100,0.2)]">


        <div className="flex items-center gap-3 text-green-500">

          <Terminal size={22}/>

          <span>
            root@sadman:~$
          </span>

        </div>


        <pre className="mt-5 whitespace-pre-wrap text-sm md:text-lg">
          {boot}
          <span className="animate-pulse">
            █
          </span>
        </pre>



        <h1 className="mt-10 text-4xl md:text-6xl font-bold">
          SADMAN SAKIB ABIR
        </h1>


        <p className="mt-4 text-xl">
          Cyber Security Enthusiast
        </p>


        <p className="text-gray-400 mt-2">
          Penetration Testing • SOC Operations • Security Research
        </p>


      </section>




      {/* STATUS */}

      <section className="grid md:grid-cols-4 gap-5 mt-10">


        <Status
          icon={<Shield/>}
          title="Security"
          value="ROOT ACCESS"
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





      {/* TERMINAL */}

      <section className="mt-10 border border-green-900 rounded-xl p-6">


        <div className="flex gap-3 items-center">

          <Terminal/>

          <h2>
            Hacker Console
          </h2>

        </div>



        <div className="mt-5">

          root@sadman:~$

          <input

            className="bg-transparent outline-none ml-2 text-green-400"

            value={command}

            onChange={(e)=>setCommand(e.target.value)}

            placeholder="type help..."

          />

        </div>



        {
          command.toLowerCase()==="help" &&

          <div className="mt-5 text-gray-300">

            <p>
              about
            </p>

            <p>
              skills
            </p>

            <p>
              projects
            </p>

            <p>
              contact
            </p>

            <p>
              resume
            </p>

          </div>

        }


      </section>






      {/* SKILLS */}

      <section className="mt-10">


        <h2 className="text-3xl flex items-center gap-3">

          <Crosshair/>

          Security Arsenal

        </h2>



        <div className="grid md:grid-cols-3 gap-4 mt-5">


          {
            skills.map((skill)=>(

              <div

                key={skill}

                className="border border-green-900 p-4 rounded-lg hover:bg-green-900/20 transition"

              >

                [+] {skill}

              </div>

            ))
          }


        </div>


      </section>






      {/* SOC */}

      <section className="mt-10 border border-green-900 rounded-xl p-6">


        <h2 className="text-3xl flex items-center gap-3">

          <Database/>

          SOC Dashboard

        </h2>



        <div className="mt-5 space-y-2">

          <p>
            IDS ............ ONLINE ✓
          </p>

          <p>
            SIEM ........... ACTIVE ✓
          </p>

          <p>
            Threat Intel ... CONNECTED ✓
          </p>

          <p>
            Incident Response READY ✓
          </p>


        </div>


      </section>






      {/* PROJECTS */}

      <section className="mt-10">


        <h2 className="text-3xl">
          Projects Database
        </h2>



        <div className="grid md:grid-cols-3 gap-5 mt-5">


          {
            projects.map((project)=>(

              <div

                key={project.name}

                className="border border-green-900 p-5 rounded-xl"

              >

                <Lock/>

                <h3 className="text-xl mt-3">

                  {project.name}

                </h3>


                <p className="text-gray-400">

                  {project.tech}

                </p>


                <p className="mt-3">

                  STATUS: {project.status}

                </p>


              </div>


            ))
          }


        </div>


      </section>







      {/* CONTACT */}

      <section className="mt-10 border border-green-900 rounded-xl p-6">


        <h2 className="text-3xl">
          Contact Terminal
        </h2>



        <div className="mt-5 space-y-4">


          <div className="flex items-center gap-3">

            <Github size={18}/>

            github.com/sadmanthebatman

          </div>



          <div className="flex items-center gap-3">

            <Linkedin size={18}/>

            linkedin.com/in/sadman-sakib-abir

          </div>



          <div className="flex items-center gap-3">

            <Mail size={18}/>

            sadmansakibabir717@gmail.com

          </div>


        </div>


      </section>



    </main>

  );
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

<div className="border border-green-900 rounded-xl p-5">


<div className="flex gap-3 items-center">

{icon}

<span>
{title}
</span>

</div>


<p className="mt-4 text-xl">

{value}

</p>


</div>

);

}
