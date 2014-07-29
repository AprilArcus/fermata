json.extract! @measure, :id, :ord, :scale_degree

json.measure_loops @measure.measure_loops do |measure_loop|
  json.extract! measure_loop, :id, :measure_id, :loop_id, :instrument, :ord
  json.loop measure_loop.loop
end