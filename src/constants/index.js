const Images = {
  lbk: "http://localhost:5173/portfolio/myhomeetal.PNG",
  store45: "http://localhost:5173/portfolio/store45.PNG",
  champion: "http://localhost:5173/portfolio/champioo.PNG",
};

export const ProjectsList = [
  {
    projectTitle: "MyHomeEtal",
    projectDescription:
      "E-commerce website with features like wallet, checkout, referral program, and more.",
    projectImage: Images.lbk, // You can replace with your actual image URL
    projectLiveLink: "https://myhomeetal.com", // Replace with the actual live URL
    projectRepoLink: "https://github.com/yourusername/myhomeetal", // Replace with the actual GitHub repo link
    projectStacks: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    projectTitle: "Store45",
    projectDescription:
      "An e-commerce website with basic features such as checkout and an admin dashboard, handling both the front-end and back-end.",
    projectImage: Images.store45, // Replace with actual image
    projectLiveLink: "https://store45.com", // Replace with the actual live URL
    projectRepoLink: "https://github.com/yourusername/store45", // Replace with the actual GitHub repo link
    projectStacks: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },
  {
    projectTitle: "Champions Logistics",
    projectDescription:
      "A business website with features like 'Request a Quote' and an admin dashboard.",
    projectImage: Images.champion, // Replace with actual image
    projectLiveLink: "https://championslogistics.com", // Replace with the actual live URL
    projectRepoLink: "https://github.com/yourusername/championslogistics", // Replace with the actual GitHub repo link
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
    projectImage: "path_to_image/oge-professional-services.png", // Replace with actual image
    projectLiveLink: "https://ogeprofessionalservices.com", // Replace with the actual live URL
    projectRepoLink:
      "https://github.com/yourusername/oge-professional-services", // Replace with the actual GitHub repo link
    projectStacks: ["Next.js (for SEO)", "JavaScript", "Tailwind CSS"],
  },
  {
    projectTitle: "TechFam",
    projectDescription:
      "A website for an NGO organization, focusing on a responsive and accessible layout.",
    projectImage: "path_to_image/techfam.png", // Replace with actual image
    projectLiveLink: "https://techfam.org", // Replace with the actual live URL
    projectRepoLink: "https://github.com/yourusername/techfam", // Replace with the actual GitHub repo link
    projectStacks: ["React.js", "JavaScript"],
  },
];
