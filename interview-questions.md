# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a gem?

Your answer: A Ruby gem is used in Ruby on Rails to hold specific information in your application 
<!-- This was a guess, I genuinely cannot remember what a gem is... 🤦‍♂️-->

Researched answer: Gems are already created Ruby libraries that you can use and unpack to give you access to custom methods you may want to use. Two examples of Ruby gems are RSpec, which I've used as a framework for testing codes in the Ruby language; as well as ActiveRecord which is a database mapper using ORM (object relational mapping)

2. What does the acronym CRUD stand for?

Your answer: CRUD stands for: Create, Read, Update, Delete. This is a guide for operations used on objects, and we use can follow CRUD while working on Ruby on Rails. Create - we can create methods
Read - we can 'read' or return information, find information using various methods
Update - update and change/modify information 
Delete - delete or 'destroy' information

Researched answer: CRUD is an acronym of Create, Read, Update, and Delete. These are the four basic functions used in creating and managing data elements in a relational database. 

3. What is Ruby on Rails?

Your answer: Ruby on Rails (or just Rails) is a backend framework built on Ruby used to access a database.

Researched answer: Ruby on Rails is an open-source framework written on Ruby. It uses the Model-View-Controller (MVC) to handle the entirety of a web framework. The model holds the data, the view represents the visual side (HTML, CSS, React etc.), while the controller connects the two together. Rails is used to simplify creating web applications by providing all of this in an intuitive framework. Rails also gives you access to Rails console which you can access in your terminal by typing `rails c` and in this console you have access to interacting directly with data.

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database where, like the name implies, the data and values are related to eachother. These databases are created as tables, where columns and rows share different values of the same types of data. I'm sure there are other types of databases but they are currently unknown to me, I assume they store data that is not related.

Researched answer: Other types of databases like non-relational databases store data without tables, rows etc. but instead use storage models for specific types of data. This database model is useful for storing large amounts of data without the need for structure.

5. What are primary keys? Why are they important?

Your answer: Primary keys are the unique identifiers in a relational database, giving each row in the table its own unique ID. Without the primary key, you could have two identical rows with identical data stored inside without having any way to differentiate them. But with a primary key, each row will have its own unique ID allowing you to be able to seperate them easily. 

Researched answer: Primary keys are the column in a relational database used to uniquely identify rows in your table.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: The REST in RESTful routes stands for Representational State Transfer. It's a set of standards to create mapping routes from HTTP verbs to CRUD actions that are easy for developers to follow and provide clean URL routes for the end user.

2. JSON: JSON or JavaScript Object Notation is a data-interchange format for storing and transporting data. It is easy to read and understand as it is 'self-describing'

3. ERB: ERB or Embedded RuBy is a Ruby feature allowing you to generate text from templates. This combines plain text with Ruby code, commonly used for web pages but also other forms that use structured text files.
<!-- ERB: ERB stands for the YouTube channel Epic Rap Battles of History, or at least that's what comes up when you just google ERB. -->

4. Params: Params are a method that allows access data sent in by the user or other parameters. They act similar to ruby Hashes 

5. API: API or Application Programming Interface is a way for computer programs to communicate with eachother. It's a collection of software functions that can be accessed and executed, sort of a middleman between the database and the application.
