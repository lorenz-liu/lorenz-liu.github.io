(self.webpackChunklorenz_liu_site=self.webpackChunklorenz_liu_site||[]).push([[254],{254:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Y});var n=a(791),i=a(87),r=a(842),s=a(184);const o=e=>{let{data:t}=e;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsx)("p",{className:"department",children:t.department}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.school}),", ",t.year," - ",t.end]})]})})},c=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((e=>(0,s.jsx)(o,{data:e},e.school)))]})};c.defaultProps={data:[]};const l=c,d=e=>{let{data:{title:t,authors:a,url:n,pub:i}}=e;return(0,s.jsx)("article",{className:"jobs-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("p",{style:{textTransform:"none",letterSpacing:"0.16em",fontSize:".8em",marginBottom:0},children:(0,s.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:t})}),(0,s.jsx)("p",{style:{marginBottom:0,fontSize:11},children:a}),(0,s.jsx)("p",{style:{textTransform:"none"},children:i})]})})},h=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"publications"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Publications"})}),t.map((e=>(0,s.jsx)(d,{data:e},`${e.title}`)))]})};h.defaultProps={data:[]};const u=h;var m=a(892),p=a.n(m);const g=e=>{let{data:{name:t,url:a,school:n,position:i,startDate:r,endDate:o}}=e;return(0,s.jsx)("article",{className:"jobs-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("p",{style:{textTransform:"none",letterSpacing:"0.16em",fontSize:".8em",marginBottom:".1em"},children:t}),(0,s.jsx)("p",{style:{marginBottom:0},children:i}),(0,s.jsxs)("p",{style:{textTransform:"none"},children:[(0,s.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:n}),", ",p()(r).format("MMMM YYYY")," - ",o?p()(o).format("MMMM YYYY"):"PRESENT"]})]})})},f=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"services"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Services"})}),t.map((e=>(0,s.jsx)(g,{data:e},`${e.name}-${e.position}`)))]})};f.defaultProps={data:[]};const y=f;var v=a(773);const x=e=>{let{data:{name:t,position:a,url:n,startDate:i,endDate:r,summary:o,highlights:c}}=e;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:t})," - ",a]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",p()(i).format("MMMM YYYY")," - ",r?p()(r).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,s.jsx)(v.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,c?(0,s.jsx)("ul",{className:"points",children:c.map((e=>(0,s.jsx)("li",{children:e},e)))}):null]})},b=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"industrial"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Industrial"})}),t.map((e=>(0,s.jsx)(x,{data:e},`${e.name}-${e.position}`)))]})};b.defaultProps={data:[]};const w=b,D=e=>{let{data:t}=e;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"academic"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Academic"})}),t.map((e=>(0,s.jsx)(x,{data:e},`${e.name}-${e.position}`)))]})};D.defaultProps={data:[]};const j=D,S=e=>{let{handleClick:t,active:a,label:n}=e;return(0,s.jsx)("button",{className:"skillbutton "+(a[n]?"skillbutton-active":""),type:"button",onClick:()=>t(n),children:n})},$=e=>{let{data:t,categories:a}=e;const{category:n,competency:i,title:r}=t,o={background:a.filter((e=>n.includes(e.name))).map((e=>e.color))[0]},c={...o,width:`${String(Math.min(100,Math.max(i/5*100,0)))}%`};return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:o,children:(0,s.jsx)("span",{children:r})}),(0,s.jsx)("div",{className:"skillbar-bar",style:c}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};$.defaultProps={categories:[]};const M=$,k=e=>{let{skills:t,categories:a}=e;const i=Object.fromEntries([["All",!1]].concat(a.map((e=>{let{name:t}=e;return[t,!1]})))),[r,o]=(0,n.useState)(i),c=e=>{const t=Object.keys(r).reduce(((t,a)=>({...t,[a]:e===a&&!r[a]})),{});t.All=!Object.keys(r).some((e=>t[e])),o(t)};return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("p",{children:"Note: I think this section is silly, but every company seems to require one."})]}),(0,s.jsx)("div",{className:"skill-button-container",children:Object.keys(r).map((e=>(0,s.jsx)(S,{label:e,active:r,handleClick:c},e)))}),(0,s.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(r).reduce(((e,t)=>r[t]?t:e),"All");return t.sort(((e,t)=>{let a=0;return e.competency>t.competency?a=-1:e.competency<t.competency?a=1:e.category[0]>t.category[0]?a=-1:e.category[0]<t.category[0]||e.title>t.title?a=1:e.title<t.title&&(a=-1),a})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,s.jsx)(M,{categories:a,data:e},e.title)))})()})]})};k.defaultProps={skills:[],categories:[]};const C=k,N=[{school:"University of Toronto",department:"Department of Computer Science",degree:"Master of Science in Applied Computing",link:"https://mscac.utoronto.ca/",year:2023,end:2025},{school:"Beihang University",department:"School of Computer Science and Engineering",degree:"B.Eng. in Computer Science and Technology",link:"https://buaa.edu.cn",year:2019,end:2023}],I=[{title:"CrossKeys: Text Entry for Virtual Reality Using a Single Controller via Wrist Rotation",authors:"Zhaoxun Liu*, Xiaolong Liu, Lili Wang",url:"https://doi.org/10.1080/10447318.2024.2358456",pub:"International Journal of Human\u2013Computer Interaction (IJHCI), 2024"},{title:"Hands-Free Is Fine: Gaze-Dominant Object Manipulation in Virtual Reality",authors:"Zhaoxun Liu*, Xiaolong Liu, Lili Wang",url:"/files/hands-free-is-fine.pdf",pub:"Journal of Beihang University, 2023 (Undergraduate Thesis)"},{title:"Temporal Transformer Networks with Self-Supervision for Action Recognition",authors:"Yongkang Zhang, Jun Li, Na Jiang, Guoming Wu, Han Zhang, Zhiping Shi, Zhaoxun Liu*, Zizhang Wu",url:"https://doi.org/10.1109/JIOT.2023.3257992",pub:"IEEE Internet of Things Journal (IoT), 2023"}],T=[{name:"University Health Network",position:"Team Lead, Machine Learning",url:"https://temertysimcentre.com/surgical-artificial-intelligence-research-academy-sara/",startDate:"2025-02-01",summary:"University Health Network (UHN) is an alliance of leading healthcare research facilities at the forefront of medical innovation, advancing cutting-edge AI research to transform healthcare and improve patient outcomes. In 2024, Toronto General Hospital, part of UHN, was ranked as the No. 3 hospital worldwide. ",highlights:["I lead the Machine Learning Research Team at the SARA Lab, UHN, overseeing research in computer vision, graphics, and reinforcement learning. I also supervise healthcare-tailored game development and web application projects.","Our mission is to pioneer AI-driven solutions for surgical and clinical applications. "]},{name:"University Health Network",position:"Machine Learning Researcher",url:"https://temertysimcentre.com/surgical-artificial-intelligence-research-academy-sara/",startDate:"2024-05-01",endDate:"2024-12-31",summary:"The Surgical AI Research Academy (SARA) is dedicated towards research and innovation in areas related to surgical training, intra-operative performance augmentation, robotic surgery and telecoaching. We use various methodologies, including artificial intelligence, AR/VR modelling, and simulation-based training to improve patient outcomes through surgical excellence.",highlights:["Introduced MasTER, a data-intensive triage dashboard with a user-friendly human interface to enable fast patient dispatch in mass-casualty incidents by leveraging PPO-based deep reinforcement learning and large language models."]},{name:"Ubisoft",position:"Intern Gameplay Programmer",url:"https://www.ubisoft.com/",startDate:"2022-09-01",endDate:"2023-03-01",summary:"Ubisoft is a leading video game company that develops and publishes popular game franchises such as Assassin's Creed, Far Cry, and Tom Clancy's Rainbow Six. Chengdu Studio's representative work is the Rabbids series. ",highlights:["Researched reinforcement learning (DQN, DDPG) on non-player character actions, behaviours, and interactions.","Assassin\u2019s Creed Mirage downloadable contents (DLCs), excelling in C# and Unity3D and performance optimization.","Achieved notable improvements in DLC performance and functionality, streamlined project workflows with Perforce and Confluence, and successfully delivered high-quality content. "]}],R=[{name:"Dynamic Graphics Project",position:"Graduate Student",url:"https://www.dgp.toronto.edu/",startDate:"2024-01-01",endDate:"2024-04-30",summary:"DocHub: Facilitating Comprehension of Documents via Structured Sensemaking with Large Language Models",highlights:["Proposed DocHub, a LLM-based interactive system that identifies and visualizes crucial data and their interconnections within documents as node-link diagrams.","Offered an interactive interface allowing users to modify these visualizations for tailored insights and to pose detailed, context-specific queries for deeper understanding. ","Featured a non-linear abstraction framework to adeptly handle and streamline the complexity of information presented."]},{name:"Computational Social Science Lab",position:"Graduate Student",url:"https://csslab.cs.toronto.edu/",startDate:"2023-09-01",endDate:"2023-12-30",summary:"Who\u2019s Hated: Detecting and Analyzing the Entities Targeted by Hateful Memes",highlights:["Presented a pretrained language model-based framework to detect and reason about entities targeted by hateful memes.","Provided insight into why certain groups are more susceptible to becoming targets of hateful memes.","Proposed a specific preventive measure to curb the spread of hateful memes."]},{name:"State Key Laboratory of Virtual Reality Technology and Systems",position:"Researcher",url:"http://vrlab.buaa.edu.cn/",startDate:"2023-02-01",endDate:"2023-06-30",summary:"Efficient object manipulation is critical to VR interaction, and hands-free is a method worth discussing. We introduce a hands-free gaze-dominant manipulating pipeline that significantly outperforms the current state-of-the-art methods. ",highlights:["We proposed a hands-free object manipulation method based on gaze-dominant interaction, which significantly outperforms the current state-of-the-art gaze-based hands-free object manipulation method.","We designed a novel user study, facilitating a quantitative evaluation of the efficiency of the proposed method."]},{name:"XDiscovery Lab, Dartmouth College",position:"Intern Researcher",url:"https://www.cs.dartmouth.edu/~hci/",startDate:"2022-05-01",endDate:"2022-09-01",summary:"We work on a wide spectrum of topics in human-computer interaction (HCI) with a specific emphasis on developing post-touchscreen hardware and software interactive systems, including new input/output technologies, interaction techniques, and novel augmentations for mobile and wearable devices. ",highlights:["Devised a novel text entry method that composes scattered keywords into a natural and clear sentence, which may help exaggerate the importance of human factors in studying natural language processing by, in this particular project, observing how people consider keywords.","Designed and developed a keyword extractor using BERT from huggingface.io. ","Retrained the model based on the prompt-based approach to give three different semantic candidate sentences. ","Developed a web application to enable more people to participate in our user study. Designed and implemented the UI with React framework. Stored data in MongoDB and used ExpressJS as the backend framework."]},{name:"State Key Laboratory of Virtual Reality Technology and Systems",position:"Researcher",url:"http://vrlab.buaa.edu.cn/",startDate:"2021-09-01",endDate:"2022-02-20",summary:"I led the team to devise CrossKeys, a novel and efficient text entry technique for virtual reality (VR) using a single controller via wrist rotation, which unprecedentedly employs the three-dimensional space a virtual environment can provide and outperforms the state-of-the-art method. ",highlights:["Led the team to devise CrossKeys, a novel and efficient text entry technique for virtual reality (VR) using a single controller via wrist rotation, which unprecedentedly employs the three-dimensional space a virtual environment can provide and outperforms the state-of-the-art method.","Implemented responsive components, auto-completing prediction algorithm, user interface design, ergonomics-mathematical deduction, and 3D modeling."]},{name:"State Key Laboratory of Software Development Environment",position:"Intern Researcher",url:"http://www.nlsde.buaa.edu.cn/",startDate:"2021-03-01",endDate:"2021-12-01",summary:"I developed Cross-Attention ReID, a state-of-the-art approach to realizing pedestrians' re-identification based on training with large-scale datasets generated by single-channeled IR cameras and three-channeled RGB cameras.",highlights:["Developed Cross-Attention ReID, a state-of-the-art approach to realizing pedestrians\u2019 re-identification based on training with large-scale datasets generated by single-channeled IR cameras and three-channeled RGB cameras.","Surveyed literature and applied existing theories to code with high performance and robustness.","Conducted quantitative analysis and results assessment with datasets like SYSU-MM01 and RegDB."]},{name:"BNRist, Tsinghua University",position:"Intern Researcher",url:"https://www.bnrist.tsinghua.edu.cn/",startDate:"2020-10-01",endDate:"2021-01-30",summary:'Refined a CVPR accepted project <a href="https://arxiv.org/abs/2012.06087" target="_blank" rel="noopener noreferrer">Monocular Real-time Full Body Capture with Inter-part Correlations</a>. ',highlights:["Implemented unsupervised training via differentiable renderers.","Conducted quantitative analysis with PCA (Principal Component Analysis) and cross-datasets tests with datasets like Basel Face Model and 3DMM Face Model."]}],A=[{name:"CSC207: Software Design",position:"Teaching Assistant",url:"https://artsci.calendar.utoronto.ca/course/csc207h1",startDate:"2024-09-01",school:"University of Toronto",endDate:"2024-12-30"},{name:"CSC404: Video Game Design",position:"Teaching Assistant",url:"https://www.cs.utoronto.ca/~sengels/csc404/",startDate:"2024-01-01",school:"University of Toronto",endDate:"2024-04-30"},{name:"CSC165: Mathematical Expression and Reasoning for Computer Science",position:"Teaching Assistant",url:"https://www.cs.toronto.edu/~shaharry/csc236/resources/165.pdf",startDate:"2024-01-01",school:"University of Toronto",endDate:"2024-04-30"},{name:"Data Structure",position:"Teaching Assistant",url:"https://scse.buaa.edu.cn/English/Education/Undergraduate_program.htm",startDate:"2021-02-20",school:"Beihang University",endDate:"2021-07-20"}],L=[{title:"C++",competency:4,category:["Programming"]},{title:"C#",competency:5,category:["Programming"]},{title:"Java",competency:4,category:["Programming"]},{title:"Python",competency:5,category:["Programming"]},{title:"JavaScript",competency:4,category:["Programming"]},{title:"TypeScript",competency:3,category:["Programming"]},{title:"Scala",competency:3,category:["Programming"]},{title:"SQL",competency:2,category:["Programming"]},{title:"Git",competency:4,category:["Tool"]},{title:"Unity3D",competency:5,category:["Research (HCI/AI/Gaming)","Tool"]},{title:"PyTorch",competency:4,category:["Research (HCI/AI/Gaming)"]},{title:"Scikit-Learn",competency:4,category:["Research (HCI/AI/Gaming)"]},{title:"React Native",competency:4,category:["Software Development"]},{title:"React",competency:4,category:["Software Development"]},{title:"Linux/Unix",competency:4,category:["Software Development","Tool","Research (HCI/AI/Gaming)"]},{title:"Google Firebase",competency:4,category:["Software Development","Tool"]},{title:"Apache Spark",competency:3,category:["Software Development"]},{title:"Apache Kafka",competency:3,category:["Software Development"]},{title:"AWS Services",competency:4,category:["Software Development","Tool"]},{title:"NumPy",competency:5,category:["Research (HCI/AI/Gaming)"]},{title:"SciPy",competency:3,category:["Research (HCI/AI/Gaming)"]},{title:"Docker",competency:3,category:["Software Development"]},{title:"Kubernetes",competency:3,category:["Software Development"]},{title:"Flask",competency:3,category:["Software Development"]},{title:"PostgreSQL",competency:2,category:["Software Development"]},{title:"Matplotlib",competency:4,category:["Research (HCI/AI/Gaming)","Tool"]}].map((e=>({...e,category:e.category.sort()}))),P=["#0d216b","#0944e1","#08c0ff","#0ffff8"],H=[...new Set(L.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:P[t]}))),O={Education:()=>(0,s.jsx)(l,{data:N}),Publications:()=>(0,s.jsx)(u,{data:I}),Industrial:()=>(0,s.jsx)(w,{data:T}),Academic:()=>(0,s.jsx)(j,{data:R}),Services:()=>(0,s.jsx)(y,{data:A}),Skills:()=>(0,s.jsx)(C,{skills:L,categories:H})},Y=()=>(0,s.jsx)(r.Z,{title:"Curriculum Vitae",description:"Zhaoxun's CV.",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("p",{children:(0,s.jsx)("a",{href:"files/zhaoxun-resume.pdf",target:"_blank",rel:"noreferrer",children:"PDF Version"})}),(0,s.jsx)("h2",{children:(0,s.jsx)(i.rU,{to:"/cv",children:"Curriculum Vitae"})}),(0,s.jsx)("div",{className:"link-container",children:Object.keys(O).map((e=>(0,s.jsx)("h4",{children:(0,s.jsx)("a",{style:{marginRight:20},href:`#${e.toLowerCase()}`,children:`${e}`})},e)))})]})}),Object.entries(O).map((e=>{let[t,a]=e;return(0,s.jsx)(a,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,a=36e5,n="millisecond",i="second",r="minute",s="hour",o="day",c="week",l="month",d="quarter",h="year",u="date",m="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}},y=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},v={s:y,z:function(e){var t=-e.utcOffset(),a=Math.abs(t),n=Math.floor(a/60),i=a%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),i=t.clone().add(n,l),r=a-i<0,s=t.clone().add(n+(r?-1:1),l);return+(-(n+(a-i)/(r?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:h,w:c,d:o,D:u,h:s,m:r,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",b={};b[x]=f;var w=function(e){return e instanceof $},D=function e(t,a,n){var i;if(!t)return x;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(i=r),a&&(b[r]=a,i=r);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=t.name;b[o]=t,i=o}return!n&&i&&(x=i),i||!n&&x},j=function(e,t){if(w(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new $(a)},S=v;S.l=D,S.i=w,S.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function f(e){this.$L=D(e.locale,null,!0),this.parse(e)}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,r=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===m)},y.isSame=function(e,t){var a=j(e);return this.startOf(t)<=a&&a<=this.endOf(t)},y.isAfter=function(e,t){return j(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<j(e)},y.$g=function(e,t,a){return S.u(e)?this[t]:this.set(a,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var a=this,n=!!S.u(t)||t,d=S.p(e),m=function(e,t){var i=S.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return n?i:i.endOf(o)},p=function(e,t){return S.w(a.toDate()[e].apply(a.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},g=this.$W,f=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return n?m(1,0):m(31,11);case l:return n?m(1,f):m(0,f+1);case c:var x=this.$locale().weekStart||0,b=(g<x?g+7:g)-x;return m(n?y-b:y+(6-b),f);case o:case u:return p(v+"Hours",0);case s:return p(v+"Minutes",1);case r:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var a,c=S.p(e),d="set"+(this.$u?"UTC":""),m=(a={},a[o]=d+"Date",a[u]=d+"Date",a[l]=d+"Month",a[h]=d+"FullYear",a[s]=d+"Hours",a[r]=d+"Minutes",a[i]=d+"Seconds",a[n]=d+"Milliseconds",a)[c],p=c===o?this.$D+(t-this.$W):t;if(c===l||c===h){var g=this.clone().set(u,1);g.$d[m](p),g.init(),this.$d=g.set(u,Math.min(this.$D,g.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[S.p(e)]()},y.add=function(n,d){var u,m=this;n=Number(n);var p=S.p(d),g=function(e){var t=j(m);return S.w(t.date(t.date()+Math.round(e*n)),m)};if(p===l)return this.set(l,this.$M+n);if(p===h)return this.set(h,this.$y+n);if(p===o)return g(1);if(p===c)return g(7);var f=(u={},u[r]=t,u[s]=a,u[i]=e,u)[p]||1,y=this.$d.getTime()+n*f;return S.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),r=this.$H,s=this.$m,o=this.$M,c=a.weekdays,l=a.months,d=function(e,a,i,r){return e&&(e[a]||e(t,n))||i[a].slice(0,r)},h=function(e){return S.s(r%12||12,e,"0")},u=a.meridiem||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:d(a.monthsShort,o,l,3),MMMM:d(l,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,c,2),ddd:d(a.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:S.s(r,2,"0"),h:h(1),hh:h(2),a:u(r,s,!0),A:u(r,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return n.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,u,m){var p,g=S.p(u),f=j(n),y=(f.utcOffset()-this.utcOffset())*t,v=this-f,x=S.m(this,f);return x=(p={},p[h]=x/12,p[l]=x,p[d]=x/3,p[c]=(v-y)/6048e5,p[o]=(v-y)/864e5,p[s]=v/a,p[r]=v/t,p[i]=v/e,p)[g]||v,m?x:S.a(x)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return b[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=D(e,t,!0);return n&&(a.$L=n),a},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),M=$.prototype;return j.prototype=M,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",o],["$M",l],["$y",h],["$D",u]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),j.extend=function(e,t){return e.$i||(e(t,$,j),e.$i=!0),j},j.locale=D,j.isDayjs=w,j.unix=function(e){return j(1e3*e)},j.en=b[x],j.Ls=b,j.p={},j}()}}]);
//# sourceMappingURL=254.a2cee366.chunk.js.map