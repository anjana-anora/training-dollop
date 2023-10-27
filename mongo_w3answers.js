db.hotel.find()
db.hotel.find({},{_id:0, restaurant_id:1,borough:1,cuisine:1})
db.hotel.find({},{_id:0, restaurant_id:1,borough:1,address:{zipcode:1}})
db.hotel.find({borough:"Bronx"})
db.hotel.find({borough:"Bronx"}).limit(5)
db.hotel.find({borough:"Bronx"},{name:1}).skip(5).limit(5)

db.hotel.find({'grades.score':{$gt: 90}})
db.hotel.find({grades:{$elemMatch:{score:{$gt: 90}}}})

db.hotel.find({$and:[{'grades.score':{$gt: 80}},{'grades.score':{$lt:100}}]})
db.hotel.find({grades:{$elemMatch:{score:{$gt:80, $lt:100}}}})

db.hotel.find({'address.coord':{$lt:-95.754168}})

db.hotel.find({$and:[{cuisine:{$not:{$regex:"american",$options:"i"}}}, {'grades.score':{$gt:70}},  {'address.coord':{$lt:-65.754168}}]})

db.hotel.find({cuisine:{$ne:"American "}, borough:{$ne:"Brooklyn"}, 'grades.grade':'A'}).sort({cuisine:-1})
// Regex : start ^, end $
db.hotel.find({name:{$regex:"^Wil"}},{restaurant_id:1, name:1, borough:1, cuisine:1})

db.hotel.find({name:{$regex:"ces$", $options:"i"}},{restaurant_id:1, name:1, borough:1, cuisine:1})

db.hotel.find({name:{$regex:"reg", $options:"i"}},{restaurant_id:1, name:1, borough:1, cuisine:1})

db.hotel.find({borough:"Bronx", cuisine:{$in:['American ', 'Chinese']}})

db.hotel.find({'grades.grade':'A', 'grades.score':11,'grades.date':ISODate("2014-08-11T00:00:00Z")},{name:1,restaurant_id:1,grades:1}) //22

