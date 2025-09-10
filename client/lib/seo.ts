type SEOOptions = {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string; // e.g. '/contact'
};

function upsertMeta(name: string, attr: "name" | "property", content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}='${name}']`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function setSEO({ title, description, keywords = [], canonicalPath }: SEOOptions) {
  const base = window.location.origin;
  const url = canonicalPath ? new URL(canonicalPath, base).toString() : window.location.href;

  document.title = title;
  upsertMeta("description", "name", description);
  if (keywords.length) upsertMeta("keywords", "name", keywords.join(", "));
  upsertMeta("robots", "name", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

  // Open Graph
  upsertMeta("og:title", "property", title);
  upsertMeta("og:description", "property", description);
  upsertMeta("og:type", "property", "website");
  upsertMeta("og:url", "property", url);
  upsertMeta("og:site_name", "property", "Snarip Studio");

  // App/site naming
  upsertMeta("application-name", "name", "Snarip Studio");
  upsertMeta("apple-mobile-web-app-title", "name", "Snarip Studio");

  // Twitter
  upsertMeta("twitter:card", "name", "summary_large_image");
  upsertMeta("twitter:title", "name", title);
  upsertMeta("twitter:description", "name", description);

  // Canonical
  setCanonical(url);
}
