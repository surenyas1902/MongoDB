/*
Data: [
    {
      "departureAirport": "MUC",
      "arrivalAirport": "SFO",
      "aircraft": "Airbus A380",
      "distance": 12000,
      "intercontinental": true
    },
    {
      "departureAirport": "LHR",
      "arrivalAirport": "TXL",
      "aircraft": "Airbus A320",
      "distance": 950,
      "intercontinental": false
    }
  ]
 */
/*
find() sends the data as cursor object
 */
db.flightData.find({intercontinental:true}) //Returns the First row
/*
Output:
{
        "_id" : ObjectId("5f538620ce8e917da7bafd74"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}

 */


db.flightData.find({ distance: { $gt:10000 }}).pretty()
/*
Output:
{
        "_id" : ObjectId("5f538620ce8e917da7bafd74"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
 */

db.flightData.findOne({distance:{$gt:900}})

/*
Output:

{
        "_id" : ObjectId("5f538620ce8e917da7bafd74"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true
}
*/

/* Searching in a Embedded documents */
db.flightData.find({"status.desc":"On-Time"}).pretty()
/*
Output:
{
        "_id" : ObjectId("5f538620ce8e917da7bafd74"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "delayed" : true,
        "status" : {
                "desc" : "On-Time",
                "lastUpdated" : "1 hour ago",
                "details" : {
                        "responsible" : "Surendiran S"
                }
        }
}
{
        "_id" : ObjectId("5f538620ce8e917da7bafd75"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false,
        "status" : {
                "desc" : "On-Time",
                "lastUpdated" : "1 hour ago",
                "details" : {
                        "responsible" : "Surendiran S"
                }
        }
}
 */

/* Searching Nested Embedded documents */
db.flightData.find({"status.details.responsible":"Surendiran S"}).pretty()
/*
Output:
{
        "_id" : ObjectId("5f538620ce8e917da7bafd74"),
        "departureAirport" : "MUC",
        "arrivalAirport" : "SFO",
        "aircraft" : "Airbus A380",
        "distance" : 12000,
        "intercontinental" : true,
        "delayed" : true,
        "status" : {
                "desc" : "On-Time",
                "lastUpdated" : "1 hour ago",
                "details" : {
                        "responsible" : "Surendiran S"
                }
        }
}
{
        "_id" : ObjectId("5f538620ce8e917da7bafd75"),
        "departureAirport" : "LHR",
        "arrivalAirport" : "TXL",
        "aircraft" : "Airbus A320",
        "distance" : 950,
        "intercontinental" : false,
        "status" : {
                "desc" : "On-Time",
                "lastUpdated" : "1 hour ago",
                "details" : {
                        "responsible" : "Surendiran S"
                }
        }
}
*/

/***********************************************************************/
/************************** Passengers *********************************/
/***********************************************************************/

/*
dATA:
[
  {
    "name": "Max Schwarzmueller",
    "age": 29
  },
  {
    "name": "Manu Lorenz",
    "age": 30
  },
  {
    "name": "Chris Hayton",
    "age": 35
  },
  {
    "name": "Sandeep Kumar",
    "age": 28
  },
  {
    "name": "Maria Jones",
    "age": 30
  },
  {
    "name": "Alexandra Maier",
    "age": 27
  },
  {
    "name": "Dr. Phil Evans",
    "age": 47
  },
  {
    "name": "Sandra Brugge",
    "age": 33
  },
  {
    "name": "Elisabeth Mayr",
    "age": 29
  },
  {
    "name": "Frank Cube",
    "age": 41
  },
  {
    "name": "Karandeep Alun",
    "age": 48
  },
  {
    "name": "Michaela Drayer",
    "age": 39
  },
  {
    "name": "Bernd Hoftstadt",
    "age": 22
  },
  {
    "name": "Scott Tolib",
    "age": 44
  },
  {
    "name": "Freddy Melver",
    "age": 41
  },
  {
    "name": "Alexis Bohed",
    "age": 35
  },
  {
    "name": "Melanie Palace",
    "age": 27
  },
  {
    "name": "Armin Glutch",
    "age": 35
  },
  {
    "name": "Klaus Arber",
    "age": 53
  },
  {
    "name": "Albert Twostone",
    "age": 68,
    "hobbies" : [
                "sports",
                "cooking"
        ]
  },
  {
    "name": "Gordon Black",
    "age": 38
  }
]

 */

 /* find() methods gives the data as a cursor object. Inorder to get all the collection
 using toArray() will convert whole data as a Array.
  */
 db.passengers.find().toArray()

 /* forEach() loops through all the data from the cursor and we can do any operation */
 db.passengers.find().forEach((passenger)=> {printjson(passenger)})

/***********************************************************************/
/************************** Projection *********************************/
/***********************************************************************/

/**
 in find() method, second parameter tells that what are the columns to be returned in the query
 e.g: 
 colname:1 means its included and 
 colname:0 means its excluded in the result
 */
db.passengers.find({},{name:1}).toArray()

/* Searching the hobbies in the hobbies Array. This way the mongodb will look for arrays also */
db.passengers.find({hobbies:"sports"})


