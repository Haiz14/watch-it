import{_}from"../chunks/chunk-a4b86990.js";import{r as e,a as p,j as n}from"../chunks/chunk-ad3e06ed.js";function E(){const[f,C]=e.useState(null),[S,j]=e.useState(""),[a,P]=e.useState(""),[g,l]=e.useState(null),[h,x]=e.useState(null),[b,i]=e.useState(null),[u,I]=e.useState(!1),v=e.useRef(),o=e.useRef();return e.useEffect(()=>{(async()=>{const r=await navigator.mediaDevices.getUserMedia({video:!0,audio:!0});x(r),v.current.srcObject=r;const{default:d}=await _(()=>import("../chunks/chunk-dc65bb53.js"),["assets/chunks/chunk-dc65bb53.js","assets/chunks/chunk-ad3e06ed.js"]),s=new d({debug:2});C(s),s.on("open",t=>{j(t)}),s.on("call",t=>{t.answer(r),i(t),t.on("stream",m=>{o.current.srcObject=m})}),s.on("connection",t=>{l(t),t.on("data",m=>{console.log("Received:",m)})})})()},[]),p("div",{children:[n("h4",{children:"Serverless WebRTC"}),p("p",{children:["Your ID: ",S]}),n("input",{type:"text",value:a,onChange:c=>P(c.target.value),placeholder:"Remote ID"}),n("button",{onClick:()=>{const c=f.call(a,h);i(c),c.on("stream",d=>{o.current.srcObject=d});const r=f.connect(a);l(r)},children:"Start Connection"}),n("button",{onClick:()=>{b&&(b.close(),i(null)),g&&(g.close(),l(null)),o.current.srcObject=null},children:"End Connection"}),n("button",{onClick:()=>{h&&(o.current.srcObject.getAudioTracks()[0].enabled=!u,I(!u))},children:u?"Unmute":"Mute"}),p("div",{children:[n("video",{ref:v,autoPlay:!0,muted:!0,style:{width:"100%",maxHeight:"300px",objectFit:"contain"}}),n("video",{ref:o,autoPlay:!0,style:{width:"100%",maxHeight:"300px",objectFit:"contain"}})]})]})}export{E as Page};
