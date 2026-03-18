import workbigbus from "@/assets/big-bus-tours.jpg";
import workservices from "@/assets/services-post.jpg";
import worksatte from "@/assets/satte-invite-2.jpg";
import workvatican from "@/assets/vatican-museum.jpg";
import workeiffel from "@/assets/eiffel-tower.jpg";
import workcolosseum from "@/assets/colosseum.jpg";
import workonground from "@/assets/on-ground-service.jpg";
import workartic from "@/assets/the-arctic-route.jpg";
import workcitybreaks from "@/assets/city-breaks.jpg";
import workeastern from "@/assets/eastern-europe-van-tours.jpg";
import workadhoc from "@/assets/ad-hoc-groups.jpg";
import workhappytravelers from "@/assets/happy-travelers.jpg";
import workpilatus from "@/assets/pilatus.jpg";
import workgtdmcpost from "@/assets/gtdmc-post-1.jpg";
import workotm from "@/assets/otm-invite.jpg";
import workjungfrau from "@/assets/jungfraujoch.jpg";
import worktitlis from "@/assets/titlis-post.jpg";
import workkakslautten from "@/assets/kakslauttanen.jpg";
import workminivans from "@/assets/mini-vans.jpg";
import workbateaux from "@/assets/bateaux-parisiens.jpg";
import workrovaniemi01 from "@/assets/rovaniemi.jpg";
import workrovaniemi02 from "@/assets/rovaniemi-2.jpg";
import workttf from "@/assets/ttf-invite.jpg";
import worksmooth from "@/assets/smooth-transfers.jpg";
import workttj from "@/assets/ttj-invite-1.jpg";
import workvclass from "@/assets/v-class.jpg";
import workvito from "@/assets/vito.jpg";
import c1services from "@/assets/handcrafted-services.jpg";
import c101 from "@/assets/city-breaks copy.jpg";
import c102 from "@/assets/multi-country-tours.jpg";
import c103 from "@/assets/fit-customization.jpg";
import c104 from "@/assets/private-disposal-vehicles.jpg";
import c105 from "@/assets/hotels-and-stays.jpg";
import c106 from "@/assets/mountain-excursions.jpg";
import c107 from "@/assets/ad-hoc-groups.jpg";
import c108 from "@/assets/sightseeings.jpg";
import c109 from "@/assets/rail-passes.jpg";
import c110 from "@/assets/contact-page.jpg";
import b1c from "@/assets/b1cover.jpg";
import b01 from "@/assets/b01.jpg";
import b02 from "@/assets/b02.jpg";
import b03 from "@/assets/b03.jpg";
import b04 from "@/assets/b04.jpg";
import b05 from "@/assets/b05.jpg";
import b06 from "@/assets/b06.jpg";
import b07 from "@/assets/b07.jpg";
import b08 from "@/assets/b08.jpg";
import b09 from "@/assets/b09.jpg";
import b10 from "@/assets/b10.jpg";
import b11 from "@/assets/b11.jpg";
import b12 from "@/assets/b12.jpg";
import b13 from "@/assets/b13.jpg";
import b14 from "@/assets/b14.jpg";
import b15 from "@/assets/b15.jpg";
import b16 from "@/assets/b16.jpg";
import b17 from "@/assets/b17.jpg";
import b18 from "@/assets/b18.jpg";
import b19 from "@/assets/b19.jpg";
import b20 from "@/assets/b20.jpg";
import b21 from "@/assets/b21.jpg";
import b22 from "@/assets/b22.jpg";
import b23 from "@/assets/b23.jpg";
import b24 from "@/assets/b24.jpg";
import b25 from "@/assets/b25.jpg";
import b26 from "@/assets/b26.jpg";
import b27 from "@/assets/b27.jpg";
import b28 from "@/assets/b28.jpg";
import b29 from "@/assets/b29.jpg";
import b30 from "@/assets/b30.jpg";
import b31 from "@/assets/b31.jpg";
import b32 from "@/assets/b32.jpg";
import b33 from "@/assets/b33.jpg";
import b34 from "@/assets/b34.jpg";
import b35 from "@/assets/b35.jpg";
import b36 from "@/assets/b36.jpg";
import b37 from "@/assets/b37.jpg";
import b38 from "@/assets/b38.jpg";
import b39 from "@/assets/b39.jpg";
import b40 from "@/assets/b40.jpg";
import b41 from "@/assets/b41.jpg";
import b42 from "@/assets/b42.jpg";
import b43 from "@/assets/b43.jpg";
import b44 from "@/assets/b44.jpg";
import b45 from "@/assets/b45.jpg";
import b46 from "@/assets/b46.jpg";
import b47 from "@/assets/b47.jpg";
import b48 from "@/assets/b48.jpg";
import b49 from "@/assets/b49.jpg";
import b50 from "@/assets/b50.jpg";
import b51 from "@/assets/b51.jpg";


