def greater_num(num1, num2)
    if num1 > num2 
        "#{num1} is greater"
    elsif num2 > num1 
        "#{num2}  is greater"
    else "#{num1} and #{num1} are the same."
    end 
end 

p greater_num(27,99)

puts 'Please enter your name'
user_name = gets.chomp
p user_name 
puts 'Please enter your age'
user_age = gets.chomp.to_i 
p user_age 

def can_you_vote(name, age)
    if age >= 18
        "Hi #{name}: #{age} is old enough to vote"
    else 
        "Hi #{name}: #{age} is not old enought to vote"
    end 
end 
