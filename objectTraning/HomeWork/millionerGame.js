// На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать
// миллионером?».
// Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь
// методы, например
// метод run, возможно метод init и т.д.
// В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
// Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
// предлагать варианты
// ответов в виде теста, например:
// Сколько букв в слове "привет":
// a. Пять.
// b. Шесть.
// c. Семь.
// d. Куда я попал?
// Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
// По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
// предложить
// сыграть снова.
// Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.


const question = [
    {
        text: 'Одним из направлений какой религиозной философии является учение дзен?',
        variants: {
            a: 'Даосизм',
            b: 'Индуизм',
            c: 'Иудаизм',
            d: 'Буддизм',
        },
        сorrectAnswerIndex: 'd',
   
},


    {
    text: 'С какой фигуры начинаются соревнования по городошному спорту?',
    variants: {
        a: 'Часовые',
        b: 'Артиллерия',
        c: 'Пулеметное гнездо',
        d: 'Пушка',
    },
    сorrectAnswerIndex: 'd',
},


    {
    text: 'Кто из перечисленных был пажом во времена Екатерины II?',
    variants: {
        a: 'Д. И. Фонвизин',
        b: 'Г. Р. Державин',
        c: 'А. Н. Радищев',
        d: 'Н. М. Карамзин',
    },
    сorrectAnswerIndex: 'с',
},

    {
    text: 'Какой химический элемент назван в честь злого подземного гнома?',
    variants: {
        a: 'Гафний',
        b: 'Кобальт',
        c: 'Бериллий',
        d: 'Теллур',
    },
    сorrectAnswerIndex: 'b',
},


    {
    text: 'Сколько раз в сутки подзаводят куранты Спасской башни Кремля?',
    variants: {
        a: 'Один',
        b: 'Два',
        c: 'Три',
        d: 'Четыре',
    },
    сorrectAnswerIndex: 'b',
},

];

const game = {
    question,
    scoreCount: 0,
    questionIndex: 0,

    init() {
        this.scoreCount = 0;
        this.questionIndex = 0;
    },



    run() {
        this.init();
        alert('Привет, Игра "Кто хочет стать миллионером"');

        while (true) {
        const answer = this.getAnswer();

        if (this.userWantExit(answer)) {
            alert('До свидания');
            break;
        }

        if (this.isAnswerCorrect(answer)) {
            alert('Это правильный ответ!');
            this.scoreCount++;
        }else {
            alert('К сожалению, это ошибка');
        }

        this.questionIndex++;

        if (this.isGameOver()) {
            alert(`Ваш счет: ${this.scoreCount}.`);

            if(!confirm('Хотите сыграть еще одну игру?')) {
                break;
            }

            this.init();
        }
    }
},


getAnswer() {
    while (true) {
        let answer = prompt(this.getCurrentQuestionString());

        if (answer === null) {
            alert('Если вы хотите выйти из игры, наберите "exit".');
            continue;
        }

        answer = answer.trim().toLowerCase();

        if (!this.validateAnswer(answer)) {
            alert('Необходимо выбрать один из предложенных вариантов ответа');
            continue;
        }

        return answer;
    }
},


getCurrentQuestionString() {
    const question = this.questions[this.questionIndex];

    let questionString = `Вопрос: ${question.text} \n\nВарианты ответов:\n`;
    for (const key in question.variants) {
        if (question.variants.hasOwnProperty(key)) {
            questionString += `${key} - ${question.variants[key]}\n`;
        }
    }

    return questionString;
},