export interface WorkItem {
  id: string;
  title: string;
  description: string;
  /** Primary image (used as thumbnail & first slide) */
  image: string;
  /** Additional images for carousel (optional) */
  images?: string[];
  /** PDF URL to embed/view (optional) */
  pdfUrl?: string;
  category: string;
  /** External link — shows a "View Project" button (optional) */
  link?: string;
}

// ✅ Easy to maintain — just add/remove items from this array
export const works: WorkItem[] = [
  {
    id: "1",
    title: "Hand-crafted Services",
    description: "Bold abstract geometric compositions exploring neon green and black contrasts for a tech startup campaign.",
    image: c1services,
    images: [c101, c102, c103, c104, c105, c106, c107, c108, c109, c110],
    category: "Carousel Design",
  },
  {
    id: "2",
    title: "Big Bus Tours",
    description: "Complete brand identity including business cards, letterheads, and brand guidelines for a premium real estate firm.",
    image: workbigbus,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "3",
    title: "The Artic",
    description: "Product packaging and photography direction for a high-end skincare line. Dark, moody, editorial aesthetic.",
    image: workartic,
    category: "Social Media Creatives",
  },
  {
    id: "4",
    title: "Bateaux",
    description: "Digital art series exploring fluid color gradients and organic forms for a music festival visual identity.",
    image: workbateaux,
    category: "Social Media Creatives",
  },
  {
    id: "5",
    title: "On Ground Services",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: workonground,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "6",
    title: "Satte Invite",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: worksatte,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "7",
    title: "Colosseum",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: workcolosseum,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "8",
    title: "Vatican Mesuem",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: workvatican,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "9",
    title: "Services Post",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: workservices,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "10",
    title: "Satte Invite",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: worksatte,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "11",
    title: "Explore Rovaniemi",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: workrovaniemi01,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "12",
    title: "Rovaniemi 02",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: workrovaniemi02,
    category: "Social Media Creatives",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "13",
    title: "Kakslautten Artic Resort",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workkakslautten,
    category: "Social Media Creatives",
  },
  {
    id: "14",
    title: "Jungfrau",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workjungfrau,
    category: "Social Media Creatives",
  },
  {
    id: "15",
    title: "Mt. Titlis",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: worktitlis,
    category: "Social Media Creatives",
  },
  {
    id: "16",
    title: "Happy Travelers",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workhappytravelers,
    category: "Social Media Creatives",
  },
   {
    id: "17",
    title: "Pilatus",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workpilatus,
    category: "Social Media Creatives",
  },
   {
    id: "18",
    title: "Eastern Europe",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workeastern,
    category: "Social Media Creatives",
  },
   {
    id: "19",
    title: "MiniVans",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workminivans,
    category: "Social Media Creatives",
  },
   {
    id: "20",
    title: "TTJ invite",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workttj,
    category: "Social Media Creatives",
  },
   {
    id: "21",
    title: "Smooth Transfers",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: worksmooth,
    category: "Social Media Creatives",
  },
   {
    id: "22",
    title: "TTF Invite",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workttf,
    category: "Social Media Creatives",
  },
   {
    id: "23",
    title: "Mercedes V-Class",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workvclass,
    category: "Social Media Creatives",
  },
   {
    id: "24",
    title: "Ad-Hoc Groups",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workadhoc,
    category: "Social Media Creatives",
  },
   {
    id: "25",
    title: "Eiffel Tower",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workeiffel,
    category: "Social Media Creatives",
  },
    {
    id: "26",
    title: "Otm Invite",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: workotm,
    category: "Social Media Creatives",
  },
   {
    id: "27",
    title: "Trval Magazine 2k26",
    description: "Bold abstract geometric compositions exploring neon green and black contrasts for a tech startup campaign.",
    image: b1c,
    images: [b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51],
    category: "Magazine & Brochure Design",
  },
];
