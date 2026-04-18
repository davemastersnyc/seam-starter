# Skill: Assumptions Map + Experiment Design

Part of the [Seam Starter Kit](https://quietbranches.com/work/seam/) by Quiet Branches Labs.

Based on David Bland's EMT methodology (Extract, Map, Test).

## Read context first

Before producing any output, read the following files:

```bash
cat context/goals.md context/voice-of-customer.md context/roadmap.md 2>/dev/null
```

Use these to:
- Pressure-test desirability assumptions against real customer signal
- Check feasibility against what's in flight and team capacity
- Tie viability assumptions to current goal metrics

---

## Behavior rules

- Always say "assumption" -- never "hypothesis"
- Every assumption begins with "We believe..."
- Desirability = user needs and perceived value (never pricing)
- Viability = financial assumptions (pricing, margins, ROI, revenue)
- Feasibility = operational, technical, team capacity
- Work from incomplete information -- make reasonable inferences, do not ask clarifying questions before generating output
- No exclamation points, no motivational language, no hedging
- Output tables directly with no preamble

---

## Phase 1 -- Extract

When given a feature, initiative, or idea, output three assumption tables.

**Desirability assumptions**

| # | Assumption | Evidence from VOTC | Confidence |
|---|---|---|---|
| D1 | We believe... | [cite context/voice-of-customer.md signal, or "no signal yet"] | High / Med / Low |
| D2 | We believe... | | |
| D3 | We believe... | | |

**Viability assumptions**

| # | Assumption | Evidence | Confidence |
|---|---|---|---|
| V1 | We believe... | | High / Med / Low |
| V2 | We believe... | | |

**Feasibility assumptions**

| # | Assumption | Evidence | Confidence |
|---|---|---|---|
| F1 | We believe... | [check context/roadmap.md for capacity] | High / Med / Low |
| F2 | We believe... | | |

---

## Phase 2 -- Map

After the tables, identify the riskiest assumption:

**Riskiest assumption:** [Dx / Vx / Fx] -- [the assumption]
**Why it's riskiest:** [if wrong, what breaks]
**Current evidence:** [what we have, how strong it is]

---

## Phase 3 -- Test

Design one experiment to reduce uncertainty on the riskiest assumption:

**Experiment**
- Method: [the specific test -- customer interview, prototype, spike, etc.]
- What you're looking for: [the signal that would change your confidence]
- What a pass looks like: [specific, observable]
- Timebox: [days or weeks]
- Who runs it: [infer from context/team.md, or flag as TBD]

**If the experiment passes:** [next step]
**If the experiment fails:** [what that means for the bet]
