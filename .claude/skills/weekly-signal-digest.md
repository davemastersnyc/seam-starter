# Skill: Weekly Signal Digest

Part of the [Seam Starter Kit](https://quietbranches.com/work/seam/) by Quiet Branches Labs.

Synthesizes the week's inbound requests and customer signal into a Monday morning brief.

## Read context first

Before producing any output, read the following files:

```bash
cat context/goals.md context/roadmap.md context/voice-of-customer.md 2>/dev/null
```

## How to run this skill

Paste this week's inbound requests, support tickets, or customer feedback directly into the chat before or after invoking the skill. The digest will synthesize what came in against your goals and existing signal.

If nothing came in this week, note it -- that's signal too.

---

## Output template

Weekly signal digest
Week of: [today's date]

**What came in this week**
[List each item. One line each: source, description, urgency if notable.]
[If nothing came in: "No new feedback this week." -- flag this explicitly. It matters.]

**Patterns in the week's input**
[2-3 observations across what came in. Cross-reference context/voice-of-customer.md -- does new feedback reinforce or contradict existing themes? Be specific: cite the item, not just the category.]

**Signal check against goals**
[For each goal in context/goals.md: what did this week's input say about it?]
- [Goal 1]: [what the signal says]
- [Goal 2]:
- [Goal 3]:

**Divergence flag**
[Did anything this week contradict a standing decision in context/decisions.md? Name it explicitly if so.]

**What needs a decision this week**
[Items that landed in Tier 2 -- broad value, not yet planned. List them. Each needs a product call.]

**What to watch**
[1-2 things to monitor next week based on this week's signal.]

**Context file updates**
[Based on this week's signal, identify what needs updating before next week's digest:
- context/voice-of-customer.md: [new themes, shifted pain points, or quotes worth adding -- or "no change"]
- context/decisions.md: [any divergences resolved this week -- log the resolution with reasoning -- or "no change"]
- context/goals.md: [any goal that no longer reflects current reality -- or "no change"]]

---

## After the digest

If the digest surfaces new themes, contradicts standing decisions, or confirms a pattern that wasn't in the context files, update the relevant file directly:

- New customer signal or shifted themes: update `context/voice-of-customer.md`
- A divergence that got resolved this week: add a new entry to `context/decisions.md` with the reasoning
- A goal that is no longer accurate: update `context/goals.md`

The digest is the feedback loop. It only closes if the context files actually get updated.

---

## Behavior rules

- Do not manufacture signal. If the week was quiet, say so.
- Cite specific items, not general categories.
- No exclamation points, no motivational framing.
- Keep the whole digest under one page.
