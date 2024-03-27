import { describe, expect, test, beforeAll } from "@jest/globals";
import { ViewMultipleChoiceComponent } from "./viewMultipleChoice.component";
import { bootstrap } from "@gsilber/webez";

describe("ViewMultipleChoiceComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ViewMultipleChoiceComponent>(ViewMultipleChoiceComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ViewMultipleChoiceComponent);
        });
    });
});
