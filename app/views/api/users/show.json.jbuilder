json.extract! @user, :id, :email, :gravatar_url

json.loops @user.loops
json.verses @user.verses do |verse|

  json.extract! verse, :id, :author_id, :title, :key, :mode, :color
  json.measures verse.measures do |measure|
    json.extract! measure, :id, :ord, :scale_degree
    json.measure_loops measure.measure_loops do |measure_loop|
      json.extract! measure_loop, :id, :measure_id, :loop_id, :instrument, :ord
      json.loop measure_loop.loop
    end
  end

end