/**
 * ============================================================================
 * AZ DIGITAL SERVICES — CENTRALIZED CONTACT CONFIGURATION
 * ============================================================================
 * Single source of truth for all contact links, phone numbers, and emails.
 *
 * Used across:
 * - Hero (Primary CTAs)
 * - Navbar
 * - Contact Section & Cards
 * - Final CTA
 * - Floating WhatsApp Button
 * - SendFiles CTA & Project/Service CTAs
 *
 * TO CONFIGURE FOR PRODUCTION:
 * Replace WHATSAPP_PHONE_NUMBER and GMAIL_ADDRESS below with your live details.
 * ============================================================================
 */

export const CONTACT_CONFIG = {
  // WhatsApp Configuration
  whatsapp: {
    // ⚠️ REPLACE WITH REAL WHATSAPP NUMBER (including country code, e.g. "+213555123456")
    phone: "+213",
    display: "+213 (0) XX XX XX XX",
    message: "Hello AZ Digital Services, I would like to discuss a project/service.",
    /**
     * Generates a direct WhatsApp link with prefilled message
     */
    getUrl(customMessage?: string): string {
      const cleanPhone = this.phone.replace(/[^0-9]/g, "");
      const msg = encodeURIComponent(customMessage ?? this.message);
      return `https://wa.me/${cleanPhone}?text=${msg}`;
    },
  },

  // Gmail / Email Configuration
  email: {
    // ⚠️ REPLACE WITH REAL GMAIL OR WORK EMAIL (e.g. "contact@azdigitalservices.com")
    address: "5g.azservices1@gmail.com",
    subject: "Project Inquiry — AZ Digital Services",
    body: "Hello AZ Digital Services,\n\nI have a project / files I would like to discuss with you.\n\nProject Type:\nRequirements:\nTimeline:\n\nThank you!",
    /**
     * Generates a mailto link with prefilled subject and body
     */
    getUrl(customSubject?: string, customBody?: string): string {
      const subj = encodeURIComponent(customSubject ?? this.subject);
      const bdy = encodeURIComponent(customBody ?? this.body);
      return `mailto:${this.address}?subject=${subj}&body=${bdy}`;
    },
  },
} as const;

// Backward-compatible named exports & direct convenience constants
export const WHATSAPP_PHONE_PLACEHOLDER = CONTACT_CONFIG.whatsapp.phone;
export const WHATSAPP_DISPLAY_PLACEHOLDER = CONTACT_CONFIG.whatsapp.display;
export const WHATSAPP_MESSAGE = CONTACT_CONFIG.whatsapp.message;
export const WHATSAPP_LINK = CONTACT_CONFIG.whatsapp.getUrl();

export const GMAIL_EMAIL_PLACEHOLDER = CONTACT_CONFIG.email.address;
export const GMAIL_SUBJECT = CONTACT_CONFIG.email.subject;
export const GMAIL_BODY = CONTACT_CONFIG.email.body;
export const GMAIL_LINK = CONTACT_CONFIG.email.getUrl();

export const whatsapp = CONTACT_CONFIG.whatsapp;
export const email = CONTACT_CONFIG.email;
export const whatsappMessage = CONTACT_CONFIG.whatsapp.message;
export const contactConfig = CONTACT_CONFIG;

// Default export for easy import
export default CONTACT_CONFIG;

