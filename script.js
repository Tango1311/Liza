// База данных исторических событий
const historicalEvents = [
    { year: "IV-VIII", event: "Великое переселение народов" },
    { year: "V-VII", event: "образование варварских королевств" },
    { year: "V-VIII", event: "расселение славян по территории Восточно-Европейской равнины" },
    { year: "IX", event: "образование Древнерусского государства" },
    { year: "862", event: "упоминание в летописи о призвании варягов во главе с Рюриком в Новгород" },
    { year: "882", event: "объединение Новгорода и Киева в единое государство под властью князя Олега" },
    { year: "912-945", event: "княжение Игоря" },
    { year: "945-972", event: "княжение Святослава" },
    { year: "980-1015", event: "княжение Владимира I" },
    { year: "988", event: "принятие Русью христианства" },
    { year: "1019-1054", event: "Русская правда. Правление Ярослава Мудрого" },
    { year: "1097", event: "Любецкий съезд. Закрепление княжеств за князьями на основе вотчинного права" },
    { year: "начало XII", event: "Повесть временных лет Нестора" },
    { year: "вторая треть XII - конец XV", event: "феодальная раздробленность Руси" },
    { year: "XIII", event: "образование Литовского государства" },
    { year: "1223", event: "битва на Калке" },
    { year: "1237-1241", event: "монголо-татарское нашествие" },
    { year: "1240", event: "Невская битва" },
    { year: "1242", event: "Ледовое побоище" },
    { year: "1254", event: "основание Батыем, внуком Чингиз-хана, в низовьях Волги столицы Золотой орды - города Сарай-Бату" },
    { year: "1270-е", event: "образование самостоятельного Московского княжества. Начало княжения Даниила Александровича" },
    { year: "1325-1340", event: "княжение в Москве Ивана I Даниловича Калиты (с 1328 г. - великого князя владимирского)" },
    { year: "1359-1389", event: "княжение Дмитрия Ивановича Донского (с 1362 г. - великое княжение)" },
    { year: "1367", event: "постройка белокаменного кремля в Москве" },
    { year: "1380", event: "Куликовская битва. Войска русских княжеств под командованием Дмитрия Донского разбивают войска Золотой Орды под командованием темника Мамая" },
    { year: "1410", event: "Грюнвальдская битва. Разгром немецких рыцарей польско-литовско-русскими войсками" },
    { year: "1425-1462", event: "великое княжение Василия II Васильевича (Темного)" },
    { year: "1425-1453", event: "феодальная усобица второй четверти XV века" },
    { year: "конец XV-XVI", event: "образование Российского государства" },
    { year: "1462-1505", event: "великое княжение Ивана III Васильевича" },
    { year: "1478", event: "присоединение Новгорода к Москве" },
    { year: "1480", event: "Стояние на реке Угре - свержение ордынского владычества" },
    { year: "1485", event: "присоединение Твери к Москве" },
    { year: "1505-1533", event: "княжение Василия III" },
    { year: "1533-1584", event: "великое княжение Ивана IV Васильевича Грозного (с 1547 г. - царствование)" },
    { year: "1533-1538", event: "регентство великой княгини Елены Глинской" },
    { year: "1540-1560", event: "реформы Избранной рады" },
    { year: "1549", event: "созыв первого Земского собора" },
    { year: "1550", event: "принятие Земским Собором Судебника Ивана IV" },
    { year: "1552", event: "присоединение Иваном Грозным Казанского ханства" },
    { year: "1556", event: "присоединение Иваном Грозным Астраханского ханства. Взятие под власть России всего Поволжья" },
    { year: "1564", event: "начало книгопечатания на Руси. Издание Апостола Иваном Федоровым" },
    { year: "1569", event: "Люблинская уния. Образование Речи Посполитой" },
    { year: "1589", event: "основание Царицына" },
    { year: "1598-1605", event: "правление Бориса Годунова" },
    { year: "1598-1613", event: "Смутное время" },
    { year: "1606-1607", event: "Восстание крестьян под предводительством Ивана Болотникова" },
    { year: "1607-1610", event: "Попытка Лжедмитрия II захватить власть в России. Существование Тушинского лагеря" },
    { year: "1610-1613", event: "Семибоярщина" },
    { year: "1611, март-июнь", event: "Первое ополчение против польских войск во главе с П. Ляпуновым" },
    { year: "1611, сентябрь-октябрь", event: "второе ополчение под руководством Минина и Пожарского" },
    { year: "1612, 26 октября", event: "освобождение Москвы от интервентов" },
    { year: "1613", event: "избрание Земским Собором нового царя - Михаила Романова. Начало династии Романовых" },
    { year: "1613-1645", event: "царствование Михаила Федоровича Романова" },
    { year: "1645-1676", event: "царствование Алексея Михайловича Романова" },
    { year: "1649", event: "Соборное Уложение" },
    { year: "1653-1655", event: "реформы патриарха Никона. Раскол в Русской православной церкви" },
    { year: "1667", event: "Новоторговый устав" },
    { year: "1670-1671", event: "восстание Степана Разина" },
    { year: "1676-1682", event: "царствование Федора Алексеевича" },
    { year: "1682-1689", event: "правление Софьи" },
    { year: "1687", event: "открытие Славяно-греко-латинской академии" },
    { year: "1689-1725", event: "правление Петра I" },
    { year: "1700-1721", event: "Северная война со Швецией" },
    { year: "1703", event: "основание Санкт-Петербурга; начало издания первой русской газеты Ведомости" },
    { year: "1713", event: "перенесение столицы в Санкт-Петербург" },
    { year: "1709, 27 июня", event: "Полтавская битва" },
    { year: "1711", event: "учреждение Сената" },
    { year: "1714, 27 июля", event: "Гангутское сражение - первая в истории России морская победа русского флота" },
    { year: "1718-1721", event: "учреждение коллегий" },
    { year: "1721", event: "принятие Петром титула императора" },
    { year: "1722", event: "Устав о наследии престола" },
    { year: "1725", event: "основание Российской Академии наук в Петербурге" },
    { year: "1725-1762", event: "период дворцовых переворотов. За это время на российском троне сменилось шесть императоров и императриц" },
    { year: "1741-1761", event: "правление Елизаветы Петровны" },
    { year: "1755", event: "основание Московского университета" },
    { year: "1761-1762", event: "царствование Петра III" },
    { year: "1762-1796", event: "царствование Екатерины II" },
    { year: "1773-1775", event: "крестьянская война под руководством Е. Пугачева" },
    { year: "1783", event: "присоединение Крыма к России" },
    { year: "1783", event: "Георгиевский трактат. Переход Восточной Грузии под протекторат России" },
    { year: "1785", event: "Жалованная грамота Екатерины II дворянству и городам" },
    { year: "1787-1791", event: "Русско-турецкая война" },
    { year: "1791", event: "Заключение Ясского мира по итогам русско-турецкой войны." },
    { year: "1797", event: "Отмена установленного Петром I порядка престолонаследия." },
    { year: "1799", event: "Итальянский и Швейцарский походы А. В. Суворова" },
    { year: "1801-1825", event: "царствование Александра I" },
    { year: "1802", event: "Учреждение министерств вместо коллегий" },
    { year: "1803", event: "Указ о вольных хлебопашцах" },
    { year: "1812, июнь-декабрь", event: "Отечественная война с Наполеоном" },
    { year: "1812, 26 августа", event: "Бородинская битва" },
    { year: "1814-1815", event: "Венский конгресс."},
    { year: "1820", event: "Открытие Антарктиды российскими мореплавателями под командованием Ф. Ф. Беллинсаузена и М. П. Лазарева" },
    { year: "1825, 14 декабря", event: "Восстание декабристов на Сенатской площади в Петербурге" },
    { year: "1825-1855", event: "царствование Николая I" },
    { year: "1834-1864", event: "война на Кавказе" },
    { year: "1840-1850", event: "Споры между славянофилами и западниками" },
    { year: "1853-1856", event: "Крымская война" },
    { year: "1855-1881", event: "царствование Александра II" },
    { year: "1861, 19 февраля", event: "издание Манифеста об освобождении крестьян и Положения о крестьянах, вышедших из крепостной зависимости" },
    { year: "1864", event: "земская и судебная реформы" },
    { year: "1881, 1 марта", event: "убийство Александра II" },
    { year: "1881-1894", event: "царствование Александра III" },
    { year: "1894-1917", event: "царствование Николая II" },
];

