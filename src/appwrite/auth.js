import conf from "../conf/conf";
import { Client, ID, Account } from "appwrite";

export class Authservice {
    client = new Client()
    account
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.ProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
 
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession( email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.error("Error fetching the current user:", error);
            throw error
        }
    }

    async logOut() {
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            throw error
        }
    }

    async getUserName() {
        try {
            const user = await this.account.get();
            return user.name
        } catch (error) {
            throw error
        }
    }
}

const authservice = new Authservice()

export default authservice