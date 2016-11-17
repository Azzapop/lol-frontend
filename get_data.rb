require 'httparty'
require 'json'

region = 'oce'
summonerNames = 'azzapop'
auth = "?api_key=#{ENV["LOL_KEY"]}"

endPoint = "https://#{region}.api.pvp.net/api/lol/#{region}/v1.4/summoner/by-name/#{summonerNames}#{auth}"
data = HTTParty.get(endPoint)
puts data

File.open('summoner.json', 'w') { |file| file.write(data.body.to_json) }

summonerId = data["azzapop"]["id"]
endPoint = "https://#{region}.api.pvp.net/api/lol/#{region}/v2.2/matchlist/by-summoner/#{summonerId}#{auth}"
data = HTTParty.get(endPoint)
puts data

File.open('matches.json', 'w') { |file| file.write(data.body.to_json) }

matchList = data["matches"]
matchData = []

matchList.each do |m|
  matchId = m["matchId"]
  endPoint = "https://#{region}.api.pvp.net/api/lol/#{region}/v2.2/match/#{matchId}#{auth}"
  data = HTTParty.get(endPoint)
  puts data.body
  matchData << data.body
  sleep 2.5
end
File.open('matchData.json', 'w') { |file| file.write(matchData.to_json) }
