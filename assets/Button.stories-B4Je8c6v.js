import{e}from"./iframe-CHb5MHsJ.js";import{j as p}from"./jsx-runtime-CZkaD0iU.js";import"./preload-helper-PPVm8Dsz.js";const t=({children:v,type:f="button",variant:b="primary",size:E="medium",disabled:u=!1,loading:a=!1,fullWidth:B=!1,className:k="",onClick:y,onFocus:g,onBlur:h,id:x,name:R,value:M})=>{const S=["button",`button--${b}`,`button--${E}`,B&&"button--full-width",u&&"button--disabled",a&&"button--loading",k].filter(Boolean).join(" "),T=r=>{!u&&!a&&y&&y(r)},w=r=>{g&&g(r)},W=r=>{h&&h(r)};return p.jsxs("button",{id:x,name:R,value:M,type:f,className:S,disabled:u||a,onClick:T,onFocus:w,onBlur:W,children:[a&&p.jsx("span",{className:"button__spinner"}),p.jsx("span",{className:a?"button__text--loading":"button__text",children:v})]})};t.__docgenInfo={description:`Button component with various styles and states
Matches the pink "Send Mail" button from the form design`,methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button text"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"Button type",defaultValue:{value:"'button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"Button variant",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Button size",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the button is loading",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Button width",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"},id:{required:!1,tsType:{name:"string"},description:"Button id"},name:{required:!1,tsType:{name:"string"},description:"Button name"},value:{required:!1,tsType:{name:"string"},description:"Button value"}}};const z={title:"Design System/Button",component:t,parameters:{layout:"padded",docs:{description:{component:'Button component with various styles and states. Matches the pink "Send Mail" button from the form design.'}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"],description:"Button variant"},size:{control:"select",options:["small","medium","large"],description:"Button size"},fullWidth:{control:"boolean",description:"Whether the button takes full width"},disabled:{control:"boolean",description:"Whether the button is disabled"},loading:{control:"boolean",description:"Whether the button is loading"}}},n={args:{children:"Button"}},s={args:{children:"Send Mail",variant:"primary"},parameters:{docs:{description:{story:'Primary button matching the pink "Send Mail" button from the form design.'}}}},i={args:{children:"Send Mail",variant:"primary",fullWidth:!0},parameters:{docs:{description:{story:"Full width primary button matching the form design."}}}},o={render:()=>e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"}},[e.createElement(t,{key:"primary",variant:"primary"},"Primary"),e.createElement(t,{key:"secondary",variant:"secondary"},"Secondary"),e.createElement(t,{key:"outline",variant:"outline"},"Outline"),e.createElement(t,{key:"ghost",variant:"ghost"},"Ghost"),e.createElement(t,{key:"danger",variant:"danger"},"Danger")])},l={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"12px"}},[e.createElement(t,{key:"small",size:"small"},"Small"),e.createElement(t,{key:"medium",size:"medium"},"Medium"),e.createElement(t,{key:"large",size:"large"},"Large")])},m={render:()=>e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"}},[e.createElement(t,{key:"normal",variant:"primary"},"Normal"),e.createElement(t,{key:"loading",variant:"primary",loading:!0},"Loading"),e.createElement(t,{key:"disabled",variant:"primary",disabled:!0},"Disabled")])},d={render:()=>e.createElement("div",{style:{background:"#000",padding:"40px",borderRadius:"8px",maxWidth:"500px"}},e.createElement(t,{variant:"primary",fullWidth:!0,type:"submit"},"Send Mail")),parameters:{docs:{description:{story:"Form button matching the design from the image."}}}},c={args:{children:"Click Me",variant:"primary",onClick:()=>alert("Button clicked!")},parameters:{docs:{description:{story:"Interactive button with click handler."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send Mail',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button matching the pink "Send Mail" button from the form design.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send Mail',
    variant: 'primary',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Full width primary button matching the form design.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, [React.createElement(Button, {
    key: 'primary',
    variant: "primary"
  }, "Primary"), React.createElement(Button, {
    key: 'secondary',
    variant: "secondary"
  }, "Secondary"), React.createElement(Button, {
    key: 'outline',
    variant: "outline"
  }, "Outline"), React.createElement(Button, {
    key: 'ghost',
    variant: "ghost"
  }, "Ghost"), React.createElement(Button, {
    key: 'danger',
    variant: "danger"
  }, "Danger")])
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, [React.createElement(Button, {
    key: 'small',
    size: "small"
  }, "Small"), React.createElement(Button, {
    key: 'medium',
    size: "medium"
  }, "Medium"), React.createElement(Button, {
    key: 'large',
    size: "large"
  }, "Large")])
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, [React.createElement(Button, {
    key: 'normal',
    variant: "primary"
  }, "Normal"), React.createElement(Button, {
    key: 'loading',
    variant: "primary",
    loading: true
  }, "Loading"), React.createElement(Button, {
    key: 'disabled',
    variant: "primary",
    disabled: true
  }, "Disabled")])
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      background: '#000',
      padding: '40px',
      borderRadius: '8px',
      maxWidth: '500px'
    }
  }, React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    type: "submit"
  }, "Send Mail")),
  parameters: {
    docs: {
      description: {
        story: 'Form button matching the design from the image.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary',
    onClick: () => alert('Button clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button with click handler.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const N=["Default","Primary","FullWidth","Variants","Sizes","States","FormButton","Interactive"];export{n as Default,d as FormButton,i as FullWidth,c as Interactive,s as Primary,l as Sizes,m as States,o as Variants,N as __namedExportsOrder,z as default};
