// База данных исторических событий
const historicalEvents = [
    { year: "1894–1917 гг.", event: "царствование Николая II" },
    { year: "1898 г.", event: "1 съезд российской социал-демократической рабочей партии (РСДРП)" },
    { year: "1898 г.", event: "образование Московского художественного театра (МХТ)" },
    { year: "1899 г.,1907г.", event: "Гаагские конференции" },
    { year: "1902 г.", event: "образование партии социал-революционеров (эсеров)" },
    { year: "1903 г.", event: "II съезд РСДРП. Рождение большевизма" },
    { year: "1904–1905 гг.", event: "русско-японская война" },
    { year: "1904-1907гг.", event: "оформление Антанты" },
    { year: "23 августа 1905 г.", event: "заключение Портсмутского мира" },
    { year: "1905–1907 гг.", event: "первая русская революция" },
    { year: "1905 г., 17 октября", event: "Высочайший Манифест о даровании свобод и учреждении Государственной думы" },
    { year: "1905 г., октябрь", event: "Конституционно-демократическая партия (кадеты)" },
    { year: "1905 г., ноябрь", event: "Союз 17 октября" },
    { year: "1906 г., апрель-июль", event: "время работы I Государственной Думы" },
    { year: "1906 г.", event: "начало проведения аграрных реформ Столыпина" },
    { year: "1907 г., февраль-июль", event: "время работы II Государственной Думы" },
    { year: "1914 г., июль – 1918, ноябрь", event: "Первая мировая война" },
    { year: "1917 г., 23 февраля – 2 марта", event: "Февральская буржуазно-демократическая революция" },
    { year: "1917 г., 2 марта", event: "отречение Николая II. Временное правительство. Двоевластие." },
    { year: "1917г., 24–26 октября", event: "вооруженное восстание в Петрограде. II съезд Советов. Декрет о мире. Образование советского правительства" },
    { year: "1918–1922 гг.", event: "Гражданская война" },
    { year: "1918 г., 5–6 января", event: "первое заседание и роспуск Учредительного собрания" },
    { year: "12 января 1918г.", event: "принятие Декларации прав трудящегося и эксплуатируемого народа III съездом Советов" },
    { year: "1918 г., 3 марта", event: "Брестский мир" },
    { year: "10 июля 1918 года", event: "принятие Первой конституции РСФСР V съездом Советов" },
    { year: "1920, апрель – октябрь", event: "советско-польская война" },
    { year: "1920 г.", event: "Принятие плана по электрификации России (ГОЭЛРО)" },
    { year: "1921 г., 6–8 марта", event: "X съезд РКП (б). Переход к новой экономической политике (нэп)" },
    { year: "1922 г., 10 апреля –19 мая", event: "международная конференция в Генуе по финансовым и экономическим вопросам" },
    { year: "1922 г., 16 апреля", event: "Раппальский договор между РСФСР и Германией об установлении дипломатических и торговых отношений" },
    { year: "1922 г., август", event: "высылка из страны оппозиционно настроенных ученых и деятелей культуры" },
    { year: "1922, 30 декабря", event: "I съезд Советов СССР. Образование Союза Советских Социалистических республик" },
    { year: "1924 г, 31 января", event: "утверждение Конституции СССР" },
    { year: "1924 г., 2 февраля", event: "установление дипломатических отношений между СССР и Англией. Начало «полосы признания»" },
    { year: "1925 г.", event: "XIV съезд ВКП (б). Курс на индустриализацию" },
    { year: "1927 г.", event: "XV съезд ВКП (б). Курс на коллективизацию сельского хозяйства" },
    { year: "1928 г., октябрь – 1932 г., декабрь", event: "Первый пятилетний план развития народного хозяйства СССР" },
    { year: "1929 г.", event: "год «великого перелома», курс на сплошную коллективизацию" },
    { year: "1929 г.", event: "начало строительства в Сталинграде первого в СССР тракторного завода" },
    { year: "1930 г.", event: "основание в Сталинграде Тракторостроительного института" },
    { year: "1933 г.", event: "Сталинградский тракторостроительный институт переименовывается в Механический" },
    { year: "1933 г.", event: "установление дипломатических отношений между СССР и США" },
    { year: "1934 г., 18 сентября", event: "вступление СССР в Лигу наций" },
    { year: "1934 г., декабрь", event: "убийство С.М. Кирова. Начало массовых сталинских репрессий" },
    { year: "1935 г., май", event: "открытие московского метрополитена" },
    { year: "1935 г.", event: "отменены социальные ограничения при поступлении в вузы" },
    { year: "1936 г.", event: "принятие Конституции СССР" },
    { year: "1939 г., 23 августа", event: "заключение договора о ненападении между СССР и Германией («пакт Молотова – Риббентропа) и секретных протоколов к нему" },
    { year: "1939 г., 1 сентября – 2 сентября 1945 г.", event: "Вторая мировая война" },
    { year: "1939 г., 17 сентября", event: "ввод советских войск в Польшу" },
    { year: "1939 г., сентябрь", event: "договор с Германией о «Дружбе и границе»" },
    { year: "1939 г., ноябрь – 1940, март", event: "советско-финская война" },
    { year: "1939 г., ноябрь –1940 г., август", event: "включение в состав СССР Западной Украины и Западной Белоруссии, Бессарабии и Северной Буковины, Латвии, Литвы и Эстонии" },
    { year: "1940 г., 18 декабря", event: "подписание Гитлером Директивы № 21 – «План Барбаросса» (план нападения на СССР)" },
    
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
