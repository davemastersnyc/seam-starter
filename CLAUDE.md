# Seam Starter Kit

An AI operating system for product teams. Built on Claude Code. No new infrastructure required.

## What this is

Seam is a shared context layer that every AI skill in this kit draws from automatically. Instead of re-explaining your company, goals, and customers to every tool -- you write it once in `context/`, and every skill inherits it.

The skills cover the full product loop: triaging requests, scoring ideas, classifying risk, writing PRDs, mapping assumptions, reviewing outcomes, and synthesizing the week's signal.

## Setup (15 minutes)

1. Fill in the five files in `context/`. Each has commented instructions inside.
2. Open this repo in Claude Code (`claude` in your terminal from this directory).
3. Run any skill by typing `/skill-name` in the chat.

No API keys, no integrations, no infrastructure. Just Claude Code and your context files.

## Skills

| Command | What it does | Run before... |
|---|---|---|
| `/inbound-triage` | Score an inbound request against your goals | Committing to anything |
| `/pdvf-filter` | Gate 1 -- score an idea on Problem, Desirability, Viability, Feasibility | Writing a PRD |
| `/zone-classifier` | Gate 2 -- classify work by risk and dependency level | Opening a sprint or epic |
| `/gate3-review` | Gate 3 -- did the shipped work actually change behavior? | Retrospectives |
| `/prd` | Full PRD grounded in your goals and customer signal | Opening a Linear epic |
| `/assumptions-map` | Map and pressure-test the riskiest assumptions behind a bet | Any big decision |
| `/weekly-signal-digest` | Synthesize the week's requests and customer signal | Monday morning |

## Context files

| File | What goes in it |
|---|---|
| `context/goals.md` | Current goals -- what moves, by when, why it matters |
| `context/roadmap.md` | What's in flight, what's planned, where the cycle stands |
| `context/team.md` | Who's on the team, roles, capacity, how decisions get made |
| `context/voice-of-customer.md` | Customer signal -- themes, pain points, direct quotes |
| `context/decisions.md` | Standing decisions and the reasoning behind them |

Keep these current. The skills are only as sharp as the context they draw from. A 10-minute update on Monday morning before running `/weekly-signal-digest` goes a long way.

## The pacing zones framework

The zone-classifier and pdvf-filter implement the Product Pacing Zones framework -- a structured approach to deciding how fast to move on any piece of work.

Full framework: https://quietbranches.com/work/product-pacing-zones/

## About Seam

Seam is built by Dave Masters / Quiet Branches Labs. This starter kit is the self-serve version. For a fully configured installation with live integrations (Linear, Slack, Intercom) and a shared context layer that updates automatically, book a scoping call: https://tidycal.com/davemastersnyc

Licensed under CC BY 4.0. Share and adapt freely with attribution to Dave Masters / Quiet Branches Labs (https://quietbranches.com).
