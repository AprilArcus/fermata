json.extract! @verse, :id, :author_id, :title, :key, :mode

json.measures @verse.measures do |measure|
  json.extract! measure, :id, :ord, :scale_degree
  json.measure_loops measure.measure_loops
end