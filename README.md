# YouTube Real-Time Video Processing Design

## Overview
This project implements a real-time video processing system using Google Cloud services. Videos uploaded by users are stored in Google Cloud Storage, processed asynchronously, and the metadata is stored in Firestore. The system includes components for video transcoding, event handling, and a web client for user interaction.

## Components
1. **Video Storage (Cloud Storage):**
   - Google Cloud Storage is utilized to store both raw and processed videos.
   - A scalable and cost-effective solution for hosting large video files.

2. **Video Upload Events (Cloud Pub/Sub):**
   - Upon video upload, a message is published to a Cloud Pub/Sub topic.
   - Adds a durability layer for video upload events, enabling asynchronous video processing.

3. **Video Processing Workers (Cloud Run):**
   - Cloud Run instances are employed as video processing workers.
   - Upon receiving a Pub/Sub message, workers utilize ffmpeg to transcode videos.
   - Ensures scalability to handle variable workloads.

4. **Video Metadata (Firestore):**
   - Processed video metadata is stored in Firestore.
   - Enables the display of processed videos in the web client with relevant information like title and description.

5. **Video API (Firebase Functions):**
   - Firebase Functions are utilized to build a simple API.
   - Allows users to upload videos and retrieve video metadata.
   - Easily extendable to support CRUD operations.

6. **Web Client (Next.js / Cloud Run):**
   - Next.js is used to create a user-friendly web client.
   - Users can sign in, upload videos, and interact with the platform.
   - Hosted on Cloud Run for scalability and accessibility.

7. **Authentication (Firebase Auth):**
   - Firebase Auth is employed for user authentication.
   - Enables users to sign in and out using their Google accounts.
   - Seamless integration with Google Sign-In

## User Features

- **Sign In/Out:**
  - Users can seamlessly sign in and out using their Google accounts.

- **Video Upload:**
  - Authenticated users have the privilege to upload videos to the platform.

- **Dynamic Video Transcoding:**
  - Uploaded videos undergo transcoding to multiple formats, enhancing accessibility (e.g., 360p, 720p).

- **Video Viewing:**
  - Both signed-in and non-signed-in users can browse a comprehensive list of uploaded videos.

- **Individual Video View:**
  - Users, whether signed in or not, can view detailed information and content of individual videos.

## Getting Started 🚀

### Prerequisites 🛠️
   - Ensure you have Node.js and npm installed.
   - Set up a Google Cloud Platform project and obtain necessary credentials.

### Installation ⬇️
   - Clone the repository.
   - Install dependencies using `npm install`.

### Configuration ⚙️
   - Configure Firebase and Google Cloud credentials.
   - Set up Cloud Storage buckets and Pub/Sub topics.

### Running the Project ▶️
   - Start the web client using `npm run start`.
   - Deploy Firebase Functions and Cloud Run services.

### Usage 🌐
   - Visit the web client URL to access the platform.
   - Follow the authentication process to begin uploading and viewing videos.

## Additional Steps for GitHub Setup 📦
1. **Install Visual Studio Code:**
   - [Download Visual Studio Code](https://code.visualstudio.com/download)

2. **Create a GitHub Repo:**
   - [Create a new GitHub repository](https://github.com/new)
   - Add a README file to your repository.

3. **Optional: Install WSL2 (Windows Only):**
   - [Install Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install)
   - Ensure all future installation steps are completed within WSL and not on Windows.

4. **Install Docker:**
   - [Install Docker](https://docs.docker.com/engine/install)

5. **Install podman-docker (WSL2 Only):**
   ```bash
   sudo apt install podman-docker  # version 3.4.4+ds1-1ubuntu1.22.04.1
   ```
## Additional Notes
- For detailed implementation steps and explanations, refer to the project documentation.
- Feel free to extend the system to meet specific requirements or integrate additional features.

**Enjoy using the YouTube Real-Time Video Processing Design!**


