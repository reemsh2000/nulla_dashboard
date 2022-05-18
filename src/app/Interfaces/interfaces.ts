export interface Answer {
    label: string;
    answer_id: string;
    question_id: string;
};
export interface Question {
    question: string;
    id: string;
}

export interface Statistics {
    agree: number;
    neutral: number;
    disagree: number;
    title:string;
}
export interface SideBarRow {
    icon : string;
    label : string;
}