// Элементы DOM
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const inputContainer = document.getElementById('inputContainer');
const yearInputGroup = document.getElementById('yearInputGroup');
const yearFromInput = document.getElementById('yearFrom');
const yearToInput = document.getElementById('yearTo');
const singleYearInput = document.getElementById('singleYearInput');
const inputHint = document.getElementById('inputHint');
const submitBtn = document.getElementById('submitBtn');
const questionCountElement = document.getElementById('questionCount');
const scoreElement = document.getElementById('score');
const modeElement = document.getElementById('mode');
const resultElement = document.getElementById('result');
const modeIndicator = document.getElementById('modeIndicator');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const modeToggleBtn = document.getElementById('modeToggle');

// Переменные игры
let currentQuestionIndex = 0;
let score = 0;
let gameActive = false;
// Режимы: 0 = Дата → Событие, 1 = Событие → Дата, 2 = Событие → Ввод даты
let currentMode = 0;
let questions = [];
let usedIndices = [];

// Инициализация игры
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    gameActive = true;
    usedIndices = [];

    // Выбираем 10 случайных вопросов из базы данных
    questions = [];
    while (questions.length < 10 && questions.length < historicalEvents.length) {
        const randomIndex = Math.floor(Math.random() * historicalEvents.length);
        if (!usedIndices.includes(randomIndex)) {
            questions.push(historicalEvents[randomIndex]);
            usedIndices.push(randomIndex);
        }
    }

    updateGameInfo();
    showQuestion();

    // Показать/скрыть кнопки
    startBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

    if (currentMode === 2) {
        // Режим ввода даты
        optionsContainer.classList.add('hidden');
        inputContainer.classList.remove('hidden');
        submitBtn.classList.remove('hidden');
        setupInputForCurrentQuestion();
    } else {
        // Режимы с вариантами ответов
        optionsContainer.classList.remove('hidden');
        inputContainer.classList.add('hidden');
        submitBtn.classList.add('hidden');
    }

    resultElement.textContent = '';
    resultElement.className = 'result';
    modeIndicator.textContent = getModeDescription();
}

