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
      name:'Pokemon & Pokemon Cards'
    )
    Category.create!(
      name: 'Pets & Pet Supplies'
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
        product_name: "Pikachu Pokémon Large Microbead Plush - 13 ¾ In",
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

    product11= Product.create!({
      product_name: "Gigantamax Gengar Poké Plush - 14 ½ In.",
      seller_id: 3,
      description: "Looking eerily similar to a haunted house, 
      this Gigantamax Gengar plush beckons you to battle—if you're not too scared, 
      that is! With its mouth opened wide and its tongue sticking out, it's certain to shock everyone who steps foot in your home.",
      price:"47.99",
      availability:99,
      store_id: 3,
      category_id:3
  })
  product11_pic = File.open('./app/asset/images/product_11.jpg')
  product11.photo.attach(io:product11_pic, filename: "product_11.jpg")

  product12= Product.create!({
    product_name: "Snorlax Pokémon Pumpkin Celebration Poké Plush - 9 ¼ In.",
    seller_id: 3,
    description: "What's a bit silly, a bit spooky, and a whole lot of fun? It's the Pokémon Pumpkin Celebration! 
    This Snorlax plush seems to be taking it easy during the lively celebration, as it's lying down and enjoying a plate of dinner with cookies by its side. 
    It also has a couple of pumpkins shaped like Snorlax and Munchlax! If the celebration is too much for you, come chill next to Snorlax!",
    price:"19.99",
    availability:99,
    store_id: 3,
    category_id:3
})
product12_pic = File.open('./app/asset/images/product_12.jpg')
product12.photo.attach(io:product12_pic, filename: "product_12.jpg")

product13= Product.create!({
  product_name: "Cactus Print, Printable Wall Art, Modern Home Decor, 2 Piece Print Set, Desert Wall Art, Botanical Print Set, Cactus Wall Art Prints, Scandi",
  seller_id: 3,
  description: "Desert Cactus Wall Art #122c Set Of 2 Printable Wall Art offered in a choice of sizes below.

  ( Printable Wall Art, Modern Home Decor, Cactus Print, Set Of 2 Prints, Desert Wall Decor, Botanical Print Set, Cactus Wall Art Prints, Boho, Desert Cactus Prints, Wall Decor, Cactus Wall Decor, Cactus, Nursery Decor, Prints, Succulents, Art Prints, Australia )
  
  This is an INSTANT DOWNLOAD of a set of 2 matching prints of the timeless and iconic Eulychnia Desert Cactus featuring soft shades of moss and mint greens that I photographed in a garden I was exploring.",
  price:"20.39",
  availability:99,
  store_id: 5,
  category_id:5
})
product13_pic = File.open('./app/asset/images/product_13.jpg')
product13.photo.attach(io:product13_pic, filename: "product_13.jpg")

product14= Product.create!({
  product_name: "Best Christmas Gift,Hand-Carved Painted Orange Cat Figurines | Wooden Animal | Home Decor Sculpture Ornament | Personalized Gift",
  seller_id: 3,
  description: "Painted wooden orange cat ornaments are handcrafted from carved wood and hand-painted in different shades of paint. the orange cat looks cute and funny and comes to life.
  Ships from the US. You will receive it in about 2-7 days.
  The perfect gift for animal lovers, kids or family, or your own collection!
  You can use it as home decoration, gift, table decoration, etc.",
  price:"25.99",
  availability:99,
  store_id: 5,
  category_id:5
})
product14_pic = File.open('./app/asset/images/product_14.jpg')
product14.photo.attach(io:product14_pic, filename: "product_14.jpg")

product15= Product.create!({
  product_name: "Nursery Decor, Nursery Art, Mint Nursery, Instant Downloads, Nursery Print, Ferris Wheel, Wall Art Prints, Nursery Wall Art, Pastel Mint",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:200),
  price:"19.39",
  availability:99,
  store_id: 5,
  category_id:5
})
product15_pic = File.open('./app/asset/images/product_15.jpg')
product15.photo.attach(io:product15_pic, filename: "product_15.jpg")

product16= Product.create!({
  product_name: "Christmas Sweatshirts for Women, Merry and Bright Sweatshirt, Christmas Holiday Sweatshirt for Women, Christmas Sweatshirt, Christmas Gift",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:200) ,
  price:"14.99",
  availability:99,
  store_id: 4,
  category_id:6
})
product16_pic = File.open('./app/asset/images/product_16.jpg')
product16.photo.attach(io:product16_pic, filename: "product_16.jpg")

pet3= Product.create!({
  product_name: "Pet Memorial Stone | Granite Headstone for your dog, cat or any pet | Stone marker personalized and engraved",
  seller_id: 4,
  description:Faker::Lorem.sentence(word_count:200) ,
  price:"28.06",
  availability:50,
  store_id: 4,
  category_id:2
})
pet3_pic = File.open('./app/asset/images/pet3.jpg')
pet3.photo.attach(io:pet3_pic, filename: "pet3.jpg")

