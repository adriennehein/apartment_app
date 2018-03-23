json.array! @apartments do |apartment|
  json.apt_name apartment.apt_name
  json.street1 apartment.street1
  json.street2 apartment.street2
  json.city apartment.city
  json.zip apartment.zip
  json.state apartment.state
  json.country apartment.country
  json.owner_name apartment.owner_name
  json.phone apartment.phone
  json.contact_hours apartment.contact_hours
  json.avatar asset_url(apartment.avatar.url(:med))
end
