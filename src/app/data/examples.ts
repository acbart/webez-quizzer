import { MultipleChoiceQuestion, Quiz } from "./quizzes";

export const EXAMPLES: Quiz[] = [
    new Quiz("Spanish Basics", [
        new MultipleChoiceQuestion(
            "1",
            "HelloWorld",
            "What is the Spanish word for 'hello'?",
            ["Hola", "Adios", "Buenos Dias", "Gracias"],
            "Hola",
        ),
    ]),
];
