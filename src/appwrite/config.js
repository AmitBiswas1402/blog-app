import conf from '../conf.js'
import {Client, Databases, ID, Storage, Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(thhis.client)
    }
    
    async createPost({title, slug, content, featuredImages, status, userid}){
        try {
            
        } catch (error) {
            console.log("Appwrite se");
        }
    }
}

const service = new Service()
export default service