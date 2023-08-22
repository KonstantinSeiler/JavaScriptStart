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


const questions = [
    {
        text: 'Загадка один',
        variants: {
            a: 'Правильный ответ',
            b: 'Неверный ответ',
            c: 'Совсем неврный ответ',
            d: 'Очень, очень плохой ответ'
        },
        correctAnswerIndex: 'a',
    },

    {
        text: 'Загадка два',
        variants: {
            a: 'Совсем неврный ответ',
            b: 'Очень, очень плохой ответ',
            c: 'Правильный ответ',
            d: 'Неверный ответ',
        },
        correctAnswerIndex: 'c',
    },

    {
        text: 'Загадка три',
        variants: {
            a: 'Совсем неврный ответ',
            b: 'Неверный ответ',
            c: 'Очень, очень плохой ответ',
            d: 'Правильный ответ',
        },
        correctAnswerIndex: 'd',
    },

    {
        text: 'Загадка четыре',
        variants: {
            a: 'Очень, очень плохой ответ',
            b: 'Правильный ответ',
            c: 'Совсем неврный ответ',
            d: 'Неверный ответ',
        },
        correctAnswerIndex: 'b',
    },

    {
        text: 'Загадка пять',
        variants: {
            a: 'Совсем неврный ответ',
            b: 'Очень, очень плохой ответ',
            c: 'Неверный ответ',
            d: 'Правильный ответ',
        },
        correctAnswerIndex: 'd',
    },
];

const game = {
    questions,
    scoreCount: 0,
    questionIndex: 0,

    init() {
        this.scoreCount = 0;
        this.questionIndex = 0;
    },

    run() {
        this.init();
        alert('Здравствуйте, добро пожаловать в игру "Кто хочет стать миллионером"');

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

    validateAnswer(userAnswer) {
        return ['exit', 'a', 'b', 'c', 'd'].indexOf(userAnswer) !== -1;
    },

    userWantExit(userAnswer) {
        return userAnswer === 'exit';
    },

    isAnswerCorrect(userAnswer) {
        return this.questions[this.questionIndex].correctAnswerIndex === userAnswer;
    },

    isGameOver() {
        return this.questionIndex > 4;
    }

};

game.run();
