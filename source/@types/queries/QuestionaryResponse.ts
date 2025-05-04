export interface QuestionaryResponse {
    fan: Fan;
}

interface Fan {
    id: number;
    name: string;
    documentNumber: string;
    email: string;
    interests: string[];
    events: string[];
    aboutYou: string;
    document: string;
}
