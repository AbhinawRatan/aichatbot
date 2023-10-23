<
### Run the project locally

#### Without docker compose

Minimum requirements to run the projects locally

- Node.js v18
- Postgres Database
- Redis
- Qdrant
- GitHub App (NextAuth)
- Email Provider (NextAuth)
- OpenAI API Key
- AWS S3 Credentials

<!-- ```bash
# Create .env.local
cp .env.example .env.local

# Install dependencies
pnpm install

# Generate DB tables
pnpm prisma:migrate:dev

# Run server
pnpm dev

# Run worker process
pnpm worker:datasource-loader

# or pnpm dev:all
``` -->

<!-- #### With docker compose -->

<!-- First `cd .dev/databerry` then populate the config files `app.env` and `docker.env` as needed, then run the compose command: -->

### Run locally (Docker required)

```shell
cp .env.example .env.local
# Add your own OPENAI_API_KEY

pnpm dev

# pupeteer browser local
brew install chromium --no-quarantine

# Dev emails inbox (maildev)
# visit http://localhost:1080
```
