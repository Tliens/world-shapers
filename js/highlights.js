/* 每位人物的"主要成就"亮点（弹窗详情页展示），中英双语
   缺失的人物不显示该区块 */
window.HIGHLIGHTS = {
  /* ---- 科学家 ---- */
  newton: {
    zh: ['提出运动三大定律与万有引力定律', '与莱布尼茨各自独立发明微积分', '用棱镜分解白光，发明反射望远镜'],
    en: ['Formulated the three laws of motion and universal gravitation', 'Co-invented calculus', 'Split white light with a prism and built the reflecting telescope']
  },
  einstein: {
    zh: ['创立狭义相对论与广义相对论', '提出光量子假说，解释光电效应', '质能方程 E=mc² 开启核能时代'],
    en: ['Created special and general relativity', 'Explained the photoelectric effect with light quanta', 'E=mc² opened the nuclear age']
  },
  curie: {
    zh: ['发现钋和镭两种新元素', '提出"放射性"概念并开创其研究', '首位两获诺贝尔奖的科学家'],
    en: ['Discovered the elements polonium and radium', 'Coined "radioactivity" and founded its study', 'First person to win two Nobel Prizes']
  },
  darwin: {
    zh: ['提出自然选择学说', '出版《物种起源》奠定演化论', '把人类纳入生命演化之树'],
    en: ['Founded the theory of evolution by natural selection', 'Wrote On the Origin of Species', 'Placed humanity on the tree of life']
  },
  pasteur: {
    zh: ['确立疾病的细菌学说', '发明巴氏消毒法', '研制炭疽与狂犬病疫苗'],
    en: ['Established the germ theory of disease', 'Invented pasteurisation', 'Developed anthrax and rabies vaccines']
  },
  turing: {
    zh: ['提出图灵机模型定义"可计算"', '主导破译恩尼格玛密码', '提出图灵测试，开创人工智能'],
    en: ['Defined computation with the Turing machine', 'Led the breaking of the Enigma cipher', 'Proposed the Turing test, founding AI']
  },
  tuyouyou: {
    zh: ['发现抗疟疾的青蒿素', '从古籍中获得低温提取的关键启发', '中国首位诺贝尔生理学或医学奖得主'],
    en: ['Discovered the antimalarial artemisinin', 'Found the key in an ancient Chinese text', 'China\u2019s first Nobel laureate in medicine']
  },
  copernicus: {
    zh: ['提出日心说', '临终出版《天体运行论》', '开启近代科学革命'],
    en: ['Proposed the heliocentric model', 'Published De revolutionibus orbium coelestium', 'Started the scientific revolution']
  },
  galileo: {
    zh: ['望远镜观测支持日心说', '斜面实验奠基近代物理学', '被称为"近代科学之父"'],
    en: ['Telescope evidence backed Copernicus', 'Inclined-plane experiments founded physics', 'Called the father of modern science']
  },
  maxwell: {
    zh: ['建立麦克斯韦方程组统一电磁学', '预言电磁波并证明光即电磁波', '开创统计力学与彩色摄影'],
    en: ['United electricity and magnetism in four equations', 'Predicted electromagnetic waves — light is one', 'Founded statistical mechanics and colour photography']
  },
  mendeleev: {
    zh: ['排出元素周期表揭示元素规律', '预言尚未发现元素的性质', '为化学建立统一的秩序'],
    en: ['Built the periodic table of elements', 'Predicted the properties of undiscovered elements', 'Gave chemistry its constitution']
  },
  fleming: {
    zh: ['发现青霉素——第一种抗生素', '开启抗生素与现代抗感染时代', '获1945年诺贝尔生理学或医学奖'],
    en: ['Discovered penicillin, the first antibiotic', 'Opened the antibiotic age', 'Shared the 1945 Nobel Prize in Medicine']
  },
  hawking: {
    zh: ['与彭罗斯证明奇点定理', '提出霍金辐射：黑洞会蒸发', '《时间简史》全球销量2500万册'],
    en: ['Proved singularity theorems with Roger Penrose', 'Predicted Hawking radiation from black holes', 'A Brief History of Time sold 25 million copies']
  },
  wcrick: {
    zh: ['提出DNA双螺旋结构模型', '阐明遗传信息的存储与复制机制', '开启分子生物学时代'],
    en: ['Modelled the DNA double helix', 'Explained how heredity stores and copies itself', 'Opened the age of molecular biology']
  },
  euler: {
    zh: ['一生约850部论著，史上最多产', '确立 f(x)、e、π、i、Σ 等数学记号', '开创分析学、图论与变分法'],
    en: ['Some 850 works — the most prolific ever', 'Standardised f(x), e, π, i and Σ', 'Founded analysis, graph theory and the calculus of variations']
  },
  gauss: {
    zh: ['19岁用尺规作出正十七边形', '著《算术研究》创立现代数论', '提出最小二乘法与高斯分布'],
    en: ['Constructed the 17-gon at nineteen', 'Disquisitiones Arithmeticae founded number theory', 'Least squares and the Gaussian distribution']
  },
  vonneumann: {
    zh: ['确立"冯·诺依曼架构"计算机体系', '创立博弈论', '参与曼哈顿计划的爆炸计算'],
    en: ['Defined the stored-program computer architecture', 'Founded game theory', 'Computed implosion for the Manhattan Project']
  },
  shannon: {
    zh: ['硕士论文奠定数字电路理论', '创立信息论，发明"比特"', '奠定压缩、纠错与加密的理论基础'],
    en: ['Master\u2019s thesis founded digital circuit theory', 'Created information theory and the "bit"', 'Groundwork of compression and cryptography']
  },
  schrodinger: {
    zh: ['建立薛定谔波动方程', '"薛定谔的猫"思想实验', '《生命是什么》启发DNA的发现'],
    en: ['Formulated the Schrödinger wave equation', 'Conceived Schrödinger\u2019s cat', '"What is Life?" inspired the DNA hunt']
  },
  hubble: {
    zh: ['证明仙女座星系在银河系之外', '发现宇宙膨胀（哈勃定律）', '哈勃太空望远镜以他命名'],
    en: ['Proved Andromeda lies beyond our galaxy', 'Discovered the expanding universe (Hubble\u2019s law)', 'The Hubble Space Telescope bears his name']
  },
  qianxuesen: {
    zh: ['创立工程控制论', '主持中国导弹与航天规划', '"两弹一星"元勋、中国航天之父'],
    en: ['Founded engineering cybernetics', 'Planned China\u2019s missile and space programmes', 'Father of China\u2019s space flight']
  },
  yuanlongping: {
    zh: ['培育世界首个实用高产杂交水稻', '超级稻亩产纪录不断刷新', '获"共和国勋章"'],
    en: ['Bred the world\u2019s first commercial hybrid rice', 'Kept raising super-rice yield records', 'Awarded the Medal of the Republic']
  },

  /* ---- 思想家 ---- */
  laotzu: {
    zh: ['著《道德经》五千言', '创立道家思想体系', '《道德经》为译本最多的中文典籍'],
    en: ['Wrote the 5,000-character Dao De Jing', 'Founded Daoist philosophy', 'The most translated of Chinese classics']
  },
  confucius: {
    zh: ['创立儒学，仁礼并重', '首倡有教无类、因材施教', '塑造东亚文明两千余年'],
    en: ['Founded Confucianism', 'Pioneered education for all', 'Shaped East Asia for 2,000 years']
  },
  zhuangzi: {
    zh: ['著《庄子》三十三篇', '以寓言说理：鲲鹏、蝶梦、庖丁解牛', '道家自由精神与文学艺术的巅峰'],
    en: ['Wrote the Zhuangzi in parables', 'Butterfly dream, the Peng bird, the cook\u2019s blade', 'Peak of Daoist freedom and prose art']
  },
  buddha: {
    zh: ['菩提树下悟道，提出四圣谛与八正道', '建立僧团，主张众生平等', '佛教成为世界三大宗教之一'],
    en: ['Awakened and taught the Four Noble Truths', 'Founded the sangha of equal seekers', 'Buddhism became a world religion']
  },
  socrates: {
    zh: ['创造"苏格拉底方法"式诘问', '把哲学从天上带到人间', '以身殉道奠定西方哲学传统'],
    en: ['Invented the Socratic method', 'Turned philosophy to human affairs', 'Died for his principles, founding a tradition']
  },
  aristotle: {
    zh: ['创立形式逻辑与三段论', '著述覆盖当时的一切学问', '创办吕克昂学园与逍遥学派'],
    en: ['Invented formal logic and syllogisms', 'Systematised all the knowledge of his age', 'Founded the Lyceum and the Peripatetics']
  },
  muhammad: {
    zh: ['创立伊斯兰教，口授《古兰经》', '统一阿拉伯半岛', '塑造一个延续千年的文明圈'],
    en: ['Founded Islam; received the Quran', 'United the Arabian peninsula', 'Shaped a civilisation that spans the world']
  },
  descartes: {
    zh: ['提出"我思故我在"', '创立解析几何与坐标系', '被誉为"近代哲学之父"'],
    en: ['"I think, therefore I am"', 'Invented analytic geometry and coordinates', 'Father of modern philosophy']
  },
  kant: {
    zh: ['三大批判调和经验与理性', '确立"绝对命令"伦理学', '为启蒙运动写下定义'],
    en: ['Three Critiques reconciled experience and reason', 'Founded the categorical imperative', 'Defined the Enlightenment itself']
  },
  adamsmith: {
    zh: ['著《国富论》创立现代经济学', '提出"看不见的手"与分工理论', '《道德情操论》完善市场伦理'],
    en: ['The Wealth of Nations founded economics', 'The "invisible hand" and division of labour', 'Grounded markets in moral sentiment']
  },
  marx: {
    zh: ['创立历史唯物主义', '提出剩余价值理论', '《共产党宣言》与《资本论》'],
    en: ['Founded historical materialism', 'Developed the theory of surplus value', 'The Communist Manifesto and Das Kapital']
  },
  nietzsche: {
    zh: ['宣告"上帝已死"，重估一切价值', '提出超人哲学与永恒轮回', '深刻影响现代哲学、文学与艺术'],
    en: ['Proclaimed "God is dead"', 'The Übermensch and eternal recurrence', 'Shaped modern thought, art and literature']
  },
  mozi: {
    zh: ['主张兼爱、非攻、尚贤', '《墨经》记载光学与力学研究', '组织严密的墨家学派'],
    en: ['Taught universal love and defensive war', 'The Mo Jing: optics and mechanics', 'A school organised like an order']
  },
  wangyangming: {
    zh: ['龙场悟道，创立心学', '提出"知行合一"与"致良知"', '平定宁王之乱的军功大儒'],
    en: ['The Longchang Enlightenment founded his school', '"Knowledge and action are one"', 'Scholar-general who crushed a rebellion']
  },
  augustine: {
    zh: ['著《忏悔录》开创自省文学', '《上帝之城》回应罗马陷落', '确立原罪与恩典等核心教义'],
    en: ['The Confessions founded introspective memoir', 'City of God answered Rome\u2019s fall', 'Shaped doctrines of sin and grace']
  },
  aquinas: {
    zh: ['著《神学大全》', '融合亚里士多德与基督教神学', '提出自然法与"五路证明"'],
    en: ['Wrote the Summa Theologiae', 'United Aristotle with Christian theology', 'Natural law and the "five ways"']
  },
  voltaire: {
    zh: ['为卡拉斯冤案奔走翻案', '把英国科学与自由思想引入法国', '启蒙运动的旗帜性人物'],
    en: ['Cleared the Calas miscarriage of justice', 'Brought English science to France', 'A banner of the Enlightenment']
  },
  rousseau: {
    zh: ['著《社会契约论》提出主权在民', '《爱弥儿》革新教育思想', '《忏悔录》开创现代自传'],
    en: ['The Social Contract: popular sovereignty', 'Émile revolutionised education', 'The Confessions invented the modern memoir']
  },

  /* ---- 发明家 ---- */
  archimedes: {
    zh: ['发现浮力定律（阿基米德原理）', '发明阿基米德螺旋提水器', '用穷竭法计算圆周率与球体积'],
    en: ['Law of buoyancy (Archimedes\u2019 principle)', 'Invented the Archimedes screw', 'Pi and sphere volumes by the method of exhaustion']
  },
  cailun: {
    zh: ['公元105年改进造纸术', '以树皮麻头制成"蔡侯纸"', '四大发明之一，文明传播的载体'],
    en: ['Perfected papermaking in 105 AD', 'Paper from bark, hemp and rags', 'One of China\u2019s Four Great Inventions']
  },
  bisheng: {
    zh: ['庆历年间发明活字印刷', '胶泥刻字、火烧令坚、排版印刷', '沈括《梦溪笔谈》记载传世'],
    en: ['Invented movable-type printing, c. 1045', 'Clay type, fired, set and printed', 'Recorded in Shen Kuo\u2019s Dream Pool Essays']
  },
  gutenberg: {
    zh: ['建成欧洲首套金属活字印刷系统', '印制《四十二行圣经》', '五十年间欧洲印书逾两千万册'],
    en: ['Europe\u2019s first movable-type press', 'Printed the forty-two-line Bible', 'Twenty million books in fifty years']
  },
  watt: {
    zh: ['发明分离式冷凝器改良蒸汽机', '离心调速器与行星齿轮传动', '功率单位"瓦特"以他命名'],
    en: ['The separate condenser transformed the steam engine', 'Centrifugal governor and rotary motion', 'The watt is named for him']
  },
  edison: {
    zh: ['发明留声机与实用白炽灯', '建成首个中央发电供电系统', '1093项专利与"发明工厂"'],
    en: ['Phonograph and practical light bulb', 'First central electric power system', '1,093 patents and the "invention factory"']
  },
  tesla: {
    zh: ['发明交流感应电机与多相输电', '特斯拉线圈与无线电遥控先驱', '磁感应强度单位以他命名'],
    en: ['AC induction motor and polyphase power', 'Tesla coil and radio-controlled craft', 'The tesla unit bears his name']
  },
  bell: {
    zh: ['发明电话并完成第一次通话', '聋哑教育与"可视语音"教学法', '参与创办《科学》杂志与国家地理学会'],
    en: ['Invented the telephone', 'Pioneer teacher of the deaf', 'Co-founded Science and National Geographic']
  },
  wright: {
    zh: ['自建风洞测试两百余种翼型', '发明飞机三轴操纵', '1903年首飞"飞行者一号"'],
    en: ['Wind-tunnel tested two hundred wing shapes', 'Invented three-axis flight control', 'First powered flight, 1903']
  },
  ford: {
    zh: ['首创汽车流水线装配', 'T型车让汽车进入千家万户', '日薪5美元开创"福特主义"'],
    en: ['Moving assembly line for cars', 'The Model T put the world on wheels', 'The five-dollar day: Fordism']
  },
  nobel: {
    zh: ['发明安全炸药（黄色炸药）', '一生拥有355项专利', '遗嘱设立诺贝尔奖'],
    en: ['Invented dynamite', 'Held 355 patents', 'His will created the Nobel Prize']
  },
  timbl: {
    zh: ['发明URL、HTTP与HTML', '建成世界第一个网站', '促成万维网免费开放给全人类'],
    en: ['Created URL, HTTP and HTML', 'Built the world\u2019s first website', 'Gave the web to everyone, free']
  },
  luban: {
    zh: ['传说中发明锯子与曲尺', '云梯、钩强等器械设计', '被奉为中国工匠的祖师'],
    en: ['Credited with the saw and carpenter\u2019s square', 'Siege ladders and naval hooks', 'Patron saint of Chinese craftsmen']
  },
  zhangheng: {
    zh: ['发明候风地动仪', '制造水运浑天仪', '推算圆周率，著《二京赋》'],
    en: ['Invented the seismoscope', 'Water-driven armillary sphere', 'Mathematician and master of fu poetry']
  },
  stephenson: {
    zh: ['造出实用蒸汽机车"布鲁克号"', '发明喷汽通风提升机车功率', '建成世界首条公共铁路'],
    en: ['Built the locomotive "Blücher"', 'Invented the steam blast', 'Opened the first public railway']
  },

  /* ---- 领袖与改革者 ---- */
  qinshihuang: {
    zh: ['统一六国，首创皇帝制度', '书同文、车同轨、统一度量衡', '推行郡县制，奠定两千年政制'],
    en: ['Unified China; created the imperial title', 'Standardised script, currency and measures', 'The commandery system that lasted two millennia']
  },
  ashoka: {
    zh: ['统一南亚次大陆大部分地区', '皈依佛教，以法治国', '派使者将佛教传向亚洲各地'],
    en: ['United most of the subcontinent', 'Ruled by dharma after Kalinga', 'Sent Buddhism across Asia']
  },
  martinluther: {
    zh: ['发表《九十五条论纲》', '将《圣经》译成德语', '开启新教与宗教改革'],
    en: ['Posted the Ninety-five Theses', 'Translated the Bible into German', 'Launched the Protestant Reformation']
  },
  washington: {
    zh: ['领导独立战争获胜', '主持制宪会议', '两届后主动交权，立下共和先例'],
    en: ['Won the Revolutionary War', 'Presided over the Constitutional Convention', 'Voluntarily gave up power, a republican precedent']
  },
  napoleon: {
    zh: ['《拿破仑法典》影响世界民法', '奥斯特里茨等四十场经典战役', '创办法兰西银行与荣誉军团勋章'],
    en: ['The Napoleonic Code reshaped civil law', 'Forty classic battles', 'Bank of France and the Légion d\u2019honneur']
  },
  lincoln: {
    zh: ['维护联邦统一赢得南北战争', '签署《解放黑人奴隶宣言》', '葛底斯堡演说重新定义民主'],
    en: ['Held the Union through the Civil War', 'The Emancipation Proclamation', 'The Gettysburg Address']
  },
  mlk: {
    zh: ['领导蒙哥马利巴士抵制运动', '发表"我有一个梦想"演讲', '推动《民权法案》通过'],
    en: ['Led the Montgomery bus boycott', 'Delivered "I have a dream"', 'Drove the Civil Rights Act']
  },
  mandela: {
    zh: ['27年牢狱后选择民族和解', '南非首位黑人总统', '与德克勒克同获诺贝尔和平奖'],
    en: ['Chose reconciliation after 27 years in prison', 'First Black president of South Africa', 'Nobel Peace Prize for the peace talks']
  },
  gandhi: {
    zh: ['创立"非暴力不合作"运动', '领导食盐进军与印度独立', '影响全球民权运动'],
    en: ['Created satyagraha — non-violent resistance', 'The Salt March and Indian independence', 'Inspired civil rights movements worldwide']
  },
  constantine: {
    zh: ['颁布《米兰敕令》实现信仰自由', '召开尼西亚大公会议', '营建新都君士坦丁堡'],
    en: ['The Edict of Milan legalised Christianity', 'Convened the Council of Nicaea', 'Built Constantinople']
  },
  tangtaizong: {
    zh: ['开创"贞观之治"', '虚心纳谏，重用魏征', '被各族共尊为"天可汗"'],
    en: ['The golden Reign of Zhenguan', 'Welcomed criticism — Wei Zheng', 'Acclaimed "Heavenly Khan"']
  },
  churchill: {
    zh: ['战时领袖："我们决不投降"', '1953年获诺贝尔文学奖', '最早警示"铁幕"落下'],
    en: ['Rallied Britain: "never surrender"', 'Nobel Prize in Literature, 1953', 'First warned of the iron curtain']
  },
  elizabethi: {
    zh: ['击败西班牙无敌舰队', '开创伊丽莎白时代的文艺繁荣', '奠定大英帝国的海洋根基'],
    en: ['Defeated the Spanish Armada', 'The Elizabethan golden age', 'Set England on the oceans']
  },
  fdr: {
    zh: ['推行"新政"应对大萧条', '建立社会保障体系', '筹建联合国，连任四届总统'],
    en: ['The New Deal against the Depression', 'Built Social Security', 'Architect of the UN; elected four times']
  },

  /* ---- 探险家 ---- */
  zhangqian: {
    zh: ['两度出使西域，"凿空"丝路', '被困匈奴十三年持节不失', '开通汉朝与中亚的官方通道'],
    en: ['Two embassies west "hollowed out" the Silk Road', 'Held captive thirteen years, staff unfailing', 'Opened official Han routes to Central Asia']
  },
  marcopoloo: {
    zh: ['在元朝任职游历十七年', '口述《马可·波罗游记》', '点燃欧洲对东方的想象与大航海时代'],
    en: ['Seventeen years across Yuan China', 'Dictated The Travels of Marco Polo', 'Kindled Europe\u2019s age of discovery']
  },
  zhenghe: {
    zh: ['七下西洋，远达东非海岸', '宝船舰队规模空前', '和平外交与海上贸易网络'],
    en: ['Seven voyages as far as East Africa', 'The greatest fleet of its age', 'Diplomacy and trade, not conquest']
  },
  columbus: {
    zh: ['1492年横渡大西洋抵达美洲', '开启"哥伦布大交换"', '地理大发现时代的起点'],
    en: ['Crossed the Atlantic to the Americas, 1492', 'Started the Columbian Exchange', 'Beginning of the age of discovery']
  },
  armstrong: {
    zh: ['首次载人登月并安全返回', '完成人类的月球第一步', '"个人一小步，人类一大步"'],
    en: ['First crewed Moon landing and safe return', 'First human step on the Moon', '"One small step for man"']
  },
  magellan: {
    zh: ['率队完成人类首次环球航行', '穿越以他命名的麦哲伦海峡', '横渡太平洋38天不见陆地'],
    en: ['Led the first circumnavigation of the Earth', 'Through the Strait of Magellan', 'The Pacific crossed in thirty-eight days']
  },
  dagama: {
    zh: ['绕好望角开辟欧亚海上航线', '1498年抵达印度卡利卡特', '使葡萄牙跃升为海上霸权'],
    en: ['Opened the Cape route to India', 'Reached Calicut in 1498', 'Made Portugal a sea power']
  },
  amundsen: {
    zh: ['首航打通西北航道', '1911年率先抵达南极点', '首个同时抵达南北两极的人'],
    en: ['First through the Northwest Passage', 'South Pole first, 1911', 'First to both poles']
  },

  /* ---- 艺术家 ---- */
  davinci: {
    zh: ['《蒙娜丽莎》《最后的晚餐》', '七千页手稿横跨艺术与科学', '"文艺复兴人"的化身'],
    en: ['Mona Lisa and The Last Supper', 'Seven thousand pages of notebooks', 'The embodiment of the Renaissance man']
  },
  michelangelo: {
    zh: ['雕塑《大卫》与《圣殇》', '西斯廷礼拜堂天顶画《创世纪》', '主持设计圣彼得大教堂穹顶'],
    en: ['David and the Pietà', 'The Sistine Chapel ceiling', 'The dome of St Peter\u2019s']
  },
  shakespeare: {
    zh: ['38部戏剧与154首十四行诗', '为英语贡献约1700个词汇', '作品译成百余种语言，常演不衰'],
    en: ['Thirty-eight plays and 154 sonnets', 'Added some 1,700 words to English', 'The most performed author on earth']
  },
  goethe: {
    zh: ['历时六十年写成《浮士德》', '《少年维特之烦恼》风靡欧洲', '提出"世界文学"概念'],
    en: ['Faust, written across sixty years', 'The Sorrows of Young Werther', 'Coined "world literature"']
  },
  libai: {
    zh: ['存诗约千首，想象雄奇', '贺知章惊呼其为"谪仙人"', '盛唐气象与浪漫主义的巅峰'],
    en: ['A thousand poems of soaring imagination', 'Hailed as a "banished immortal"', 'Peak of High-Tang romanticism']
  },
  beethoven: {
    zh: ['《第五（命运）》与《第九交响曲》', '失聪后写出巅峰之作', '三十二首钢琴奏鸣曲被称为"新约圣经"'],
    en: ['Fifth and Ninth Symphonies', 'Masterworks written while deaf', 'Thirty-two sonatas, the "New Testament" of music']
  },
  bach: {
    zh: ['《平均律键盘曲集》四十八首前奏曲与赋格', '《马太受难曲》复调巅峰', '被尊为"西方音乐之父"'],
    en: ['The Well-Tempered Clavier', 'The St Matthew Passion\u2019s counterpoint', 'Father of Western music']
  },
  mozart: {
    zh: ['一生创作600余部作品', '《费加罗的婚礼》《魔笛》等22部歌剧', '古典主义天才的标杆'],
    en: ['More than six hundred works', 'Twenty-two operas', 'The benchmark of classical genius']
  },
  vangogh: {
    zh: ['十年创作约2100件作品', '《星月夜》《向日葵》成为人类共同图像', '表现主义与后印象派的先驱'],
    en: ['About 2,100 works in a decade', 'Starry Night and the Sunflowers', 'Forerunner of Expressionism']
  },
  picasso: {
    zh: ['与布拉克共同开创立体主义', '《格尔尼卡》成为反战名作', '一生创作约13500件作品'],
    en: ['Co-created Cubism', 'Guernica, the anti-war icon', 'Some 13,500 works in a lifetime']
  },
  raphael: {
    zh: ['梵蒂冈签字大厅《雅典学院》', '圣母像成为后世典范', '主持圣彼得大教堂营建'],
    en: ['The School of Athens', 'The model of Madonna paintings', 'Led the building of St Peter\u2019s']
  },
  dufu: {
    zh: ['存诗约1400首，被称为"诗史"', '"三吏""三别"记录民间疾苦', '律诗艺术登峰造极'],
    en: ['1,400 poems — "poetry as history"', 'Three Officials and Three Partings', 'Perfected the regulated verse']
  },
  andersen: {
    zh: ['一生创作近170篇童话', '《海的女儿》《丑小鸭》传遍世界', '国际儿童图书最高奖以其命名'],
    en: ['Nearly 170 fairy tales', 'Read by children everywhere', 'The Hans Christian Andersen Award']
  },
  beatles: {
    zh: ['13张专辑、超6亿张唱片销量', '《Yesterday》被翻唱数千次', '重塑流行音乐与青年文化'],
    en: ['Thirteen albums, 600 million records', 'Yesterday: thousands of covers', 'Rewrote pop music and youth culture']
  },
  chaplin: {
    zh: ['自编自导《城市之光》《摩登时代》', '《大独裁者》公开讽刺纳粹', '联美公司创始人之一'],
    en: ['City Lights and Modern Times', 'The Great Dictator mocked Hitler', 'Co-founded United Artists']
  },

  /* ---- 人道主义者 ---- */
  nightingale: {
    zh: ['使伤员死亡率从42%降至约2%', '创办世界首所正规护士学校', '首位入选皇家统计学会的女性'],
    en: ['Cut frontline deaths from 42% to 2%', 'Founded the first secular nursing school', 'First woman in the Royal Statistical Society']
  },
  dunant: {
    zh: ['创立红十字国际委员会', '推动首个《日内瓦公约》签署', '获首届诺贝尔和平奖'],
    en: ['Founded the International Red Cross', 'Drove the first Geneva Convention', 'First Nobel Peace Prize']
  },
  keller: {
    zh: ['史上首位盲聋文学学士', '《假如给我三天光明》译成五十余种语言', '为残障人士福利奔走六十年'],
    en: ['First deaf-blind Bachelor of Arts', 'Her books in more than fifty languages', 'Sixty years of advocacy for the disabled']
  },
  teresa: {
    zh: ['创立仁爱传教修女会', '在加尔各答创办临终关怀院', '1979年获诺贝尔和平奖'],
    en: ['Founded the Missionaries of Charity', 'Hospices for the dying in Calcutta', 'Nobel Peace Prize, 1979']
  },
  borlaug: {
    zh: ['培育抗病矮秆高产小麦', '引发"绿色革命"养活亿万人口', '1970年获诺贝尔和平奖'],
    en: ['Bred disease-proof dwarf wheat', 'The Green Revolution fed billions', 'Nobel Peace Prize, 1970']
  },
  eleanor: {
    zh: ['主持起草《世界人权宣言》', '推动宣言以零票反对通过', '被称为"人权第一夫人"'],
    en: ['Steered the Universal Declaration of Human Rights', 'Passed with zero votes against', '"First Lady of the World"']
  },
  malala: {
    zh: ['史上最年轻诺贝尔和平奖得主', '创办马拉拉基金推动女童教育', '在联合国演讲"一本书和一支笔"'],
    en: ['Youngest-ever Nobel laureate', 'The Malala Fund for girls\u2019 education', '"One book, one pen" at the UN']
  },
  bethune: {
    zh: ['发明战地流动输血服务站', '在中国抗日根据地救治上千伤员', '《纪念白求恩》使其名传中国'],
    en: ['Pioneered mobile frontline transfusion', 'Treated a thousand wounded soldiers in China', 'Immortalised in Mao\u2019s essay']
  },
  yunus: {
    zh: ['创办格莱珉（乡村）银行', '小额贷款借款人97%为妇女', '2006年获诺贝尔和平奖'],
    en: ['Founded Grameen Bank', 'Microloans: 97% to women', 'Nobel Peace Prize, 2006']
  },
  goodall: {
    zh: ['发现黑猩猩会使用工具', '贡贝六十年黑猩猩研究', '创办"根与芽"青年环保项目'],
    en: ['Discovered chimpanzees use tools', 'Sixty years of Gombe research', 'Founded Roots & Shoots']
  }
};
