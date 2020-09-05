/* selecting the database */
use flights;

/*
find() methods finds that data based on the condition and pretty() method
print the json with easy readable format
 */
db.flightData.find().pretty()

/* insertOne() will accept only one object as a parameter */
db.flightData.insertOne({
    "departureAirport": "LHR",
    "arrivalAirport": "TXL",
    "aircraft": "Airbus A320",
    "distance": 950,
    "intercontinental": false
  })

/* 
insertMany() will accept multiple object in the parameter
but it should be enclosed with Array
*/
db.flightData.insertMany([
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
)

/* deleteOne() will delete the data based on the condition but will delete only the first record */
db.flightData.deleteOne({departureAirport:"LHR"})

/* deleteMany() will delete many data based on the condition */
db.flightData.deleteMany({marker:"Delete"})

/* 
updateOne() method 1st parameter is the condition to check and update the record given in the
2nd parameter only to the filtered first record
*/
db.flightData.updateOne({distance:12000},{$set:{marker: "delete"}})

/* 
updateMany() method 1st parameter is the condition to check and update the record given in the
2nd parameter only to the filtered records 
*/
db.flightData.updateMany({}, {$set:{marker:"Delete"}})

/*
replaceOne() method 1st parameter is the condition and replace the record given in the 2nd
parameter only to the filtered first record
 */
db.flightData.replaceOne({_id:ObjectId("5f538620ce8e917da7bafd74")},{deleted:true})