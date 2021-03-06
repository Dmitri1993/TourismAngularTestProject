'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [{
      title: 'France',
      icon: 'http://transfertparisgo.com/public/images/pages/flag-frantsii.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      description: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Chateau_de_Versailles%2C_France_%288132659035%29.jpg" width=100% height=66%>' +
        'Фра́нция (фр. France, [fʁɑ̃s] Информация о файле слушать), официальное название Францу́зская Респу́блика (фр. République française, [ʁe.py.blik fʁɑ̃.sɛz] Информация о файле слушать) — трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, Равенство, Братство», её принцип — правление народа, народом и для народа.<p>' +
        '<p>' +
        'Название страны происходит от этнонима древнегерманского племени франков, несмотря на то, что большинство населения Франции имеет смешанное галло-романское происхождение и говорит на языке романской группы.<p>' +
        '<p>' +
        'Франция является ядерной державой и одним из пяти постоянных членов Совета Безопасности ООН. С 1950-х годов — одно из государств, участвующих в создании Европейского союза.<p>' +
        '<p>' +
        'Население — 64 859 773 человек в метрополии и 66 991 000 человек — с учётом заморских владений (оценка на 1 января 2017), в том числе около 90 % — граждане Франции. Верующие — преимущественно католики (80 % от числа верующих или 43 % от всего населения), при этом 45 % населения заявляют, что не принадлежат ни к одной религии.<p>' +
        '<p>' +
        'Законодательный орган — двухпалатный парламент (Сенат и Национальное собрание). Административно-территориальное деление: 18 регионов (13 в метрополии и 5 заморских регионов), включающих 101 департамент (96 в метрополии и 5 заморских департаментов), 5 заморских сообществ и 3 административно-территориальных образования с особым статусом.' +
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg/280px-Siege-alesia-vercingetorix-jules-cesar.jpg" width="300px" height="200px" vspace="8" hspace="8" align="right">' +
        '<h2>История</h2>' +
        '<h3>Древний мир и Средние века</h3><p>' +
        '<p>' +
        'Франция в доисторический период была местом древнейших стоянок неандертальцев и кроманьонцев. В эпоху неолита на территории Франции существовало несколько богатых памятниками доисторических культур. Доисторическая Бретань была культурно связана с соседней Британией, на её территории обнаружено большое количество мегалитов. В период позднего бронзового и раннего железного века территорию Франции населяли кельтские племена галлов, юго-запад современной Франции — иберы, племена неизвестного происхождения. В результате поэтапного завоевания, которое было завершено в I в. до н. э. в результате Галльской войны Юлия Цезаря, современная территория Франции вошла в состав Римской империи как провинция Галлия. Население было романизировано и к V веку говорило на народной латыни, ставшей основой современного французского языка.<p>' +
        '<p>' +
        '<p>' +
        'В 486 году Галлия была завоёвана франками под предводительством Хлодвига. Тем самым было установлено Франкское государство, а Хлодвиг стал первым королём династии Меровингов. В VII веке власть короля существенно ослабла, а реальной силой в государстве обладали майордомы, одному из которых, Карлу Мартеллу, удалось в 732 году в битве при Пуатье разбить арабское войско и предотвратить завоевание арабами Западной Европы. Сын Карла Мартелла, Пипин Короткий, стал первым королём династии Каролингов, а при сыне Пипина, Карле Великом, франкское государство достигло наивысшего расцвета за всю историю и занимало большую часть территории нынешней Западной и Южной Европы. После смерти сына Карла Великого — Людовика Благочестивого — его империя была поделена на три части. В 843 году по Верденскому договору было образовано Западно-Франкское королевство во главе с Карлом Лысым. Оно занимало приблизительно территорию современной Франции; в X веке страна стала называться Францией.<p>' +
        '<p>' +
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg/250px-Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg" width="300px" height="360px" vspace="8" hspace="8" align="left">' +
        'Впоследствии центральная власть существенно ослабла. В IX веке Франция регулярно подвергалась набегам викингов, в 886 году последние осаждали Париж. В 911 году викинги основали герцогство Нормандия на севере Франции. К концу X века страна была практически полностью раздроблена на два десятка графств и герцогств, а королевская власть была чисто номинальной — короли не имели реальной власти за пределами своих феодальных владений (Париж и Орлеан). Династия Каролингов в 987 году сменилась династией Капетингов, по имени первого её короля Гуго Капета. Правление Капетингов примечательно крестовыми походами, религиозными войнами в самой Франции (сначала в 1170 году движение вальденсов, а в 1209—1229 — Альбигойские войны), созывом парламента — Генеральных штатов — впервые в 1302 году, а также Авиньонским пленением пап, когда папа Римский был арестован в 1303 году королём Филиппом IV Красивым, и папы вынуждены были оставаться в Авиньоне до 1378 года. В 1328 году Капетингов сменила боковая ветвь династии, известная как династия Валуа. В 1337 году началась Столетняя война с Англией, в которой сначала успех сопутствовал англичанам, сумевшим захватить существенную часть территории Франции, но в конце концов, особенно после появления Жанны д’Арк, в войне наступил перелом, и в 1453 году англичане капитулировали.<p>' +
        '<p>' +
        'К периоду правления Людовика XI (1461—1483) относится фактическое прекращение феодальной раздробленности Франции и превращение страны в абсолютную монархию. В дальнейшем Франция постоянно стремилась играть заметную роль в Европе. Так, с 1494 по 1559 год она вела Итальянские войны с Испанией за контроль над Италией. В конце XVI века в преимущественно католической Франции получил распространение протестантизм кальвинистского толка (протестанты во Франции назывались гугенотами). Это вызвало религиозные войны между католиками и протестантами, пиком которых в 1572 году стала Варфоломеевская ночь в Париже — массовое убийство протестантов. В 1589 году династия Валуа пресеклась, и Генрих IV стал основателем новой династии Бурбонов.<p>' +
        '<p>' +
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/300px-Prise_de_la_Bastille.jpg" width="300px" height="200px" vspace="8" hspace="8" align="right">' +
        '<h3>Новое время и революция</h3><p>' +
        'В 1598 году Генрих IV подписал Нантский эдикт, положивший конец войне с протестантами и давший им широкие полномочия, так что они образовали «государство в государстве» со своими крепостями, войсками и местными структурами управления. С 1618 по 1648 год Франция участвовала в Тридцатилетней войне (формально боевые действия вела лишь с 1635 г. — это так называемый шведско-французский период войны). С 1624 года до своей смерти в 1642 году страной фактически управлял министр короля Людовика XIII, кардинал Ришелье. Он возобновил войны с протестантами и сумел нанести им военное поражение и разрушить их государственные структуры. В 1643 году умер Людовик XIII, и королём стал его пятилетний сын Людовик XIV, который правил до 1715 года и сумел пережить своих сына и внука. В 1648—1653 годах произошло восстание городских слоёв и дворянской оппозиции, недовольной правлением королевы-матери Анны Австрийской и министра кардинала Мазарини, продолжавших политику Ришелье, Фронда. После подавления восстания во Франции была восстановлена абсолютная монархия. За время правления Людовика XIV — «короля-солнца» — Франция участвовала в нескольких войнах в Европе: 1635—1659 гг. — война с Испанией, 1672—1678 гг. — Голландская война, 1688—1697 гг. — Война за пфальцское наследство (война Аугсбургской лиги) и 1701—1713 гг. — Война за испанское наследство. <p>' +
        'В 1685 году Людовик отменил Нантский эдикт, что привело к бегству протестантов в соседние страны и ухудшению экономического положения Франции. <p>' +
        'В 1715 г. после смерти Людовика XIV на французский престол взошёл его правнук Людовик XV, правивший до 1774 г.<p>' +
        '<p>' +
        '<ol>' +
        '<li>1789 — Великая французская революция.</li>' +
        '<li>1792 — Первая республика.</li>' +
        '<li>1793—1794 — якобинский террор.</li>' +
        '<li>1795 — захват Нидерландов.</li>' +
        '<li>1797 — захват Венеции.</li>' +
        '<li>1798—1801 — Египетская экспедиция.</li>' +
        '<li>1799—1814 — правление Наполеона (в 1804 провозглашён императором; Первая империя). В 1800—1812 годах Наполеон путём завоевательных походов создал всеевропейскую империю, а в Италии, Испании и других странах правили его родственники или ставленники. После поражения в России (см. Отечественная война 1812 г.) и очередного объединения антинаполеоновской коалиции держава Наполеона распалась.</li>' +
        '<li>1815 — Битва при Ватерлоо.</li>' +
        '<li>1814—1830 — период Реставрации, базировавшийся на дуалистической монархии Людовика XVIII (1814/1815-1824) и Карла X (1824—1830).</li>' +
        '<li>1830—1848 — Июльская монархия. Революция свергает Карла X, власть переходит к принцу Луи-Филиппу Орлеанскому, к власти пришла финансовая аристократия.</li>' +
        '<li>1848—1852 — Вторая республика.</li>' +
        '<li>1852—1870 — правление Наполеона III — Вторая империя.</li>' +
        '<li>1870—1940 — Третья республика, провозглашённая после пленения Наполеона III под Седаном во франко-прусской войне 1870-71. В марте — мае 1871 года существовала Парижская коммуна. В 1879 — 80 создана Рабочая партия. В начале XX века образованы Социалистическая партия Франции (под руководством Ж. Геда, П. Лафарга и других) и Французская социалистическая партия (под руководством Ж. Жореса), которые объединились в 1905 (французская секция рабочего интернационала, СФИО). К концу XIX века в основном завершилось образование французской колониальной империи, включавшей в себя огромные владения в Африке и Азии.</li>' +
        '<li>1914—1918 — в Первой мировой войне Франция участвовала в составе Антанты.</li>' +
        '<li>1939—1945 — Вторая мировая война<p>' +
        '<li>1940 — Компьенское перемирие 1940 с Германией (капитуляция Франции)</li>' +
        '<li>1940—1944 — германская оккупация северной Франции, режим Виши в южной Франции.</li>' +
        '<li>1944 — освобождение Франции войсками антигитлеровской коалиции и движения Сопротивления.</li>' +
        '<li>1946—1958 — Четвёртая республика.' +
        '</ol>' +
        '<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/NotreDameI.jpg" width="300px" height="200px" vspace="8" hspace="8" align="left">' +
        '<h3>Пятая республика</h3>' +
        'В 1958 году принята конституция Пятой республики, расширившая права исполнительной власти. Президентом Республики был избран Шарль де Голль, генерал Освобождения, герой Первой и Второй мировых войн. К 1960 году в обстановке распада колониальной системы большая часть французских колоний в Африке завоевала независимость. В 1962 после кровопролитной войны обрёл независимость Алжир. Профранцузские алжирцы переселились во Францию, где составили стремительно растущее мусульманское меньшинство.<p>' +
        '<p>' +
        'Массовые волнения молодёжи и студентов (майские события во Франции 1968), вызванные обострением экономических и социальных противоречий, а также всеобщая забастовка привели к острому политическому кризису; президент Шарль де Голль, основатель Пятой республики, ушёл в отставку (1969) и 9 ноября 1970 года, спустя год, умер.<p>' +
        '<p>' +
        'В целом, послевоенное развитие Франции характеризовалось форсированным развитием промышленности и сельского хозяйства, поощрением национального капитала, экономической и социально-культурной экспансией в бывшие африканские и азиатские колонии, активной интеграцией в рамках Евросоюза, развитием науки и культуры, усилением мер социальной поддержки, противодействием «американизации» культуры.<p>' +
        '<p>' +
        'Внешняя политика при президенте Де Голле отличалась стремлением к независимости и к «восстановлению величия Франции». В 1960 г. после успешных испытаний собственного ядерного оружия страна присоединилась к «ядерному клубу», в 1966 г. Франция вышла из военной структуры НАТО (вернулась только во время президентства Николя Саркози), Шарль Де Голль не поддерживал и процессы евроинтеграции.<p>' +
        '<p>' +
        'Вторым президентом Пятой республики был в 1969 избран голлист Жорж Помпиду, в 1962—1968 гг. занимавший пост премьер-министра.<p>' +
        '<p>' +
        'В 1974 г. после смерти Помпиду его сменил Валери Жискар д’Эстен, политик либеральных и проевропейских взглядов, основатель центристской партии «Союз за французскую демократию».<p>' +
        '<p>' +
        'С 1981 по 1995 президентский пост занимал социалист Франсуа Миттеран.<p>' +
        '<p>' +
        'C 17 мая 1995 по 16 мая 2007 президентом являлся Жак Ширак, переизбранный в 2002 году. Он является политиком неоголлистского направления. При нём, в 2000 г., был проведён референдум по вопросу сокращения срока полномочий президента в стране с 7 до 5 лет. Несмотря на очень низкую явку (около 30 % населения), большинство в итоге все же высказалось за уменьшение срока (73 %).<p>' +
        '<p>' +
        'В связи с ростом числа выходцев из стран Африки во Франции обострилась проблема мигрантов, многие из которых являются мусульманами: 10 % населения Франции составляют некоренные мусульмане (в большинстве выходцы из Алжира). С одной стороны, это вызывает рост популярности ультраправых (ксенофобских) организаций у коренных французов, с другой стороны, Франция становится ареной беспорядков и терактов. Североафриканская иммиграция берёт начало в конце XIX — начале XX в. Замедление темпов естественного прироста населения и нехватка рабочей силы во Франции на фоне экономического подъёма вызвали необходимость привлечения иностранной рабочей силы. Главными сферами применения труда иммигрантов являются строительство (20 %), отрасли промышленности с применением поточно-конвейерного производства (29 %) и сфера обслуживания и торговли (48,8 %). Из-за низкой профессиональной подготовки выходцы из Северной Африки часто становятся безработными. В 1996 г. средний уровень безработицы среди иностранцев — выходцев из стран Магриба достигал 32 %. В настоящее время иммигранты из стран Магриба составляют более 2 % населения Франции и размещаются в основном в трёх районах страны с центрами в Париже, Лионе и Марселе.<p>' +
        '<p>' +
        '16 мая 2007 президентом Франции стал кандидат от партии «Союз за народное движение» Николя Саркози, выходец из дворянской семьи, эмигрировавшей во Францию из Венгрии.<p>' +
        '<p>' +
        '21 июля 2008 г. парламент Франции с незначительным перевесом поддержал проект конституционной реформы, предложенный президентом Саркози. Нынешняя реформа конституции стала самой существенной за все время существования Пятой республики, внеся поправки в 47 из 89 статей документа 1958 г. Законопроект включил в себя три части: усиление роли парламента, обновление института исполнительной власти и предоставление гражданам новых прав.<p>' +
        '<p>' +
        'Наиболее важные изменения:<p>' +
        '<ol>' +
        '<li>президент может находиться на посту не более двух сроков подряд;</li>' +
        '<li>парламент приобретает право вето на некоторые решения президента;</li>' +
        '<li>ограничивается контроль правительства над деятельностью парламентских комитетов;</li>' +
        '<li>при этом президент получает право ежегодно выступать перед парламентом (это было запрещено с 1875 г. в целях соблюдения разделения между двумя властями);</li>' +
        '<li>предусмотрено проведение референдума по вопросу вступления в ЕС новых членов.</li>' +
        '</ol>' +
        'В марте 2010 г. во Франции состоялись региональные выборы. По итогам двух туров голосования были избраны 1880 советников региональных советов. Выборы состоялись во всех 26 регионах страны, в том числе и в 4 заморских. Нынешние региональные выборы уже окрестили пробой сил перед президентскими выборами 2012 г.<p>' +
        '<p>' +
        'Победу на выборах одержала оппозиционная коалиция «Левый союз» (UG) во главе с «Социалистической партией» (PS). В коалицию также входят партии «Европа-экология» и «Левый Фронт». В первом туре они набрали соответственно 29 %, 12 % и 6 %, в то время как президентская партия «Союз за народное движение» (UMP) — лишь 26 %. По итогам второго тура «Левый союз» получил 54 % голосов, таким образом, из 22 европейских регионов Франции в 21 предпочтение было отдано именно ему. Партия Саркози оставила за собой лишь регион Эльзас.<p>' +
        '<p>' +
        'Весьма неожиданным оказался и успех ультраправого «Национального фронта», набравшего во втором туре в целом около 2 млн голосов, то есть 9,17 %. Партия прошла во второй тур голосования в 12 регионах страны, соответственно в каждом из них получила в среднем по 18 % голосов. Сам Жан-Мари Ле Пен, возглавивший партийный список в регионе Прованс-Альпы-Лазурный Берег, добился здесь лучшего результата в истории своей партии, набрав 22,87 % голосов и обеспечив своим сторонникам 21 из 123 депутатских мандатов в местном совете. На севере Франции, в регионе Север-Па-де-Кале, за «Национальный Фронт», местный список которого возглавила дочь лидера партии Марин Ле Пен, отдали свои голоса 22,20 % избирателей, что гарантировало НФ 18 из 113 мест в региональном совете.<p>' +
        '<p>' +
        '6 мая 2012 года в результате второго тура президентских выборов 24-м президентом Франции был избран Франсуа Олланд.<p>' +
        '<p>' +
        'В апреле 2013 года в стране были легализованы однополые браки.<p>' +
        '<p>' +
        '<h2>Государственное устройство</h2>' +
        '<h3>Основы государственного строя</h3>' +
        '<p>Франция — унитарная республика президентского типа. Основным законом государства является конституция, принятая 4 октября 1958 года. Она регламентирует функционирование органов власти Пятой Республики: устанавливает республиканскую президентско-парламентскую форму правления (Конституция Французской Республики, разд. 2).<p>' +
        '<p>' +
        'Конституция Французской республики несколько раз пересматривалась по следующим статьям:<p>' +
        '<p>' +
        '<ol>' +
        '<li>выборы Президента на основе всеобщего прямого голосования (1962 г.),</li><p>' +
        '<li>введение нового раздела Конституции об уголовной ответственности членов правительства (1993 г.),</li><p>' +
        '<li>введение единой сессии парламента и расширение компетенций референдума (1995 г.),</li><p>' +
        '<li>принятие временных мер в отношении статуса Новой Каледонии (1998 г.),</li><p>' +
        '<li>создание Экономического и Валютного Союза, равноправный доступ мужчин и женщин к выборным мандатам и выборным функциям, признание юридического права Международного Уголовного Суда (1999 г.),</li><p>' +
        '<li>уменьшение срока президентского мандата с 7 до 5 лет (2000 г.),</li><p>' +
        '<li>реформа об уголовной ответственности главы государства, закрепление Конституцией отмены смертной казни, реформа об автономии Новой Каледонии (2007 г.),</li><p>' +
        '<li>реформа об обновлении государственного устройства и установления равновесия распределения властей (2008 г.).</li><p>' +
        '</ol>' +
        'Существует во Франции и Конституционный совет, который состоит из 9 членов и осуществляет контроль за правильностью проведения выборов и конституционностью законов, вносящих изменения в Конституцию, а также законов, переданных ему на рассмотрение.' +
        '<h3>Исполнительная власть</h3><p>' +
        'Главой государства и руководителем исполнительной ветви власти является президент, в настоящее время — Эмманюэль Макрон. В Пятой республике премьер-министр отвечает за текущую внутреннюю и экономическую политику, а также имеет право издавать указы общего характера. Он считается ответственным за политику правительства (статья 20). Премьер-министр руководит деятельностью правительства и обеспечивает исполнение законов (статья 21). Существует у премьер-министра собственный сайт: www.premier-ministre.gouv.fr.<p>' +
        '<p>' +
        'Премьер-министр назначается президентом республики. Утверждения его кандидатуры Национальным собранием не требуется, так как Национальное собрание имеет право в любой момент объявить правительству вотум недоверия. Обычно премьер-министр представляет ту партию, которая имеет большинство мест в Национальном собрании. Премьер-министр составляет список министров своего кабинета и представляет его на утверждение президенту.<p>' +
        '<p>' +
        'Премьер-министр инициирует принятие законов в Национальном Собрании и обеспечивает их выполнение, он же отвечает за национальную оборону. Премьер-министр контрассигнует акты президента, замещает его в качестве председателя в советах и комитетах, определённых статьёй 15 Конституции.<p>' +
        '<p>' +
        'С 15 мая 2017 года правительство возглавляет Эдуар Филипп.<p>' +
        '<p>' +
        '<h3>Законодательная власть</h3><p>' +
        'Законодательная власть во Франции принадлежит Парламенту, включающему в себя две палаты — Сенат и Национальное собрание. Сенат Республики, члены которого избираются на основе непрямого всеобщего голосования, состоит из 348 сенаторов, 305 из которых представляют метрополию, 9 — заморские территории, 5 — территории Французского сообщества и 12 — французских граждан, проживающих за границей. Сенаторы избираются на шестилетний срок (с 2003 года, а до 2003 года — на 9 лет) коллегией выборщиков, состоящей из депутатов Национального собрания, генеральных советников и делегатов от муниципальных советов, при этом Сенат каждые три года обновляется на половину. Последние выборы в Сенат состоялись в сентябре 2008 года. По итогам выборов, состоявшихся в сентябре 2008 года, 343 члена Сената распределяются следующим образом:<p>' +
        '<p>' +
        '<ol>' +
        '<li>Фракция «Союз за народное движение» (UMP): 151 (44 %)</li><p>' +
        '<li>Социалистическая фракция: 116 (33,82 %)</li><p>' +
        '<li>Фракция «Центристский Союз»: 29</li><p>' +
        '<li>Коммунистическая, республиканская и гражданская фракция: 23</li><p>' +
        '<li>Фракция «Европейское демократическое и социальное объединение»: 17</li><p>' +
        '<li>Не состоящие ни в одной фракции: 7</li><p>' +
        '<li>Официальный сайт Сената Франции — www.senat.fr</li>' +
        '</ol><p>' +
        'По итогам выборов 10 и 17 июня 2007 года, Национальное собрание насчитывает 577 депутатов, распределяющихся таким образом:<p>' +
        '<p>' +
        '<ol>' +
        '<li>Фракция «Союз за народное Движение» (UMP): 314 (плюс 6 присоединившихся)</li><p>' +
        '<li>Социалистическая радикальная и гражданская Фракция: 186 (плюс 18 присоединившихся)</li><p>' +
        '<li>Левая демократическая и республиканская фракция: 24</li><p>' +
        '<li>Новая центристская фракция: 20 (плюс 2 присоединившихся)</li><p>' +
        '<li>Не состоящие ни в одной фракции: 7</li><p>' +
        '<li>Официальный сайт Национальной Ассамблеи: www.assemble-nationale.fr</li>' +
        '</ol><p>' +
        'Национальное собрание, депутаты которого избираются на основе прямого всеобщего голосования сроком на 5 лет, состоит из 577 депутатов, 555 из которых представляют метрополию, а 22 — заморские территории. Депутаты Национального собрания избираются прямым всеобщим голосованием на пятилетний срок. Последние выборы депутатов Национальной Ассамблеи состоялись 10 и 17 июня 2012 года. Помимо своей функции — контроля за деятельностью правительства, обе палаты разрабатывают и принимают законы. В случае разногласий окончательное решение остаётся за Национальной Ассамблеей.<p>' +
        '<p>' +
        '<h3>Судебная власть</h3><p>' +
        'Судебная система Франции регламентируется в VIII разделе Конституции «О судебной власти». Президент страны является гарантом независимости судебной власти, статус судей устанавливается органическим законом, а сами судьи — несменяемы. Французское правосудие основывается на принципах коллегиальности, профессионализма, независимости, которые обеспечиваются рядом гарантий. Закон 1977 года установил, что расходы на осуществление правосудия при рассмотрении гражданских и административных дел возлагаются на государство. Это правило не распространяется на уголовную юстицию. Также важным принципом является равенство перед правосудием и нейтральность судей, публичное рассмотрение дела и возможность двойного рассмотрения дела. Законом предусмотрена и возможность кассационного обжалования.<p>' +
        '<p>' +
        'Судебная система Франции многоступенчатая, и её можно разделить на две ветви — саму судебную систему и систему административных судов. Низшую ступень в системе судов общей юрисдикции занимают трибуналы малой инстанции. Дела в таком трибунале рассматриваются лично судьёй. Однако при каждом из них состоит несколько магистратов. Трибунал малой инстанции рассматривает дела с незначительными суммами, а решения таких судов апелляционному обжалованию не подлежат.<p>' +
        '<p>' +
        'При рассмотрении уголовных дел этот суд называется трибуналом полиции. Эти трибуналы делятся на палаты: по гражданским делам и исправительный суд. Апелляционный суд всегда выносит решения коллегиально. Гражданско-правовая часть апелляционного суда состоит из двух палат: по гражданским и социальным делам. Имеется также палата по торговым делам. Одной из функций обвинительной палаты является функция дисциплинарного суда в отношении офицеров судебной полиции (офицеров МВД, военной жандармерии и т. д.). Есть также палата жандармерии по делам несовершеннолетних. В каждом департаменте есть суд присяжных (Cour d’assises). Кроме того, во Франции действуют судебные органы специального назначения: торговые суды и военные суды.<p>' +
        '<p>' +
        'Высшая судебная инстанция — кассационный суд (Cour de cassation), состоящий из социальной, торговой, трёх гражданских и уголовной палаты, суды апелляционной инстанции — апелляционные суды (Cour d’appel), состоящие из социальных, торговых, гражданских, исправительных палат, и апелляционные суды присяжных (Cour d’assises d’appel), суды первой инстанции уголовной юстиции — исправительные суды (Tribunal correctionnel) и суды присяжных (Cour d’appel), суды первой инстанции гражданской инстанции — суды великой инстанции (Tribunal de grande instance), низшее звено судебной системы уголовной юстиции — полицейские суды (Tribunal de police), низшее звено судебной системы гражданской юстиции — суды инстанции (Tribunal d’instance), низшее звено судебной системы торговой юстиции — торговые суды (Tribunal de commerce), низшее звено судебной системы социальной юстиции — совет по трудовым спорам (Conseil de prud’hommes), высшая судебная инстанция административной юстиции — государственный совет (Conseil d\'État), суды апелляционной инстанции административной юстиции — апелляционные административные суды (Cour administrative d’appel), суды первой инстанции административной юстиции — административные суды (Tribunal administratif). Высший контрольный орган — счётная палата (Cour des comptes), местные контрольные органы — областные счётные палаты (Chambre régionale des comptes), суд по делам импичмента президента — высший суд (Haute Cour), суд по делам импичмента министров — суд правосудия (Cour de justice).<p>' +
        '<p>' +
        'Прокуратура представлена прокурорами при судах разных уровней. Генеральный прокурор с заместителями находится при апелляционном суде. Прокуратура при кассационном суде включает в себя генерального прокурора, его первого заместителя и заместителей, которые подчинены министру юстиции.<p>' +
        '<p>' +
        'Образовательную подготовку судей осуществляет Национальная школа магистратуры (École nationale de la magistrature).<p>' +
        '<p>' +
        '<h3>Местное самоуправление</h3>' +
        'Система местных органов самоуправления во Франции строится в соответствии с административно-территориальным делением. Оно представлено коммунами, департаментами и регионами, где существуют выборные органы.<p>' +
        '<p>' +
        'Коммуна — наименьшая административно-территориальная единица. Во Франции насчитывается около 36 тыс. коммун, управляемых муниципальными советами, являющимися органами исполнительной власти. Совет же управляет делами коммуны, принимает решения по вопросам, затрагивающим интересы её граждан по всем социальным проблемам: распоряжается имуществом, создаёт необходимые социальные службы.<p>' +
        'Департаменты Франции является основной единицей административно-территориального деления Франции. Департаменты делятся на внутренние (96) и заморские департаменты. К ведению департаментского Совета относится принятие местного бюджета и контроль за его исполнением, организация департаментских служб, управление имуществом. Исполнительным органом департамента является председатель генерального совета.<p>' +
        'Регионы являются самой крупной единицей в административном делении страны. В каждом регионе учреждены экономические и социальные комитеты, и региональный комитет по займам. В регионе действует своя счётная палата. Региональный совет избирает своего председателя, который является исполнительной властью в регионе.<p>' +
        '<img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/3981ParigiArcDeTriomphe.JPG" width="300px" height="200px" vspace="8" hspace="8" align="right">' +
        '<h3>Политические партии</h3>' +
        '<h4>Правые</h4><p>' +
        '<ol>' +
        '<li>Национальный фронт (Front National, FN) — существующая с 1972 года ультраправая националистическая партия, апеллирующая к евроскептицизму и ксенофобии.</li><p>' +
        '<li>Национальное республиканское движение (Mouvement National Républicain) — откол 1999 года от Национального фронта.</li><p>' +
        '<li>Республиканцы — преобразованная в мае 2015 года партия Союз за народное движение. Основная консервативная партия, правопреемница голлистского «Объединения в поддержку республики».</li><p>' +
        '<li>Движение за Францию (Mouvement pour la France) — правоконсервативная голлистская партия.</li><p>' +
        '<li>Солидарная республика[en] (République solidaire) — правоцентристская голлистская партия.</li><p>' +
        '<li>«Вставай, республика[en]» — социал-консервативная голлистская партия, появившаяся в 2008 году.</li><p>' +
        '<li>Объединение за Францию и европейскую независимость (Rassemblement pour la France et l’Indépendance de l’Europe) — евроскептическая голлистская партия с 1999 года.</li><p>' +
        '<li>Охота, рыбалка, природа, традиции (Chasse, pêche, nature et traditions) — традиционалистская партия, основанная в 1989 году.</li><>' +
        '</ol>' +
        '<h4>Центристские</h4><p>' +
        '<ol>' +
        '<li>Демократическое движение (Mouvement démocrate, MoDem) — либеральная партия, созданная в 2009 году Франсуа Байру на основе Союза за французскую демократию.</li><p>' +
        '<li>Союз демократов и независимых ( Union des démocrates et indépendants) — центристская сила, основанная в 2012 году из девяти партий, сохранивших свою независимость, в их числе:<p>' +
        '<ul>' +
        '<li> — Радикальная партия — старейшая (с 1901 года) политическая партия Франции;<p>' +
        '<li> — Новый центр — социал-либеральная партия, созданная в 2007 году членами Союза за французскую демократию, не вошедшими в Демократическое движение;</li><p>' +
        '<li> — Современные левые — реформистская партия, созданная в 2007 году правыми членами Социалистической партии, поддержавшими Союз за народное движение.</li><p>' +
        '</ul></li>' +
        '</ol>' +
        '<h4>Левоцентристские</h4><p>' +
        '<ol>' +
        '<li>Радикальная левая партия (Parti radical de gauche) — леволиберальная партия, созданная в 1972 году левым крылом Радикальной партии.</li><p>' +
        '<li>Социалистическая партия (Parti Socialiste, PS) — основная социалистическая партия страны, основанная в 1969 году на базе Французской секции Рабочего интернационала.</li><p>' +
        '<li>Европа Экология Зелёные (Europe Écologie Les Verts, EELV) — экологистская партия левого толка, появившаяся в 2010 году в результате слияния партий «Европа Экология (фр.)русск.» и «Зелёных».</li>' +
        '</ol>' +
        '<h4>Левые</h4><p>' +
        '<ol>' +
        '<li>Левый фронт (Front de gauche, FG) — политическая коалиция коммунистических и демосоциалистических сил, образованная в 2008 году. В их числе:<p>' +
        '<ul>' +
        '<li> — Французская коммунистическая партия — одна из крупнейших компартий западного мира, учреждённая в 1920 году;</li><p>' +
        '<li> — Левая партия — левосоциалистическая партия, основанная в 2009 году бывшими членами Социалистической партии во главе с Жаном-Люком Меланшоном;</li><p>' +
        '<li> — Унитарные левые, «Конвергенция и альтернативы» и Антикапиталистические левые — фракции Революционной коммунистической лиги и Новой антикапиталистической партии.</li>' +
        '</ul></li>' +
        '<li>Новая антикапиталистическая партия (Nouveau parti anticapitaliste, NPA) — радикальная левая партия, учреждённая в 2009 году на основе самораспустившейся троцкистской Революционной коммунистической лиги (секции Воссоединённого Четвёртого интернационала).</li><p>' +
        '<li>Рабочая борьба (Lutte Ouvrière, LO) — троцкистская партия, история которой восходит к 1939 году, сконцентрированная на работе в рабочей среде.</li><p>' +
        '<li>Независимая рабочая партия (Parti ouvrier indépendant) — левая евроскептическая партия вокруг распущенной троцкистской Партии трудящихся.</li><p>' +
        '<li>Республиканское и гражданское движение (Mouvement républicain et citoyen) — левопопулистская евроскептическая партия, созданная в 1993 году бывшим членом Соцпартии Жаном-Пьером Шевенманом.</li><ol>' +
        '</ol>'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
