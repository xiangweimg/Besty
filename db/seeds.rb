# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    # Like.destroy.all
    Product.destroy_all
    Store.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('stores')
    # ApplicationRecord.connection.reset_pk_sequence!('likes')

  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
    User.create!(
      username: 'Stevey', 
      email: 'stevey@user.io', 
      password: 'password'
    )
  
    # More users
    3.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating stores..."
    Store.create!(
      store_name: Faker::Internet.unique.username(specifier: 3),
      city: Faker::Address.city,
      state: Faker::Address.state,
      description: Faker::Lorem.sentence(word_count:6),
      sales:(5..5000).to_a.sample,
      rating: (1..5).to_a.sample,
      owner_id: 1
    )
    Store.create!(
      store_name: 'Pallet Town',
      city: 'Weehawken',
      state: 'New Jersey',
      description: "Welcome to my Pallet Town",
      sales: 520,
      rating: 5,
      owner_id: 2
    )
    Store.create!(
      store_name: Faker::Internet.unique.username(specifier: 3),
      city: Faker::Address.city,
      state: Faker::Address.state,
      description: Faker::Lorem.sentence(word_count:6),
      sales:(5..5000).to_a.sample,
      rating: (1..5).to_a.sample,
      owner_id: 3
    )
    Store.create!(
      store_name: Faker::Internet.unique.username(specifier: 3),
      city: Faker::Address.city,
      state: Faker::Address.state,
      description: Faker::Lorem.sentence(word_count:6),
      sales:(5..5000).to_a.sample,
      rating: (1..5).to_a.sample,
      owner_id: 4
    )
    Store.create!(
      store_name: Faker::Internet.unique.username(specifier: 3),
      city: Faker::Address.city,
      state: Faker::Address.state,
      description: Faker::Lorem.sentence(word_count:6),
      sales:(5..5000).to_a.sample,
      rating: (1..5).to_a.sample,
      owner_id: 5
    )
    puts "Creating products..."
  product1 = Product.create!({
        product_name: "Gengar VMAX (Alternate Art Secret) - SWSH08: Fusion Strike (SWSH08)",
        seller_id: 2,
        description: "Alternate-art Gengar VMAX is one of the most-desired cards from 
        Fusion Strike thanks to illustrator sowsow's charming-yet-chilling depiction of Gigantamax Gengar. 
        According to the Pokémon Shield Pokédex, if you stand near its mouth, you'll hear your loved ones' voices calling out to you.",
        price:"199.89",
        availability:2,
        store_id: 2,
        category:"Pokemon"
      })
    product1_pic = File.open('./app/asset/images/253266.jpg')
    product1.photo.attach(io:product1_pic, filename: "253266.jpg")
      
    Product.create!({
        product_name: "Umbreon VMAX (Alternate Art Secret) - SWSH07: Evolving Skies (SWSH07)",
        seller_id: 2,
        description: "The Secret Rare alternate-art version of Umbreon VMAX that depicts Dynamax Umbreon trying to boop the moon is the most popular card in Evolving Skies,
         and arguably the most coveted Pokémon card in the entire Sword & Shield Series.",
        price:"505.00",
        availability:1,
        store_id: 2,
        category:"Pokemon"
      })

  product3= Product.create!({
        product_name: "Pikachu Large Microbead Plush - 13 ¾ In",
        seller_id: 3,
        description: "Just when you thought it wasn't possible, Pikachu has gotten even cuter than ever before! This microbead plush features the famous Electric-type Pokémon from Kanto in the form of a rotund orb with tiny arms and feet. 
        At a size like this, Pikachu makes a great cuddle buddy for cozy evenings on the couch.",
        price:"35.99",
        availability:25,
        store_id: 3,
        category:"Toys"
    })
    product3_pic = File.open('./app/asset/images/product_3.jpg')
    product3.photo.attach(io:product3_pic, filename: "product_3.jpg")
    
  product4= Product.create!({
      product_name: "Mew Pokémon Comfy Cuddlers Plush",
      seller_id: 3,
      description: "JMerrily mysterious Mew offers comfort and friendship with this soft, soothing plush that features a washable design so it's easy to keep clean. 
      Gently hand wash the plush in warm water, then pat it down with a towel before hanging it up to dry. 
      Before you know it, Mew will be ready for playtime, downtime, and any other time someone needs a friend!",
      price:"12.99",
      availability:10,
      store_id: 3,
      category:"Toys"
  })
    product4_pic = File.open('./app/asset/images/product_4.jpg')
    product4.photo.attach(io:product4_pic, filename: "product_4.jpg")
  product5= Product.create!({
      product_name: "Instinct Ultimate Protein Grain-Free Cage-Free Duck Recipe Freeze-Dried Raw Coated Dry Cat Food, 4-lb bag",
      seller_id: 1,
      description: "Guaranteed levels of live, natural probiotics, 
      natural omegas and antioxidants support digestive health, healthy skin and coat, and immune health.",
      price:"32.00",
      availability:10,
      store_id: 1,
      category:"Pets"
    })

  product6= Product.create!({
      product_name: "LUKA DONCIC BGS 9.5 2018-19 COURT KINGS HEIR APPARENT ROOKIE AUTO /199 MAVS 4068",
      seller_id: 4,
      description: Faker::Lorem.sentence(word_count:15),
      price:"200.89",
      availability:1,
      store_id: 4,
      category:"Art & Collectibles"
    })

    # 5.times do 
    # Product.create!({
    #     product_name: Faker::Internet.unique.username(specifier: 3),
    #     seller_id: [1,2,3,4,5].sample,
    #     description: Faker::Lorem.sentence(word_count:4),
    #     price:(1..100).to_a.sample,
    #     availability:10,
    #     store_id: [1,2,3,4,5].sample,
    #     category:["Pets",'Pokemon','Toys'].sample
    # }) 
    # end
   
  
end