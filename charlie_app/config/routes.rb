Rails.application.routes.draw do
  get '/frank' => 'charlie#frank'
  get '/mary' => 'charlie#mary'
  get '/cubed/:number' => 'charlie#cubed'
  get '/evenly/:num1/:num2' => 'charlie#evenly'
  get '/palindrome/:word' => 'charlie#palindrome'
  get '/madlib/:noun/:verb/:adjective/:adverb' => 'charlie#madlib'
  root 'charlie#home'
end
