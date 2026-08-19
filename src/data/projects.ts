import type { Project } from "@/lib/types";

// Duplicate this object for each additional project.
export const projects: Project[] = [
  {
    title: "Find My Highlights",
    link: "https://github.com/rynjung1/findmy-highlights",
    description: "Automated Sports Reel Pipeline",
    imgUrl: "/projects/find-my-highlights.jpg",
    alt: "Floodlit stadium with players mid-match",
    chips: [
      { text: "Python", color: "3776AB" },
      { text: "FastAPI", color: "009688" },
      { text: "TypeScript", color: "3178C6" },
      { text: "Docker", color: "2496ED" },
    ],
  },
  {
    title: "Stat Tracker",
    link: "https://github.com/rynjung1/stat-tracker",
    description: "Frame-Accurate Softball Hitting Stat Tracker",
    imgUrl: "/projects/stat-tracker.png",
    alt: "Softball batter mid-swing at dusk under stadium lights",
    chips: [
      { text: "Python", color: "3776AB" },
      { text: "FastAPI", color: "009688" },
      { text: "React", color: "61DAFB" },
      { text: "TypeScript", color: "3178C6" },
      { text: "PostgreSQL", color: "336791" },
    ],
  },
  {
    title: "HandInHand",
    link: "https://github.com/rynjung1/HandInHand",
    description: "ASL Learning Platform",
    imgUrl: "/projects/handinhand.jpg",
    alt: "Two hands reaching toward each other at sunset",
    chips: [
      { text: "Python", color: "3776AB" },
      { text: "FastAPI", color: "009688" },
      { text: "React", color: "61DAFB" },
      { text: "Docker", color: "2496ED" },
    ],
  },
  {
    title: "Altithrift",
    link: "https://github.com/rynjung1/cloudcost-analyzer",
    description: "Real-Time Cloud Infrastructure Financial Intelligence Platform",
    imgUrl: "/projects/altithrift.jpg",
    alt: "City skyline at dusk under a dramatic sky",
    chips: [
      { text: "React", color: "61DAFB" },
      { text: "Node.js", color: "339933" },
      { text: "AWS", color: "FF9900" },
      { text: "PostgreSQL", color: "336791" },
      { text: "Docker", color: "2496ED" },
    ],
  },
  {
    title: "PayTrace",
    link: "https://github.com/rynjung1/payout-warehouse",
    description: "Payout Warehouse",
    imgUrl: "/projects/paytrace.jpg",
    alt: "Trading floor with monitors overlooking a city skyline",
    chips: [
      { text: "Dagster", color: "6A31EF" },
      { text: "dbt", color: "FF694B" },
      { text: "PostgreSQL", color: "336791" },
      { text: "FastAPI", color: "009688" },
    ],
  },
  {
    title: "LagSpike",
    link: "https://github.com/rynjung1/mini-bfcm",
    description: "Streaming Backpressure & Consumer Lag Telemetry Engine",
    imgUrl: "/projects/lagspike.jpg",
    alt: "Large ocean wave cresting under a stormy sky",
    chips: [
      { text: "Python", color: "3776AB" },
      { text: "Apache Kafka", color: "231F20" },
      { text: "DuckDB", color: "FFF000" },
      { text: "Streamlit", color: "FF4B4B" },
      { text: "Docker", color: "2496ED" },
    ],
  },
];
