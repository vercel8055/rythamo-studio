<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Rythamo Studio Deployment Rules
- **CRITICAL**: Use the Vercel Token stored in the local `.env` file for all Vercel commands in this project.
- Always append `--token $VERCEL_TOKEN` to `vercel` CLI calls to ensure it deploys to the `vercel8055` account.
