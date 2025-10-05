import{j as e}from"./jsx-runtime-CZkaD0iU.js";import{useMDXComponents as Ue}from"./index-DOi9oEl2.js";import{b as $e}from"./blocks-DAGGLU0B.js";import{f as _e,d as K,i as ie,a as Be,j as We,k as Ke,c as Qe,l as Ze,g as et,e as de,I as tt}from"./iframe-CHb5MHsJ.js";import"./preload-helper-PPVm8Dsz.js";var ue={},fe={},ge={},Ie;function rt(){return Ie||(Ie=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return t}});function t(c){let{widthInt:l,heightInt:f,blurWidth:a,blurHeight:n,blurDataURL:s,objectFit:j}=c;const b=20,y=a?a*40:l,i=n?n*40:f,p=y&&i?"viewBox='0 0 "+y+" "+i+"'":"",m=p?"none":j==="contain"?"xMidYMid":j==="cover"?"xMidYMid slice":"none";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+p+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+b+"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='"+b+"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+m+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}})(ge)),ge}var he={},Re;function je(){return Re||(Re=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0});function t(f,a){for(var n in a)Object.defineProperty(f,n,{enumerable:!0,get:a[n]})}t(r,{VALID_LOADERS:function(){return c},imageConfigDefault:function(){return l}});const c=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}})(he)),he}var Ee;function Ge(){return Ee||(Ee=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return y}}),_e();const t=rt(),c=je(),l=["-moz-initial","fill","none","scale-down",void 0];function f(i){return i.default!==void 0}function a(i){return i.src!==void 0}function n(i){return!!i&&typeof i=="object"&&(f(i)||a(i))}function s(i){return typeof i>"u"?i:typeof i=="number"?Number.isFinite(i)?i:NaN:typeof i=="string"&&/^[0-9]+$/.test(i)?parseInt(i,10):NaN}function j(i,p,m){let{deviceSizes:q,allSizes:S}=i;if(m){const k=/(^|\s)(1?\d?\d)vw/g,g=[];for(let u;u=k.exec(m);u)g.push(parseInt(u[2]));if(g.length){const u=Math.min(...g)*.01;return{widths:S.filter(x=>x>=q[0]*u),kind:"w"}}return{widths:S,kind:"w"}}return typeof p!="number"?{widths:q,kind:"w"}:{widths:[...new Set([p,p*2].map(k=>S.find(g=>g>=k)||S[S.length-1]))],kind:"x"}}function b(i){let{config:p,src:m,unoptimized:q,width:S,quality:z,sizes:k,loader:g}=i;if(q)return{src:m,srcSet:void 0,sizes:void 0};const{widths:u,kind:x}=j(p,S,k),o=u.length-1;return{sizes:!k&&x==="w"?"100vw":k,srcSet:u.map((h,d)=>g({config:p,src:m,quality:z,width:h})+" "+(x==="w"?h:d+1)+x).join(", "),src:g({config:p,src:m,quality:z,width:u[o]})}}function y(i,p){let{src:m,sizes:q,unoptimized:S=!1,priority:z=!1,loading:k,className:g,quality:u,width:x,height:o,fill:h=!1,style:d,overrideSrc:C,onLoad:R,onLoadingComplete:V,placeholder:_="empty",blurDataURL:I,fetchPriority:L,decoding:O="async",layout:D,objectFit:T,objectPosition:Q,lazyBoundary:ne,lazyRoot:Z,...N}=i;const{imgConf:H,showAltText:M,blurComplete:ee,defaultLoader:J}=p;let W,w=H||c.imageConfigDefault;if("allSizes"in w)W=w;else{var U;const v=[...w.deviceSizes,...w.imageSizes].sort((B,re)=>B-re),G=w.deviceSizes.sort((B,re)=>B-re),te=(U=w.qualities)==null?void 0:U.sort((B,re)=>B-re);W={...w,allSizes:v,deviceSizes:G,qualities:te}}if(typeof J>"u")throw Object.defineProperty(new Error(`images.loaderFile detected but the file is missing default export.
Read more: https://nextjs.org/docs/messages/invalid-images-config`),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let Y=N.loader||J;delete N.loader,delete N.srcSet;const se="__next_img_default"in Y;if(se){if(W.loader==="custom")throw Object.defineProperty(new Error('Image with src "'+m+`" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{const v=Y;Y=G=>{const{config:te,...B}=G;return v(B)}}if(D){D==="fill"&&(h=!0);const v={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}},G={responsive:"100vw",fill:"100vw"},te=v[D];te&&(d={...d,...te});const B=G[D];B&&!q&&(q=B)}let A="",F=s(x),X=s(o),we,Se;if(n(m)){const v=f(m)?m.default:m;if(!v.src)throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(v)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!v.height||!v.width)throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(v)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(we=v.blurWidth,Se=v.blurHeight,I=I||v.blurDataURL,A=v.src,!h){if(!F&&!X)F=v.width,X=v.height;else if(F&&!X){const G=F/v.width;X=Math.round(v.height*G)}else if(!F&&X){const G=X/v.height;F=Math.round(v.width*G)}}}m=typeof m=="string"?m:A;let ke=!z&&(k==="lazy"||typeof k>"u");(!m||m.startsWith("data:")||m.startsWith("blob:"))&&(S=!0,ke=!1),W.unoptimized&&(S=!0),se&&!W.dangerouslyAllowSVG&&m.split("?",1)[0].endsWith(".svg")&&(S=!0);const Ve=s(u),$=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:T,objectPosition:Q}:{},M?{}:{color:"transparent"},d),Ce=!ee&&_!=="empty"?_==="blur"?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:F,heightInt:X,blurWidth:we,blurHeight:Se,blurDataURL:I||"",objectFit:$.objectFit})+'")':'url("'+_+'")':null,Je=l.includes($.objectFit)?$.objectFit==="fill"?"100% 100%":"cover":$.objectFit;let Ye=Ce?{backgroundSize:Je,backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Ce}:{};const le=b({config:W,src:m,unoptimized:S,width:F,quality:Ve,sizes:q,loader:Y});return{props:{...N,loading:ke?"lazy":k,fetchPriority:L,width:F,height:X,decoding:O,className:g,style:{...$,...Ye},sizes:le.sizes,srcSet:le.srcSet,src:C||le.src},meta:{unoptimized:S,priority:z,placeholder:_,fill:h}}}})(fe)),fe}var oe={exports:{}},ae={exports:{}},me={},Pe;function it(){return Pe||(Pe=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});const t=K(),c=typeof window>"u",l=c?()=>{}:t.useLayoutEffect,f=c?()=>{}:t.useEffect;function a(n){const{headManager:s,reduceComponentsToState:j}=n;function b(){if(s&&s.mountedInstances){const i=t.Children.toArray(Array.from(s.mountedInstances).filter(Boolean));s.updateHead(j(i,n))}}if(c){var y;s==null||(y=s.mountedInstances)==null||y.add(n.children),b()}return l(()=>{var i;return s==null||(i=s.mountedInstances)==null||i.add(n.children),()=>{var p;s==null||(p=s.mountedInstances)==null||p.delete(n.children)}}),l(()=>(s&&(s._pendingUpdate=b),()=>{s&&(s._pendingUpdate=b)})),f(()=>(s&&s._pendingUpdate&&(s._pendingUpdate(),s._pendingUpdate=null),()=>{s&&s._pendingUpdate&&(s._pendingUpdate(),s._pendingUpdate=null)})),null}})(me)),me}var pe={},Ne;function nt(){return Ne||(Ne=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"AmpStateContext",{enumerable:!0,get:function(){return l}});const l=ie()._(K()).default.createContext({})})(pe)),pe}var be={},qe;function st(){return qe||(qe=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isInAmpMode",{enumerable:!0,get:function(){return t}});function t(c){let{ampFirst:l=!1,hybrid:f=!1,hasQuery:a=!1}=c===void 0?{}:c;return l||f&&a}})(be)),be}var Oe;function ot(){return Oe||(Oe=1,(function(r,t){"use client";Object.defineProperty(t,"__esModule",{value:!0});function c(g,u){for(var x in u)Object.defineProperty(g,x,{enumerable:!0,get:u[x]})}c(t,{default:function(){return k},defaultHead:function(){return i}});const l=ie(),f=We(),a=Be(),n=f._(K()),s=l._(it()),j=nt(),b=Ke(),y=st();_e();function i(g){g===void 0&&(g=!1);const u=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return g||u.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),u}function p(g,u){return typeof u=="string"||typeof u=="number"?g:u.type===n.default.Fragment?g.concat(n.default.Children.toArray(u.props.children).reduce((x,o)=>typeof o=="string"||typeof o=="number"?x:x.concat(o),[])):g.concat(u)}const m=["name","httpEquiv","charSet","itemProp"];function q(){const g=new Set,u=new Set,x=new Set,o={};return h=>{let d=!0,C=!1;if(h.key&&typeof h.key!="number"&&h.key.indexOf("$")>0){C=!0;const R=h.key.slice(h.key.indexOf("$")+1);g.has(R)?d=!1:g.add(R)}switch(h.type){case"title":case"base":u.has(h.type)?d=!1:u.add(h.type);break;case"meta":for(let R=0,V=m.length;R<V;R++){const _=m[R];if(h.props.hasOwnProperty(_))if(_==="charSet")x.has(_)?d=!1:x.add(_);else{const I=h.props[_],L=o[_]||new Set;(_!=="name"||!C)&&L.has(I)?d=!1:(L.add(I),o[_]=L)}}break}return d}}function S(g,u){const{inAmpMode:x}=u;return g.reduce(p,[]).reverse().concat(i(x).reverse()).filter(q()).reverse().map((o,h)=>{const d=o.key||h;return n.default.cloneElement(o,{key:d})})}function z(g){let{children:u}=g;const x=(0,n.useContext)(j.AmpStateContext),o=(0,n.useContext)(b.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:S,headManager:o,inAmpMode:(0,y.isInAmpMode)(x),children:u})}const k=z;(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)})(ae,ae.exports)),ae.exports}var ye={},Me;function at(){return Me||(Me=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return f}});const c=ie()._(K()),l=je(),f=c.default.createContext(l.imageConfigDefault)})(ye)),ye}var xe={},Ae;function He(){return Ae||(Ae=1,(function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});const t=75;function c(f){let{config:a,src:n,width:s,quality:j}=f;var b;const y=j||((b=a.qualities)==null?void 0:b.reduce((i,p)=>Math.abs(p-t)<Math.abs(i-t)?p:i))||t;return a.path+"?url="+encodeURIComponent(n)+"&w="+s+"&q="+y+(n.startsWith("/_next/static/media/"),"")}c.__next_img_default=!0;const l=c})(xe)),xe}var ce={exports:{}},ze;function ct(){return ze||(ze=1,(function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});const c=K();function l(a,n){const s=(0,c.useRef)(null),j=(0,c.useRef)(null);return(0,c.useCallback)(b=>{if(b===null){const y=s.current;y&&(s.current=null,y());const i=j.current;i&&(j.current=null,i())}else a&&(s.current=f(a,b)),n&&(j.current=f(n,b))},[a,n])}function f(a,n){if(typeof a=="function"){const s=a(n);return typeof s=="function"?s:()=>a(null)}else return a.current=n,()=>{a.current=null}}(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)})(ce,ce.exports)),ce.exports}var Le;function lt(){return Le||(Le=1,(function(r,t){"use client";var c={};Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});const l=ie(),f=We(),a=Be(),n=f._(K()),s=l._(Qe()),j=l._(ot()),b=Ge(),y=je(),i=at();_e();const p=Ze(),m=l._(He()),q=ct(),S=c.__NEXT_IMAGE_OPTS;typeof window>"u"&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);function z(o,h,d,C,R,V,_){const I=o?.src;if(!o||o["data-loaded-src"]===I)return;o["data-loaded-src"]=I,("decode"in o?o.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(!(!o.parentElement||!o.isConnected)){if(h!=="empty"&&R(!0),d?.current){const O=new Event("load");Object.defineProperty(O,"target",{writable:!1,value:o});let D=!1,T=!1;d.current({...O,nativeEvent:O,currentTarget:o,target:o,isDefaultPrevented:()=>D,isPropagationStopped:()=>T,persist:()=>{},preventDefault:()=>{D=!0,O.preventDefault()},stopPropagation:()=>{T=!0,O.stopPropagation()}})}C?.current&&C.current(o)}})}function k(o){return n.use?{fetchPriority:o}:{fetchpriority:o}}const g=(0,n.forwardRef)((o,h)=>{let{src:d,srcSet:C,sizes:R,height:V,width:_,decoding:I,className:L,style:O,fetchPriority:D,placeholder:T,loading:Q,unoptimized:ne,fill:Z,onLoadRef:N,onLoadingCompleteRef:H,setBlurComplete:M,setShowAltText:ee,sizesInput:J,onLoad:W,onError:w,...U}=o;const Y=(0,n.useCallback)(A=>{A&&(w&&(A.src=A.src),A.complete&&z(A,T,N,H,M))},[d,T,N,H,M,w,ne,J]),se=(0,q.useMergedRef)(h,Y);return(0,a.jsx)("img",{...U,...k(D),loading:Q,width:_,height:V,decoding:I,"data-nimg":Z?"fill":"1",className:L,style:O,sizes:R,srcSet:C,src:d,ref:se,onLoad:A=>{const F=A.currentTarget;z(F,T,N,H,M)},onError:A=>{ee(!0),T!=="empty"&&M(!0),w&&w(A)}})});function u(o){let{isAppRouter:h,imgAttributes:d}=o;const C={as:"image",imageSrcSet:d.srcSet,imageSizes:d.sizes,crossOrigin:d.crossOrigin,referrerPolicy:d.referrerPolicy,...k(d.fetchPriority)};return h&&s.default.preload?(s.default.preload(d.src,C),null):(0,a.jsx)(j.default,{children:(0,a.jsx)("link",{rel:"preload",href:d.srcSet?void 0:d.src,...C},"__nimg-"+d.src+d.srcSet+d.sizes)})}const x=(0,n.forwardRef)((o,h)=>{const C=!(0,n.useContext)(p.RouterContext),R=(0,n.useContext)(i.ImageConfigContext),V=(0,n.useMemo)(()=>{var H;const M=S||R||y.imageConfigDefault,ee=[...M.deviceSizes,...M.imageSizes].sort((w,U)=>w-U),J=M.deviceSizes.sort((w,U)=>w-U),W=(H=M.qualities)==null?void 0:H.sort((w,U)=>w-U);return{...M,allSizes:ee,deviceSizes:J,qualities:W}},[R]),{onLoad:_,onLoadingComplete:I}=o,L=(0,n.useRef)(_);(0,n.useEffect)(()=>{L.current=_},[_]);const O=(0,n.useRef)(I);(0,n.useEffect)(()=>{O.current=I},[I]);const[D,T]=(0,n.useState)(!1),[Q,ne]=(0,n.useState)(!1),{props:Z,meta:N}=(0,b.getImgProps)(o,{defaultLoader:m.default,imgConf:V,blurComplete:D,showAltText:Q});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{...Z,unoptimized:N.unoptimized,placeholder:N.placeholder,fill:N.fill,onLoadRef:L,onLoadingCompleteRef:O,setBlurComplete:T,setShowAltText:ne,sizesInput:o.sizes,ref:h}),N.priority?(0,a.jsx)(u,{isAppRouter:C,imgAttributes:Z}):null]})});(typeof t.default=="function"||typeof t.default=="object"&&t.default!==null)&&typeof t.default.__esModule>"u"&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)})(oe,oe.exports)),oe.exports}var De;function dt(){return De||(De=1,(function(r){var t={};Object.defineProperty(r,"__esModule",{value:!0});function c(b,y){for(var i in y)Object.defineProperty(b,i,{enumerable:!0,get:y[i]})}c(r,{default:function(){return j},getImageProps:function(){return s}});const l=ie(),f=Ge(),a=lt(),n=l._(He());function s(b){const{props:y}=(0,f.getImgProps)(b,{defaultLoader:n.default,imgConf:t.__NEXT_IMAGE_OPTS});for(const[i,p]of Object.entries(y))p===void 0&&delete y[i];return{props:y}}const j=a.Image})(ue)),ue}var ve,Te;function ut(){return Te||(Te=1,ve=dt()),ve}var ft=ut();const gt=et(ft);var ht=({src:r,width:t,quality:c=75})=>{const l=[];if(r||l.push("src"),t||l.push("width"),l.length>0)throw new Error(`Next Image Optimization requires ${l.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({src:r,width:t,quality:c})}`);const f=new URL(r,window.location.href);return!f.searchParams.has("w")&&!f.searchParams.has("q")&&(f.searchParams.set("w",t.toString()),f.searchParams.set("q",c.toString())),!r.startsWith("http://")&&!r.startsWith("https://")?f.toString().slice(f.origin.length):f.toString()},mt=gt,Xe=de.forwardRef(({loader:r,...t},c)=>{const l=de.useContext(tt);return de.createElement(mt,{ref:c,...l,...t,loader:r??ht})});Xe.displayName="NextImage";var E=Xe;const P=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx("path",{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})});function Fe(r){const t={code:"code",h1:"h1",p:"p",...Ue(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx($e,{title:"Configure your project"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"configure-your-project",children:"Configure your project"}),e.jsx(t.p,{children:"Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."})]}),e.jsxs("div",{className:"sb-section",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{src:"/stories/assets/styling.png",alt:"A wall of logos representing different styling technologies",width:0,height:0,style:{width:"100%",height:"auto"}}),e.jsx("h4",{className:"sb-section-item-heading",children:"Add styling and CSS"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."}),e.jsxs("a",{href:"https://storybook.js.org/docs/configure/styling-and-css/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/context.png",alt:"An abstraction representing the composition of data for a component"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Provide context and mocking"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-stories/decorators/?renderer=react&ref=configure#context-for-mocking",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/assets.png",alt:"A representation of typography and image assets"}),e.jsxs("div",{children:[e.jsx("h4",{className:"sb-section-item-heading",children:"Load assets and resources"}),e.jsxs("p",{className:"sb-section-item-paragraph",children:[`To link static files (like fonts) to your projects and stories, use the
`,e.jsx(t.code,{children:"staticDirs"}),` configuration option to specify folders to load when
starting Storybook.`]}),e.jsxs("a",{href:"https://storybook.js.org/docs/configure/images-and-assets/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]})]})]})]}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"do-more-with-storybook",children:"Do more with Storybook"}),e.jsx(t.p,{children:"Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."})]}),e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-features-grid",children:[e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/docs.png",alt:"A screenshot showing the autodocs tag being set, pointing a docs page being generated"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Autodocs"}),e.jsx("p",{className:"sb-section-item-paragraph",children:`Auto-generate living,
interactive reference documentation from your components and stories.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/share.png",alt:"A browser window showing a Storybook being published to a chromatic.com URL"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Publish to Chromatic"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Publish your Storybook to review and collaborate with your entire team."}),e.jsxs("a",{href:"https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react&ref=configure#publish-storybook-with-chromatic",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/figma-plugin.png",alt:"Windows showing the Storybook plugin in Figma"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Figma Plugin"}),e.jsx("p",{className:"sb-section-item-paragraph",children:`Embed your stories into Figma to cross-reference the design and live
implementation in one place.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/sharing/design-integrations/?renderer=react&ref=configure#embed-storybook-in-figma-with-the-plugin",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/testing.png",alt:"Screenshot of tests passing and failing"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Testing"}),e.jsx("p",{className:"sb-section-item-paragraph",children:`Use stories to test a component in all its variations, no matter how
complex.`}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-tests/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/accessibility.png",alt:"Screenshot of accessibility tests passing and failing"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Accessibility"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Automatically test your components for a11y issues as you develop."}),e.jsxs("a",{href:"https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(E,{width:0,height:0,style:{width:"100%",height:"auto"},src:"/stories/assets/theming.png",alt:"Screenshot of Storybook in light and dark mode"}),e.jsx("h4",{className:"sb-section-item-heading",children:"Theming"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Theme Storybook's UI to personalize it to your project."}),e.jsxs("a",{href:"https://storybook.js.org/docs/configure/theming/?renderer=react&ref=configure",target:"_blank",children:["Learn more",e.jsx(P,{})]})]})]})})]}),`
`,e.jsxs("div",{className:"sb-addon",children:[e.jsxs("div",{className:"sb-addon-text",children:[e.jsx("h4",{children:"Addons"}),e.jsx("p",{className:"sb-section-item-paragraph",children:"Integrate your tools with Storybook to connect workflows."}),e.jsxs("a",{href:"https://storybook.js.org/addons/?ref=configure",target:"_blank",children:["Discover all addons",e.jsx(P,{})]})]}),e.jsx("div",{className:"sb-addon-img",children:e.jsx(E,{width:650,height:347,src:"/stories/assets/addon-library.png",alt:"Integrate your tools with Storybook to connect workflows."})})]}),`
`,e.jsxs("div",{className:"sb-section sb-socials",children:[e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:32,height:32,layout:"fixed",src:"/stories/assets/github.svg",alt:"Github logo",className:"sb-explore-image"}),e.jsx(t.p,{children:"Join our contributors building the future of UI development."}),e.jsxs("a",{href:"https://github.com/storybookjs/storybook",target:"_blank",children:["Star on GitHub",e.jsx(P,{})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:33,height:32,layout:"fixed",src:"/stories/assets/discord.svg",alt:"Discord logo",className:"sb-explore-image"}),e.jsxs("div",{children:[e.jsx(t.p,{children:"Get support and chat with frontend developers."}),e.jsxs("a",{href:"https://discord.gg/storybook",target:"_blank",children:["Join Discord server",e.jsx(P,{})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:32,height:32,layout:"fixed",src:"/stories/assets/youtube.svg",alt:"Youtube logo",className:"sb-explore-image"}),e.jsxs("div",{children:[e.jsx(t.p,{children:"Watch tutorials, feature previews and interviews."}),e.jsxs("a",{href:"https://www.youtube.com/@chromaticui",target:"_blank",children:["Watch on YouTube",e.jsx(P,{})]})]})]}),e.jsxs("div",{className:"sb-section-item",children:[e.jsx(E,{width:33,height:32,layout:"fixed",src:"/stories/assets/tutorials.svg",alt:"A book",className:"sb-explore-image"}),e.jsx("p",{children:"Follow guided walkthroughs on for key workflows."}),e.jsxs("a",{href:"https://storybook.js.org/tutorials/?ref=configure",target:"_blank",children:["Discover tutorials",e.jsx(P,{})]})]})]}),`
`,e.jsx("style",{children:`
.sb-container {
  margin-bottom: 48px;
}

.sb-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

img {
  object-fit: cover;
}

.sb-section-title {
  margin-bottom: 32px;
}

.sb-section a:not(h1 a, h2 a, h3 a) {
  font-size: 14px;
}

.sb-section-item, .sb-grid-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sb-section-item-heading {
  padding-top: 20px !important;
  padding-bottom: 5px !important;
  margin: 0 !important;
}
.sb-section-item-paragraph {
  margin: 0;
  padding-bottom: 10px;
}

.sb-chevron {
  margin-left: 5px;
}

.sb-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px 20px;
}

