/* 英文人物数据 —— 与 data.js 中的人物一一对应（按 id 匹配）
   字段：name（英文名）、alt（中文名，作副标题）、years、field、summary、desc（\n 分段）、quote */
window.PEOPLE_EN = [
  /* ============ Scientists ============ */
  {
    id: 'newton', name: 'Isaac Newton', alt: '牛顿', years: '1643–1727',
    field: 'Physicist · Mathematician',
    summary: 'Unified the motions of heaven and earth with three laws and universal gravitation',
    desc: 'In 1687 Newton published the Principia Mathematica, setting out the three laws of motion and universal gravitation and founding classical mechanics. He also co-invented calculus (independently of Leibniz), used a prism to show that white light contains the whole spectrum, and built the first working reflecting telescope. For two centuries afterwards, from tides to planetary orbits, humanity could comprehend the entire universe with a single set of mathematics.\nBy making the world calculable he kindled the Enlightenment. Knighted in 1705, he was buried in Westminster Abbey in 1727 — the first scientist so honoured. Alexander Pope wrote: "Nature and Nature\u2019s laws lay hid in night: God said, Let Newton be! — and all was light."',
    quote: 'If I have seen further, it is by standing on the shoulders of giants.'
  },
  {
    id: 'einstein', name: 'Albert Einstein', alt: '爱因斯坦', years: '1879–1955',
    field: 'Physicist',
    summary: 'Rewrote space and time with relativity; E=mc² changed physics and history',
    desc: 'In his "miracle year" of 1905, a 26-year-old patent clerk published papers that transformed physics: special relativity, the light-quantum hypothesis and an explanation of Brownian motion. In 1915 he completed general relativity, describing gravity as the curvature of spacetime. When the 1919 eclipse expedition confirmed the bending of starlight, he became world-famous overnight.\nHe received the 1921 Nobel Prize for explaining the photoelectric effect. E=mc² opened the door to the nuclear age; during the Second World War he warned President Roosevelt of the atomic bomb, then spent his later years campaigning for peace. Einstein remains the human embodiment of the word "genius".',
    quote: 'Imagination is more important than knowledge. Knowledge is limited; imagination embraces the entire world.'
  },
  {
    id: 'curie', name: 'Marie Curie', alt: '居里夫人', years: '1867–1934',
    field: 'Physicist · Chemist',
    summary: 'Discovered polonium and radium, founded radiochemistry, first double Nobel laureate',
    desc: 'The Polish-born scientist, working with her husband Pierre in a leaky shed in Paris, processed tonnes of pitchblende to isolate a tenth of a gram of radium chloride, discovered the elements polonium and radium, and coined the term "radioactivity". In 1903 she became the first woman to win a Nobel Prize; in 1911 she won a second, in chemistry — still the only person honoured in two different sciences.\nDuring the First World War she drove "Little Curies" — mobile X-ray units — to the front lines, and an estimated million wounded soldiers were examined with their help. Her daughter Irène later won a Nobel Prize of her own. Curie\u2019s notebooks are still radioactive today, stored in lead-lined boxes: a passion paid for with her life, and the foundation of radiation therapy for cancer.',
    quote: 'Nothing in life is to be feared, it is only to be understood.'
  },
  {
    id: 'darwin', name: 'Charles Darwin', alt: '达尔文', years: '1809–1882',
    field: 'Naturalist',
    summary: 'On the Origin of Species changed forever how we understand life',
    desc: 'At 22 he sailed as a gentleman naturalist on HMS Beagle; five years among the fossils of South America and the finches of the Galápagos planted the question that haunted him. After more than twenty years of quiet work at Down House, On the Origin of Species appeared in 1859: every living thing descends, through natural selection, from common ancestors — and humankind is part of that single tree of life.\nThe shockwaves rolled on for a century; alongside the Copernican revolution it is among the deepest blows ever dealt to human self-regard. Alfred Russel Wallace\u2019s independent discovery pushed the idea into print, and genetics and DNA have since filled in the details. Evolution is the bedrock of modern biology — and of how we understand ourselves.',
    quote: 'From so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.'
  },
  {
    id: 'pasteur', name: 'Louis Pasteur', alt: '巴斯德', years: '1822–1895',
    field: 'Microbiologist · Chemist',
    summary: 'Proved microbes cause disease; pasteurisation and vaccines have saved hundreds of millions',
    desc: 'His swan-neck flask experiments demolished the ancient doctrine of spontaneous generation, showing that microbes are everywhere in the air. Summoned to save the French wine and silk industries, he invented pasteurisation — still protecting food today — and established that silkworm disease had a microbial cause.\nHe then established the germ theory of disease: infections come from micro-organisms. His anthrax and rabies vaccines founded immunology; in 1885 a boy bitten by a rabid dog became the first human saved by a vaccine made in a laboratory. The safety of our food and the logic of vaccination both rest on Pasteur\u2019s foundations, and the lives his work has saved are counted in the hundreds of millions.',
    quote: 'In the fields of observation, chance favours only the prepared mind.'
  },
  {
    id: 'turing', name: 'Alan Turing', alt: '图灵', years: '1912–1954',
    field: 'Mathematician · Computer scientist',
    summary: 'Defined computation with the Turing machine; broke Enigma and shortened WWII',
    desc: 'In 1936, aged 24, Turing proposed the "Turing machine", a thought experiment that defined what "computable" means — the theoretical blueprint of every computer ever built. At Bletchley Park during the war he led the attack on the German Enigma cipher and designed the Bombe machines that accelerated decryption; historians estimate his work shortened the war by more than two years and saved millions of lives.\nIn 1950 his paper "Computing Machinery and Intelligence" posed the question "Can machines think?" and proposed the Turing test — the founding act of artificial intelligence. In 1952 he was prosecuted for being gay and chemically castrated; he died two years later. He received a royal pardon in 2013 and now appears on the £50 note, remembered as the father of computer science and AI.',
    quote: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.'
  },
  {
    id: 'tuyouyou', name: 'Tu Youyou', alt: '屠呦呦', years: '1930–',
    field: 'Pharmaceutical chemist',
    summary: 'Found artemisinin in an ancient Chinese text and gave the world its best malaria drug',
    desc: 'In 1969, aged 39, Tu Youyou was seconded to the secret Chinese anti-malaria programme "Project 523". She combed more than two thousand traditional recipes, and a line from the 4th-century handbook Zhouhou Beiji Fang — "take a handful of qinghao, soak in two sheng of water, wring out the juice" — suggested the breakthrough: heat destroys the active compound. Her team switched to low-temperature ether extraction, and on sample No. 191, artemisinin finally appeared.\nArtemisinin-based combination therapy became the global standard against malaria and has saved millions of lives, especially children\u2019s, across Africa and Southeast Asia. In 2015 she became China\u2019s first Nobel laureate in physiology or medicine, praised for "changing the world with a single herb".',
    quote: 'Artemisinin is a gift from traditional Chinese medicine to the people of the world.'
  },
  {
    id: 'copernicus', name: 'Nicolaus Copernicus', alt: '哥白尼', years: '1473–1543',
    field: 'Astronomer',
    summary: 'Placed the Sun, not the Earth, at the centre — and started the scientific revolution',
    desc: 'The Polish canon and astronomer spent decades measuring planetary paths and reached a staggering conclusion: the Earth is not the centre of the universe but an ordinary planet circling the Sun. De revolutionibus orbium coelestium came off the press in 1543, as he lay dying — legend says he touched the fresh copy on his deathbed.\nHeliocentrism shook the Ptolemaic system and the human-centred worldview built on it; it is remembered as the first thunderclap of the scientific revolution. Bruno died for it, Galileo was tried for it, and Kepler and Newton forged it into the foundation of modern astronomy. Ever since, science has taught us the same humbling lesson: we are not the centre.',
  },
  {
    id: 'galileo', name: 'Galileo Galilei', alt: '伽利略', years: '1564–1642',
    field: 'Physicist · Astronomer',
    summary: 'Turned a telescope to the sky and founded experimental physics',
    desc: 'In 1609 Galileo raised his homemade telescope to the night sky: the Moon had mountains, Jupiter had four moons, Venus showed phases, and the Milky Way resolved into countless stars — the heavens were not a perfect crystal sphere. The evidence backed Copernicus and carried him before the Inquisition; in 1633 he was condemned for "vehement suspicion of heresy" and spent his last years under house arrest, murmuring — so the story goes — "And yet it moves."\nHe insisted that the book of nature "is written in the language of mathematics", studied falling bodies with inclined planes, and is called the father of modern science. The Vatican formally apologised 347 years later, in 1992.',
    quote: 'The universe is a grand book which is written in the language of mathematics.'
  },
  {
    id: 'maxwell', name: 'James Clerk Maxwell', alt: '麦克斯韦', years: '1831–1879',
    field: 'Physicist',
    summary: 'United electricity and magnetism in four equations and predicted electromagnetic waves',
    desc: 'Maxwell distilled Faraday\u2019s experimental laws of electricity and magnetism into four elegant equations — and drew a staggering conclusion from them: electromagnetic fields propagate as waves, travelling at exactly the speed of light. Light, in other words, is an electromagnetic wave. Hertz confirmed the waves, Marconi put them to work, and the entire wireless age is the echo of that deduction.\nEinstein said his own theory of relativity grew out of Maxwell\u2019s equations. Maxwell also founded statistical mechanics and took the world\u2019s first colour photograph. Dead at 48, he is honoured as the bridge between Newton and Einstein: Newton unified force, Maxwell unified fields, Einstein unified space and time.',
  },
  {
    id: 'mendeleev', name: 'Dmitri Mendeleev', alt: '门捷列夫', years: '1834–1907',
    field: 'Chemist',
    summary: 'Built the periodic table and left seats empty for elements not yet found',
    desc: 'In 1869, while writing a textbook, the St Petersburg professor noticed that listing the 63 known elements by atomic weight made their properties repeat in cycles. Mendeleev drew the pattern into a table — then did something bolder: he left gaps for elements that "ought to exist", predicting their atomic weights and chemistry.\nWithin a few years gallium, scandium and germanium were found, each matching his predictions, and the periodic law became the constitution of chemistry. Every new element extends his table; today the seventh period is complete with element 118, oganesson. The periodic table revealed an inner order to matter itself — a map that chemistry, materials science and astrophysics all still depend on.',
  },
  {
    id: 'fleming', name: 'Alexander Fleming', alt: '弗莱明', years: '1881–1955',
    field: 'Bacteriologist',
    summary: 'A "failed" petri dish yielded penicillin and opened the antibiotic age',
    desc: 'In September 1928, returning from holiday to St Mary\u2019s Hospital in London, Fleming noticed that one petri dish contaminated with mould had a clear ring around it — the mould had dissolved the staphylococci nearby. Instead of tossing the "failure", he isolated the substance: penicillin, the first true antibiotic.\nPurification and mass production were achieved by Florey and Chain; by the end of the Second World War penicillin was saving wounded soldiers by the thousand, and the three men shared the 1945 Nobel Prize. Antibiotics turned tuberculosis, sepsis and wound infections from death sentences into treatable conditions, visibly extending average human lifespans. Fleming always insisted the discovery belonged to the moment when "accident met a prepared mind".',
    quote: 'I did not invent penicillin. Nature did that. I only discovered it by accident.'
  },
  {
    id: 'hawking', name: 'Stephen Hawking', alt: '霍金', years: '1942–2018',
    field: 'Theoretical physicist',
    summary: 'Explored black holes and the Big Bang from his wheelchair, and brought cosmology to millions',
    desc: 'At 21, just as his research was beginning, Hawking was diagnosed with motor neurone disease and given two years to live. He then spent half a century rewriting cosmology: with Roger Penrose he showed that black holes begin with singularities like the Big Bang\u2019s, then stunned the field with "Hawking radiation" — black holes are not entirely black but slowly evaporate, forcing general relativity and quantum mechanics to the same table.\nImprisoned in his body and speaking through a synthesiser, he sold 25 million copies of A Brief History of Time, turning black holes and the arrow of time into dinner-table conversation. The Lucasian chair he held at Cambridge was Newton\u2019s, 300 years earlier. On his death in 2018 his ashes were interred in Westminster Abbey, between Newton and Darwin.',
    quote: 'Remember to look up at the stars and not down at your feet.'
  },
  {
    id: 'wcrick', name: 'Watson and Crick', alt: '沃森与克里克', years: '1916–2004 / 1928–',
    field: 'Molecular biologists',
    summary: 'Discovered the double helix of DNA — the code in which life is written',
    desc: 'In 1953, in Cambridge\u2019s Cavendish Laboratory, two young researchers — 25-year-old American postdoc James Watson and 36-year-old British physicist Francis Crick — pieced together Rosalind Franklin\u2019s X-ray diffraction images into a model of DNA: the double helix. Their one-page paper answered the century\u2019s great question: how is hereditary information stored, and how does it copy itself?\nThe pair shared the 1962 Nobel Prize with Maurice Wilkins. The double helix opened the age of molecular biology — the genetic code, genetic engineering, the Human Genome Project, PCR tests and CRISPR gene editing all stand on that twisting ladder.',
  },

  /* ============ Thinkers ============ */
  {
    id: 'laotzu', name: 'Laozi', alt: '老子', years: '6th century BC',
    field: 'Philosopher',
    summary: 'Five thousand characters of the Dao De Jing still guide the world\u2019s philosophy',
    desc: 'Traditionally a keeper of the Zhou royal archives — Confucius once consulted him on ritual — Laozi is said to have ridden a black ox west through the Hangu Pass in old age, and at the gatekeeper\u2019s request wrote down five thousand characters before vanishing. Those characters are the Dao De Jing: the "Way" that underlies all things, teaching wu wei (effortless action), that the soft overcomes the hard, and that fortune and misfortune breed each other.\nDaoism and Confucianism form the twin roots of the Chinese spirit: serve as a Confucian, withdraw as a Daoist. The Dao De Jing is the most translated of all Chinese classics; Heidegger tried to render it, and its ecological wisdom — "follow the way of nature" — speaks more clearly now than ever.',
    quote: 'The Tao that can be told is not the eternal Tao.'
  },
  {
    id: 'confucius', name: 'Confucius', alt: '孔子', years: '551–479 BC',
    field: 'Philosopher · Educator',
    summary: 'Founded Confucianism and universal education; East Asia still lives in his ethics',
    desc: 'Born in the state of Lu, Confucius wandered fourteen years among the kingdoms offering rulers his ideal of benevolent government, then returned home in old age to edit the classics and teach. He broke the nobility\u2019s monopoly on learning — "education for all, regardless of rank" — and by tradition taught three thousand disciples, seventy-two of them eminent. The Analects his students compiled became East Asia\u2019s spiritual sourcebook.\nFrom the Han dynasty onward, Confucianism was the orthodox creed of Chinese civilisation: the imperial examinations tested his classics for 1,300 years, and the values of ren (humaneness), yi, li and filial piety — with the golden rule "do not impose on others what you do not wish for yourself" — shaped China, Korea, Japan and Vietnam. He is honoured as the "First Teacher", with temples across the whole Confucian world.',
    quote: 'Do not impose on others what you do not wish for yourself.'
  },
  {
    id: 'zhuangzi', name: 'Zhuangzi', alt: '庄子', years: 'c. 369–286 BC',
    field: 'Philosopher · Writer',
    summary: 'Butterfly dreams and the Peng bird — Daoist freedom taken to its limit',
    desc: 'Zhuang Zhou, a minor lacquer-garden official, lived poor but refused office: offered the premiership of Chu, he chose to remain a turtle "dragging its tail in the mud" rather than be venerated dead in a temple. The book of thirty-three chapters bearing his name argues through dazzling parables — the Leviathan Peng, the butterfly dream, the butcher whose cleaver never dulls, the debate on the happiness of fish.\nHe carried Laozi\u2019s "way of nature" to the absolute freedom of the individual spirit: the equality of all things, wandering at ease, accepting each moment as it comes. Wei-Jin metaphysics, Chan Buddhism, Chinese landscape painting and the poet Li Bai all flow from his bloodstream — and modern readers rediscover him as an antidote to anxiety, timeless after two thousand years.',
    quote: 'Life is finite, while knowledge is infinite.'
  },
  {
    id: 'buddha', name: 'Gautama Buddha', alt: '释迦牟尼', years: 'c. 563–483 BC',
    field: 'Founder of Buddhism',
    summary: 'Awakened under a Bodhi tree; his path guides hundreds of millions',
    desc: 'Siddhartha Gautama, prince of Kapilavastu, left his palace at 29 after seeing sickness, old age and death, and spent six years as an ascetic before abandoning extremes for the Middle Way. At 35, meditating beneath a Bodhi tree, he awoke as the Buddha. For the next forty-five years he taught along the Ganges: the Four Noble Truths, the Eightfold Path, and dependent origination — suffering exists, has a cause, and can be ended, and the door of awakening is open to all.\nBuddhism spread across India under Emperor Ashoka, then north to China, Korea and Japan and south to Sri Lanka and Southeast Asia; with Christianity and Islam it is one of the world\u2019s three great religions. Its meditation now crosses every border of faith, shaping psychology and art worldwide.',
    quote: 'Do no evil, cultivate all good, purify your own mind — this is the teaching of the Buddhas.'
  },
  {
    id: 'socrates', name: 'Socrates', alt: '苏格拉底', years: '469–399 BC',
    field: 'Philosopher',
    summary: 'Questioned Athens into philosophy — the founding father of the Western tradition',
    desc: 'Barefoot in the Athenian agora, Socrates stopped passers-by with questions: What is justice? What is virtue? He gave no answers; he peeled away his interlocutor\u2019s confidence layer by layer with relentless follow-ups — the "Socratic method", midwifery for ideas. The Delphic oracle called no one wiser; his own gloss: "I know only that I know nothing."\nAfter the Peloponnesian War, Athens tried him for corrupting the youth and impiety. He refused to flee, and drank the hemlock with composure. Plato and Xenophon recorded his conversations, and Western philosophy was set on its course — Whitehead remarked that the following two millennia are "a series of footnotes to Plato".',
    quote: 'I know that I know nothing.'
  },
  {
    id: 'aristotle', name: 'Aristotle', alt: '亚里士多德', years: '384–322 BC',
    field: 'Philosopher · Polymath',
    summary: 'Invented formal logic and systematised all knowledge; shaped the West for two millennia',
    desc: 'He entered Plato\u2019s Academy at seventeen and stayed twenty years; later he tutored the young Alexander the Great and founded the Lyceum in Athens, teaching as he walked — hence the "Peripatetic" school. His surviving works span logic, physics, biology, ethics, politics and poetics: the most complete system of knowledge the ancient world produced, built on systematic observation — including animal dissection.\nHis syllogisms governed Western thought for two thousand years; the Middle Ages simply called him "The Philosopher", and Aquinas wove him into Christian theology. His creed — "Plato is dear to me, but dearer still is truth" — remains one of science\u2019s oldest mottoes.',
    quote: 'I love my teacher, but I love the truth more.'
  },
  {
    id: 'muhammad', name: 'Muhammad', alt: '穆罕默德', years: '570–632',
    field: 'Founder of Islam · Statesman',
    summary: 'Founded Islam and united Arabia; shaped a civilisation that spans the world',
    desc: 'Muhammad was born in Mecca on the Arabian peninsula. At 40, according to Islamic tradition, he received his first revelation in the cave of Hira; the verses delivered over the following twenty-three years were compiled as the Quran. In 622 he and his followers migrated to Medina — the Hijra, year one of the Islamic calendar — and built a united community; by 630 Mecca had accepted him peacefully, and at his death most of Arabia was united.\nIslam then spread with astonishing speed across the Middle East, North Africa, Central and South Asia and Southeast Asia; nearly two billion Muslims today make it the world\u2019s second-largest religion. Arab-speaking Islamic civilisation preserved and extended Greek, Persian and Indian learning, led the world in mathematics, medicine and astronomy, and helped feed Europe\u2019s Renaissance.',
  },
  {
    id: 'descartes', name: 'René Descartes', alt: '笛卡尔', years: '1596–1650',
    field: 'Philosopher · Mathematician',
    summary: '"I think, therefore I am" — rebuilt all knowledge on the foundation of doubt',
    desc: 'A French nobleman\u2019s son who soldiered across Europe, Descartes settled in Holland at 32 to think and write. He resolved to doubt everything — the senses deceive, dreams imitate reality — until he reached one point beyond doubt: doubting requires a doubter. Cogito, ergo sum became the first principle of modern philosophy.\nHe split the world into mind and matter, leaving nature to mathematics and mechanics — the dualism modern thought still wrestles with — and invented analytic geometry, wedding algebra to curves: every line a coordinate plane is an equation. Hegel called him the father of modern philosophy; Spinoza, Leibniz and Kant all played on the board he set.',
    quote: 'I think, therefore I am.'
  },
  {
    id: 'kant', name: 'Immanuel Kant', alt: '康德', years: '1724–1804',
    field: 'Philosopher',
    summary: 'Reconciled experience and reason in three Critiques, drawing the map of modern thought',
    desc: 'The professor of Königsberg hardly ever left his city, yet philosophy came to revolve around it. Woken — in his own words — from "dogmatic slumber" by Hume\u2019s scepticism, he spent a decade writing the Critique of Pure Reason and its companions, asking: What can I know? What ought I to do? What may I hope?\nTime, space and causality, he argued, are the spectacles through which the mind builds experience; knowledge begins with experience but does not end there. In ethics he set the categorical imperative — act only on rules you could will to be universal laws; treat every person as an end, never merely a means. His essay defined the Enlightenment: "Sapere aude! Dare to use your own reason." Modern ethics, epistemology and the idea of universal rights all start here.',
    quote: 'Two things fill the mind with ever-growing wonder: the starry sky above me and the moral law within me.'
  },
  {
    id: 'adamsmith', name: 'Adam Smith', alt: '亚当·斯密', years: '1723–1790',
    field: 'Economist · Philosopher',
    summary: 'The Wealth of Nations revealed the "invisible hand" and founded modern economics',
    desc: 'The Glasgow professor of moral philosophy first made his name with The Theory of Moral Sentiments; in 1776 came An Inquiry into the Nature and Causes of the Wealth of Nations. Its argument: when people pursue their own interest they are "led by an invisible hand" to promote the public good; the wealth of nations grows from the division of labour and free trade, not from monopoly and mercantilism. His pin-factory example first explained how specialisation multiplies productivity.\nThe book appeared in the same year as the American Declaration of Independence — one redrew the political map, the other the economic order. Every economist since, from Ricardo to Keynes, argues in his shadow: he is the father of modern economics, and the moral limits of markets are still debated in his terms.',
    quote: 'It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.'
  },
  {
    id: 'marx', name: 'Karl Marx', alt: '马克思', years: '1818–1883',
    field: 'Philosopher · Revolutionary theorist',
    summary: 'Das Kapital and historical materialism reshaped the twentieth-century world',
    desc: 'A Prussian doctor of philosophy, exiled in turn from Paris, Brussels and London, Marx spent forty years in his seat at the British Museum writing Das Kapital. The Communist Manifesto, written with Engels in 1848, opens with "A spectre is haunting Europe" and lays out historical materialism: the conflict between productive forces and relations of production drives history; surplus value exposes capitalism\u2019s inner contradictions; "Working men of all countries, unite!"\nHis ideas remade the twentieth century — from the Russian Revolution to the Chinese revolution, at its height nearly a third of humanity lived under states claiming his legacy. Even his critics agree: the modern world cannot be understood without the questions Marx asked about capital, labour and globalisation.',
    quote: 'The philosophers have only interpreted the world in various ways; the point, however, is to change it.'
  },
  {
    id: 'nietzsche', name: 'Friedrich Nietzsche', alt: '尼采', years: '1844–1900',
    field: 'Philosopher',
    summary: 'Proclaimed "God is dead", called for a revaluation of all values, and electrified modern thought',
    desc: 'A professor of classical philology at 24, Nietzsche moved from The Birth of Tragedy through The Gay Science, Thus Spoke Zarathustra and Beyond Good and Evil. "God is dead" was not a celebration but a diagnosis: with the old values collapsed, humanity must become the creator of values itself. The Übermensch, the will to power, eternal recurrence, the revaluation of all values — his concepts electrified philosophy, literature and psychology alike.\nMental collapse at 44 ended his writing a decade before his death; his sister\u2019s falsified editions let the Nazis steal his name, and postwar scholarship redeemed him. He wrote in aphorisms and songs, and modernism, existentialism and postmodernism all pass through his shadow.',
    quote: 'That which does not kill us makes us stronger.'
  },

  /* ============ Inventors ============ */
  {
    id: 'archimedes', name: 'Archimedes', alt: '阿基米德', years: 'c. 287–212 BC',
    field: 'Mathematician · Engineer',
    summary: '"Give me a place to stand" — the greatest engineer and geometer of antiquity',
    desc: 'The Syracusan is antiquity\u2019s supreme mathematician-engineer: he stated the law of buoyancy (shouting "Eureka!" in his bath), invented the Archimedes screw still used to raise water in Egypt, and built the catapults and claw machines that kept a Roman fleet at bay for two years.\nWith the method of exhaustion he pinned pi between two values and proved a sphere\u2019s volume is two-thirds of its circumscribing cylinder — a discovery he asked to have carved on his tomb. When Syracuse fell in 212 BC a Roman soldier cut him down as he bent over his diagrams, saying "Do not disturb my circles." His death has stood ever since as the symbol of mathematics\u2019s lost golden age.',
    quote: 'Give me a place to stand, and I shall move the Earth.'
  },
  {
    id: 'cailun', name: 'Cai Lun', alt: '蔡伦', years: '63–121',
    field: 'Inventor · Han dynasty eunuch',
    summary: 'Perfected papermaking, letting knowledge travel cheaply to everyone for the first time',
    desc: 'Born to a blacksmith\u2019s family, Cai Lun entered the Han court as a eunuch and was put in charge of the imperial workshops. In 105 AD he made paper from tree bark, hemp scraps, rags and old fishing nets — pounding, pulping, pressing and drying it into sheets that were light and cheap, the "Marquis Cai paper" that displaced costly bamboo and silk. The cost of writing collapsed overnight.\nPaper travelled west along the Silk Road: to Samarkand by the 8th century, to Europe by the 12th, replacing parchment. Between the bamboo slips of the Book of Songs and Gutenberg\u2019s press lies this single sheet of paper — the vehicle of literacy and the acceleration of civilisation. Papermaking heads China\u2019s Four Great Inventions, and Cai Lun ranks in the top ten of Hart\u2019s The 100: A Ranking of the Most Influential Persons in History.',
  },
  {
    id: 'bisheng', name: 'Bi Sheng', alt: '毕昇', years: 'c. 970–1051',
    field: 'Inventor · Northern Song dynasty',
    summary: 'Invented movable-type printing — the age of copyable information begins',
    desc: 'In the Qingli era (1041–1048), a common craftsman of Hangzhou named Bi Sheng carved characters in clay, hardened them in fire, set them in an iron frame coated with resin, and printed by pressure — one set of type, endlessly re-arranged. Woodblock printing demanded a full carving per book; movable type gave the written word a new, re-combinable life.\nHe never saw it widely adopted in his lifetime; Shen Kuo\u2019s Dream Pool Essays recorded the invention in detail and carried it to posterity. Movable type spread to Korea (a pioneer in metal type) and Japan, and westward to inspire Gutenberg. Bi Sheng\u2019s tomb was found in 1990 in Hubei. From clay type to laser phototypesetting, every revolution in typesetting starts at that little iron board.',
  },
  {
    id: 'gutenberg', name: 'Johannes Gutenberg', alt: '古腾堡', years: 'c. 1400–1468',
    field: 'Inventor',
    summary: 'His printing press put books in every hand and ignited the Reformation and the scientific revolution',
    desc: 'The Mainz goldsmith combined a wine press, lead-tin-antimony type metal, oil-based ink and a screw mechanism into Europe\u2019s first practical movable-type printing system. The forty-two-line Bible of c. 1455 — about 180 copies — was as beautiful as a manuscript and hundreds of times faster to make. Within fifty years Europe had printed more than twenty million books: more than the previous millennium of hand-copying combined.\nBook prices collapsed and literacy soared; Luther\u2019s Ninety-five Theses rode the press across Germany, and the Reformation, the Renaissance and the scientific revolution all travelled on printed pages. Printing is called "the machine that changed the world", and beneath Gutenberg\u2019s statue in Mainz is carved: "Here thought found wings."',
  },
  {
    id: 'watt', name: 'James Watt', alt: '瓦特', years: '1736–1819',
    field: 'Engineer · Inventor',
    summary: 'Supercharged the steam engine and gave the Industrial Revolution its heart',
    desc: 'The legend has him watching a kettle; the truth is better. In 1765 Watt, a Glasgow instrument maker, while repairing a model Newcomen engine, invented the separate condenser — tripling steam efficiency at a stroke. He went on to add planetary gearing, the centrifugal governor and the double-acting cylinder, converting reciprocation into rotation: steam could now drive anything a factory needed.\nHis partnership with the entrepreneur Matthew Boulton pioneered the modern "inventor plus industrialist" model, and the unit of power bears his name. Engels called the steam engine "the lever that changed the world". Coalfields became power sources, workshops became factories, railways and steamships shrank the planet — the roar of the Industrial Revolution began in Watt\u2019s workshop.',
  },
  {
    id: 'edison', name: 'Thomas Edison', alt: '爱迪生', years: '1847–1931',
    field: 'Inventor · Entrepreneur',
    summary: 'Light bulb, phonograph, power grid — he turned "invention" itself into an industry',
    desc: 'A newsboy with three months of schooling, Edison held 1,093 American patents. His phonograph of 1877 let sound be captured for the first time; after thousands of filament experiments his practical incandescent lamp lit up in 1879, followed by the dynamos, lines and meters to feed it — in 1882 Pearl Street Station lit Wall Street, and the world\u2019s first central power system was born. "System invention" became the template of modern industry.\nHis Menlo Park laboratory was called the "invention factory", and its team-based, market-driven research model is still how technology is made. Electric light banished the night; the phonograph and the movie camera created new industries — and he described his own method best: "Genius is one percent inspiration and ninety-nine percent perspiration."',
    quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.'
  },
  {
    id: 'tesla', name: 'Nikola Tesla', alt: '特斯拉', years: '1856–1943',
    field: 'Inventor · Electrical engineer',
    summary: 'His alternating current powers the modern world; radio and robotics were his too',
    desc: 'The Serbian immigrant arrived with a letter of recommendation, split from Edison, and bet everything on alternating current. His induction motor and polyphase system won the "War of the Currents": the 1893 Chicago World\u2019s Fair ran on AC, and Niagara Falls was harnessed to his design — the grid that powers the planet is his architecture.\nHe held some 300 patents: the induction motor, the Tesla coil, a radio-controlled boat that amazed 1898 audiences, early X-ray experiments and wireless power dreams. The unit of magnetic flux density is named after him. He died alone in a New York hotel room, forgotten for decades — and has since become pop culture\u2019s archetype of the genius the world failed.',
    quote: 'The present is theirs; the future, for which I really worked, is mine.'
  },
  {
    id: 'bell', name: 'Alexander Graham Bell', alt: '贝尔', years: '1847–1922',
    field: 'Inventor · Teacher of the deaf',
    summary: 'Invented the telephone — the human voice crosses a thousand miles',
    desc: 'His mother and wife were both deaf, and Bell\u2019s life\u2019s work was teaching the hearing-impaired: his "Visible Speech" method and his teaching came before his inventions. On 10 March 1876, aged 29, he spoke into his transmitter — "Mr Watson, come here, I want to see you!" — and in the next room his assistant heard the first sentence ever carried by telephone.\nThe Bell Telephone Company grew into AT&T; Bell called the telephone the invention that "made cities friendly". He never stopped: a photophone that carried speech on light, improvements to the phonograph, founding support for the journal Science and the National Geographic Society. His gravestone bears no word of the telephone — it calls him "a friend of the deaf".',
  },
  {
    id: 'wright', name: 'The Wright Brothers', alt: '莱特兄弟', years: '1867–1912 / 1871–1948',
    field: 'Inventors · Aviation pioneers',
    summary: 'First powered flight in 1903 — mankind grows wings',
    desc: 'Wilbur and Orville Wright ran a bicycle shop in Dayton, Ohio, with no college degrees — and with scientific method they cleared the three hurdles where better-funded rivals had died. They built their own wind tunnel and tested over two hundred wing shapes; they invented three-axis control, solving the problem of turning without rolling out of the sky; they machined their own lightweight aluminium engine block. On 17 December 1903 the Flyer I flew for 12 seconds and 36 metres at Kitty Hawk — the first controlled, powered, heavier-than-air flight in history.\nEleven years later aircraft flew in the First World War; sixteen years after that, Lindbergh crossed the Atlantic alone. The brothers were famously modest; the younger said their real luck was simpler: "Isn\u2019t it astonishing that all these secrets were preserved for so many years just so that we could discover them!"',
    quote: 'Isn\u2019t it astonishing that all these secrets have been preserved for so many years just so that we could invent them!'
  },
  {
    id: 'ford', name: 'Henry Ford', alt: '福特', years: '1863–1947',
    field: 'Entrepreneur · Inventor',
    summary: 'The assembly line put the world on wheels and rebuilt the modern factory',
    desc: 'Raised on a Michigan farm and twice failed in business, Ford founded the Ford Motor Company and in 1908 launched the Model T — sturdy, simple, cheap. In 1913 he installed the moving assembly line: chassis assembly time fell from twelve hours to ninety-three minutes, prices fell from $850 to $260, and the car became a worker\u2019s possession instead of a rich man\u2019s toy. America became "a nation on wheels".\nIn 1914 he announced the five-dollar day — double the going wage — so his own workers could buy what they built, and "Fordism" was born: mass production married to mass consumption. The assembly line spread to every industry, and the consumer society of the twentieth century rests on his foundations. His proudest claim: "I will build a car for the great multitude."',
    quote: 'Whether you think you can, or you think you can\u2019t — you\u2019re right.'
  },
  {
    id: 'nobel', name: 'Alfred Nobel', alt: '诺贝尔', years: '1833–1896',
    field: 'Inventor · Philanthropist',
    summary: 'Invented dynamite, then spent his fortune creating the world\u2019s greatest prize',
    desc: 'The Swedish chemist held 355 patents. His dynamite made blasting, mining and railways vastly more efficient — and made him uneasy, for it also killed. In 1888 a French newspaper mistook his brother\u2019s death for his own and published an obituary: "The merchant of death is dead." Nobel read his own epitaph and determined to rewrite it.\nHis will, signed in 1896, left 31 million kronor as a fund whose annual interest would honour those "who have conferred the greatest benefit to humankind" — in physics, chemistry, physiology or medicine, literature, and peace. The first prizes were awarded in 1901; for over 120 years the Nobel Prize has been humanity\u2019s most famous laurels. The man who invented dynamite is remembered for rewarding peace and knowledge.',
  },
  {
    id: 'timbl', name: 'Tim Berners-Lee', alt: '蒂姆·伯纳斯-李', years: '1955–',
    field: 'Computer scientist',
    summary: 'Invented the World Wide Web in 1989 — and gave it to everyone, free',
    desc: 'Working at CERN near Geneva, the British engineer wrote a 1989 proposal for sharing research by hypertext. He created the URL, HTTP and HTML, wrote the first web browser and server, and put up the world\u2019s first website: info.cern.ch. He called it the World Wide Web.\nThe decisive step was one he didn\u2019t take: CERN declined to patent the web, and from 1993 it was free to all. He went on to found the W3C to steward open standards, won the 2016 Turing Award, and was knighted. Every click on a phone or a search box runs on his protocols — the digital lives of billions rest on his gift.',
    quote: 'This is for everyone.'
  },

  /* ============ Leaders & Reformers ============ */
  {
    id: 'qinshihuang', name: 'Qin Shi Huang', alt: '秦始皇', years: '259–210 BC',
    field: 'Founding emperor of unified China',
    summary: 'Unified China, standardised writing and measures — his centralized state lasted 2,000 years',
    desc: 'He became king of Qin at thirteen and completed the conquest of the six rival states at thirty-eight, creating the first unified Chinese empire and coining the title "emperor" from the legendary sage-kings. He abolished feudalism for commanderies and counties directly appointed from the centre, standardised the script, currency and measures, built roads and canals, linked the northern walls into a Great Wall — fusing five centuries of civil war into one centralised state.\n"Unity" became the main axis of Chinese political civilisation ever after; the imperial-county framework he built lasted two millennia and shaped all of East Asia. He is equally a figure of controversy: book burnings, harsh laws, endless corvée — the Qin dynasty fell within years of his death. The terracotta army beneath Mount Li still stands as the footnote to that imperial ambition.',
  },
  {
    id: 'ashoka', name: 'Ashoka', alt: '阿育王', years: 'c. 304–232 BC',
    field: 'Emperor of the Maurya dynasty',
    summary: 'Renounced war after one slaughter, ruled by dharma, and sent Buddhism across Asia',
    desc: 'The third Mauryan emperor conquered almost the whole subcontinent by force — until the war against Kalinga, which his own edicts say killed a hundred thousand people and filled him with remorse. He laid down the sword, embraced Buddhism, and governed by dharma: free hospitals, planted trees, dug wells, tolerance for every creed, and missionaries dispatched abroad.\nHis pillars and rock edicts across the subcontinent made him among the first rulers to publish policy in writing to his people; he sent his own children to carry Buddhism to Sri Lanka, and from there the faith travelled the length of Asia. Twenty-two centuries later the Republic of India took his lion capital as its national emblem and his dharma wheel for its flag — an ancient emperor became a modern nation\u2019s name.',
  },
  {
    id: 'martinluther', name: 'Martin Luther', alt: '马丁·路德', years: '1483–1546',
    field: 'Protestant reformer',
    summary: 'Ninety-five theses split the Western church and opened the door to the modern world',
    desc: 'A German Augustinian friar struck by lightning who vowed to enter the monastery, Luther found his answer while studying Romans: "The righteous shall live by faith." On 31 October 1517 he posted the Ninety-five Theses against indulgences on the Wittenberg church door; riding Gutenberg\u2019s press, they crossed Germany in two weeks and Europe in a month.\nExcommunicated, he stood before the Diet of Worms with the words "Here I stand, I can do no other", then translated the Bible into German — fixing the literary language and putting the scriptures into every reader\u2019s hands. Protestantism was born; Europe divided; and after thirty years of war the Peace of Westphalia established freedom of belief and the sovereign state. Historians say Luther nailed up not a protest but the opening act of the modern age.',
    quote: 'Here I stand; I can do no other.'
  },
  {
    id: 'washington', name: 'George Washington', alt: '华盛顿', years: '1732–1799',
    field: 'Founding Father · 1st US President',
    summary: 'Won independence, then surrendered power twice — setting the precedent for republics',
    desc: 'Commander-in-chief of the Continental Army, he led under-equipped colonial militia through eight bitter years to the British surrender at Yorktown, and presided over the Constitutional Convention of 1787 before being elected the first President of the United States — the first head of a great state to rule by election rather than inheritance.\nHis true monument is what he refused to do. After two terms he declined a third and handed power back peacefully, retiring to Mount Vernon — in an age of kings, a renunciation that became the iron law of the American republic. When he died, Napoleon offered a toast: "Washington is gone into history; he fought for liberty and has raised its monument." The capital city bears his name.',
  },
  {
    id: 'napoleon', name: 'Napoleon Bonaparte', alt: '拿破仑', years: '1769–1821',
    field: 'Military commander · Emperor of the French',
    summary: 'Rose from lieutenant to emperor; his Civil Code outlived every battle he won',
    desc: 'From an artillery lieutenant on Corsica he rose through the chaos of the French Revolution: the sun of Austerlitz, the crossing of the Alps, a military legend crowned Emperor in 1804 with nearly all of continental Europe at his feet — until Waterloo ended everything and Saint Helena held him until his death in 1821.\nMore lasting than the wars was his institutional legacy: the Napoleonic Code established equality before the law, property rights and freedom of contract, travelled with his armies across Europe, and remains the blueprint of civil law in dozens of countries; the Bank of France, the Légion d\u2019honneur and the baccalauréat are all his. "My true glory," he said near the end, "is not forty battles won — Waterloo erases the memory of so many victories. What nothing will erase, what will live forever, is my Civil Code."',
    quote: 'A soldier who does not want to be a general is not a good soldier.'
  },
  {
    id: 'lincoln', name: 'Abraham Lincoln', alt: '林肯', years: '1809–1865',
    field: '16th President of the United States',
    summary: 'Held the Union together, ended slavery, and gave democracy its finest sentence',
    desc: 'Born in a log cabin and self-taught as a lawyer, Lincoln was elected president in 1860 as southern states seceded one by one. The Civil War raged four years and cost 600,000 lives — America\u2019s bloodiest conflict. On New Year\u2019s Day 1863 his Emancipation Proclamation made the war a war against slavery, and the 272 words of the Gettysburg Address redefined it: "government of the people, by the people, for the people, shall not perish from the earth."\nFive days after the war ended he was assassinated at Ford\u2019s Theatre. The Union held; the Thirteenth Amendment abolished slavery forever. Consistently ranked the greatest of all American presidents, he is himself the original text of the American dream — log cabin to martyred legend.',
    quote: 'Government of the people, by the people, for the people, shall not perish from the earth.'
  },
  {
    id: 'gandhi', name: 'Mahatma Gandhi', alt: '甘地', years: '1869–1948',
    field: 'Political and spiritual leader',
    summary: 'Showed that empires can be fought with non-violence — and won',
    desc: 'A London-trained barrister thrown off a first-class train in South Africa, Gandhi spent twenty-one years there developing satyagraha — non-violent civil resistance. Returning to India in 1915, he turned it into a mass movement: boycotts of British goods, refusal of taxes, and the 1930 Salt March, 390 kilometres on foot to the sea, that showed the whole world where India\u2019s conscience lay.\nIndia won independence in 1947; Gandhi answered the sectarian bloodshed that followed by fasting in Calcutta until the killing stopped. A Hindu extremist assassinated him in January 1948. He proved that political struggle does not need the sword — Martin Luther King, Mandela and Desmond Tutu all called themselves his students. Einstein: "Generations to come will scarcely believe that such a one as this ever in flesh and blood walked upon this earth."',
    quote: 'An eye for an eye will make the whole world blind.'
  },
  {
    id: 'mlk', name: 'Martin Luther King Jr.', alt: '马丁·路德·金', years: '1929–1968',
    field: 'Civil rights leader',
    summary: 'Fought segregation with non-violence; "I have a dream" rang around the world',
    desc: 'In 1955, aged 26, the young pastor was chosen to lead the Montgomery bus boycott; 381 days later segregated buses were unlawful, and he was famous. The Birmingham campaign and the Letter from Birmingham Jail followed, and on 28 August 1963 he stood at the Lincoln Memorial before 250,000 people: "I have a dream that my four little children will one day live in a nation where they will not be judged by the colour of their skin but by the content of their character."\nThe movement carried the Civil Rights Act of 1964 and the Voting Rights Act of 1965, ending legal segregation in the American South. At 34 he was the youngest-ever Nobel Peace laureate; he was assassinated in Memphis in 1968, aged 39. His birthday is a national day of service in America.',
    quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'
  },
  {
    id: 'mandela', name: 'Nelson Mandela', alt: '曼德拉', years: '1918–2013',
    field: 'Statesman',
    summary: '27 years in prison traded for racial reconciliation — South Africa\u2019s first Black president',
    desc: 'He fought apartheid and paid with 27 years in prison, eighteen of them breaking rocks in the lime quarry of Robben Island, where the glare damaged his eyes so badly he could not shed tears afterwards. When he walked free in 1990 the world watched for vengeance; he chose reconciliation instead — negotiating the peaceful end of apartheid with the government, winning the presidency in 1994\u2019s first all-race election at 76, and sharing the Nobel Peace Prize with F. W. de Klerk.\nHe served a single term and stepped down, setting the democratic example for a continent. At the 1995 Rugby World Cup he wore the Springbok jersey — the sport of the white minority — to present the trophy, an image of forgiveness that circled the globe. His own words explain it: "If I could not leave my bitterness and hatred behind, I would still be in prison."',
    quote: 'If I could not leave my bitterness and hatred behind, I would still be in prison.'
  },

  /* ============ Explorers ============ */
  {
    id: 'zhangqian', name: 'Zhang Qian', alt: '张骞', years: 'c. 164–114 BC',
    field: 'Envoy · Explorer',
    summary: 'Two great journeys west "hollowed out" the road the world calls the Silk Road',
    desc: 'In 138 BC the Han emperor Wudi sent the courtier Zhang Qian west to seek allies against the Xiongnu. He was captured almost immediately and held for thirteen years — marrying, fathering children, and yet never losing the imperial staff of office. Escaping, he crossed the Pamirs to the Ferghana valley and the Yuezhi, was captured again on the way home, and finally reached Chang\u2019an in 126 BC: of the hundred who set out, two returned.\nThe door to the Western Regions stood open. His second embassy carried silk and gold to the Wusun, with deputies reaching Persia and beyond — the Silk Road was open. Grapes, alfalfa, pomegranates and walnuts came east; silk and metallurgy went west; two civilisations shook hands to the rhythm of camel bells. Historians call it "hollowing out" the wilderness; two millennia later the United Nations borrowed the road\u2019s name for its international cooperation programmes.',
  },
  {
    id: 'marcopoloo', name: 'Marco Polo', alt: '马可·波罗', years: '1254–1324',
    field: 'Traveller',
    summary: 'Seventeen years in the East, one book — and Europe discovered the other end of the world',
    desc: 'In 1271, aged seventeen, the Venetian merchant\u2019s son set out with his father and uncle across the Pamirs and the Gobi; four years later he reached Shangdu and the court of Kublai Khan. The Great Khan liked him: for seventeen years Marco served as envoy and official, travelling from Yunnan to Yangzhou to Southeast Asia — centuries before any other European, he recorded China, Myanmar, Java and Japan.\nCaptured in a naval war and imprisoned in Genoa, he dictated his travels to a fellow prisoner: The Travels of Marco Polo — a land of gold, black stones that burn (coal), paper money. Translated into more than a hundred languages, it gave Europe its first concrete picture of the East. Columbus read it with annotations in the margins, sailing west with a copy aboard. The age of discovery was lit by his campfire stories.',
  },
  {
    id: 'zhenghe', name: 'Zheng He', alt: '郑和', years: '1371–1433',
    field: 'Admiral · Diplomat',
    summary: 'Seven voyages across two oceans — the greatest peaceful fleet the world had ever seen',
    desc: 'Born Ma He, a Muslim boy from Yunnan, he was castrated into Ming court service and won his surname "Zheng" on the prince\u2019s side in the succession war. In 1405 the Yongle Emperor gave him command of 62 treasure ships and 27,800 men — eighty-seven years before Columbus, with a fleet a hundred times larger. Over twenty-eight years he sailed seven expeditions, reaching Kenya and the Red Sea and rebuilding the whole maritime trade network of the Indian Ocean.\nThe treasure ships exceeded a hundred metres, navigating by compass and star charts — the mightiest fleet on earth. What they carried home were giraffes, spices and the envoys of thirty kingdoms: tribute and diplomacy, not cannon and colonies. He died at sea in 1433 and was buried in the ocean. The reformer Liang Qichao marvelled that the great Eastern empire produced, in the same age as Columbus, "one Zheng He".',
    quote: 'For a nation to grow rich and strong, it cannot afford to turn its back on the ocean.'
  },
  {
    id: 'columbus', name: 'Christopher Columbus', alt: '哥伦布', years: '1451–1506',
    field: 'Navigator · Explorer',
    summary: 'Sailed west for the East, and joined two worlds that had forgotten each other',
    desc: 'The son of a Genoese weaver was convinced he could reach Asia by sailing west, armed with Marco Polo\u2019s Travels and an underestimate of the Earth\u2019s circumference. After nearly a decade of lobbying he won the backing of the Spanish crown, and on 12 October 1492 stepped ashore on a Bahamian island — believing to his death that he had reached the outskirts of India.\nHe had in fact found continents unknown to Europe. The "Columbian Exchange" began: maize, potatoes and tomatoes fed the Old World\u2019s population explosion, while horses, cattle and wheat remade the New; colonisation, epidemic disease and the slave trade devastated indigenous civilisations in the same tide. Five centuries of globalisation started with three small ships\u2019 sails — he is at once the pioneer of the age of discovery and the beginning of a complicated history.',
  },
  {
    id: 'armstrong', name: 'Neil Armstrong', alt: '阿姆斯特朗', years: '1930–2012',
    field: 'Astronaut',
    summary: '"One small step for man, one giant leap for mankind" — the first foot on the Moon',
    desc: 'The Ohio boy had a pilot\u2019s licence at sixteen, flew fighter missions in Korea, and became a legendary test pilot on the X-15 rocket plane. On 20 July 1969, with the Eagle\u2019s fuel nearly gone, he flew the lander manually past a field of boulders and set it down gently — then pressed his boot into the first human footprint on another world.\nSix hundred million people watched on television as he spoke the sentence carved into history: "That\u2019s one small step for man, one giant leap for mankind." He and Buzz Aldrin raised flags and instruments on the lunar surface; Armstrong himself retired quietly, calling himself a lucky man standing on the shoulders of giants. The Apollo programme cost some 200 billion dollars in today\u2019s money and employed 400,000 people — and he took the step for all of us.',
    quote: 'That\u2019s one small step for man, one giant leap for mankind.'
  },

  /* ============ Artists ============ */
  {
    id: 'davinci', name: 'Leonardo da Vinci', alt: '达·芬奇', years: '1452–1519',
    field: 'Artist · Scientist · Engineer',
    summary: 'Mona Lisa and The Last Supper — the Renaissance mind that took no prisoners',
    desc: 'The illegitimate son of a Tuscan notary, apprenticed to a Florentine workshop at fourteen, Leonardo became the embodiment of the "Renaissance man". The Last Supper reinvented narrative painting; the Mona Lisa\u2019s sfumato smile is the most famous face on earth. Fewer than twenty finished oil paintings survive — every one of them a shrine.\nHis seven thousand pages of mirror-script notebooks hold flying machines, the helicopter principle, tanks, diving suits, anatomical drawings and hydraulic schemes, often three centuries ahead of their time. He called painting a science and believed knowing and showing were one act. What we read in those notebooks is not merely a painter: it is a specimen of human curiosity at its absolute limit.',
    quote: 'Learning never exhausts the mind.'
  },
  {
    id: 'michelangelo', name: 'Michelangelo', alt: '米开朗基罗', years: '1475–1564',
    field: 'Sculptor · Painter · Architect',
    summary: 'Carved David, painted Genesis — the giant of the High Renaissance',
    desc: 'At twenty-nine he pulled the five-metre David out of a block of marble other sculptors had abandoned; Florence set it before the town hall as "the guardian of the republic". He insisted he was a sculptor, yet Pope Julius II nailed him to a scaffold for four years to paint five hundred square metres of the Sistine Chapel ceiling — and the touching fingers of God and Adam became humanity\u2019s most familiar image.\nThe dome he designed for St Peter\u2019s still draws Rome\u2019s skyline; the Dawn, Day, Dusk and Night he carved for the Medici put the weight of time itself into stone. He was still carving the Rondanini Pietà days before his death at 88. His own verse says the rest: "I saw the angel in the marble and carved until I set him free."',
    quote: 'I saw the angel in the marble and carved until I set him free.'
  },
  {
    id: 'shakespeare', name: 'William Shakespeare', alt: '莎士比亚', years: '1564–1616',
    field: 'Playwright · Poet',
    summary: 'Thirty-eight plays rebuilt the English language — and are still staged everywhere',
    desc: 'The glover\u2019s son from Stratford wrote thirty-eight plays and 154 sonnets for the Globe theatre: the great tragedies hold a mirror to human nature at its abyss, the histories rebuilt England\u2019s memory, and the wit of A Midsummer Night\u2019s Dream and The Merchant of Venice is still fresh. By one estimate he added some 1,700 words to English — "lonely", "management" and "assassination" were his coinages or first recordings.\nHamlet, Macbeth, Othello, King Lear, Romeo and Juliet belong to all humanity now. His works have been translated into over a hundred languages and are the most performed scripts on earth, second only to the Bible in print. Ben Jonson said of him: "He was not of an age, but for all time."',
    quote: 'All the world\u2019s a stage, and all the men and women merely players.'
  },
  {
    id: 'goethe', name: 'Johann Wolfgang von Goethe', alt: '歌德', years: '1749–1832',
    field: 'Writer · Statesman · Naturalist',
    summary: 'A lifetime on Faust; the summit of German letters and the prophet of "world literature"',
    desc: 'At twenty-five his epistolary novel The Sorrows of Young Werther swept Europe — young men dressed like Werther for a season. He ran the duchy of Weimar\u2019s government for decades and pursued botany and colour theory in his spare time, proposing the concept of morphology. His masterwork Faust took sixty years: the scholar who wagers his soul with Mephistopheles on whether striving human beings can ever transcend themselves.\nFaust stands with Homer, Dante and Shakespeare at the four peaks of European literature. Late in life Goethe coined the idea of Weltliteratur — world literature — foreseeing national cultures illuminating one another through exchange. He is the uncontested summit of German letters, and his conversations remain a private university to this day.',
    quote: 'Theory is grey, but the tree of life is ever green.'
  },
  {
    id: 'libai', name: 'Li Bai', alt: '李白', years: '701–762',
    field: 'Poet',
    summary: 'The "Banished Immortal" who carried Chinese poetry\u2019s romance to its absolute peak',
    desc: 'Li Bai left his boyhood home in Sichuan at twenty-four, "sword at his hip, bidding farewell to his parents", and wandered China all his life. He Xuanzhang hailed him a "banished immortal"; Emperor Xuanzong summoned him to court, where the lines "clouds remind me of her dress, flowers of her face" were improvised in the imperial pavilion. Before long he was dismissed with gold and gladly gone — "how could I bow to the powerful and make this face unhappy?" — roaming the rivers and lakes in wine and song.\nIn the An Lushan rebellion he was exiled for siding with a prince, pardoned mid-journey — "the gibbons\u2019 cries on either shore never ceased; my light boat has passed ten thousand mountains". Of his thousand surviving poems, Quiet Night Thoughts is every Chinese child\u2019s first lesson, and "a time will come to ride the wind and cleave the waves" is the world\u2019s shared vow in hard times. His imagination defined the High Tang — and remains Chinese poetry\u2019s gift to the planet.',
    quote: 'Heaven made me — I must be of use; scatter a thousand gold coins, they will all come back.'
  },
  {
    id: 'beethoven', name: 'Ludwig van Beethoven', alt: '贝多芬', years: '1770–1827',
    field: 'Composer',
    summary: 'The deaf giant who filled music with the brotherhood of mankind',
    desc: 'Born to a court musician\u2019s family in Bonn, he conquered Vienna first as a pianist and improviser. His hearing began to fail around thirty; in 1802, in the Heiligenstadt Testament, he confessed he had considered ending his life — and resolved instead "to seize fate by the throat". In the twenty years of near-total deafness that followed came the Fifth Symphony, the "Emperor" Concerto and the opera Fidelio.\nAt the 1824 premiere of the Ninth Symphony the hall erupted behind him while he, deaf, had to be turned around to see the applause — the Ode to Joy, set to Schiller\u2019s verse of all mankind as brothers, is now the anthem of the European Union. His thirty-two piano sonatas are called the New Testament of music. When he died, twenty thousand mourners followed the coffin and Vienna\u2019s schools closed.',
    quote: 'I will seize fate by the throat; it shall certainly not bend and crush me completely.'
  },
  {
    id: 'bach', name: 'Johann Sebastian Bach', alt: '巴赫', years: '1685–1750',
    field: 'Composer',
    summary: 'Fugues and the Well-Tempered Clavier — the bible of Western music',
    desc: 'Bach came from a dynasty of musicians and spent his life in small German posts: church organist, court Kapellmeister, and finally cantor of St Thomas\u2019s in Leipzig, where a new cantata was needed for every Sunday. For teaching he wrote The Well-Tempered Clavier — forty-eight preludes and fugues in every key — "the Old Testament" of keyboard music; the St Matthew Passion and the B minor Mass pushed Baroque counterpoint to the very ceiling of human art.\nHe was obscure outside Saxony in his lifetime and was all but forgotten for eighty years after his death — until Mendelssohn revived the St Matthew Passion in 1829 and the world woke as if from a dream. Beethoven joked on his name: Bach means "brook" in German — "not brook, but ocean". Every composer since has begun by studying him; he is the father of Western music.',
  },
  {
    id: 'mozart', name: 'Wolfgang Amadeus Mozart', alt: '莫扎特', years: '1756–1791',
    field: 'Composer',
    summary: 'Six hundred works in thirty-five years — the sun of the classical style',
    desc: 'History\u2019s most famous child prodigy toured Europe at six, playing for empresses and improvising on demand. In thirty-five years he wrote more than six hundred works: forty-one symphonies, twenty-seven piano concertos, twenty-two operas — The Marriage of Figaro, Don Giovanni, The Magic Flute remain the staple repertoire of every opera house on earth. His melodies seem to fall from the sky while their structures are precise as clockwork; "genius" acquired its face from him.\nHe struggled with money all his life and died in 1791, aged 35, while composing a Requiem, buried in a common Viennese grave. His short life spanned the turn from court servant to free artist. The Requiem, the serenades, the Fortieth Symphony — two and a half centuries later they are still the most-listened-to music humanity has.',
  },
  {
    id: 'vangogh', name: 'Vincent van Gogh', alt: '梵高', years: '1853–1890',
    field: 'Painter',
    summary: 'Sold one painting in his lifetime; his Starry Night now lights all of modern art',
    desc: 'He decided to become a painter at twenty-seven and produced about 2,100 works in a decade — 863 oils, among them Sunflowers, The Starry Night and Wheatfield with Crows, almost all in his final four years. In the Yellow House at Arles in 1888 he shared his dream and then his breakdown with Gauguin, cutting off part of his own ear; in July 1890 he shot himself in a wheatfield and died two days later, aged 37.\nOnly one oil — The Red Vineyard — is verifiably sold in his lifetime, and he lived on allowances from his brother Theo. The blazing colour and writhing brushwork seeded Expressionism, feeding straight into Fauvism and the German Expressionists. Theo\u2019s widow Jo published the letters, and the world read the soul that traded pain for beauty. His canvases now set records for the highest prices ever paid — for the man who said, "I dream my painting, and then I paint my dream."',
    quote: 'I dream my painting, and then I paint my dream.'
  },
  {
    id: 'picasso', name: 'Pablo Picasso', alt: '毕加索', years: '1881–1973',
    field: 'Painter · Sculptor',
    summary: 'Co-invented Cubism and reinvented how human beings see',
    desc: 'The boy from Málaga reportedly drew before he could talk; at fourteen his technique outclassed his art-school teachers. He changed styles like weather — the Blue Period, the Rose Period, the African period — until 1907\u2019s Les Demoiselles d\u2019Avignon detonated Cubism, created with Georges Braque: the human figure shattered into geometry, seen from many angles at once. Five centuries of Western painting whose job was to reproduce the world were over.\nHe made some 13,500 paintings and prints plus sculptures and ceramics; Guernica, his screaming black-and-white howl against the Nazi bombing of a Basque town, remains the century\u2019s most powerful anti-war image. He was the richest artist in history and the author of the peace dove. His own verdict: "Every child is an artist. The problem is how to remain an artist once we grow up."',
    quote: 'Every child is an artist. The problem is how to remain an artist once we grow up.'
  },

  /* ============ Humanitarians ============ */
  {
    id: 'nightingale', name: 'Florence Nightingale', alt: '南丁格尔', years: '1820–1910',
    field: 'Founder of modern nursing',
    summary: 'The Lady with the Lamp made nursing a profession — and used statistics to save lives',
    desc: 'Born into English high society, she scandalised her family by taking up nursing, then a servant\u2019s job. When the Crimean War broke out in 1854 she led thirty-eight nurses to the front, where strict sanitation, ventilation and nutrition drove the death rate from 42 per cent to about 2. Making her rounds with a lamp after dark, she became "the Lady with the Lamp".\nAfter the war she proved her case with data: her polar-area diagrams made preventable death visible and moved a royal commission to reform army medicine. In 1860 she founded the world\u2019s first secular nursing school, and her Notes on Nursing circled the globe. She was the first woman elected to the Royal Statistical Society — pioneer of medical statistics as much as of nursing. International Nurses Day is her birthday, 12 May; the Nightingale medal remains nursing\u2019s highest honour.',
    quote: 'I attribute my success to this — I never gave or took any excuse.'
  },
  {
    id: 'dunant', name: 'Henry Dunant', alt: '亨利·杜南', years: '1828–1910',
    field: 'Humanitarian · Founder of the Red Cross',
    summary: 'From a battlefield of horrors came the Red Cross and the laws of war',
    desc: 'In June 1859 the Swiss businessman wandered onto the field of Solferino in northern Italy, where 40,000 wounded lay dying in the sun with no one to tend them. He organised local villagers to help, then wrote A Memory of Solferino — proposing two ideas of genius: permanent voluntary relief societies in every country, and an international treaty protecting the wounded.\nBoth ideas landed. The International Committee of the Red Cross was founded in 1863; in 1864 twelve states signed the first Geneva Convention, and the red cross on white became the emblem of neutrality — the beginning of international humanitarian law. Dunant himself went bankrupt and spent nearly twenty years in Parisian poverty, forgotten until a journalist found him in 1895. In 1901 he received the very first Nobel Peace Prize, and left his estate to charity.',
  },
  {
    id: 'keller', name: 'Helen Keller', alt: '海伦·凯勒', years: '1880–1968',
    field: 'Writer · Disability rights activist',
    summary: 'Deaf and blind, she opened a door for the disabled — and for everyone',
    desc: 'An illness at nineteen months took her sight and hearing. On 3 March 1887 the teacher Anne Sullivan arrived, and at the water pump spelled W-A-T-E-R into her hand — "the mystery of language was revealed to me", she wrote later; the mute, dark world had words in it at last. She learned to lip-read by touch, to speak, to read Braille, and in 1904 graduated with honours from Radcliffe College (Harvard\u2019s women\u2019s college) — the first deaf-blind person in history to earn a Bachelor of Arts.\nShe wrote fourteen books — The Story of My Life, best known as "Three Days to See", is published in more than fifty languages — and for over sixty years travelled and campaigned for the American Foundation for the Blind, advancing education and employment for disabled people worldwide. Mark Twain: "The two most interesting characters of the nineteenth century are Napoleon and Helen Keller."',
    quote: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.'
  },
  {
    id: 'teresa', name: 'Mother Teresa', alt: '特蕾莎修女', years: '1910–1997',
    field: 'Humanitarian',
    summary: 'Served "the poorest of the poor" in Calcutta\u2019s slums for half a century',
    desc: 'Born to Albanian parents in Skopje, she joined a convent at eighteen and taught in Calcutta for two decades. In 1946, on a train, she heard what she called "the call within a call": leave the convent and serve the poorest of the poor. She opened her hospice for the dying against the wall of a Hindu temple, letting the abandoned die with dignity; leper colonies, orphanages and the Missionaries of Charity followed.\nThe order grew from a dozen sisters to thousands in over a hundred countries. "Do small things with great love" became her signature. She received the 1979 Nobel Peace Prize and asked that the prize banquet be cancelled, the money given to the poor. Her silence on the roots of poverty and the spartan care in her homes drew criticism — yet the poorest of the poor did leave the world more gently because of her.',
    quote: 'Not all of us can do great things. But we can do small things with great love.'
  },
  {
    id: 'borlaug', name: 'Norman Borlaug', alt: '博洛格', years: '1914–2009',
    field: 'Agronomist · Father of the Green Revolution',
    summary: 'His high-yield wheat fed a billion people who would otherwise have starved',
    desc: 'An Iowa farm boy turned plant pathologist, he was sent to Mexico in 1944 and spent twenty years in the fields, breeding wheat that was rust-resistant, dwarf and high-yielding — short stalks so the plants could take heavy fertiliser without lodging, doubling and tripling harvests. He carried the varieties to India and Pakistan, and in the late 1960s South Asia\u2019s grain production soared; the famines the doomsayers had promised never came. It was called the Green Revolution.\nHe is credited with saving more than a billion people from starvation — probably more individual lives saved than any other human being. The 1970 Nobel Peace Prize citation held that peace cannot be built on empty stomachs. He was still walking African fields and working in his lab in his nineties. "Hunger," he said, "is the greatest enemy of peace."',
    quote: 'Almost certainly, the first essential component of social justice is adequate food for all mankind.'
  },
  {
    id: 'eleanor', name: 'Eleanor Roosevelt', alt: '埃莉诺·罗斯福', years: '1884–1962',
    field: 'Diplomat · Human rights champion',
    summary: 'Steered the Universal Declaration of Human Rights into history',
    desc: 'The wife of President Franklin D. Roosevelt who outgrew the role of First Lady: she held press conferences, wrote a daily column, and spoke across the country for women, the poor and minorities — the moral voice of the New Deal era. Truman called her "First Lady of the World".\nIn 1946 she chaired the first UN Commission on Human Rights and steered the drafting of the Universal Declaration of Human Rights through the stands-off between Soviet, American and other delegations by patience and prestige. On 10 December 1948 the Declaration passed with 48 votes for and none against; it is now the most translated document on earth, the foundation of the whole modern human-rights system. Her creed: "No one can make you feel inferior without your consent."',
    quote: 'No one can make you feel inferior without your consent.'
  },
  {
    id: 'malala', name: 'Malala Yousafzai', alt: '马拉拉', years: '1997–',
    field: 'Education activist · Nobel laureate',
    summary: 'Shot for going to school, she became the youngest Nobel laureate ever',
    desc: 'Born in Pakistan\u2019s Swat Valley, she began writing a BBC blog at eleven under a pen name, recording life under Taliban rule where girls were banned from school — and the world took notice. On 9 October 2012 a Taliban gunman boarded her school bus and shot her in the head at point-blank range. She survived, after treatment in Britain, and did not go quiet.\nOn her sixteenth birthday she spoke at the United Nations: "One child, one teacher, one book, one pen can change the world." With her father she founded the Malala Fund, campaigning for twelve years of free schooling for every girl. In 2014, at seventeen, she became the youngest Nobel laureate in history, sharing the Peace Prize. She has since graduated from Oxford — and her question still echoes: "They say the pen is mightier than the sword — what if the one holding the pen is silenced first?"',
    quote: 'One child, one teacher, one book and one pen can change the world.'
  },

  /* ============ Second batch (69 → 102) ============ */
  /* ---- Scientists ---- */
  {
    id: 'euler', name: 'Leonhard Euler', alt: '欧拉', years: '1707–1783',
    field: 'Mathematician · Physicist',
    summary: 'The most prolific mathematician in history — he wrote the language of modern maths',
    desc: 'Euler produced some 850 works, so fast that the printers could not keep up — and after going blind he remained just as prolific, computing in his head. The notation of every maths textbook is largely his: f(x), the base e, π, the imaginary unit i, the summation sign Σ.\nHe founded analysis and graph theory (the Königsberg bridges) and the calculus of variations, turning calculus into a systematic discipline; his identity e^{iπ}+1=0 is called the most beautiful equation in mathematics. Serving the academies of St Petersburg and Berlin, he applied mathematics to shipbuilding, astronomy and artillery. Laplace said: "Read Euler, read Euler — he is the master of us all."',
    wiki: 'en/Leonhard Euler'
  },
  {
    id: 'gauss', name: 'Carl Friedrich Gauss', alt: '高斯', years: '1777–1855',
    field: 'Mathematician · Astronomer · Physicist',
    summary: 'The "Prince of Mathematicians" — number theory, statistics and geodesy',
    desc: 'The son of a Brunswick bricklayer, he corrected his father\u2019s accounts at three, and at nineteen constructed the 17-sided regular polygon with compass and straightedge — solving a two-thousand-year-old problem — and resolved to devote his life to mathematics. His Disquisitiones Arithmeticae founded modern number theory; least squares, the normal (Gaussian) distribution, pioneering ideas of non-Euclidean geometry and the unit of magnetic flux all carry his name.\nHis orbital computation relocated the lost asteroid Ceres and awed Europe\u2019s academies; late in life he directed the survey of Hanover and, with Wilhelm Weber, built the world\u2019s first electromagnetic telegraph. He ranks with Archimedes and Newton as one of the three greatest mathematicians who ever lived.',
    quote: 'Mathematics is the queen of the sciences, and number theory is the queen of mathematics.'
  },
  {
    id: 'vonneumann', name: 'John von Neumann', alt: '冯·诺依曼', years: '1903–1957',
    field: 'Mathematician · Computer scientist',
    summary: 'The von Neumann architecture and game theory — the brain behind the computer age',
    desc: 'The Budapest prodigy could divide eight-digit numbers in his head at six, and went on to lay foundations in set theory, the mathematics of quantum mechanics and operator theory. He founded game theory (with Morgenstern — the "prisoner\u2019s dilemma" is his) and worked on the Manhattan Project, computing the implosion of the plutonium bomb.\nIn 1945 his "First Draft of a Report on the EDVAC" defined the stored-program architecture — processor, memory, control, input and output — and every computer and phone today is still called a von Neumann machine. He died of cancer at 53, dictating "The Computer and the Brain" from his hospital bed.',
    wiki: 'en/John von Neumann'
  },
  {
    id: 'shannon', name: 'Claude Shannon', alt: '香农', years: '1916–2001',
    field: 'Mathematician · Engineer',
    summary: 'The father of information theory — he measured the world in bits',
    desc: 'In 1938, aged 22, Shannon proved in his master\u2019s thesis that Boolean algebra could be implemented with relay circuits — the theoretical foundation of all digital electronics. In 1948 his "A Mathematical Theory of Communication" created information theory: information can be measured in bits, every channel has a capacity limit, and codes can push through it — the entire theory of compression, error correction and encryption flows from that one paper.\nFor fun he built Theseus, a maze-solving mechanical mouse, and a juggling robot — early heralds of artificial intelligence. From mobile networks to deep-space probes, from ZIP files to QR codes, every transmission of the digital age lives inside the boundaries he drew.',
    wiki: 'en/Claude Shannon'
  },
  {
    id: 'schrodinger', name: 'Erwin Schrödinger', alt: '薛定谔', years: '1887–1961',
    field: 'Physicist',
    summary: 'His wave equation describes the atom — and the cat is still both dead and alive',
    desc: 'Over the 1925 Christmas holidays, the Viennese physicist wrote down the wave equation that bears his name — the cornerstone describing how electrons behave in atoms — which, with Heisenberg\u2019s matrix mechanics, forms the twin formulation of quantum theory. He shared the 1933 Nobel Prize with Paul Dirac.\nHis "Schrödinger\u2019s cat" thought experiment exposed the fault line between quantum superposition and the macroscopic world through a cat that is somehow both dead and alive — still the centre of physical and philosophical debate. Late in life his little book "What is Life?" proposed that genes are an "aperiodic crystal", directly inspiring Watson and Crick to hunt down the secret of DNA.',
    wiki: 'en/Erwin Schrödinger'
  },
  {
    id: 'hubble', name: 'Edwin Hubble', alt: '哈勃', years: '1889–1953',
    field: 'Astronomer',
    summary: 'Found galaxies beyond the Milky Way — and gave the universe a history',
    desc: 'In 1924, using the 2.5-metre telescope on Mount Wilson, Hubble located Cepheid variable stars in Andromeda and proved it was another galaxy far beyond the Milky Way — the universe expanded overnight from one galaxy to billions. In 1929 he showed that the farther a galaxy lies, the faster it recedes: the universe is expanding — the direct observational pillar of the Big Bang theory.\nEinstein revised the cosmological constant in general relativity in response, calling it his "biggest blunder". The Hubble Space Telescope is named for him — humanity\u2019s eye in orbit. He turned cosmology from speculation into measurement.',
    quote: 'Equipped with his five senses, man explores the universe around him and calls the adventure Science.'
  },
  {
    id: 'qianxuesen', name: 'Qian Xuesen', alt: '钱学森', years: '1911–2009',
    field: 'Scientist · Founder of engineering cybernetics',
    summary: 'The founder of China\u2019s rocket and missile programmes — "worth five divisions"',
    desc: 'Trained at Jiaotong University, MIT and Caltech, he was a genius of aerodynamics who co-authored the "Kármán–Tsien formula" with his mentor Theodor von Kármán and co-founded the Jet Propulsion Laboratory. In 1950 he set out for home and was detained in America for five years; US Undersecretary of the Navy Dan Kimball said he was "worth five divisions anywhere".\nBack in China in 1955 he drafted the country\u2019s rocket and missile plans, led the missile and space parts of the "Two Bombs, One Satellite" programme and founded engineering cybernetics. China\u2019s first missile and first satellite, Dong Fang Hong I, both bore his imprint. He was awarded the medal of the "Two Bombs, One Satellite" merit and is called the father of China\u2019s space programme.',
    wiki: 'zh/钱学森'
  },
  {
    id: 'yuanlongping', name: 'Yuan Longping', alt: '袁隆平', years: '1930–2021',
    field: 'Agronomist · Father of hybrid rice',
    summary: 'Hybrid rice steadied the rice bowls of China and the world',
    desc: 'In 1961 he found a "natural hybrid" rice plant in the paddy of his agricultural school in Hunan, and set out to exploit hybrid vigour in rice — which classical theory said was impossible for a self-pollinating crop. After six years of searching his team found the wild male-sterile rice plant "Ye Bai" on Hainan in 1970, and hybrid rice was born; from 1976 it spread across China\u2019s fields.\nHis teams went on to two-line hybrids and ever-higher "super rice" yields, helping China feed nearly 20% of the world\u2019s population on 7% of its arable land; the seed has been grown in dozens of countries. He spoke of two dreams: "resting in the shade of rice plants taller than men" and "hybrid rice covering the globe". Awarded the Medal of the Republic in 2019, he was mourned by a hundred thousand people in the streets of Changsha in 2021.',
    quote: 'My lifelong pursuit is to keep everyone away from hunger.'
  },

  /* ---- Thinkers ---- */
  {
    id: 'mozi', name: 'Mozi', alt: '墨子', years: 'c. 468–376 BC',
    field: 'Philosopher · Scientist',
    summary: 'Universal love and defensive war — ancient China\u2019s closest school to science',
    desc: 'Mo Di, born a craftsman, studied under the Confucians before founding his own school. The Mohists were organised like an army: they taught "universal love" (caring without distinction), "condemnation of offensive war" and "elevation of the worthy" regardless of birth. When Chu marched on Song, Mozi walked ten days to debate the master engineer Gongshu Ban, then garrisoned Song with his disciples — and the invasion was called off without a fight.\nThe Mohists\u2019 science is startling: the Mo Jing records the camera obscura, the lever principle, definitions of force, space and time, and a system of logic — the closest ancient China came to the scientific method. The school died out after the Han and was only rediscovered in Qing times; China named its quantum satellite "Micius" in his honour.',
    quote: 'Love one another universally; benefit one another mutually.'
  },
  {
    id: 'wangyangming', name: 'Wang Yangming', alt: '王阳明', years: '1472–1529',
    field: 'Philosopher · Founder of the School of Mind',
    summary: 'The unity of knowledge and action — a school of thought that shaped East Asia',
    desc: 'Wang Shouren "investigated bamboo" for seven days under Zhu Xi\u2019s doctrine of seeking principles in things, fell ill, and began to doubt. Exiled to the wilds of Longchang in Guizhou for defending a censor, he awoke one night with the insight: "The way of the sage is complete within my own nature" — the Longchang Enlightenment. He taught that the mind is principle, that knowledge and action are one, and in his last years distilled it all into "extending innate knowing", relocating the ground of morality from the classics into every heart.\nHe was no armchair philosopher: he crushed the Prince of Ning\u2019s rebellion in thirty-five days, winning battles while being distrusted at court. His School of Mind flowed through late-Ming thought and the reformers of Japan\u2019s Meiji Restoration — the admiral Tōgō Heihachirō carried a seal reading "I bow my head all my life to Yangming."',
    quote: 'Knowledge is the beginning of action; action is the completion of knowledge.'
  },
  {
    id: 'augustine', name: 'Augustine of Hippo', alt: '奥古斯丁', years: '354–430',
    field: 'Theologian · Philosopher',
    summary: 'The Confessions and The City of God shaped the Western mind for 1,500 years',
    desc: 'Born in North Africa, the young Augustine embraced Manichaeism and the pursuit of fame, while his mother Monica prayed for him for half her life. In Milan the preaching of Bishop Ambrose converted him, and the Confessions — the world\u2019s first autobiography — dissected his own soul with unprecedented inwardness, founding the whole Western tradition of self-examination.\nAs Bishop of Hippo for thirty-five years he wrote The City of God, On the Trinity and more, answering the pagans who blamed Christianity for the sack of Rome, and formulating doctrines of original sin, grace and time: "What then is time? If no one asks me, I know; if I wish to explain it, I do not know." Reformers and Roman Catholics alike drew on him — no Western theology or philosophy can get around Augustine.',
    quote: 'Our heart is restless until it rests in you.'
  },
  {
    id: 'aquinas', name: 'Thomas Aquinas', alt: '阿奎那', years: '1225–1274',
    field: 'Theologian · Philosopher',
    summary: 'Married faith to reason — the summit of medieval scholasticism',
    desc: 'Son of an Italian count, he joined the Dominican order at nineteen, and his family kidnapped him for a year to change his mind. Studying under Albert the Great in Cologne, his silence earned him the nickname "the dumb Sicilian ox" — and his teacher replied: "This ox\u2019s bellow will be heard around the world."\nHis Summa Theologiae poses thousands of questions in tens of thousands of arguments, fusing the rational system of Aristotle with Christian doctrine: faith and reason do not conflict, and grace perfects nature without destroying it. His "five ways" argued for God\u2019s existence by reason; his natural-law thinking is a distant ancestor of modern human rights. Thomism remains the official philosophy of the Catholic Church.',
    quote: 'Grace does not destroy nature but perfects it.'
  },
  {
    id: 'voltaire', name: 'Voltaire', alt: '伏尔泰', years: '1694–1778',
    field: 'Enlightenment thinker · Writer',
    summary: 'The sword-arm of the Enlightenment — a lifelong fighter for tolerance and free speech',
    desc: 'Born François-Marie Arouet, he was twice locked in the Bastille for satirising the powerful and exiled himself to England for three years, returning to preach Newton, Locke and English liberty. Across plays, epics, novels and letters — Candide skewering the doctrine that "all is for the best" — he hammered at superstition and fanaticism.\nHis most enduring battles were for the persecuted: in the Calas affair he fought three years to clear a Protestant executed on false charges, and "crush the infamous" became the slogan of the Enlightenment. Crowned the "king of French thought", he was carried into the Panthéon in 1791. His most quoted line (actually his biographer\u2019s summary): "I disapprove of what you say, but I will defend to the death your right to say it."',
    quote: 'I disapprove of what you say, but I will defend to the death your right to say it.'
  },
  {
    id: 'rousseau', name: 'Jean-Jacques Rousseau', alt: '卢梭', years: '1712–1778',
    field: 'Philosopher · Writer',
    summary: 'The Social Contract lit the French Revolution — "man is born free"',
    desc: 'The son of a Geneva watchmaker and a wanderer for half his life, Rousseau had his revelation on the road to visit Diderot in prison, reading the Académie\u2019s essay question: his First Discourse argued that progress in the sciences and arts had corrupted morals; the Second Discourse traced inequality to private property. The Social Contract opens with the most famous sentence of the century — "Man is born free, and everywhere he is in chains" — and builds the doctrine of popular sovereignty and the general will.\nÉmile revolutionised education; the Confessions, with astonishing candour, invented the modern autobiography. His thought fed the French Revolution directly — the Declaration of the Rights of Man and the Jacobins claimed him — and romanticism, modern pedagogy and democratic theory all set out from his door.',
    quote: 'Man is born free, and everywhere he is in chains.'
  },

  /* ---- Inventors ---- */
  {
    id: 'luban', name: 'Lu Ban', alt: '鲁班', years: 'c. 507–444 BC',
    field: 'Inventor · Master craftsman',
    summary: 'Saw, square, siege ladder — the patron saint of Chinese craftsmen',
    desc: 'Born Gongshu Ban in the state of Lu to a family of craftsmen, legend says a grass blade slashed his hand as he climbed a mountain to fell timber — and the serrated edge inspired his invention of the saw. The carpenter\u2019s square (the "Lu Ban ruler"), the ink marker, the plane, the drill and the shovel, plus the siege ladders and naval hooks of war, are all credited to him; folk tales add a wooden bird that flew for three days.\nHis inventions systematised Chinese woodworking, and for two thousand years carpenters, masons and stonemasons have honoured him as their founding master — the idiom "showing off with the axe before Lu Ban\u2019s door" is a tribute. China\u2019s top award for building quality is named the Lu Ban Prize: one craftsman became the god of the whole trade.',
    wiki: 'zh/鲁班'
  },
  {
    id: 'zhangheng', name: 'Zhang Heng', alt: '张衡', years: '78–139',
    field: 'Scientist · Inventor · Writer',
    summary: 'The seismoscope and the armillary sphere — a Renaissance man 1,300 years early',
    desc: 'A native of Nanyang who twice served as Grand Astronomer-Royal, Zhang Heng championed the "huntian" theory that the heavens are like an egg and the earth its yolk. His water-driven armillary sphere, turned by a waterwheel, rotated in sync with the sky — one of the world\u2019s first hydraulic astronomical clocks. In 132 AD his seismoscope appeared: eight dragons held bronze balls above eight toads\u2019 mouths; when an earthquake struck Longxi, the western dragon dropped its ball though no tremor was felt in the capital — and the courier\u2019s report arrived days later, confirming the detection.\nHe was also a mathematician (computing pi as about 3.16) and a literary master (the "Two Capital Rhapsodies" and "Rhapsody on Returning to the Fields"). A crater on the far side of the Moon bears his name — a true Renaissance man, thirteen centuries before the Renaissance.',
    quote: 'Life lies in diligence — without seeking, what will you gain?'
  },
  {
    id: 'stephenson', name: 'George Stephenson', alt: '斯蒂芬森', years: '1781–1848',
    field: 'Engineer · Father of the railway',
    summary: 'Built the locomotive and the railway — mankind starts speeding on rails',
    desc: 'An illiterate colliery boy tending steam engines, he learned to read and write at a night school at eighteen. In 1814 he built his first practical mining locomotive, "Blücher", then kept improving — his "steam blast" redirected exhaust up the chimney to boost the fire, multiplying engine power. In 1825 he drove "Locomotion No. 1" on the Stockton and Darlington Railway, the world\u2019s first public steam railway; in 1830 his "Rocket" won the Rainhill Trials at nearly 50 km/h and set the standard form of the locomotive.\nRailways spread across Europe and America: freight costs collapsed, cities boomed, and railway timetables forced humanity to standardise time itself. He is honoured as the Father of the Railway, and his statue still stands on the Liverpool–Manchester line he made famous.',
    wiki: 'en/George Stephenson'
  },

  /* ---- Leaders & Reformers ---- */
  {
    id: 'constantine', name: 'Constantine the Great', alt: '君士坦丁', years: '272–337',
    field: 'Roman Emperor',
    summary: 'The Edict of Milan legalised Christianity — and turned Western history',
    desc: 'In 312, before the Battle of the Milvian Bridge, he is said to have seen a vision and ordered the Christian symbol painted on his soldiers\u2019 shields; he defeated his rival Maxentius and became master of the Roman West. In 313 he and Licinius issued the Edict of Milan, granting freedom of worship throughout the empire — after nearly three centuries of persecution, Christianity was legal.\nHe then championed the church: returning confiscated property, funding basilicas, presiding over the Council of Nicaea in 325 which produced the Nicene Creed of the Trinity, and building a new capital on the Bosphorus — Constantinople. Baptised on his deathbed, he laid the foundations of Christian Europe and the Byzantine millennium that followed.',
    wiki: 'en/Constantine the Great'
  },
  {
    id: 'tangtaizong', name: 'Emperor Taizong of Tang', alt: '唐太宗', years: '598–649',
    field: 'Second emperor of the Tang dynasty',
    summary: 'The Reign of Zhenguan — the "Heavenly Khan" who welcomed criticism',
    desc: 'He fought his father\u2019s campaigns to reunify China, took the throne through the Xuanwu Gate coup in 626, and in twenty-three years delivered the "Reign of Zhenguan": light taxes, a reformed examination system, lean government — society recovered from the chaos of the late Sui so thoroughly that travellers could sleep out of doors, and Chang\u2019an became the capital of the world.\nHe is the model of the ruler who welcomes criticism: his minister Wei Zheng remonstrated to his face over two hundred times, and though furious, Taizong took the advice — leaving the famous mirror maxim. After defeating the Eastern Turks he was acclaimed "Heavenly Khan" by the steppe peoples, and the marriage of Princess Wencheng to Tibet opened an era of peace. His statecraft became the textbook for emperors for the next thousand years.',
    quote: 'With bronze as a mirror one straightens one\u2019s dress; with history as a mirror one knows rise and fall; with a man as a mirror one understands gain and loss.'
  },
  {
    id: 'churchill', name: 'Winston Churchill', alt: '丘吉尔', years: '1874–1965',
    field: 'British Prime Minister · Nobel laureate in Literature',
    summary: 'Led the free world through its darkest hour — "we shall never surrender"',
    desc: 'In May 1940, as Nazi forces swept Europe, Churchill became Prime Minister at 66. Against voices in his cabinet for a negotiated peace, he told the Commons the words history kept: "We shall fight on the beaches… we shall never surrender." Britain held through the Battle of Britain; he stood with Roosevelt and Stalin to lead the Allies to victory in 1945.\nHe was also a writer and orator of genius — tens of millions of words, and the 1953 Nobel Prize in Literature. Thrown out of office by the voters weeks after victory, he returned as Prime Minister in 1951, and was the first to warn of the "iron curtain". In 2002 the BBC\u2019s poll named him the Greatest Briton of All Time.',
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
  },
  {
    id: 'elizabethi', name: 'Elizabeth I', alt: '伊丽莎白一世', years: '1533–1603',
    field: 'Queen of England',
    summary: 'The Virgin Queen and her golden age — the birth of the British Empire',
    desc: 'Daughter of Henry VIII, she lost her mother at two, was imprisoned in the Tower by her half-sister, and at twenty-five was crowned Queen of England. Her forty-four years (1558–1603) are the Elizabethan Age: a religious middle path ended sectarian bloodletting, trade and shipping flourished, the Spanish Armada was defeated in 1588 — and England turned to the sea.\nShe never married, declaring herself "married to England"; at Tilbury, with the Armada threatening, she told her troops: "I know I have the body of a weak and feeble woman, but I have the heart and stomach of a king." Shakespeare and Bacon flowered in her reign. Dying childless, she left the throne to James of Scotland — and the two kingdoms began their road to union, the seed of today\u2019s Britain.',
    quote: 'I know I have the body of a weak and feeble woman, but I have the heart and stomach of a king.'
  },
  {
    id: 'fdr', name: 'Franklin D. Roosevelt', alt: '罗斯福', years: '1882–1945',
    field: '32nd President of the United States',
    summary: 'Beat the Depression with the New Deal, led the Allies — longest-serving US president',
    desc: 'Paralysed in both legs by polio at thirty-nine, he fought his way back to politics by sheer will. Taking office in 1932 with a quarter of Americans unemployed, he launched the New Deal: banking reform, work programmes, Social Security — redefining the role of government in the economy and drawing the blueprint of the modern welfare state. His inaugural line became immortal: "The only thing we have to fear is fear itself."\nElected four times, he led America through the Depression and the Second World War: Lend-Lease for the allies, war after Pearl Harbor, the Atlantic Charter with Churchill, and the building of the United Nations — the name was his. He died in April 1945, on the eve of victory. A president in a wheelchair, he is among the most consequential leaders of the twentieth century.',
    quote: 'The only thing we have to fear is fear itself.'
  },

  /* ---- Explorers ---- */
  {
    id: 'magellan', name: 'Ferdinand Magellan', alt: '麦哲伦', years: '1480–1521',
    field: 'Navigator · Explorer',
    summary: 'The first circumnavigation of the Earth — proof that it is round, paid for with his life',
    desc: 'The Portuguese noble was convinced he could reach the Spice Islands by sailing west, and turned to Spain when Lisbon refused him. In September 1519 he sailed with five ships and 265 men, crept down the South American coast through the storm-lashed strait now bearing his name (naming Tierra del Fuego for the fires on its shores), then crossed the Pacific — 38 days without landfall, the crew boiling leather for food — until the Philippines rose over the horizon in 1521.\nHe was killed in a clash with islanders and never saw his own triumph: eighteen survivors under Elcano sailed the Victoria back to Spain in 1522, completing the first circumnavigation in human history. That the Earth is round was no longer a theory.',
    wiki: 'en/Ferdinand Magellan'
  },
  {
    id: 'dagama', name: 'Vasco da Gama', alt: '达·伽马', years: 'c. 1469–1524',
    field: 'Navigator',
    summary: 'Rounded the Cape to India — and redrew the map of world trade',
    desc: 'Building on eighty years of Portuguese probing down the African coast, he sailed from Lisbon in July 1497 with four ships, rounded the Cape of Good Hope — the stormy point Dias had reached and turned back from — hired an Arab pilot on the East African coast, rode the monsoon across the Indian Ocean and reached Calicut, India, in May 1498. A direct sea route between Europe and Asia, after a century of trial, was open.\nSpices no longer passed through Venetian and Arab middlemen at crushing mark-ups; Portugal became the sea power of the sixteenth century; and the centre of Eurasian trade shifted from the Mediterranean to the Atlantic — the age of maritime globalisation had begun. His "Cape route" carried world trade for four hundred years, until the Suez Canal.',
    wiki: 'en/Vasco da Gama'
  },
  {
    id: 'amundsen', name: 'Roald Amundsen', alt: '阿蒙森', years: '1872–1928',
    field: 'Polar explorer',
    summary: 'The first human to stand at both the South and North Poles',
    desc: 'The Norwegian abandoned medical school for the poles. From 1903 to 1906 he threaded the Northwest Passage across the Arctic in the little herring boat Gjøa and confirmed the magnetic North Pole — a first. Planning to drift over the North Pole, he learned that Peary had claimed it, and turned his expedition south on the spot — into a race for the South Pole against Britain\u2019s Scott.\nOn 14 December 1911 his team became the first human beings at the geographic South Pole — thirty-three days ahead of Scott. He used Inuit fur clothing and dog sledges, planned ruthlessly and brought every man home; Scott\u2019s party died on the return. In 1926 he flew the airship Norge over the North Pole — the first person to reach both poles and the Northwest Passage. In 1928 he vanished in the Arctic ice flying to rescue a rival Italian expedition.',
    quote: 'Adventure is just bad planning.'
  },

  /* ---- Artists ---- */
  {
    id: 'raphael', name: 'Raphael', alt: '拉斐尔', years: '1483–1520',
    field: 'Painter · Architect',
    summary: 'The School of Athens — the youngest and most graceful of the Renaissance trio',
    desc: 'Born to a painter\u2019s family in Urbino, he absorbed Leonardo\u2019s sfumato and Michelangelo\u2019s force and made of them something serene and gracious. Summoned to the Vatican at twenty-five by Pope Julius II, he painted the School of Athens in the Signatura hall: Plato and Aristotle debating beneath the arches, fifty ancient philosophers gathered — the definitive image of classical reason.\nHis Madonnas set the standard of tenderness; late in life he took charge of the building of St Peter\u2019s. He died of a fever on his thirty-seventh birthday in 1520, and all Rome mourned; he was buried in the Pantheon. His epitaph: "Here lies Raphael, by whom Nature feared to be outdone while he lived, and to die when he did."',
    wiki: 'en/Raphael'
  },
  {
    id: 'dufu', name: 'Du Fu', alt: '杜甫', years: '712–770',
    field: 'Poet',
    summary: 'The "Poet-Sage" — 1,400 poems recording the conscience of an age',
    desc: 'Born to a scholar-official family, he spent ten unsuccessful years seeking office in Chang\u2019an, then fled with his family as the An Lushan Rebellion tore the empire apart. His pen became a chronicle: "Behind vermillion gates, wine and meat rot while on the road lie the bones of the frozen" — ten characters with the dark side of the golden age; his "Three Officials" and "Three Partings" gave every commoner of the war its voice. Later generations called his work "poetry as history".\nWandering southwest in his last years, he found peace in the thatched cottage of Chengdu and wrote his own plea — his roof torn by autumn wind, he wished instead for "a mansion of ten million rooms to shelter all the poor of the world". He died at fifty-nine, ill, on a boat on the Xiang River. Paired with Li Bai as "Li-Du", he pushed the regulated verse to its limits — the Sage of Poetry.',
    quote: 'How I wish for a mansion of ten million rooms, to shelter all the poor scholars of the world and make them smile.'
  },
  {
    id: 'andersen', name: 'Hans Christian Andersen', alt: '安徒生', years: '1805–1875',
    field: 'Writer · Master of the fairy tale',
    summary: 'The Little Mermaid and the Ugly Duckling — fairy tales for the whole world',
    desc: 'The son of a cobbler from Odense, he left for Copenhagen at fourteen to try singing, acting and writing, mocked again and again without giving up. At thirty he began publishing "fairy tales told to children"; critics called them childish, but they took root in the hearts of children everywhere: The Little Mermaid, The Ugly Duckling, The Little Match Girl, The Emperor\u2019s New Clothes, Thumbelina — nearly 170 tales in all.\nThey are not merely sweet: the mermaid becomes sea-foam, the match girl freezes, the duckling is driven away — suffering and beauty, dignity and love share every page, with meanings adults read differently. Translated into more than 150 languages, they made him Denmark\u2019s cultural ambassador. The ugly duckling becoming a swan was the metaphor of his own life — a cobbler\u2019s son who became king of the fairy tale.',
    quote: 'Life itself is the most wonderful fairy tale.'
  },
  {
    id: 'beatles', name: 'The Beatles', alt: '披头士', years: '1960–1970',
    field: 'Band',
    summary: 'The most influential band in history — the watershed of pop music and youth culture',
    desc: 'John Lennon and Paul McCartney met in the working-class streets of Liverpool, joined by George Harrison and Ringo Starr, honing their craft in Hamburg\u2019s clubs and Liverpool\u2019s Cavern. In 1963 "Beatlemania" swept Britain; in 1964 they landed in America — 73 million watched the Ed Sullivan Show — and pop culture was rewritten.\nIn a decade they released thirteen albums and sold over 600 million records; Yesterday, Hey Jude and Let It Be became humanity\u2019s shared musical memory. From Rubber Soul to Sgt. Pepper they turned the studio into an instrument and the album from a song collection into a complete artwork. They broke up in 1970, but the rules of rock, the music video, the concept album and the modern touring industry were all written by them.',
    quote: 'All you need is love.'
  },
  {
    id: 'chaplin', name: 'Charlie Chaplin', alt: '卓别林', years: '1889–1977',
    field: 'Comedian · Filmmaker',
    summary: 'The Little Tramp who made silent film a universal language',
    desc: 'An orphan of London\u2019s slums — his mother a singer sinking into madness, his childhood spent in workhouses — he stood with the small man all his life. In 1914 he put on the bowler hat, cane and waddling walk, and "the Tramp" was born; within two years he was the highest-paid performer in the world.\nHe wrote, directed, starred in and scored his films: City Lights, Modern Times, The Great Dictator — holding to silent aesthetics into the sound era, and daring to mock Hitler to his face at the height of Nazi power. He co-founded United Artists, turning film from fairground entertainment into an author\u2019s art. His own line: "Life is a tragedy when seen in close-up, but a comedy in long-shot." The moustache, the cane and the smile remain among the deepest marks in humanity\u2019s visual memory.',
    quote: 'Life is a tragedy when seen in close-up, but a comedy in long-shot.'
  },

  /* ---- Humanitarians ---- */
  {
    id: 'bethune', name: 'Norman Bethune', alt: '白求恩', years: '1890–1939',
    field: 'Surgeon · Internationalist',
    summary: 'Invented frontline mobile blood transfusion — and gave his life on an anti-fascist front',
    desc: 'A thoracic surgeon trained at Toronto, he invented and improved surgical instruments and pioneered mobile frontline blood-transfusion units in the Spanish Civil War — bringing blood to within reach of the guns. In 1938 he led a medical team to China\u2019s anti-Japanese base areas.\nIn the Shanxi–Chahar–Hebei border region he built model hospitals, wrote training manuals for village medics and performed over a thousand operations in little more than a year; during the battle of Qihe he operated for sixty-nine hours straight on 115 wounded. In 1939 he cut his finger in surgery, kept working, and died of the infection in Tang County, Hebei. Mao\u2019s essay "In Memory of Norman Bethune" made "utter devotion to others without any thought of self" a memory shared by generations of Chinese.',
    wiki: 'en/Norman Bethune'
  },
  {
    id: 'yunus', name: 'Muhammad Yunus', alt: '尤努斯', years: '1940–',
    field: 'Economist · Nobel Peace laureate',
    summary: 'Microcredit lifted millions out of poverty — the "banker of the poor"',
    desc: 'A Vanderbilt-trained professor of economics at Chittagong University, he walked into villages after the 1976 famine in Bangladesh and met a woman weaving stools who was fleeced by moneylenders — borrowing 42 cents and keeping 2. He lent 42 villagers 27 dollars of his own money, and every cent came back: the poor are not uncreditworthy, they are simply excluded from finance.\nIn 1983 he founded Grameen Bank — "the village bank" — pioneering collateral-free microloans; 97% of its borrowers are women, and repayment runs at 98%. The model has been copied in more than a hundred countries and reached tens of millions. In 2006 he and the bank shared the Nobel Peace Prize — peace, the citation said, cannot be achieved unless large populations find ways out of poverty.',
    quote: 'Poverty is not created by the poor; it is created by the systems we have built.'
  },
  {
    id: 'goodall', name: 'Jane Goodall', alt: '古道尔', years: '1934–',
    field: 'Primatologist · Conservationist',
    summary: 'Sixty years with chimpanzees — she redrew the boundary of "human"',
    desc: 'At four she hid in a henhouse to watch a hen lay an egg, and her mother sat down to listen rather than scold — a curiosity thus protected decided a life. At twenty-three, having saved her fare, she reached Gombe National Park in Tanganyika and lived among the chimpanzees: in 1960 she watched the chimp "David Greybeard" fish termites with a grass stem — tool use was not a human monopoly — and the finding shook anthropology to its roots.\nShe began the research without a degree; Cambridge admitted her to a PhD regardless. Over sixty years she documented chimp societies, wars, motherhood and compassion, then turned fully to conservation: the Roots & Shoots youth programme, and some 300 days a year travelling and speaking. Her creed: "Only if we understand, can we care. Only if we act, will it matter."',
    quote: 'Only if we understand, can we care. Only if we act, will it matter.'
  }
];
