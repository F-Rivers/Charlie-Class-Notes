# make programs that resemble different music streaming application using ruby 


# spotify 
# youtube music 
# apple music 
# amazon music 
# sirius xm 
# Pandora


# music streaming app 
    # play and stop/pause 
    # search 
    # playlist 
    # songs 
        # artist 
        # title 
        # genre 
        # length
        # album 
    # rating

 class MusicStreamingApp 
    attr_accessor :song, :playing # takes symbols that act as data types 


    def initialize songs 
        @song = song_param
    end 
    def play_song #setter
        @playing = true 
    end 
    def get_playing #getter 
        # get playing checks if ____ 
        if @playing
        # and tells us ____ is playing 
        "the song #{song} is playing"
        end 
    end 
end 

# sirius = MusicStreamApp.new 'My Way'

class Spotify < SongStreamingApp
    def initialize title, artist
        super
        @times_played = 0 
    end 
    # need some kind of way to track number of times spotify has played a song and that the song is currently being played 
    def play_song
        @times_played++
    end 
end 


beibs = Spotify.new("Sorry" , "Justin Beiber")

p beibs