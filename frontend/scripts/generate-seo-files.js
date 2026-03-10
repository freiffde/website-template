#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load configuration
const configPath = path.join(__dirname, "..", "seo-config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const publicDir = path.join(__dirname, "..", "public");

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

/**
 * Get all blog posts from content/blog directory
 */
function getBlogPosts() {
  const blogDir = path.join(__dirname, "..", "content", "blog");
  const blogPosts = [];

  if (!fs.existsSync(blogDir)) {
    console.warn(
      "⚠️  Blog directory not found, skipping blog posts in sitemap",
    );
    return blogPosts;
  }

  const files = fs.readdirSync(blogDir);

  files.forEach((file) => {
    // Skip template files
    if (file.startsWith("template.") || !file.endsWith(".md")) {
      return;
    }

    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    const slug = file.replace(".md", "");

    // Convert date to ISO format (YYYY-MM-DD)
    let lastmod = new Date().toISOString().split("T")[0];
    if (data.date) {
      const dateObj = new Date(data.date);
      if (!isNaN(dateObj.getTime())) {
        lastmod = dateObj.toISOString().split("T")[0];
      }
    }

    blogPosts.push({
      path: `/blog/${slug}`,
      priority: "0.7",
      changefreq: "monthly",
      lastmod: lastmod,
    });
  });

  return blogPosts;
}

/**
 * Generate sitemap.xml
 */
function generateSitemap() {
  console.log("Generating sitemap.xml...");

  const currentDate = new Date().toISOString().split("T")[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Get blog posts
  const blogPosts = getBlogPosts();
  console.log(`📝 Found ${blogPosts.length} blog post(s)`);

  // Combine static pages and blog posts
  const allPages = [...config.pages, ...blogPosts];

  allPages.forEach((page) => {
    config.locales.forEach((locale) => {
      const isDefault = locale.code === config.defaultLocale;
      const localePath = isDefault ? page.path : `/en${page.path}`;
      const fullUrl = `${config.baseUrl}${localePath}`;

      xml += "  <url>\n";
      xml += `    <loc>${fullUrl}</loc>\n`;
      xml += `    <lastmod>${page.lastmod || currentDate}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;

      // Add hreflang alternates
      config.locales.forEach((altLocale) => {
        const isAltDefault = altLocale.code === config.defaultLocale;
        const altLocalePath = isAltDefault ? page.path : `/en${page.path}`;
        const altFullUrl = `${config.baseUrl}${altLocalePath}`;

        xml += `    <xhtml:link rel="alternate" hreflang="${altLocale.code}" href="${altFullUrl}" />\n`;
      });

      xml += "  </url>\n";
    });
  });

  xml += "</urlset>";

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);
  console.log("✅ sitemap.xml generated successfully");
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  console.log("Generating robots.txt...");

  const robotsContent = `User-agent: *
Disallow: /api/
Disallow: /_nuxt/
Disallow: /.nuxt/
Allow: /

User-agent: Googlebot
Allow: /$
Allow: /about$
Allow: /services$
Allow: /services/
Allow: /services/*
Allow: /products$
Allow: /products/*
Allow: /blog$
Allow: /blog/
Allow: /blog/*
Allow: /contact$
Allow: /imprint$

User-agent: Seobility
Allow: /$
Allow: /about$
Allow: /services$
Allow: /services/
Allow: /services/*
Allow: /products$
Allow: /products/*
Allow: /blog$
Allow: /blog/
Allow: /blog/*
Allow: /contact$
Allow: /imprint$

User-agent: Bingbot
Allow: /$
Allow: /about$
Allow: /services$
Allow: /services/
Allow: /services/*
Allow: /products$
Allow: /products/*
Allow: /blog$
Allow: /blog/
Allow: /blog/*
Allow: /contact$
Allow: /imprint$

# Sitemap
Sitemap: ${config.baseUrl}/sitemap.xml

# Crawl delay (optional - remove if not needed)
Crawl-delay: 1
`;

  fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent);
  console.log("✅ robots.txt generated successfully");
}

/**
 * Generate humans.txt
 */
function generateHumansTxt() {
  console.log("Generating humans.txt...");

  const humansContent = `/* TEAM */
Developer: ${config.company.name}
Site: ${config.baseUrl}
Location: ${config.company.location}

/* THANKS */
Framework: Nuxt.js
Language: Vue.js

/* SITE */
Last update: ${new Date().toLocaleDateString("de-DE")}
Standards: HTML5, CSS3, JavaScript ES6+
Components: Vue.js, Nuxt.js, i18n
Software: VS Code, Node.js
`;

  fs.writeFileSync(path.join(publicDir, "humans.txt"), humansContent);
  console.log("✅ humans.txt generated successfully");
}

/**
 * Generate security.txt (RFC 9116)
 */
function generateSecurityTxt() {
  console.log("Generating security.txt...");

  const securityContent = `Contact: mailto:${config.company.email}
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Preferred-Languages: de, en
Canonical: ${config.baseUrl}/.well-known/security.txt
Policy: ${config.baseUrl}/privacy
`;

  // Create .well-known directory if it doesn't exist
  const wellKnownDir = path.join(publicDir, ".well-known");
  if (!fs.existsSync(wellKnownDir)) {
    fs.mkdirSync(wellKnownDir, { recursive: true });
  }

  fs.writeFileSync(path.join(wellKnownDir, "security.txt"), securityContent);
  console.log("✅ security.txt generated successfully");
}

/**
 * Generate manifest.json for PWA (optional)
 */
function generateManifest() {
  console.log("Generating manifest.json...");

  const manifest = {
    name: config.company.name,
    short_name: config.company.shortName,
    description: config.company.description,
    start_url: "/",
    display: "standalone",
    background_color: config.theme.backgroundColor,
    theme_color: config.theme.themeColor,
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };

  fs.writeFileSync(
    path.join(publicDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  console.log("✅ manifest.json generated successfully");
}

/**
 * Generate all SEO files
 */
function generateAllSeoFiles() {
  console.log("🚀 Starting SEO files generation...\n");

  try {
    generateSitemap();
    generateRobotsTxt();
    generateHumansTxt();
    generateSecurityTxt();
    generateManifest();

    console.log("\n🎉 All SEO files generated successfully!");
    console.log("\nGenerated files:");
    console.log("- sitemap.xml");
    console.log("- robots.txt");
    console.log("- humans.txt");
    console.log("- .well-known/security.txt");
    console.log("- manifest.json");
    console.log(
      "\n📝 Note: Update the configuration in seo-config.json to match your domain and company details.",
    );
  } catch (error) {
    console.error("❌ Error generating SEO files:", error);
    process.exit(1);
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateAllSeoFiles();
}

export {
  generateSitemap,
  generateRobotsTxt,
  generateHumansTxt,
  generateSecurityTxt,
  generateManifest,
  generateAllSeoFiles,
};
