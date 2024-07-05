const dbContents = {
    products: [
        {
            name: "Baby Florida Ghost (Philodendron)",
            description:
                "This is a ghost you do want in your house! ;) The Philodendron Florida Ghost is a very rare plant with amazing abilities. Young leaves turn white and slowly fade to green. With this baby, you can see the whole process and all the stages between white and green, which is really enchanting. It is from these white leaves that she gets her name 'Ghost', which she has honestly earned. On top of this super cool colour change, she also has a very unique leaf shape. All in all a great plant that will steal the show in your urban jungle!",
            image: "bby_florida_ghost.png",
            stock: 1,
            price: 32.45,
            trending: false,
            slug: "baby-florida-ghost",
        },
        {
            name: "Baby Frydek (Alocasia, Elephant Ears)",
            description:
                "The Alocasia Frydek is also known as the Green Velvet Alocasia because of its velvety leaves. You can recognise her by her arrow-shaped foliage with beautiful bright white veins. Even as a baby it almost look like she is glowing! How cute that you can raise your own baby Alocasia Frydek? Witness every new leaf of this cute BabyPLNT and don't forget to capture these moments, because before you know it, she's big!",
            image: "bby_frydek.png",
            stock: 2,
            price: 8.75,
            trending: false,
            slug: "baby-frydek",
        },
        {
            name: "Baby Jacklyn (Alocasia, Elephant Ears)",
            description:
                "This Baby Alocasia is one with extraordinary leaf shape! This is the Alocasia Jacklyn and she is really something special. These amazing leaves are covered in dark green nerves, a real artwork from head to toe… uuh, leaves to roots. :) This plant is not known by many PLNTSlovers yet, since she was only discovered pretty recently. Don't hesitate to add this rare beauty to your ever growing home!",
            image: "bby_jacklyn.png",
            stock: 3,
            price: 14.95,
            trending: true,
            slug: "baby-jacklyn",
        },
        {
            name: "Baby Melanochrysum (Philodendron)",
            description:
                "Have you ever seen a cuter Philodendron Melanochrysum? This stunning rare plant is known for her long leaves with velvet look to them. New leaves start out with a fleshy pink tone that will fade down into a very dark green colour. She can have some gold accents on her leaves as well, which contrasts her dark base beautifully! She is a climber and would love to have something to grow onto.",
            image: "bby_melanochrysum.png",
            stock: 3,
            price: 14.45,
            trending: true,
            slug: "baby-melanochrysum",
        },
        {
            name: "Baby Obliqua (Monstera)",
            description:
                "The Obliqua is already the smallest species of the Monstera family, but this baby must be the tiniest one! Isn't she the cutest? The Monstera Obliqua stands out with her extremely fenestrated leaves and frayed leaf edges. This unicorn plant is the one for rare plant collectors. No matter how big your collection will grow, this plant will take her moment of shine! Will this baby also shine within your collection? Buy Monstera Oblique online. ",
            image: "bby_obliqua.png",
            stock: 3,
            price: 29.45,
            trending: true,
            slug: "baby-obliqua",
        },
        {
            name: "Baby Pink Princess (Philodendron)",
            description:
                "Isn't she pretty and cute! The Philodendron Pink Princess baby. She has beautiful dark green leaves, in the shape of arrows, that are decorated with an explosion of pink colour. Even the undersides of her leaves have an amazing red/coppery hue. She really is a living work of art. Luckily she is now also available as baby plant, so with your care and love, she will grow into a bigger and beautiful princess. Try to keep your eyes off her!",
            image: "bby_pink_princess.png",
            stock: 3,
            price: 12.45,
            trending: true,
            slug: "baby_pink_princess",
        },
        {
            name: "Baby Rowleyanus (Senecio, String of pearls)",
            description:
                "The baby Ceropegia Woodii is also known as the ‘string of hearts' or the Chinese lantern plant. She's a popular hanging plant which takes her name from the little heart-shaped leaves which hang down on thin stems. The Baby Ceropegia Woodii String of Hearts originates from Zimbabwe and South Africa. Here she grows between the rocks, hanging down in long strings. She'll be just as happy in your warm home and will grow well, but be sure to put her in a pot on a higher cupboard or opt for a hanging pot, because her strands can grow up to 3 metres long!",
            image: "bby_rowleyanus.png",
            stock: 3,
            price: 6.95,
            trending: true,
            slug: "baby-rowleyanus",
        },
        {
            name: "Baby Thai Constellation (Monstera)",
            description:
                "Here is the most beloved and rare Thai Constellation. To make her even more desirable, this is the cute baby form! She earns her name on her variegation that looks like a constellation. In contrast to most variegated plants, the Thai's variegation is stable, yay! This is because she was especially produced for this, which also means that you will not be able to find this cutie anywhere in nature. All with all, a very special plant that would love a spot inside your urban jungle!",
            image: "bby_thai_constellation.png",
            stock: 3,
            price: 44.95,
            trending: true,
            slug: "baby-thai-constellation",
        },
        {
            name: "Baby Warocqueanum (Anthurium, Flamingo flowers)",
            description:
                "This small baby will grow into a magnificent plant with huge leaves! This is the Anthurium Warocqueanum and she is loved for her rich and dark foliage. With this baby you have the chance to admire her growth in every life stage, which is pretty fascinating. One glance at her and you will fall for her, so be careful! ;) Oh, you have peeked haven't you? Don't worry you can buy Anthurium Warocqueanum here online.",
            image: "bby_warocqueanum.png",
            stock: 3,
            price: 32.45,
            trending: true,
            slug: "baby-warocqueanum",
        },
        {
            name: "Baby Zebrina (Alocasia, Elephant Ears)",
            description:
                "The baby Alocasia Zebrina is the princess of the plant savannah. With her beautiful zebra-striped stems she is a feast for the eyes. In nature her leaves grow so big that Alocasias are often called the ‘elephant's ear' plant. For many animals in the South East Asian rainforest, the leaves of the Alocasia Zebrina, which can sometimes grow up to 100 centimetres in size, offer a safe hiding place. With your care she will grow into a beautiful houseplant and you'll never get tired of the compliments!",
            image: "bby_zebrina.png",
            stock: 3,
            price: 7.45,
            trending: true,
            slug: "Baby-Zebrina",
        },
        {
            name: "Aquatica (Pachira, Money tree)",
            description:
                "The braided Pachira Aquatica is a beautiful plant with a braided trunk. Despite her Latin American roots, the Pachira Aquatica is best known in Asia. Her leaves are five-pointed and therefore symbolic in feng shui. She is a real asset as a large houseplant, as she grows fast! In nature, it can even grow up to 25 metres tall! You would then almost say she is a tree rather than a houseplant. Is this braied beauty something for you? Buy Pachira Aqautica here.",
            image: "aquatica.png",
            stock: 3,
            price: 82.45,
            trending: true,
            slug: "aquatica",
        },
        {
            name: "Charlotte (Schefflera, Umbrella tree)",
            description:
                "The Schefflera Charlotte is often called an umbrella tree, and her variegated leaves make her an eye-catching addition to any plant collection. The characteristic parasol-shaped spreads of leaves are elongated and might remind you of a hand. An easygoing native of China and Taiwan, she will quickly turn out to be one of your favs, because she can make herself at home anywhere. One tip though- she's happiest when you dust her regularly, because her big leaves catch a lot of dust.",
            image: "charlotte.png",
            stock: 3,
            price: 12.95,
            trending: true,
            slug: "charlotte",
        },
        {
            name: "Coconut (Palm, Cocos nucifera)",
            description:
                "The Cocos Nucifera, better known as “Coconut Palm”, is a green houseplant that is part of, you guessed it, the palm family! This tropical beauty is extra special since the plant grows directly from a coconut. Despite not having many leaves, the Coconut Palm still scores well at filtering the air. This is because palms are naturally very adept air filterers. Will this Coconut Palm filter the air inside your urban jungle? Order Coconut Palm online.",
            image: "coconut.png",
            stock: 3,
            price: 22.95,
            trending: true,
            slug: "coconut",
        },
        {
            name: "Deliciosa Variegated (Monstera)",
            description:
                "The Monstera ''Borsigiana'' Deliciosa Variegated is a real show stopper! Her leaves are big, beautiful and heart-shaped, just like a regular Monstera Deliciosa. The thing that makes her special is the deviating colour on her leaves. Her white small paint-like splotches and dots on the leaves make her a stunning piece of art. Variegation is extremely rare, as it is a difficult process to create genetic mutations, so you have to be quick if you want to become her PLNTSparent!",
            image: "deliciosa_variegated.png",
            stock: 3,
            price: 104.95,
            trending: true,
            slug: "deliciosa-variegated",
        },
        {
            name: "Dragon Jade (Dischidia, Dischidia Nummularifolia)",
            description:
                "This beauty is known for its stacked foliage which looks like it came right out of a fairytale! This couldn't be any other plant than the Dischidia Dragon Jade, which also hints to that enchanting look of hers! Its luscious, cascading leaves create a dreamy vibe, making every day feel like a stroll through a magical woodland. The vibrant green hues and intricate patterns make it a total eye-catcher—seriously, it's like having a piece of nature's artwork right in your room. Are you adding this little piece of fairytale to your urban jungle? Buy Dischidia Nummularifolia online.",
            image: "dragon_jade.png",
            stock: 3,
            price: 13.95,
            trending: true,
            slug: "dragon-jade",
        },
        {
            name: "Gageana (Alocasia, Elephant Ears)",
            description:
                "The Alocasia Gageana is like lots of Alocasias known as the Elephant Ear plant. She owes that name to her large, deep green, ribbed leaves which just look alike. This beauty likes to occupy a lot of space as she is used to in her natural environment. This way she is able to grow great heights and really show her splendour within your room.",
            image: "gageana.png",
            stock: 3,
            price: 31.45,
            trending: true,
            slug: "gageana",
        },
        {
            name: "Lutescens (Dypsis, Golden Cane Palm)",
            description:
                "Are you a PLNTSlover that fancies something big and bold? This Dypsis Lutescens is everything you are longing for! This plant consists of multiple ‘palms' inside one pot, together they form this massive plant! She will definitely brighten up your house with her bright green pinnate leaves. You might have heard about this plant under the name ‘Butterfly Palm', which we think is a very fitting nickname for this stunner!",
            image: "lutescens.png",
            stock: 3,
            price: 113.45,
            trending: true,
            slug: "lutescens",
        },
        {
            name: "Lyrata Branched (Ficus, Fiddle Leaf Fig)",
            description:
                "The Ficus Lyrata, also known as the fig-leaf plant or violet leaf plant, is a huge feast for the eyes and is really one of our favourites. The beautiful large, strong heart-shaped leaves grow proudly upwards and give her a dignified appearance. This giant beauty is extra special as she has multiple branches. This way she easily fills up the room, not only in height but also in width!",
            image: "lyrata_branched.png",
            stock: 3,
            price: 143.45,
            trending: true,
            slug: "lyrata-branched",
        },
        {
            name: "Maculata (Begonia, Polka Dot)",
            description:
                "The Begonia Maculata is also known as the ‘Polka dot' Begonia or ‘Forel' Begonia. Its leaves are olive green and freckled with silvery-white spots on its upper surface. The reverse side is known for its eye-catching red-Bordeaux color. We advise you to place the Begonia Maculata in a spot with plenty of light and warmth. Prevent dehydration by watering the baby plant two times a week. Is this dotted cutie the one you like? Buy Begonia Maculata online.",
            image: "maculata.png",
            stock: 3,
            price: 15.45,
            trending: true,
            slug: "maculata",
        },
        {
            name: "Melanochrysum (Philodendron)",
            description:
                "Philodendron Melanochrysum is striking even among the stunning lineup that is the Philodendron family and is sometimes referred to as the Black Gold Philodendron because of the beautiful gold accents on her leaves. Her leaves, which start out like a fleshy pink before turning almost black with age, get bigger and bigger as she gets taller, so you can enjoy them even more! She is a climber so will be happiest when she has something like a mossy stick to climb up. This weird PLNT blends exotic and refined and will be the centerpiece of any display.",
            image: "melanochrysum.png",
            stock: 3,
            price: 42.45,
            trending: true,
            slug: "melanochrysum",
        },
        {
            name: "Oppenheimiana (Calathea, Prayer Plant)",
            description:
                "Calathea oppenheimiana, also known as Calathea ''Zebra Plant''. Originally from South America, she is known for her striking, dark green leaves with elongated white or yellow patterns, resembling the stripes of a zebra. Besides the beautiful patterns, the leaves of the Oppenheimiana also have a beautiful deep red colour on the back of the leaves. She will also 'close' her leaves at night to open again in the morning. The Calathea is therefore also called the living plant. Are you up for filling your house with greenery? Buy Calathea Oppenheimiana online.",
            image: "oppenheimiana.png",
            stock: 3,
            price: 89.95,
            trending: true,
            slug: "oppenheimiana",
        },
        {
            name: "Paradoxa Minor (Rhipsalis, Fishbone cactus) ",
            description:
                "The Rhipsalis Paradoxa Minor has a very distinctive look. She has long stems that can be thick, thin, straight or slightly curled. These cool stems hang from her pot, giving her a very noteworthy look! So if you are looking for a cool houseplant with an uncommon appearance, you have found your match! Buy Rhipsalis Paradoxa Minor online.",
            image: "paradoxa_minor.png",
            stock: 3,
            price: 70.95,
            trending: true,
            slug: "paradoxa-minor",
        },
        {
            name: "Pink Dragon (Alocasia, Elephant Ear)",
            description:
                "The Alocasia Pink Dragon is such a special plant and, contrary to what her name might suggest, she certainly does not have a dragon-like temper. This ultimate eye-catcher stands out with its pink stalks and metallic silver leaves. Once you see the Alocasia Pink Dragon you'll understand why it demands a special place in your living room!",
            image: "pink_dragon.png",
            stock: 3,
            price: 17.45,
            trending: true,
            slug: "pink-dragon",
        },
        {
            name: "Pinnatum Variegata (Epipremnum, Pothos) ",
            description:
                "Ready to be stunned by magnificent marble variegated leaves? Introducing the Epipremnum Pinnatum Variegata! With its vibrant green leaves adorned in captivating marble-like patterns, this gem is an absolute showstopper. No matter how many beauties grace your urban oasis, the Variegata effortlessly steals the spotlight. Are you prepared to be entranced by this rare gem? Buy Epipremnum Pinnatum Variegata online.",
            image: "pinnatum_variegata.png",
            stock: 3,
            price: 112.95,
            trending: true,
            slug: "pinnatum-variegata",
        },
        {
            name: "Ramulosa Red Coral (Rhipsalis)",
            description:
                "The Rhipsalis Ramulosa Red Coral has very special foliage. Her leaves are long and a bit thick. The edges are slightly frayed and the colour is mostly green. But when she receives enough light, she will get a red tint on her leaves, which makes her very extraordinary! This stunning foliage hangs from her pot, which makes her a perfect candidate for that empty place inside your cabinet! Is this pretty plant a match for you? Buy Rhipsalis Ramulosa Red Coral online.",
            image: "ramulosa_red_coral.png",
            stock: 3,
            price: 28.95,
            trending: true,
            slug: "ramulosa-red-coral",
        },
        {
            name: "Red Secret (Alocasia, Mirror plant)",
            description:
                "A beautiful room plant with large leaves. The Alocasia is also called Elephant's ear. Really an urban jungle plant that you will rarely encounter!",
            image: "red_secret.png",
            stock: 3,
            price: 15.45,
            trending: true,
            slug: "red-secret",
        },
        {
            name: "Regal Shield (Alocasia, Elephant Ear)",
            description:
                "The Alocasia Regal Shields is part of the Arum family and originates from Asia. It is also known as the Elephant Ear Regal Shields, and upon looking at it's beautiful large, dark green leaves it is easy to understand why it earned itself the nickname of Shield. Don't forget to take a look at the bottom of its leaves as well, these are a gorgeous shade of deep purple! Will this be your new Alocasia? Buy Alocasia Regal Shield online. ",
            image: "regal_shield.png",
            stock: 3,
            price: 38.45,
            trending: true,
            slug: "regal-shield",
        },
        {
            name: "Stingray (Alocasia, Elephant Ears)",
            description:
                "The Alocasia Stingray originates from the tropics of South East Asia. In the tropics the leaves of the Alocasia Stingray are used as a hideout because they can grow up till 1 meter wide. The Alocasia Stingray was named after the stingray because of the shape of its leaves. Are you going to adopt this pretty plant? Buy Alocasia Stingray online. ",
            image: "stingray.png",
            stock: 3,
            price: 14.45,
            trending: true,
            slug: "stingray",
        },
        {
            name: "Tineke (Ficus, Rubber tree plant)",
            description:
                "Ficus elastica 'Tineke' has large, striking oval leaves, just like her sister Robusta. What is special about Tineke, are her white variegated leaves that look a bit like a camouflage army uniform. The Ficus elastica is also known as the rubber tree. She earned this nickname thanks to the plant sap, that was once used for the production of rubber. Nowadays, this popular plant steals the show in many a living room, where she also provides purified air. NASA even proclaimed her one of the top-10 most air-purifying houseplants in the world!",
            image: "tineke.png",
            stock: 3,
            price: 48.95,
            trending: true,
            slug: "tineke",
        },
        {
            name: "Bird of Paradise (Strelitzia Nicolai)",
            description:
                "The Strelitzia Nicolai comes from South Africa and has beautiful large leaves that transform your house into a real jungle. In the wild the plant grows up to 10 meters high. In summer, the Strelitzia is very suitable to place on the terrace. This way you also create a real jungle vibe outside. As this plant grows older she will start splitting her leaves, this is perfectly normal! The splits are an evolutionary adaptation of the plant that allow wind to pass through the leaves.",
            image: "bird_of_paradise.png",
            stock: 3,
            price: 43.95,
            trending: true,
            slug: "bird-of-paradise",
        },
        {
            name: "Elho Vick Pot White",
            description:
                "Vick is one of the big boys. His soft white colour and basic shape make Vick very easygoing, fitting into any interior and with any large plant, including inner pot. But Vick is far from basic, the decorative pattern gives Vick a trendy look. This pot by Elho is made of 100% recycled plastic and is completely water-resistant. Vick is available for extra-large and king-size plants, this Vick has a diameter of 25 cm and is perfect for extra-large PLNTS.",
            image: "elho_vick_pot_white.png",
            stock: 3,
            price: 22.95,
            trending: true,
            slug: "elho-vick-pot-white",
        },
        {
            name: "Elho Miles Round Pot Green",
            description:
                "Miles is a beautiful basic pot with a sleek design. Miles is also very practical, as he has an integrated water reservoir so your plants always have enough water, he is waterproof and made of 100% recycled plastic. Miles is also frost-resistant so he can stand outside. With his round soft shape, the pot fits perfectly into any interior. Miles is available in three colours white, black and green and comes in two sizes suitable for extra-large and king-size plants. This pot has a diameter of 25 cm, making it perfect for extra-large plants.",
            image: "elho_miles_round_pot_green.png",
            stock: 3,
            price: 17.45,
            trending: true,
            slug: "elho-miles-round-pot-green",
        },
        {
            name: "Set of 5 Nursery Planters Ø 12 cm",
            description:
                "Nursery planters are the basis of any good plant care. Because there are holes in the bottom of the inner pot, water is given a chance to drain gradually, which helps against root rot. This fact keeps your plant and its roots happy, which is why we always recommend using a grow pot. Also, if your plant has grown and wants to be repotted, it is wise to use a larger inner pot. This set of 5 nursery planters (Ø 12 cm) is made of recycled plastic and also comes in a size larger of 15 cm diameter. They are available in sets of 5 and 10, perfect for a group of grown Baby and Medium PLNTS. Do you only have 1 plant that wants a new pot? Then the nursery planter that goes by the piece is there for you.",
            image: "set_of_5_nursery_planters_12_cm.png",
            stock: 3,
            price: 5.45,
            trending: true,
            slug: "set-of-5-nursery-planters-12-cm",
        },
        {
            name: "Set of 10 Nursery Planters Ø 15 cm",
            description:
                "Nursery planters are the basis of any good plant care. Because there are holes in the bottom of the inner pot, water is given a chance to drain gradually, which helps against root rot. This fact keeps your plant and its roots happy, which is why we always recommend using a grow pot. Also, if your plant has grown and wants to be repotted, it is wise to use a larger inner pot. This set of 10 nursery planters (Ø 15 cm) is made of recycled plastic and also comes in a size smaller of 12 cm diameter. They are available in sets of 5 and 10, perfect for a group of grown Baby and Medium PLNTS. Do you only have 1 plant that wants a new pot? Then the nursery planter that goes by the piece is there for you.",
            image: "set_of_10_nursery_planters_15_cm.png",
            stock: 3,
            price: 9.45,
            trending: true,
            slug: "set-of-10-nursery-planters-15-cm",
        },
        {
            name: "Hubert Pot Terra Ø 13.5 cm",
            description:
                "Our Hubert is sophisticated and classy, due to his rounded design. What makes him even more special is that he is made from an earthy material. He is made from concrete in a taupe colour. This material makes Hubert strong and will last for ages, which is the wish of every PLNTSparent, right? His natural vibe will compliment every plant and fit into every interior. He is available in the size medium, which has a diameter of 16,5 centimeters and a height of 18,5 centimeters. This makes Hubert a good match for our medium plants",
            image: "hubert_pot_terra.png",
            stock: 3,
            price: 28.95,
            trending: true,
            slug: "hubert.pot-terra",
        },
        {
            name: "Baby Lisa Pot Green Ø 7 cm",
            description:
                "Our Limited edition summer line will help you to add some colour and summer vibes into your home. Every plant will shine in this pot. We hope those stylish ceramics will make you and you plants as happy as it makes us! The collection is available for a limited time so be quick to order this summery plant pots.",
            image: "baby_lisa_pot_green.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "baby-lisa-pot-green",
        },
        {
            name: "Lisa Pot Dusty Petrol Ø 15 cm",
            description:
                "New season, new look for Lisa! She shines in some new trendy colors like dusty terracotta, ochre, and petrol, giving your interior a touch of vintage. Lisa comes in two sizes: 7 cm for the little ones and a generous 15 cm for our medium-sized green friends. Fun fact: these pots, coated with a glaze over the ceramic, come straight from the Netherlands. Give your plants that stylish upgrade with Lisa's sparkling new appearance!",
            image: "lisa_pot_dusty_petrol.png",
            stock: 3,
            price: 12.45,
            trending: true,
            slug: "lisa-pot-dusty-petrol",
        },
        {
            name: "Baby Otis Pot Ocher Ø 9 cm",
            description:
                "Meet Otis, your plant's new fashion statement! Originally in petrol and now also available in two new colours ochre and green. His retro-chic vibe, from the groovy shape to the glossy finish and textured design, fits the vintage aesthetic perfectly. Standing at 11 cm tall with a 10 cm diameter, it's the perfect space for your baby plants to shine.",
            image: "baby_otis_pot_ocher.png",
            stock: 3,
            price: 11.95,
            trending: true,
            slug: "baby-otis-pot-ocher",
        },
        {
            name: "Splanky Pot Green Blue Ø 22.5 cm",
            description:
                "Meet Splanky, the handmade pot from sunny Portugal! With its splashing glaze and unique design, Splanky brings those retro vibes to your urban jungle. With its beautiful glossy green-blue color, it's available in two sizes: 14 and 22.5 cm. Upgrade your plant game with the lively style of Splanky!",
            image: "splanky_pot_green_blue.png",
            stock: 3,
            price: 43.95,
            trending: true,
            slug: "splanky-pot-green-blue",
        },
        {
            name: "Sanny Pot Blue Ø 18 cm",
            description:
                "Introducing the Sanny Pot, your newest favorite for your plants! This pot is a stunning brown color with white speckles, adding a touch of uniqueness to your space. It's 18 centimeters in diameter, making it just the right size for your plants to thrive. The Sanny Pot is truly beautiful and would look great in many places around the house. Here's a tip: It blends well with other colors, so don't hesitate to place it next to other pots for a stylish arrangement!",
            image: "sanny_pot_blue.png",
            stock: 3,
            price: 11.37,
            trending: true,
            slug: "sanny-pot-blue",
        },
        {
            name: "Ava Pot Cream Ø 6.5 cm",
            description:
                "The Ava potting line is made of ceramics and based on natural earth tones. These earth tones provide warmth and a relaxing atmosphere.",
            image: "ava_pot_cream.png",
            stock: 3,
            price: 6.95,
            trending: true,
            slug: "ava-pot-cream",
        },
        {
            name: "Amy Basket Jute Ø 21 cm",
            description:
                "The Amy basket is for everyone who likes to add warm, natural tones in their house. It is made of braided jute and can function as a home for many plant sizes (M, L, XL). The natural colours of this cozy basket make your green friend stand out even more. The plastic, transparent lining inside makes sure that the basket doesn't leak, so this cutie can immediately claim its place on any kind of surface. *Recommended is to choose a plant with a nursery pot that is at least 1cm smaller than the diameter of the pot.",
            image: "amy_basket_jute.png",
            stock: 3,
            price: 16.45,
            trending: true,
            slug: "amy-basket-jute",
        },
        {
            name: "Barnie Basket Terra Ø 13 cm",
            description:
                "Give your urban jungle a natural and summery upgrade with Barnie! With its natural color and the option of a sleek black, cream-colored, or terracotta rim, he's not only stylish, but practical too. See that plastic liner? No dirt on the floor! ;) However, keep in mind, this doesn't make him waterproof, so placing a saucer at the bottom of the basket is a smart move against leakage. The basket comes in two sizes: 13 cm for average-sized plants and a spacious 27 and 34 cm set for the true jungle giants!",
            image: "barnie_basket_terra.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "barnie-basket-terra",
        },
        {
            name: "Barnie Basket Cream Ø 13 cm",
            description:
                "Give your urban jungle a natural and summery upgrade with Barnie! With its natural color and the option of a sleek black, cream-colored, or terracotta rim, he's not only stylish, but practical too... See that plastic liner? No dirt on the floor! ;) However, keep in mind, this doesn't make him waterproof, so placing a saucer at the bottom of the basket is a smart move against leakage. The basket comes in two sizes: 13 cm for average-sized plants and a spacious 27 and 34 cm set for the true jungle giants.",
            image: "barnie_basket_cream.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "barnie-basket-cream",
        },
        {
            name: "Barnie Basket Black Ø 13 cm",
            description:
                "Give your urban jungle a natural and summery upgrade with Barnie! With its natural color and the option of a sleek black, cream-colored, or terracotta rim, he's not only stylish, but practical too. See that plastic liner? No dirt on the floor! ;) However, keep in mind, this doesn't make him waterproof, so placing a saucer at the bottom of the basket is a smart move against leakage. The basket comes in two sizes: 13 cm for average-sized plants and a spacious 27 and 34 cm set for the true jungle giants!",
            image: "barnie_basket_black.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "barnie-basket-black",
        },
        {
            name: "Baby Orange Terracotta Pot Ø 7 cm",
            description:
                "Terracotta is a real classic but can be fragile. The image pictured is indicative, but please note that the pot you receive can contain small imperfections. Let's say they are 'perfectly imperfect' and unique in their very own way!",
            image: "baby_orange_terracotta_pot.png",
            stock: 3,
            price: 3.95,
            trending: true,
            slug: "baby-orange-terracotta-pot",
        },
        {
            name: "Orange Terracotta Pot Ø 20 cm",
            description:
                "Terracotta is a real classic but can be fragile. The image pictured is indicative, but please note that the pot you receive can contain small imperfections. Let's say they are 'perfectly imperfect' and unique in their very own way!",
            image: "orange_terracotta_pot_large.png",
            stock: 3,
            price: 10.95,
            trending: true,
            slug: "orange-terracotta-pot",
        },
        {
            name: "Orange Terracotta Pot Ø 14 cm",
            description:
                "Terracotta is a real classic but can be fragile. The image pictured is indicative, but please note that the pot you receive can contain small imperfections. Let's say they are 'perfectly imperfect' and unique in their very own way!",
            image: "orange_terracotta_pot_medium.png",
            stock: 3,
            price: 7.95,
            trending: true,
            slug: "orange-terracotta-pot-medium",
        },
        {
            name: "Grey Terracotta Pot Ø 14 cm",
            description:
                "Terracotta is a real classic but can be fragile. The image pictured is indicative, but please note that the pot you receive can contain small imperfections. Let's say they are 'perfectly imperfect' and unique in their very own way!",
            image: "gery_terracotta_pot_medium.png",
            stock: 3,
            price: 9.95,
            trending: true,
            slug: "gery-terracotta-pot-medium",
        },
        {
            name: "Grey Terracotta Pot Ø 20 cm",
            description:
                "Terracotta is a real classic but can be fragile. The image pictured is indicative, but please note that the pot you receive can contain small imperfections. Let's say they are 'perfectly imperfect' and unique in their very own way!",
            image: "grey_terracotta_pot_large.png",
            stock: 3,
            price: 10.95,
            trending: true,
            slug: "grey-terracotta-pot-large",
        },
        {
            name: "Atomizer Gold",
            description:
                "A atomizer, also known as a plant sprayer, is very important when caring for your plant. Many plants need high humidity because they are naturally used to it. This golden atomizer is not only handy, but also has a nice look that makes it a fun decorative item!",
            image: "atomizer_gold.png",
            stock: 3,
            price: 28.95,
            trending: true,
            slug: "atomizer-gold",
        },
        {
            name: "Terracotta Rain Watering Can",
            description:
                "If you want to water your (tender) seedlings, but also larger plants that does not flow down rock hard immediately but comes out gently from the watering can, then this thumb watering can is really recommended. This handmade terracotta thumb watering can consists of a hole at the top and small holes at the bottom that provides your plants with a lovely rain shower. How should you use the watering can? Hold the thumb watering can under water and let it fill up. Place your thumb on the hole at the top. Remove the watering can from the water and hold it over the seedling or plant you want to water. Remove your thumb from the hole and water the plant. Place your thumb back on the hole to stop the fine spray of water. It's that simple! You create a natural rain effect with this. Also, the thumb caster also serves for rinsing off pests.",
            image: "terracotta_watering_can.png",
            stock: 3,
            price: 12.45,
            trending: true,
            slug: "terracotta-watering-can",
        },
        {
            name: "Elho Manny Watering Set",
            description:
                "Manny is our basic water giver made from 100% recycled plastic and is also fully recyclable after use. Despite the fact that you won't get to this anytime soon because of Manny's timeless look and operation, we think this is a huge plus. The more Manny, the better! Because Manny will last a plant life, and with his help, that will be a very long life! ;) That's why we also have Manny as a set of watering can and sprinkler, ready to give your plants a good watering?",
            image: "elho_manny_watering_set.png",
            stock: 3,
            price: 20.45,
            trending: true,
            slug: "elho-manny-watering-set",
        },
        {
            name: "Ancho Watering Can Black",
            description:
                "With the Ancho Watering Can you will water your plants with extra joy! The Watering can is pretty in every interior as is it completely made of metal and available in three pretty colours: black, off white and green. Next to its beauty, the can has a cylinder shape with a capacity of approximately 1.2L, so enough excuses to show off this can while watering your green friends.",
            image: "ancho_watering_can_black.png",
            stock: 3,
            price: 20.95,
            trending: true,
            slug: "ancho-watering-can-black",
        },
        {
            name: "Ancho Watering Can Green",
            description:
                "With the Ancho Watering Can you will water your plants with extra joy! The Watering can is pretty in every interior as is it completely made of metal and available in three pretty colours: black, off white and green. Next to its beauty, the can has a cylinder shape with a capacity of approximately 1.2L, so enough excuses to show off this can while watering your green friends.",
            image: "ancho_watering_can_green.png",
            stock: 3,
            price: 20.95,
            trending: true,
            slug: "ancho-watering-can-green",
        },
        {
            name: "Haws Watering Can Copper",
            description:
                "It's time to water your PLNTS in style! With the Haws Watering Can (1L) you will never forget to water your beauty's again. The watering can is so pretty that you feel the need to show and use it! It has a classic watering can shape, available in 4 colours: green, grey, dark grey and copper. The can is easy to store or also to use as decoration.",
            image: "haw_watering_can_copper.png",
            stock: 3,
            price: 100.45,
            trending: true,
            slug: "haw-watering-can-copper",
        },
        {
            name: "Elho Plunge Watering Can Black",
            description:
                "The Plunge Watering Can will bring you some extra joy while watering your plants. Because of its unique, stylish appearance, it will also be a nice decoration piece. The black plastic watering can has a slim neck and a big filling opening, which makes it comfortable to hold. With a capacity of 1.7L will Plunge definitely be of great use when you're parent to multiple plants.",
            image: "elho_plunge_watering_can_black.png",
            stock: 3,
            price: 14.45,
            trending: true,
            slug: "elho-plunge-watering-can-black",
        },
        {
            name: "Potting Soil",
            description:
                "Give your plants a boost with our potting soil! This universal soil mixture is the ideal breeding ground that helps your plants grow. Do you want to repot your larger indoor plants and treat them to fresh potting soil packed with nutrients that will make them grow even bigger? Our Potting Soil can be used for all types of indoor plants.",
            image: "potting_soil.png",
            stock: 3,
            price: 6.45,
            trending: true,
            slug: "potting-soil",
        },
        {
            name: "Cutting Soil",
            description:
                "With all those beauties in your home, we can definitely imagine that you want to extend your plants family and grow your own babies! Our cutting soil is perfect for your cuttings to form roots and eventually grow into duplicates of your mother plant. IIt has a fine, compact and regular structure, which ensures even water and food supply and therefore prevents dehydration. If your cutting has developed good roots, you can repot her to our normal potting soil.",
            image: "cutting_soil.png",
            stock: 3,
            price: 3.95,
            trending: true,
            slug: "cutting-soil",
        },
        {
            name: "Sphagnum Moss",
            description:
                "Sphagnum Moss improves the structure of potting soil. This macho can hold up to 20 times its own weight of water! This keeps the potting soil always moist, which is especially appreciated by many tropical plants. If you have any moss left over, let's be creative! Because of the flexibility you can easily use it to create your own (hanging) basket or moss pole! The bags are around ~450 grams.",
            image: "sphagnum_moss.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "sphagnum-moss",
        },
        {
            name: "Hydro Grains",
            description:
                "Hydro Grains make the care of your plants much easier. The grains absorb moisture, not only from the soil but also from the roots! You can put them on the bottom or on top of the soil, so excess water is evenly distributed throughout the soil. The solution for pots without any drainage holes. Next to that the tiny grains loosen the soil. This provides the roots more oxygen, which makes your beauty look at her best! Hydro Grains may look fragile, but they can be used over and over again. They are basically indestructible, so definitely worth buying!",
            image: "hydro_grains.png",
            stock: 3,
            price: 4.95,
            trending: true,
            slug: "hydro-grains",
        },
        {
            name: "French Bark",
            description:
                "This natural substrate excels in drainage, ensuring optimal growing conditions for your plants. The bark creates a chunky structure within the soil, facilitating the efficient drainage of excess water while maintaining a loose texture that promotes root development. Additionally, it retains moisture, ensuring an evenly water distribution for growing roots.",
            image: "french_bark.png",
            stock: 3,
            price: 9.45,
            trending: true,
            slug: "french-bark",
        },
        {
            name: "Living Cushion Moss",
            description:
                "When you're a PLNTSparent and you're getting into the swing of creating your terrarium, these fun pillow mosses are an absolute must! You can use the living cushion moss to mimic heights, by creating hills for example, and lawns. This cushion moss has different shades of green to make it look as real as possible. You can trim each cushion moss to the size you want. But note, do this very carefully so that the clumps remain intact. The three cushion mosses are fine to place directly on top soil, on pebbles, gravel or sand. Just make sure there is sufficient drainage under the plant. You can occasionally mist the cushion moss pieces. Do you already have a fun terrarium design in mind with this cushion moss?",
            image: "living_cushion_moss.png",
            stock: 3,
            price: 5.45,
            trending: true,
            slug: "living-cushion-moss",
        },
        {
            name: "Lava Rocks",
            description:
                "Experience great aeration and drainage, promoting robust root development while preventing root rot. Our rocks also provide natural insulation, maintaining a cosy temperature around the roots.",
            image: "lava_rocks.png",
            stock: 3,
            price: 4.95,
            trending: true,
            slug: "lava-rocks",
        },
        {
            name: "Perlite",
            description:
                "This lightweight substrate is perfect for promoting healthy root development! Thanks to its airy and lightweight nature, roots easily navigate through the substrate. Perlite excels in drainage while also retaining moisture—the best of both worlds within this department! With a neutral pH, it provides a stable environment for newly developing roots.",
            image: "perlite.png",
            stock: 3,
            price: 6.45,
            trending: true,
            slug: "perlite",
        },
        {
            name: "Active Charcoal",
            description:
                "Active charcoal is perfect for when you want to plant your new friend in a pot without any drainage holes. Adding a layer of active charcoal to the bottom, underneath the soil, will help to protect the plant from overwatering. It even absorbs toxics to protect the soil and roots from bacteria's and fungal. Repel several insects is its other super power, which makes him a true life saver! This also makes active charcoal perfect if you want to create your own terrarium.",
            image: "active_charcoal.png",
            stock: 3,
            price: 9.45,
            trending: true,
            slug: "active-charcoal",
        },
        {
            name: "Living Moss",
            description:
                "Living Moss is the perfect way to bring a little wild into your home. It's a big fan of moist environments and therefore a perfect base for a terrarium. Living moss is also great for other creative purposes, for example making your own kokedama ball. To keep that pretty green colour, filtered water will do the magic. Otherwise there might be a chance that it turns brown.",
            image: "living_moss.png",
            stock: 3,
            price: 4.95,
            trending: true,
            slug: "living-moss",
        },
        {
            name: "Vermiculite",
            description:
                "Discover the versatile power of vermiculite, a lightweight substrate that stimulates plant growth! With its great aeration and drainage properties, vermiculite boosts the development of robust and healthy roots.",
            image: "vermiculite.png",
            stock: 3,
            price: 4.95,
            trending: true,
            slug: "vermiculite",
        },
        {
            name: "Coco Fibre",
            description:
                "Look no further for a great substrate—coco fiber delivers durability and longevity like no other. Its robust nature allows for multiple reuses, ensuring value and sustainability. With great aeration and moisture retention, coco fiber creates an optimal environment where roots thrive in plenty of oxygen without drying out quickly. Plus, its exceptional resistance to fungi and harmful microorganisms safeguards your plant's roots with ease.",
            image: "coco_fibre.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "coco-fibre",
        },
        {
            name: "Peat Chunks",
            description:
                "Peat is a wet, oxygen-deficient soil type with a sponge-like structure consisting of plant material. Peat is an important component of potting soil. Especially these peat chunks are good to add to potting soil. This will result in an airy potting soil that can absorb water well and retain moisture. It also stores nutrients more easily. It will therefore ensure a good root development and a beautiful growing plant. In fact, all plants will be happy with this addition!",
            image: "peat_chunks.png",
            stock: 3,
            price: 3.95,
            trending: true,
            slug: "peat-chunks",
        },
        {
            name: "Neem Oil",
            description:
                "The pure PLNTS Neem Oil is a natural remedy that fight pests on your green friends. It is effective against moulds, spider mites, thrips, mealy bugs and many other insects and can even be used preventively! With PLNTS Neem Oil, your beauties will not be bugged (anymore).",
            image: "neem_oil.png",
            stock: 3,
            price: 13.45,
            trending: true,
            slug: "neem-oil",
        },
        {
            name: "Mourning Fly Catcher Yellow",
            description:
                "Do you also regularly have flying friends coming over and settle down on your green friends? We understand that everyone would like to live in their own jungle, but fungus gnats are in fact mosquitoes that can damage your plant! The Fungus Gnats Catcher ensures that these insects won't be able to lay eggs in the soil of your plant anymore. The package contains 10 fly traps, that are made of recycled plastic and have to be placed in the soil of your effected plant. The traps are covered with foil on both sides. Once you remove the foil, there will be a layer of glue where the flies will stick on to. This way, the pests can no longer reproduce.",
            image: "mourning_fly_catcher_yellow.png",
            stock: 3,
            price: 7.95,
            trending: true,
            slug: "mourning-fly-catcher-yellow",
        },
        {
            name: "Plant Soap",
            description:
                "Plantsoap is an effective preparation agent for the application of natural pesticides. It can be used to pre-treat mealybugs, thrips, aphids, whiteflies, scale insects, soft scales and spider mites. Clean your plants with this remedy and then let them dry thoroughly. This way, your plants are ready to be helped by natural pesticides such as Mosi and Puncta. By doing so, you give these natural pest controllers a head start in fighting pests effectively. Sounds ideal, right?",
            image: "plant_soap.png",
            stock: 3,
            price: 10.45,
            trending: true,
            slug: "plant-soap",
        },
        {
            name: "Biological pest control: White Fly",
            description:
                "With each order, you'll receive 5 cards containing a total of 300 Mosi. This quantity is sufficient for approximately 15 houseplants. Simply hang these cards near the affected plants, and let the creatures take care of the rest. This environmentally friendly approach offers a safe and effective solution for eliminating White Fly infestations.",
            image: "pest_control_white_fly.png",
            stock: 3,
            price: 14.95,
            trending: true,
            slug: "biological-pest-control-white-fly",
        },
        {
            name: "Biological pest control: aphids",
            description:
                "Meet Puncta, also known as ladybug larvae, natural predators of aphids. These creatures can consume between 200-300 aphids over their lifespan. After 4-6 weeks, puncta larvae can mature into ladybugs, provided they have adequate food and are not threatened by other predators. Additionally, the adult form of Puncta continues to feed on aphids.",
            image: "pest_control_aphids.png",
            stock: 3,
            price: 30.95,
            trending: true,
            slug: "biological-pest-control-aphids",
        },
        {
            name: "Biological pest control: spider mites",
            description:
                "Fortunately, combating this infestation is achievable with the introduction of predatory creatures known as Nicus, known for their voracious appetite. Each of these creatures can consume up to 160 spider mite eggs, and a package typically contains around 100 of them. Over a span of 4-6 weeks, they'll proliferate in your environment, multiplying to approximately 2000, all the while eradicating the infestation without causing harm to your plants.",
            image: "pest_control_spider_mites.png",
            stock: 3,
            price: 12.45,
            trending: true,
            slug: "biological-pest-control-spider-mites",
        },
        {
            name: "Biological pest control: spider mites",
            description:
                "These natural predatory mites are called Phytoseiulus persimilis and will overpower spider mite infestations in no time! They work invisibly and extremely fast and search your plants for spider mites. A predatory mite can eat up to 5 adult spider mites or 20 young spider mites (eggs) per day. When there are no more spider mites left, these predatory mites eat each other and will eventually disappear from your plants.",
            image: "bio_pest_control_spider_mites.png",
            stock: 3,
            price: 20.45,
            trending: true,
            slug: "bio-pest-control-spider-mites",
        },
        {
            name: "Biological pest control: fungus gnats",
            description:
                "This Steinernema feltiae, the natural enemy of the fungus gnat, to the rescue! They are living soil organisms, as they occur in nature and help nature. So when you use these rescuers, you are using the natural way, which is a nice idea! By the way, they are so small that you will not see anything moving or living in the water or in your potting soil.",
            image: "pest_control_phungus_gnats.png",
            stock: 3,
            price: 15.95,
            trending: true,
            slug: "pest-control-phungus-gnats",
        },
        {
            name: "Sticky Leaf Mourning Fly Catcher Green",
            description:
                "Little bullies that fly around and are only too happy to nest in the soil of your plants. Do you also see them in your urban jungle? Sticky Leafs come to the rescue! These monstera-shaped sticky leaves keep the insects from laying eggs in the soil of your plant. The pack contains 5 sticky leaves, which are made of paper and should be placed in the soil of the affected plant. The water-resistant and odourless card is covered with foil on both sides. Once you remove the foil, an adhesive layer (which is poison-free) appears to which the flies adhere. This prevents the pests from reproducing. The sticky leaves look cute because of the Monstera leaf and their green shape, but apart from that, the green colour is proven tempting for mourning flies.",
            image: "mourning_fly_catcher_green.png",
            stock: 3,
            price: 7.45,
            trending: true,
            slug: "mourning-fly-catcher-green",
        },
        {
            name: "Nutrition",
            description:
                "The #1 Food For Happy PLNTS. The first step to giving your awesome plants the care they deserve is making sure they have good food. The new almost entirely organic PLNTS Nutrition will keep your plants going strong, giving them the help they need to stay in tip-top condition. It's easy to use, non-toxic and jam-packed with goodness. Love your plants, love your planet! Plus it's super concentrated, meaning that just a tiny bottle will go a long, long way. PLNTS Nutrition is suitable for all indoor plants. For spectacular growth and top conditioning we recommend feeding PLNTS Nutrition every two weeks. Add 6 ml of the liquide nutrition to 1,5 litre of water and then water your plants with this nurturing mixture. Between October and February your plants need less nutrition because the winter will slow their metabolisms, so during this time you should only add 3 ml. The PLNTS Nutrition is also very suitable for semi hydro.",
            image: "nutrition.png",
            stock: 3,
            price: 6.95,
            trending: true,
            slug: "nutrition",
        },
        {
            name: "Edward Pruning Shears Silver",
            description:
                "Edward pruning shears are the ideal scissors for cutting off a small branch, dry leaf or flower. Normal pruning shears are often too big for this and you might accidentally cut off too much or the wrong leaf, which is of course a shame! Edward is razor-sharp, super small, about 11 cm and therefor easy to use! Make sure that you always disinfect the blades of the scissors before use. This prevents you from transferring plant diseases to other plants by means of the scissors. Clean the scissors after use with warm water and pat the blades dry, this way you can be sure that your blades won't rust and will last a long time! With this little one you can easily do the fine, precise work so that the rest of your plant gets all the energy and nutrition she needs!",
            image: "edward_pruning_shears_silver.png",
            stock: 3,
            price: 7.95,
            trending: true,
            slug: "edward-pruning-shears-silver",
        },
        {
            name: "Potting scoop",
            description:
                "This potting scoop is perfect to help you to take care of your plants! You will have a good grip on the scoop, since it has an ergonomic handle. The scoop is on the smaller side, so you will have no trouble with spilling any soil. The exact size is 25,6 centimeter long and 7,5 centimeter wide. This scoop is completely made from lightweight recycled material, which makes it not only super useful for you, but makes it also super beneficial for the planet! The scoop comes in 2 different colours, black and green. The UV filter will guarantee you that the colours will not fade. Does this (name scoop) sound like your new potting friend?",
            image: "potting_scoop.png",
            stock: 3,
            price: 4.95,
            trending: true,
            slug: "potting-scoop",
        },
        {
            name: "Monstera Propagation Station",
            description:
                "For our fifth anniversary, we invited a number of influencers from the plant world to create their own design with our suppliers. From pot to accessory, surprising and a real must-have for the plant lover. This design is by the lovely Plantstodo in collaboration with House Raccoon. The propagation station is shaped like a beautiful varigated monstera leaf and is made of high-quality plaster composite.",
            image: "monstera_propagation_station.png",
            stock: 3,
            price: 25.95,
            trending: true,
            slug: "monstera-propagation-station",
        },
        {
            name: "Biodegradable Seedling Pots",
            description:
                "Want to grow a tiny seed or baby cutting into a beautiful adult plant? Then these pots are a must-have. The seedling pots are 100% organic and biodegradable, and they even make the soil more fertile as they break down into humus, which has a positive effect on the growth of young plants. Any growing plant will feel at home in these wood fibre pots. Moreover, the roots get a chance to grow right through the sides of the pot, so no root problems when repotting, the seedling pot can just go into the bigger pot! :) We have some great seeds to start with, Fern, Nicolai and Arabica. This product contains 24 seedling pots with a diameter of 6 cm.",
            image: "biodegradbla_seeding_pots.png",
            stock: 3,
            price: 3.45,
            trending: true,
            slug: "biodegradbla-seeding-pots",
        },
        {
            name: "Seedling Pots Tray",
            description:
                "If you are looking for a super handy way to grow your cuttings, you have found your solution! This Seedling Pots on Tray allows you to grow cuttings and seeds, without taking up a lot of space. Besides being super easy to use, these trays are made from sustainable and biodegradable material. So the planet will also benefit when you decide to use these! And don't forget to take a look at our amazing seeds! We have Baby Fern Seeds, Baby Arabica Seeds and our Baby Nicolai Seeds, they match perfectly with these trays and allow you to get started right away! The trays have room for 12 plants per tray and you will get 3 trays per package. So it allows you to grow 36 seeds, cuttings or baby PLNTS!",
            image: "seedling_pots_tray.png",
            stock: 3,
            price: 3.95,
            trending: true,
            slug: "seedling-pots-tray",
        },
        {
            name: "Propagation Erlenmeyer Flask",
            description:
                "This Erlenmeyer flask is for every PLNTS parent who loves propagation experiments. With your little cutting in this lab glass, you create a real plant lab. When you take cuttings, it is important that you can keep a close eye on the development of the roots. You want the roots to have enough room to grow, but a big glass with lots of water can also flood your plant, something you don't want. Thanks to the narrow mouth of the Propagation Erlenmeyer flask, your little baby stays dry and the roots have all the room they need to grow in the wide space. The Erlenmeyer flask is made of transparent boron silicate glass and is available in two sizes, 50 ml and 100 ml. Which plant will you take cuttings from?",
            image: "propagation_erlebneyer_flask.png",
            stock: 3,
            price: 9.95,
            trending: true,
            slug: "propagation-erlebneyer-flask",
        },
        {
            name: "Susan Pruning Scissors",
            description:
                "Susan Pruning Shears is a very trendy pair of scissors perfect for pruning small trees like this Ficus. Her narrow scissors make it easy to get behind all the small branches and cut everything off in a second. This way, Susan works quickly but most importantly, accurately. When you cut with these pruning shears, make sure you always disinfect her blades before use. That way you avoid transmitting plant diseases to other plants through the shears. Rinse the shears after use and pat the blades dry, this way Susan will not rust and she will last a nice long time.",
            image: "susan_pruning_scissors.png",
            stock: 3,
            price: 7.45,
            trending: true,
            slug: "susan-pruning-scissors",
        },
        {
            name: "Potting Mat",
            description:
                "The potting mat is a true essential for PLNTSparents. With this foldable potting mat you can repot, loosening, propagate and prune your plants without getting your counter, table or floor dirty. The potting mat is 100% waterproof and super easy to roll up and store because of the snap fastener. Besides that, this handy tool is 75x75 cm, what makes it also perfect for bigger sized plants! Done giving your PLNTS all the attention they needed? This potting mat only needs to be wiped or rinsed with water and you will be ready to use it again next time!",
            image: "potting_mat.png",
            stock: 3,
            price: 19.95,
            trending: true,
            slug: "potting-mat",
        },
        {
            name: "Measuring Cup",
            description:
                "This plastic measuring cup, which goes up to 100ml, is ideal for measuring the right quantities. It is very handy when you are putting together your own potting soil, for example, but it can also be used to measure the amount of pure neem oil. A diverse tool to ensure that you never use too much or too little!",
            image: "measuring_cup.png",
            stock: 3,
            price: 6.45,
            trending: true,
            slug: "measuring-cup",
        },
        {
            name: "Toby Terrarium Pickup Tool",
            description:
                "Toby is an extra-long pickup tool which is extendable to about 70cm! He is specially made for terrarium work and therefore made of stainless steel material. With Toby Terrarium Pickup Tool you can move your bigger plants or stones much easier. For more handy tools, you should definitely check out our other Toby equipment!",
            image: "toby_terrarium_pickup_tool.png",
            stock: 3,
            price: 8.45,
            trending: true,
            slug: "toby-terrarium-pickup-tool",
        },
        {
            name: "Toby Terrarium Tool Kit",
            description:
                "This is a two-piece terrarium tool kit that includes an extendable rake and shovel. The tool kit is specially made for terrarium work and therefore made of stainless steel material. With Toby Terrarium Tool Kit you can easier take care of your terrarium plants and their soil. For more handy tools, you should definitely check out our other Toby equipment!",
            image: "toby_terrarium_tool_kit.png",
            stock: 3,
            price: 14.45,
            trending: true,
            slug: "toby-terrarium-tool-kit",
        },
        {
            name: "Toby Terrarium shears",
            description:
                "Toby is an extra-long pair of scissors of about 25cm with curved blades. He is specially made for terrarium work and therefore made of stainless steel material. With Toby Terrarium Scissors, you can easily cut away offshoots and any dry leaves. For more handy tools, you should definitely check out our other Toby equipment!",
            image: "toby_terrarium_shears.png",
            stock: 3,
            price: 10.45,
            trending: true,
            slug: "toby-terrarium-shears",
        },
        {
            name: "Toby Terrarium tweezers",
            description:
                "Toby is an extra-long tweezer of approximately 25cm. He is specially made for terrarium work and therefore made of stainless steel material. With Toby Terrarium Tweezers you can move your plants or stones much easier. Toby is also ideal to remove dead leaves on the bottom of your terrarium. For more handy tools, you should definitely check out our other Toby equipment!",
            image: "toby_terrarium_tweezers.png",
            stock: 3,
            price: 5.95,
            trending: true,
            slug: "toby-terrarium-tweezers",
        },
        {
            name: "Jules Propagation Set",
            description:
                "Are you looking for a tool that will allow you to have all your cuttings on display? Then our Jules propagation station is the one for you! Jules has a wooden base, where 5 clear glass tubes are placed in. Which gives this propagation station a very organic feeling. The clear glass also allows you to witness how your beautiful roots are developing, how great is that? The tubes have a diameter of 3 centimeters. The total height of the station is 12 centimeters and the length is 24,5 centimeters. This size will fit inside most cabinets or window sills! Jules has a little sister, named Julia. Just in case you were looking for a smaller propagation station.",
            image: "jules_propagation_set.png",
            stock: 3,
            price: 16.45,
            trending: true,
            slug: "jules-propagation-set",
        },
        {
            name: "Manuela Hanging Vase",
            description:
                "The Manuela hanging vase is a really nice eye-catcher to hang somewhere in your house. You can let one cutting grow and shine! You can grow crops without soil by using mineral nutrient solutions in water. This way is also called hydroponics. You can then see the roots very nicely through the glass tubes, we love it! This of course also gives you plant propagation! And who wouldn't want to plant more ?! Plant propagation is a process in which new plants are grown in different ways. Such as through seeds, cuttings and other plant parts. With our BabyPLNTS you can also very well double the growth of your babies! You can use our propagation stations for this, you can choose to propagate several cuttings at the same time or you can choose one favorite plant. ",
            image: "manuela_hanging_vase.png",
            stock: 3,
            price: 7.95,
            trending: true,
            slug: "manuela-hanging-vase",
        },
        {
            name: "Henry Grow Light Bulbs",
            description:
                "Looking for a way to upcycle your lamp and turn it into a grow light? Or are you just looking for a good grow light bulb? These Henry Grow Light Bulbs are the ones you are looking for! Don't be shocked by his bright and pink light, whith his 756 lumens he provides your plant with just the right amount of light to make them grow! It's best to keep Henry on for about 10 to 12 hours a day, the rest of the hours your plant will be happy to enjoy their night rest. With their E27 fitting and an A21 shape they will fit perfectly in most lamp stands! ",
            image: "henry_grow_light_bulbs.png",
            stock: 3,
            price: 43.95,
            trending: true,
            slug: "henry-grow-light-bulbs",
        },
        {
            name: "Greenhouse Cabinet Grow Light LED 20W",
            description:
                "Dreaming of an indoor jungle that exceeds all expectations? This set of 4 LED grow lights from Secret Jardin is your secret weapon! Each strip, glowing with warm white light, is a powerful 20 watts at 24 volts and stretches over 50 cm. Perfect for your greenhouse cabinet. Keep the lights 25-35 cm away from your plants for optimal growth and flowering. This set comes with handy four 1-metre extension cords and a plug with five power supplies, to which you can connect, for example, 4 lamps and a mini fan.",
            image: "cabinet_grow_light_led.png",
            stock: 3,
            price: 144.95,
            trending: true,
            slug: "cabinet-grow-light-led",
        },
        {
            name: "Elho Leah Grow Light",
            description:
                "And then, there was light! Your green babies obviously need light to grow. During spring and summer they receive plenty of light, but to help your plants also grow in winter we recommend to recreate light. Leah the adjustable Grow Light is great for these colder and darker days. Nevertheless she can also be used in darker corners of your house. You can easily place her in the soil of your plant and the best about Leah is that the stick is extendable from 36 cm up to 100 cm! So your grow light grows together with your beauty, how great is that?! She shines a magenta colour, which stimulates the growth of leaves and buds. This light has an automatic day/night cycle to ensure that your plants will grow in a natural way. It can't be any easier, grow baby grow!",
            image: "elho_leah_grow_light.png",
            stock: 3,
            price: 62.95,
            trending: true,
            slug: "elho-leah-grow-light",
        },
        {
            name: "Elho Coen Light Garden Green",
            description:
                "With the light garden you can easily grow your own plants and cuttings all year round. This clever system uses a special coloured lamp to optimise the growth of your plants. The grow light has an automatic day/night switch that allows the plants to grow naturally. Choose your own plants and enjoy beautiful houseplants all year round. The light box has a width of 39 cm, its height is 48 cm and it is 27 cm deep.",
            image: "elho_coen_light_garden_green.png",
            stock: 3,
            price: 130.45,
            trending: true,
            slug: "elho-coen-light-garden-green",
        },
        {
            name: "Grow Light Rings",
            description:
                "Boost your green friends this period with extra light. This grow lamp is happy to help! With its three rings, it is perfect for placing in a cosy group of plants. You do this by attaching the rings to a transparent stick; when the lamp is seated properly, you can also adjust the ring's height. The grow light rings have a diameter of 8 cm and give warm white light. In addition, the lights have an output of 24 watts and a USB power supply",
            image: "grow_light_rings.png",
            stock: 3,
            price: 31.45,
            trending: true,
            slug: "grow-light-rings",
        },
        {
            name: "Olly Terrarium Large",
            description:
                "This product consists of only the terrarium jar. Diameter: 29 cm. Height: 38 cm",
            image: "olly_terrarium_large.png",
            stock: 3,
            price: 9.45,
            trending: true,
            slug: "olly-terrarium-large",
        },
        {
            name: "Bello Terrarium Medium",
            description:
                "This fun ribbed terrarium is a new addition to our range of terrariums. With its playful shape, it will add extra sparkle to your BabyPLNTS. The Bello terrarium is 32 centimeters high and has a diameter of 21 centimeters. Create your own unique terrarium with Bello. Already have fun mini plants in mind? It is also good to use moss in your terrarium, potting soil and hydro grains. Of course you can put a lot more in your Bello terrarium, it's just what you like!",
            image: "bello_terrarium_medium.png",
            stock: 3,
            price: 18.45,
            trending: true,
            slug: "bello-terrarium-medium",
        },
        {
            name: "Emily Terrarium Mini",
            description:
                "Our Emmy mini terrarium is perfect in combination with one of our tissue culture plants. This terrarium will be the perfect environment for your growing baby, it will have increased humidity and temperature to make your baby nice and comfortable. Besides that, Emmy is quite small and looks absolutely adorable! Her exact measurements are 12 centimeters wide and 11 centimeters high.",
            image: "emily_terrarium_mini.png",
            stock: 3,
            price: 13.95,
            trending: true,
            slug: "emily-terrarium-mini",
        },
        {
            name: "Tissue Culture Set",
            description:
                "Would you like to get started with tissue culture? This set contains all the tools needed to grow your mini plant into a beautiful large plant! This set contains a mini terrarium, cutting soil and a small pair of tweezers. Let's start with Emily, she is a mini terrarium and will make your plant feel at ease in her new environment. She will also make sure that your plant does not lack anything in terms of humidity and temperature. Our cutting soil will provide the right base for developing roots. This soil is already mixed and c",
            image: "tissue_culture_set.png",
            stock: 3,
            price: 16.45,
            trending: true,
            slug: "tissue-culture-set",
        },
        {
            name: "Bello Terrarium Medium Starter Kit",
            description:
                "This starter kit includes: Bello Terrarium Medium, Bag of Hydro Grains, Liter Potting Soil, Bag of living cushion moss, Bag of active charcoal, Fittonia Verschaffeltii, Asparagus Fern ,Calathea Lancifolia Insigne",
            image: "bello_terrarium_medium_starter_kit.png",
            stock: 3,
            price: 9.45,
            trending: true,
            slug: "bello-terrarium-medium-starter-kit",
        },
        {
            name: "Monstera Deliciosa Seed Kit",
            description:
                "Would you like to be ready and fully prepared to be able to grow your own Monstera Deliciosa from seed? Well, then this kit is what you are looking for. It will equip you with seeds, cutting soil, a PLNTS name tag, and a kokedama pot. The only thing left to do is provide your seeds with lots of tender love and care. Are you up for the challenge? Buy Monstera Deliciosa Seeds online.",
            image: "montera_deliciosa_seed_kit.png",
            stock: 3,
            price: 13.45,
            trending: true,
            slug: "montera-deliciosa-seed-kit",
        },
        {
            name: "Succulents Potting Mix Kit",
            description:
                "Succulent mix kit:our Succulent mix kit consists of 3 different substrates. These substrates are carefully selected. Good to know is that we already have a good basic potting soil mix and based on that we have chosen the additives. Which in our opinion are perfect for Succulents (include many common houseplants like the Aloë Vera, Sansevieria, Peperomia and the Cactus)!",
            image: "succulents_potting_mix_kit.png",
            stock: 3,
            price: 7.95,
            trending: true,
            slug: "succulents-potting-mix-kit",
        },
        {
            name: "Clippy Wall Mounting Kit",
            description:
                "Clippy might come in handy for when your plants already have taken over all spaces in your home. Or when you just want to pimp that boring, bare wall. In this kit you'll find 5 ‘Clippy's. Screw these onto your wall and simply slide your terracotta pot into. To ensure that the water doesn't leak, there are also 5 corks that fit into the drainage hole. The clips are adjustable for hanging pots of different sizes",
            image: "clippy_wall_mounting_kit.png",
            stock: 3,
            price: 19.45,
            trending: true,
            slug: "clippy-wall-mounting-kit",
        },
        {
            name: "Plant Care Tool Set",
            description:
                "This fine gardening tool set is indispensable when taking care of your PLNTS, specially put together for our PLNTSparents. If you need to remove old stems or are going to repot your plant, this 2-piece set is an absolute must. The set includes a metal garden shovel and pruning shears. The handles are made of wood which gives a natural look. The attached hanging system makes it easy to store the garden tools. The pruning shears are 19.5 centimeters long and 5 centimeters wide. The shovel is 33 centimeters long and 8 centimeters wide.",
            image: "plant_care_tool_set.png",
            stock: 3,
            price: 32.45,
            trending: true,
            slug: "plant-care-tool-set",
        },
        {
            name: "Soil Checker",
            description:
                "A soil checker that does its job without fuss - that's what you want! You just stick it into the ground to take a small soil sample at different depths. Is the soil still moist? Wait a little longer before watering. Dry and loose? Then it's time to water your plant. The checker is made of wood, making it a durable option. Over the wood is a lacquered finish, so you can wipe the soil checker clean in a jiffy. Keep your nails clean and get a better grip on your watering schedule!",
            image: "soil_checker.png",
            stock: 3,
            price: 13.95,
            trending: true,
            slug: "soil-checker",
        },
    ],
};

module.exports = dbContents;
