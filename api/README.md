# Seam API

The live context layer for Seam. Replaces the file-based context reads with a single API endpoint that skills call instead.

Skills default to reading `context/*.md` files directly. When `SEAM_API_URL` is set in your project's `.env.local`, they call this API instead and get fresh context on every run.

---

## How it works

The API reads your context files from a public URL (default: GitHub raw content) and returns them as JSON. Any tool that can update those files -- a GitHub Action, a Linear webhook, a cron script -- keeps the context current without anyone editing markdown by hand.

```
tool updates context file
    → commits to repo (or writes to your source)
        → API fetches fresh on next skill run
            → skills get current context automatically
```

The API is tool-agnostic. It doesn't care what updated the files. It just serves whatever is current.

---

## Setup

**1. Deploy the API**

```bash
cd api
npm install
vercel --prod
```

Copy the deployment URL. You'll need it in step 3.

**2. Configure environment variables in Vercel**

Set these in your Vercel project settings:

| Variable | Value |
|---|---|
| `SEAM_API_KEY` | Any secret string. Skills send this as a bearer token. |
| `CONTEXT_BASE_URL` | Base URL where your context files are readable. For a public GitHub repo: `https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main` |

**3. Point your skills at the API**

In your project root, create `.env.local`:

```
SEAM_API_URL=https://your-deployment.vercel.app
SEAM_API_KEY=your-secret-key-here
```

Skills check for these automatically. If set, they call the API. If not, they read local files.

---

## Keeping context current

The API reads from wherever `CONTEXT_BASE_URL` points. The simplest setup: public GitHub repo, context files committed there. Anything that commits to the repo updates the context.

**Common patterns:**

- **Manual**: edit context files, commit, push. API picks up changes immediately.
- **GitHub Action**: trigger on a schedule or event, write updated context files, commit. Fully automated.
- **Webhook → Action**: Linear, Jira, or any tool sends a webhook → GitHub Action writes the relevant context file → committed → live.

The API doesn't have a database. The repo is the database. That's intentional -- it's auditable, versionable, and tool-agnostic.

---

## Endpoint

**`GET /api/context`**

Returns all context files as JSON.

```json
{
  "goals": "...",
  "decisions": "...",
  "roadmap": "...",
  "team": "...",
  "voice-of-customer": "..."
}
```

Requires `Authorization: Bearer YOUR_SEAM_API_KEY` header if `SEAM_API_KEY` is set.

Responses are cached for 60 seconds with a 5-minute stale-while-revalidate window.
