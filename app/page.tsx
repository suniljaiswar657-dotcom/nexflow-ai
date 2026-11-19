"use client";

import { useMemo, useState } from "react";
import {
  Activity, ArrowUpRight, Bell, Bot, BriefcaseBusiness, CalendarClock,
  ChartNoAxesCombined, CheckCircle2, ChevronRight, CircleHelp, Command,
  CreditCard, LayoutDashboard, MessageSquare, Plus, Search, Settings,
  Sparkles, Users, Workflow, Zap
} from "lucide-react";

const leads = [
  { name: "Aarav Mehta", company: "Mehta Retail", need: "Sales automation", status: "Qualified", tone: "good", value: "₹45,000" },
  { name: "Priya Sharma", company: "PS Fashion", need: "Lead generation", status: "New lead", tone: "", value: "₹28,000" },
  { name: "Kabir Khan", company: "Khan Electronics", need: "WhatsApp workflow", status: "Contacted", tone: "warm", value: "₹32,000" },
  { name: "Ananya Verma", company: "AV Properties", need: "CRM setup", status: "Qualified", tone: "good", value: "₹56,000" }
];

const nav = [
  { label: "OVERVIEW", items: [{ name: "Command Center", icon: LayoutDashboard }, { name: "Leads & CRM", icon: Users }, { name: "AI Sales Assistant", icon: Bot }, { name: "Automations", icon: Workflow }] },
  { label: "ENGAGEMENT", items: [{ name: "Conversations", icon: MessageSquare }, { name: "Analytics", icon: ChartNoAxesCombined }] },
  { label: "WORKSPACE", items: [{ name: "Subscriptions", icon: CreditCard }, { name: "Settings", icon: Settings }] }
];

