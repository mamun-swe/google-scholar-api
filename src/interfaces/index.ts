
export interface IRequestQuery {
    scholar_user_id?: string
}

export interface IUserID {
    scholar_user_id: string
}

export interface IArticalByUserId {
    title: string,
    url: string,
    authors: string[],
    year: number,
    numCitations: number,
    journal: string,
    volume: number,
    issue: number,
    pages: string
}