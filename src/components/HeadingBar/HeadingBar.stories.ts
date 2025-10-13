import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';
import HeadingBar from './HeadingBar';

const meta = {
  title: 'Design System/HeadingBar',
  component: HeadingBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Flexible heading bar component with customizable items, icons, and click handlers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the heading bar',
    },
    textColor: {
      control: 'color',
      description: 'Text color of the heading bar',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof HeadingBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default HeadingBar
export const Default: Story = {
  render: (args) => {
    const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState("English");
    const [currencyDropdownOpen, setCurrencyDropdownOpen] = React.useState(false);
    const [selectedCurrency, setSelectedCurrency] = React.useState("USD");

    // Function to handle dropdown toggle with auto-close
    const handleLanguageToggle = () => {
      setLanguageDropdownOpen(!languageDropdownOpen);
      // Close currency dropdown if it's open
      if (currencyDropdownOpen) {
        setCurrencyDropdownOpen(false);
      }
    };

    const handleCurrencyToggle = () => {
      setCurrencyDropdownOpen(!currencyDropdownOpen);
      // Close language dropdown if it's open
      if (languageDropdownOpen) {
        setLanguageDropdownOpen(false);
      }
    };

    return React.createElement(HeadingBar, {
      ...args,
      item1: {
        text: "mhhassanul@gmail.com",
        iconUrl: "stories/assets/uil_envelope-alt.svg",
        onClick: () => console.log("Email clicked")
      },
      item2: {
        text: "(12345)67890",
        iconUrl: "stories/assets/bx_bx-phone-call.svg"
      },
      item3: {
        text: selectedLanguage,
        iconUrl: "stories/assets/akar-icons_chevron-down.svg",
        iconPosition: "after",
        dropdown: {
          isOpen: languageDropdownOpen,
          onToggle: handleLanguageToggle,
          options: [
            {
              text: "English",
              value: "en",
              onClick: () => {
                setSelectedLanguage("English");
                setLanguageDropdownOpen(false);
                console.log("English selected");
              }
            },
            {
              text: "Hindi",
              value: "hi",
              onClick: () => {
                setSelectedLanguage("Hindi");
                setLanguageDropdownOpen(false);
                console.log("Hindi selected");
              }
            }
          ].filter(option => option.text !== selectedLanguage)
        }
      },
      item4: {
        text: selectedCurrency,
        iconUrl: "stories/assets/akar-icons_chevron-down.svg",
        iconPosition: "after",
        dropdown: {
          isOpen: currencyDropdownOpen,
          onToggle: handleCurrencyToggle,
          options: [
            {
              text: "USD",
              value: "usd",
              onClick: () => {
                setSelectedCurrency("USD");
                setCurrencyDropdownOpen(false);
                console.log("USD selected");
              }
            },
            {
              text: "INR",
              value: "inr",
              onClick: () => {
                setSelectedCurrency("INR");
                setCurrencyDropdownOpen(false);
                console.log("INR selected");
              }
            }
          ].filter(option => option.text !== selectedCurrency)
        }
      },
      item5: {
        text: "Login",
        iconPosition: "after",
        iconUrl: "stories/assets/carbon_user.svg",
        onClick: () => alert("Login clicked! Please enter your credentials.")
      },
      item6: {
        text: "Wishlist",
        iconPosition: "after",
        iconUrl: "stories/assets/uil_heart-alt.svg",
        onClick: () => alert("Wishlist clicked! View your saved items.")
      },
      item7: {
        text: "",
        iconUrl: "stories/assets/fluent_cart-24-regular.svg",
        onClick: () => alert("Cart clicked! View your shopping cart.")
      }
    });
    
  },
  args: {
    backgroundColor: '#8B5CF6',
    textColor: '#FFFFFF',
  },
};

// Minimal HeadingBar
// export const Minimal: Story = {
//   args: {
//     item1: {
//       text: "Home",
//       onClick: () => console.log("Home clicked")
//     },
//     item2: {
//       text: "About",
//       onClick: () => console.log("About clicked")
//     },
//     item3: {
//       text: "Contact",
//       onClick: () => console.log("Contact clicked")
//     }
//   },
// };

// With Icons Only

// Custom Colors


// Interactive Example
// export const Interactive: Story = {
//   render: () => {
//     const [selectedItem, setSelectedItem] = React.useState<string>("");
    
//     const handleItemClick = (itemName: string) => {
//       setSelectedItem(itemName);
//       console.log(`${itemName} clicked`);
//     };

//     return React.createElement('div', {
//       style: { display: 'flex', flexDirection: 'column', gap: '16px' }
//     }, [
//       React.createElement('p', { key: 'status' }, `Last clicked: ${selectedItem || 'None'}`),
//       React.createElement(HeadingBar, {
//         key: 'headingbar',
//         item1: {
//           text: "Dashboard",
//           iconUrl: "/icons/dashboard.svg",
//           onClick: () => handleItemClick("Dashboard")
//         },
//         item2: {
//           text: "Products",
//           iconUrl: "/icons/products.svg",
//           onClick: () => handleItemClick("Products")
//         },
//         item3: {
//           text: "Orders",
//           iconUrl: "/icons/orders.svg",
//           onClick: () => handleItemClick("Orders")
//         },
//         item4: {
//           text: "Settings",
//           iconUrl: "/icons/settings.svg",
//           onClick: () => handleItemClick("Settings")
//         }
//       })
//     ]);
//   },
//   parameters: {
//     docs: {
//       description: {
//         story: 'Interactive heading bar that tracks which item was last clicked.',
//       },
//     },
//   },
// };
