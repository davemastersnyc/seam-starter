# Skill: Gate 3 Review (Outcome Loop)

Part of the [Product Pacing Zones](https://quietbranches.com/work/product-pacing-zones/) framework by Quiet Branches Labs.

Three outcome tests adapted from David J. Bland's [Testing Business Ideas](https://www.amazon.com/Rapid-Testing-Business-Ideas-Customer/dp/1119551447).

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
**Zone:** [1 / 2 / 3 / 4 -- infer from context if not stated; note if unknown]
**Review window:** [Zone 1: 14 days | Zone 2: 30 days | Zone 3/4: 60 days -- flag if review is premature]
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

## Proposed context diff

Every Gate 3 review produces a proposed update to the context layer. Pass this block to `/context-update` to review and merge.

```
Source: gate3-review
Feature: [feature name]
Date: [today's date]

Change 1 -- File: context/decisions.md
Action: add
Proposed: [YYYY-MM-DD] Gate 3 review: [feature name]
  Verdict: [High / Mixed / No signal]
  Behavior change observed: [one-sentence summary of what the data showed]
  Reasoning: [why this shifts the standing view, if at all]
  Next action: [mirror "Next action" above]

Change 2 -- File: context/voice-of-customer.md
Action: [add / update / "no change"]
Current: [existing line being replaced, if any]
Proposed: [any new signal, shifted theme, or customer quote this review surfaced -- or omit this change if nothing updates]
Reasoning: [why this reflects real signal, not a convenient conclusion]

Change 3 -- File: context/goals.md
Action: [add / update / "no change"]
Current: [existing line being replaced, if any]
Proposed: [any goal that needs tightening, re-scoping, or retiring based on the outcome -- or omit if no change]
Reasoning: [why]

Change 4 -- File: context/roadmap.md
Action: [add / update / "no change"]
Current: [existing line being replaced, if any]
Proposed: [any in-flight or planned item that should be reclassified, promoted, or killed based on this outcome -- or omit if no change]
Reasoning: [why]
```

Include only the changes that actually apply. If the review produces no context diff, state: "No context diff: nothing learned that should change the context files. Name what you expected to learn and why the shipped work did not produce it."

An empty diff is a flag, not a pass. A feature that ships without updating the shared context has not actually taught the team anything.

---

> If "no signal": the failure is almost always that P was less real than assumed, or D did not address it. Both are Gate 1 failures, not execution failures. Say so.

> If signal data was not available: name exactly what needs to be measured, the method for measuring it, and when the review should be rescheduled. Do not declare a result without signal.

> Review cadence by zone: Zone 1 work reviews at 14 days post-ship. Zone 2 at 30 days. Zones 3 and 4 at 60 days. If the review is running before the window closes, note it -- early signal is informative but not conclusive. If the review is overdue, flag it explicitly.

> If Gate 1 was not run before this feature shipped: note it. The absence of a predicted behavior change from Gate 1 means Gate 3 has nothing to evaluate against. The team needs to define the success metric before the review can complete.