// Показать текущий вопрос
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    // Очистить предыдущие опции
    optionsContainer.innerHTML = '';
    resultElement.textContent = '';
    resultElement.className = 'result';

    // Показать вопрос в зависимости от режима
    if (currentMode === 0) {
        // Дата → Событие
        questionElement.textContent = `Год: ${currentQuestion.year}`;
    } else {
        // Событие → Дата или Событие → Ввод даты
        questionElement.textContent = `Событие: ${currentQuestion.event}`;
    }

    if (currentMode === 0 || currentMode === 1) {
        // Режимы с вариантами ответов
        let options = [];

        // Добавить правильный ответ
        if (currentMode === 0) {
            options.push(currentQuestion.event);
        } else {
            options.push(currentQuestion.year);
        }

        // Добавить случайные неправильные ответы
        while (options.length < 6) {
            let randomIndex;
            let randomOption;

            if (currentMode === 0) {
                // Для режима "Год → Событие" ищем случайные события
                do {
                    randomIndex = Math.floor(Math.random() * historicalEvents.length);
                    randomOption = historicalEvents[randomIndex].event;
                } while (options.includes(randomOption) || randomOption === currentQuestion.event);
            } else {
                // Для режима "Событие → Год" ищем случайные годы
                do {
                    randomIndex = Math.floor(Math.random() * historicalEvents.length);
                    randomOption = historicalEvents[randomIndex].year;
                } while (options.includes(randomOption) || randomOption === currentQuestion.year);
            }

            options.push(randomOption);
        }

        // Перемешать варианты ответов
        options = shuffleArray(options);

        // Создать элементы опций
        options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectAnswer(option));
            optionsContainer.appendChild(optionElement);
        });
    } else if (currentMode === 2) {
        // Режим ввода даты
        setupInputForCurrentQuestion();
    }

    updateGameInfo();
    modeIndicator.textContent = getModeDescription();
}

