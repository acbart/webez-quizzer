import { BindInnerHTML, EzComponent } from "@gsilber/webez";
import html from "./viewQuiz.component.html";
import css from "./viewQuiz.component.css";
import { ViewQuestionComponent } from "../viewQuestion/viewQuestion.component";
import { ViewMultipleChoiceComponent } from "../components/viewMultipleChoice/viewMultipleChoice.component";

export class ViewQuizComponent extends EzComponent {
    @BindInnerHTML("name")
    private name: string = "Untitled Quiz";
    private viewQuestions: ViewQuestionComponent[] = [];

    constructor() {
        super(html, css);
    }

    addQuestion(title: string, body: string, id: string): void {
        const viewQuestion: ViewQuestionComponent = new ViewQuestionComponent(
            title,
            body,
            id,
        );
        this.viewQuestions.push(viewQuestion);
        this.addComponent(viewQuestion);
    }

    addMultipleChoiceQuestion(
        title: string,
        body: string,
        id: string,
        options: string[],
        correctOption: string,
    ): void {
        const viewQuestion = new ViewMultipleChoiceComponent(
            title,
            body,
            id,
            options,
            correctOption,
        );
        this.viewQuestions.push(viewQuestion);
        this.addComponent(viewQuestion);
    }

    setName(name: string): void {
        this.name = name;
    }
}
