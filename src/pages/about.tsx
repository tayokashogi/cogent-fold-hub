import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Book, Music, Handshake, History as HistoryIcon } from 'lucide-react';
import worshipScene from '@/assets/worship-scene.jpg';

interface AboutProps {
  language: 'en' | 'yo';
}

const About = ({ language }: AboutProps) => {
  const translations = {
    en: {
      title: 'About Us',
      subtitle: 'Our Story, Mission & Vision',
      ourStory: 'Our Story',
      storyText:
        'Christ Apostolic Church (CAC) Alagomeji, Yaba—also known as CAC Oke-Ibukun—has served the Lagos community for decades, committed to spreading the Gospel of Jesus Christ and nurturing spiritual growth among members and neighbours.',
      chairman: 'Yaba DCC Chairman',
      chairmanName: 'Pastor S.E.A. Oludare',
      chairmanBio:
        'Pastor Oludare continues to lead with wisdom and compassion. His vision for a vibrant, Christ-centred church keeps CAC Yaba a beacon of hope and spiritual excellence.',
      mission: 'Our Mission',
      missionText:
        'To glorify God by making disciples of Jesus Christ, equipping believers for ministry, and serving our community with love and excellence.',
      vision: 'Our Vision',
      visionText:
        'To be a thriving, Christ-centred church that transforms lives, strengthens families, and impacts communities through the power of the Gospel.',
      values: 'Core Values',
      value1: 'Faith in God',
      value2: 'Biblical Excellence',
      value3: 'Community Service',
      value4: 'Spiritual Growth',
      departments: 'Church Departments',
      choir: 'Choir Ministry',
      choirDesc: 'Leading worship through music',
      ushers: 'Ushering Department',
      ushersDesc: 'Welcoming and guiding worshippers',
      prayer: 'Prayer Unit',
      prayerDesc: 'Intercession and spiritual warfare',
      youth: 'Youth Ministry',
      youthDesc: 'Empowering the next generation',
      women: 'Women Fellowship',
      womenDesc: 'Supporting and encouraging women',
      evangelism: 'Evangelism Team',
      evangelismDesc: 'Spreading the Gospel',

      // New: History section
      history: 'Church History',
      history_overview_title: 'Overview / Yorùbá Assembly',
      history_overview_p1:
        'Christ Apostolic Church Yaba is located at No. 13 Odewale Street, Alagomeji, Yaba, comprising the Yoruba Assembly, English Assembly, Teens’ Church, and Children’s Chapel.',
      history_overview_p2:
        'Founded in June 1940 as the Apostolic Church of Ebute-Metta, Yaba, services began at Late Pastor S.A. Soile’s residence (36 Moleye Street) and later moved to a school founded by Mrs. Akaje Macaulay (now Ladi-Lak School, Akinwunmi Street).',
      history_overview_p3:
        'On June 8, 1941 (first anniversary), Bro. S.A. Soile was ordained Pastor by Apostle J.A. Babalola, assisted by Pastors Oba I.B. Akinyele, A. Ade Hanson, J.S.B. Odusona, and D.O. Odubanjo, with Evangelist D.O. Babajide in attendance.',
      history_overview_p4:
        'As membership grew, a Management Committee was inaugurated. The first plot of land was purchased from Barrister Adekunle Wright; a shed was built, marking worship on church-owned premises. Rebuilding efforts toward a new edifice are ongoing.',

      history_english_title: 'English Assembly',
      history_english_p1:
        'Conceived in 1987 and inaugurated in October 1988 to serve educated youths and non-Yoruba speakers, led initially by Pastor S.O. Meroyi with Elder F.O. Akinkuade managing operations.',
      history_english_p2:
        'Before Evangelist (now Pastor) Rotimi Olusheye’s arrival in 1994 (nearly 10 years of service), Bro. John Edemevughe and others coordinated. Later, Pastor John Edemevughe served with Pastors Gbenga Adefarakan and Kunle Magbagbeola.',
      history_english_p3:
        'In April 2014, Pastor John was transferred to CAC Osogbo DCC HQ and succeeded by Pastor Peter O. Adams. The English work gained Assembly status with its first service on August 2, 2015, in the new auditorium.',

      history_teens_title: 'Teens’ Church',
      history_teens_p1:
        'Inaugurated in February 2008 to provide worship for ages 13–19 and to nurture future leaders morally and spiritually.',
      history_teens_p2:
        'Coordinated by Pastor S.O. Adefarakan with support from Pastor Kunle Magbagbeola, Pastor Seun Orenuga, Elder (Prof.) Sola Fejana (now Pastor), Sis. Radeke Akinrinmade, and Sis. Tolu Shoneye.',
      history_teens_p3:
        'As the chapel grew, the hall was expanded and Evangelist Segun Adediran was employed full-time, assisted by Bro. Mathew Shokunbi and Bro. Akinsola Samuel. Elder Femi Ajayi was appointed coordinator.',
    },
    yo: {
      title: 'Nípa Wa',
      subtitle: 'Ìtàn Wa, Iṣẹ́ Àpínfunni & Ìrán',
      ourStory: 'Ìtàn Wa',
      storyText:
        'Christ Apostolic Church (CAC) Alágomeji, Yaba—tí a tún mọ̀ sí CAC Òkè-Ibùkún—ti ṣèrànwọ́ fún àgbègbè Èkó fún ọ̀pọ̀ ọdún, pẹ̀lú ìfarapa mọ́ ìtànkálẹ̀ Ìhìnrere Jesu Kristi àti ìtọ́jú ìdàgbàsókè ẹ̀mí àwọn ọmọ ìjọ àti olùgbé.',
      chairman: 'Alùkọ́ Agbègbè Yaba DCC',
      chairmanName: 'Pásítọ̀ S.E.A. Olúdárẹ̀',
      chairmanBio:
        'Pásítọ̀ Olúdárẹ̀ ń darí ìjọ pẹ̀lú ọgbọ́n àti ìfẹ́. Ìrán rẹ̀ fún ìjọ tí ó dá lórí Kristi ń jẹ́ kí CAC Yaba tẹsíwájú gẹ́gẹ́ bí àmì ìrètí àti ìmúlò ẹ̀mí.',
      mission: 'Iṣẹ́ Àpínfunni Wa',
      missionText:
        'Láti bu ọlá fún Ọlọ́run nípa ṣíṣe àwọn ọmọ-ẹ̀yìn Jesu Kristi, kí a sì kọ́ àwọn onígbàgbọ́ sílẹ̀ fún iṣẹ́ ìránṣẹ́ àti ìsìn àwùjọ pẹ̀lú ìfẹ́ àti ìmúlò rere.',
      vision: 'Ìrán Wa',
      visionText:
        'Láti jẹ́ ìjọ tí ó ń gbilẹ̀, tí ó dá lórí Kristi, tí ó ń yí ìgbésí-ayé padà, tí ó ń mú ìdílé lagbara, tí ó sì ń ní ipa rere lórí àwùjọ nípasẹ̀ agbára Ìhìnrere.',
      values: 'Àwọn Iye Pátáki',
      value1: 'Ìgbàgbọ́ nínú Ọlọ́run',
      value2: 'Ìmúlò Bíbélì tó péye',
      value3: 'Ìsìn Àwùjọ',
      value4: 'Ìdàgbàsókè Ẹ̀mí',
      departments: 'Àwọn Ẹ̀ka Ìjọ',
      choir: 'Iṣẹ́ Kóírì',
      choirDesc: 'Ìdarí ìjọ́sìn nípasẹ̀ orin',
      ushers: 'Ẹ̀ka Àwọn Olùtọ́jú',
      ushersDesc: 'Ìkábọ̀ àti ìtọ́nisọ́nà àwọn ajọ́sìn',
      prayer: 'Ẹgbẹ́ Àdúrà',
      prayerDesc: 'Àárínbìnrin àti ogun ẹ̀mí',
      youth: 'Iṣẹ́ Ọ̀dọ́',
      youthDesc: 'Ìmúlórúkọ ìran tuntun',
      women: 'Ẹgbẹ́ Obìnrin',
      womenDesc: 'Ìtìlẹ́yìn àti ìgbéníyànjú fún obìnrin',
      evangelism: 'Ẹgbẹ́ Íwàásù',
      evangelismDesc: 'Ìtànkálẹ̀ Ìhìnrere',

      history: 'Ìtàn Ìjọ',
      history_overview_title: 'Àkótán / Àjọsọ Yorùbá',
      history_overview_p1:
        'CAC Yaba wà ní No. 13 Odewale Street, Alágomeji, Yaba, tí ó ní Àjọsọ Yorùbá, Àjọsọ Gẹ̀ẹ́sì, Ìjọ Ọdọ́, àti Ilé Ìjọ Ọmọ.',
      history_overview_p2:
        'A dá ìjọ sílẹ̀ ní Oṣù Karùn-ún 1940 gẹ́gẹ́ bí Apostolic Church of Ebute-Metta, Yaba; ìjọ́sìn bẹ̀rẹ̀ ní ilé Pásítọ̀ S.A. Soile (36 Moleye Street), lẹ́yìnna a lọ sí ilé-ẹ̀kọ́ Mrs. Akaje Macaulay (Ladi-Lak School, Akinwunmi Street).',
      history_overview_p3:
        'Ní Oṣù Karùn-ún 8, 1941, a yí ilẹ̀ kọ́kọ́ (first sod) sílẹ̀, a sì dì S.A. Soile mọ́lẹ̀ gẹ́gẹ́ bí Pásítọ̀ ní ọwọ́ Àpọ́sítélì J.A. Babalola pẹ̀lú ìrànlọ́wọ́ àwọn Pásítọ̀ míì.',
      history_overview_p4:
        'Bí ìjọ ṣe ń dàgbà, a dá ìgbìmọ̀ iṣakoso sílẹ̀. A ra ilẹ̀ àkọ́kọ́, a sì kọ̀ gbọ́ngàn kékeré; ìjọ́sìn bẹ̀rẹ̀ ní ilẹ̀ ìjọ títí di òní, ìgbìmọ̀ tún ń ṣiṣẹ́ lori amáyédẹrùn tuntun.',

      history_english_title: 'Àjọsọ Gẹ̀ẹ́sì',
      history_english_p1:
        'A gbé èrò rẹ̀ kalẹ̀ ní 1987, a sì bẹ̀rẹ̀ ní Oṣù Kẹ̀wá 1988 fún àwọn akẹ́kọ̀ọ́ àti àwọn tí kì í sọ Yorùbá; Pásítọ̀ S.O. Meroyi ni olórí pẹ̀lú Elder F.O. Akinkuade.',
      history_english_p2:
        'Kí Evangelist (ní báyìí Pásítọ̀) Rotimi Olusheye tó dé ní 1994 (ó ṣìṣẹ́ fẹrẹ̀ to ọdún mẹ́wàá), Bro. John Edemevughe àti ẹlòmíì ló ń darí.',
      history_english_p3:
        'Ní Oṣù Kẹrin 2014, Pásítọ̀ John lọ sí CAC Osogbo DCC HQ; Pásítọ̀ Peter O. Adams ni rọ́pò rẹ̀. A fún un ní ipo Àjọsọ ní Oṣù Kẹjọ 2, 2015 ní gbọ́ngàn tuntun.',

      history_teens_title: 'Ìjọ Ọdọ́',
      history_teens_p1:
        'A dá sílẹ̀ ní Oṣù Kejì 2008 fún ọjọ-ori 13–19, kí a lè kọ́ wọn ní ìwà rere àti ẹ̀mí.',
      history_teens_p2:
        'Olùdarí: Pásítọ̀ S.O. Adefarakan; àwọn olùrànlọ́wọ́: Pásítọ̀ Kunle Magbagbeola, Pásítọ̀ Seun Orenuga, Elder (Prof.) Sola Fejana (ní báyìí Pásítọ̀), Arábìnrin Radeke Akinrinmade, Arábìnrin Tolu Shoneye.',
      history_teens_p3:
        'Bí ìjọ Ọdọ́ ṣe ń pọ̀ sí i, a gbooro gbọ́ngàn, a sì bẹ̀rẹ̀ iṣẹ́ olùkọ́ni àkúnya: Evangelist Segun Adediran pẹ̀lú Bro. Mathew Shokunbi àti Bro. Akinsola Samuel; Elder Femi Ajayi di olùdarí.',
    },
  } as const;

  const t = translations[language];

  const departments = [
    { icon: Music, name: t.choir, desc: t.choirDesc, color: 'bg-primary' },
    { icon: Users, name: t.ushers, desc: t.ushersDesc, color: 'bg-secondary' },
    { icon: Heart, name: t.prayer, desc: t.prayerDesc, color: 'bg-accent' },
    { icon: Users, name: t.youth, desc: t.youthDesc, color: 'bg-primary' },
    { icon: Heart, name: t.women, desc: t.womenDesc, color: 'bg-secondary' },
    { icon: Handshake, name: t.evangelism, desc: t.evangelismDesc, color: 'bg-accent' },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Our Story Section */}
        <Card className="mb-8 overflow-hidden animate-fade-in-up">
          <div className="md:flex">
            <div
              className="md:w-1/3 h-64 md:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${worshipScene})` }}
            />
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl">{t.ourStory}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{t.storyText}</p>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Chairman Profile */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              {t.chairman}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t.chairmanName}</h3>
              <p className="text-foreground leading-relaxed">{t.chairmanBio}</p>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                {t.mission}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{t.missionText}</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-6 w-6 text-secondary" />
                {t.vision}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{t.visionText}</p>
            </CardContent>
          </Card>
        </div>

        {/* History Section */}
        <Card className="mb-8 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HistoryIcon className="h-6 w-6 text-primary" />
              {t.history}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Overview / Yoruba Assembly */}
            <section>
              <h3 className="text-xl font-semibold">{t.history_overview_title}</h3>
              <div className="mt-3 space-y-3 text-foreground leading-relaxed">
                <p>{t.history_overview_p1}</p>
                <p>{t.history_overview_p2}</p>
                <p>{t.history_overview_p3}</p>
                <p>{t.history_overview_p4}</p>
              </div>
            </section>

            {/* English Assembly */}
            <section>
              <h3 className="text-xl font-semibold">{t.history_english_title}</h3>
              <div className="mt-3 space-y-3 text-foreground leading-relaxed">
                <p>{t.history_english_p1}</p>
                <p>{t.history_english_p2}</p>
                <p>{t.history_english_p3}</p>
              </div>
            </section>

            {/* Teens’ Church */}
            <section>
              <h3 className="text-xl font-semibold">{t.history_teens_title}</h3>
              <div className="mt-3 space-y-3 text-foreground leading-relaxed">
                <p>{t.history_teens_p1}</p>
                <p>{t.history_teens_p2}</p>
                <p>{t.history_teens_p3}</p>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle>{t.values}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[t.value1, t.value2, t.value3, t.value4].map((value, index) => (
                <div
                  key={index}
                  className="p-4 bg-primary-light rounded-lg text-center border-2 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Departments */}
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>{t.departments}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors card-interactive"
                >
                  <div className={`${dept.color} text-white p-3 rounded-lg flex-shrink-0`}>
                    <dept.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{dept.name}</h4>
                    <p className="text-sm text-muted-foreground">{dept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
