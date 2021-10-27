#!/bin/bash

npm ci

npx swagger-typescript-api -p http://localhost:5000/swagger/v1/swagger.json \
    --clean-output --output src --modular --axios --templates ./templates

npx ctix ./tsconfig.json
npx tsc
npx typedoc src/index.ts
