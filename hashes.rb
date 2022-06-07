# two hash methods 
# 1: shorthand method 
walker_island = {prime_minister: 'Nicole',
hammock_director: 'Charlean', pit_master: 'Micheal', 
security:'Lance', band: 'Sean', coconut_overseer:'Jorge', bunker_lord:'The Don', chief_chiller:'Austin'}

# update or edit content:
walker_island{umbrella_chief} = 'Damien'

#delete content .delete() 
walker_island.delete{:bunker_lord}



charlie_bbq = Hash.new 

charles_bbq{:macncheese} => 'Davon'
charles_bbq{:smoked_ribs} => 'Stephen'
charles_bbq{:collard_greens} => 'Lance'
charles_bbq{:lumpia} => 'Micheal'
charles_bbq{:smoked_salmon} => 'Damien'
charles_bbq{:brisket} => 'The Don'

# modules - grouping like things that have similar properties 
# Enumerable modules - iterable, for instance, hashes, array, and ranges 
# Duck typing - all that matters is how an element behaves 

# Iterate over a hash using hof 

pot_luck = charles_bbq.map do [key, value]
    p "they #{key} made by #{value} is gucci!"
end 

p pot_luck
# --------------------------------------------------------

def my_review hash 
    hash.map do |key, value|
        "#{key}: Was #{value} bussin'?"
    end 
end 
p my_review charlie_bbq 
p my_review walker_island