pet4= Product.create!({
  product_name: "Dog Toy Basket,Personalized Pet Toy Bin,Custom Dog Storage Box,Cat Toy Bag,Foldable Dog Toy Organizer,Dog Gift Basket,New Puppy Gift Basket",
  seller_id: 4,
  description:Faker::Lorem.sentence(word_count:200) ,
  price:"17.92",
  availability:50,
  store_id: 4,
  category_id:2
})
pet4_pic = File.open('./app/asset/images/pet4.jpg')
pet4.photo.attach(io:pet4_pic, filename: "pet4.jpg")
pet5= Product.create!({
  product_name: "Mini Custom Watercolor Pet Portrait, Dog Portraits from Photos,Dog Portraits From Photos, Pet Painting, Custom Tiny Paintings, Miniature",
  seller_id: 4,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"29.99",
  availability:50,
  store_id: 4,
  category_id:2
})
pet5_pic = File.open('./app/asset/images/pet5.jpg')
pet5.photo.attach(io:pet5_pic, filename: "pet5.jpg")

pet6= Product.create!({
  product_name: "Custom Pet Portrait, Cat Portrait, Dog Portrait, Personalised Pet Portrait from Photo, Pet Memorial, Personalised Gift, Unique Gift, UK & US",
  seller_id: 4,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"28.06",
  availability:50,
  store_id: 4,
  category_id:2
})
pet6_pic = File.open('./app/asset/images/pet6.jpg')
pet6.photo.attach(io:pet6_pic, filename: "pet6.jpg")

pet7= Product.create!({
  product_name: "Custom Pet Portraits Set of 3, Funny Dog or Cat Portrait, Pet in Bathtub, Dog in Toilet, Personalized pet gift, Kids Bathroom Art, Dog Mom",
  seller_id: 4,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"31.91",
  availability:99,
  store_id: 4,
  category_id:2
})
pet7_pic = File.open('./app/asset/images/pet7.jpg')
pet7.photo.attach(io:pet7_pic, filename: "pet7.jpg")

pet8= Product.create!({
  product_name: "Personalized Dog Leash Holder, Dog Butt Leash Holder for Wall, Gift for Dogs, Engagement Gift Dog, Mudroom Hook, Dog Hanging Sign",
  seller_id: 4,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"42.00",
  availability:10,
  store_id: 4,
  category_id:2
})
pet8_pic = File.open('./app/asset/images/pet8.jpg')
pet8.photo.attach(io:pet8_pic, filename: "pet8.jpg")

toy5= Product.create!({
  product_name: "Lost for Words, a personalized book featuring father and child - a perfect gift for dads",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"40.00",
  availability:99,
  store_id: 3,
  category_id:3
})
toy5_pic = File.open('./app/asset/images/toy5.jpg')
toy5.photo.attach(io:toy5_pic, filename: "toy5.jpg")

toy6= Product.create!({
  product_name: "Stack the Cats! Cat lover gift. Bag of twelve mini wooden cats",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"17.80",
  availability:99,
  store_id: 3,
  category_id:3
})
toy6_pic = File.open('./app/asset/images/toy6.jpg')
toy6.photo.attach(io:toy6_pic, filename: "toy6.jpg")

toy7= Product.create!({
  product_name: "New 12pcs Bamboo Wood Crochet Hooks,Weave Craft ,Crocheted Tools,Size 3-10mm",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150) ,
  price:"6.87",
  availability:99,
  store_id: 3,
  category_id:3
})
toy7_pic = File.open('./app/asset/images/toy7.jpg')
toy7.photo.attach(io:toy7_pic, filename: "toy7.jpg")

toy8= Product.create!({
  product_name: "Wooden Toy Train. The No Paint Special. A handmade toy. A natural wood toy.",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"6.87",
  availability:99,
  store_id: 3,
  category_id:3
})
toy8_pic = File.open('./app/asset/images/toy8.jpg')
toy8.photo.attach(io:toy8_pic, filename: "toy8.jpg")

art4= Product.create!({
  product_name: "Japanese Art, Hokusai Under the great wave off Kanagawa, 1832 | Vintage Poster Wall Art Print |",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"34.5",
  availability:99,
  store_id: 5,
  category_id:5
})
art4_pic = File.open('./app/asset/images/art4.jpg')
art4.photo.attach(io:art4_pic, filename: "art4.jpg")

