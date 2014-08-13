
# Homepage (Root path)

get '/' do
  send_file './public/index.html'
end

get '/contacts' do
  contacts = Contact.all
  content_type :json
  contacts.to_json
end

post '/contacts' do
  content_type :json

  contact = Contact.new(params)

    if contact.save
      contact.to_json
    end
end

# get '/contacts' do
#   erb :'public/index'

# end


