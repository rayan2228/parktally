import { siteConfig } from "@/lib/site-config";

/**
 * Injects Organization + SoftwareApplication structured data so search
 * engines can render rich results (sitelinks, knowledge panel data).
 * Rendered server-side as part of the page so it's present in the
 * initial HTML payload for crawlers.
 */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: [siteConfig.links.twitter, siteConfig.links.linkedin],
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
