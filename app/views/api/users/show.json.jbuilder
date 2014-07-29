json.extract! @user, :id, :email, :gravatar_url

json.loops @user.loops
json.verses @user.verses