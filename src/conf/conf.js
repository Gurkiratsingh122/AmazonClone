const conf ={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    ProjectId : String(import.meta.env.VITE_PROJECT_ID),
    collectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    databaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
}
export default conf