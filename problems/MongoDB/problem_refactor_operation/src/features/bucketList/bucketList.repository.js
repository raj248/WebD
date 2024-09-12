// Please don't change the pre-written code
// Import the necessary modules here
import {getDB} from "../../config/mongodb.js";
class BucketListRepository {
  constructor() {
    this.collection = "bucketListItems";
  }
  async addBucketListItem(bucketListItem) {
    // Write your code here
    const db = getDB();
    db.collection(this.collection).insertOne(bucketListItem);
    return bucketListItem;
  }

  async findOneBucketListItem(title) {
    // Write your code here
    const db = getDB();
    return await db.collection(this.collection).findOne({title:title});
  }
}

export default BucketListRepository;
