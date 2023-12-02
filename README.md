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
   - Seamless integration with Google Sign-In.

## User Features
- Users can sign in and out using their Google accounts.
- Authenticated users can upload videos.
- Uploaded videos are transcoded to multiple formats (e.g., 360p, 720p).
- Users, whether signed in or not, can view a list of uploaded videos.
- Users, whether signed in or not, can view individual videos.

## Getting Started
1. **Prerequisites:**
   - Ensure you have Node.js and npm installed.
   - Set up a Google Cloud Platform project and obtain necessary credentials.

2. **Installation:**
   - Clone the repository.
   - Install dependencies using `npm install`.

3. **Configuration:**
   - Configure Firebase and Google Cloud credentials.
   - Set up Cloud Storage buckets and Pub/Sub topics.

4. **Running the Project:**
   - Start the web client using `npm run start`.
   - Deploy Firebase Functions and Cloud Run services.

5. **Usage:**
   - Visit the web client URL to access the platform.
   - Follow the authentication process to begin uploading and viewing videos.

## Additional Notes
- For detailed implementation steps and explanations, refer to the project documentation.
- Feel free to extend the system to meet specific requirements or integrate additional features.

**Enjoy using the YouTube Real-Time Video Processing Design!**


