---
theme: default
title: Assigner - AI-Driven Insurance & Construction Platform
info: |
  ## Assigner Platform Presentation
  AI-driven tool for Australian insurance and construction industry
  Streamlining damage assessment, job allocation, safety, and compliance
author: Assigner Team
transition: slide-left
class: text-center title-slide
aspectRatio: 16/9
canvasWidth: 980
canvasHeight: 552
fonts:
  sans: 'Arya, ui-sans-serif, system-ui, sans-serif'
  weights: '400,700'
  provider: google
head: |
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"/>
---

<div class="layout-center animate-fade-up">

# Assigner

<div class="section-divider"></div>

## **AI-Driven Platform for Australian Insurance & Construction**

<p class="text-xl">Streamlining damage assessment, job allocation, safety, and compliance</p>

<div class="pt-12">
  <div class="cta-button animate-slide-in" @click="$slidev.nav.next">
    Get Started <carbon:arrow-right class="inline ml-2"/>
  </div>
</div>

</div>

---
layout: default
class: animate-fade-up
---

<div class="layout-two-cols">

<div>

# <span class="text-accent-bright">The Problem</span>

<div class="section-divider"></div>

Current insurance and construction processes are **critically inefficient**

</div>

<div class="feature-box">

## Key Pain Points

- 🐌 **Manual processes** lead to slow job allocation and repair turnaround
- 📄 **Poor documentation** creates insurance claim delays
- ⚠️ **Safety compliance** relies on outdated or generic templates
- 🔍 **Contractor verification** is inconsistent and time-consuming

<div class="metric">70%</div>
<div class="metric-label">of claims experience delays</div>

</div>

</div>

---
layout: default
class: animate-slide-in
---

<div class="layout-two-cols">

<div>

# Smart Damage Assessment

<div class="section-divider"></div>

## **AI-powered documentation in seconds**

- 📸 Homeowners or assessors capture photos/videos of storm or damage events
- 🧠 AI analyses and tags structural, electrical, and hazardous elements
- 📋 Standardised and thorough digital documentation created automatically

<div class="pt-6">
<div class="metric text-accent-bright">40%+</div>
<div class="metric-label">improvement in claim accuracy</div>
</div>

</div>

<div class="feature-box">

### **Key Benefits**

✅ **Instant Analysis** - Real-time damage assessment

✅ **Standardized Reports** - Consistent documentation format

✅ **Hazard Detection** - Automated safety risk identification

✅ **Accelerated Processing** - Faster insurance approvals

</div>

</div>

---
layout: default
class: animate-fade-up
---

<div class="layout-center">

# <span class="text-accent">Intelligent Contractor Dispatch</span>

<div class="section-divider"></div>

## **Smart job allocation powered by AI**

<div class="layout-two-cols pt-8">

<div class="feature-box">

### **AI Allocation Factors**

🔧 **Required trades** (e.g., roofing, electrical)

📜 **Valid licenses and insurances**

📍 **Location and project queue availability**

⏱️ **Contractor capacity and timeline**

</div>

<div class="text-center">

<div class="metric text-accent-secondary">70%</div>
<div class="metric-label">reduction in admin overhead</div>

<div class="metric pt-6">3x</div>
<div class="metric-label">faster job allocation</div>

</div>

</div>

</div>

---
layout: default
class: animate-slide-in
---

<div class="layout-two-cols">

<div>

# Dynamic SWMS & Reporting

<div class="section-divider"></div>

## **Automated safety compliance**

AI-generated SWMS tailored to:

- ⚒️ **Job type** requirements
- 🏗️ **Site conditions** (e.g., asbestos risk)
- 📊 **Public datasets** and safety standards
- 🎯 **Real-time hazard detection**

</div>

<div class="feature-box">

### **Smart Features**

🎮 **Gamified Experience**
<p class="text-sm">Engaging onsite reporting for tradies</p>

