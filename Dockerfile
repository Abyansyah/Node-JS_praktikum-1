FROM node:latest

COPY latihan_suhu.js /app/suhu.js

CMD ["node", "/app/suhu.js"]