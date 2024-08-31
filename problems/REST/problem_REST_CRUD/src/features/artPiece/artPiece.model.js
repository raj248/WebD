// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [

  ];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // Write your code here to retrieve all art pieces
    const result = ArtPiece.db;
    return result;
  }

  static findOne(id) {
    // Write your code here to retrieve a specific art piece by its id
    return ArtPiece.db.find((art)=> art.id==id);
  }

  static update(id, data) {
    // Write your code here to update the details of a specific art piece
    const index = ArtPiece.db.findIndex((art)=>art.id == id);
    ArtPiece.db[index] = {"id":+id,...data};
    return ArtPiece.db[index];
  }

  static delete(id) {  
    // Write your code here to delete a specific art piece
    const index = ArtPiece.db.findIndex((art)=>art.id == id);
    ArtPiece.db.splice(index,1);
  }
}
