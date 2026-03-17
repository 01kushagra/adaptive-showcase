import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

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
    title: "Geometric Poster Series",
    description: "Bold abstract geometric compositions exploring neon green and black contrasts for a tech startup campaign.",
    image: work1,
    category: "Poster Design",
  },
  {
    id: "2",
    title: "Bank Estates Branding",
    description: "Complete brand identity including business cards, letterheads, and brand guidelines for a premium real estate firm.",
    image: work2,
    category: "Branding",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "3",
    title: "Luxury Skincare Packaging",
    description: "Product packaging and photography direction for a high-end skincare line. Dark, moody, editorial aesthetic.",
    image: work3,
    category: "Packaging",
  },
  {
    id: "4",
    title: "Chromatic Waves",
    description: "Digital art series exploring fluid color gradients and organic forms for a music festival visual identity.",
    image: work4,
    category: "Digital Art",
  },
  {
    id: "5",
    title: "Analytics Dashboard UI",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: work5,
    category: "UI Design",
    link: "https://www.behance.net/kushagraarora3",
  },
  {
    id: "6",
    title: "3D Abstract Collection",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: work6,
    category: "3D Art",
  },
];
