'use client';

import {useEffect,useState} from 'react';

export default function Home(){
const [t,setT]=useState('');
useEffect(()=>{
const x='root@sadman:~$ whoami';
let i=0;
const id=setInterval(()=>{setT(x.slice(0,i++));},80);
return()=>clearInterval(id);
},[]);
return <main className="p-10">
<div className="terminal">
<h1 className="text-5xl">{t}</h1>
<p className="mt-5">
Sadman Sakib Abir<br/>
Cyber Security Enthusiast<br/>
Pentesting | SOC | Security Research
</p>
</div>
<div className="terminal mt-8">
<h2 className="text-3xl">Security Arsenal</h2>
<p>Kali Linux • Burp Suite • Nmap • Metasploit • Python • SIEM • Wazuh • Splunk</p>
</div>
</main>
}
