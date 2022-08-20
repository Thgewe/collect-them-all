import { createStore } from 'vuex'

export default createStore({
    state: {
        BASE_URL: 'https://darksouls.fandom.com',
        ds3: {
            rings: [
                {
                    "name": "Life Ring",
                    "href": "/wiki/Life_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232669473813710/84E143673BACE7F31F71D82FFC10EC26F045A0B0/",
                    "availability": [
                        "Can be chosen as a burial gift at the beginning of the game.",
                        "Sold by the Shrine Handmaid for 1,500 souls once she has been given the Dreamchaser's Ashes."
                    ],
                    "effect": "Raises maximum HP by 7%.",
                    "ng+": [
                        {
                            "name": "Life Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978442255/5B213BE3F8BB5FDAE4EC49FC5BE7C5C9006931F9/",
                            "availability": ["Found in the Undead Settlement, on the ledge where Siegward is met the second time after dropping off the upper part of the lift that leads to the Road of Sacrifices. It can be looted from a corpse lying on the second archway, to the right of Siegward."],
                            "effect": "Raises maximum HP by 8%."
                        },
                        {
                            "name": "Life Ring+2 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987530712/DBAFD661E6F8468B90E6F3128A5FBD9F32FAB97F/",
                            "availability": ["Found in Lothric Castle. From the Dragon Barracks, cross the bridge and enter the building on the right. Climb up the ladder and exit through the archway on the left. Once outside, head around the corner to the right and from the spot with the corpse hanging on the ledge, drop down to another ledge with a corpse holding the ring."],
                            "effect": "Raises maximum HP by 9%."
                        },
                        {
                            "name": "Life Ring+3 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987494355/0427201791568F4AB072A6A2CE85FED31F91B5ED/",
                            "availability": ["Found in the Untended Graves, behind Prince Lothric's throne in the ruins of Firelink Shrine."],
                            "effect": "Raises maximum HP by 10%."
                        }
                    ]
                },
                {
                    "name": "Sun Princess Ring",
                    "href": "/wiki/Sun_Princess_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394535385402/A170E957EFB5382E7371EF06FFC893FD313348BB/",
                    "availability": ["Found in Anor Londo. From the Aldrich, Devourer of Gods bonfire, ride up any of the two elevators and enter the Chamber of the Princess to find the ring."],
                    "effect": "Restores 2 HP per second."
                },
                {
                    "name": "Estus Ring",
                    "href": "/wiki/Estus_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665629101155/162E81512A9BE245958BBFEFA8249B631A6618EC/",
                    "availability": ["Found at the bottom of the decrepit bell tower behind Firelink Shrine (Tower Key required)."],
                    "effect": "Increases HP restored by drinking from the Estus Flask by 20%."
                },
                {
                    "name": "Ashen Estus Ring",
                    "href": "/wiki/Ashen_Estus_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394539970804/D33A9EAB1576171CE93A0BC8D1CAB816DD37EAEA/",
                    "availability": ["Found in the Untended Graves. From the first bonfire, proceed onward and turn left on the first path. The ring is guarded by several Corvians and a Storyteller."],
                    "effect": "Increases the amount of FP restored from drinking from the Ashen Estus Flask by 20%."
                },
                {
                    "name": "Chloranthy Ring",
                    "href": "/wiki/Chloranthy_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155374954/111C19FB359CEA1B3E50263A931A3161542B67EB/",
                    "availability": ["Found at the bottom of a tower in the Undead Settlement. Jump off the lift that leads to the Road of Sacrifices while riding its upper part and onto a wooden scaffolding, then follow the only path available, fighting a Demon with Siegward along the way. Once reaching the rooftop of the next house, jump toward a nearby tower and enter it. Make way to the bottom and the ring can be found behind some wooden crates, near to the Mirrah Set."],
                    "effect": "Increases stamina regeneration speed by 7 points per second.",
                    "ng+": [
                        {
                            "name": "Chloranthy Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978582197/3AC6EFF026BDBED1E2070D62189064BBF0C47758/",
                            "availability": ["Found in Irithyll of the Boreal Valley, behind the pedestal that holds the Ring of the Sun's First Born."],
                            "effect": "Increases stamina regeneration speed by 8 points per second."
                        },
                        {
                            "name": "Chloranthy Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978487571/3CF7D6BB5EB8851A3A96FA4F1820ADB9FC5556A9/",
                            "availability": ["Found in the Road of Sacrifices. Drop to a small ledge just to the left of the first Corvian Storyteller to find the ring."],
                            "effect": "Increases stamina regeneration speed by 9 points per second."
                        }
                    ]
                },
                {
                    "name": "Havel's Ring",
                    "href": "/wiki/Havel%27s_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155274091/572788A6D3DA9A395B8C50AF0A62325AEF4A0DA7/",
                    "availability": ["Obtained by transposing the Soul of a Stray Demon with Ludleth of Courland."],
                    "effect": "Increases maximum Equip Load by 15%.",
                    "ng+": [
                        {
                            "name": "Havel's Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987508464/E8BAAAE93931FF9F0B3359907159B9525D7C0BB9/",
                            "availability": ["Found in Archdragon Peak, on a corpse lying immediately to the left after exiting the room where the big mob of Man Serpents were hiding, on the path that leads to the altar that bestows the Twinkling Dragon Torso Stone."],
                            "effect": "Increases maximum Equip Load by 17%."
                        },
                        {
                            "name": "Havel's Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987408469/485980405780F2C67807BB102398DB74F8C6C504/",
                            "availability": ["Found in Anor Londo, in the Prison Tower where Captain Yorshka resides. Drop down the tower and the ring will be on the third corpse, after the Painting Guardian's Curved Sword and the Painting Guardian Set."],
                            "effect": "Increases maximum Equip Load by 18%."
                        }
                    ]
                },
                {
                    "name": "Ring of Favor",
                    "href": "/wiki/Ring_of_Favor",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394533826218/C28FCDC4CDC23BFE6E2F2ABD109FA4397B0FCD3D/",
                    "availability": ["Found in Irithyll of the Boreal Valley. Dropped by one of the two Sulyvahn's Beasts lurking in the Water Reserve."],
                    "effect": "Increases maximum HP by 3%, Stamina by 9%, and maximum Equip Load by 5%.",
                    "ng+": [
                        {
                            "name": "Ring of Favor+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978591961/20D9C33864E2BCF9A70FD9BCD8F0AF83AFE03C48/",
                            "availability": ["Found in Irithyll of the Boreal Valley, along the rafters above Pontiff Sulyvahn's boss room."],
                            "effect": "Increases maximum HP by 4.5%, Stamina by 10%, and maximum Equip Load by 6%."
                        },
                        {
                            "name": "Ring of Favor+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978515427/2A70264F4592C9360E9D8A2F43CB210ED20DB04D/",
                            "availability": ["Found in the Cathedral of the Deep. On the rooftops leading to the rafters, the ring can be found in an alcove to the left, guarded by a Large Devout of the Deep."],
                            "effect": "Increases maximum HP by 5%, Stamina by 11%, and maximum Equip Load by 7%."
                        }
                    ]
                },
                {
                    "name": "Prisoner's Chain",
                    "href": "/wiki/Prisoner%27s_Chain",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155263409/BCE0833A35792A8D2585973B913CBB8FE4642800/",
                    "availability": ["Obtained by transposing the Soul of Champion Gundyr with Ludleth of Courland."],
                    "effect": "Increases Vigor, Endurance and Vitality by 5 points each, but reduces the wearer's damage absorption by 4% in all categories. The ring merely increases those stats by 5 levels each, and does not actually raise the player's Soul Level itself."
                },
                {
                    "name": "Ring of Steel Protection",
                    "href": "/wiki/Ring_of_Steel_Protection_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665627951272/7700892BBB6A0076DE9B0FF9F2B7C38F19C121CE/",
                    "availability": ["Found in Archdragon Peak, at the ruins where the Ancient Wyvern initially appears. Complete the boss fight and return to the initial area beyond the main gate. At the main fork in front of the bell, turn right into an area with three lootable corpses and approach the ledge on the right. Walk around the railing and onto a narrow path that leads to a corpse holding the ring."],
                    "effect": "Increases Physical damage absorption by 10%, 2% in PvP.",
                    "ng+": [
                        {
                            "name": "Ring of Steel Protection +1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987482034/18E7C13792BBD8A4F7FA2710CCD25F37CEBFB367/",
                            "availability": ["Found in the Untended Graves, on a corpse lying to the right of the tower behind the shrine."],
                            "effect": "Increases Physical damage absorption by 13%, 3% in PvP."
                        },
                        {
                            "name": "Ring of Steel Protection +2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978559443/7BD9C68206FD55AD6731DE1FB73AA5545218E240/",
                            "availability": ["Found in the Catacombs of Carthus, on top of a small pillar below the left side of the first stone bridge."],
                            "effect": "Increases Physical damage absorption by 15%, 4% in PvP."
                        }
                    ]
                },
                {
                    "name": "Magic Stoneplate Ring",
                    "href": "/wiki/Magic_Stoneplate_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394539147740/1C83A9EC7AB03F42180D0ABFB1C652B59FBDA835/",
                    "availability": ["Found in the Consumed King's Garden. Guaranteed drop from the Consumed King's Knight guarding King Oceiros's lair."],
                    "effect": "Increases Magic damage absorption by 13%, 4% in PvP.",
                    "ng+": [
                        {
                            "name": "Magic Stoneplate Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978526672/B46F4DE8FA0BE20B33BCB7258D1BE718988E30E9/",
                            "availability": ["Found in Farron Keep. From the Farron Keep bonfire, head right to an area with murky water and several Basilisks. The ring is on a corpse lying behind a big tree on the left."],
                            "effect": "Increases Magic damage absorption by 17%, 5% in PvP."
                        },
                        {
                            "name": "Magic Stoneplate Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987439678/754B79D8D78690ED9C2D0B68D1FE27604A9E4673/",
                            "availability": ["Found in the Profaned Capital. From the Profaned Capital bonfire, climb down the interior ladder, exit through the hole on the wall and turn right. The ring will be toward the end of this path."],
                            "effect": "Increases Magic damage absorption by 20%, 6% in PvP."
                        }
                    ]
                },
                {
                    "name": "Flame Stoneplate Ring",
                    "href": "/wiki/Flame_Stoneplate_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155309445/25449ACBFF3EADB53DFCD3D72FE4A21C2CEF1A6E/",
                    "availability": ["Found in the Undead Settlement, on a corpse hanging from the highest cliff and near the non-hostile Manservant. The body may fall down the cliff, forcing the player to traverse a big part of the level in order to retrieve it. If this happens, just closing and continuing the game will make it spawn lying below the tree and ready to be looted."],
                    "effect": "Increases Fire damage absorption by 13%, 4% in PvP.",
                    "ng+": [
                        {
                            "name": "Flame Stoneplate Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987441033/7A4D48B6A92F97DD5B0DAF79C3E6376845108509/",
                            "availability": ["Found in the Profaned Capital. From the Profaned Capital bonfire, climb down the ladder and exit through a hole on the wall. Proceed onward until reaching the toxic swamp and climb up the ladder on the right of the chapel's ruins. Drop down near the entrance of the room with the sleeping Monstrosity of Sin and onto a piece of roof visible below. The ring can then be looted from a body lying in a little alcove."],
                            "effect": "Increases Fire damage absorption by 17%, 5% in PvP."
                        },
                        {
                            "name": "Flame Stoneplate Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978574551/307169F4AEBF4CD4EDE62719FFAD15B351E2FAA3/",
                            "availability": ["Found in the Smouldering Lake. From the Demon Ruins bonfire, descend two sets of stairs to reach a big room with two Demon Clerics. Turn right and proceed straightforward into a passage at the end. Hit the carved wall at the very end of this passage to reveal a hidden room with a Black Knight slaying a Ghru. The ring can be found inside."],
                            "effect": "Increases Fire damage absorption by 20%, 6% in PvP."
                        }
                    ]
                },
                {
                    "name": "Thunder Stoneplate Ring",
                    "href": "/wiki/Thunder_Stoneplate_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665628057652/EE36FD7FA0D0BE94E5DE112427F815E1761FD9AE/",
                    "availability": ["Found in Archdragon Peak. From the Dragon-Kin Mausoleum, proceed onward through the level along an open side path guarded by several Man Serpents. Once at the other end, look for a wooden scaffolding with another Man Serpent below and drop to it. Climb up the ladder around the corner to find the ring at the top."],
                    "effect": "Increases Lightning damage absorption by 13%, 4% in PvP.",
                    "ng+": [
                        {
                            "name": "Thunder Stoneplate Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978552266/F095A295F77DFB2F07BC514687A32628BA098B1D/",
                            "availability": ["Found in the Catacombs of Carthus, in the same alley filled with urns where the Carthus Milkring is found."],
                            "effect": "Increases Lightning damage absorption by 17%, 5% in PvP."
                        },
                        {
                            "name": "Thunder Stoneplate Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987537089/1B49FB564B390DADB872CCC0AA91C78A7A63D904/",
                            "availability": ["Found in Lothric Castle. From the Dragonslayer Armour bonfire, backtrack and head left into a room with the shortcut lift for the Grand Archives. Exit through an archway on the left to reach a balcony with the Red Tearstone Ring. Look for a crumbled part on the railing of this balcony and drop down to the roof below. The ring can be found on the right, at the far end of this roof."],
                            "effect": "Increases Lightning damage absorption by 20%, 6% in PvP."
                        }
                    ]
                },
                {
                    "name": "Dark Stoneplate Ring",
                    "href": "/wiki/Dark_Stoneplate_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394530563077/8762186A4560C4BFD3DD67F64EA2E485B3F8FBAA/",
                    "availability": ["Found in Irithyll of the Boreal Valley, on a corpse in the dark underpass adjacent to the big courtyard with several dead Giant Slaves past Pontiff Sulyvahn's arena. The ring is guarded by a group of Irithyllian Slaves."],
                    "effect": "Increases Dark damage absorption by 13%, 4% in PvP.",
                    "ng+": [
                        {
                            "name": "Dark Stoneplate Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987524636/F6DE140470E35DCB73096999BC2157F1C1FC5D98/",
                            "availability": ["Found in Lothric Castle, next to the white Lothric Wyvern. From the Dragonslayer Armour bonfire, turn back and stick to the right until an opening on the wall is found. Drop down and access a room with a Mimic and the Braille Divine Tome of Lothric, the ring will be on a corpse outside."],
                            "effect": "Increases Dark damage absorption by 17%, 5% in PvP."
                        },
                        {
                            "name": "Dark Stoneplate Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978542694/725A7BA476313F975C905487B96BBFC6D91DE4C0/",
                            "availability": ["Found in Farron Keep. From the Keep Ruins bonfire, look behind the building beyond the three Ghrus on the bridge."],
                            "effect": "Increases Dark damage absorption by 20%, 6% in PvP."
                        }
                    ]
                },
                {
                    "name": "Speckled Stoneplate Ring",
                    "href": "/wiki/Speckled_Stoneplate_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196151137917/45CC64386E09E454EE277CC76E69A92187C24D75/",
                    "availability": ["Found in the Smouldering Lake, behind a brick wall. The wall is located on the far-left side of the initial cavern (if looking toward the ballista and opposite to the Old Demon King boss room) and can only be destroyed by making one of the arrows to hit it."],
                    "effect": "Increases Magic, Fire, Lightning, and Dark damage absorption by 5%. In PvP, this is reduced to 2%.",
                    "ng+": [
                        {
                            "name": "Speckled Stoneplate Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987610079/EC98EC268432EBA08FF0FD7485F8ED011CD0C9C1/",
                            "availability": ["Found in the Cemetery of Ash, on a corpse near the Ravenous Crystal Lizard."],
                            "effect": "Increases Magic, Fire, Lightning, and Dark damage absorption by 7%. In PvP, this is reduced to 3%."
                        }
                    ]
                },
                {
                    "name": "Bloodbite Ring",
                    "href": "/wiki/Bloodbite_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155343806/EE87D0EEF8D8F404AD81B2A5E5A905E205DC2C55/",
                    "availability": ["Found in the Undead Settlement. Automatically acquired upon defeating the Giant Hound Rat lurking in the sewers."],
                    "effect": "Increases Bleed resistance by 90 points.",
                    "ng+": [
                        {
                            "name": "Bloodbite Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978567098/4EF20758007B50B625369D8DDA7E96285FD006AE/",
                            "availability": ["Found in the Smouldering Lake, on a corpse lying to the right of the giant ballista."],
                            "effect": "Increases Bleed resistance by 190 points."
                        }
                    ]
                },
                {
                    "name": "Poisonbite Ring",
                    "href": "/wiki/Poisonbite_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955159854846/0A1C056FD5B2DAD87865B56C6113266075B04928/",
                    "availability": ["Found in the Cathedral of the Deep. From the Cleansing Chapel, head in the graveyard's direction but deviate through a narrow path on the right. Make way around a small waterway with three Corpse Grubs until reaching a sleeping Ravenous Crystal Lizard. Enter the narrow passage on its right to find another Corpse Grub guarding the ring."],
                    "effect": "Increases Poison resistance by 90.",
                    "ng+": [
                        {
                            "name": "Poisonbite Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978452894/4FC9E3425F6CB75F0E2D0BE7823B08BD0CF3604D/",
                            "availability": ["Found in the Undead Settlement. From the Dilapidated Bridge, head toward the cemetery until reaching a house at the far end, then head to the left and uphill until reaching another house with the Cleric Set. The ring can be found on a corpse lying behind the well on the left."],
                            "effect": "Increases Poison resistance by 190."
                        }
                    ]
                },
                {
                    "name": "Cursebite Ring",
                    "href": "/wiki/Cursebite_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394539044688/E747C8ACCDEDA4FE196D5DA2C41FB127883F470D/",
                    "availability": ["Found in the Profaned Capital."],
                    "effect": "Increases any Curse resistance already obtained by the player (via liquid humanity and player stats) by 400%. The Cursebite Ring does not affect and is not affected by resistance granted by equipment and armor."
                },
                {
                    "name": "Fleshbite Ring",
                    "href": "/wiki/Fleshbite_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665628555052/6843EC6D15F65246FE8CA876761FBE8A2E384EBF/",
                    "availability": ["Found on the sixth floor of the Grand Archives, upstairs from the area guarded by four Archive Scholars. The ring is on a corpse on the right, at the end of a hallway filled with several Clawed Curses."],
                    "effect": "Increases Poison, Bleed, Frost and Curse resistance by 40.",
                    "ng+": [
                        {
                            "name": "Fleshbite Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978423500/172D1FDCE162CD448CEF46F8C60245E33FA32406/",
                            "availability": ["Found in the High Wall of Lothric, on a roof not far from the Tower on the Wall bonfire. Head out onto a large roof with a Pus of Man and approach the ladder, where a corpse holding the ring will be visible on the next roof."],
                            "effect": "Increases Poison, Bleed, Frost and Curse resistance by 60."
                        }
                    ]
                },
                {
                    "name": "Knight's Ring",
                    "href": "/wiki/Knight%27s_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665628513654/0DFABE77FF06FC2B2FABF4A87402077FDC85A97D/",
                    "availability": ["Found in Lothric Castle. From the Dragonslayer Armour bonfire head back toward the shortcut lift. Instead of riding it, climb the ladder found around the corner to reach the rooftops and make way to the right and into another room, then climb down the ladder in there. The ring can be found on a corpse at the bottom."],
                    "effect": "Increases Strength by 5."
                },
                {
                    "name": "Hunter's Ring",
                    "href": "/wiki/Hunter%27s_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665628548230/49ADAFDB837EFD5F8177A4196D071A52D61BB213/",
                    "availability": ["Found in the Grand Archives, on a corpse lying at the top of the highest tower of the library's main dome, guarded by three Gertrude's Knights."],
                    "effect": "Increases Dexterity by 5."
                },
                {
                    "name": "Scholar Ring",
                    "href": "/wiki/Scholar_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665628535643/CFAA71A0852C19B0991A0724164710D6CCF6B43C/",
                    "availability": ["Found in the Grand Archives. Pull the lever found to the right of the wooden bridge on the third floor of the library, facing the bridge from the red-eyed Lothric Knight. A pair of bookshelves will move out of the way, giving access to a corpse sitting on a chair holding the ring."],
                    "effect": "Increases Intelligence by 5 while equipped."
                },
                {
                    "name": "Priestess Ring",
                    "href": "/wiki/Priestess_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394539981823/29629ADC2BA7CF0B07DA76203FBB4798620E373E/",
                    "availability": ["Sold by the Shrine Handmaid in Dark Firelink Shrine for 1,000 souls. Dropped by the Shrine Handmaid if she is killed in Dark Firelink Shrine."],
                    "effect": "Increases Faith by 5."
                },
                {
                    "name": "Covetous Gold Serpent Ring",
                    "href": "/wiki/Covetous_Gold_Serpent_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394538921813/7AD5831D4B73B44C92FD17EE003AB24C83585157/",
                    "availability": ["Found in the Profaned Capital, on a corpse inside a locked cell along with Siegward. The only access is through an open window reached by jumping from the chapel's roof above the toxic swamp (Old Cell Key required)."],
                    "effect": "Increases Item Discovery by 50.",
                    "ng+": [
                        {
                            "name": "Covetous Gold Serpent Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978599036/EAEF87D76E39F52FA97CD077324AB17AD42F9538/",
                            "availability": ["Found in Irithyll of the Boreal Valley, on a corpse lying on a ledge below a broken railing, immediately after the dark room with several Irithyllian Slaves and before reaching the lake surrounding the city."],
                            "effect": "Increases Item Discovery by 75."
                        },
                        {
                            "name": "Covetous Gold Serpent Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987515979/31C14E6D89037427E2E927DE72EDED889993DF0D/",
                            "availability": ["Found in Archdragon Peak, in the big courtyard after defeating the Nameless King. A corpse on the third stairway on the right can be found holding the ring."],
                            "effect": "Increases Item Discovery by 100."
                        }
                    ]
                },
                {
                    "name": "Covetous Silver Serpent Ring",
                    "href": "/wiki/Covetous_Silver_Serpent_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232669473859669/806D73F0EECCB27310521AD5B5309A29C87F6409/",
                    "availability": ["Covetous Silver Serpent Ring\nLocated on the roof of Firelink Shrine. Although the Tower Key can be purchased for 20,000 souls from the Shrine Handmaid to gain access to the roof, a patient player can use a tree near the top of the shrine as a ramp to leap onto the roof. The room with the chest containing the ring is hidden behind an illusory wall reached by walking on the rafters located on top of the shrine, where Pickle Pee's lower nest lies."],
                    "effect": "Covetous Silver Serpent Ring: Fallen enemies yield 10% more souls.",
                    "ng+": [
                        {
                            "name": "Covetous Silver Serpent Ring +1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987426072/1FFF332B621A48274709A02DD912DF47DE6DB051/",
                            "availability": ["Found in the Irithyll Dungeon, on a corpse lying on a wooden scaffolding, midway through the shortcut lift near the Irithyll Dungeon bonfire."],
                            "effect": "Fallen enemies yield 20% more souls."
                        },
                        {
                            "name": "Covetous Silver Serpent Ring +2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978459462/F1952C81B821ECA527A38F7AF38C1EFA5A71D3D9/",
                            "availability": ["Found in the Undead Settlement, near the two Evangelists and the Demon. From the Evangelists, walk outside and drop down to the roof on the right. The ring is on a corpse by the chimney."],
                            "effect": "Fallen enemies yield 30% more souls."
                        }
                    ]
                },
                {
                    "name": "Saint's Ring",
                    "href": "/wiki/Saint%27s_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987809230/F13B7BC925DEE2362233A0BD4B8F38402006BDF7/",
                    "availability": ["Firelink Shrine. Sold by Irina of Carim for 300 souls."],
                    "effect": "Grants an additional Attunement slot when equipped."
                },
                {
                    "name": "Deep Ring",
                    "href": "/wiki/Deep_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955159881801/C8CA11EC8AD47B37C837B4E9BC2B83947BC8C41F/",
                    "availability": ["Guaranteed drop from a non-hostile Deacon in the Cathedral of the Deep. From the Cleansing Chapel, walk through the shortcut door on the left (having opened it previously) and take the nearby lift up the tower. The player will enter a room with a Devout of the Deep wielding a crossbow that had previously attacked the player when traversing the area below, and the ledge beyond its window outside the tower will lead further upward towards the cathedral rooftops. At the top of this ladder is a non-hostile Deacon, which can be killed to obtain the ring."],
                    "effect": "Grants one additional Attunement slot while equipped."
                },
                {
                    "name": "Darkmoon Ring",
                    "href": "/wiki/Darkmoon_Ring",
                    "img": "https://static.wikia.nocookie.net/darksouls/images/f/f6/Darkmoon_Ring.png/revision/latest/scale-to-width-down/100?cb=20160612045044",
                    "availability": ["Reward for reaching Rank 1 in the Blade of the Darkmoon covenant. Reaching this rank requires giving ten Proof of a Concord Kept to Company Captain Yorshka."],
                    "effect": "Grants two additional Attunement slots while equipped."
                },
                {
                    "name": "Young Dragon Ring",
                    "href": "/wiki/Young_Dragon_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955158981673/A5533E2C43E3FC7826FD2BB23995035A14FE2AD0/",
                    "availability": [
                        "Starting equipment of the Sorcerer class.",
                        "Gift from Orbeck of Vinheim after meeting the following criteria:\n 1. Play any class other than a Sorcerer.\n 2. Purchase at least four sorceries from him.\n 3. Give him at least one scroll."
                    ],
                    "effect": "Boosts the power of offensive sorceries by 12%."
                },
                {
                    "name": "Bellowing Dragoncrest Ring",
                    "href": "/wiki/Bellowing_Dragoncrest_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394535499039/7546C15AA1985E5FEFDE230D898294AD250237A4/",
                    "availability": ["Found in the Irithyll Dungeon. Requires the Jailbreaker's Key.Once the key has been procured, from the Irithyll Dungeon bonfire, advance toward the main cell block area and turn right. Proceed straight ahead until reaching the end of the corridor on the upper floor and unlock the barred window at the end. The ring can be looted from a corpse lying on one of the rock ledges accessed afterward."],
                    "effect": "Increases the power of offensive sorceries by 20%."
                },
                {
                    "name": "Great Swamp Ring",
                    "href": "/wiki/Great_Swamp_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955158811984/055064E60CBECF986EDBBBD1DA7B21B42CE2FF09/",
                    "availability": [
                        "Starting equipment of the Pyromancer class.",
                        "Found in the Road of Sacrifices. Dropped by the Great Crab pacing around a patch of deep water near the fortress. That crab is near the tree with two corpses of supposed Pyromancers, as they have the Conjurator Set and Great Swamp Pyromancy Tome with them."
                    ],
                    "effect": "Boosts the power of offensive pyromancies by 12%."
                },
                {
                    "name": "Witch's Ring",
                    "href": "/wiki/Witch%27s_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196146163501/FC632E9C78360014273E6383AABAA827283E6B40/",
                    "availability": ["Found in the Catacombs of Carthus just before reaching the Abandoned Tomb, on a corpse lying at the end of a small corridor past the area with the Demon and several Skeletons. The body holds both the ring and the Old Sage's Blindfold."],
                    "effect": "Boosts the power of offensive pyromancies by 20%."
                },
                {
                    "name": "Morne's Ring",
                    "href": "/wiki/Morne%27s_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955158791931/1E6DDB0FAFD951BAF37EC074B6639D54A1CA07F7/",
                    "availability": ["From the Road of Sacrifices bonfire, drop from the ledge behind the first Corvian Storyteller. Continue onward until reaching a bridge with another Storyteller at the end and several Corvians scattered about. Drop by the right side before crossing and to a small ledge below, then follow the narrow path until reaching a cave guarded by two Festering Starved Hounds. The ring can be found on a corpse inside, along with another one that holds the Braille Divine Tome of Carim."],
                    "effect": "Boosts the power of offensive miracles by 12%."
                },
                {
                    "name": "Ring of the Sun's First Born",
                    "href": "/wiki/Ring_of_the_Sun%27s_First_Born",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394530543722/69663AD116D2B6ACE42DC1DBF8F9EADF3077FFCF/",
                    "availability": ["Found at Irithyll of the Boreal Valley.From the Pontiff Sulyvahn bonfire, head back out toward the railing and fall straight onto the altar below."],
                    "effect": "Boosts the power of offensive miracles by 20%."
                },
                {
                    "name": "Lingering Dragoncrest Ring",
                    "href": "/wiki/Lingering_Dragoncrest_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955165250812/79EE7C73970F3D72750D202936EEAB47D9001D63/",
                    "availability": ["Found in the Farron Keep, dropped by the Great Crab dwelling on the murky water to the left of the Keep Ruins bonfire and the main gate. If the player befriended the giant archer, he will lend a hand in defeating it in this place."],
                    "effect": "Extends the duration of spell effects by 30%.",
                    "ng+": [
                        {
                            "name": "Lingering Dragoncrest Ring +1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978469633/FC2A8AA402C91B2A888D58A136A93C1E671C4FA0/",
                            "availability": ["Found in the Road of Sacrifices, on a corpse lying near the first Great Crab in the Crucifixion Woods."],
                            "effect": "Extends the duration of spell effects by 35%."
                        },
                        {
                            "name": "Lingering Dragoncrest Ring +2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987553525/2B43066A57AA62B4B1E4503C10920187E9E5D8C6/",
                            "availability": ["Found in the Grand Archives, on a corpse lying halfway up the tower with the three Gertrude's Knights at the library's main dome."],
                            "effect": "Extends the duration of spell effects by 40%."
                        }
                    ]
                },
                {
                    "name": "Sage Ring",
                    "href": "/wiki/Sage_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955158806941/FB2E1FE1D2820A18DC41BF3CD42DEEB518BE036F/",
                    "availability": ["Found in the Road of Sacrifices, in a secluded room guarded by a Lycanthrope to the left of the staircase that gives access to the right entrance of the keep. The room can also be entered by a hole on the floor located between the first and second pillars to the right after entering the final area before the Crystal Sage."],
                    "effect": "Increases virtual Dexterity by 30, effectively increasing spell casting speed.",
                    "ng+": [
                        {
                            "name": "Sage Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987545489/00FEA46D00E815831AB79D4ACEDDEA1B8F157E3F/",
                            "availability": ["Found in the Grand Archives, on a corpse lying along the rafters after dropping down from Gertrude's bird cage, on the east-southern corner."],
                            "effect": "Increases virtual Dexterity by 35, effectively increasing spell casting speed."
                        },
                        {
                            "name": "Sage Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987465982/EE1D1E894C41A44D92A9BCD5EF7F8833DDDA9A04/",
                            "availability": ["Found in the Consumed King's Garden. While riding the lift into the garden, jump off midway onto the platform leading to the Estus Shard. The ring will be on a part of the broken stairs opposite the shard that must be jumped to."],
                            "effect": "Increases virtual Dexterity by 40, effectively increasing spell casting speed."
                        }
                    ]
                },
                {
                    "name": "Dusk Crown Ring",
                    "href": "/wiki/Dusk_Crown_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394538900977/6015ADD7782EBD65244FEECD1DEC3121592ECE07/",
                    "availability": ["Found in the Irithyll Dungeon, on a corpse lying in the far-left cell of the second cell block."],
                    "effect": "For the majority of spells, equipping this ring will reduce its FP consumption by a value between 20% and 25%, while reducing HP by 15%, rounded down. However, wearing this ring does not affect spells which constantly drain one's FP while held, such as Fire Surge and Divine Pillars of Light."
                },
                {
                    "name": "Leo Ring",
                    "href": "/wiki/Leo_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394530548836/B2D1ADA45269CEB013397D818042283BB39DF923/",
                    "availability": ["Found in Irithyll of the Boreal Valley, in a chest on the second floor of the gallery guarded by three Silver Knights, after exiting the drainage ditch with several Sewer Centipedes."],
                    "effect": "Increases Counter Attack damage by 15%, causing them to deal a total of 49.5% more damage."
                },
                {
                    "name": "Wolf Ring",
                    "href": "/wiki/Wolf_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955165343147/037EE75A7963205327ECAC7214D47B77CF07852E/",
                    "availability": ["Awarded to the player for reaching Rank 2 in the Watchdogs of Farron. Achieving this rank requires offering 30 Wolf's Blood Swordgrass to the Old Wolf of Farron."],
                    "effect": "Increases Poise by 4%.",
                    "ng+": [
                        {
                            "name": "Wolf Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978530930/CBC202EDE3D0B432DCCCB2301D066BEAF455B3E1/",
                            "availability": ["Found in Farron Keep, hidden behind a wall around the Keep Ruins bonfire."],
                            "effect": "Increases Poise by 6%."
                        },
                        {
                            "name": "Wolf Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987615066/D5D0D957B7270C7C318339E8499A57A6396CF118/",
                            "availability": ["Found in the Cemetery of Ash, on a corpse lying immediately to the left after opening the door from the Iudex Gundyr bonfire."],
                            "effect": "Increases Poise by 8%."
                        }
                    ]
                },
                {
                    "name": "Hawk Ring",
                    "href": "/wiki/Hawk_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155367384/717863F2764B5F19F599B5B9C64D42E260BB7980/",
                    "availability": ["Dropped by the giant archer at the top of the highest tower in the Undead Settlement. Alternatively, if the player collects all Young White Branches found in the Undead Settlement, the Cathedral of the Deep and the Farron Keep, the giant will die and the ring can then be looted from his body at the top of the aforementioned tower."],
                    "effect": "The Hawk Ring greatly extends the range of arrows, reducing both damage drop-off and arc on long distance shots."
                },
                {
                    "name": "Hornet Ring",
                    "href": "/wiki/Hornet_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394539977681/C35EE05E1614C846FAFFFD7B06A948615003259B/",
                    "availability": ["Found in the Untended Graves. From the shrine's entrance, follow the path on the right. The ring can be found near the same grave where Hawkwood usually goes to pray in the Cemetery of Ash. It is guarded by a greataxe-wielding Black Knight and will appear only after the Abyss Watchers have been defeated."],
                    "effect": "Increases the damage of ripostes by approximately 30%, and the damage of backstabs by 13-18%."
                },
                {
                    "name": "Knight Slayer's Ring",
                    "href": "/wiki/Knight_Slayer%27s_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196146018805/6FBF80E299329E9FB0C1499A0B176F31C5865CE9/",
                    "availability": [
                        "Catacombs of Carthus. Dropped by dark spirit Knight Slayer Tsorig. From the Catacombs of Carthus bonfire, head downstairs and enter the first doorway on the right, where an Ember can be found at the end. Tsorig will invade as the player makes their way out.",
                        "Smouldering Lake. If the player did not defeat Tsorig in the catacombs, he will drop the ring in this location. He awaits hidden near the lowermost staircase of the level, which leads to a lava pool."
                    ],
                    "effect": "Smouldering Lake"
                },
                {
                    "name": "Ring of the Evil Eye",
                    "href": "/wiki/Ring_of_the_Evil_Eye_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196151317700/2DD04D725114B1D3B1CFA751CA4C5FBCFB2D43EC/",
                    "availability": ["Given by Anri of Astora within the Catacombs of Carthus, if the player tells them the whereabouts of Horace the Hushed.\nAlternatively, Anri will give the ring to the player in the Church of Yorshka if they are not told of Horace's location."],
                    "effect": "Restores 30 HP per enemy killed.",
                    "ng+": [
                        {
                            "name": "Ring of the Evil Eye+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978507069/02BB19768F6FB4FA2D6D1017631121B8FCF7E156/",
                            "availability": ["Found in the Cathedral of the Deep behind the giant concealed statue, right before the Deacons of the Deep."],
                            "effect": "Restores 33 HP per enemy killed."
                        },
                        {
                            "name": "Ring of the Evil Eye+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978434470/12D244D5959F44FE98131FF0C1FAEA81BF58106A/",
                            "availability": ["Found in the High Wall of Lothric, in a corner behind some barrels in the room where the Cell Key and the first Estus Shard are found."],
                            "effect": "Restores 35 HP per enemy killed."
                        }
                    ]
                },
                {
                    "name": "Farron Ring",
                    "href": "/wiki/Farron_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955165833402/46932047A2D5F5DD3354263502B6C6465719482F/",
                    "availability": ["Presented to the player by Hawkwood after defeating the Abyss Watchers. The player may have to travel to Firelink Shrine and then reload the area in order to activate Hawkwood's presence.\nDropped by Hawkwood if the player kills him at anytime throughout the course of the game after defeating the Abyss Watchers. This can be achieved either at Firelink Shrine or after defeating him in the Farron Keep."],
                    "effect": "Reduces skill FP consumption by 25%. Reduced FP cost is rounded up to the nearest point, so additional FP is only saved per 4 points of increased cost of a skill "
                },
                {
                    "name": "Dragonscale Ring",
                    "href": "/wiki/Dragonscale_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394539120772/53F11F59D3854FA30A776CA2B7C95E7E6A86F6C4/",
                    "availability": ["Found in the Consumed King's Garden, on a corpse located halfway up the second lift in the area. The player needs to jump off to a ledge as the elevator moves either up or down."],
                    "effect": "Reduces damage taken from backstabs by 30%."
                },
                {
                    "name": "Horsehoof Ring",
                    "href": "/wiki/Horsehoof_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955164549642/F876F10EDBE3BA6D426555C938AF99852EAEB21E/",
                    "availability": ["Found in Firelink Shrine. Sold by Unbreakable Patches for 500 souls or dropped by him if killed.\nFor the ring to appear in Patche's inventory, Greirat must be present in Firelink Shrine at the same time as him. If Patches mentions Greirat when talked to, then the ring will be added to his selling wares."],
                    "effect": "Enemies lose 30% more stamina when guarding against the player's kicks."
                },
                {
                    "name": "Wood Grain Ring",
                    "href": "/wiki/Wood_Grain_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232669474052659/1274267997998854D423BEEB79590FB8E38E29AE/",
                    "availability": ["Sold by the Shrine Handmaid for 3,000 souls once she has been given the Easterner's Ashes."],
                    "effect": "Increases equipped weapon's Durability by 20%.",
                    "ng+": [
                        {
                            "name": "Wood Grain Ring+1 (NG+)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781987456779/9BCD96F5649E518ABE776E004F0310E96FD9E76F/",
                            "availability": ["Found in the Consumed King's Garden. When taking the lift to enter the garden, the ring is on a corpse lying behind the lift at the bottom."],
                            "effect": "Increases equipped weapon's Durability by 30%."
                        },
                        {
                            "name": "Wood Grain Ring+2 (NG++)",
                            "img": "https://steamuserimages-a.akamaihd.net/ugc/964233781978602989/AD43F80039647396981B1B245B611E35885796B2/",
                            "availability": ["Found in Irithyll of the Boreal Valley. From the Distant Manor, head back into the drainage ditch and into the gallery guarded by three Silver Knights. The ring can be found on a corpse lying to the right after exiting the gallery."],
                            "effect": "Increases equipped weapon's Durability by 40%."
                        }
                    ]
                },
                {
                    "name": "Flynn's Ring",
                    "href": "/wiki/Flynn%27s_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155371658/37C9B71877B5536A4B39E44D18D3D129BC96A960/",
                    "availability": ["Found in the Undead Settlement. Jump off the lift that leads to the Road of Sacrifices while riding its upper part and onto a wooden scaffolding, then follow the only path available, fighting a Demon with Siegward along the way. The ring can be found on a corpse once reaching the rooftop of the next building."],
                    "effect": "Lowering the player's Equip Load increases attack power."
                },
                {
                    "name": "Magic Clutch Ring",
                    "href": "/wiki/Magic_Clutch_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394530520856/5F7DA55CAA607F9DFA976820C01A294DBDC29035/",
                    "availability": ["Found in Irithyll of the Boreal Valley. From Central Irithyll, proceed through the level until reaching a cathedral at the end of the main street. The ring can be uncovered behind an illusory wall located to the right of the altar holding the Ring of the Sun's First Born."],
                    "effect": "Increases damage dealt by Magic sources, including weapons, by 15% while reducing physical damage absorption by 10%. In PvP, Magic attack is increased by 8% and physical absorption is reduced by 15%."
                },
                {
                    "name": "Lightning Clutch Ring",
                    "href": "/wiki/Lightning_Clutch_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665627942454/AD37ACD00A652F572445C4F9F72F8F090F862875/",
                    "availability": ["Found in Archdragon Peak, on a corpse located in an alcove to the left of the gate that leads to the Ancient Wyvern boss battle and past a Man Serpent."],
                    "effect": "Increases damage dealt by Lightning sources, including weapons, by 15% while reducing physical damage absorption by 10%. In PvP, Lightning attack is increased by 8% and physical absorption is reduced by 15%."
                },
                {
                    "name": "Fire Clutch Ring",
                    "href": "/wiki/Fire_Clutch_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155354884/97E14996D9456E64922698D14AEADC8332EEC38E/",
                    "availability": ["Found in the Undead Settlement, behind the guillotine near the building where Cornyx's cell is located and above the Cliff Underside bonfire."],
                    "effect": "Increases damage dealt by Fire sources, including weapons, by 15% while reducing physical damage absorption by 10%. In PvP, Fire attack is increased by 8% and physical absorption is reduced by 15%."
                },
                {
                    "name": "Dark Clutch Ring",
                    "href": "/wiki/Dark_Clutch_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394538911266/B673190790F491E2782C72787C93598CADA4241A/",
                    "availability": ["Found in the Irithyll Dungeon. Dropped by the Mimic at the far-end of the sewers."],
                    "effect": "Increases damage dealt by Dark sources, including weapons, by 15% while reducing physical damage absorption by 10%.  In PvP, Dark attack is increased by 8% and physical absorption is reduced by 15%."
                },
                {
                    "name": "Red Tearstone Ring",
                    "href": "/wiki/Red_Tearstone_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665628509061/A30F14811AE36FEF6F4D5C4179FCAC07C31826CE/",
                    "availability": ["Found in Lothric Castle, just before the Dragonslayer Armour. From the Dragon Barracks, head across the bridge and through the entrance of the castle, heading upstairs and to the left. Continue forward and outside, where an entrance to the right should be followed, into a small chapel with the shortcut lift to the Grand Archives. Head to the left and outside onto a balcony where a corpse can be found holding the ring."],
                    "effect": "Boosts attack by 20% when HP is below 20%."
                },
                {
                    "name": "Blue Tearstone Ring",
                    "href": "/wiki/Blue_Tearstone_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155515987/28FDD0BFF74CA564D20CC37BFFB8AEF0F154E8D1/",
                    "availability": ["Found in the High Wall of Lothric. The ring is given to the player by Greirat after he has been freed from his cell and upon agreeing to help him (Cell Key required)."],
                    "effect": "Boosts all damage absorption by 20% when HP is below 20%."
                },
                {
                    "name": "Lloyd's Sword Ring",
                    "href": "/wiki/Lloyd%27s_Sword_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955159844696/6C5EDEA98DD24F2CAFA7B5485033BC646635AEAE/",
                    "availability": ["Found on a corpse in the Cathedral of the Deep. The body can be found lying on the central wall of the U-shaped corridor on the second floor, where the first Giant Slave attacks."],
                    "effect": "Boosts attack power of weapons and spells by 10% when the player's HP is at least at 98% full."
                },
                {
                    "name": "Lloyd's Shield Ring",
                    "href": "/wiki/Lloyd%27s_Shield_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232669473933025/E05A269DA3129204FEC2A629D5CC31B56A51123E/",
                    "availability": ["Sold by the Shrine Handmaid for 2,500 souls once she has been given the Paladin's Ashes."],
                    "effect": "In the normal campaign, the ring boosts damage absorption by 25% when the player's HP is at least at 98% full.In PvP, the ring boosts damage absorption by 15% when the player's HP is at least at 98% full."
                },
                {
                    "name": "Carthus Milkring",
                    "href": "/wiki/Carthus_Milkring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196145995472/CFB9277BC064302D59EEFEE3271F72BCFB43A853/",
                    "availability": ["Found in the Catacombs of Carthus, located at the end of an alley full of ancient urns after taking the large staircase with the first Skeleton Boulder."],
                    "effect": "Increases Dexterity by 3 and obscures the wearer while rolling."
                },
                {
                    "name": "Carthus Bloodring",
                    "href": "/wiki/Carthus_Bloodring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196146003723/555CB347E4C93D5954E8F892E23A3916F0F15534/",
                    "availability": ["From the Catacombs of Carthus bonfire, go downstairs and head right. Turn right at the corner and follow the long hallway inhabited by several Skeleton Wheels and Writhing Rotten Flesh to the end, where a corpse can be found holding the ring."],
                    "effect": "Boosts rolling invincibility while reducing damage absorption by 30% across the board."
                },
                {
                    "name": "Pontiff's Right Eye",
                    "href": "/wiki/Pontiff%27s_Right_Eye",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196151174549/9B36C7FC121FD6BA4F76012B27FA9A56DA92611A/",
                    "availability": ["Found in Irithyll of the Boreal Valley. Guaranteed drop from the Sulyvahn's Beast that ambushes on the bridge to Central Irithyll."],
                    "effect": "Boosts attacks to a maximum of +10%, as long attacking persists. Landing consecutive attacks will boost attacks in three tiers: 2%, 5%, then 10%."
                },
                {
                    "name": "Pontiff's Left Eye",
                    "href": "/wiki/Pontiff%27s_Left_Eye",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155258966/FF89A1840B29B42F8ABC2BFC211AB4F8B05BDA03/",
                    "availability": ["Obtained by transposing the Soul of Boreal Valley Vordt with Ludleth of Courland."],
                    "effect": "Recovers 30 HP for a determined number of successive attacks specific to each weapon type."
                },
                {
                    "name": "Aldrich's Ruby",
                    "href": "/wiki/Aldrich%27s_Ruby",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394535379044/883F48EB2BA829E2403C1343CEAF17FAEB6E4C6B/",
                    "availability": ["Dropped by the Deep Accursed found in Anor Londo's cathedral."],
                    "effect": "Recovers 85 HP for each successful critical attack."
                },
                {
                    "name": "Aldrich's Sapphire",
                    "href": "/wiki/Aldrich%27s_Sapphire",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955159859467/67378C71CDF2A6F244981E791C1A80C814BB6AFB/",
                    "availability": ["Dropped by the Deep Accursed found in the room behind the first Cathedral Knight on the bottom-most floor of the Cathedral of the Deep, before the open area where the two giants are located."],
                    "effect": "Recovers 15 FP for each successful critical attack."
                },
                {
                    "name": "Silvercat Ring",
                    "href": "/wiki/Silvercat_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196151195576/1609F583AF298E049AC1B59F260D60300499E761/",
                    "availability": ["Obtained as a gift from Sirris in Firelink Shrine after helping her defeat Creighton in Irithyll of the Boreal Valley."],
                    "effect": "Nullifies all fall damage from survivable falls. Does not prevent damage from lethal falls, such as being too high or out of boundaries."
                },
                {
                    "name": "Slumbering Dragoncrest Ring",
                    "href": "/wiki/Slumbering_Dragoncrest_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955159043138/0D4A6EE89DC9A763723F97EEC7934AB9B3A61B8D/",
                    "availability": ["Gift from Orbeck of Vinheim after purchasing the following sorceries: Aural Decoy (2,000 souls), Farron Flashsword (3,000 souls), Pestilent Mist (1,000 souls), Spook (2,000 souls)"],
                    "effect": "Silences all sounds made by its wearer."
                },
                {
                    "name": "Obscuring Ring",
                    "href": "/wiki/Obscuring_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233196151221258/0E3E06E346798E95F7CDF3C64F4EA43DDAFB542E/",
                    "availability": ["Obtained by reaching Rank 1 in the Rosaria's Fingers covenant by offering 10 Pale Tongues."],
                    "effect": "Hides the presence of its wearer when far away."
                },
                {
                    "name": "Untrue Dark Ring",
                    "href": "/wiki/Untrue_Dark_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155444903/6DB7700843D4BA9760CB6E0D1DF9B91D85F41109/",
                    "availability": ["Sold by Yuria of Londor for 5,000 souls."],
                    "effect": "Makes the wearer always have human appearance and removes the phantom glow when they are summoned or are invading. Secondarily, it also hides the burning effect from the wearer's attire when a Host of Embers, and the glow of weapons reinforced with certain spells, items or skills. The particle effects coming from the wearer and it's weapon still remain."
                },
                {
                    "name": "Untrue White Ring",
                    "href": "/wiki/Untrue_White_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155446465/D263E93771A64F8E9175F7B4407ADA01281C3B22/",
                    "availability": ["Sold by Yuria of Londor for 5,000 souls."],
                    "effect": "Gives the player the appearance of a white phantom no matter their affiliation or world status (e.g., it works as a Host of Embers or as any type of phantom or invader)."
                },
                {
                    "name": "Reversal Ring",
                    "href": "/wiki/Reversal_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233394535372642/3258E355221420273DF089507C17292AD40BCFA4/",
                    "availability": ["Found at the very end of Irithyll of the Boreal Valley in the Darkmoon Tomb, to the right of Gwyn's coffin. The area is concealed behind an illusory statue of Lord Gwyn. If Yuria's questline has progressed far enough, the tomb will already be open."],
                    "effect": "Swaps the player's animation set to that of the opposite gender. This effect has no impact on gameplay."
                },
                {
                    "name": "Skull Ring",
                    "href": "/wiki/Skull_Ring",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155205615/98715106C181FB24D36239D1C855E49EFA376926/",
                    "availability": ["Dropped by Ludleth of Courland in Firelink Shrine."],
                    "effect": "When worn, the enemies' line of sight and aggro range will be greatly increased, making the player easier to be detected."
                },
                {
                    "name": "Calamity Ring",
                    "href": "/wiki/Calamity_Ring_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964233665627962963/3D2C73BF76B30AA164C53C2E8C2B4D26A51286B4/",
                    "availability": ["Found in Archdragon Peak. Obtained by performing the \"Path of the Dragon\" gesture in front of the dragon statue at the Dragon-Kin Mausoleum."],
                    "effect": "Reduces all absorption values by 100%, causing all incoming attacks to deal twice as much damage."
                },
                {
                    "name": "Ring of Sacrifice",
                    "href": "/wiki/Ring_of_Sacrifice_(Dark_Souls_III)",
                    "img": "https://steamuserimages-a.akamaihd.net/ugc/964232955155531360/62138338FB1E701A47274817D6BFE4AE188226AC/",
                    "availability": ["One can be obtained by trading Loretta's Bone with Pickle Pee (You only need one to complete the achievement)."],
                    "effect": "The player will lose no souls upon death, but the ring itself will break and be removed from their inventory afterward. If the player dies by being cursed, the ring will fail to activate, causing all the usual effects of death and keeping the ring intact."
                }
            ],
        }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
