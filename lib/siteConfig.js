// lib/siteConfig.js
// Single source of truth for site-wide facts. Every component/page should
// import from here instead of hardcoding strings — this is what keeps the
// footer, contact chapter, JSON-LD, and metadata in sync automatically.

export const siteConfig = {
  name: "Website, Mobile App & AI Software Development | SpeckPro Digital",
  shortName: "SpeckPro",
  url: "https://speckpro.com", // TODO: replace with the real production domain
  description:
    "SpeckPro is a global IT solutions company building mobile apps, websites, and IoT-powered platforms with agile precision.",
  themeColor: "#070B0F",


  contact: {
    email: "info@speckpro.com",
    emailUk: "info@speckpro.com",
    phonePk: "0317-5279266",
    phonePkTel: "03175279266",
    phoneUk: "+44 7405 183394",
    whatsappNumber: "447405183394",
    whatsappMessage: "Hi SpeckPro, I'd like to discuss a project.",
  },

  offices: {
    pakistan: {
      label: "Pakistan Office",
      address:
        " 14, Street 5 BlocK D PAF, Tarnol Islamabad Fazaia, Block C Fazaia Housing Scheme, Islamabad, 44000",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Office%2014%2C%20Street%205%20BlocK%20D%20PAF%2C%20Tarnol%20islamabad%20Fazaia%2C%20Fazaia%20Housing%20Scheme%2C%20Islamabad%2C%2044000&t=m&z=12&output=embed&iwloc=near",
    },
    uk: {
      label: "UK Office",
      address: "75 Ryle St, Bloxwich, Walsall WS3 3AR",
    },
  },

  social: {
    twitter: "https://twitter.com/speckprodigital",
    facebook: "https://www.facebook.com/SpeckProDigital/",
    instagram: "https://www.instagram.com/speckprodigital/",
    linkedin: "https://www.linkedin.com/company/speckprodigital/",
    youtube:"https://www.youtube.com/@speckprodigital",
  },
};

export const whatsappHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage
)}`;
