export type ProjectCard = {
  slug: string;
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
};

export const projects: ProjectCard[] = [
  {
    slug: "/projects/atlassian",
    title: "Atlassian Admin Analytics",
    subtitle: "Standardizing chart copy and docs across admin analytics.",
    thumbnailUrl: "/images/thumbnails/atlassian.jpg",
    thumbnailAlt: "Screens from Atlassian Admin Analytics case study",
  },
  {
    slug: "/projects/self-driving",
    title: "Self-Driving in San Francisco",
    subtitle: "Exploring robotaxis via interactive storytelling.",
    thumbnailUrl: "/images/thumbnails/self-driving.jpg",
    thumbnailAlt: "Self-driving cars in San Francisco thumbnail",
  },
  {
    slug: "/projects/spotify",
    title: "Spotify Premium 2.0",
    subtitle: "Redesigning the Student Plan experience.",
    thumbnailUrl: "/images/thumbnails/spotify.jpg",
    thumbnailAlt: "Spotify Premium student plan UI thumbnail",
  },
  {
    slug: "/projects/lora",
    title: "AI-Image Generation for Media",
    subtitle: "Training LoRA models for newsrooms.",
    thumbnailUrl: "/images/thumbnails/imagegen.jpg",
    thumbnailAlt: "AI image generation for media thumbnail",
  },
];