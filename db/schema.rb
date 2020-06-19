# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200529153511) do

  create_table "applications", force: :cascade do |t|
    t.integer  "user_id",                               null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "middle_name"
    t.string   "suffix"
    t.string   "country"
    t.string   "address_line1"
    t.string   "address_line2"
    t.string   "city"
    t.string   "state_location"
    t.integer  "postal_code"
    t.string   "contact_method"
    t.string   "primary_phone"
    t.string   "secondary_phone"
    t.string   "email"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.boolean  "part_one_validated",    default: false
    t.boolean  "part_two_validated",    default: false
    t.boolean  "part_three_validated",  default: false
    t.boolean  "part_four_validated",   default: false
    t.boolean  "part_five_validated",   default: false
    t.boolean  "part_six_validated",    default: false
    t.boolean  "part_seven_validated",  default: false
    t.boolean  "part_eight_validated",  default: false
    t.boolean  "part_nine_validated",   default: false
    t.string   "start_date"
    t.string   "authorized",            default: ""
    t.string   "countries_authorized",  default: ""
    t.string   "resume_file",           default: ""
    t.text     "undergrad_institution", default: ""
    t.text     "undergrad_major",       default: ""
    t.text     "undergrad_gpa",         default: ""
    t.text     "undergrad_major_gpa",   default: ""
    t.text     "grad_institution",      default: ""
    t.text     "grad_major",            default: ""
    t.text     "grad_gpa",              default: ""
    t.text     "explain_interest",      default: ""
    t.text     "referred_by",           default: ""
    t.text     "relocate",              default: ""
    t.text     "resume_text",           default: ""
    t.string   "race",                  default: ""
    t.string   "gender",                default: ""
    t.string   "veteran",               default: ""
    t.string   "disability",            default: ""
    t.string   "signature",             default: ""
    t.string   "date",                  default: ""
    t.boolean  "application_complete",  default: false
    t.string   "prefix",                default: ""
  end

  create_table "benches", force: :cascade do |t|
    t.string  "description",             null: false
    t.float   "lat",                     null: false
    t.float   "lng",                     null: false
    t.integer "seating",     default: 2, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "recipe_id",  null: false
    t.string   "body",       null: false
    t.string   "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "directions", force: :cascade do |t|
    t.integer "recipe_id",   null: false
    t.string  "description", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.integer "recipe_id",   null: false
    t.string  "description", null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "recipe_id",                 null: false
    t.integer  "user_id",                   null: false
    t.boolean  "is_true",    default: true
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "image_url",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "description"
    t.string   "author"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "recipe_id",  null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username",        null: false
    t.string "email"
    t.string "password_digest"
    t.string "session_token"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
