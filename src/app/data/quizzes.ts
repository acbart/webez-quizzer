export class Quiz {
    constructor(
        private name: string,
        private questions: Question[],
    ) {}

    public addQuestion(question: Question): void {
        this.questions.push(question);
    }
    public getQuestions(): Question[] {
        return this.questions.slice();
    }
    public getQuestion(id: number): Question {
        return this.questions[id];
    }
}

export class Question {
    constructor(
        private id: string,
        private title: string,
        private body: string,
    ) {}

    public getId(): string {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getBody(): string {
        return this.body;
    }
}

export class MultipleChoiceQuestion extends Question {
    constructor(
        id: string,
        title: string,
        body: string,
        private options: string[],
        private correctAnswer: string,
    ) {
        super(id, title, body);
    }
}

export class ShortAnswerQuestion extends Question {
    constructor(
        id: string,
        title: string,
        body: string,
        private correctAnswer: string,
    ) {
        super(id, title, body);
    }
}
