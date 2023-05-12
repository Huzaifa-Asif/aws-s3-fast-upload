
# Uploading Large Files to AWS-S3 with Lightning Fast Speed - Parallel Chunk Upload

This project demonstrates two techniques for uploading large files to AWS-S3: one where chunks are created on the frontend and uploaded using the AWS multipart API, and another where chunks are created on the backend and uploaded using the AWS SDK 3 upload parallel technique.

## Technique 1:

Creating Chunks on Frontend, then sending them to Backend and uploading to S3 bucket using AWS multipart upload API.

### Backend Code

Backend Folder: backend

To run this code: Install the required npm modules, by running the below command.
```
npm install
```

Create a .env file by copying the sample.env file and updating the necessary values.

Finally run the code using below command
```
npm start
```
  
### Frontend Code

Folder Folder: frontend

To run this code:

Install http-server globally using npm by running `npm install -g http-server`

Navigate to the frontend folder.

Start the server by running `http-server`

Open the provided URL in your web browser.


## Technique 2:

Uploading complete file from frontend then Creating Chunks on Backend and doing parallel upload using AWS SDK 3


### Backend Code

Backend Folder: backend2

To run this code: Install the required npm modules, by running the below command.
```
npm install
```

Create a .env file by copying the sample.env file and updating the necessary values.

Finally run the code using below command
```
npm start
```
  
### Frontend Code

Folder Folder: frontend2

To run this code:

Install http-server globally using npm by running `npm install -g http-server`

Navigate to the frontend folder.

Start the server by running `http-server`

Open the provided URL in your web browser.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.