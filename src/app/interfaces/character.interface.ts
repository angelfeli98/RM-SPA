
export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   LocationShort;
    location: LocationShort;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface LocationShort {
    name: string;
    url:  string;
}