import{e}from"./iframe-CHb5MHsJ.js";import{j as u}from"./jsx-runtime-CZkaD0iU.js";import"./preload-helper-PPVm8Dsz.js";const n=({name:a,size:t="large",color:d,className:y="",clickable:r=!1,onClick:g,"aria-label":x})=>{const f=`/stories/assets/${a}.svg`,E=()=>{r&&g&&g()},k=["icon",`icon--${t}`,r?"icon--clickable":"",y].filter(Boolean).join(" ");return u.jsx("div",{className:k,style:{color:d},onClick:E,role:r?"button":"img","aria-label":x||`${a} icon`,tabIndex:r?0:void 0,children:u.jsx("img",{src:f,alt:x||`${a} icon`,className:"icon__image"})})};n.__docgenInfo={description:"Icon component for displaying SVG icons in the design system",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:"The name of the icon to display"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"},{name:"literal",value:"'xxlarge'"},{name:"literal",value:"'xxxlarge'"}]},description:"Size of the icon",defaultValue:{value:"'large'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Color of the icon"},className:{required:!1,tsType:{name:"string"},description:"Custom className for styling",defaultValue:{value:"''",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"Whether the icon should be clickable",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessibility label"}}};const G={title:"Design System/Icon",component:n,parameters:{layout:"padded",docs:{description:{component:"Icon component for displaying SVG icons. Currently featuring Group 63 icon with larger, more visible sizes."}}},tags:["autodocs"],argTypes:{name:{control:"text",description:"The name of the icon to display"},size:{control:"select",options:["small","medium","large","xlarge","xxlarge","xxxlarge"],description:"Size of the icon"},color:{control:"color",description:"Color of the icon"},clickable:{control:"boolean",description:"Whether the icon should be clickable"}}},l={args:{name:"Group 63",size:"large",clickable:!1}},o={args:{name:"Group 63",size:"xlarge",clickable:!1}},s={args:{name:"Group 63",size:"xxlarge",clickable:!1}},i={args:{name:"Group 63",size:"xxxlarge",clickable:!1}},c={args:{name:"Group 63",size:"large"},render:()=>e.createElement("div",{style:{display:"flex",gap:"30px",alignItems:"center",flexWrap:"wrap"}},[e.createElement("div",{key:"small",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold"}},"Small (32px)"),e.createElement(n,{key:"icon",name:"Group 63",size:"small"})]),e.createElement("div",{key:"medium",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold"}},"Medium (48px)"),e.createElement(n,{key:"icon",name:"Group 63",size:"medium"})]),e.createElement("div",{key:"large",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold"}},"Large (64px)"),e.createElement(n,{key:"icon",name:"Group 63",size:"large"})]),e.createElement("div",{key:"xlarge",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold"}},"XLarge (96px)"),e.createElement(n,{key:"icon",name:"Group 63",size:"xlarge"})]),e.createElement("div",{key:"xxlarge",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold"}},"XXLarge (128px)"),e.createElement(n,{key:"icon",name:"Group 63",size:"xxlarge"})]),e.createElement("div",{key:"xxxlarge",style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold"}},"XXXLarge (256px)"),e.createElement(n,{key:"icon",name:"Group 63",size:"xxxlarge"})])]),parameters:{docs:{description:{story:"All size variants of the Group 63 icon with labels showing the actual pixel dimensions."}}}},p={args:{name:"Group 63",size:"xlarge"},render:()=>{const a=["#FB2E86","#3498DB","#27AE60","#F39C12","#E74C3C","#7F8C8D"];return e.createElement("div",{style:{display:"flex",gap:"30px",alignItems:"center",flexWrap:"wrap"}},a.map((t,d)=>e.createElement("div",{key:d,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}},[e.createElement("span",{key:"label",style:{fontSize:"14px",fontWeight:"bold",color:t}},t),e.createElement(n,{key:"icon",name:"Group 63",size:"xlarge",color:t})])))},parameters:{docs:{description:{story:"Group 63 icon with different colors applied."}}}},m={args:{name:"Group 63",size:"xlarge",clickable:!1,color:"#FB2E86"},parameters:{docs:{description:{story:"Interactive Group 63 icon that you can customize using the controls panel."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'large',
    clickable: false
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'xlarge',
    clickable: false
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'xxlarge',
    clickable: false
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'xxxlarge',
    clickable: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'large'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, [React.createElement('div', {
      key: 'small',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }, 'Small (32px)'), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'small'
    })]), React.createElement('div', {
      key: 'medium',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }, 'Medium (48px)'), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'medium'
    })]), React.createElement('div', {
      key: 'large',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }, 'Large (64px)'), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'large'
    })]), React.createElement('div', {
      key: 'xlarge',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }, 'XLarge (96px)'), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'xlarge'
    })]), React.createElement('div', {
      key: 'xxlarge',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }, 'XXLarge (128px)'), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'xxlarge'
    })]), React.createElement('div', {
      key: 'xxxlarge',
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold'
      }
    }, 'XXXLarge (256px)'), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'xxxlarge'
    })])]);
  },
  parameters: {
    docs: {
      description: {
        story: 'All size variants of the Group 63 icon with labels showing the actual pixel dimensions.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'xlarge'
  },
  render: () => {
    const colors = ['#FB2E86', '#3498DB', '#27AE60', '#F39C12', '#E74C3C', '#7F8C8D'];
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, colors.map((color, index) => React.createElement('div', {
      key: index,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: color
      }
    }, color), React.createElement(Icon, {
      key: 'icon',
      name: 'Group 63',
      size: 'xlarge',
      color: color
    })])));
  },
  parameters: {
    docs: {
      description: {
        story: 'Group 63 icon with different colors applied.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Group 63',
    size: 'xlarge',
    clickable: false,
    color: '#FB2E86'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive Group 63 icon that you can customize using the controls panel.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const v=["Group63","Group63Large","Group63ExtraLarge","Group63Huge","SizeVariants","ColorVariants","Interactive"];export{p as ColorVariants,l as Group63,s as Group63ExtraLarge,i as Group63Huge,o as Group63Large,m as Interactive,c as SizeVariants,v as __namedExportsOrder,G as default};
