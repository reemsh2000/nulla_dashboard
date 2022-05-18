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
export interface AgeStatistics {
    Adolescence: number; //18-24
    Earlyadulthood: number; //24-34
    Midlife: number; //35-44
    Matureadulthood: number; //
}
export interface SideBarRow {
    icon : string;
    label : string;
}
export interface LoactionStatistics{
    londen: number;
    magrate: number;
    others: number;
}
