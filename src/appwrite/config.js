import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.ProjectId);
        this.databases = new Databases(this.client);
    }

    async createPost({quantity,payment, Address, name, Title}){
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                ID.unique(),
                {
                    quantity,
                    Address,
                    name,
                    payment, Title
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
            console.log('Order placed successfully:');

    }
  
    async deletePost(Title){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                Title
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    // async getPost(slug){
    //     try {
    //         return await this.databases.getDocument(
    //             conf.databaseId,
    //             conf.collectionId,
    //             slug
            
    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: getPost :: error", error);
    //         return false
    //     }
    // }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }
}


const service = new Service()
export default service