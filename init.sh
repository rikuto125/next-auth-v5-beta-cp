#bin/bash
cd docker && make db-down && make db-up
cd ../

# init pr
npx prisma generate --schema prisma/schema.prisma
npx prisma migrate dev --name init
# npx prisma migrate dev --schema prisma/schema.prisma

