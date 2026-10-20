export default {
  title: "Templepatrick Presbyterian Church",
  year: new Date().getFullYear(),
  description: "Website Description",
  schemaType: "LocalBusiness",
  url: process.env.CF_PAGES_BRANCH === 'main'
    ? "https://PROD URL"
    : process.env.CF_PAGES_URL || "http://localhost:8080",
  logo: "/assets/svgs/logo-full.svg",
  logoIcon: "/assets/svgs/logo-icon.svg",
  image: "SEO Preview Image Card (1200 x 675 pixels)",
  phone: "+44 000 000 000",
  email: "info@templepatrickpci.org",
  address: {
    street: "750 Antrim Road",
    locality: "Templepatrick",
    region: "Ballyclare",
    postcode: "BT39 0AP",
    country: "GB"
  },
  officeEmail: "office@templepatrickpci.org",
  social: {
    facebook: "https://www.facebook.com/p/Templepatrick-Presbyterian-Church-100075729167011/",
    instagram: "https://www.instagram.com/templepatrickpresbyterian/",
    youtube: "https://www.youtube.com/@TemplepatrickPCI"
  }
};