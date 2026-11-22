# Working in one repository

Use a separate clone or worktree for each agent. The repository owner adds the teammate's GitHub account under **Settings → Collaborators**. The teammate can then open the shared clone using Claude.

| Owner | Starting branch | Routine edits |
| --- | --- | --- |
| Codex | `codex/government-portal` | `site/government/`, app shell and routing, shared contracts and deployment |
| Claude | `claude/visitor-vr` | `site/experience/`, visitor-specific images in `site/assets/` |
| Both review | Separate pull request | Shared data, design tokens, locale behavior and cross-journey handoffs |

Start from the corresponding remote branch if it exists. For a new branch, update local `main` and create it from that point. Keep one focused pull request per task, target `main`, and merge after the checks and teammate review. If a task crosses ownership boundaries, agree on the contract and land a shared pull request before the dependent feature changes.

Every change should preserve Arabic/English parity, RTL/LTR, keyboard access, relative paths and mobile layouts. Put shared labels/data under `site/shared/` and use logical CSS properties. Verify both locales before handing off.

In pull requests, include the changed journey, steps to verify it, a desktop and mobile screenshot for visible changes, and any shared contract changes. Preserve the existing media attribution. Use fictional sample data for demo interactions.

