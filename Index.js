const TelegramBot = require("node-telegram-bot-api");

const token = "5592759989:AAE6HfrYFn0Ub9nB7u9aNMPKExXFtmbApfU";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send a photo
  bot.sendPhoto(chatId, "img/main.jpg", {
    // caption: "This is an example photo",
  });

  // Send text
  bot.sendMessage(
    chatId,
    "Салам, меня зовут Данияр! \n\n Я зарабатываю каждый день 40 000- 60 000 в день, на игре💸 Aviator 🛫! \n\n Прежде чем начать зарабатывать Зарегистрируйтесь по кнопке снизу 👇 \n\n https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Это нужно для того, что бы робот смог вас идентифицировать и начать выдавать сигналы ✅ \n\n ❗️ Важно: Не давайте никому свой ID, так как робот выдается только на 1 аккаунт! \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Отзывы",
              callback_data: "reviews",
            },
            {
              text: "💸Начнём💸",
              callback_data: "start",
            },
          ],
        ],
      },
    }
  );

  bot.sendMessage(
    chatId,
    "Салем, Менің атым Данияр! \n\n Мен кAviator ойынында күніне 40-50 мың ақша табамын! \n\n Егер сізде телефон және интернет болса, сен де көтере аласың! \n\n Төмендегі кнопканы басу арқылы тіркеліңіз👇 https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Бұл әрекет робот сізді анықтап, сигнал бере бастауы үшін қажет ✅ \n\n ❗️ Маңызды: өзіңіздің ID ешкімге бермеңіз, себебі робот тек 1 аккаунтқа беріледі! \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Натижелер",
              callback_data: "reviews-k",
            },
            {
              text: "💸Бастайык💸",
              callback_data: "start-k",
            },
          ],
        ],
      },
    }
  );
});

bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const chatId = message.chat.id;

  if (callbackQuery.data === "reviews") {
    const media = [
      {
        type: "photo",
        media: "img/review.jpg",
        caption: "Caption for image 1",
      },
      {
        type: "photo",
        media: "img/review.jpg",
        caption: "Caption for image 2",
      },
      {
        type: "video",
        media: "img/video.mp4",
        caption: "Caption for video 1",
      },
      {
        type: "video",
        media: "img/video.mp4",
        caption: "Caption for video 2",
      },
    ];

    bot.sendMediaGroup(chatId, media);

    bot.sendMessage(chatId, "Для начала посмотри ВИДЕО, как работает БОТ!", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Получить БОТа",
              callback_data: "get_bot",
            },
            {
              text: "Назад",
              callback_data: "back-1",
            },
          ],
        ],
      },
    });
  } else if (callbackQuery.data === "back-1") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      "Салам, меня зовут Данияр! \n\n Я зарабатываю каждый день 40 000- 60 000 в день, на игре💸 Aviator 🛫! \n\n Прежде чем начать зарабатывать Зарегистрируйтесь по кнопке снизу 👇 \n\n https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Это нужно для того, что бы робот смог вас идентифицировать и начать выдавать сигналы ✅ \n\n ❗️ Важно: Не давайте никому свой ID, так как робот выдается только на 1 аккаунт! \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Отзывы",
                callback_data: "reviews",
              },
              {
                text: "💸Начнём💸",
                callback_data: "start",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "start") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      'Для начала тебе нужно зарегистрироваться на сайте где мы будем работать👇 \n\n 🔑https://topuppclick.com/OybdRZpk/?subId1=dd \n\n После регистрации нажимаете на кнопку "прошёл регистрацию" ⬇️ \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔑Прошёл регистрацию",
                callback_data: "register",
              },
              {
                text: "Назад",
                callback_data: "back-1",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "get_bot") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      'Для начала тебе нужно зарегистрироваться на сайте где мы будем работать👇 \n\n 🔑https://topuppclick.com/OybdRZpk/?subId1=dd После регистрации нажимаете на кнопку "прошёл регистрацию"⬇️ \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777 ',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔑Прошёл регистрацию",
                callback_data: "register",
              },
              {
                text: "Назад",
                callback_data: "back-1",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "register") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      '👉После регистрации и пополнения баланса напиши в личные сообщения кодовое слово "ПРИМИ" и отправить свой ID👉   ожидай одобрения для получения бота с сигналами📈 \n\n 🔑 ВАЖНО! Вводить ID нужно только цифрами - без букв!',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Отправить ID",
                url: "https://direct.smartsender.com/contacts/m:186135078/redirect?context=ZmI6MjMyOTYxOTA0&referer=186069159&continue=https%3A%2F%2Ft.me%2FDaniyarCash777&random=6673",
              },
              {
                text: "Назад",
                callback_data: "back-2",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "back-2") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      'Для начала тебе нужно зарегистрироваться на сайте где мы будем работать👇 \n\n 🔑https://topuppclick.com/OybdRZpk/?subId1=dd После регистрации нажимаете на кнопку "прошёл регистрацию"⬇️ \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777 ',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔑Прошёл регистрацию",
                callback_data: "register",
              },
              {
                text: "Назад",
                callback_data: "back-1",
              },
            ],
          ],
        },
      }
    );
  }

  if (callbackQuery.data === "reviews-k") {
    const media = [
      {
        type: "photo",
        media: "img/review.jpg",
        caption: "Caption for image 1",
      },
      {
        type: "photo",
        media: "img/review.jpg",
        caption: "Caption for image 2",
      },
      {
        type: "video",
        media: "img/video.mp4",
        caption: "Caption for video 1",
      },
      {
        type: "video",
        media: "img/video.mp4",
        caption: "Caption for video 2",
      },
    ];

    bot.sendMediaGroup(chatId, media);

    // Send text with a button
    bot.sendMessage(
      chatId,
      "Бастау үшін менің БОТ қалай жұмыс істейтіні туралы бейнені қараңыз!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "БОТ-ты алу",
                callback_data: "get_bot-k",
              },
              {
                text: "Кайту",
                callback_data: "back-1-k",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "back-1-k") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      "Салем, Менің атым Данияр! \n\n Мен кAviator ойынында күніне 40-50 мың ақша табамын! \n\n Егер сізде телефон және интернет болса, сен де көтере аласың! \n\n Төмендегі кнопканы басу арқылы тіркеліңіз👇 https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Бұл әрекет робот сізді анықтап, сигнал бере бастауы үшін қажет ✅ \n\n ❗️ Маңызды: өзіңіздің ID ешкімге бермеңіз, себебі робот тек 1 аккаунтқа беріледі! \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Натижелер",
                callback_data: "reviews-k",
              },
              {
                text: "💸Бастайык💸",
                callback_data: "start-k",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "start-k") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      'Алдымен біз сізбен жұмыс жасайтын сайтқа тіркелу керек👇 \n\n 🔑 https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Тіркелгеннен кейін "тіркелуді өттім" кнопкасын басыңыз⬇️ \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔑Тыркелуды оттым",
                callback_data: "register-k",
              },
              {
                text: "Кайту",
                callback_data: "back-1-k",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "get_bot-k") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      'Алдымен біз сізбен жұмыс жасайтын сайтқа тіркелу керек👇 \n\n 🔑 https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Тіркелгеннен кейін "тіркелуді өттім" кнопкасын басыңыз⬇️ \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777 ',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔑Тыркелуды оттым",
                callback_data: "register-k",
              },
              {
                text: "Кайту",
                callback_data: "back-1-k",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "register-k") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      "Тіркелгеннен кейін жеке хабарламалар арқылы менеджеріміз @ мекенжайына ID жазып, жеке VIP группаға қосылу үшін мақұлдауды күтіңіз!",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "ID Жыберу",
                url: "https://direct.smartsender.com/contacts/m:186135078/redirect?context=ZmI6MjMyOTYxOTA0&referer=186069159&continue=https%3A%2F%2Ft.me%2FDaniyarCash777&random=6673",
              },
              {
                text: "Кайту",
                callback_data: "back-2-k",
              },
            ],
          ],
        },
      }
    );
  } else if (callbackQuery.data === "back-2-k") {
    // Send text with a button
    bot.sendMessage(
      chatId,
      'Алдымен біз сізбен жұмыс жасайтын сайтқа тіркелу керек👇 \n\n 🔑 https://topuppclick.com/OybdRZpk/?subId1=dd \n\n Тіркелгеннен кейін "тіркелуді өттім" кнопкасын басыңыз⬇️ \n\n @DaniyarCash777 \n\n @DaniyarCash777 \n\n @DaniyarCash777 ',
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🔑Тыркелуды оттым",
                callback_data: "register",
              },
              {
                text: "Кайту",
                callback_data: "back-1-k",
              },
            ],
          ],
        },
      }
    );
  }
});
