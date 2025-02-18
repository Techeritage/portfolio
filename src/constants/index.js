const Images = {
  proconnect: "https://techeritage.github.io/portfolio/proconnect.PNG",
  lbk: "https://techeritage.github.io/portfolio/myhomeetal.PNG",
  store45: "https://techeritage.github.io/portfolio/store45.PNG",
  champion: "https://techeritage.github.io/portfolio/champioo.PNG",
  oge: "https://techeritage.github.io/portfolio/ogechi.PNG",
};

export const ProjectsList = [
  {
    projectTitle: "Proconnect",
    projectDescription:
      "Proconnect is a recruitment agency platform that connects job seekers with employers. It provides a seamless experience for users to submit CVs, browse job listings, and stay updated with industry insights through a blog. An admin dashboard enables efficient management of job postings, blog content, and other platform features",
    projectImage: Images.proconnect, // You can replace with your actual image URL
    projectLiveLink: "https://proconnect-eight.vercel.app/", // Replace with the actual live URL
    projectRepoLink: "https://github.com/Techeritage/proconnect", // Replace with the actual GitHub repo link
    projectStacks: ["Next.js", "Tailwind CSS", "Mongo DB", "Shadcn"],
  },
  {
    projectTitle: "MyHomeEtal",
    projectDescription:
      "E-commerce website with features like wallet, checkout, referral program, and more.",
    projectImage: Images.lbk, // You can replace with your actual image URL
    projectLiveLink: "https://myhomeetal.com", // Replace with the actual live URL
    projectRepoLink:
      "https://github.com/Techeritage/myhomeetal-customer-website", // Replace with the actual GitHub repo link
    projectStacks: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    projectTitle: "Store45",
    projectDescription:
      "An e-commerce website with basic features such as checkout and an admin dashboard, handling both the front-end and back-end.",
    projectImage: Images.store45, // Replace with actual image
    projectLiveLink: "https://www.store45co.com/", // Replace with the actual live URL
    projectRepoLink: "https://github.com/OneLife-web/Store24", // Replace with the actual GitHub repo link
    projectStacks: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    projectTitle: "Champions Logistics",
    projectDescription:
      "A business website with features like 'Request a Quote' and an admin dashboard.",
    projectImage: Images.champion, // Replace with actual image
    projectLiveLink: "https://championlogistics.org.ng/", // Replace with the actual live URL
    projectRepoLink: "https://github.com/Techeritage/champion-logistics", // Replace with the actual GitHub repo link
    projectStacks: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Firebase (Storage)",
    ],
  },
  {
    projectTitle: "Oge Professional Services",
    projectDescription:
      "A business website optimized for SEO, with clean and professional design.",
    projectImage: Images.oge, // Replace with actual image
    projectLiveLink: "https://www.ogeprofessionals.com/", // Replace with the actual live URL
    projectRepoLink: "https://github.com/Techeritage/oge-services", // Replace with the actual GitHub repo link
    projectStacks: ["Next.js (for SEO)", "JavaScript", "Tailwind CSS"],
  },
  /* {
    projectTitle: "TechFam",
    projectDescription:
      "A website for an NGO organization, focusing on a responsive and accessible layout.",
    projectImage: "path_to_image/techfam.png", // Replace with actual image
    projectLiveLink: "https://techfam.org", // Replace with the actual live URL
    projectRepoLink: "https://github.com/Techeritage/techfam", // Replace with the actual GitHub repo link
    projectStacks: ["React.js", "JavaScript"],
  }, */
];

export const navLinks = [
  { title: "Resume", link: "/resume" },
  { title: "Project", link: "/projects" },
  { title: "Contact", link: "/contact" },
];
