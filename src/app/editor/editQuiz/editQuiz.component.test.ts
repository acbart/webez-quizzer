import { describe, expect, test, beforeAll } from "@jest/globals";
import { EditQuizComponent } from "./editQuiz.component";
import { bootstrap } from "@gsilber/webez";

describe("EditQuizComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<EditQuizComponent>(EditQuizComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(EditQuizComponent);
        });
    });
});
