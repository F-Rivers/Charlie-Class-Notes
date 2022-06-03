# wrestler = "Macho Man Randy Savage"

# if wrestler == 'The Rock'
#     p 'The Rock is cooking'
# elsif wrestler == "Macho Man Randy Savage"
#     p 'The tower of power! Two sweet to be sour, ohhh yeahh!'
# else 
#     p 'Yeah, you are snarky, but can you smell what The Rock is cooking?'
# end


# my_name = "Triple H"

# if my_name == "Ric Flair"
#     p "WOOOO"
# else 
#     p "Hey, #{my_name}, do you know Ric Flair?"
# end

p 'what is your birth year?'
my_year = gets.chomp
p my_year.class

if my_year.even? 
    p 'You will wear a robe and glasses in the shape of #{my_year}'
    if my_year > 1996
        p 'Your name will be The Great <last meal you ate>'
    else
        p 'Your name will be The Top-Shelf <last beverage you had>' 
end