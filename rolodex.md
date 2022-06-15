Set Up

Create a new Rails app named 'rolodex_challenge'.
$ rails new rolodex -d postgresql -T

Create the database. 
$ rails db:create
The output in the terminal should look like this:
Created database 'rolodex_development'
Created database 'rolodex_test'

Generate a model called Person with a first_name, last_name, and phone. All fields should be strings.
$ rails generate model Person first_name:string last_name:string phone:string

Run a migration to set up the database.
rails db:migrate

Open up Rails console.
http://localhost:3000 
---------------------------------------------------------


Actions

Add five family members into the Person table in the Rails console.
Person.create first_name: "Mother", last_name: "Nature", phone: "619-619-6196" 

output ---> #<Person:0x00007f7a3a659f80                                                     
 id: 1,                                                                         
 first_name: "Mother",                                                          
 last_name: "Nature",                                                           
 phone: "619-619-6196",                                                         
 created_at: Fri, 10 Jun 2022 04:59:30.090493000 UTC +00:00,                    
 updated_at: Fri, 10 Jun 2022 04:59:30.090493000 UTC +00:00> 


Retrieve all the items in the database.
console -> Persons.all 
database -> select * from people 

1	"Mother" "Nature" "619-619-6196" "2022-06-10 04:59:30.090493" "2022-06-10 04:59:30.090493"
2	"Father"	"Time" "760-619-7607" "2022-06-10 05:17:11.263331" "2022-06-10 05:17:11.263331"
3	"Uncle"	"Sam" "619-177-1776" "2022-06-10 05:18:43.794063" "2022-06-10 05:18:43.794063"
4	"Grandma" "Cookies"	"619-619-0001" "2022-06-10 05:20:45.226062" "2022-06-10 05:20:45.226062"
5	"Chesty" "Puller" "619-619-1775" "2022-06-10 05:26:22.503173" "2022-06-10 05:26:22.503173"

Add yourself to the Person table.
Retrieve all the entries that have the same last_name as you.
Update the phone number of the last entry in the database.
Retrieve the first_name of the third Person in the database.


Stretch Challenges

Update all the family members with the same last_name as you, to have the same phone number as you.
Remove all family members that do not have your last_name.