⚖️ **Legal Compliance**
<p class="text-sm">Automated form creation and validation</p>

📱 **Mobile-First Design**
<p class="text-sm">Easy field data capture</p>

🔔 **Real-time Alerts**
<p class="text-sm">Instant safety notifications</p>

</div>

</div>

---
layout: default
class: animate-fade-up
---

<div class="layout-center">

# <span class="text-accent-bright">Licensing & Insurance Compliance</span>

<div class="section-divider"></div>

## **Automated credential verification**

<div class="layout-two-cols pt-6">

<div>

### **Integration Points**

🏛️ Connects to **government databases** & Digital ID systems

✅ Ensures contractor credentials are verified and current

🔔 Automated expiry reminders and simple onboarding flow

🛡️ **Improves trust and risk management** in the supply chain

</div>

<div class="feature-box">

### **Trust Metrics**

<div class="metric text-accent">100%</div>
<div class="metric-label">credential verification</div>

<div class="metric pt-4">24/7</div>
<div class="metric-label">compliance monitoring</div>

<div class="metric pt-4">0</div>
<div class="metric-label">manual verification steps</div>

</div>

</div>

</div>

---
layout: default
class: animate-slide-in
---

<div class="layout-two-cols">

<div>

# Smart Wallet & Work Orders

<div class="section-divider"></div>

## **Seamless job deployment**

Leverages **Google/Apple Wallet** for instant job deployment

Contractors receive a digital work order with:

- 📋 **Scope of work**
- 🦺 **Safety documentation**
- 📅 **Calendar sync**
- 📍 **Location details**
- 💬 **Direct communication**

</div>

<div class="feature-box">

### **Mobile-First Benefits**

📱 **Instant Access**
<p class="text-sm">Work orders available immediately</p>

🔄 **Real-time Updates**
<p class="text-sm">Live status and progress tracking</p>

🎯 **Transparency**
<p class="text-sm">Clear expectations and deliverables</p>

⚡ **Adoption**
<p class="text-sm">Familiar wallet interface</p>

</div>

</div>

---
layout: default
class: animate-fade-up
---

# <span class="text-accent">Agentic AI Architecture</span>

<div class="section-divider"></div>

## **Assignar's Intelligence Stack**

Multi-layered AI system with **autonomous decision-making**

<div class="layout-center">

```mermaid
flowchart TD
    A["fa:fa-upload Data Ingestion<br/>Photos • IoT • Documents"] --> B["fa:fa-brain AI Processing<br/>Damage Analysis • Safety • Matching"]
    B --> C["fa:fa-bolt Decision Engine<br/>Optimization • Validation"]
    C --> D["fa:fa-mobile Action Delivery<br/>Notifications • Work Orders"]

    style A fill:#A4161A,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style B fill:#BA181B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style C fill:#E5383B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style D fill:#660708,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
```

</div>

<div class="layout-two-cols pt-6">

<div class="feature-box">

**🧠 Proprietary AI Models**
- Real-time damage assessment
- Intelligent contractor matching
- Predictive risk analysis

</div>

<div class="feature-box">

**⚡ Key Advantages**
- Self-optimizing allocation
- Continuous learning
- Built-in safety guards

</div>

</div>

---
layout: default
class: animate-slide-in
---

# <span class="text-accent-bright">Scalability: Assignar vs Prime Eco Tech</span>

<div class="section-divider"></div>

<div class="layout-center">

