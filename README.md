# x8bittest.github.io — XSS PoC Lab

Public, **benign** proof-of-concept demonstrations, for education and **authorized** security testing.

| File | What it demonstrates |
|---|---|
| `index.html` | Landing page (fully public, no login). |
| `xss.html` | An advanced XSS vector that fires `alert('Hello from x8bitranjit')` on view — `<img onerror>` + ES6 tagged-template call (no parentheses). **Self-contained:** it takes no user input, reflects nothing from the URL, and reaches no other origin, so it cannot be repurposed as an open reflector. |
| `pdf_xss_poc_open_on_view.pdf` | A minimal PDF whose document-level JavaScript pops a benign alert when opened in a JS-executing reader (e.g. Adobe Acrobat/Reader). Browser built-in PDF viewers sandbox PDF JavaScript. |

Every payload's sole effect is a **self-referential `alert()`** — no exfiltration, credential capture, redirection, or third-party target.

— **x8bitranjit** · [in/x8bitranjit](https://in.linkedin.com/in/x8bitranjit)
