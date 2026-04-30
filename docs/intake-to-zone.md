# How to use intake-to-zone

This skill is the second step in deciding what to do with a new request or feature idea. It runs after `inbound-triage` and before the work goes into a sprint.

In one sentence: it tells you whether something is safe to ship fast, or whether it needs more support first.

---

## When to use it

Use it when:

- A request just got a "ship this cycle" verdict from `inbound-triage` and you need to know how to ship it.
- A new feature is heading into the cycle and nobody has classified it yet.
- You want one block that says "here is the bet, here is the zone, here is the run plan."

If you only need the PDVF check, run `/pdvf-filter`. If you only need a zone, run `/zone-classifier`. Use this when you want both, plus the integration.

---

## How to invoke

In Claude Code, type:

```
/intake-to-zone
```

Then describe the surface in plain language. A sentence is enough. Two short paragraphs is plenty. Examples that work:

- "Adding an Apple Pay button to checkout. We have seen drop-off there for a few months."
- "Building a new dashboard that shows the last 30 days of payouts. Internal tool, no compliance angle."
- "Spinning up a partner integration with [vendor X] to pull pricing data. Contract not signed yet."

You do not need to fill in a form. The skill makes reasonable inferences.

---

## What you will see

You get a single block back, in three parts.

**1. Gate 1: PDVF Filter.** A table with four dimensions (Problem, Desirable, Viable, Feasible). Each gets a confidence rating (High, Medium, or Low) and a note on what evidence backs it. The skill names the weakest dimension and a small experiment that would derisk it.

**2. Gate 2: Zone Classification.** Walks through four questions (compliance, vendor, dependency, data flow) and lands on a zone (1 through 4). Names what has to clear before the surface goes to staging.

**3. Run plan.** This is the part that ties it together. It tells you:

- The posture of the surface: ship-to-learn, coordinated build, container only, or deliberate.
- The signal target: what evidence would convince you the bet worked.
- The cap: the latest you would review the outcome (14, 30, or 60 days by zone).
- Whether this needs more support than Zone 1 implies, and if so, what kind.

---

## What to do with the output

Treat the block as the intake artifact for this surface. From there:

- **Zone 1, all PDVF dimensions High or Medium.** Ship as a small experiment. Watch for the signal you named. Schedule a Gate 3 review cap (up to 14 days from go-live).
- **Zone 2 or 3.** Open the named clearance step (reviewer, vendor confirmation). The PDVF experiment can run alongside if a dimension is shaky.
- **Zone 4, or any dimension is Low confidence.** Slow down. Name the support the surface actually needs: legal review, design exploration, parallel research. Document the gap.

Save the block somewhere durable. Linear, Notion, the ticket itself. It is the version of the bet at intake. Gate 3 will compare against it later.

---

## Common questions

**What if my description is too vague?**
The skill makes inferences. If something is genuinely missing, the output says so in the relevant cell ("D dimension: Low confidence, no signal yet") rather than ask you a question.

**What if I disagree with the zone?**
Override is fine. Document who made the call and why, in the ticket. The framework treats forced classification as a known gap, not a failure.

**What if I run this on something that should not have been accepted at all?**
Then `inbound-triage` was the wrong upstream call. Run that first. The chain only works if the request was supposed to enter the cycle.

**Where does Gate 3 fit?**
Gate 3 fires later, against the signal target this skill named. Run `/gate3-review` after the surface has been live long enough to see signal, or when the cap runs out, whichever comes first.

**Do I have to use this every time?**
No. Skip it for trivial work (copy fixes, dependency bumps, anything internal that obviously sits in Zone 1). Use it when the answer is not obvious and you want a written triage you can hand off.
