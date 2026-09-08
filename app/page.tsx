import { Shield, Terminal } from "lucide-react";

const skills = [
"Python","JAVA","C++","Kali Linux","Burp Suite","Nmap",
"Metasploit","Docker","Kubernetes","SIEM","Threat Hunting",
"Digital Forensics","Wireshark","Splunk","Wazuh"
];

export default function Home(){
return (
<main className="min-h-screen p-8 md:p-16">

<section className="mb-16">
<div className="card">
<Terminal/>
<h1 className="text-4xl md:text-6xl font-bold mt-4">
Sadman Sakib Abir
</h1>
<p className="mt-4 text-xl">
&gt; Cyber Security Enthusiast
<br/>
&gt; Vulnerability Researcher
<br/>
&gt; SOC & Pentesting Learner
</p>
</div>
</section>

<section className="mb-16">
<h2 className="text-3xl mb-6"><Shield/> About Me</h2>
<div className="card">
Final-year Computer Science & Engineering student at BRAC University with
hands-on experience in offensive and defensive cybersecurity, vulnerability
assessment, penetration testing, threat hunting, SIEM monitoring, malware
analysis and digital forensics.
</div>
</section>

<section className="mb-16">
<h2 className="text-3xl mb-6">Cyber Arsenal</h2>
<div className="grid md:grid-cols-3 gap-4">
{skills.map(s=><div className="card" key={s}>{s}</div>)}
</div>
</section>

<section className="mb-16">
<h2 className="text-3xl mb-6">Experience</h2>
<div className="card">
<b>Cyber Security Analyst Intern</b>
<br/>
Business Automation Limited
<br/>
Oct 2025 - Jan 2026
<br/><br/>
Vulnerability assessment, penetration testing, security monitoring,
incident investigation and security reporting.
</div>
</section>

<section className="mb-16">
<h2 className="text-3xl mb-6">Training</h2>
<div className="card">
• Hack The Box Academy - SOC Analyst Path<br/>
• Defronix Academy - Vulnerability Assessment & Pentesting<br/>
• Defronix Academy - Bug Bounty Program<br/>
• TryHackMe - Junior Penetration Testing<br/>
• TryHackMe - Introduction to Cyber Security
</div>
</section>

<section>
<h2 className="text-3xl mb-6">Contact</h2>
<div className="card">
GitHub: github.com/sadmanthebatman<br/>
LinkedIn: linkedin.com/in/sadman-sakib-abir-38967841b<br/>
Email: sadmansakibabir717@gmail.com
</div>
</section>

</main>
)
}
