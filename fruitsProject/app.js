const MongoClient=require('mongodb').MongoClient;
const assert = require('assert');
const { Collection } = require('mongodb');
const { callbackify } = require('util');

//conection url
const url= 'mongodb://localhost:27071'
const dbName= 'fruitsDB'
const client= new MongoClient(url)

client.connect((err)=>{
    assert.equal(null,err)
    console.log("connected successfully")

    const db= client.db(dbName)
    insertDocuments(db,()=>{
        client.close()
    })
    
})
const insertDocuments = (db,callback)=>{
const collection=db.Collection('fruits')
collection.insertMany([
     {
        name:"banana",
        score:"4",
        review:"great fruit"

     },
     {
        name:"melon",
        score:"2",
        review:"great fruit"

     },
     {
        name:"apple",
        score:"100",
        review:"great fruit"

     },

],
    (err,result)=>{
        assert.equal(err,null)
        assert.equal(3,result.result.n)
        assert.equal(3,result.ops.length)
        console.log("inserted 3 documents into the collection")
        callback(result)

    })
}