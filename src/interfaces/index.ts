
export interface IRequestQuery {
    scholar_user_id?: string,
    query?: string
}

export interface IUserID {
    scholar_user_id: string
}

export interface IQuery {
    query: string
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

export interface IArticalByQuery {
    title: string,
    url: string,
    authors: string[],
    year: number,
    numCitations: number,
    description: string,
    citationUrl: string,
    relatedUrl: string,
    urlVersionsList: string,
    publication: string
}