art5= Product.create!({
  product_name: "Deer Print, Woodland Nursery, Nursery Wall Art, Printable Art, Deer Head, Nursery Decor, Woodland Animal Print, Downloadable Prints, Poster",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"6.99",
  availability:99,
  store_id: 5,
  category_id:5
})
art5_pic = File.open('./app/asset/images/art5.jpg')
art5.photo.attach(io:art5_pic, filename: "art5.jpg")

art6= Product.create!({
  product_name: "Art Print Flowery Brain collage Printed on Vintage Dictionary Book page. Wall decor art, Anatomy decor, Flower print art",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"5.99",
  availability:99,
  store_id: 5,
  category_id:5
})
art6_pic = File.open('./app/asset/images/art6.jpg')
art6.photo.attach(io:art6_pic, filename: "art6.jpg")

art7= Product.create!({
  product_name: "Amethyst Crystal Sun Catcher, Suncatcher with Gemstone, Rainbow Maker, Prism Suncatcher, Indie Room Decor, Boho Housewarming Gift",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"11.59",
  availability:99,
  store_id: 5,
  category_id:5
})
art7_pic = File.open('./app/asset/images/art7.jpg')
art7.photo.attach(io:art7_pic, filename: "art7.jpg")

art8= Product.create!({
  product_name: "Cat - Recycled Garden Art Sculpture",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"60.00",
  availability:5,
  store_id: 5,
  category_id:5
})
art8_pic = File.open('./app/asset/images/art8.jpg')
art8.photo.attach(io:art8_pic, filename: "art8.jpg")

pokemon3= Product.create!({
  product_name: "Pokemon Trading Card Game: Sword and Shield Silver Tempest Elite Trainer Box",
  seller_id: 2,
  description:Faker::Lorem.sentence(word_count:150),
  price:"39.99",
  availability:10,
  store_id: 2,
  category_id:1
})
pokemon3_pic = File.open('./app/asset/images/pokemon3.jpg')
pokemon3.photo.attach(io:pokemon3_pic, filename: "pokemon3.jpg")

pokemon4= Product.create!({
  product_name: "Pokemon Trading Card Game: Pikachu and Zekrom-GX Premium Collection GameStop Exclusive",
  seller_id: 2,
  description:Faker::Lorem.sentence(word_count:150),
  price:"39.99",
  availability:10,
  store_id: 2,
  category_id:1
})
pokemon4_pic = File.open('./app/asset/images/pokemon4.jpg')
pokemon4.photo.attach(io:pokemon4_pic, filename: "pokemon4.jpg")

pokemon5= Product.create!({
  product_name: "Pokemon Snorlax Novelty Mug",
  seller_id: 2,
  description:Faker::Lorem.sentence(word_count:150),
  price:"19.99",
  availability:10,
  store_id: 2,
  category_id:1
})
pokemon5_pic = File.open('./app/asset/images/pokemon5.jpg')
pokemon5.photo.attach(io:pokemon5_pic, filename: "pokemon5.jpg")

pokemon6= Product.create!({
  product_name: "Jazwares Pokemon Pikachu Deluxe Collector 13-in Statue",
  seller_id: 2,
  description:Faker::Lorem.sentence(word_count:150),
  price:"24.98",
  availability:10,
  store_id: 2,
  category_id:1
})
pokemon6_pic = File.open('./app/asset/images/pokemon6.jpg')
pokemon6.photo.attach(io:pokemon6_pic, filename: "pokemon6.jpg")

pokemon7= Product.create!({
  product_name: "Pokemon Pikachu Ramen Bowl with Chopsticks",
  seller_id: 2,
  description:Faker::Lorem.sentence(word_count:150),
  price:"24.99",
  availability:10,
  store_id: 2,
  category_id:1
})
pokemon7_pic = File.open('./app/asset/images/pokemon7.jpg')
pokemon7.photo.attach(io:pokemon7_pic, filename: "pokemon7.jpg")

pokemon8= Product.create!({
  product_name: "PowerA Enhanced Wired Controller for Nintendo Switch - Pokemon Pixel Pikachu",
  seller_id: 2,
  description:Faker::Lorem.sentence(word_count:150),
  price:"19.99",
  availability:10,
  store_id: 2,
  category_id:1
})
pokemon8_pic = File.open('./app/asset/images/pokemon8.jpg')
pokemon8.photo.attach(io:pokemon8_pic, filename: "pokemon8.jpg")

clothes3= Product.create!({
  product_name: "Minimalist Chest Bag, Nylon Dumpling Bag, School Travel Shoulder Bag, Casual Crossbody Bag, Saddle Bag, Messenger Bag, Half Moon Bag Women",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"20.17",
  availability:99,
  store_id: 4,
  category_id:6
})
clothes3_pic = File.open('./app/asset/images/clothes3.jpg')
clothes3.photo.attach(io:clothes3_pic, filename: "clothes3.jpg")

