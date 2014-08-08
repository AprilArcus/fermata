# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20140807222558) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "loops", force: true do |t|
    t.integer  "author_id",   null: false
    t.text     "time_slices", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title",       null: false
    t.string   "key",         null: false
    t.string   "mode",        null: false
    t.integer  "instrument",  null: false
    t.string   "color",       null: false
  end

  add_index "loops", ["author_id", "title"], name: "index_loops_on_author_id_and_title", using: :btree
  add_index "loops", ["author_id"], name: "index_loops_on_author_id", using: :btree

  create_table "measure_loops", force: true do |t|
    t.integer  "measure_id", null: false
    t.integer  "loop_id",    null: false
    t.integer  "instrument", null: false
    t.integer  "ord",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "measure_loops", ["loop_id"], name: "index_measure_loops_on_loop_id", using: :btree
  add_index "measure_loops", ["measure_id"], name: "index_measure_loops_on_measure_id", using: :btree

  create_table "measures", force: true do |t|
    t.integer  "verse_id",     null: false
    t.integer  "ord",          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "scale_degree", null: false
  end

  add_index "measures", ["verse_id"], name: "index_measures_on_verse_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",           null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  create_table "verses", force: true do |t|
    t.integer  "author_id",  null: false
    t.string   "title",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "key",        null: false
    t.string   "mode",       null: false
    t.string   "color",      null: false
  end

  add_index "verses", ["author_id"], name: "index_verses_on_author_id", using: :btree

end
