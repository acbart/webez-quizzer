import { EzComponent } from "@gsilber/webez";
import html from "./viewQuiz.component.html";
import css from "./viewQuiz.component.css";
import { Question, Quiz } from "../data/quizzes";
import { ViewQuestionComponent } from "../viewQuestion/viewQuestion.component";

export class ViewQuizComponent extends EzComponent {
    private viewQuestions: ViewQuestionComponent[] = [];
    constructor(private quiz: Quiz = new Quiz("Untitled Quiz", [])) {
        super(html, css);

        this.quiz.getQuestions().forEach((question: Question) => {
            const viewQuestion = new ViewQuestionComponent(question);
            this.addComponent(viewQuestion);
            this.viewQuestions.push(viewQuestion);
        });
    }
}
