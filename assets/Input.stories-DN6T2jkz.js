import{e}from"./iframe-CHb5MHsJ.js";import{j as r}from"./jsx-runtime-CZkaD0iU.js";import"./preload-helper-PPVm8Dsz.js";const a=({type:R="text",placeholder:E,value:x,label:b,required:w=!1,disabled:h=!1,size:N="medium",variant:Y="default",error:l,success:n,helperText:v,name:y,id:H,className:j="",onChange:T,onFocus:I,onBlur:k,multiline:D=!1,rows:_=4})=>{const f=H||y||`input-${Math.random().toString(36).substr(2,9)}`,q=["input",`input--${N}`,`input--${Y}`,l&&"input--error",n&&"input--success",h&&"input--disabled",j].filter(Boolean).join(" "),M=t=>{T&&T(t)},S=t=>{I&&I(t)},L=t=>{k&&k(t)};return r.jsxs("div",{className:"input__wrapper",children:[b&&r.jsxs("label",{htmlFor:f,className:"input__label",children:[b,w&&r.jsx("span",{className:"input__required",children:"*"})]}),D?r.jsx("textarea",{id:f,name:y,className:q,placeholder:E,value:x,disabled:h,rows:_,onChange:M,onFocus:S,onBlur:L}):r.jsx("input",{id:f,type:R,name:y,className:q,placeholder:E,value:x,disabled:h,onChange:M,onFocus:S,onBlur:L}),l&&r.jsx("span",{className:"input__error-message",children:l}),n&&r.jsx("span",{className:"input__success-message",children:n}),v&&!l&&!n&&r.jsx("span",{className:"input__helper-text",children:v})]})};a.__docgenInfo={description:`Input component for forms with various types and styling options
Supports both single-line inputs and textareas`,methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'tel' | 'url' | 'search'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'search'"}]},description:"Input type",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Input placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value"},label:{required:!1,tsType:{name:"string"},description:"Input label"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the input is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the input is disabled",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Input size",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'dark' | 'light'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Input variant",defaultValue:{value:"'default'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message"},success:{required:!1,tsType:{name:"string"},description:"Success message"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},name:{required:!1,tsType:{name:"string"},description:"Input name"},id:{required:!1,tsType:{name:"string"},description:"Input id"},className:{required:!1,tsType:{name:"string"},description:"Custom className",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}]},name:"e"}],return:{name:"void"}}},description:"Blur handler"},multiline:{required:!1,tsType:{name:"boolean"},description:"Whether this is a textarea",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Number of rows for textarea",defaultValue:{value:"4",computed:!1}}}};const C={title:"Design System/Input",component:a,parameters:{layout:"padded",docs:{description:{component:"Input component for forms with various types and styling options. Supports both single-line inputs and textareas."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","tel","url","search"],description:"Input type"},size:{control:"select",options:["small","medium","large"],description:"Input size"},variant:{control:"select",options:["default","dark","light"],description:"Input variant"},multiline:{control:"boolean",description:"Whether this is a textarea"},required:{control:"boolean",description:"Whether the input is required"},disabled:{control:"boolean",description:"Whether the input is disabled"}}},s={args:{placeholder:"Enter text here"}},i={args:{label:"Your Name",placeholder:"Enter your name",required:!0}},o={args:{label:"Your Name*",placeholder:"Your Name*",variant:"dark",required:!0},parameters:{docs:{description:{story:"Dark variant input matching the form design from the image."}}}},u={args:{label:"Your E-mail",type:"email",placeholder:"Your E-mail",variant:"dark"}},m={args:{label:"Subject*",placeholder:"Subject*",variant:"dark",required:!0}},p={args:{label:"Type Your Message*",placeholder:"Type Your Messege*",variant:"dark",multiline:!0,rows:6,required:!0},parameters:{docs:{description:{story:"Textarea for longer messages, matching the form design."}}}},c={render:()=>e.createElement("div",{style:{background:"#000",padding:"40px",borderRadius:"8px",maxWidth:"500px",display:"flex",flexDirection:"column",gap:"20px"}},[e.createElement("div",{key:"row1",style:{display:"flex",gap:"16px"}},[e.createElement(a,{key:"name",label:"Your Name*",placeholder:"Your Name*",variant:"dark",required:!0,style:{flex:1}}),e.createElement(a,{key:"email",label:"Your E-mail",type:"email",placeholder:"Your E-mail",variant:"dark",style:{flex:1}})]),e.createElement(a,{key:"subject",label:"Subject*",placeholder:"Subject*",variant:"dark",required:!0}),e.createElement(a,{key:"message",label:"Type Your Message*",placeholder:"Type Your Messege*",variant:"dark",multiline:!0,rows:6,required:!0})]),parameters:{docs:{description:{story:"Complete form layout matching the design from the image."}}}},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[e.createElement(a,{key:"small",label:"Small Input",placeholder:"Small input",size:"small"}),e.createElement(a,{key:"medium",label:"Medium Input",placeholder:"Medium input",size:"medium"}),e.createElement(a,{key:"large",label:"Large Input",placeholder:"Large input",size:"large"})])},g={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},[e.createElement(a,{key:"normal",label:"Normal Input",placeholder:"Normal state"}),e.createElement(a,{key:"error",label:"Error Input",placeholder:"Error state",error:"This field is required"}),e.createElement(a,{key:"success",label:"Success Input",placeholder:"Success state",success:"Looks good!"}),e.createElement(a,{key:"disabled",label:"Disabled Input",placeholder:"Disabled state",disabled:!0})])};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    required: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Your Name*',
    placeholder: 'Your Name*',
    variant: 'dark',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark variant input matching the form design from the image.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Your E-mail',
    type: 'email',
    placeholder: 'Your E-mail',
    variant: 'dark'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subject*',
    placeholder: 'Subject*',
    variant: 'dark',
    required: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Type Your Message*',
    placeholder: 'Type Your Messege*',
    variant: 'dark',
    multiline: true,
    rows: 6,
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea for longer messages, matching the form design.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      background: '#000',
      padding: '40px',
      borderRadius: '8px',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, [React.createElement('div', {
    key: 'row1',
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, [React.createElement(Input, {
    key: 'name',
    label: "Your Name*",
    placeholder: "Your Name*",
    variant: "dark",
    required: true,
    style: {
      flex: 1
    }
  }), React.createElement(Input, {
    key: 'email',
    label: "Your E-mail",
    type: "email",
    placeholder: "Your E-mail",
    variant: "dark",
    style: {
      flex: 1
    }
  })]), React.createElement(Input, {
    key: 'subject',
    label: "Subject*",
    placeholder: "Subject*",
    variant: "dark",
    required: true
  }), React.createElement(Input, {
    key: 'message',
    label: "Type Your Message*",
    placeholder: "Type Your Messege*",
    variant: "dark",
    multiline: true,
    rows: 6,
    required: true
  })]),
  parameters: {
    docs: {
      description: {
        story: 'Complete form layout matching the design from the image.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, [React.createElement(Input, {
    key: 'small',
    label: "Small Input",
    placeholder: "Small input",
    size: "small"
  }), React.createElement(Input, {
    key: 'medium',
    label: "Medium Input",
    placeholder: "Medium input",
    size: "medium"
  }), React.createElement(Input, {
    key: 'large',
    label: "Large Input",
    placeholder: "Large input",
    size: "large"
  })])
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, [React.createElement(Input, {
    key: 'normal',
    label: "Normal Input",
    placeholder: "Normal state"
  }), React.createElement(Input, {
    key: 'error',
    label: "Error Input",
    placeholder: "Error state",
    error: "This field is required"
  }), React.createElement(Input, {
    key: 'success',
    label: "Success Input",
    placeholder: "Success state",
    success: "Looks good!"
  }), React.createElement(Input, {
    key: 'disabled',
    label: "Disabled Input",
    placeholder: "Disabled state",
    disabled: true
  })])
}`,...g.parameters?.docs?.source}}};const V=["Default","WithLabel","Dark","Email","Subject","Message","FormLayout","SizeVariants","States"];export{o as Dark,s as Default,u as Email,c as FormLayout,p as Message,d as SizeVariants,g as States,m as Subject,i as WithLabel,V as __namedExportsOrder,C as default};
