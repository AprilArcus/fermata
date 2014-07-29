# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(email: 'guest@example.com',
                    password: 'password')

loopy = guest.loops.create(time_slices: '[[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}]]',
                           key: 'C',
                           mode: 'MAJOR',
                           instrument: 0,
                           color: '#F8F8F8',
                           title: 'loopy')

orchid = guest.loops.create(time_slices: '[[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}]]',
                            key: 'D',
                            mode: 'MINOR',
                            instrument: 0,
                            color: '#F92672',
                            title: 'orchid')

bounded_rationality = guest.loops.create(time_slices: '[[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}]]',
                                         key: 'G',
                                         mode: 'MAJOR',
                                         instrument: 0,
                                         color: '#66D9EF',
                                         title: 'bounded rationality')

henn1nk = guest.loops.create(time_slices: '[[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}]]',
                             key: 'A',
                             mode: 'MINOR',
                             instrument: 0,
                             color: '#A6E22E',
                             title: 'henn1nk')

pumpkin_spice = guest.loops.create(time_slices: '[[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}],[{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1},{"velocity":0,"duration":1}]]',
                                   key: 'A',
                                   mode: 'MINOR',
                                   instrument: 0,
                                   color: '#FD971F',
                                   title: 'Pumpkin Spice')

v = guest.verses.create(title: 'Welcome to the Negaverse',
                        key: 'C',
                        mode: 'MAJOR')

ml1 = MeasureLoop.new(loop: loopy, instrument: 0, ord: 0)
ml2 = MeasureLoop.new(loop: loopy, instrument: 0, ord: 2)
ml3 = MeasureLoop.new(loop: orchid, instrument: 0, ord: 1)
v.measures.where({ord: 0})[0].measure_loops << ml1
v.measures.where({ord: 0})[0].measure_loops << ml2
v.measures.where({ord: 0})[0].measure_loops << ml3

ml4 = MeasureLoop.new(loop: bounded_rationality, instrument: 0, ord: 0)
ml5 = MeasureLoop.new(loop: orchid, instrument: 0, ord: 1)
v.measures.where({ord: 1})[0].measure_loops << ml4
v.measures.where({ord: 1})[0].measure_loops << ml5

ml6 = MeasureLoop.new(loop: pumpkin_spice, instrument: 0, ord: 0)
v.measures.where({ord: 3})[0].measure_loops << ml6