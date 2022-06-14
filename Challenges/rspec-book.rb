class Book
    attr_accessor :title, :author, :page
    def initialize author='anonymous'
      @title = title
      @author = author
      @page = 1
    end
    def read pages_read
      @page += pages_read
    end
  end
  
## needs to be in rspec VVVVVV

describe Book.new
it 'has to be real' do 
    expect {Book.new}.not_to raise_error
end 

it 'has a title' do 
    my_book = Book.new 
    my_book.title = 'House of Leaves'
    expect(my_book.title).to be_a String 
    expect(my_book.title).to eq 'House of Leaves' 
end 

it 'has a author' do 
    my_book = Book.new
    expect(my_book.author).to be_a String
    expect(my_book.author).to eq 'anonymous' 
    house_of_leaves = Book.new 'Harry Potter'
    expect(house_of_leaves.author).to eq 'Harry Potter' 
end 

it 'can report the current page' do 
    my_book = Book.new 
    expect(my_book.page).to be_a Integer
    expect(my_book.page).to eq 1 
end 

it 'can read pages' do 
    my_book = Book.new 
    expect{my_book.read 10}.to change{my_book.page}.from(1).to(11)
end 
end 