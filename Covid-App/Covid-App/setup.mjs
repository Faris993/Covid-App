import { promises as fs } from "fs";
import path from "path";

// Funkcija za kreiranje direktorijuma i fajlova
const createDirAndFiles = async (dir, files) => {
  try {
    await fs.mkdir(dir, { recursive: true });

    for (const file of files) {
      const filePath = path.join(dir, file.name);
      try {
        await fs.writeFile(filePath, file.content || "");
      } catch (err) {
        console.error(`Error writing file ${filePath}:`, err);
      }
    }
  } catch (err) {
    console.error(`Error creating directory ${dir}:`, err);
  }
};

// Root direktorijum
const rootDir = "src";

// Definisanje strukture projekta
const structure = [
  {
    dir: path.join(rootDir, "Components", "NavBar"),
    files: [
      { name: "NavBar.jsx", content: "" },
      { name: "NavBar.css", content: "" },
      { name: "NavBarLogic.js", content: "" },
    ],
  },
  {
    dir: path.join(rootDir, "Components", "Home"),
    files: [
      { name: "Home.jsx", content: "" },
      { name: "Home.css", content: "" },
      { name: "HomeLogic.js", content: "" },
    ],
  },
  {
    dir: path.join(rootDir, "Components", "CovidStats"),
    files: [
      { name: "CovidStats.jsx", content: "" },
      { name: "CovidStats.css", content: "" },
      { name: "CovidStatsLogic.js", content: "" },
    ],
  },
  {
    dir: path.join(rootDir, "Components", "About"),
    files: [
      { name: "About.jsx", content: "" },
      { name: "About.css", content: "" },
      { name: "AboutLogic.js", content: "" },
    ],
  },
  {
    dir: path.join(rootDir, "Components", "CountryStats"),
    files: [
      { name: "CountryStats.jsx", content: "" },
      { name: "CountryStats.css", content: "" },
      { name: "CountryStatsLogic.js", content: "" },
    ],
  },
  {
    dir: path.join(rootDir, "Components", "Footer"),
    files: [
      { name: "Footer.jsx", content: "" },
      { name: "Footer.css", content: "" },
      { name: "FooterLogic.js", content: "" },
    ],
  },
  {
    dir: path.join(rootDir, "Context"),
    files: [{ name: "Provider.jsx", content: "" }],
  },
  {
    dir: rootDir,
    files: [
      { name: "App.jsx", content: "" },
      { name: "index.css", content: "" },
      { name: "main.jsx", content: "" },
    ],
  },
];

// Kreiranje direktorijuma i fajlova prema definisanoj strukturi
const createStructure = async () => {
  for (const item of structure) {
    await createDirAndFiles(item.dir, item.files);
  }
  console.log("Struktura projekta je uspešno kreirana.");
};

createStructure();
