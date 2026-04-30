# Skill: Intake to Zone

Part of the [Seam Starter Kit](https://quietbranches.com/work/seam/) by Quiet Branches Labs.

Chains Gate 1 (PDVF) and Gate 2 (Zone Classification) into a single intake pass. Use it on work that has already cleared `inbound-triage`. The output answers two questions in one block: should this ship now (PDVF), and at what pace (Zone). It also makes one thing explicit that teams skip otherwise: is this a Zone 1 ship-to-learn surface, or does it need more support before it can move?

---

## Read context first

Before producing any output, fetch context:

```bash
SEAM_KEY=$(grep -m1 '^SEAM_API_KEY=' .env.local 2>/dev/null | cut -d= -f2-); SEAM_URL=$(grep -m1 '^SEAM_API_URL=' .env.local 2>/dev/null | cut -d= -f2-); if [ -n "$SEAM_URL" ]; then curl -s -H "Authorization: Bearer $SEAM_KEY" "$SEAM_URL/api/context"; else cat context/goals.md context/roadmap.md context/team.md 2>/dev/null; fi
```

Use it to answer:
- What is currently in flight (so you can decide if this folds in or sits next).
- Who owns the decision lane this surface lives in.
- Whether the team has capacity to take on a new Zone 1 experiment.

If the fetch fails and no context files exist, proceed without context. Note the gap in the output.

---

## Behavior rules

- One surface per run. If given multiple, take the most prominent and note the others were skipped.
- Reasonable inferences from whatever the user gives you. No clarifying questions before the output.
- Defer to the source skills for the underlying logic. See `pdvf-filter.md` for Gate 1 rules and `zone-classifier.md` for Gate 2 rules. This wrapper composes them; it does not redefine them.
- "Not sure" defaults to the more conservative zone. PDVF dimensions stay directional, not binary.
- No preamble. No exclamation points. No motivational hedge.

---

## Output

### Surface intake: [name what was given]

#### Gate 1: PDVF Filter
Use the full output template from `pdvf-filter.md`: PDVF table, weakest dimension, recommended Zone 1 experiment, Gate 1 read.

#### Gate 2: Zone Classification
Use the full output template from `zone-classifier.md`: classification walkthrough, zone, clearance required.

#### Run plan

**Surface posture:** [ship-to-learn (Zone 1) | coordinated build (Zone 2) | container only (Zone 3) | deliberate (Zone 4)]

**Signal target:** [restate the recommended Zone 1 experiment from Gate 1. Name what evidence would convince you, in what population, at what threshold. This is what Gate 3 will check against.]

**Cap:** [up to 14 days for Zone 1, 30 for Zone 2, 60 for Zones 3 and 4]
The review fires the moment the signal target is met or conclusively missed. The cap is the latest you would review, not when you review.

**Clearance required before staging:** [from Gate 2: internal review only / named reviewer / vendor + integration confirmed / legal or compliance sign-off]

**Does this need more support than Zone 1 implies?** [Yes / No]
- Yes if any PDVF dimension is Low confidence, or if the zone is 2 through 4. Name what the surface actually needs: named reviewer, vendor confirmation, parallel Desirability experiment, legal review, etc.
- No if PDVF is High or Medium across the board and the zone is 1.

**Owner:** [name or TBD]
**Where this sits in seam:** [cycle:in-progress | cycle:next | not committed]

---

## What this skill does not do

- It does not replace `inbound-triage`. That decides if you do the work. This decides how.
- It does not run `gate3-review`. That fires later, against the signal target named here.
- It does not commit work to a sprint or schedule it. The output is a triage block. A human moves it from there.
