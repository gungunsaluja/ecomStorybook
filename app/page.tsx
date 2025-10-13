"use client";

import { useState } from "react";
import { HeadingBar, Button, PageHeader, ProductCard, FeatureCard, Footer, ContactForm } from "../src";

export default function Home() {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleButtonClick = () => {
    setButtonClicks(prev => prev + 1);
    console.log("Button clicked! Total clicks:", buttonClicks + 1);
  };

  const handleContactFormSubmit = (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    console.log("Contact form submitted:", formData);
    alert(`Thank you ${formData.name}! Your message has been submitted.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* PageHeader (visible in dev) */}
      <PageHeader
        title="Shop List"
        breadcrumbs={[
          { label: 'Home', href: '/', isActive: false },
          { label: 'Pages', href: '/pages', isActive: false },
          { label: 'Shop List', isActive: true },
        ]}
        showBorder={true}
      />

      {/* HeadingBar with Actions */}
      <HeadingBar
        item1={{
          text: "mhhassanul@gmail.com",
          iconUrl: "/assets/icons/uil_envelope-alt.svg",
          onClick: () => console.log("Email clicked - Opening email client")
        }}
        item2={{
          text: "(12345)67890",
          iconUrl: "/assets/icons/bx_bx-phone-call.svg",
          onClick: () => console.log("Phone clicked - Opening dialer")
        }}
        item3={{
          text: selectedLanguage,
          iconUrl: "/assets/icons/akar-icons_chevron-down.svg",
          iconPosition: "after",
          dropdown: {
            isOpen: languageDropdownOpen,
            onToggle: () => setLanguageDropdownOpen(!languageDropdownOpen),
            options: [
              {
                text: "English",
                value: "en",
                onClick: () => {
                  setSelectedLanguage("English");
                  setLanguageDropdownOpen(false);
                  console.log("Language changed to English");
                }
              },
              {
                text: "Hindi",
                value: "hi",
                onClick: () => {
                  setSelectedLanguage("Hindi");
                  setLanguageDropdownOpen(false);
                  console.log("Language changed to Hindi");
                }
              }
            ].filter(option => option.text !== selectedLanguage)
          }
        }}
        item4={{
          text: selectedCurrency,
          iconUrl: "/assets/icons/akar-icons_chevron-down.svg",
          iconPosition: "after",
          dropdown: {
            isOpen: currencyDropdownOpen,
            onToggle: () => setCurrencyDropdownOpen(!currencyDropdownOpen),
            options: [
              {
                text: "USD",
                value: "usd",
                onClick: () => {
                  setSelectedCurrency("USD");
                  setCurrencyDropdownOpen(false);
                  console.log("Currency changed to USD");
                }
              },
              {
                text: "INR",
                value: "inr",
                onClick: () => {
                  setSelectedCurrency("INR");
                  setCurrencyDropdownOpen(false);
                  console.log("Currency changed to INR");
                }
              }
            ].filter(option => option.text !== selectedCurrency)
          }
        }}
        item5={{
          text: "Login",
          iconPosition: "after",
          iconUrl: "/assets/icons/carbon_user.svg",
          onClick: () => alert("Login clicked! Please enter your credentials.")
        }}
        item6={{
          text: "Wishlist",
          iconPosition: "after",
          iconUrl: "/assets/icons/uil_heart-alt.svg",
          onClick: () => alert("Wishlist clicked! View your saved items.")
        }}
        item7={{
          text: "",
          iconUrl: "/assets/icons/fluent_cart-24-regular.svg",
          onClick: () => alert("Cart clicked! View your shopping cart.")
        }}
      />

      {/* Main Content with Design System Components */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Design System Components in Action
          </h1>
          
          {/* Button Examples with Actions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Button Actions</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button 
                variant="primary" 
                onClick={handleButtonClick}
              >
                Click Me ({buttonClicks} times)
              </Button>
              <Button 
                variant="primary" 
                onClick={() => console.log("Secondary button clicked")}
              >
                Secondary Action
              </Button>
              <Button 
                variant="primary" 
                onClick={() => alert("Success action triggered!")}
              >
                Success Action
              </Button>
              <Button 
                variant="primary" 
                onClick={() => console.log("Danger action - Delete item")}
              >
                Delete Item
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Button clicks: {buttonClicks} | Check console for action logs
            </p>
          </div>

          {/* Contact Form Example */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
            <ContactForm 
              onSubmit={handleContactFormSubmit}
              className="max-w-2xl mx-auto"
            />
          </div>

          {/* Cards Showcase */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Cards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                title="24/7 Support"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
              />
              <ProductCard
                title="Wood Made Bags"
                price="$32.00"
                rating={3.5}
                imageUrl="https://picsum.photos/600/600?random=4"
                // imageUrl can be passed to replace the gray placeholder box
              />
            </div>
          </div>
          

          {/* Action Summary */}
          {/* <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Available Actions</h2>
            <ul className="space-y-2 text-blue-800">
              <li>• <strong>HeadingBar:</strong> Email, Phone, Language, Currency, Login, Wishlist, Cart</li>
              <li>• <strong>Buttons:</strong> Click tracking, console logging, alerts</li>
              <li>• <strong>Inputs:</strong> Change tracking, value updates</li>
              <li>• <strong>Dropdowns:</strong> Language switching, Currency switching</li>
            </ul>
            <p className="mt-4 text-sm text-blue-700">
              Open browser console to see all action logs in real-time!
            </p>
          </div> */}
        </div>
      </div>
      {/* Footer (visible in dev) */}
      <div className="mt-12">
        <Footer 
          brandName="Hekto"
          newsletterPlaceholder="Enter Email Address"
          newsletterButtonText="Sign Up"
          contactHeading="Contact Info"
          contactAddress="17 Princess Road, London, Greater London NW1 8JR, UK"
          copyright="©Webecy - All Rights Reserved"
          onNewsletterSubmit={(email) => console.log('Newsletter signup:', email)}
          onLinkClick={(linkText) => console.log('Link clicked:', linkText)}
          onSocialClick={(platform) => console.log('Social clicked:', platform)}
        />
      </div>
    </div>
  );
}