// Настроить поля ввода для текущего вопроса
function setupInputForCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const yearData = currentQuestion.year;

    // Очистить поля ввода
    yearFromInput.value = '';
    yearToInput.value = '';
    singleYearInput.value = '';

    // Определяем, является ли год периодом (содержит дефис)
    if (yearData.includes('-') && !isNaN(parseInt(yearData.split('-')[0]))) {
        // Это период (например, 1019-1054)
        singleYearInput.classList.add('hidden');
        yearInputGroup.classList.remove('hidden');
        inputHint.textContent = 'Для периода введите начальный и конечный год';
    } else {
        // Это одиночный год или текст (например, "IX", "начало XII")
        yearInputGroup.classList.add('hidden');
        singleYearInput.classList.remove('hidden');
        inputHint.textContent = 'Введите год или период (например: IX, 862, 1019-1054)';
    }
}

// Проверить ответ в режиме ввода
function checkInputAnswer() {
    if (!gameActive) return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.year;
    let userAnswer = '';

    // Получаем ответ пользователя
    if (singleYearInput.classList.contains('hidden')) {
        // Режим периода
        const from = yearFromInput.value.trim();
        const to = yearToInput.value.trim();

        if (from && to) {
            userAnswer = `${from}-${to}`;
        } else if (from) {
            userAnswer = from;
        } else if (to) {
            userAnswer = to;
        }
    } else {
        // Режим одиночного ввода
        userAnswer = singleYearInput.value.trim();
    }

    if (!userAnswer) {
        resultElement.textContent = 'Пожалуйста, введите ответ';
        resultElement.className = 'result';
        return;
    }

    // Нормализуем ответ для сравнения
    const normalizedUserAnswer = normalizeYearInput(userAnswer);
    const normalizedCorrectAnswer = normalizeYearInput(correctAnswer);

    // Проверяем ответ
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        score++;
        resultElement.textContent = `Правильно! +1 очко. Правильный ответ: ${correctAnswer}`;
        resultElement.classList.add('correct');
    } else {
        resultElement.textContent = `Неправильно! Правильный ответ: ${correctAnswer}`;
        resultElement.classList.add('incorrect');
    }

    // Обновить счет
    scoreElement.textContent = score;
    gameActive = false;
    nextBtn.disabled = false;
    submitBtn.disabled = true;
}

// Нормализация ввода года для сравнения
function normalizeYearInput(yearStr) {
    // Приводим к нижнему регистру
    let normalized = yearStr.toLowerCase().trim();

    // Заменяем римские цифры на арабские, если возможно
    const romanToArabic = {
        'i': '1', 'ii': '2', 'iii': '3', 'iv': '4', 'v': '5',
        'vi': '6', 'vii': '7', 'viii': '8', 'ix': '9', 'x': '10',
        'xi': '11', 'xii': '12', 'xiii': '13', 'xiv': '14', 'xv': '15'
    };

    // Проверяем, является ли строка римской цифрой
    if (romanToArabic[normalized]) {
        return romanToArabic[normalized];
    }

    // Убираем лишние пробелы вокруг дефиса
    normalized = normalized.replace(/\s*-\s*/g, '-');

    // Сортируем числа в периоде, если это период
    if (normalized.includes('-')) {
        const parts = normalized.split('-');
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            const num1 = parseInt(parts[0]);
            const num2 = parseInt(parts[1]);
            if (num1 > num2) {
                return `${num2}-${num1}`;
            }
        }
    }

    return normalized;
}

