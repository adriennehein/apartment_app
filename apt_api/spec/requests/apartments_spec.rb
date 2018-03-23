require 'rails_helper'

describe "Apartments API" do
  let(:encoded_file) do
    file_path = File.join(Rails.root, 'spec', 'fixtures', 'sample-image.png')
    base64_image = Base64.encode64(File.read(file_path))
    "data:image/jpg;base64,#{base64_image}"
  end


  it "gets a list of Apartments" do
    # Create a new cat in the Test Database (not the same one as development)
    Apartment.create(apt_name: 'Golden Hill', street1: '25th', street2: 'C St', city: 'SD', zip: '92102', state: 'CA', country: 'USA', owner_name: 'Polly', phone: '619-300-3434', contact_hours: '9-5 Monday-Friday')

    # Make a request to the API
    get '/apartments'

    # Convert the response into a Ruby Hash
    json = JSON.parse(response.body)

    # Assure that we got a successful response
    expect(response).to be_success

    # Assure that we got one result back as expected
    expect(json.length).to eq 1
  end

  it "creates an apartment" do
    apartment_params = {
      apartment: {
        apt_name: 'Home',
        street1: '25th',
        street2: 'C St',
        city: 'SD',
        zip: '92102',
        state: 'CA',
        country: 'USA',
        owner_name: 'Polly',
        phone: '619-300-3434',
        contact_hours: '9-5 Monday-Friday',
        avatar_base: encoded_file
      }
    }

    post '/apartments', params: apartment_params
    expect(response).to be_success
    new_apartment = Apartment.first
    expect(new_apartment.apt_name).to eq('Home')
    expect(new_apartment.avatar.url).to_not be nil

  end

  it "doesn't create an apartment without a name" do
    apartment_params = {
      apartment: {
        street1: '25th',
        street2: 'C St',
        city: 'SD',
        zip: '92102',
        state: 'CA',
        country: 'USA',
        owner_name: 'Polly',
        phone: '619-300-3434',
        contact_hours: '9-5 Monday-Friday'
      }
    }

    post '/apartments', params: apartment_params

    expect(response.status).to eq 422

    json = JSON.parse(response.body)
    expect(json['apt_name']).to include "can't be blank"
  end

end
