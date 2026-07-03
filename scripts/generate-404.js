import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "../dist");
const indexPath = path.join(distPath, "index.html");
const notFoundPath = path.join(distPath, "404.html");

if (!fs.existsSync(indexPath)) {
  throw new Error(
    "generate-404: dist/index.html not found. Run `npm run build` first."
  );
}

let indexContent = fs.readFileSync(indexPath, "utf8");

/**
 * GitHub Pages serves 404.html for unknown URLs on a custom domain.
 * This script injects an immediate redirect into a copy of index.html so the
 * SPA loads with the correct path. The root index.html SPA handler (see
 * index.html) reads `?/en/...` and replaces history.
 *
 * Preserves: path segments, query string (non-?/ forms), and hash.
 * Escapes `&` in paths as `~and~` to match the SPA handler.
 */
const redirectScript = `
    <script>
      (function () {
        var l = window.location;
        var pathname = l.pathname;

        if (pathname.endsWith("/") && pathname !== "/") {
          pathname = pathname.slice(0, -1);
        }

        var restOfPath = pathname.slice(1);
        var redirectPath = "/?/" + restOfPath.replace(/&/g, "~and~");

        if (l.search && l.search.length > 0 && !l.search.startsWith("?/")) {
          redirectPath += "&" + l.search.slice(1).replace(/&/g, "~and~");
        }

        if (l.hash) {
          redirectPath += l.hash;
        }

        var fullUrl =
          l.protocol +
          "//" +
          l.hostname +
          (l.port ? ":" + l.port : "") +
          redirectPath;
        window.location.replace(fullUrl);
      })();
    </script>
    <noscript>
      <p style="padding:1rem;font-family:sans-serif;">
        <a href="/">Continue to Flik Techs home</a>
      </p>
    </noscript>
`;

const notFoundContent = indexContent.replace(
  "<body>",
  "<body>" + redirectScript
);

fs.writeFileSync(notFoundPath, notFoundContent, "utf8");
console.log(
  "✓ Wrote dist/404.html (GitHub Pages SPA redirect from built index.html)"
);
