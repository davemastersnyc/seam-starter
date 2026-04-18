# Skill: Zone Classifier (Gate 2)

Part of the [Product Pacing Zones](https://quietbranches.com/work/product-pacing-zones/) framework by Quiet Branches Labs.

Gate 2 determines how fast a surface can move and what has to clear before it ships. Four questions. Compliance and legal exposure is always the first check: if it exists, the zone is 4 regardless of everything else. When in doubt, default to the more conservative zone. The goal is not to stay there; it is to force the conversation that moves you out of it.

---

## Behavior rules

- One surface per run. If given multiple, classify the most prominent and note the others were skipped.
- Work from whatever the user gives you. Make reasonable inferences. Do not ask clarifying questions before generating output.
- "Not sure" always defaults to the more conservative zone.
- If the user skipped Gate 1 (PDVF), note it. The zone is assigned; the gap is not closed.
- If a surface looks like Zone 1 but has a stakeholder approval requirement baked in, call that out: the zone may be correct but Zone 1 is not actually operating as intended.
- Do not use exclamation points, motivational framing, or hedge language.
- No preamble. Output the classification block immediately.

---

## Classification logic

Work through these questions in order. Stop as soon as a zone is determined.

1. **Does this surface touch payment, legal disclosure, compliance, or adverse action?**
   Yes or not sure → Zone 4. No → continue.

2. **Is the vendor or integration for this surface confirmed and contracted?**
   No or not sure → Zone 3. Yes → continue.

3. **Does this feature rely on data or functionality that another team or system provides?**
   Yes → pending Zone 2 (continue to Q4). No → pending Zone 1 (continue to Q4).

4. **Can your engineer explain the data flow in 60 seconds: who owns each piece, inputs and outputs, where the hand-off happens?**
   No → recommend a technical spike before assigning a zone. Yes → confirm zone from Q3.

---

## Output

### Gate 2: Zone Classification
**Surface:** [name what was given]

**Classification walkthrough:**
- Compliance / legal / payment exposure: [Yes / No / Unclear] → [implication]
- Vendor / integration confirmed: [Yes / No / N/A] → [implication]
- Cross-team dependency: [Yes / No] → [implication]
- Data flow understood: [Yes / No / N/A] → [implication]

---

**Zone: [1 / 2 / 3 / 4]** [zone name]

**What this means:** [one clear sentence on what this zone requires]

**Gate requirement:** [what must clear before staging/design/build starts, per zone]
- Zone 1: internal review only
- Zone 2: named reviewer must clear before staging. assign a person, not a role.
- Zone 3: vendor + integration confirmed before internal design decisions begin
- Zone 4: legal or compliance sign-off before design starts

**Named gate owner:** [if inferable from context, suggest one; otherwise flag that this must be assigned]

---

> If Zone 1: if progress is slow, the first question is shading quality, not process. thin context forces the builder to stop and ask. improve the shading before diagnosing the workflow.

> If Zone 2: remind that the dependency blocks engineering, not learning. Zone 1-style discovery should continue while the blocker is open. If the dependency has not moved in 14 days, re-evaluate for PDVF.

> If Zone 3: build the container and placeholder states only. No internal logic until the dependency resolves.

> If Zone 4: the UI shell around a compliance surface may not carry the same zone. Identify which parts of the surface carry the risk; only those move at Zone 4 pace. If work is in a legitimate external review queue (legal, compliance, procurement), that wait is the process working. The clearance event is what moves it. Re-triage is appropriate only when there is no active reviewer and no response for an extended period -- that is a stall, not a queue.

> If Gate 1 (PDVF) was not run: note the override. Document who authorized it, which check was skipped, and why. The zone is assigned; the gap is not closed.
