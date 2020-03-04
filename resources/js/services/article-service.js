app.factory('ArticlesService', ['$http', '$filter',
  function($http, $filter) {
    const ARTICLE_NUM = 3;

    var articles = [{
      id: 31,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/fb2.jpg',
      image: 'resources/img/article/fb2.jpg',
      title: "社区支持对弱势群体的成长至关重要？（下半场）",
      joined: 'Mediacorp Capital 958 城市频道 (facebook) (Online), 23 June 2019',
      url: 'https://www.facebook.com/capital958/videos/1387595774736521/',
      content:
      `
        [958午临大会] 社区支持对弱势群体的成长至关重要？（下半场）嘉宾：吕春兰 徐屹锐 ...
      `,
      detail: []
    }, {
      id: 30,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/fb1.jpg',
      image: 'resources/img/article/fb1.jpg',
      title: "社区支持对特别需求群体的成长至关重要？",
      joined: 'Mediacorp Capital 958 城市频道 (facebook) (Online), 23 June 2019',
      url: 'https://www.facebook.com/capital958/videos/383610595611732',
      content:
      `
        [958午临大会] 社区支持对特别需求群体的成长至关重要？嘉宾：吕春兰（妈妈）徐屹锐（儿子）...
      `,
      detail: []
    }, {
      id: 29,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/millennialsofsg.jpg',
      image: 'resources/img/article/millennialsofsg.jpg',
      title: "MEET THE MILLENNIAL“I’ve Had To Learn How To Let Go” – A Millennial Social Worker On Her Job",
      joined: 'MILLENNIALSOFSG (Online), 29 May 2019',
      url: 'https://millennialsofsg.com/2019/05/29/learn-let-go-millennial-social-worker-job/',
      content:
      `
        Once, she served a case where violence was prevalent at home, and where the child bore the brunt of the violence. Despite the family having already gotten official protections under relevant laws in Singapore, the mother had continued to keep her husband around by choice, and out of fear that things would escalate if otherwise ...
      `,
      detail: []
    }, {
      id: 28,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/straitstimes.jpg',
      image: 'resources/img/article/straitstimes.jpg',
      title: "Running with a special 'buddy'",
      joined: 'The Straits Times (Online), 22 July 2019',
      url: 'https://www.straitstimes.com/lifestyle/running-with-a-special-buddy?&utm_source=facebook&utm_medium=social-media&utm_campaign=addtoany',
      content:
      `
        WHAT IS YOUR SECRET TO LOOKING FABULOUS?
        Looking fabulous comes from the inside. It's about how we go through life and how we impact people. I am happy with my life and I am lucky to be healthy and to have a great family and friends. This might show on the outside or, at least, I hope it does ...
      `,
      detail: []
    }, {
      id: 27,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/jeremy.png',
      image: 'resources/img/member/jeremy.png',
      title: 'Jeremy Koh',
      joined: '-',
      name: 'Jeremy',
      content:
      `
        Jeremy Koh is a disabled graduate from Cerebral Palsy Alliance Singapore – formerly known as Spastic Children Association (1987-1997).
        Jeremy is also an active member, a volunteer & an Inclusion Ambassador in Disabled People Association and YouthCorps Singapore serving
        in Special Needs...
      `,
      detail: []
    }, {
      id: 25,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/liveyourdream.jpg',
      image: 'resources/img/article/liveyourdream.jpg',
      title: '《完成一个梦》第1集：即使看不见 我也能飞翔',
      joined: 'Lianhe Zaobao (zbNOW) (Online), 6 January 2017',
      url: 'http://www.zaobao.com.sg/zvideos/live-your-dream/story20170601-767037',
      content:
      `
        “完成一个梦”是早报数码部最新的网络节目。我们希望通过不同人的梦想，看见人们的坚持和信念
        更希望能够借着团队的一点力量，来帮助这些人完成他们的梦想。这个圆梦的过程中，
        你或许就能够跟我们一起感受到，梦想或大或小，都有存在的意义和价值。...
      `,
      detail: []
    }, {
      id: 26,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/sherunssootherscan.jpg',
      image: 'resources/img/article/sherunssootherscan.jpg',
      title: 'She runs so others can',
      joined: 'Medium (Online), 7 February 2017',
      url: 'https://medium.com/make-a-difference/she-runs-so-others-can-d1cd51e50380',
      content:
      `
        Meet Liz Koh: Human resource professional by day, running guide for the blind by night.
        A kind gesture, no matter how small, can bring about an impact we least expect.
        In this ongoing series, we comb through the office in search of colleagues who are making a
        difference to the lives of others — through the way they live theirs.
      `,
      detail: []
    }, {
      id: 27,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/lynnyap.jpg',
      image: 'resources/img/article/lynnyap.jpg',
      title: 'Lynn Yap Runs to Make a Difference',
      joined: 'Runmagazine (Online), 20 April 2017',
      url: 'https://www.runmagazine.asia/lynn-yap-runs-to-make-a-difference/',
      content:
      `
        53-year-old Lynn Yap is a volunteer with Runninghour, a club that uses sports and running as a way to integrate
        special needs people with the general public. An avid runner herself,
        she is tells us why she finds satisfaction in combining her healthy lifestyle and volunteer work.
      `,
      detail: []
    }, {
      id: 16,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/pong.jpg',
      image: 'resources/img/member/pong.jpg',
      title: 'David Pong',
      joined: 'February 2014',
      name: 'David',
      content:
      `
        I was looking for an activity that I can volunteer in and I chanced upon Runninghour during that time.
        I decided to join because it is associated with running and running is one of my biggest passions.
        I thought if I can do something that I enjoy and also help the special needs runners at the same time - it
        will be an ideal volunteer activity for me. In additional, I understand that...
      `,
      detail: []
    }, {
      id: 17,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/susay.jpg',
      image: 'resources/img/member/susay.jpg',
      title: 'Geraldine Susay',
      joined: 'April 2014',
      name: 'Geraldine',
      content:
      `
        I found out about Runninghour from my colleague Jennifer Quan. She realized that I was running a lot on my own.
        She shared about RH, its cause and objectives and I agreed to attend.  She didn’t share much and all she said was that
        it was to help the intellectually challenged and visually challenged runners to run. Since I always run alone,
        she felt perhaps this is something I may want to consider doing...
      `,
      detail: []
    }, {
      id: 20,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/tnp2.jpg',
      image: 'resources/img/article/tnp2.jpg',
      title: `He's in it for the long run`,
      joined: 'The New Paper (Online), 6 March 2017',
      url: 'http://www.tnp.sg/news/singapore/hes-it-long-run',
      content:
      `
        Mr Jakob Bader, 55, spent most of his life as a pastry chef back home in Basel, Switzerland.
        But the retiree now volunteers in Singapore as a running guide for the visually-,
        physically- and intellectually-disabled with local sports cooperative, Runninghour...
      `,
      detail: []
    }, {
      id: 21,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/hero_among_us.jpg',
      image: 'resources/img/article/hero_among_us.jpg',
      title: 'Heroes Among Us: Passion to keep on running despite failing vision',
      joined: 'The Straits Times (Online), 5 March 2017',
      url: 'http://www.straitstimes.com/singapore/heroes-among-us-passion-to-keep-on-running-despite-failing-vision',
      content:
      `
        Patricia Poo, 23, is completely blind in her right eye with partial sight in her left. Despite her poor vision,
        she continues to pursue her passion for running...
      `,
      detail: []
    }, {
      id: 18,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/mskoh.jpg',
      image: 'resources/img/article/mskoh.jpg',
      title: 'Swimming coach with a big heart',
      joined: 'The Straits Times (Online), 21 February 2017',
      url: 'http://www.straitstimes.com/singapore/health/swimming-coach-with-a-big-heart',
      content:
      `
        As a Runninghour volunteer, she runs with people with disabilities...
      `,
      detail: []
    }, {
      id: 19,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/tnp.jpg',
      image: 'resources/img/article/tnp.jpg',
      title: 'Running towards a more inclusive Singapore',
      joined: 'The New Paper (Online), 13 February 2017',
      url: 'http://www.tnp.sg/news/singapore/running-towards-more-inclusive-singapore',
      content:
      `
        In 2008, Mr John See Toh, 56, was working on a project for his master's degree in special education at the National
        Institute of Education (NIE) when he realised a gap in society for the intellectually disabled...
      `,
      detail: []
    }, {
      id: 22,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/zaobao.jpg',
      image: 'resources/img/article/zaobao.jpg',
      title: '为残疾人士当陪跑员 跑步伴侣 情始足下',
      joined: 'Lianhe Zaobao (zbNOW) (Online), 13 February 2017',
      url: 'http://www.zaobao.com.sg/news/fukan/family/story20170213-724076',
      content:
      `
        对陈桂鸿和许晓丽这对情侣来说，跑步让他们结缘，而帮助弱势群体让他们的人生有了更美丽的诠释。
        他们所参加的Runninghour俱乐部是本地唯一可让视障、智障或残疾人士跟正常者一起跑步的活动，旨在让有特别需要的群体...
      `,
      detail: []
    }, {
      id: 23,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/jingping.jpg',
      image: 'resources/img/member/jingping.jpg',
      title: 'Ong Jing Ping',
      joined: 'November 2015 ',
      name: 'Ong Jing Ping',
      content:
      `
        I got to know about Runninghour through a Channel8 TV program, Tuesday Report in 2015. After watching the program, I read up further about the group online and was motivated by the wonderful cause done by the volunteers, hence decided to join the...
      `,
      detail: []
    }, {
      id: 24,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/chaiguan.jpg',
      image: 'resources/img/member/chaiguan.jpg',
      title: 'Quay Chai Guan',
      joined: 'March 2014',
      name: 'Quay Chai Guan',
      content:
      `
        I was running during one of my business trip in Japan and I saw this group of people running in a pair at one of the parks. I noticed one of them was guiding the other runner who was visually challenged; I followed them for a while and was touched by the dedication and commitment...
      `,
      detail: []
    }, {
      id: 1,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/casey.jpg',
      image: 'resources/img/member/casey.jpg',
      title: 'Cassey Chia and Gwendoline Chow',
      joined: 'January 2015',
      name: 'Cassey',
      content:
      `
        It is very interesting how I found Runninghour....
        I first chanced upon Runninghour via a documentary on T.V a few years ago where I saw a lady running
        -beside a blind runner with a shoelace in a Triathlon.
        My comment then was "Wow! This is very good and wonderful to have someone guiding beside a blind person."...
      `,
      detail: []
    }, {
      id: 2,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/tan.jpg',
      image: 'resources/img/member/tan.jpg',
      title: 'Charmaine Tan Xing En',
      joined: 'January 2016',
      name: 'Charmaine',
      content:
      `
        During a seminar conducted by Dr. Wong Meng Ee, a fellow Visually Impaired (VI) mentioned Runninghour (RH)
        in passing and it immediately caught my ears. The very next day I called up Singapore Association of
        Visually Handicapped (SAVH) to enquire about RH and was thus linked up with one of the committee members...
      `,
      detail: []
    }, {
      id: 3,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/eddison.jpg',
      image: 'resources/img/member/eddison.jpg',
      title: 'Daniel and Eddison Tan',
      joined: 'September 2015',
      name: 'Daniel',
      content:
      `
        I found out from Mr. John See Toh*, the founder of Runninghour, when my wife and I attended our son,
        Eddison's Kota Tinggi pre-camp briefing session at Metta School in September 2015. (*John is a teacher at Metta School)
        We decided to join Runninghour as we believe running can build determination and confidence which in turn brings health
        and happiness (endorphins effect)...
      `,
      detail: []
    }, {
      id: 4,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/joan.jpg',
      image: 'resources/img/member/joan.jpg',
      title: 'Joan Bowen Crew - Joan Khong, Karen Maricar, Tan Wee Yong and Chua Soon Hock',
      joined: 'August 2015',
      name: 'Joan Bowen Crew',
      content:
      `
        Some of the Runninghour members were teachers and customers of our café - Joan Bowen Café
        was set up for special needs youths. The Runninghour members encouraged us to join.
        We are glad we did because the Runninghour group encourages participation from people with disabilities and
        we have witnessed this each week we are there...
      `,
      detail: []
    }, {
      id: 5,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/clancie.jpg',
      image: 'resources/img/member/clancie.jpg',
      title: 'Clancie Ng',
      joined: 'December 2015',
      name: 'Clancie',
      content:
      `
        Sometime in December 2015, a friend who has the same interest as me (i.e. running) sent me the link to Runninghour
        (RH)’s Facebook page and told me she saw a Channel 8 TV program, Tuesday Report’s feature story on RH and she was
        interested in joining. She asked if I was interested as well, all for a good cause, and I said “Yes” (almost immediately!)...
      `,
      detail: []
    }, {
      id: 6,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/jeffrey.jpg',
      image: 'resources/img/member/jeffrey.jpg',
      title: 'Jeffrey Leow',
      joined: 'December 2015',
      name: 'Jeffrey',
      content:
      `
        Prior to joining Runninghour, I didn’t know that a running group such as this exists in Singapore.
        It was a usual weekday evening for me; out jogging alone at the seaside. When I reached home,
        my wife told me about a TV program that had just ended. It was Tuesday Report Channel 8: Flavors of Life –
        the program featured a group called Runninghour. She briefly explained what the group does and encouraged me to check
        it out on the internet...
      `,
      detail: []
    }, {
      id: 7,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/marc.jpg',
      image: 'resources/img/member/marc.jpg',
      title: 'Marc Chiang Chia Ling',
      joined: 'April 2015',
      name: 'Marc',
      content:
      `
        I found out through my sister, Julie Chiang*, who was helping out with some PR work for the Runninghour2015
        event that happened on March 2015. (*Julie is a Director with Asia PR Werkz who has committed to supporting Runninghour2016
        as part of their agency’s corporate social responsibility program.)...
      `,
      detail: []
    }, {
      id: 8,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/siew.jpg',
      image: 'resources/img/member/siew.jpg',
      title: 'Tan Siew Ling',
      joined: 'January 2013',
      name: 'Siew Ling',
      content:
      `
        In December 2012, Runninghour members Wai Yee and Ivni invited me to run with the group, and much to their disbelief,
        I told them I would join in the January the following year. My first run with the group was at Buona Vista for a trial
        before the Green Corridor Run later that month. I was paired with Royce for my first run with a shoelace for Royce to guide
        me with...
      `,
      detail: []
    }, {
      id: 9,
      type: 'featuredMembers',
      imageThumb: 'resources/img/member/thumb/dennis.jpg',
      image: 'resources/img/member/dennis.jpg',
      title: 'Dennis Sim',
      joined: 'January 2013',
      name: 'Dennis',
      content:
      `
        my first running experience took place in early 2013 at a running session held at toa payoh stadium.
        It was my very first time running since i lost my sight and i was paired with an experienced running guide for the session.
        It was scary at first so i was running at a slow pace as i was worried that i would bump into someone else.
        My guide was assuring and constantly spoke to me as we ran so my confidence built up from there...
      `,
      detail: []
    }, {
      id: 10,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/blind.jpg',
      image: 'resources/img/article/blind.jpg',
      title: 'Blind, but far from left behind',
      joined: 'The New Paper (online). 19 September 2016',
      url: 'http://www.tnp.sg/news/singapore-news/blind-far-left-behind',
      content:
      `
        Visually impaired runner has completed 21 races, including one with 20 obstacles...
      `
    }, {
      id: 11,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/patricia.jpg',
      image: 'resources/img/article/patricia.jpg',
      title: 'When Patricia met Grace, her running mate',
      joined: 'The Straits Times, 11 July 2016',
      url: 'http://www.straitstimes.com/singapore/when-patricia-met-grace-her-running-mate',
      content:
      `
        Culture, Community and Youth Minister guides visually impaired participant in Runninghour 2016 race...
      `
    }, {
      id: 12,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/stopping.jpg',
      image: 'resources/img/article/stopping.jpg',
      title: 'No Stopping this visually impaired runner',
      joined: 'Fit To Post Sports, 9 July 2016',
      url: 'https://sg.sports.yahoo.com/blogs/fit-to-post-sports/no-stopping-this-visually-impaired-runner-024448949.html',
      content:
      `
        The next time you run a marathon, do not be surprised if you hear someone shout: “Please give way to the blind runners!”.
        Turn around and you might be greeted by the effervescent Chris Hortin Tan, 43...
      `
    }, {
      id: 13,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/daughter.jpg',
      image: 'resources/img/article/daughter.jpg',
      title: 'Teaching her daughter who has language and mobility problems to move and write',
      joined: 'The Straits Times, 7 May 2016.',
      url: 'http://www.straitstimes.com/singapore/health/teaching-her-daughter-who-has-language-and-mobility-problems-to-move-and-write',
      content:
      `
        Daughter, 19, has language and mobility problems due to global developmental delay...
      `
    }, {
      id: 14,
      type: 'media',
      imageThumb: 'resources/img/article/thumb/15mart.jpg',
      image: 'resources/img/article/15mart.jpg',
      title: 'Re-watch the episode here (March 15, 2016):　晨光第一线 节目《晨心诚意》3月15日：义工用心陪伴 视障人士享受跑步乐趣',
      joined: 'Channel8news, 15 March 2016.',
      url: 'http://www.channel8news.sg/news8/ca/morningexpress/episodes/20160315-me-sincerity/2602310.html',
      content:
      `
        义工的用心陪伴，好似明灯照亮视障人士的跑道，让他们在黑暗中也能享受跑步的乐趣...
      `
    }, {
      id: 15,
      type: 'newsletter',
      image: '',
      title: '2014 Issue',
      joined: '',
      url: 'resources/files/newsletter2014.pdf',
      content: ''
    }];

    var details = [{
      id: 1,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Cassey</b>: It is very interesting how I found Runninghour....I first chanced upon Runninghour via a documentary on T.V a few years ago where I saw a lady running beside a blind runner with a shoelace in a Triathlon. My comment then was 'Wow! This is very good and wonderful to have someone guiding beside a blind person. How nice if some-one can also run with Gwendoline (fondly known as Gwen in Runninghour)?' (Gwen is my daughter and was born with profound developmental delay* and had been homeschooled since 4 years old.) It was a short clip and I didn't know that it was Runninghour....Then in Dec 2014, a friend told me about Runninghour. I was overjoyed!!!! It was my heart's desire!!! I was thankful as I was looking for a group where Gwen can participate and socialize and here comes Runninghour...lt is the perfect group where running is the main activity. Running is very good for people with special needs; it helps them in their development and to function better in life. So without any hesi-tation I brought Gwen to join Runninghour .... At that time, I didn't know that I can also join. </p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Cassey</b>: It was an awesome experience for Gwen and for me. Our first run was at Toa Payoh Stadium. It was Gwen's first experience run-ning in a big group of people, she was very very excited! And she was willing to walk/run longer distance than she was used to. Looking at Gwen's smiling face on that Saturday morning run brought joy to me too! Everyone was very friendly.....and we were welcomed into this big big family.</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Cassey</b>: Never in my life would I think that Gwen (who has low muscle tone and can't even complete a lkm walk/run before joining Run-ninghour) could make it to a running event ... and Runninghour made it happened. She completed the 5km Runinghour2015: Run So Others Can race in March 2015 within 1 hour!!! Ever since joining Runninghour, she looks forward to going for the run every Sat....instead of running only with Mum (which can be quite boring); she gets to run with different people every week!!! And she makes new friends too! This is so wonderful... As for myself, coming to Runninghour allows me to make more new friends and also allows me to see how a life can impact another.....lovely! </p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Cassey</b>: Runninghour is a very heart-warming group with lovely people coming from different walks of life sacrificing their Saturday morn-ing with only one intention- to run so that others with special needs can run or walk along with them. It is a wonderful group where you can also see people with special needs helping and encouraging another special needs friend....It's really an awesome group! </p>
        `
      }, {
        question: 'Any other thoughts that you would wish to share?',
        answer:
        `
          <p><b>Cassey</b>: As a mother with special needs daughter, I just want to THANK ALL OF YOU for the love and thoughts for people with special needs! We love Runninghour!!! (*A developmental delay is any significant lag in a child's physical, cognitive, behavioral, emotional, or social development, in comparison with norms - Encyclopedia.com)</p>
        `
      }]
    }, {
      id: 2,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Charmaine</b>: During a seminar conducted by Dr. Wong Meng Ee, a fellow Visually Impaired (VI) mentioned Runninghour (RH) in passing and it immediately caught my ears. The very next day I called up Singapore Association of Visually Handicapped (SAVH) to enquire about RH and was thus linked up with one of the committee members. After spending long periods of time in illness, I realized that life is precious and that I should live every moment of my life to the fullest. I hoped that by joining RH I can develop an active lifestyle as well as expand my social circle through meeting people from all walks of life.</p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Charmaine</b>: My very first guide was a lovely lady named Diane. She was encouraging and patient with me. Firstly, she advised me to start slow as it was my first run. She then urged me to try a slow jog and assured me that I am the one to decide when to rest and when to continue the run. She even taught me a few tips in running so that less pressure is placed on my knees. Throughout the session, we kept up a bubbly conversation. I learnt that we both love Literature and are interested in learning other languages. On the whole, it was an invigorating experience for me and I finished the session having no doubt that I have joined the right group..</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Charmaine</b>: Taking part in Runninghour not only spurred me to exercise and become stronger physically, the vibrant environment and openness amongst members has also helped me become more cheerful and less prone to negative emotions. Now whenever I am faced with adversities, I can tell myself that “You’re not alone, there are other people facing the same problems as you. If they can overcome theirs, so can I!”</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Charmaine</b>: Don’t hesitate to raise any concerns regarding your participation in RH, be it the amount of exercise or running attire etc. Also, the guide does not necessary have to determine the pace of your run. If you feel you have to reduce your speed or even slow down to a walk, there is nothing wrong with it. What matters is that you enjoy yourself thoroughly.</p>
        `
      }, {
        question: 'Any other thoughts that you would wish to share?',
        answer:
        `
          <p><b>Charmaine</b>: Ever since I decided to step outdoors and interact with strangers, I have never regretted it. From the socially awkward introvert, I have transformed into a more optimistic and approachable person. I hope other disabled individuals will also pick up the courage to come out of their comfort zone to explore the colorful aspects of the world out there.</p>
        `
      }]
    }, {
      id: 3,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
         <p><b>Daniel</b>: I found out from Mr. John See Toh*, the founder of Runninghour, when my wife and I attended our son, Eddison’s Kota Tinggi pre-camp briefing session at Metta School in September 2015. (*John is a teacher at Metta School) We decided to join Runninghour as we believe running can build determination and confidence which in turn brings health and happiness (endorphins effect).</p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Daniel</b>: During the first running session, I was amazed and deeply touched to see so many passionate individuals come together. Eddison and I felt really good as the members are a cohesive group of like-minded enthusiasts giving strength and encouragement to their buddies along the way.</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Daniel</b>: The members are cherished people of different race with big and kind heart, voluntary/giving their time and effort to this social cause that they all believe in. That changed my perspective towards society. I’m now convinced that we are no longer a Kiasu society.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Daniel</b>: Just drop by during one of the running session and experience it yourself. A thousand miles start with the first step!</p>
        `
      }, {
        question: 'Any other thoughts that you would wish to share?',
        answer:
        `
          <p><b>Daniel</b>: Eddison has become more confident, sociable, independent and happier since he joined Runninghour. And he is always looking forward to the next running session. </p>
        `
      }]
    }, {
      id: 4,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Joan Bowen Crew</b>: Some of the Runninghour members were teachers and customers of our café – Joan Bowen Café was set up for special needs youths. The Runninghour members encouraged us to join. We are glad we did because the Runninghour group encourages participation from people with disabilities and we have witnessed this each week we are there.</p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Joan Bowen Crew</b>: It was great, and our crew enjoys participating each week.</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Joan Bowen Crew</b>: You will be made to feel to be part of the group, and as a volunteer, it will be a very rewarding experience. </p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Joan Bowen Crew</b>: You will be made to feel to be part of the group, and as a volunteer, it will be a very rewarding experience.</p>
        `
      }, {
        question: 'Any other thoughts that you would wish to share?',
        answer:
        `
          <p><b>Joan Bowen Crew</b>: Keep the energy going! Congrats to all who made this possible and the volunteers who gave my crew friendship. Thank you!</p>
        `
      }]
    }, {
      id: 5,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Clancie</b>: Sometime in December 2015, a friend who has the same interest as me (i.e. running) sent me the link to Runninghour (RH)’s Facebook page and told me she saw a Channel 8 TV program, Tuesday Report’s feature story on RH and she was interested in joining. She asked if I was interested as well, all for a good cause, and I said “Yes” (almost immediately!).</p>
          <p>I read the background of RH on its website and felt a draw towards the community. Right then, I asked myself if I could make the commitment to RH as I knew that it wasn’t an activity where I could just come and go as I pleased. If I decided to join, it would be for the long run. Needless to ask what my answer was, I knew somewhere in my heart that RH was going to bring meaning to my life.</p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Clancie</b>: The following week after I made the decision to join RH, I attended the Induction Program which was conducted monthly. At the induction, a few senior guides explained RH’s history, vision and mission, and what exactly we, the guides, would be expected to do at RH. After about 15-20 minutes of briefing, we were put to the real test – paired up with a fellow newcomer, we took turns to be blind-folded and learnt to guide, and be guided, to and fro across the main road outside of the Stadium, and up and down stairs of the HDB flats. Back at the Stadium, we took turns (still blind-folded) to guide our buddies through one round the track (all 400metres of it!).</p>
          <p>If you think it doesn’t sound too difficult a task, I invite you to come try it for yourself. It was daunting! For fully-sighted people like myself, it was difficult to have to “lose our sight” for half an hour and to have to rely on our other senses such as hearing and touch, and most importantly, we had to put total trust in a stranger’s words. This experience let us have a glimpse of what it is like for our Visually Challenged Runners (VCRs).</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Clancie</b>: Ever since I joined RH, my mind has had a million and one ideas on: activities we can organize for our friends, how the guides can pump in more positive energy/ vibes into the group, new running routes for our Saturday runs, etc etc. It has been busy (in my brain), but good busy. I have never felt more “alive” and psychologically energetic than I am now!</p>
          <p>Every Tuesday and Thursday, I look forward to 7pm to meet the RH group at Sports Hub for our weekday runs/training sessions and I am always excited to lead the group on Saturday mornings at various locations where our friends get to explore parts of Singapore that they don’t usually go to.</p>
          <p>I am not kidding when I say that joining RH has helped me see another side of life, I have become a much happier and more confident person through guiding and being friends with our intellectually and visually challenged running buddies, and I am more than excited to be able to share this new lease of positive energy with everyone at RH. Being in RH has also reminded me how much most of us has taken what we have for granted. Meeting the buddies at RH who do not let anything bring them down greatly puts me to shame about lamenting over my own trivial problems. There is really so much we can all learn from our buddies, I think they are the ones who are “guiding” us and not the other way around.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Clancie</b>: There really isn’t very much to think about it. We have our routine sessions every week and there is no obligation for anyone to join in every single session. We understand that everyone has different schedules and priorities in life. What we hope to achieve is for our buddies at RH to meet new friends, to have someone to talk to, or run/walk with. It doesn’t matter what your age or fitness level is as we need people of different fitness levels to guide our friends!</p>
          <p>I think it sounds a little misleading when we see the word “Runninghour” – Is this purely a running group? What if we can’t run and can only walk? Do we have to do it for an hour? – I know there are so many questions we want to ask but I would say, just come and see if RH is something for you. If you feel that it is not, you can always opt out any time but the most important thing is for you to take that first step forward first. If you don’t even try, you would never know if RH is something you would like to participate in!</p>
        `
      }, {
        question: 'Any other thoughts that you would wish to share?',
        answer:
        `
          <p><b>Clancie</b>: RH is a wonderfully close-knit community that is like one big family! I have made many friends whom I can talk to and run with outside of RH sessions, and it’s great how we can all connect so easily, all because we have one major thing in common – Our love for RH and its members</p>
        `
      }]
    }, {
      id: 6,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Jeffrey</b>: Prior to joining Runninghour, I didn’t know that a running group such as this exists in Singapore. </p>
          <p>It was a usual weekday evening for me; out jogging alone at the seaside. When I reached home, my wife told me about a TV program that had just ended. It was Tuesday Report Channel 8: Flavors of Life – the program featured a group called Runninghour. She briefly explained what the group does and encouraged me to check it out on the internet. Being my other half, she was very certain that I’ll be interested.</p>
          <p>From the link, one particular video clip caught my attention, and that’s two Visually Challenged Runners (VCRs), taking part in a triathlon. With all odds stacked against them, their determination and courage helped them overcome the obstacles. They have proven that they are no different from us; all they need is a helping hand - a helping hand to guide them and conquer what many people think is impossible.</p>
          <p>Initially, I was skeptical about signing up …. I was afraid that I might not be able to catch up with the VCRs or Intellectually Challenged Runners (ICRs). I am just a below average runner who had never jogged beyond 6km in all my weekly runs. Sensing my hesitation, my wife told me “take it like learning Mathematics, you just need more practice and it’ll yield results”. She’s right, my concern was unfounded, I am able to run slightly longer distances than before and the longest distance I ran is 12km. </p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Jeffrey</b>: I was paired up with an ICR together with a senior guide in my first run so that I can observe how my senior guide did it. I must say that the ICR is a speedy, and he’ll talk and sing to himself. He also avoids eye contact when I try talking to him. It was a very tiring run as he zooms off without waiting for us, he’ll skip and hop at the same time and by the time we reached Marina Barrage - I was totally drained. As we headed back to the Sports Hub, he seemed to have exhausted his fuel half way through the return lap and began to walk, but we continued to jog beside and urge him to carry on. In the end, it was ‘walk-jog-run’ journey back to the Sports Hub and his mum was waiting anxiously there and was happy that his son had found not just another guide but a friend as well. </p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Jeffrey</b>: Weekends are the only days that I can sleep in, but now I am always up as early as 5.15am on most Saturdays just so I can join my buddies for the weekend run. My wife has been very understanding and supportive on my decision to be a running guide. It’s usually my duty to buy dinner on weekdays, but she’ll take care of that if I’m out running with my buddies on Tuesday or Thursday evenings.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Jeffrey</b>: You don’t need to be a Marathoner to join Runninghour, all you need is the passion, and the patience. Every week, you’ll be partnered with a different buddy - some are very bubbly, some are very reserved. As some of our ICR or VCR do not run, we’ll walk and chit-chat with them and you’ll be thrilled to see how much they enjoy the morning breeze and the beautiful sun shining on them. </p>
        `
      }, {
        question: 'Any other thoughts that you would wish to share?',
        answer:
        `
          <p><b>Jeffrey</b>: I’m totally inspired by the determination and courage of our ICRs and VCRs. Our encouragement is a motivating factor to our buddies, and their determination is what drives us as a guide. When I run together with them, I can feel their zest and along this journey, we forged a very strong bond. They are the motivating factor for me to continue guiding and running with them for as long as I can. Often, at the end of each session you’ll see many tired, but happy and smiling faces. </p>
        `
      }]
    }, {
      id: 7,
      detail: [{
        question: 'How did you find out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Marc</b>: I found out through my sister, Julie Chiang*, who was helping out with some PR work for the Runninghour2015 event that happened on March 2015. (*Julie is a Director with Asia PR Werkz who has committed to supporting Runninghour2016 as part of their agency’s corporate social responsibility program.)</p>
          <p>As I am Visually Impaired (VI), running alone has become increasingly challenging. When I heard that that there are totally blind people who run, I was very interested to know how it’s done. This is in preparation for the day, if the unfortunate should happen, I will still be able to run. </p>
        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Marc</b>: Before I became visually challenged, I ran on my own without needing to hold a tether*. During my first run, I was not comfortable to run with the tether, which all other Visually Challenged Runners (VCRs) use with their guides when running. (*A tether could be a shoelace or towel. The VCR and the guide each hold one end of the tether when they run.). </p>
          <p>It felt restricting and tiring. But after a few runs and progressive distances, I got used to it. This is especially during night runs, which I have problems with, I learnt to trust my guide (blind faith if you would like to call it!) completely, executing their instructions, either verbal or through tugging of the tether, without question. It's a bond that is hard to form, but once formed, it's hard to break. </p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life?',
        answer:
        `
          <p><b>Marc</b>: The group is not just a gathering of like-minded and helpful people; it now feels like a family that cares for one another.</p>
          <p>Other than runs, there are also many other sporting activities, e.g. swimming and cycling. It has showed me that sports can also be played by everyone. A VCR or Intellectually Challenged Runner (ICR) can participate in sporting activities, as long as they are willing to take the step forward.</p>
          <p>Through Runninghour, I also got involved in Goalball (a team ball game designed specifically for VI athletes) and even represented Singapore as Captain of the first goalball team at the ASEAN Para Games in December 2015. </p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour?',
        answer:
        `
          <p><b>Marc</b>: Make sure you have the time! ‘Cos you’ll be too busy participating in all their activities thereafter. Life has become much more interesting and fulfilling! </p>
        `
      }]
    }, {
      id: 8,
      detail: [{
        question: 'What was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Siew Ling</b>: In December 2012, Runninghour members Wai Yee and Ivni invited me to run with the group, and much to their disbelief, I told them I would join in the January the following year. My first run with the group was at Buona Vista for a trial before the Green Corridor Run later that month. I was paired with Royce for my first run with a shoelace for Royce to guide me with. The trail was muddy, full of puddles and ended up in us not being able to complete the planned running route. It was an eventful first run for me.</p>
        `
      }, {
        question: 'Why did you decide to join runninghour?',
        answer:
        `
          <p><b>Siew Ling</b>: when i lost my sight at 11 years of age, i did not exercise at all. Even with my sight, i was not the exercise sort. Since taking up running, i feel fitter leading a more active life, and have forged strong friendships with the friendly members of runninghour. I'm now more involved in sports now than ever before.</p>
        `
      }, {
        question: 'What advice would you share with first time blind run participants for the upcoming runninghour 2015: run so others can?',
        answer:
        `
          <p><b>Siew Ling</b>: Take it slow. As the visually impaired runner, you are the one setting the pace so communicate with your guide, tell them how you want to be alerted of changes. As a running guide, use distance alerts such as 10m ahead, 30 steps ahead, get ready in 3...2...1 to inform your partner. When blindfolded, just trust your guide, run and enjoy the whole experience. It's a very liberating experience. </p>
        `
      }]
    }, {
      id: 9,
      detail: [{
        question: 'What was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Dennis</b>: my first running experience took place in early 2013 at a running session held at toa payoh stadium. It was my very first time running since i lost my sight and i was paired with an experienced running guide for the session. It was scary at first so i was running at a slow pace as i was worried that i would bump into someone else. My guide was assuring and constantly spoke to me as we ran so my confidence built up from there. </p>
        `
      }, {
        question: 'How has Runninghour changed your life?',
        answer:
        `
          <p><b>Dennis</b>: for a few years after i completely lost my sight, i mostly confined myself at home and did not exercise at all. My health was in bad shape and i was in a constant state of depression. Since joining runninghour, i am in much better shape both physically and emotionally. Not only has the co-op help me to regain my fitness, i have also made many new friends. Through our weekly runs, we share our life experiences and act as emotional support for one another. The sessions have given me confidence to deal with challenges that come with my disability. </p>
        `
      }, {
        question: 'What advice would you share with first-time blind run participants?',
        answer:
        `
          <p><b>Dennis</b>: as the participants will be experiencing running blindfolded and as a running guide for the first time, it is vital to attend the pre-race workshops to get vital first-hand information from those with experience.</p>
        `
      }]
    }, {
      id: 16,
      detail: [{
        question: 'How did you found out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>David</b>: I was looking for an activity that I can volunteer in and I chanced upon Runninghour during that time. I decided to join because it is associated with running and running is one of my biggest passions. I thought if I can do something that I enjoy and also help the special needs runners at the same time - it will be an ideal volunteer activity for me. In additional, I understand that the Sat activity starts very early* and it will not crash with my family time – which is perfect for me. (*Runninghour’s weekly Saturday runs starts around 7.30am and we usually finish by 9am.  This is deliberate as we wanted to make sure that our activity does not impact members’ work or family life)</p>

        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>David</b>: It was quite a stressful encounter. I remember I was asked to guide Wai Yee (a visually challenged runner) and I was told that she is a great athlete.  Not only am I worried that I cannot keep up with her pace, I was also worried that I may cause her to fall accidentally.</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life? Why do you join the group regularly for their activities?',
        answer:
        `
          <p><b>David</b>: I always feel a strong sense of satisfaction whenever I see a smile in the runners face after the workouts. I have made so many friends there; we even go trekking and for meals together, besides attending the Runninghour activities.  The reason why I am still involved with Runninghour so regularly is because I think I still can contribute positively to the group.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour2017?',
        answer:
        `
          <p><b>David</b>: We need the support from the community so that we can continue to do our work in supporting the integration of people with special needs. Do come and join us at our Runninghour2017 event!  This will be the perfect opportunity for you to experience our signature “blind-run”.  Do not worry about fitness, you can walk or jog or run.  If the special need runners can do it, so can you!</p>

        `
      }, {
        question: 'Any other thoughts that you wish to share?  Please feel free to share.',
        answer:
        `
          <p><b>David</b>: RunningHour is a great platform for runners to engage regularly with people with special needs.  These special needs runners need a steady pool of volunteers in order for them to have these regular activities that they look forward to weekly.  We have been fortunate to have so many volunteers willing to help them be it during weekends or weekdays. I am very happy to see this group grow in size over these years. I really hope I am able to serve RH for many more years!</p>

        `
      }]
    }, {
      id: 17,
      detail: [{
        question: 'How did you found out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Geraldine</b>: I found out about Runninghour from my colleague Jennifer Quan. She realized that I was running a lot on my own. She shared about RH, its cause and objectives and I agreed to attend.  She didn’t share much and all she said was that it was to help the intellectually challenged and visually challenged runners to run. Since I always run alone, she felt perhaps this is something I may want to consider doing.  Upon joining a few sessions, I was motivated and inspired by fellow guides and the special need runners.  I made a decision that I will support these runners and walkers to achieve a healthy lifestyle both in body, mind and spirit. That has been my guiding light ever since and I have never regretted that decision!</p>

        `
      }, {
        question: 'How was your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Geraldine</b>: My first running experience was with a young intellectually challenged boy and he was very active.  As he had speech disability, it was hard to interact with him. He wouldn’t run at a consistent pace but rather had short fast bursts and he would walk.  It was hard to keep up with him but I manage to follow him.  We did not have much conversation as he couldn’t talk or express himself. He mostly babbled and had slurred speech.  This didn’t deter me from communicating with him so I as I walked and ran I continued talking asking him questions about what he liked, favorite food, songs and to look at the surroundings. At the end of the session the most amazing thing happened – he came up to me and said thank you and gave me a high five and held my hands for a few minutes. (He has severe autism I believe and as such, they usually do not want any adult contact/touch.) In my case, it was an overwhelming feeling of sheer joy and happiness for me. I realized I had a beautiful bond with him and we are friends from then on. </p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life? Why do you join the group regularly for their activities?',
        answer:
        `
          <p><b>Geraldine</b>: It has created a sense of appreciation and I have developed special relationships with both guides and the challenged runners/walkers. It has made me realized that there are so many things in life that I used to take for granted.  However, being in Runninghour, I have learnt to be grateful for the wonderful people that I have known over the years.   I have many meaningful experiences that are truly unforgettable:
            - When I crossed the finish line with a special needs runner who used to walk/run for only 5km and she did a 10km in Standard Chartered Marathon
            - When an Intellectually Challenged Runner (ICR) comes up to me and says “Hello Geraldine!” and he does that for each training session. He was so quiet and reserved when he first joined us.
            - The times when one of them runs ahead of me that I have to catch my breath. He has become so much stronger and faster because of attending trainings regularly.
            - The times where I think I am 20 minutes early for a run and I see a ICR about 1.5 hours earlier than me. I realized how much each session means to them and why I should try to be there for every session.
            All these experiences have made me a more wholesome person. It has allowed me to give back to society in a way that I can with what I love doing which is to run. It has thought me patience and being grateful for every moment in my life - and for this simple reason, I do not miss any of the Tuesday and Thursday training sessions.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour2017?',
        answer:
        `
          <p><b>Geraldine</b>: It’s a life changing experience. It’s for you to discover the beautiful relationships and bond that you create with the Intellectually or Visually Challenged Runners.. They are inspiring and motivating, each in their own way and it’s for you to discover!</p>

        `
      }]
    }, {
      id: 23,
      detail: [{
        question: 'How did you found out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Ong Jing Ping</b>: I got to know about Runninghour through a Channel8 TV program, Tuesday Report in 2015. After watching the program, I read up further about the group online and was motivated by the wonderful cause done by the volunteers, hence decided to join the group shortly after. </p>

        `
      }, {
        question: 'How your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Ong Jing Ping</b>: My first session with Runninghour was the Induction Program for potential new running guides. We were being briefed about things to take note when we are guiding either Visually Challenged (VCR) or Intellectually Challenged (ICR) runners. </p>
          <p>One of the segments about the Induction Program is for potential new guides to be paired up and taking turns to be blind-folded.  The person blind folded was being guided by another new guide (which is a total stranger).  Other than some techniques that were taught during the briefing, the rest were all dependent on the trust we placed on the guide that guide us.</p>
          <p>Through this simple exercise, we get to understand better about the techniques to guide VCR and more importantly learned about how much trust one have to place in the guide that is guiding. </p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life? Why do you join the group regularly for their activities?',
        answer:
        `
          <p><b>Ong Jing Ping</b>: After joining Runninghour, I have learned that no hurdle is too high to jump. Our fellow VCRs are exemplary examples to us that as long you are determined to overcome any obstacles or challenges - you will definitely be able to do it. The always cheerful and positive guides and buddies are the reason why I turn up for Runninghour sessions regularly.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour2017?',
        answer:
        `
          <p><b>Ong Jing Ping</b>: I think Runninghour2017 is not just another running event in the event filled running calendar, but more of a chance for Singaporeans to show their support for social inclusiveness. Our participation in the event will be an encouragement to the intellectually/visually/physically challenged runners and indicate that we fully support their  perseverance  to overcome their disabilities and continue to live a healthy lifestyle.</p>

        `
      }, {
        question: 'Any other thoughts that you wish to share?  Please feel free to share.',
        answer:
        `
          <p><b>Ong Jing Ping</b>: I hope through events like Runninghour2017, not only more guides can join Runninghour, but also more special needs friends can join the group and lead a healthy lifestyle.   I look forward to hit their personal best (PB) with them!</p>

        `
      }]
    }, {
      id: 24,
      detail: [{
        question: 'How did you found out about Runninghour and why did you decide to join?',
        answer:
        `
          <p><b>Quay Chai Guan</b>: I was running during one of my business trip in Japan and I saw this group of people running in a pair at one of the parks. I noticed one of them was guiding the other runner who was visually challenged; I followed them for a while and was touched by the dedication and commitment of the guide.</p>
          <p>Around the same time, I came across this article “Sometimes, You have to Lose to Win” (Straits Times, Oct 2012) and the sentence “we need to sometimes slow down our pace to help someone around us” really resonated with me.</p>
          <p>Hence, I started looking online for a running group that I can help and contribute - that's how I found RunningHour. I signed up and have been running with the group since then. </p>

        `
      }, {
        question: 'How your first running experience with Runninghour and what was it like?',
        answer:
        `
          <p><b>Quay Chai Guan</b>: It was a different but interesting experience as compared to running with friends or running alone. I really need to focus and also watch my pace. Unlike running with my friends or colleagues where we can comfortably talk about anything without much constraints - work, politics, sports etc. It's different for these individuals with special needs - I have to think of a variety of topics that they might be interested in so that I can have a good conversation with them.</p>
        `
      }, {
        question: 'How has Runninghour made an impact on your life? Why do you join the group regularly for their activities?',
        answer:
        `
          <p><b>Quay Chai Guan</b>: I must admit that initially, I don't know what to say sometimes when I am having conversations with people with special needs.  Through regular interactions, I think I am better now but there's still a long way to go. This really shows that with empathy and a mindset of integrating people with special needs into the mainstream; we can all play our part.</p>
          <p>While it has been a challenging journey learning how to communicate effectively with people with special needs, I must say that I have really enjoyed the runs so much so that I join Runninghour's regular Saturday run unless I am not in Singapore.   The camaraderie that the group shares keeps me going every week.</p>
        `
      }, {
        question: 'What advice will you give to people who are thinking of joining Runninghour2017?',
        answer:
        `
          <p><b>Quay Chai Guan</b>: Running is fun and it is never boring with Runninghour - join us to meet more people and have also some fun in running or walking.</p>

        `
      }]
    }, {
      id: 27,
      detail: [{
        question: 'Profile Background:',
        answer:
        `
          <p>Jeremy Koh is a disabled graduate from Cerebral Palsy Alliance Singapore – formerly known as Spastic Children Association (1987-1997).</p>
          <p>Jeremy is also an active member, a volunteer & an Inclusion Ambassador in Disabled People Association and YouthCorps Singapore serving in Special Needs Cluster, Friends of Engagement TaskForce and that he does volunteer in multiple places too in the area of disability related contacts.</p>
        `
      }]
    }];

    return {
      getArticles : function(type) {
        return $filter('filter')(articles, { type: type });
      },
      getArticleDetail : function(ArticleId) {
        var article = $filter('filter')(articles, { id: parseInt(ArticleId, 10) }, true)[0];
        var detail = $filter('filter')(details, { id: parseInt(ArticleId, 10) }, true)[0];

        article.detail = detail.detail;
        return article;
      }
    };
  }
]);
