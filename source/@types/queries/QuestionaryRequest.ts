export interface QuestionaryRequest {
    Name: string;
    DocumentNumber: string;
    Email: string;
    Interests: string[];
    Events: string[];
    AboutYou: string;
    Document: File;
}