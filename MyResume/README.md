# Resume SOP

This folder keeps the resume source and generated offline assets for the personal website.

## Source Of Truth

Edit this file first:

```text
MyResume/resume.json
```

Treat LinkedIn as a publishing channel and reference, not the only long-term source of truth. After updating LinkedIn, copy the final content back into `resume.json`.

## Build Outputs

Run once on a new machine:

```bash
npm run resume:install
```

Rebuild resume assets:

```bash
npm run resume:build
```

The build script generates:

```text
MyResume/output/README.resume.md
MyResume/output/Cai-You-David-Resume.pdf
MyResume/output/Cai-You-David-Resume.docx
README.md
public/resume.pdf
```

`public/resume.pdf` is served by the website at:

```text
/resume.pdf
```

## Recommended Update Flow

1. Update LinkedIn profile.
2. Export LinkedIn PDF into `MyResume/` for reference.
3. Update `MyResume/resume.json`.
4. Run `npm run resume:build`.
5. Review `public/resume.pdf`.
6. Commit `MyResume/resume.json`, generated outputs, website changes, and `README.md`.

## Git Hygiene

Commit:

- `MyResume/resume.json`
- `MyResume/build_resume_assets.py`
- `MyResume/output/Cai-You-David-Resume.pdf`
- `MyResume/output/Cai-You-David-Resume.docx`
- `public/resume.pdf`
- `README.md`

Do not commit:

- `MyResume/pdf-render/`
- `MyResume/resume-render/`
- `.DS_Store`
