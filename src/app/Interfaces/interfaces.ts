export interface Answer {
  label: string;
  answer_id: string;
  question_id: string;
}
export interface Question {
  title: string;
  id: string;
}

export interface Statistics {
  agree: number;
  neutral: number;
  disagree: number;
  title: string;
}
export interface SideBarRow {
  icon: string;
  label: string;
}

export interface DemographicQuestion {
  question: string;
  answers: string[];
  title: string;
  questionId: string;
}

export interface Message {
  severity: string;
  summary: string;
  detail: string;
}