```mermaid
flowchart LR
    subgraph P["Prime Eco Tech - LIMITED"]
        P1["fa:fa-user Manual Processes<br/>High Admin Load"]
        P2["fa:fa-exclamation-triangle CRM Bottlenecks<br/>System Strain"]
        P3["fa:fa-times Failure Point<br/>100K Max Jobs"]
        P1 --> P2 --> P3
    end

    subgraph A["Assignar - UNLIMITED"]
        A1["fa:fa-robot AI-First Design<br/>Zero Bottlenecks"]
        A2["fa:fa-rocket Smart Distribution<br/>Auto-Scaling"]
        A3["fa:fa-infinity Infinite Capacity<br/>Unlimited Jobs"]
        A1 --> A2 --> A3
    end

    style P fill:#660708,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style A fill:#A4161A,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style P1 fill:#BA181B,stroke:#FFFFFF,color:#FFFFFF
    style P2 fill:#BA181B,stroke:#FFFFFF,color:#FFFFFF
    style P3 fill:#660708,stroke:#FFFFFF,color:#FFFFFF
    style A1 fill:#E5383B,stroke:#FFFFFF,color:#FFFFFF
    style A2 fill:#A4161A,stroke:#FFFFFF,color:#FFFFFF
    style A3 fill:#BA181B,stroke:#FFFFFF,color:#FFFFFF
```

</div>

<div class="layout-two-cols pt-8">

<div class="feature-box">

### **Prime Eco Tech Limitations**

❌ **Manual bottlenecks** at 50K+ jobs

❌ **Admin overhead** increases exponentially

❌ **System crashes** beyond 100K concurrent

❌ **Single-tenant** architecture constraints

<div class="metric pt-4 text-accent-dark">100K</div>
<div class="metric-label">maximum concurrent jobs</div>

</div>

<div class="feature-box">

### **Assignar Advantages**

✅ **AI automation** eliminates bottlenecks

✅ **Microservices** enable infinite scaling

✅ **Real-time processing** maintains performance

✅ **Multi-tenant** cloud-native design

<div class="metric pt-4 text-accent-bright">∞</div>
<div class="metric-label">scalable concurrent jobs</div>

</div>

</div>

---
layout: default
class: animate-fade-up
---

# <span class="text-accent">Industry Partner Ecosystem</span>

<div class="section-divider"></div>

<div class="layout-center">

```mermaid
flowchart TD
    A["fa:fa-bullseye Assignar Platform<br/>Central Hub"]

    A --> B["fa:fa-bolt DSS Electrical<br/>Premium Contractors"]
    A --> C["fa:fa-building Dakwal Builders<br/>Insurance Specialists"]
    A --> D["fa:fa-tools KBA Construction<br/>Project Management"]
    A --> E["fa:fa-university Government APIs<br/>License Verification"]

    B --> B1["fa:fa-hard-hat 3,500+ Electricians"]
    C --> C1["fa:fa-wrench Restoration Experts"]
    D --> D1["fa:fa-project-diagram Large Projects"]
    E --> E1["fa:fa-check-circle Real-time Compliance"]

    style A fill:#A4161A,stroke:#FFFFFF,stroke-width:3px,color:#FFFFFF
    style B fill:#BA181B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style C fill:#BA181B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style D fill:#BA181B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style E fill:#E5383B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style B1 fill:#660708,stroke:#FFFFFF,color:#FFFFFF
    style C1 fill:#660708,stroke:#FFFFFF,color:#FFFFFF
    style D1 fill:#660708,stroke:#FFFFFF,color:#FFFFFF
    style E1 fill:#660708,stroke:#FFFFFF,color:#FFFFFF
```

<div class="layout-two-cols pt-6">

<div class="feature-box">

### **Tier 1 Partners**

🔌 **DSS Electrical** - Premium electrical contractors

🏗️ **Insurer Builders - Dakwal** - Specialized building restoration

⚙️ **KBA Construction** - Large-scale project management

<div class="metric pt-4">3,500+</div>
<div class="metric-label">verified contractors</div>

</div>

<div class="feature-box">

### **Trust Network Benefits**

✅ **Instant verification** through integrated systems

✅ **Quality assurance** via partner networks

✅ **Competitive rates** through volume partnerships

✅ **24/7 availability** across Australian markets

<div class="metric pt-4">100%</div>
<div class="metric-label">credential verification</div>

