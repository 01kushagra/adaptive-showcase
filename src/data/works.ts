import alpineCoaster from "@/assets/alpine-coaster.jpg";
import bateauxParisiens from "@/assets/bateaux-parisiens.jpg";
import bigBusTours from "@/assets/big-bus-tours.jpg";
import cityBreaksPost from "@/assets/city-breaks-post.jpg";
import colosseum from "@/assets/colosseum.jpg";
import easternEuropeVanTours from "@/assets/eastern-europe-van-tours.jpg";
import eiffelTower from "@/assets/eiffel-tower.jpg";
import elinor108Post from "@/assets/elinor-108-post-01-01.jpg";
import gtdmcPost from "@/assets/gtdmc-post.jpg";
import gtdmcPost2 from "@/assets/gtdmc-post2.jpg";
import happyTravellers from "@/assets/happy-travellers.jpg";
import hiring4 from "@/assets/hiring-4.jpg";
import hiringFlyer from "@/assets/hiring-flyer.jpg";
import iitmInvite from "@/assets/iitm-invite.jpg";
import jungfraujoch from "@/assets/jungfraujoch.jpg";
import kakslauttanen from "@/assets/kakslauttanen.jpg";
import lofotenIsland from "@/assets/lofoten-island.jpg";
import miniVans from "@/assets/mini-vans.jpg";
import onGroundService from "@/assets/on-ground-service.jpg";
import otmInvite from "@/assets/otm-invite.jpg";
import pilatus from "@/assets/pilatus.jpg";
import post01 from "@/assets/post-01.jpg";
import post02 from "@/assets/post-02.jpg";
import prague from "@/assets/prague.jpg";
import railEurope from "@/assets/rail-europe@2x.jpg";
import rovaniemi1 from "@/assets/rovaniemi-1.jpg";
import rovaniemi from "@/assets/rovaniemi.jpg";
import satteInvite from "@/assets/satte-invite.jpg";
import satte from "@/assets/satte.jpg";
import services2 from "@/assets/services-2.jpg";
import servicesPost from "@/assets/services-post.jpg";
import smoothTransfers from "@/assets/smooth-transfers.jpg";
import theArcticRoute from "@/assets/the-arctic-route.jpg";
import titlisPost from "@/assets/titlis-post.jpg";
import ttfInvite from "@/assets/ttf-invite.jpg";
import ttjInvite1 from "@/assets/ttj-invite-1.jpg";
import ttjInvite from "@/assets/ttj-invite.jpg";
import vaticanMuseum from "@/assets/vatican-museum.jpg";
import visa from "@/assets/visa.jpg";
import vito from "@/assets/vito.jpg";
import womenSpecialVanTours from "@/assets/women-special-van-tours.jpg";

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

// ✅ Easy to maintain — just add/remove items from this array
export const works: WorkItem[] = [
  {
    id: "1",
    title: "Geometric Poster Series",
    description: "Bold abstract geometric compositions exploring neon green and black contrasts for a tech startup campaign.",
    image: alpineCoaster,
    category: "Poster Design",
  },
  {
    id: "2",
    title: "Bank Estates Branding",
    description: "Complete brand identity including business cards, letterheads, and brand guidelines for a premium real estate firm.",
    image: bateauxParisiens,
    category: "Branding",
  },
  {
    id: "3",
    title: "Luxury Skincare Packaging",
    description: "Product packaging and photography direction for a high-end skincare line. Dark, moody, editorial aesthetic.",
    image: bigBusTours,
    category: "Packaging",
  },
  {
    id: "4",
    title: "Chromatic Waves",
    description: "Digital art series exploring fluid color gradients and organic forms for a music festival visual identity.",
    image: cityBreaksPost,
    category: "Digital Art",
  },
  {
    id: "5",
    title: "Analytics Dashboard UI",
    description: "Full dashboard interface design for a SaaS analytics platform. Dark mode first, data-rich, clean hierarchy.",
    image: colosseum,
    category: "UI Design",
  },
  {
    id: "6",
    title: "3D Abstract Collection",
    description: "Playful 3D renders for a creative agency's social media presence. Vibrant, bold, and eye-catching.",
    image: easternEuropeVanTours,
    category: "3D Art",
  },
];
