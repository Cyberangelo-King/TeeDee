# Prompt 11 — Prepare for GitHub and External Developer Handoff

Prepare the repository for continued work by another developer.

1. Ensure `main` contains a stable working build.
2. Remove secrets, local caches, build output and unused assets.
3. Commit lockfile and source docs.
4. Ensure `.gitignore` is correct.
5. Ensure `.env.example` is complete but contains no secret values.
6. Confirm README commands work from a fresh clone.
7. Document Node/package-manager versions.
8. Document deployment target and environment setup.
9. Add preview screenshots.
10. Summarise incomplete tasks and blockers.
11. Add a `HANDOFF.md` with:
   - current status;
   - architecture;
   - key routes;
   - component conventions;
   - content editing process;
   - asset conventions;
   - environment variables;
   - build/test commands;
   - known bugs;
   - next recommended tasks.

Do not delete useful design references or project docs. Do not squash or rewrite history unless explicitly requested.
