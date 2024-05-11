# To run the app - 

- Cd into folder, and start the virtual env. using source lease_venv/bin/activate (macOs)
- Cd NodeJs-Backend and reactjs_frontend folders
- In NodeJs-Backend type the command docker-compose up (to run with docker and without docker use npm start)
    -   If doing without docker, make sure to change the port to 8080 instead of 13000 - in the frontend package.json
- In reactjs_frontend folder, type the command npm start.




- To access the database as pgadmin UI, go to localhost:5050 and enter credentials. 
    - If needed, do docker ps
    - Get PID for the postgres container
    - execute docker inspect <ContainerId>
    - After that, obtain IP address from above result
    - Connect to a new server using this IP Address and user/password of the postgres database..