export default function Home() {
  const [active, setActive] = useState("Command Center");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const filtered = useMemo(() => leads.filter((lead) => [lead.name, lead.company, lead.need, lead.status].join(" ").toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark"><Zap size={19} /></span><span className="brand-name">NEXFLOW<span style={{color:"#8995ff"}}> AI</span></span></div>
        {nav.map((group) => <div key={group.label}><div className="nav-label">{group.label}</div>{group.items.map(({name,icon:Icon}) => <button key={name} className={`nav-item ${active===name?"active":""}`} onClick={() => {setActive(name);setNotice(name==="Command Center"?"":"This module is part of the MVP roadmap. The command center is live in this starter build.");}}><Icon size={17}/><span className="nav-text">{name}</span></button>)}</div>)}
        <div className="sidebar-bottom"><button className="nav-item" onClick={() => setNotice("Help center is coming soon.")}><CircleHelp size={17}/><span className="nav-text">Help & Support</span></button><div style={{padding:"12px 10px",color:"#71809a",fontSize:10}} className="nav-text">NEXFLOW AI · V1.0</div></div>
      </aside>

      <main className="main">
        <header className="topbar"><div><small>WORKSPACE / </small><strong style={{fontSize:12}}>{active}</strong></div><div style={{display:"flex",alignItems:"center",gap:17}}><button aria-label="Notifications" className="secondary" style={{padding:8}} onClick={() => setNotice("You are all caught up.")}><Bell size={16}/></button><div className="avatar">SJ</div></div></header>
        <div className="content">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:16,flexWrap:"wrap"}}>
            <div><div className="eyebrow">YOUR BUSINESS, IN ONE FLOW</div><h1 className="page-title">{active==="Command Center"?"Command Center":active}</h1><p className="muted">A clearer view of your leads, sales pipeline and business momentum.</p></div>
            <button className="primary" onClick={() => setNotice("New lead capture form will be connected in the CRM milestone.")}><Plus size={14} style={{display:"inline",verticalAlign:"middle",marginRight:6}}/>Add new lead</button>
          </div>

          {notice && <div role="status" className="panel" style={{padding:"12px 15px",marginTop:20,color:"#bfcaff",fontSize:12,display:"flex",justifyContent:"space-between",gap:12}}>{notice}<button onClick={() => setNotice("")} style={{background:"none",border:0,color:"#aab7d3"}}>Dismiss</button></div>}

          <section className="stat-grid">
            {[{label:"Total leads",value:"128",delta:"+12.8% this month",icon:Users},{label:"Pipeline value",value:"₹8.4L",delta:"+8.2% this month",icon:BriefcaseBusiness},{label:"Active workflows",value:"06",delta:"4 running smoothly",icon:Workflow},{label:"Conversion rate",value:"18.6%",delta:"+2.4% this month",icon:ChartNoAxesCombined}].map(({label,value,delta,icon:Icon}) => <div className="panel stat" key={label}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span className="stat-label">{label}</span><Icon size={17} color="#8995ff"/></div><div className="stat-value">{value}</div><div className="positive">{delta}</div></div>)}
          </section>

          <div className="grid-main">
            <section className="panel">
              <div className="panel-head"><div><div className="panel-title">Recent leads</div><div className="muted" style={{fontSize:11,marginTop:5}}>Your latest opportunities</div></div><div style={{display:"flex",gap:8,alignItems:"center"}}><div style={{position:"relative"}}><Search size={13} color="#8290a9" style={{position:"absolute",left:10,top:10}}/><input className="search" style={{paddingLeft:29}} placeholder="Search leads..." value={query} onChange={(e)=>setQuery(e.target.value)}/></div></div></div>
              <div className="table-wrap"><table><thead><tr><th>CONTACT</th><th>REQUIREMENT</th><th>STATUS</th><th>VALUE</th></tr></thead><tbody>{filtered.map((lead)=><tr key={lead.name}><td><strong style={{display:"block",color:"#e6ebf7",fontSize:12}}>{lead.name}</strong><span style={{color:"#7e8da7",fontSize:10}}>{lead.company}</span></td><td>{lead.need}</td><td><span className={`status ${lead.tone}`}>{lead.status}</span></td><td>{lead.value}</td></tr>)}</tbody></table>{filtered.length===0&&<p className="muted" style={{padding:20}}>No matching leads found.</p>}</div>
              <div style={{padding:15,borderTop:"1px solid #1d2940",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span className="muted" style={{fontSize:10}}>DEMO DATA · CRM CONNECTION PENDING</span><button className="secondary" onClick={()=>{setActive("Leads & CRM");setNotice("CRM workspace preview selected.");}}>Open CRM <ChevronRight size={13} style={{display:"inline",verticalAlign:"middle"}}/></button></div>
            </section>

            <div>
              <section className="panel">
                <div className="panel-head"><div className="panel-title">Workflow activity</div><Activity size={16} color="#8995ff"/></div>
                {[{title:"New lead captured",desc:"Website form · 2 minutes ago"},{title:"Follow-up reminder queued",desc:"Aarav Mehta · 18 minutes ago"},{title:"Sales insight generated",desc:"Weekly pipeline · 1 hour ago"}].map((item)=><div className="activity" key={item.title}><span className="dot"/><div><strong>{item.title}</strong><span>{item.desc}</span></div></div>)}
              </section>
              <section className="ai-card"><div className="eyebrow" style={{display:"flex",alignItems:"center",gap:7}}><Sparkles size={14}/> NEXFLOW INTELLIGENCE</div><h3>Your AI business copilot</h3><p>Bring lead insights, sales suggestions and workflow actions into one intelligent workspace.</p><button className="secondary" style={{background:"#29345c",borderColor:"#48558a"}} onClick={()=>setNotice("AI Sales Assistant is planned for the next build milestone.")}>Explore AI assistant <ArrowUpRight size={13} style={{display:"inline",verticalAlign:"middle"}}/></button></section>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:24,color:"#65738d",fontSize:10,flexWrap:"wrap",gap:8}}><span>© 2026 NEXFLOW AI · BUSINESS AUTOMATION PLATFORM</span><span style={{display:"flex",alignItems:"center",gap:6}}><CheckCircle2 size={12} color="#55c99a"/> Frontend preview ready</span></div>
        </div>
      </main>
    </div>
  );
}