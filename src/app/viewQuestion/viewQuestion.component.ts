import { BindInnerHTML, EzComponent } from "@gsilber/webez";
import html from "./viewQuestion.component.html";
import css from "./viewQuestion.component.css";
import { Question } from "../data/quizzes";

export class ViewQuestionComponent extends EzComponent {
    @BindInnerHTML("title")
    private currentTitle: string = "Untitled Question";
    @BindInnerHTML("body")
    private currentBody: string = "This is a question.";
    @BindInnerHTML("id")
    private currentId: string = "";

    constructor(
        private question: Question = new Question(
            "",
            "Untitled Question",
            "No Question Text Available",
        ),
    ) {
        super(html, css);
        this.currentTitle = question.getTitle();
        this.currentBody = question.getBody();
        this.currentId = question.getId();
    }
}
