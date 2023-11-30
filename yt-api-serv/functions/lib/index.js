"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideos = exports.generateUploadUrl = exports.createUser = void 0;
const functions = require("firebase-functions");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const logger = require("firebase-functions/logger");
const storage_1 = require("@google-cloud/storage");
const https_1 = require("firebase-functions/v2/https");
(0, app_1.initializeApp)();
const firestore = new firestore_1.Firestore();
const storage = new storage_1.Storage();
const rawVideoBucketName = "yakshatha-yt-raw-videos";
const videoCollectionId = "videos";
exports.createUser = functions.auth.user().onCreate((user) => {
    const userInfo = {
        uid: user.uid,
        email: user.email,
        photoUrl: user.photoURL,
    };
    firestore.collection("users").doc(user.uid).set(userInfo);
    logger.info(`User Created: ${JSON.stringify(userInfo)}`);
    return;
});
exports.generateUploadUrl = (0, https_1.onCall)({ maxInstances: 1 }, async (request) => {
    // Check if the user is authentication
    if (!request.auth) {
        throw new functions.https.HttpsError("failed-precondition", "The function must be called while authenticated.");
    }
    const auth = request.auth;
    const data = request.data;
    const bucket = storage.bucket(rawVideoBucketName);
    // Generate a unique filename for upload
    const fileName = `${auth.uid}-${Date.now()}.${data.fileExtension}`;
    // Get a v4 signed URL for uploading file
    const [url] = await bucket.file(fileName).getSignedUrl({
        version: "v4",
        action: "write",
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    });
    return { url, fileName };
});
exports.getVideos = (0, https_1.onCall)({ maxInstances: 1 }, async () => {
    const querySnapshot = await firestore
        .collection(videoCollectionId)
        .limit(10)
        .get();
    return querySnapshot.docs.map((doc) => doc.data());
});
//# sourceMappingURL=index.js.map