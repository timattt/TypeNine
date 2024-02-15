FROM node:latest
LABEL authors="timat"

ENV GENERATE_SOURCEMAP=false
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start", "--port", "3000"]