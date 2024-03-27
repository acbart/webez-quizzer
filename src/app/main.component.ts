import html from "./main.component.html";
import css from "./main.component.css";
import { BindStyle, Click, EzComponent } from "@gsilber/webez";
import { ViewQuizComponent } from "./viewQuiz/viewQuiz.component";
import { EditQuizComponent } from "./editor/editQuiz/editQuiz.component";

/**
 * @description MainComponent is the main component of the app
 * @extends EzComponent
 *
 */
export class MainComponent extends EzComponent {
    @BindStyle("editor", "display")
    private editorVisible: string = "none";
    @BindStyle("viewer", "display")
    private viewVisible: string = "block";

    private isEditing = false;
    private isTaking = false;
    private viewQuiz: ViewQuizComponent;
    private editQuiz: EditQuizComponent;

    constructor() {
        super(html, css);

        this.viewQuiz = new ViewQuizComponent();
        this.addComponent(this.viewQuiz, "viewer");
        this.editQuiz = new EditQuizComponent();
        this.addComponent(this.editQuiz, "editor");

        this.listenForSave();

        this.createSpanishQuiz();
    }

    @Click("edit")
    changeEditingStatus(): void {
        this.isEditing = !this.isEditing;
        if (this.isEditing) {
            this.isTaking = false;
            this.editorVisible = "block";
            this.viewVisible = "none";
            this.editQuiz.setTitle(this.viewQuiz.getName());
        } else {
            this.editorVisible = "none";
            this.viewVisible = "block";
        }
    }

    private listenForSave(): void {
        this.editQuiz.saving.subscribe(() => {
            this.viewQuiz.setName(this.editQuiz.getTitle());
        });
    }

    onSave(): void {
        this.viewQuiz.setName(this.editQuiz.getTitle());
    }

    createSpanishQuiz(): void {
        this.viewQuiz.setName("Spanish Vocabulary");
        this.viewQuiz.addQuestion(
            "Spanish Vocabulary",
            "What is word for 'to eat' in spanish?",
            "1",
        );
        this.viewQuiz.addQuestion(
            "Spanish Vocabulary",
            "What is word for 'to drink' in spanish?",
            "2",
        );
        this.viewQuiz.addMultipleChoiceQuestion(
            "Spanish Vocabulary",
            "What is the Spanish word for 'hello'?",
            "3",
            ["Hola", "Adios", "Buenos Dias", "Gracias"],
            "Hola",
        );
    }
}