.sb-socials {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.sb-socials p {
  margin-bottom: 10px;
}

.sb-explore-image {
  max-height: 32px;
  align-self: flex-start;
}

.sb-addon {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #EEF3F8;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #EEF3F8;
  height: 180px;
  margin-bottom: 48px;
  overflow: hidden;
}

.sb-addon-text {
  padding-left: 48px;
  max-width: 240px;
}

.sb-addon-text h4 {
  padding-top: 0px;
}

.sb-addon-img {
  position: absolute;
  left: 345px;
  top: 0;
  height: 100%;
  width: 200%;
  overflow: hidden;
}

.sb-addon-img img {
  width: 650px;
  transform: rotate(-15deg);
  margin-left: 40px;
  margin-top: -72px;
  box-shadow: 0 0 1px rgba(255, 255, 255, 0);
  backface-visibility: hidden;
}

@media screen and (max-width: 800px) {
  .sb-addon-img {
    left: 300px;
  }
}

@media screen and (max-width: 600px) {
  .sb-section {
    flex-direction: column;
  }

  .sb-features-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .sb-socials {
    grid-template-columns: repeat(2, 1fr);
  }

  .sb-addon {
    height: 280px;
    align-items: flex-start;
    padding-top: 32px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 24px;
  }

  .sb-addon-img {
    right: 0;
    left: 0;
    top: 130px;
    bottom: 0;
    overflow: hidden;
    height: auto;
    width: 124%;
  }

  .sb-addon-img img {
    width: 1200px;
    transform: rotate(-12deg);
    margin-left: 0;
    margin-top: 48px;
    margin-bottom: -40px;
    margin-left: -24px;
  }
}
`})]})}function wt(r={}){const{wrapper:t}={...Ue(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(Fe,{...r})}):Fe(r)}export{P as RightArrow,wt as default};
