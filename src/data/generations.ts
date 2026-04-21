import type { Generation } from './types'

export const GENERATIONS: Generation[] = [
  {
    id: 'silencieuse',
    name: 'Génération silencieuse',
    alias: 'Traditionnels',
    yearRange: [1928, 1945],
    emoji: '📻',
    color: 'from-amber-200 to-amber-400',
    tagline: 'Discrets, loyaux, marqués par les rationnements et la reconstruction.',
    bigPicture:
      'Les enfants de la Grande Dépression et de la Seconde Guerre mondiale. On leur a appris à se taire, à travailler dur, à respecter l’autorité. Aujourd’hui à la retraite (ou en perte d’autonomie), ils représentent la mémoire vivante d’un monde sans télévision, sans téléphone individuel, et où l’État providence se construisait à peine.',
    defining: [
      'Crise de 1929 et Seconde Guerre mondiale',
      'Construction des États providence',
      'Famille nucléaire et religion structurantes',
    ],
    regional: {
      'qc-ca': {
        contexteHistorique:
          'Au Québec, ils ont vécu la Grande Noirceur (gouvernement Duplessis, 1944-1959) avant la Révolution tranquille. L’Église catholique encadre l’école, la santé et la vie quotidienne jusqu’aux années 1960.',
        valeurs: ['Devoir', 'Loyauté', 'Discrétion', 'Respect de l’autorité', 'Économie'],
        travail:
          'Une seule entreprise sur toute une carrière est la norme. La hiérarchie ne se discute pas. On entre jeune sur le marché du travail (souvent avant 16 ans) et on prend sa retraite à 65 ans avec une pension d’employeur.',
        communication:
          'Communication formelle, par écrit (lettre, mémo) ou en personne. Le téléphone fixe est arrivé tard dans plusieurs foyers ruraux. On vouvoie facilement, on ne « dérange pas » sans raison.',
        argent:
          'Profondément marqués par la rareté : on épargne, on n’achète pas à crédit sauf pour la maison, on répare au lieu de remplacer. Beaucoup deviennent propriétaires grâce à l’explosion de la banlieue d’après-guerre.',
        tech:
          'Radio puis télévision (la TV arrive au Québec en 1952). Adoption tardive et souvent partielle d’Internet ; aujourd’hui, beaucoup utilisent une tablette pour FaceTime avec leurs petits-enfants.',
        famille:
          'Familles nombreuses (la « revanche des berceaux » au Québec : moyenne autour de 4 enfants jusqu’en 1960). Rôles très genrés : le père pourvoit, la mère élève. Divorce rare et stigmatisé.',
        politique:
          'Vote très constant, souvent libéral fédéral et union nationale puis libéral provincial. Forte loyauté institutionnelle : on respecte le médecin, le curé, l’élu.',
        sources: ['statcan_pop_estimates', 'isq_pyramide', 'mccrindle'],
      },
      'europe': {
        contexteHistorique:
          'Enfance pendant la guerre, jeunesse pendant les Trente Glorieuses (1945-1975). Reconstruction de l’Europe, plan Marshall, création de la CEE (1957).',
        valeurs: ['Discipline', 'Travail', 'Patriotisme', 'Solidarité familiale'],
        travail:
          'Plein-emploi pendant leur vie active. Carrière dans une seule entreprise courante. Syndicalisation forte, surtout dans l’industrie.',
        communication: 'Lettre, téléphone fixe, radio nationale. Codes formels marqués (vouvoiement systématique en France).',
        argent:
          'Génération de l’épargne sur livret. Accession massive à la propriété grâce aux politiques d’État. Méfiance envers le crédit à la consommation.',
        tech: 'Adoption progressive de la TV (années 50-60). Internet arrivé à la retraite — usage limité.',
        famille:
          'Baby-boom européen plus modéré qu’en Amérique du Nord. Famille nucléaire dominante, divorce rare jusque dans les années 1970.',
        politique:
          'Forte participation électorale. Mémoire vive du fascisme et de la guerre froide structure encore le vote.',
        sources: ['insee_generations', 'eurostat_youth', 'wvs'],
      },
      'asie': {
        contexteHistorique:
          'Au Japon : enfance sous le militarisme, adolescence sous l’occupation américaine, vie active pendant le « miracle économique ». En Chine : guerre civile, fondation de la RPC (1949), Grand Bond en avant (1958-1962). En Corée : guerre de Corée (1950-53) et reconstruction.',
        valeurs: ['Sacrifice', 'Honneur familial', 'Frugalité', 'Loyauté à l’employeur'],
        travail:
          'Au Japon, le « salaryman » à vie incarne cette génération. En Chine, agriculture collective puis ouverture progressive. Heures de travail extrêmement longues considérées comme normales.',
        communication: 'Très hiérarchique, formalisme strict (au Japon : keigo, le langage honorifique). On ne contredit pas un aîné en public.',
        argent:
          'Taux d’épargne parmi les plus élevés au monde (Japon, Corée). Méfiance envers la dette. Beaucoup ont connu la pauvreté absolue dans leur jeunesse.',
        tech: 'Tardive et limitée. Au Japon, télécopieur encore largement utilisé ; usage du smartphone très inférieur aux jeunes générations.',
        famille:
          'Famille élargie multigénérationnelle longtemps la norme. Piété filiale (孝, xiào) centrale. Aujourd’hui, isolement croissant des aînés au Japon (kodokushi, mort solitaire).',
        politique:
          'Loyauté envers le parti dominant (LDP au Japon, PCC en Chine). Mémoire de la guerre et de la reconstruction structure leur identité.',
        sources: ['pew_japan_aging', 'wvs', 'un_world_pop'],
      },
      'moyen-orient': {
        contexteHistorique:
          'Génération de la décolonisation (indépendances des années 1940-60), de la création d’Israël (1948), des nationalismes arabes (Nasser), puis des chocs pétroliers de 1973 qui transforment les économies du Golfe.',
        valeurs: ['Honneur familial', 'Religion', 'Hospitalité', 'Autorité du patriarche'],
        travail:
          'Souvent agriculteurs, commerçants ou fonctionnaires. Dans le Golfe, génération qui a vu la transition d’économies de subsistance à des pétro-États en une vie.',
        communication: 'Orale, communautaire, formelle envers les aînés. Médias d’État dominants pendant leur vie active.',
        argent:
          'Frugalité, importance de l’aumône (zakat). Système de soutien familial étendu remplace en partie l’assurance sociale.',
        tech: 'Adoption tardive ; aujourd’hui, beaucoup utilisent WhatsApp pour rester en lien avec la diaspora familiale.',
        famille:
          'Famille élargie, mariages souvent arrangés ou semi-arrangés. Plusieurs générations sous un même toit normales.',
        politique:
          'Mémoire vive des indépendances et des conflits régionaux. Loyauté tribale ou confessionnelle souvent plus forte que loyauté à l’État.',
        sources: ['arab_youth_survey', 'wvs'],
      },
    },
    sources: ['pew_genz_2019', 'mccrindle', 'statcan_pop_estimates'],
  },
  {
    id: 'boomers',
    name: 'Baby-boomers',
    alias: 'Boomers',
    yearRange: [1946, 1964],
    emoji: '☮️',
    color: 'from-orange-200 to-rose-300',
    tagline: 'Génération nombreuse qui a transformé la société — et qui occupe encore le pouvoir.',
    bigPicture:
      'Nés dans l’explosion démographique d’après-guerre, ils sont la génération la plus nombreuse de l’histoire occidentale. Adolescents, ils inventent la contre-culture (1968, Woodstock). Adultes, ils profitent du plein-emploi, de l’accès massif à la propriété et de carrières linéaires. Aujourd’hui à la retraite ou en fin de carrière, ils détiennent une part disproportionnée du patrimoine, ce qui crée des tensions intergénérationnelles bien documentées.',
    defining: [
      'Plein-emploi et croissance économique',
      'Contre-culture des années 60 (féminisme, droits civiques, écologie naissante)',
      'Accession massive à la propriété',
    ],
    regional: {
      'qc-ca': {
        contexteHistorique:
          'Coïncidence presque parfaite avec la Révolution tranquille (1960-66). Création du système de santé universel (1970), nationalisation d’Hydro-Québec, féminisation du marché du travail, déclin rapide de la pratique religieuse. Ils ont été acteurs et bénéficiaires de cette modernisation.',
        valeurs: ['Réalisation personnelle', 'Travail', 'Engagement', 'Propriété', 'Idéalisme (jeunes) → pragmatisme (adultes)'],
        travail:
          'Carrière souvent dans deux ou trois employeurs maximum. Forte présence syndicale dans le secteur public. Hiérarchie respectée mais discutable. Retraite à 60-65 ans avec régime à prestations déterminées (de plus en plus rare pour les suivants).',
        communication:
          'Téléphone, courriel à partir des années 1990. Préfèrent souvent un appel à un texto. Direct, parfois perçu comme « mansplaining » par les plus jeunes.',
        argent:
          'Génération qui a acheté ses maisons quand le prix moyen à Montréal était sous 100 000 $ (années 80-90). Patrimoine immobilier important. Épargne-retraite via REER, fonds de pension, plus-value immobilière. Tensions avec les jeunes sur la crise du logement.',
        tech:
          'Ont adopté Internet, courriel, Facebook. Smartphone pour rester en contact avec la famille. Vulnérables aux arnaques en ligne (Centre antifraude du Canada : surreprésentés dans les pertes financières par fraude amoureuse).',
        famille:
          'Première génération du divorce de masse au Québec (loi sur le divorce 1968). Famille recomposée fréquente. Souvent grands-parents très impliqués dans la garde des petits-enfants.',
        politique:
          'Génération du référendum (1980 : 24-34 ans ; 1995 : 39-49 ans). Vote constant, souvent décisif. Ont vu la fondation et la disparition de plusieurs partis (Bloc, ADQ, CAQ).',
        sources: ['statcan_milleniaux', 'isq_pyramide', 'cefrio_numerique'],
      },
      'europe': {
        contexteHistorique:
          'Trente Glorieuses, mai 1968, construction européenne, chute du mur de Berlin (1989). Génération qui a vu naître l’Union européenne (Maastricht, 1992) en milieu de carrière.',
        valeurs: ['Liberté individuelle', 'Égalité', 'Sécurité d’emploi', 'Vacances annuelles'],
        travail:
          'CDI à vie longtemps la norme. 35h en France (2000), congés payés étendus. Forte syndicalisation, héritière des luttes sociales.',
        communication: 'Mix entre formalisme (vouvoiement) et informalité progressive. Adoption précoce du courriel professionnel.',
        argent:
          'Propriétaires majoritaires. Patrimoine immobilier énorme (en France, les plus de 60 ans détiennent ~50 % du patrimoine privé selon l’INSEE).',
        tech: 'Adoption d’Internet à l’âge adulte. Smartphone généralisé. Présents sur Facebook plus que sur les réseaux récents.',
        famille:
          'Modèle familial diversifié : divorce courant, familles recomposées, baisse de la natalité. Première génération européenne à avoir massivement moins d’enfants que ses parents.',
        politique:
          'Forte participation électorale. Vote pivot dans la plupart des élections européennes. Mémoire de la guerre froide et du tournant néolibéral des années 80.',
        sources: ['insee_generations', 'eurostat_youth', 'oecd_youth'],
      },
      'asie': {
        contexteHistorique:
          'Au Japon : génération du « miracle économique » puis de la « décennie perdue » (années 1990) en milieu de carrière. En Chine : enfance pendant la Révolution culturelle (1966-76), vie active pendant l’ouverture économique de Deng Xiaoping. En Corée : passage de la dictature à la démocratie (1987).',
        valeurs: ['Réussite collective', 'Éducation', 'Loyauté', 'Ascension sociale'],
        travail:
          'Au Japon, dernière génération du « emploi à vie » (shūshin koyō). En Chine, génération qui a porté la croissance à deux chiffres. Heures de travail légendaires (« 996 » en Chine, karoshi au Japon).',
        communication: 'Formelle et hiérarchique. Adoption d’Internet à l’âge mûr.',
        argent:
          'Taux d’épargne très élevés. En Chine, la politique de l’enfant unique (1979-2015) a transformé leur planification : un seul enfant, donc concentration des ressources.',
        tech: 'Adoption tardive mais réelle. WeChat omniprésent en Chine pour cette génération aussi.',
        famille:
          'Politique de l’enfant unique en Chine : génération de parents avec un seul enfant. Au Japon, début du déclin démographique. Vieillissement accéléré.',
        politique:
          'En Chine, génération qui a vu Tiananmen (1989). Dans la plupart des pays, vote conservateur en fin de vie.',
        sources: ['pew_japan_aging', 'iresearch_china_genz', 'un_world_pop'],
      },
      'moyen-orient': {
        contexteHistorique:
          'Guerres israélo-arabes (1967, 1973), révolution iranienne (1979), guerre Iran-Irak (1980-88), montée de l’islamisme politique. Boom pétrolier qui transforme le Golfe.',
        valeurs: ['Religion', 'Famille élargie', 'Honneur', 'Réussite matérielle (urbains)'],
        travail:
          'Dans le Golfe : passage massif au secteur public et bénéfices de la rente pétrolière. Ailleurs : fonctionnariat ou travail informel. Fort taux d’émigration vers l’Europe et le Golfe.',
        communication: 'Communautaire, formelle, médias d’État. Télévision satellitaire (Al Jazeera fondée en 1996) transforme leur monde médiatique en milieu de vie.',
        argent: 'Soutien financier à la famille élargie attendu. Épargne souvent placée dans la pierre ou l’or.',
        tech: 'Adoption d’Internet et du satellite à l’âge adulte. WhatsApp central.',
        famille:
          'Famille élargie reste la norme. Patriarcat encore fort. Forte natalité comparée à l’Occident (taux de fécondité 4-7 enfants à leur génération).',
        politique:
          'Génération marquée par les régimes autoritaires. Forte loyauté tribale, religieuse ou nationaliste selon les pays.',
        sources: ['arab_youth_survey', 'wvs'],
      },
    },
    sources: ['pew_genz_2019', 'mccrindle', 'statcan_milleniaux'],
  },
  {
    id: 'x',
    name: 'Génération X',
    alias: 'Sandwich',
    yearRange: [1965, 1980],
    emoji: '📼',
    color: 'from-violet-200 to-indigo-300',
    tagline: 'La génération « entre deux » : analogique enfant, numérique adulte.',
    bigPicture:
      'Coincée entre les Boomers (très nombreux) et les Y (très visibles), la génération X est souvent oubliée. Pourtant, elle dirige la majorité des organisations aujourd’hui. Première génération de « clés autour du cou » (parents qui travaillent tous les deux), elle a appris à se débrouiller seule. Elle a basculé du Walkman à Spotify, du chèque papier à Apple Pay. Pragmatique, sceptique, indépendante.',
    defining: [
      'Enfance analogique, vie adulte numérique',
      'Premiers à avoir massivement deux parents qui travaillent',
      'Crise économique du début des années 1980 et 1990',
    ],
    regional: {
      'qc-ca': {
        contexteHistorique:
          'Enfance pendant la crise du pétrole (1973) et la crise des taux d’intérêt à 20 % (1981-82). Adolescence pendant le référendum de 1980, vie active pendant l’ALENA (1994), le référendum de 1995, et la révolution Internet.',
        valeurs: ['Autonomie', 'Pragmatisme', 'Équilibre vie/travail (popularisent le concept)', 'Scepticisme envers les institutions'],
        travail:
          'Première génération à connaître précarité, contrats à durée déterminée, fin progressive des régimes à prestations déterminées. Souvent en position de gestion intermédiaire aujourd’hui — coincés entre les exigences des Boomers seniors et les attentes des Y/Z.',
        communication:
          'À l’aise avec le courriel, le téléphone et le texto. Préfèrent souvent les messages courts. Génération du « si tu peux pas, tu fakes jusqu’à ce que tu peux ».',
        argent:
          'Acheteurs de propriété entre 1995 et 2008 — généralement à des prix encore accessibles. Épargne-retraite plus incertaine que les Boomers (REER vs. fonds de pension). Souvent « génération sandwich » : aident parents âgés ET enfants encore aux études.',
        tech:
          'Ont vécu la transition. Ils ont eu un premier ordinateur à la maison (Commodore, PC) à l’adolescence et un cellulaire à l’âge adulte. À l’aise avec les deux mondes.',
        famille:
          'Familles monoparentales en hausse. Maternité plus tardive (premier enfant souvent autour de 30 ans). Modèle « parent ami » émerge en réaction à l’éducation autoritaire reçue.',
        politique:
          'Vote moins constant que les Boomers. Désillusion politique marquée après les référendums. Ouverture aux nouveaux partis (ADQ, Québec solidaire, CAQ).',
        sources: ['statcan_milleniaux', 'isq_pyramide'],
      },
      'europe': {
        contexteHistorique:
          'Fin de la guerre froide à l’adolescence, chute du mur (1989), construction européenne. Crise économique des années 1990, montée du chômage de masse.',
        valeurs: ['Autonomie', 'Mobilité', 'Équilibre vie/travail', 'Scepticisme'],
        travail:
          'Première génération à connaître le chômage de masse et la précarité. CDD, intérim, stages prolongés deviennent normaux.',
        communication: 'Adoption précoce du téléphone portable (années 90) et du courriel.',
        argent: 'Accession à la propriété plus tardive. Endettement plus marqué que les Boomers.',
        tech: 'Génération de la transition numérique. Adopte Internet en début de carrière.',
        famille: 'Modèles familiaux diversifiés. Pacs en France (1999), unions civiles ailleurs. Parentalité plus tardive.',
        politique:
          'Premier décrochage électoral significatif. Montée des votes pour partis de protestation (Verts, populistes).',
        sources: ['insee_generations', 'eurostat_youth'],
      },
      'asie': {
        contexteHistorique:
          'Au Japon, « génération de l’ère glaciaire de l’emploi » (就職氷河期 shūshoku hyōgaki) : entrée sur le marché du travail en pleine décennie perdue. En Chine, génération de l’ouverture économique et de l’enfant unique. En Corée, crise asiatique de 1997 frappe leur entrée sur le marché.',
        valeurs: ['Adaptation', 'Éducation comme ascenseur', 'Pragmatisme'],
        travail:
          'Au Japon, beaucoup ont basculé en emploi non régulier (haken, contrats temporaires). En Chine, génération de la migration rurale-urbaine massive vers les usines.',
        communication: 'Téléphone portable adopté à 20-30 ans. SMS puis messageries.',
        argent: 'Taux d’épargne élevé. En Chine, ascension matérielle rapide pour les urbains.',
        tech: 'Adoption rapide à l’âge adulte. En Chine, génération du commerce électronique (Alibaba fondé en 1999).',
        famille: 'Mariage et parentalité plus tardifs. Au Japon, montée du célibat (parasaito shinguru, célibataires vivant chez leurs parents).',
        politique: 'Désengagement croissant au Japon. En Chine, génération formée par la propagande post-Tiananmen.',
        sources: ['pew_japan_aging', 'iresearch_china_genz', 'un_world_pop'],
      },
      'moyen-orient': {
        contexteHistorique:
          'Guerre du Golfe (1990-91), montée de l’islamisme politique, accords d’Oslo (1993). Génération qui a vu la chaîne Al Jazeera transformer l’information arabe.',
        valeurs: ['Famille', 'Religion', 'Stabilité', 'Éducation'],
        travail: 'Forte émigration vers le Golfe ou l’Europe. Au Liban, génération marquée par la guerre civile (1975-90).',
        communication: 'Téléphone portable adopté à 20-30 ans. Émergence de la télévision satellitaire pendant leur jeunesse.',
        argent: 'Soutien à la famille élargie attendu. Souvent envoi de remises depuis l’étranger.',
        tech: 'Adoption à l’âge adulte. Internet et satellite changent leur rapport au monde.',
        famille: 'Famille élargie encore dominante. Mariage généralement avant 30 ans.',
        politique: 'Génération qui portera les Printemps arabes (2010-11) à 30-45 ans.',
        sources: ['arab_youth_survey', 'wvs'],
      },
    },
    sources: ['pew_genz_2019', 'mccrindle'],
  },
  {
    id: 'y',
    name: 'Génération Y',
    alias: 'Millennials',
    yearRange: [1981, 1996],
    emoji: '📱',
    color: 'from-emerald-200 to-teal-300',
    tagline: 'Génération de la transition Internet — promise au monde, livrée à la précarité.',
    bigPicture:
      'On leur a dit qu’ils pouvaient « devenir ce qu’ils voulaient ». Ils sont arrivés sur le marché du travail pendant la crise de 2008, ont vu l’explosion du coût du logement, l’uberisation, le burn-out comme nouveau mal du siècle. Première génération vraiment numérique adulte (Facebook fondé quand les plus vieux ont 23 ans), ils sont aussi la génération du « quart-de-vie », du télétravail, et de la quête de sens au travail.',
    defining: [
      'Crise financière de 2008 en début de carrière',
      'Smartphone et réseaux sociaux à l’âge adulte',
      'Crise du logement et précarité de l’emploi',
    ],
    regional: {
      'qc-ca': {
        contexteHistorique:
          'Enfance dans une société québécoise pacifiée et prospère. Adolescence avec MSN, MySpace, premier iPhone (2007 : 11-26 ans). Diplômés en pleine crise de 2008. Vie active marquée par la crise du logement (Montréal : prix des condos x3 entre 2000 et 2024).',
        valeurs: ['Sens', 'Authenticité', 'Diversité', 'Équilibre vie/travail', 'Expériences > possessions'],
        travail:
          'Quête de sens centrale : 76 % des millennials canadiens disent que les valeurs de leur employeur comptent (Deloitte 2024). Mobilité plus élevée : changent d’emploi tous les 3-5 ans en moyenne. Pionniers du télétravail (avant et après pandémie).',
        communication:
          'Texto et messagerie (Messenger, WhatsApp) plus que l’appel. Email pour le travail. À l’aise avec emojis, GIFs. Préfèrent l’asynchrone — appeler sans prévenir est mal vu.',
        argent:
          'Première génération canadienne dont le revenu réel à 30 ans est inférieur à celui de leurs parents au même âge (Statistique Canada, 2022). Endettement étudiant marqué. Accession à la propriété tardive et difficile, surtout à Montréal/Toronto/Vancouver.',
        tech:
          'Digital natives partiels — ont connu le passage de la disquette au cloud. Adopteurs précoces des réseaux sociaux, du commerce en ligne, des applis bancaires.',
        famille:
          'Premier enfant en moyenne après 30 ans. Familles plus petites (1,3-1,5 enfant au Québec). Cohabitation longue avant mariage (ou sans mariage). Diversité des modèles familiaux pleinement acceptée.',
        politique:
          'Plus à gauche que les générations précédentes. Sensibles aux enjeux environnementaux et d’équité. Méfiance envers les partis traditionnels — ouverture à QS, Verts, etc.',
        sources: ['deloitte_genz_2024', 'statcan_milleniaux', 'cefrio_numerique'],
      },
      'europe': {
        contexteHistorique:
          'Adolescence pendant l’euphorie d’Internet. Diplômés en pleine crise de 2008-2012 (la « génération Erasmus » devient la « génération précaire »). Crise grecque, Brexit (2016), pandémie en début de trentaine.',
        valeurs: ['Sens', 'Mobilité européenne', 'Diversité', 'Climat'],
        travail:
          'Forte précarité, surtout en Europe du Sud (jeunesse italienne, espagnole, grecque). Émigration intra-européenne massive (Espagnols à Berlin, Grecs à Londres). Quête de sens marquée.',
        communication: 'Réseaux sociaux et messagerie dominants. Email pour le pro.',
        argent: 'Accession à la propriété très difficile dans les grandes villes (Paris, Londres, Berlin, Amsterdam). Locataires de longue durée.',
        tech: 'Digital natives partiels. Adopteurs précoces des plateformes.',
        famille: 'Parentalité tardive ou choix de ne pas avoir d’enfants en hausse. Mariage en déclin.',
        politique:
          'Vote pro-européen marqué (notamment Brexit : 73 % des 18-24 britanniques ont voté Remain). Climat = enjeu prioritaire.',
        sources: ['eurostat_youth', 'oecd_youth', 'deloitte_genz_2024'],
      },
      'asie': {
        contexteHistorique:
          'En Chine : génération de l’explosion économique et de l’ascension de la classe moyenne. Au Japon : génération « yutori » (éducation détendue) puis confrontée à la stagnation. En Corée : génération « N-po » qui « renonce à N choses » (mariage, enfants, propriété…).',
        valeurs: ['Réussite individuelle', 'Style de vie', 'Marques', 'Éducation'],
        travail:
          'Compétition féroce, surtout en Chine, Corée, Inde. Concept du « 996 » (9h-21h, 6 jours/sem) en Chine. Burnout massif. Au Japon, génération qui pousse le modèle d’emploi à vie à sa fin.',
        communication: 'Smartphone-natifs adultes. WeChat (Chine), LINE (Japon, Thaïlande), KakaoTalk (Corée).',
        argent: 'Consommation de luxe importante (les millennials chinois représentent une grande part du marché mondial du luxe). Mais accès au logement quasi-impossible dans les mégapoles.',
        tech: 'Très avancés. La Chine a sauté l’étape PC et adopté massivement le mobile-first. Paiement par QR code généralisé.',
        famille: 'En Chine, génération de l’enfant unique devenue adulte : pression énorme sur des épaules uniques pour s’occuper des parents. Au Japon, célibat record.',
        politique: 'En Chine, fierté nationale forte (génération « petits empereurs » devenue « petits roses » nationalistes en ligne).',
        sources: ['iresearch_china_genz', 'pew_japan_aging', 'wvs'],
      },
      'moyen-orient': {
        contexteHistorique:
          'Génération centrale des Printemps arabes (2010-11) : ils ont 15-30 ans quand ils descendent dans la rue, smartphone et Facebook en main. Génération aussi des contre-révolutions, de Daech, de la guerre en Syrie.',
        valeurs: ['Liberté individuelle', 'Religion (souvent réinterprétée)', 'Famille', 'Éducation'],
        travail:
          'Chômage des jeunes diplômés très élevé (souvent 25-40 % dans plusieurs pays MENA — record mondial selon l’OIT). Forte émigration et secteur informel.',
        communication: 'Smartphone à l’adolescence. Facebook puis Instagram, Snapchat (énorme dans le Golfe), TikTok.',
        argent: 'Difficulté d’accès au logement et au mariage (coût de la dot et de l’appartement). Beaucoup vivent chez leurs parents jusqu’à 30 ans.',
        tech: 'Adoption rapide. Le Golfe est parmi les régions les plus connectées au monde.',
        famille: 'Mariage de plus en plus tardif. Tabous (orientation, vie hors mariage) bougent en privé mais restent forts en public.',
        politique:
          'Génération qui a porté les Printemps arabes — beaucoup en sont sortis désillusionnés. Selon l’Arab Youth Survey, demande de réforme reste forte mais foi en la politique réduite.',
        sources: ['arab_youth_survey', 'edelman_trust', 'wvs'],
      },
    },
    sources: ['pew_genz_2019', 'deloitte_genz_2024', 'statcan_milleniaux'],
  },
  {
    id: 'z',
    name: 'Génération Z',
    alias: 'Zoomers',
    yearRange: [1997, 2012],
    emoji: '🎧',
    color: 'from-pink-200 to-fuchsia-300',
    tagline: 'Premiers vrais natifs du smartphone et des réseaux sociaux — anxieux et engagés.',
    bigPicture:
      'Ils n’ont pas connu le monde sans Internet. Le smartphone est arrivé dans leur enfance, les réseaux sociaux dans leur préadolescence. Ils ont vu l’élection de Trump à 4-19 ans, la pandémie en plein secondaire ou cégep, l’IA générative en début de vie active. Plus diversifiés, plus ouverts sur l’identité, plus anxieux que les générations précédentes (la santé mentale est leur préoccupation #1, selon Deloitte). Ils inventent de nouveaux codes de communication à toute vitesse.',
    defining: [
      'Premiers vrais natifs du smartphone (iPhone sorti en 2007)',
      'Pandémie pendant les années formatrices',
      'Crise climatique vécue comme existentielle',
      'Hausse documentée de l’anxiété et de la dépression chez les jeunes',
    ],
    regional: {
      'qc-ca': {
        contexteHistorique:
          'Entrée à l’école avec un iPad, secondaire pendant la pandémie (les plus jeunes ont fait la maternelle en Zoom). Loi 21 (2019), réforme scolaire, hausse documentée de la détresse psychologique chez les jeunes (ISQ : 33 % des 15-24 ans rapportent un trouble anxieux ou dépressif).',
        valeurs: ['Authenticité', 'Diversité', 'Santé mentale', 'Justice sociale', 'Climat'],
        travail:
          'Veulent du sens, de la flexibilité, et un patron qui ne fait pas semblant. 86 % des Z canadiens disent que la santé mentale au travail est essentielle (Deloitte 2024). Économie de petits boulots (Uber, livraison, créateurs de contenu) plus naturelle que pour les générations précédentes.',
        communication:
          'Snapchat, Instagram DMs, TikTok, Discord. Évitent les appels téléphoniques (« phone anxiety »). Codes très rapides : un emoji mal placé = conflit générationnel. Préfèrent le vocal asynchrone à l’appel synchrone.',
        argent:
          'Très conscients du coût de la vie. Investisseurs précoces (Wealthsimple, crypto, fractions d’actions). Mais accès à la propriété perçu comme quasi-impossible — beaucoup envisagent la cohabitation longue ou la location à vie.',
        tech:
          'Natifs du mobile, du cloud, de l’IA générative (qu’ils utilisent quotidiennement à l’école et au travail). À l’aise pour passer entre 5 applis pour une seule conversation.',
        famille:
          'Ouverts sur la diversité familiale, l’identité de genre, l’orientation sexuelle. Première génération où une part significative s’identifie en dehors du binaire (Statistique Canada 2021 : 1 personne sur 300 au-dessus de 15 ans est non-binaire ou trans, concentrée chez les Z).',
        politique:
          'Engagement marqué sur le climat (manifestations 2019), Black Lives Matter, droits LGBTQ+. Mais désillusion envers les partis traditionnels. Vote moins constant que les Boomers.',
        sources: ['deloitte_genz_2024', 'pew_genz_tech_2022', 'twenge_igen', 'cefrio_numerique'],
      },
      'europe': {
        contexteHistorique:
          'Enfance pendant la crise grecque, adolescence pendant la crise migratoire (2015), Brexit, pandémie. Climat, guerre en Ukraine (2022) en pleine adolescence pour les plus jeunes.',
        valeurs: ['Climat', 'Diversité', 'Santé mentale', 'Liberté'],
        travail:
          'Précarité élevée chez les jeunes (Italie, Espagne, France). Mobilité européenne mais ralentie post-Brexit. Quête de flexibilité et de sens.',
        communication: 'TikTok, Instagram, Snapchat, BeReal. WhatsApp universel.',
        argent: 'Logement = obstacle #1. Vivent chez leurs parents plus longtemps qu’en Amérique du Nord.',
        tech: 'Très avancés. Régulation européenne (RGPD, DSA) façonne leur rapport aux plateformes différemment des Américains.',
        famille: 'Diversité familiale acceptée. Parentalité repoussée ou refusée.',
        politique:
          'Manifestations climat (Greta Thunberg suédoise, Z elle-même). Vote vert et populiste de gauche surreprésenté.',
        sources: ['eurostat_youth', 'deloitte_genz_2024'],
      },
      'asie': {
        contexteHistorique:
          'En Chine : génération qui n’a connu que la Chine puissance mondiale. Au Japon : génération « Reiwa » (nouvelle ère, 2019). En Corée : génération « MZ » regroupée avec les millennials, marquée par la K-pop, le K-drama, la pression scolaire extrême.',
        valeurs: ['Style de vie', 'Réussite', 'Identité culturelle', 'Stabilité'],
        travail:
          'En Chine, mouvement « tang ping » (allongé) et « bai lan » (pourrir) en réaction à la culture du 996 — refus de la compétition extrême. En Corée, taux de suicide chez les jeunes parmi les plus élevés au monde.',
        communication: 'Douyin/TikTok, WeChat, Xiaohongshu (Chine). LINE (Japon). KakaoTalk (Corée). Très visuel.',
        argent: 'Génération du e-commerce et du livestream shopping. Mais difficulté énorme d’accession au logement à Pékin, Shanghai, Tokyo, Séoul.',
        tech: 'Probablement les plus avancés au monde sur le mobile-first, le paiement sans contact, l’IA appliquée.',
        famille: 'Refus croissant du mariage et de la parentalité (Corée : taux de fécondité 0,72 en 2023, le plus bas au monde).',
        politique:
          'En Chine, génération souvent décrite comme nationaliste en ligne mais désengagée politiquement hors ligne. Au Japon et en Corée, désengagement marqué.',
        sources: ['iresearch_china_genz', 'un_world_pop', 'wvs'],
      },
      'moyen-orient': {
        contexteHistorique:
          'Enfance pendant les Printemps arabes et leurs suites. Pandémie, guerre à Gaza (2023-), pression économique. Conservatisme religieux qui se transforme — réformes saoudiennes (Vision 2030), maintien de la rigueur ailleurs.',
        valeurs: ['Religion (réinterprétée)', 'Famille', 'Liberté individuelle', 'Réussite'],
        travail:
          'Chômage des jeunes diplômés au plus haut. Boom de l’entrepreneuriat numérique dans le Golfe, soutenu par les fonds souverains.',
        communication:
          'TikTok, Snapchat (très fort dans le Golfe — taux de pénétration record), Instagram. Selon Arab Youth Survey 2024, ils s’informent d’abord par les réseaux sociaux.',
        argent: 'Cryptomonnaies populaires. Difficultés d’accès au mariage et au logement, sauf dans les pays du Golfe.',
        tech: 'Très connectés. Les Émirats et l’Arabie saoudite investissent massivement dans l’IA et la transformation numérique.',
        famille:
          'Mariage tardif ou refusé en hausse. Selon l’Arab Youth Survey, 60 % des jeunes urbains disent vouloir choisir leur partenaire sans intervention familiale.',
        politique:
          'Selon Arab Youth Survey 2024 : la première préoccupation est le coût de la vie, devant les conflits régionaux. Sentiment d’avoir été trahis par les Printemps arabes.',
        sources: ['arab_youth_survey', 'edelman_trust', 'deloitte_genz_2024'],
      },
    },
    sources: ['pew_genz_2019', 'pew_genz_tech_2022', 'twenge_igen', 'deloitte_genz_2024'],
  },
  {
    id: 'alpha',
    name: 'Génération Alpha',
    yearRange: [2013, 2024],
    emoji: '🤖',
    color: 'from-sky-200 to-cyan-300',
    tagline: 'Première génération à grandir avec l’IA générative — encore en construction.',
    bigPicture:
      'Définie par McCrindle qui a popularisé le terme. Premiers à n’avoir jamais connu un monde sans tablette, sans Spotify, sans Netflix. Beaucoup d’entre eux ont fait leur entrée à la garderie ou à l’école pendant la pandémie. L’IA générative (ChatGPT lancé fin 2022) sera pour eux ce que Google a été pour les Y. Trop jeunes pour qu’on en sache beaucoup — toute généralisation à leur sujet est spéculative.',
    defining: [
      'Tablettes et streaming dès la petite enfance',
      'Pandémie pendant la petite enfance ou la maternelle',
      'IA générative dès l’école primaire',
      'Climat comme arrière-plan permanent',
    ],
    regional: {
      'qc-ca': {
        contexteHistorique:
          'Garderies fermées pendant la pandémie pour les plus vieux. Réforme du programme scolaire en cours. Crise du logement comme paysage familial.',
        valeurs: ['Encore en formation', 'Influence parentale Y/X dominante', 'Diversité comme évidence'],
        travail:
          'Pas encore sur le marché. Leurs premiers emplois (vers 2030-2040) seront probablement très différents — automatisation, IA, économie du soin et de la transition climatique.',
        communication: 'YouTube Kids, TikTok dès très jeunes. Assistants vocaux (Alexa, Siri) comme interface naturelle.',
        argent: 'Argent de poche numérique (cartes prépayées, applis). Aucune notion du chèque ou de l’argent comptant.',
        tech: 'iPad-natifs. ChatGPT à l’école primaire. Réalité augmentée et IA seront intuitives.',
        famille: 'Parents Y et X tardifs. Familles plus petites. Grands-parents Boomers très impliqués.',
        politique: 'Trop jeunes pour voter, mais déjà sensibilisés au climat et à la diversité par leurs parents.',
        sources: ['mccrindle', 'cefrio_numerique', 'deloitte_genz_2024'],
      },
      'europe': {
        contexteHistorique: 'Pandémie, guerre en Ukraine, crise énergétique, IA. Régulation européenne qui encadre leur rapport aux écrans (DSA, lois sur les enfants en ligne).',
        valeurs: ['En formation', 'Influence parentale', 'Climat comme contexte permanent'],
        travail: 'Pas encore sur le marché.',
        communication: 'Tablettes, YouTube Kids, jeux en ligne (Roblox, Minecraft). Règles parentales souvent strictes.',
        argent: 'Cartes prépayées pour enfants en hausse.',
        tech: 'Natifs de l’IA. Adoption précoce des assistants vocaux.',
        famille: 'Parents Y de plus en plus âgés à la naissance. Familles très petites.',
        politique: 'Sensibilisés tôt par les parents et l’école.',
        sources: ['mccrindle', 'eurostat_youth'],
      },
      'asie': {
        contexteHistorique:
          'En Chine : génération née pendant la fin de la politique de l’enfant unique. En Corée : génération qui pourrait voir la population s’effondrer (taux de fécondité 0,72). Au Japon : continuation du déclin démographique. En Inde : génération immense, dans un pays qui est devenu le plus peuplé du monde (2023).',
        valeurs: ['En formation'],
        travail: 'Pas encore sur le marché.',
        communication: 'Très jeunes utilisateurs de Douyin (TikTok chinois), avec restrictions étatiques (40 min/jour pour les moins de 14 ans en Chine).',
        argent: 'Pocket-money via applis (Alipay, WeChat Pay).',
        tech: 'Probablement la génération la plus avancée techniquement au monde dès la petite enfance.',
        famille:
          'En Chine : politique des trois enfants depuis 2021, mais très peu de réponse. Les enfants restent rares et concentrés en attention.',
        politique: 'Trop jeunes.',
        sources: ['mccrindle', 'un_world_pop'],
      },
      'moyen-orient': {
        contexteHistorique: 'Génération qui grandit dans des pays où la moitié de la population a moins de 25 ans (Égypte, Iran, Maroc). Au Liban, pendant l’effondrement économique. Dans le Golfe, sous des projets futuristes (NEOM, etc.).',
        valeurs: ['En formation'],
        travail: 'Pas encore sur le marché. Marchés du travail très tendus à venir vu la démographie.',
        communication: 'YouTube Kids, TikTok, jeux mobiles dès très jeunes.',
        argent: 'Inégalités énormes entre Golfe et reste de la région.',
        tech: 'Adoption très précoce.',
        famille: 'Familles encore plus grandes qu’ailleurs (taux de fécondité 2,5-4 selon les pays).',
        politique: 'Trop jeunes.',
        sources: ['mccrindle', 'arab_youth_survey', 'un_world_pop'],
      },
    },
    sources: ['mccrindle', 'un_world_pop'],
  },
]
