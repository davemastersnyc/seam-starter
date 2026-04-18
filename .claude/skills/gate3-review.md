# Skill: Gate 3 Review (Outcome Loop)

Part of the [Product Pacing Zones](https://quietbranches.com/work/product-pacing-zones/) framework by Quiet Branches Labs.

Shipping is a hypothesis. Gate 3 is the proof. Work is not finished when it hits production; it is finished when the behavior change predicted in Gate 1 actually happens. Unlike Gates 1 and 2, Gate 3 is retrospective. It forces the team to look at shipped work through the lens of impact. If the signal is weak, the work does not just sit in the product. It gets refined, pivoted, or removed.

---

## Behavior rules

- One feature per run. If given multiple, pick the most prominent and note the others were skipped.
- Work from whatever signal the user provides. If no signal is given, name what is missing and what should be measured before the review can be completed.
- A feature being used is not the same as a problem being solved. Usage is not a pass.
- The absence of complaints is not a pass.
- "We shipped it" is not a Gate 3 result.
- If the team cannot answer what behavior they were trying to change, that is a Gate 1 failure, not a Gate 3 finding. Name it as such.
- Do not use exclamation points, motivational framing, or hedge language.
- No preamble. Output the review block immediately.

---

## Three outcome tests

Run all three. Each is a separate call.

**1. Did behavior change?**
Identify the specific user action that confirms the problem is being solved. A metric that moved passes. A feature being live does not. Look for the signal named in Gate 1, not a convenient proxy.

**2. Is the value sustainable?**
Does the solution hold at scale? Does it create new friction elsewhere? A metric that moved for a week and reverted is not a solved problem. The signal must hold across two or more measurement windows.

**3. The "so what?" test**
If you rolled this back tomorrow, who would complain and why? If the answer is "no one" or "we don't know," the feature has not earned its place in the product.

---

## Output

### Gate 3: Outcome Review
**Feature:** [name what was given]
**Time since ship:** [if known]
**Signal available:** [summarize what the user provided]

---

**Test 1: Did behavior change?**
Expected behavior change: [what was the prediction from Gate 1, or what can be inferred]
Observed signal: [what the data shows]
Result: Pass / Inconclusive / Fail

**Test 2: Is the value sustainable?**
Signal consistency: [has it held across measurement windows, or is it early / one-window only]
New friction introduced: [yes / no / unknown]
Result: Pass / Inconclusive / Fail

**Test 3: The "so what?" test**
Rollback impact: [who would notice and why]
Result: Pass / Inconclusive / Fail

---

**Overall signal tier:**

| Tier | Tests passed | Meaning |
|---|---|---|
| High signal | All three pass | Maintain / scale. Move to standard monitoring. |
| Mixed signal | Some pass, some inconclusive | Iterate. Re-run as a Zone 1 experiment. |
| No signal | Majority fail | Pivot or kill. Move back to Gate 1. |

**This feature: [High signal / Mixed signal / No signal]**

**Next action:** [one specific next step based on the tier]

---

> If "no signal": the failure is almost always that P was less real than assumed, or D did not address it. Both are Gate 1 failures, not execution failures. Say so.

> If signal data was not available: name exactly what needs to be measured, the method for measuring it, and when the review should be rescheduled. Do not declare a result without signal.

> If Gate 1 was not run before this feature shipped: note it. The absence of a predicted behavior change from Gate 1 means Gate 3 has nothing to evaluate against. The team needs to define the success metric before the review can complete.
