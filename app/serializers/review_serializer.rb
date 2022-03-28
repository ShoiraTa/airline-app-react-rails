class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :alirline_id

end
