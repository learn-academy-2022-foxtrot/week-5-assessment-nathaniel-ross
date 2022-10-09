# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def letter_checker (arr)
    arr.contain?{ |val| }
end

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], northeast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

def state_selector(hash)
    hash.values.flatten.sort
end

p state_selector(us_states)

# Method: 
# def state_selector(hash)
#     hash
#         --> returns hash
#     hash.values
#         --> removes nested arrays
#     hash.values.flatten
#         --> returns all hash values as one array
#     hash.values.flatten.sort
#         --> sorts the values alphabetically
# end


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels, current_speed)
        # attr_accessor to set instance variables: model, wheels, and current_speed
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "I'm riding a #{@model} bike with #{@wheels} wheels, going #{@current_speed} mph."
        # bike_info method using string interpolation to call @model, @wheels, and @current speed
    end
end

bmx_bike = Bike.new('BMX', @wheels, @current_speed)
    # new object bmx_bike just need to set a new string for the model, as wheels and current_speed are already set

p bmx_bike.bike_info
# output: "I'm riding a BMX bike with 2 wheels, going 0 mph."
    # prints correctly

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# * Resouces used *
# https://www.geeksforgeeks.org/ruby-numeric-negative-function/
    # info on how to use negative?() built in method in order to prevent the brake method from going into negative numbers 

class Tricycle
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end

    def bike_info
        "I'm riding a #{@model} bike with #{@wheels} wheels, going #{@current_speed} mph."
    end

    def pedal_faster(num)
        @current_speed = current_speed + num
        # creating the pedal_faster method to equal the current speed plus whatever value declared
    end

    def brake(num)
        if (@current_speed - num).negative?()
            @current_speed = 0
            # using .negative?() to see if using the brake method will result in a negative number, if so set the result to 0
        else
             @current_speed = current_speed - num
            #  if value is not negative, brake method will equal the current speed minus the value declared
        end
    end
end

tricycle = Tricycle.new('tricycle', 'three', @current_speed)

p tricycle.bike_info
# "I'm riding a tricycle bike with three wheels, going 0 mph."
    # prints correctly

tricycle.pedal_faster(25)
p tricycle.bike_info
# "I'm riding a tricycle bike with three wheels, going 25 mph."
    # pedal_faster works

tricycle.brake(20)
p tricycle.bike_info
# "I'm riding a tricycle bike with three wheels, going 5 mph."
    # brake works when negative numbers not involved

tricycle.pedal_faster(25)
tricycle.brake(30)
p tricycle.bike_info
# "I'm riding a tricycle bike with three wheels, going 0 mph."
    # brake works when negative numbers involved, goes to 0 instead of negative value

