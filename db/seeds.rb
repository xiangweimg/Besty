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
    Category.destroy_all
    Store.destroy_all
    Product.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('categories')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('stores')
  
    puts "Creating categories..."
    Category.create!(
      name:'Pokemon'
    )
    Category.create!(
      name: 'Pets'
    )
    Category.create!(
      name: 'Toys & Entertainment'
    )
    Category.create!(
      name: 'Home & Living'
    )
    Category.create!(
      name: 'Art & Collectibles'
    )
    Category.create!(
      name: 'Clothing & Shoes'
    )
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
  product1= Product.create!({
        product_name: "Gengar VMAX (Alternate Art Secret) - SWSH08: Fusion Strike (SWSH08)",
        seller_id: 2,
        description: "Alternate-art Gengar VMAX is one of the most-desired cards from 
        Fusion Strike thanks to illustrator sowsow's charming-yet-chilling depiction of Gigantamax Gengar. 
        According to the Pokémon Shield Pokédex, if you stand near its mouth, you'll hear your loved ones' voices calling out to you.",
        price:"199.89",
        availability:2,
        store_id: 2,
        category_id: 1
      })
    product1_pic = File.open('./app/asset/images/253266.jpg')
    product1.photo.attach(io:product1_pic, filename: "253266.jpg")
      
   product2= Product.create!({
        product_name: "Umbreon VMAX (Alternate Art Secret) - SWSH07: Evolving Skies (SWSH07)",
        seller_id: 2,
        description: "The Secret Rare alternate-art version of Umbreon VMAX that depicts Dynamax Umbreon trying to boop the moon is the most popular card in Evolving Skies,
         and arguably the most coveted Pokémon card in the entire Sword & Shield Series.",
        price:"505.00",
        availability:1,
        store_id: 2,
        category_id:1
      })
      product2_pic = File.open('./app/asset/images/product_2.jpg')
      product2.photo.attach(io:product2_pic, filename: "product_2.jpg")
  product3= Product.create!({
        product_name: "Pikachu Large Microbead Plush - 13 ¾ In",
        seller_id: 3,
        description: "Just when you thought it wasn't possible, Pikachu has gotten even cuter than ever before! This microbead plush features the famous Electric-type Pokémon from Kanto in the form of a rotund orb with tiny arms and feet. 
        At a size like this, Pikachu makes a great cuddle buddy for cozy evenings on the couch.",
        price:"35.99",
        availability:25,
        store_id: 3,
        category_id:3
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
      category_id:3
  })
    product4_pic = File.open('./app/asset/images/product_4.jpg')
    product4.photo.attach(io:product4_pic, filename: "product_4.jpg")
  product5= Product.create!({
      product_name: "White Seersucker Ruffled Duvet Cover Set, Princess Bedding Set Summer, 
      Cute Girlish Bedding Set, Twin Full Queen King Duvet Cover Set, Gifts",
      seller_id: 1,
      description: "Guaranteed levels of live, natural probiotics, 
      natural omegas and antioxidants support digestive health, healthy skin and coat, and immune health.",
      price:"32.00",
      availability:10,
      store_id: 1,
      category_id:4
    })
    product5_pic = File.open('./app/asset/images/product_5.jpg')
    product5.photo.attach(io:product5_pic, filename: "product_5.jpg")

  product6= Product.create!({
      product_name: "Cinnamon & Sandalwood Duvet Cover / Reversible dual Color Duvet 
      Cover With 4 Matching Pillow Case / Tobacco Duvet Cover Set",
      seller_id: 1,
      description: Faker::Lorem.sentence(word_count:20),
      price:"200.89",
      availability:1,
      store_id: 1,
      category_id:4
    })
    product6_pic = File.open('./app/asset/images/product_6.jpg')
    product6.photo.attach(io:product6_pic, filename: "product_6.jpg")
    product7= Product.create!({
      product_name: "Linen Duvet Cover Set. Soft Organic Linen Bedding Set in 30 colors. Twin Full King Queen CalKing Duvet Cover and two pillowcases. Bedding",
      seller_id: 1,
      description: Faker::Lorem.sentence(word_count:100),
      price:"172.72",
      availability:99,
      store_id: 1,
      category_id:4
    })
    product7_pic = File.open('./app/asset/images/product_7.jpg')
    product7.photo.attach(io:product7_pic, filename: "product_7.jpg")
    
    product8= Product.create!({
      product_name: "Small Teddy bear made with your dog's or cat's fur! The sweater is optional.",
      seller_id: 4,
      description: Faker::Lorem.sentence(word_count:50),
      price:"69.00",
      availability:1,
      store_id: 4,
      category_id:2
    })
    product8_pic = File.open('./app/asset/images/product_8.jpg')
    product8.photo.attach(io:product8_pic, filename: "product_8.jpg")
    product9= Product.create!({
      product_name: "Pet Blanket | Chewable Blanket | Pets love to eat it especially cats",
      seller_id: 4,
      description: Faker::Lorem.sentence(word_count:80),
      price:"1.00",
      availability:1,
      store_id: 4,
      category_id:6
    })
    product9_pic = File.open('./app/asset/images/product9.jpg')
    product9.photo.attach(io:product9_pic, filename: "product9.jpg")
    product10= Product.create!({
      product_name: "Custom Pet Pillow | Personalized Pillow | Pet Memorial Gift | Custom shaped pillow | Dog Pillow | Cat Pillow | Pet Lover Gift",
      seller_id: 4,
      description: Faker::Lorem.sentence(word_count:100),
      price:"14.20",
      availability:1,
      store_id: 4,
      category_id:2
    })
    product10_pic = File.open('./app/asset/images/product_10.jpg')
    product10.photo.attach(io:product10_pic, filename: "product_10.jpg")


end