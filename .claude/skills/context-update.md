# Skill: Context Update (Write-Back Loop)

Part of the [Seam Starter Kit](https://quietbranches.com/work/seam/) by Quiet Branches Labs.

Closes the write-back loop. Takes a proposed context diff -- from /gate3-review, /weekly-signal-digest, or written by hand -- reviews it with the user, and on approval writes the updates back into the context files and logs the change in decisions.md.

This is the only skill that writes to your context files. Every other skill is read-only. That is intentional: context changes happen once per loop, deliberately, with a human in the review seat.

---

## How to run this skill

1. Run /gate3-review or /weekly-signal-digest first to produce a proposed diff. Or paste a diff written by hand.
2. Invoke /context-update and paste the diff in the same message.
3. Review the proposed changes as prompted.
4. Approve, edit, or reject. Approved changes are written to the context files and logged in decisions.md.

---

## Read context first

Before producing any output, fetch current context:

```bash
SEAM_KEY=$(grep -m1 '^SEAM_API_KEY=' .env.local 2>/dev/null | cut -d= -f2-); SEAM_URL=$(grep -m1 '^SEAM_API_URL=' .env.local 2>/dev/null | cut -d= -f2-); if [ -n "$SEAM_URL" ]; then curl -s -H "Authorization: Bearer $SEAM_KEY" "$SEAM_URL/api/context"; else cat context/goals.md context/roadmap.md context/voice-of-customer.md context/decisions.md context/team.md 2>/dev/null; fi
```

Use it to:
- Locate the current state of any line being modified.
- Detect conflicts with existing decisions.
- Preserve tone and format consistent with existing entries.

---

## Behavior rules

- Never write to context files without an explicit "approve" from the user in this session. Editing the proposed diff counts as a revised proposal, not approval.
- One diff per run. If multiple are pasted, ask which to process first.
- If no diff is present in the invocation, prompt for it. Do not invent a diff.
- If a proposed change contradicts an existing decision in decisions.md, surface the conflict explicitly before asking for approval. Do not silently overwrite.
- Always write the decisions.md log entry on approval, even if the only change is a correction to a prior entry.
- No preamble. Start with the review block immediately.

---

## Output template

### Context Update: Proposed Changes
**Source:** [gate3-review / weekly-digest / manual -- infer from diff header or ask]
**Topic:** [what this diff is about -- feature name, theme, or decision]
**Files affected:** [list paths, e.g. voice-of-customer.md, decisions.md]

---

**Proposed changes**

For each change in the diff:

```
Change [#] -- File: context/[filename].md
Action: [add / update / remove]
Current: [quote the existing text, or "(no existing entry)"]
Proposed: [the new text]
Reasoning: [why this change matters -- pulled from the diff source]
Conflicts with: [any existing decision or entry this contradicts, or "none"]
```

---

**Decisions.md log entry** (always written on approval):

```
[YYYY-MM-DD] [short title]
Source: [feature or review that produced this]
Change: [one-line summary of what was updated and where]
Reasoning: [one-sentence why, drawn from the proposing skill]
```

---

**Approval prompt**

Ask the user to reply with one of:
- `approve` -- write all changes and log to decisions.md
- `approve partial [#, #]` -- write only the listed changes
- `edit [change #]` -- revise a specific change, then re-present for approval
- `reject` -- discard the diff; no files are written

---

## On approval

When the user replies `approve` or `approve partial`:

1. Write each approved change to its target file. Use the Edit tool for updates, Write for creating new sections. Preserve existing file structure and surrounding content. Do not reformat unrelated parts of the file.
2. Append the decisions.md log entry under today's date. If today's date already has entries, add this one below them.
3. Echo a short confirmation block:

```
Context updated.
Files changed: [list]
Decisions.md: entry added for [title]
```

If any write fails, report which and leave the rest unchanged. Do not partially write a single file and silently succeed.

---

## On rejection or edit

On `reject`: confirm in one line that nothing was written. No file changes.
On `edit`: revise the specified change based on user input, then re-present the full diff for approval.

---

## When to run this skill

- After /gate3-review produces a context diff.
- After /weekly-signal-digest flags context file updates.
- When a standing decision needs to change and you want it logged with reasoning.
- When the context files have drifted from current reality and need a correction pass.

A gate 3 review that produces no diff is a flag -- something was learned. If the diff is empty, note that in the source ticket before running this skill.
