---
interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const {
  title,
  description,
  image = "/og-image.jpg",
  url = Astro.url.href,
} = Astro.props;

const canonicalUrl = url.endsWith("/") ? url.slice(0, -1) : url;
// ou const canonical = astro.url.href.replace(/\/$/, "");  // remove trailing slash if present
---

<title>{title}</title>

<meta name="description" content={description} />

<link rel="canonical" href={canonicalUrl} />

<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:url" content={url} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />

<!-- depois em cada pagina colocar:
 <SEO
  title="Spirit Airlines UX Case Study | Nathalia Troina"
  description="Redesigning the Spirit Airlines booking experience to improve transparency and reduce friction."
  url="https://nathaliatroina.com/projects/spirit"
/>  -->




<!-- <meta
  name="description"
  content="Product Designer based in New York with a background in software development and mental health nursing. I design intuitive digital products through research, UX strategy, and user-centered design."
/>

<meta
  name="description"
  content="UX case study redesigning the Spirit Airlines booking experience to improve navigation, pricing transparency, and user confidence."
/>

<meta
  name="description"
  content="UX case study redesigning the Ultrahuman dashboard to make biometric insights more understandable and actionable."
/> -->


<!-- em todas as paginas
 <link rel="canonical"
href="https://nathaliatroina.com/" />

nos projetos
<link rel="canonical"
href="https://nathaliatroina.com/projects/spirit-airlines" />
  -->