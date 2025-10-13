import React from 'react';

export interface ContactFormProps {
  /** Custom className */
  className?: string;
  /** Form submit handler */
  onSubmit?: (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => void;
  /** Name field placeholder */
  namePlaceholder?: string;
  /** Email field placeholder */
  emailPlaceholder?: string;
  /** Subject field placeholder */
  subjectPlaceholder?: string;
  /** Message field placeholder */
  messagePlaceholder?: string;
  /** Submit button text */
  submitButtonText?: string;
}

/**
 * Contact form component with four input fields
 * Matches the design structure with proper spacing and styling
 */
export const ContactForm = ({
  className = '',
  onSubmit,
  namePlaceholder = 'Your Name*',
  emailPlaceholder = 'Your E-mail',
  subjectPlaceholder = 'Subject*',
  messagePlaceholder = 'Type Your Message*',
  submitButtonText = 'Send Message'
}: ContactFormProps) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const storedViaClickRef = React.useRef(false);

  const storeRecord = React.useCallback(() => {
    try {
      const key = 'contactFormSubmissions';
      const prev = JSON.parse(localStorage.getItem(key) || '[]');
      const next = Array.isArray(prev) ? prev : [];
      next.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(next));
    } catch (_) {
      // ignore storage errors (e.g., SSR or disabled storage)
    }
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ensure we store even when submitted via Enter key (no click)
    if (!storedViaClickRef.current) {
      storeRecord();
    }
    storedViaClickRef.current = false;
    if (onSubmit) onSubmit(formData);
    // Clear the form after successful submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={`w-full bg-gray-100 p-8 rounded-lg ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Top Row - Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={namePlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-white text-[#8A8FB9] placeholder:text-[#8A8FB9] focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition-colors"
              required
            />
          </div>
          
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={emailPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-white text-[#8A8FB9] placeholder:text-[#8A8FB9] focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition-colors"
            />
          </div>
        </div>

        {/* Subject Field - Full Width */}
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={subjectPlaceholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-white text-[#8A8FB9] placeholder:text-[#8A8FB9] focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition-colors"
            required
          />
        </div>

        {/* Message Field - Textarea */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={messagePlaceholder}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm bg-white text-[#8A8FB9] placeholder:text-[#8A8FB9] focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition-colors resize-vertical"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-pink-500 text-white rounded-md text-sm font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-100 transition-colors"
            onClick={() => {
              storedViaClickRef.current = true;
              storeRecord();
            }}
          >
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

