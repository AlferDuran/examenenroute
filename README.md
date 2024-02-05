# examenenroute
Examen Febrero 2024

## backend

Go to backend folder 
`\cd .\backend\`

Install the modules with `npm i`, go to the npm doc if you don't have npm installed

Run ` node .\index.js` to start the backend on port 3001 feel free to change the port in the index file

If you want to add/update data, stop the app and then update/add data, it uses sqlite as database I already attached the sqlite file, but feel free to create a new file if needed, just delete the file and update the insert values from the seed file, then run `node .\seed.js` to create the database and add initial data, also you can add data with a sqlite browser

## ui

Go to ui folder 
`\cd .\ui\`

Install the modules with `npm i`, go to the npm doc if you don't have npm installed 

Run the unit tests `npm run test:unit` it olny has unit tests for the class, you can see them on `IOhmValueCalculator.spec.ts`

Use `npm run dev` to start the development server on port 3000, if this port is used you can use another port