// Выбор ответа (для режимов с вариантами)
function selectAnswer(selectedOption) {
    if (!gameActive) return;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentMode === 0 ? currentQuestion.event : currentQuestion.year;

    // Получить все элементы опций
    const optionElements = document.querySelectorAll('.option');

    // Отметить правильные и неправильные ответы
    optionElements.forEach(element => {
        element.classList.remove('correct', 'incorrect');

        if (element.textContent === correctAnswer) {
            element.classList.add('correct');
        }

        if (element.textContent === selectedOption && selectedOption !== correctAnswer) {
            element.classList.add('incorrect');
        }
    });

    // Проверить правильность ответа
    if (selectedOption === correctAnswer) {
        score++;
        resultElement.textContent = 'Правильно! +1 очко';
        resultElement.classList.add('correct');
    } else {
        resultElement.textContent = `Неправильно! Правильный ответ: ${correctAnswer}`;
        resultElement.classList.add('incorrect');
    }

    // Обновить счет
    scoreElement.textContent = score;
    gameActive = false;
    nextBtn.disabled = false;
}

// Следующий вопрос
function nextQuestion() {
    if (currentQuestionIndex >= questions.length - 1) {
        endGame();
        return;
    }

    currentQuestionIndex++;
    gameActive = true;
    submitBtn.disabled = false;
    showQuestion();
}

// Конец игры
function endGame() {
    gameActive = false;
    questionElement.textContent = `Игра окончена! Ваш результат: ${score} из ${questions.length}`;
    optionsContainer.classList.add('hidden');
    inputContainer.classList.add('hidden');
    submitBtn.classList.add('hidden');
    nextBtn.classList.add('hidden');

    // Показать оценку
    let grade;
    let percentage = (score / questions.length) * 100;

    if (percentage >= 90) {
        grade = "Отлично! Вы знаток истории!";
    } else if (percentage >= 70) {
        grade = "Хорошо! Вы хорошо знаете историю!";
    } else if (percentage >= 50) {
        grade = "Удовлетворительно. Можно лучше!";
    } else {
        grade = "Попробуйте еще раз!";
    }

    resultElement.textContent = grade;
    resultElement.classList.add('correct');
    modeIndicator.textContent = '';
}

// Сменить режим игры
function toggleMode() {
    currentMode = (currentMode + 1) % 3; // Циклически переключаем 0→1→2→0

    const modeNames = ["Дата → Событие", "Событие → Дата", "Событие → Ввод даты"];
    modeElement.textContent = modeNames[currentMode];

    if (gameActive) {
        // Если игра активна, перезапустить с новым режимом
        initGame();
    }
}

// Получить описание текущего режима
function getModeDescription() {
    if (currentMode === 0) {
        return "Выберите событие, соответствующее указанному году";
    } else if (currentMode === 1) {
        return "Выберите год, соответствующий указанному событию";
    } else {
        return "Введите год или период для указанного события";
    }
}

// Обновить информацию об игре
function updateGameInfo() {
    questionCountElement.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    scoreElement.textContent = score;
}

// Перемешать массив
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// События кнопок
startBtn.addEventListener('click', initGame);
nextBtn.addEventListener('click', nextQuestion);
resetBtn.addEventListener('click', initGame);
modeToggleBtn.addEventListener('click', toggleMode);
submitBtn.addEventListener('click', checkInputAnswer);

// Разрешить отправку формы по Enter
yearFromInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkInputAnswer();
});

yearToInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkInputAnswer();
});

singleYearInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkInputAnswer();
});