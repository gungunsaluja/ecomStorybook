import{e as n}from"./iframe-CHb5MHsJ.js";import{j as r}from"./jsx-runtime-CZkaD0iU.js";import"./preload-helper-PPVm8Dsz.js";const d={josefinSans:{name:"Josefin Sans",description:"Full Typeface",fontFamily:"var(--font-josefin-sans), Josefin Sans, sans-serif",weights:{light:300,regular:400,medium:500,semiBold:600,bold:700}},lato:{name:"Lato",description:"Regular",fontFamily:"var(--font-lato), Lato, sans-serif",weights:{light:300,regular:400,bold:700}}},t=({variant:e,showName:u=!0,showDescription:f=!0,displayText:g="Aa",weight:y="regular",fontSize:h="medium"})=>{const a=d[e],v=a.name,S=a.description,w=a.fontFamily,x=a.weights[y]||a.weights.regular;return r.jsxs("div",{className:"font-swatch",children:[r.jsx("div",{className:`font-swatch__display font-swatch__display--${h}`,style:{fontFamily:w,fontWeight:x},children:g}),r.jsxs("div",{className:"font-swatch__content",children:[u&&r.jsx("span",{className:"font-swatch__name",children:v}),f&&r.jsx("span",{className:"font-swatch__description",children:S})]})]})};t.__docgenInfo={description:"Font component for displaying typography examples in the design system",methods:[],displayName:"Font",props:{variant:{required:!0,tsType:{name:"union",raw:"'josefinSans' | 'lato'",elements:[{name:"literal",value:"'josefinSans'"},{name:"literal",value:"'lato'"}]},description:"The font variant to display"},showName:{required:!1,tsType:{name:"boolean"},description:"Whether to show the font name",defaultValue:{value:"true",computed:!1}},showDescription:{required:!1,tsType:{name:"boolean"},description:"Whether to show the description",defaultValue:{value:"true",computed:!1}},displayText:{required:!1,tsType:{name:"string"},description:"Custom text to display",defaultValue:{value:"'Aa'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'regular' | 'medium' | 'semiBold' | 'bold'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semiBold'"},{name:"literal",value:"'bold'"}]},description:"Font weight to display",defaultValue:{value:"'regular'",computed:!1}},fontSize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Font size",defaultValue:{value:"'medium'",computed:!1}}}};const k={title:"Design System/Font",component:t,parameters:{layout:"padded",docs:{description:{component:"Typography examples for the design system. Each font includes a name and description."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:Object.keys(d),description:"The font variant to display"},weight:{control:"select",options:["light","regular","medium","semiBold","bold"],description:"Font weight to display (Note: Lato only supports light, regular, bold)"},fontSize:{control:"select",options:["small","medium","large"],description:"Font size of the display text"},displayText:{control:"text",description:"Custom text to display"},showName:{control:"boolean",description:"Whether to show the font name"},showDescription:{control:"boolean",description:"Whether to show the font description"}}},s={args:{variant:"josefinSans",fontSize:"medium",weight:"regular"}},o={args:{variant:"lato",fontSize:"medium",weight:"regular"}},i={args:{variant:"josefinSans",fontSize:"medium",weight:"regular"},render:()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},["light","regular","medium","semiBold","bold"].map(e=>n.createElement("div",{key:e,style:{display:"flex",alignItems:"center",gap:"20px"}},[n.createElement("span",{key:"label",style:{minWidth:"100px",fontSize:"14px",color:"#666"}},e.charAt(0).toUpperCase()+e.slice(1)),n.createElement(t,{key:"font",variant:"josefinSans",weight:e,fontSize:"medium",displayText:"The quick brown fox jumps over the lazy dog"})]))),parameters:{docs:{description:{story:"Josefin Sans font in different weights."}}}},l={args:{variant:"lato",fontSize:"medium",weight:"regular"},render:()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},["light","regular","bold"].map(e=>n.createElement("div",{key:e,style:{display:"flex",alignItems:"center",gap:"20px"}},[n.createElement("span",{key:"label",style:{minWidth:"100px",fontSize:"14px",color:"#666"}},e.charAt(0).toUpperCase()+e.slice(1)),n.createElement(t,{key:"font",variant:"lato",weight:e,fontSize:"medium",displayText:"The quick brown fox jumps over the lazy dog"})]))),parameters:{docs:{description:{story:"Lato font in different weights."}}}},m={args:{variant:"josefinSans",fontSize:"medium",weight:"regular"},render:()=>n.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"flex-end"}},[n.createElement(t,{key:"small",variant:"josefinSans",fontSize:"small"}),n.createElement(t,{key:"medium",variant:"josefinSans",fontSize:"medium"}),n.createElement(t,{key:"large",variant:"josefinSans",fontSize:"large"})]),parameters:{docs:{description:{story:"Different size variants of the font component."}}}},c={args:{variant:"josefinSans",fontSize:"medium",weight:"regular"},render:()=>n.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},Object.keys(d).map(e=>n.createElement(t,{key:e,variant:e,fontSize:"medium",weight:"regular"}))),parameters:{docs:{description:{story:"Complete typography overview showing all available fonts in the design system."}}}},p={args:{variant:"josefinSans",fontSize:"medium",weight:"regular",displayText:"Aa",showName:!0,showDescription:!0},parameters:{docs:{description:{story:"Interactive font component that you can customize using the controls panel."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'lato',
    fontSize: 'medium',
    weight: 'regular'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, (['light', 'regular', 'medium', 'semiBold', 'bold'] as const).map(weight => React.createElement('div', {
      key: weight,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        minWidth: '100px',
        fontSize: '14px',
        color: '#666'
      }
    }, weight.charAt(0).toUpperCase() + weight.slice(1)), React.createElement(Font, {
      key: 'font',
      variant: 'josefinSans',
      weight: weight,
      fontSize: 'medium',
      displayText: 'The quick brown fox jumps over the lazy dog'
    })])));
  },
  parameters: {
    docs: {
      description: {
        story: 'Josefin Sans font in different weights.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'lato',
    fontSize: 'medium',
    weight: 'regular'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, (['light', 'regular', 'bold'] as const).map(weight => React.createElement('div', {
      key: weight,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }
    }, [React.createElement('span', {
      key: 'label',
      style: {
        minWidth: '100px',
        fontSize: '14px',
        color: '#666'
      }
    }, weight.charAt(0).toUpperCase() + weight.slice(1)), React.createElement(Font, {
      key: 'font',
      variant: 'lato',
      weight: weight,
      fontSize: 'medium',
      displayText: 'The quick brown fox jumps over the lazy dog'
    })])));
  },
  parameters: {
    docs: {
      description: {
        story: 'Lato font in different weights.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-end'
      }
    }, [React.createElement(Font, {
      key: 'small',
      variant: 'josefinSans',
      fontSize: 'small'
    }), React.createElement(Font, {
      key: 'medium',
      variant: 'josefinSans',
      fontSize: 'medium'
    }), React.createElement(Font, {
      key: 'large',
      variant: 'josefinSans',
      fontSize: 'large'
    })]);
  },
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the font component.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular'
  },
  render: () => {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
      }
    }, Object.keys(typography).map(fontKey => React.createElement(Font, {
      key: fontKey,
      variant: fontKey as keyof typeof typography,
      fontSize: 'medium',
      weight: 'regular'
    })));
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete typography overview showing all available fonts in the design system.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'josefinSans',
    fontSize: 'medium',
    weight: 'regular',
    displayText: 'Aa',
    showName: true,
    showDescription: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive font component that you can customize using the controls panel.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const b=["JosefinSans","Lato","JosefinSansWeights","LatoWeights","SizeVariants","TypographyOverview","Interactive"];export{p as Interactive,s as JosefinSans,i as JosefinSansWeights,o as Lato,l as LatoWeights,m as SizeVariants,c as TypographyOverview,b as __namedExportsOrder,k as default};