clothes4= Product.create!({
  product_name: "Auntie Best Auntie Ever Womens T Shirt Auntie Shirt I love my Aunt Gift for Aunt Funny shirt I love my Aunt",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"15.85",
  availability:99,
  store_id: 4,
  category_id:6
})
clothes4_pic = File.open('./app/asset/images/clothes4.jpg')
clothes4.photo.attach(io:clothes4_pic, filename: "clothes4.jpg")

clothes5= Product.create!({
  product_name: "me and mama Whale Sweatshirt, Gift for Mom, Whale Gift, Cute Sweatshirt, Yoga Top, New Mom, Baby Shower, Blue Whale",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"37.80",
  availability:99,
  store_id: 4,
  category_id:6
})
clothes5_pic = File.open('./app/asset/images/clothes5.jpg')
clothes5.photo.attach(io:clothes5_pic, filename: "clothes5.jpg")

clothes6= Product.create!({
  product_name: "Penguin Feet Slippers for Adults",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"29.00",
  availability:99,
  store_id: 4,
  category_id:6
})
clothes6_pic = File.open('./app/asset/images/clothes6.jpg')
clothes6.photo.attach(io:clothes6_pic, filename: "clothes6.jpg")

clothes7= Product.create!({
  product_name: "Touch Me And I Will Bite You Stitch Hoodie, Disney Stitch Hoodie, Lilo And Stitch, Disney Movie Sweatshirt, Ohana Means Family Shirt, Gift",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"25.50",
  availability:99,
  store_id: 4,
  category_id:6
})
clothes7_pic = File.open('./app/asset/images/clothes7.jpg')
clothes7.photo.attach(io:clothes7_pic, filename: "clothes7.jpg")

clothes8= Product.create!({
  product_name: "Unisex Love Yourself Hoodie, Love Yourself Heart Hoodie, Love Yourself Oversized Hoodie, Bangtan Boys Hoodie, Korean Music Group",
  seller_id: 3,
  description:Faker::Lorem.sentence(word_count:150),
  price:"21.59",
  availability:99,
  store_id: 4,
  category_id:6
})
clothes8_pic = File.open('./app/asset/images/clothes8.jpg')
clothes8.photo.attach(io:clothes8_pic, filename: "clothes8.jpg")

home4= Product.create!({
  product_name: "Horse Led Lights Table Lamp Gift for Kids. Equestrian Gifts Acrylic Light Art Deco Lamp. Horse Gifts Night Light 3D Led Lamp Kids Desk Decor",
  seller_id: 1,
  description:Faker::Lorem.sentence(word_count:150),
  price:"29.39",
  availability:20,
  store_id: 1,
  category_id:4
})
home4_pic = File.open('./app/asset/images/home4.jpg')
home4.photo.attach(io:home4_pic, filename: "home4.jpg")

home5= Product.create!({
  product_name: "MOOSHIE™ Table Lamp - Mushroom Lamp - Desk Lamp - Mood Lamp - Designed and Crafted by Honey & Ivy Studio in Portland, OR",
  seller_id: 1,
  description:Faker::Lorem.sentence(word_count:150),
  price:"34.99",
  availability:20,
  store_id: 1,
  category_id:4
})
home5_pic = File.open('./app/asset/images/home5.jpg')
home5.photo.attach(io:home5_pic, filename: "home5.jpg")

home6= Product.create!({
  product_name: "Mid century Modern Lounge Chair, Retro Chair, Handmade Lounge Chair",
  seller_id: 1,
  description:Faker::Lorem.sentence(word_count:150),
  price:"1240.00",
  availability:20,
  store_id: 1,
  category_id:4
})
home6_pic = File.open('./app/asset/images/home6.jpg')
home6.photo.attach(io:home6_pic, filename: "home6.jpg")

home7= Product.create!({
  product_name: "Solid Walnut Key Hook Entryway Organizer, Mail Holder, Key Hooks with Mail Holder, Wall Mount Key Hooks, Mail Organizer",
  seller_id: 1,
  description:Faker::Lorem.sentence(word_count:150),
  price:"115.00",
  availability:20,
  store_id: 1,
  category_id:4
})
home7_pic = File.open('./app/asset/images/home7.jpg')
home7.photo.attach(io:home7_pic, filename: "home7.jpg")

home8= Product.create!({
  product_name: "Wild Mushroom Lights, Glass Container Lights Night Lights Morel Mushroom Lights, Handmade Morel Lights, USB Gift Lights",
  seller_id: 1,
  description:Faker::Lorem.sentence(word_count:150),
  price:"62.89",
  availability:20,
  store_id: 1,
  category_id:4
})
home8_pic = File.open('./app/asset/images/home8.jpg')
home8.photo.attach(io:home8_pic, filename: "home8.jpg")
end