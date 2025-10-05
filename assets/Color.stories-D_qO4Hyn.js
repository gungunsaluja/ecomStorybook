import{e as a}from"./iframe-CHb5MHsJ.js";import{j as s}from"./jsx-runtime-CZkaD0iU.js";import"./preload-helper-PPVm8Dsz.js";const y={pink:"#FB2E86",offNavyBlue:"#2C3E50",purple:"#8E44AD",red:"#E74C3C",navyBlue:"#1A252F",offPurple:"#9B59B6",blue:"#3498DB",skyBlue:"#85C1E9",pantonePurple:"#D2B4DE",offBlue:"#1B2631"},r=({variant:e,showName:k=!0,showHex:B=!0,size:w="medium",selected:x=!1})=>{const h=y[e],z=e.replace(/([A-Z])/g," $1").replace(/^./,C=>C.toUpperCase());return s.jsx("div",{className:`color-swatch color-swatch--${w} ${x?"color-swatch--selected":""}`,style:{backgroundColor:h},role:"button",tabIndex:0,"aria-label":`Color: ${z} (${h})`,children:s.jsxs("div",{className:"color-swatch__content",children:[k&&s.jsx("span",{className:"color-swatch__name",children:z}),B&&s.jsx("span",{className:"color-swatch__hex",children:h})]})})};r.__docgenInfo={description:"Color component for displaying color swatches in the design system",methods:[],displayName:"Color",props:{variant:{required:!0,tsType:{name:"union",raw:"'pink' | 'offNavyBlue' | 'purple' | 'red' | 'navyBlue' | 'offPurple' | 'blue' | 'skyBlue' | 'pantonePurple' | 'offBlue'",elements:[{name:"literal",value:"'pink'"},{name:"literal",value:"'offNavyBlue'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'navyBlue'"},{name:"literal",value:"'offPurple'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'skyBlue'"},{name:"literal",value:"'pantonePurple'"},{name:"literal",value:"'offBlue'"}]},description:"The color variant to display"},showName:{required:!1,tsType:{name:"boolean"},description:"Whether to show the color name",defaultValue:{value:"true",computed:!1}},showHex:{required:!1,tsType:{name:"boolean"},description:"Whether to show the hex code",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Custom size for the color swatch",defaultValue:{value:"'medium'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether this color is selected/focused",defaultValue:{value:"false",computed:!1}}}};const N={title:"Design System/Color",component:r,parameters:{layout:"padded",docs:{description:{component:"Color swatches for the design system. Each color includes a name and hex code."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:Object.keys(y),description:"The color variant to display"},size:{control:"select",options:["small","medium","large"],description:"Size of the color swatch"},showName:{control:"boolean",description:"Whether to show the color name"},showHex:{control:"boolean",description:"Whether to show the hex code"},selected:{control:"boolean",description:"Whether this color is selected/focused"}}},n={args:{variant:"pink",size:"large",selected:!0}},t={args:{variant:"offNavyBlue",size:"medium"}},o={args:{variant:"purple",size:"medium"}},l={args:{variant:"red",size:"medium"}},i={args:{variant:"navyBlue",size:"medium"}},c={args:{variant:"offPurple",size:"medium"}},m={args:{variant:"blue",size:"medium"}},u={args:{variant:"skyBlue",size:"medium"}},p={args:{variant:"pantonePurple",size:"medium"}},d={args:{variant:"offBlue",size:"large"}},f={args:{variant:"pink",size:"medium"},render:()=>a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"}},Object.keys(y).map(e=>a.createElement(r,{key:e,variant:e,size:e==="pink"||e==="offBlue"?"large":"medium",selected:e==="pink"}))),parameters:{docs:{description:{story:"Complete color palette showing all available colors in the design system."}}}},v={args:{variant:"pink",size:"medium"},render:()=>a.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"flex-end"}},[a.createElement(r,{key:"small",variant:"pink",size:"small"}),a.createElement(r,{key:"medium",variant:"pink",size:"medium"}),a.createElement(r,{key:"large",variant:"pink",size:"large"})]),parameters:{docs:{description:{story:"Different size variants of the color swatch component."}}}},g={args:{variant:"pink",size:"medium",showName:!0,showHex:!0,selected:!1},parameters:{docs:{description:{story:"Interactive color swatch that you can customize using the controls panel."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pink',
    size: 'large',
    selected: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'offNavyBlue',
    size: 'medium'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'purple',
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'red',
    size: 'medium'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'navyBlue',
    size: 'medium'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'offPurple',
    size: 'medium'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'blue',
    size: 'medium'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'skyBlue',
    size: 'medium'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pantonePurple',
    size: 'medium'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'offBlue',
    size: 'large'
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pink',
    size: 'medium'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }
    }, Object.keys(colors).map(colorKey => React.createElement(Color, {
      key: colorKey,
      variant: colorKey as keyof typeof colors,
      size: colorKey === 'pink' || colorKey === 'offBlue' ? 'large' : 'medium',
      selected: colorKey === 'pink'
    })));
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing all available colors in the design system.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pink',
    size: 'medium'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-end'
      }
    }, [React.createElement(Color, {
      key: 'small',
      variant: 'pink',
      size: 'small'
    }), React.createElement(Color, {
      key: 'medium',
      variant: 'pink',
      size: 'medium'
    }), React.createElement(Color, {
      key: 'large',
      variant: 'pink',
      size: 'large'
    })]);
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the color swatch component.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pink',
    size: 'medium',
    showName: true,
    showHex: true,
    selected: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive color swatch that you can customize using the controls panel.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const S=["Pink","OffNavyBlue","Purple","Red","NavyBlue","OffPurple","Blue","SkyBlue","PantonePurple","OffBlue","ColorPalette","SizeVariants","Interactive"];export{m as Blue,f as ColorPalette,g as Interactive,i as NavyBlue,d as OffBlue,t as OffNavyBlue,c as OffPurple,p as PantonePurple,n as Pink,o as Purple,l as Red,v as SizeVariants,u as SkyBlue,S as __namedExportsOrder,N as default};
