// components/blog/ArticleBody.jsx
//
// Content is authored by you (the site owner) as Markdown in
// content/posts/*.md and converted to HTML at build time by lib/posts.js
// — this component just drops that HTML into the styled .c-article
// container. dangerouslySetInnerHTML is safe here specifically because
// the HTML originates from your own trusted Markdown files, not from
// user submissions or any external/untrusted source. If this ever
// changes (e.g. a public comment system), this would need sanitizing
// first (e.g. with a library like `dompurify`).
export default function ArticleBody({ html }) {
  return <div className="c-article" dangerouslySetInnerHTML={{ __html: html }} />;
}