</div>

</div>

</div>

---
layout: default
class: animate-slide-in
---

# <span class="text-accent-bright">AI Workflow Intelligence</span>

<div class="section-divider"></div>

<div class="layout-two-cols">

<div>

## **Intelligent Decision Tree**

AI-powered job allocation with **multi-factor optimization**:

- 🎯 **Skills matching** accuracy
- 📍 **Location optimization**
- ⏰ **Capacity management**
- 🏆 **Quality scoring**
- 💰 **Cost efficiency**

<div class="feature-box mt-4">

**Continuous Improvement:**

📈 **Machine learning** from every completed job

🔄 **Feedback loops** improve future allocations

🎯 **Precision increases** with system usage

</div>

</div>

<div>

```mermaid
flowchart TD
    A["fa:fa-file-text New Job Request<br/>Photo + Details"] --> B["fa:fa-brain AI Analysis<br/>Damage + Requirements"]

    B --> C["fa:fa-search Smart Matching<br/>Skills + Location + Capacity"]

    C --> D["fa:fa-check-circle Optimal Contractor<br/>Verified + Available"]

    D --> E["fa:fa-mobile Instant Delivery<br/>Mobile Wallet + Tracking"]

    style A fill:#E5383B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style B fill:#A4161A,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style C fill:#BA181B,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style D fill:#660708,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
    style E fill:#A4161A,stroke:#FFFFFF,stroke-width:2px,color:#FFFFFF
```

</div>

</div>

---
layout: default
class: animate-fade-up
---

# <span class="text-accent">Competitive Innovation Matrix</span>

<div class="section-divider"></div>

<div class="layout-center">

```mermaid
quadrantChart
    title Innovation vs Market Position
    x-axis Low Innovation --> High Innovation
    y-axis Weak Position --> Strong Position

    quadrant-1 Industry Leaders
    quadrant-2 Fast Followers
    quadrant-3 Laggards
    quadrant-4 Innovators

    Assignar: [0.9, 0.85]
    Prime Eco Tech: [0.3, 0.6]
    Traditional CRMs: [0.2, 0.4]
    Legacy Systems: [0.1, 0.2]
    Emerging Startups: [0.7, 0.3]
```

<div class="layout-two-cols pt-8">

<div class="feature-box">

### **Innovation Velocity**

<div class="metric text-accent-bright">12x</div>
<div class="metric-label">faster feature development</div>

<div class="metric pt-4 text-accent-secondary">24/7</div>
<div class="metric-label">continuous AI model training</div>

<div class="metric pt-4 text-accent">∞</div>
<div class="metric-label">scalability advantage</div>

</div>

<div class="feature-box">

### **Market Differentiation**

🚀 **Proprietary AI models** vs generic solutions

🔬 **R&D investment** in construction-specific AI

🤝 **Industry partnerships** for data advantage

🌐 **Australian-first** regulatory compliance

📱 **Mobile-native** user experience

</div>

</div>

</div>

---
layout: center
class: text-center animate-fade-up
---

<div class="layout-center">

# <span class="text-accent">Industry Impact</span>

<div class="section-divider"></div>

<div class="layout-two-cols pt-8">

<div class="feature-box">

### **Transformation Metrics**

<div class="metric text-accent-bright">30-50%</div>
<div class="metric-label">faster insurance-to-repair lifecycle</div>

<div class="metric pt-4 text-accent-secondary">100%</div>
<div class="metric-label">improved safety compliance</div>

<div class="metric pt-4 text-accent">∞</div>
<div class="metric-label">scalability for major insurers</div>

</div>

<div>

## **Next Steps**

<div class="section-divider"></div>

Seeking **pilot partners** to trial Assigner across storm response zones

<div class="pt-8">
<div class="cta-button">
**Let's innovate and transform claims management together**
</div>
</div>

</div>

</div>

</div>

<style>
@import url('./style.css');
</style>