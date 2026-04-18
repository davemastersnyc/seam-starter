# Skill: PRD Generator

Part of the [Seam Starter Kit](https://quietbranches.com/work/seam/) by Quiet Branches Labs.

Produces a structured PRD grounded in your goals, customer signal, and cycle context.

## Read context first

Before producing any output, fetch context:

```bash
SEAM_KEY=$(grep -m1 '^SEAM_API_KEY=' .env.local 2>/dev/null | cut -d= -f2-); SEAM_URL=$(grep -m1 '^SEAM_API_URL=' .env.local 2>/dev/null | cut -d= -f2-); if [ -n "$SEAM_URL" ]; then curl -s -H "Authorization: Bearer $SEAM_KEY" "$SEAM_URL/api/context"; else cat context/goals.md context/roadmap.md context/team.md context/voice-of-customer.md context/decisions.md 2>/dev/null; fi
```

Use these fields:
- Goals -- what the team is trying to move and why
- Roadmap -- what's in flight, what's planned, cycle state and capacity
- Voice of customer -- themes, pain points, and direct quotes to ground the problem statement
- Decisions -- standing decisions that constrain or inform the scope

---

## Behavior rules

- Fill every section with real reasoning. Never leave placeholders if you can infer content from context.
- Surface open questions explicitly -- do not speculate to fill gaps, flag them in section 3B.
- Ask targeted follow-up questions after generating the draft for any section left incomplete.
- Keep language plain and direct. No corporate filler.
- Zone tagging is mandatory. Classify the overall PRD and flag any section-level zone escalations.

---

## Zone classification guide

Assign the zone that matches the highest-risk element in scope.

| Zone | Label | When to use |
|---|---|---|
| 1 | Move Fast | No external dependencies. Self-contained. Anyone with the skill can own it end to end. |
| 2 | Coordinated | Depends on another team, API, or data source. Named reviewer required before staging. |
| 3 | Provisional | Vendor or integration unconfirmed. Build container and placeholder states only; no internal logic until confirmed. |
| 4 | Move Deliberately | Compliance, payment, or legal exposure. Legal or compliance sign-off required before design starts. |

---

## Output template

```
PRD: [Feature Name]
Status: Draft
Owner: [infer from feature area, or leave blank]
Date: [today's date]
Zone: [1 / 2 / 3] -- [label] -- [one sentence rationale]
Goal: [which goal from context/goals.md this moves, and how]

---

1. Problem
1A. What problem are we solving?
[2-3 sentences. Ground in context/voice-of-customer.md signal where possible.]

1B. Who has this problem?
[Persona or segment. Pull from context/team.md or voice-of-customer.md.]

1C. How do we know it's real?
[Evidence from context/voice-of-customer.md -- themes, pain points, quotes. Note confidence level.]

1D. Why now?
[Tie to goals and cycle state from context/goals.md and context/roadmap.md.]

---

2. Proposal
2A. What are we building?
[Clear description of the solution. One paragraph.]

2B. What are we NOT building?
[Scope boundaries. Reference context/decisions.md for relevant standing decisions.]

2C. Success looks like...
[Specific, measurable. Tied to a goal metric from context/goals.md.]

---

3. Scope
3A. Happy path
[Step by step: what does the user do, what does the system do.]

3B. Unhappy paths
[At least 3-4. What breaks, what's missing, what's the edge case.]

3C. Open questions
[Unresolved decisions. Flag who needs to answer each.]

---

4. Constraints
4A. Technical
[Known dependencies, limitations, or integration requirements.]

4B. Decisions that constrain this scope
[Pull from context/decisions.md -- anything that bounds what we can build here.]

4C. Timeline
[Based on context/roadmap.md cycle state and context/team.md capacity.]

---

5. Gate classification
Gate 1 (PDVF): [run /pdvf-filter if not already done, or summarize confidence]
Gate 2 (Zone): [Zone 1 / 2 / 3 / 4 with rationale]
Gate owner: [from context/team.md decision rules]
```
