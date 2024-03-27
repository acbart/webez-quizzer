import { describe, expect, test, beforeAll } from "@jest/globals";
import { ViewMultipleChoiceOptionComponent } from "./viewMultipleChoiceOption.component";
import { bootstrap } from "@gsilber/webez";

describe("ViewMultipleChoiceOptionComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<ViewMultipleChoiceOptionComponent>(ViewMultipleChoiceOptionComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(ViewMultipleChoiceOptionComponent);
        });
    });
});
