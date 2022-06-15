class CharlieController < ApplicationController
    
    def frank
        # render html: "Frank doesn't know what he's doing" 
    end 

    def mary
        # render html: "mary is trting not to lose her sanity" 
    end 

    def home 

    end

    def cubed
        @cubed = params[:number].to_i ** 3
            
    end

    def evenly
       num1 = params[:num1].to_i 
       num2 = params[:num2].to_i
       @evenly = if num1 % num2 == 0 
        true
       else 
        false
       end
    end

    def palindrome
        word = params[:word]
        @palindrome = if word.downcase == word.downcase.reverse 
            "#{word} is a palindrome, nerd"
        else 
            "#{word} is NOT a palindrome, loser"
        end
    end
    def madlib 
        noun = params[:noun]
        verb = params[:verb] 
        adjective = params[:adjective] 
        adverb = params[:adverb] 
        @madlib = "The #{adjective} #{noun} #{adverb} #{verb}"
    end


end
