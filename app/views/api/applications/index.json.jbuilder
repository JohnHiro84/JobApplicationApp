
@applications.each do |application|
  json.set! application.id do
    json.extract! application, :id, :user_id, :first_name, :last_name,
    :middle_name,  :suffix, :country, :address_line1, :address_line2,
    :city, :state_location, :postal_code, :contact_method, :primary_phone,
    :secondary_phone, :email, :part_one_validated, :part_two_validated,
    :part_three_validated, :part_four_validated, :part_five_validated, :part_six_validated,
    :part_seven_validated, :part_eight_validated, :part_nine_validated, :start_date,
    :authorized, :countries_authorized, :resume_file,
    :undergrad_institution, :undergrad_major, :undergrad_gpa,
    :undergrad_major_gpa, :grad_institution, :grad_major , :grad_gpa,
    :explain_interest, :referred_by, :relocate, :resume_text,
    :race, :gender, :veteran, :disability, :signature, :date, :application_complete,
    :prefix

  end
end
