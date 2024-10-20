
tested with nginx-1.26.2

installation
------------

run `npm install` in both
- `angular`
- `nextjs`

starting
--------

run `./start` to start both services

to start angular alone, from `/angular`: `npm start`

to start nextjs alone, from `/nextjs`: `npm run dev`

messages to and from clients via iframe
---------------------------------------

this requires using Nginx (config provided in `/nginx`) or another reverse proxy
so that both apps appear on the same origin
