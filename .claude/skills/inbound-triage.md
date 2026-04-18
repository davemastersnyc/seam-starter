# Skill: Inbound Request Triage

Part of the [Seam Starter Kit](https://quietbranches.com/work/seam/) by Quiet Branches Labs.

## Read context first

Before producing any output, read the following files:

```bash
cat context/goals.md context/roadmap.md context/team.md 2>/dev/null
```

Use these to answer:
- What are the team's current goals and what moves them?
- What's in progress this cycle (fold-in opportunities)?
- Who owns decisions and what's the current capacity?

---

## Output template

Inbound request triage
Request: [name or describe it in one line]
Source: [who asked / what channel]
Date: [today's date]

**Q1 -- Does this directly move a current goal?**
Goal it moves: [name the goal from context/goals.md -- or "does not map"]
How: [one sentence, or "does not map"]
Answer: [Yes / No]

**Q2 -- Is someone or something blocked until this is done?**
Who or what: [name it, or "nothing is blocked"]
Answer: [Yes / No]

**Q3 -- Is there a manual workaround that buys 30-60 days?**
Workaround: [describe it, or "no workaround available"]
Answer: [Yes / No]

**Q4 -- Can this be folded into something already in flight?**
Existing work: [check context/roadmap.md for in-progress items -- name it, or "no fit"]
Answer: [Yes / No]

**Q5 -- Is the client relationship worth prioritizing over roadmap?**
Context: [relationship risk, or "internal request -- not applicable"]
Answer: [Yes / No / Escalate]

**Capacity check**
[From context/team.md: is there room for this? Note any constraints.]

**Recommendation**
[Ship this cycle / Defer to next cycle / Fold into [item] / Escalate / Decline]

Rationale: [2 sentences. Plain language. No hedging.]

Next step: [one action, one owner]

---

## Triage tier

Based on the answers above, assign a tier:

**Tier 1** -- Already planned or in flight. Add signal to the existing ticket.
**Tier 2** -- Broad value, not yet planned. Needs a product decision before committing.
**Tier 3** -- Custom or one-off. Requires a commercial conversation before any build work.

Tier: [1 / 2 / 3]

If Tier 2: run `/pdvf-filter` next to assess whether it's worth building.
If Tier 3: flag to the account owner before any internal work begins.

---

## Behavior rules

- Work from whatever the user gives you. Make reasonable inferences. Do not ask clarifying questions before generating output.
- If context files are missing or sparse, note what's absent and proceed with what's available.
- No exclamation points, no motivational framing, no hedging.
- No preamble. Output the triage block immediately.
